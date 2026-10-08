#!/usr/bin/env python3
"""reddit-topics.py — what Brazilians are actually asking about the fatura,
parcelas, debt and the monthly budget.

Feeds the weekly blog job (see scripts/BLOG_POST_PROMPT.md) with real reader
demand instead of whatever the model imagines a reader worries about. Each
uncovered theme is also mapped onto the matching Backlog row(s) of
BLOG_CONTENT_PLAN.md, so the brief can pick "the strongest demand that the SEO
plan already has a keyword for".

    python3 tools/reddit-topics.py                 # ranked digest, ~60 lines
    python3 tools/reddit-topics.py --json          # same data, machine-readable
    python3 tools/reddit-topics.py --refresh       # ignore the cache

WHY RSS AND NOT THE JSON API: reddit.com/r/<sub>/top.json returns 403 to both a
datacenter IP and a home IP now. The Atom feed at /r/<sub>/top/.rss is still
served, so that is what this uses. It is rate-limited though: hammer it and you
get 429s, which is why requests are paced, retried with backoff, and cached to
.cache/ for a day.

WHY A SCRIPT AND NOT A FEW CURL COMMANDS IN THE BRIEF: the Hermes agent's
terminal blocks `-c` / `-e` flags, so `python3 -c '...'` and clever one-liners
fail at runtime with BLOCKED. And raw feeds are ~50 KB each — a dozen of them
would bury the model's context. A plain command that prints a small digest
survives both constraints.

Failure is not fatal: if every feed fails, this exits 2 having printed a clear
message, and the brief falls back to the Backlog in BLOG_CONTENT_PLAN.md.

Stdlib only — it runs inside the Hermes container, where there is no pip.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHE = ROOT / ".cache" / "reddit-topics"
POSTS = ROOT / "src" / "content" / "blog"
PLAN = ROOT / "BLOG_CONTENT_PLAN.md"

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36")
ATOM = {"a": "http://www.w3.org/2005/Atom"}

# ORDER MATTERS. Reddit rate-limits hard and the time budget truncates the tail,
# so this is a priority list, highest-value first. Checked to exist and carry
# recent posts on 2026-10-08 (r/conselhodefinancas does NOT exist — it 302s).
#   - r/financaspessoais is the best fit by far: its /top is "estou devendo",
#     "nome sujo", "quanto guardar do salário", "Nubank juros altíssimos".
#   - r/investimentos is the biggest pt-BR money sub. Its /top is mostly
#     milestone brags ("bati 100k"), but the debt/fatura questions that do reach
#     /top there are exactly our reader.
#   - r/conselhos and r/desabafos are general advice/venting subs where "a
#     fatura veio", "estou endividado" and "dividir as contas com o namorado"
#     come up; noisy, but the NOISE/question filter handles that.
#   - r/brasil is last: huge, mostly news, a lottery ticket for money questions.
SUBREDDITS = [
    "financaspessoais", "investimentos", "conselhos", "desabafos", "brasil",
]
WINDOWS = ["month", "year"]

# Theme buckets. A title can land in several; each is counted once per theme.
# Keywords are written in normal pt-BR (with accents); both they and the titles
# are lower-cased and accent-stripped before matching, so "cartão" also matches
# a title typed as "cartao" — which is how half of Reddit writes it.
#
# Deliberately NO investing themes (ações, FII, Tesouro, CDB, cripto): they
# dominate r/investimentos and would win every week, but the blog's beat is the
# fatura, parcelas and the monthly budget (see the brief's "Focus areas").
THEMES: dict[str, tuple[str, list[str]]] = {
    "fatura": ("Fatura do cartão: veio alta, não fecha, como pagar", [
        "fatura", "faturas", "fatura alta", "fatura veio", "pagar a fatura",
        "fatura atrasada", "atrasei a fatura", "fechamento", "vencimento",
        "melhor dia de compra"]),
    "rotativo-minimo": ("Rotativo, pagamento mínimo e parcelar a fatura", [
        "rotativo", "pagamento mínimo", "pagar o mínimo", "mínimo da fatura",
        "parcelar a fatura", "parcelamento da fatura", "juros do cartão",
        "juros do cartao", "juros altos", "juros altíssimos", "juros abusivos"]),
    "parcelas": ("Compras parceladas: vale a pena, quantas, quanto compromete", [
        "parcela", "parcelado", "parcelada", "parcelar", "parcelamento",
        "sem juros", "à vista", "12x", "10x", "6x", "em vezes"]),
    "limite": ("Limite do cartão: baixo, ocupado, aumento", [
        "limite", "aumento de limite", "limite do cartão", "limite baixo",
        "limite bloqueado"]),
    "dividas": ("Dívidas, nome sujo e renegociação", [
        "dívida", "endividado", "endividada", "nome sujo", "negativado",
        "negativada", "serasa", "spc", "desenrola", "renegociar", "renegociação",
        "quitar", "acordo com o banco", "cobrança", "score", "devendo",
        "sujar o nome", "nome limpo", "sair do buraco", "no buraco"]),
    "orcamento": ("Orçamento do mês e controle de gastos", [
        "orçamento", "controlar gastos", "controle de gastos", "controle financeiro",
        "controlar meus gastos", "organizar as finanças", "organizar minhas finanças",
        "organização financeira", "planilha", "anotar gastos", "gastos mensais",
        "onde foi parar", "para onde vai", "pra onde vai", "app de finanças",
        "aplicativo de finanças"]),
    "salario-curto": ("Salário que não chega no fim do mês", [
        "ganho pouco", "salário mínimo", "fim do mês", "final do mês",
        "passar o mês", "sobrar dinheiro", "não sobra", "nao sobra",
        "sobreviver com", "mês apertado", "ganho 2k", "ganho 3k", "ganho 1.500",
        "1 salário", "um salário"]),
    "reserva": ("Reserva de emergência e imprevistos", [
        "reserva de emergência", "reserva", "imprevisto", "imprevistos",
        "emergência"]),
    "poupar": ("Quanto guardar por mês e como começar a poupar", [
        "guardar dinheiro", "dinheiro guardado", "guardar por mês", "quanto guardar",
        "poupar", "economizar por mês", "juntar dinheiro", "% do salário",
        "porcentagem do salário", "50/30/20", "patinando"]),
    "apostas": ("Bets, apostas e o buraco no orçamento", [
        "bet", "bets", "apostas", "aposta", "tigrinho", "cassino", "jogo do bicho"]),
    "casal-familia": ("Dinheiro a dois e em família: dividir contas, ajudar os pais", [
        "casal", "namorado", "namorada", "marido", "esposa", "noivo", "noiva",
        "morar junto", "morar juntos", "dividir as contas", "dividir contas",
        "conta conjunta", "meus pais", "meu pai", "minha mãe", "minha família",
        "sustentar", "ajudar em casa", "filho", "filha", "cartão adicional"]),
    "cartoes": ("Quantos cartões ter, anuidade, cashback e milhas", [
        "quantos cartões", "segundo cartão", "cartão novo", "cancelar o cartão",
        "cancelar cartão", "anuidade", "cashback", "milhas", "pontos do cartão"]),
    "assinaturas": ("Assinaturas e gastos recorrentes", [
        "assinatura", "assinaturas", "streaming", "netflix", "spotify",
        "recorrente", "recorrentes", "mensalidade"]),
    "impulso": ("Compras por impulso e gastar menos", [
        "impulso", "compulsivo", "compulsiva", "consumismo", "gastar menos",
        "economizar", "parar de gastar", "gasto demais", "gastando demais",
        "shopee", "shein", "black friday"]),
    "renda-extra-sazonal": ("13º, férias, PLR e dinheiro extra", [
        "13º", "décimo terceiro", "13o salário", "férias", "plr", "restituição",
        "dinheiro extra", "bônus", "rescisão", "fgts"]),
    "renda-variavel": ("MEI, autônomo, freela: renda que muda todo mês", [
        "mei", "autônomo", "autônoma", "freela", "freelancer", "pj", "renda variável",
        "renda extra", "comissão", "uber", "ifood entregador"]),
    "emprestimo-financiamento": ("Empréstimo, consignado, financiamento e consórcio", [
        "empréstimo", "consignado", "financiamento", "financiar", "consórcio",
        "carro", "moto", "apartamento", "imóvel"]),
    "vale-refeicao": ("Vale-refeição e vale-alimentação no orçamento", [
        "vale-refeição", "vale refeição", "vale-alimentação", "vale alimentação",
        "vr", "alelo", "pluxee", "sodexo", "caju", "ticket alimentação"]),
    "golpes": ("Golpes, compra não reconhecida e contestação", [
        "golpe", "golpes", "fraude", "clonado", "clonaram", "não reconheço",
        "compra não reconhecida", "contestar", "contestação", "estorno", "chargeback"]),
}

# Titles that are jokes, brag-posts, news or venting with no question in them.
# r/investimentos /top is dominated by "bati 100k" milestone posts.
NOISE = [
    "kkk", "kkkk", "meme", "shitpost", "humor", "zoeira", "[oc]", "print",
    "bati", "cheguei nos", "cheguei aos", "rumo aos", "rumo ao", "primeiro milhão",
    "primeiros mil", "clube do", "batendo", "post de", "conquista", "consegui",
    "finalmente quitei", "olha isso", "olhem isso", "vejam isso",
    "good night", "reação dos especialistas", "diz que", "governo", "lula",
    "bolsonaro", "haddad", "selic cai", "selic sobe", "dólar", "dolar",
    "ibovespa", "bitcoin", "cripto",
    # Rhetorical / venting. These carry a "?" or a question word, but they are
    # community discourse, not queries.
    "só eu", "so eu", "mais alguém sente", "na moral", "opinião impopular",
    "unpopular opinion", "desabafo:", "rant", "vocês já repararam", "ninguém fala",
    "por que as pessoas", "pq as pessoas", "não aguento mais", "nao aguento mais",
    "alguém mais", "alguem mais",
]

TAG_QUESTION = re.compile(r"\b(ne|certo|nao e|ne nao|ou sou so eu)\s*[?!]+\s*$")
QUESTION_WORDS = [
    "como", "qual", "quais", "quanto", "quantos", "quantas", "por que", "porque",
    "pq", "vale a pena", "devo", "duvida", "ajuda", "ajudem", "conselho",
    "conselhos", "dica", "dicas", "alguem", "o que fazer", "socorro", "melhor",
    "e normal", "faz sentido", "sugestao", "sugestoes", "recomenda", "pfv",
    "preciso", "posso", "consigo", "compensa", " ou ", " vs ", "o que voces",
    "voces acham", "o que faco", "o que eu faco", "help",
]


def cache_path(sub: str, window: str) -> Path:
    return CACHE / f"{sub}-{window}.xml"


def read_cache(path: Path) -> str | None:
    try:
        return path.read_text(encoding="utf-8")
    except OSError:
        return None


def save_cache(path: Path, body: str, verbose: bool) -> None:
    """Best effort. A read-only checkout must not cost us a fetched feed."""
    try:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(body, encoding="utf-8")
    except OSError as e:
        if verbose:
            print(f"  (cache not written: {e.__class__.__name__})", file=sys.stderr)


def fetch(sub: str, window: str, pace: float, ttl: int, refresh: bool,
          verbose: bool, deadline: float) -> tuple[str | None, bool]:
    """Return (xml, from_cache). None means this feed is unavailable.

    Reddit rate-limits anonymous RSS hard — 429 is the normal response to any
    enthusiasm — so requests are paced, backed off, and finally given up on.
    Progress goes to stderr on every feed: a scheduled run is killed after 600s
    of silence, and the backoffs alone can exceed that.
    """
    path = cache_path(sub, window)
    if not refresh and path.exists() and (time.time() - path.stat().st_mtime) < ttl:
        cached = read_cache(path)
        if cached:
            if verbose:
                print(f"  r/{sub:<20} [{window}] cached", file=sys.stderr)
            return cached, True

    url = f"https://www.reddit.com/r/{sub}/top/.rss?t={window}"
    for attempt in range(4):
        if time.time() > deadline:
            if verbose:
                print(f"  r/{sub:<20} [{window}] skipped (time budget spent)", file=sys.stderr)
            break
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA,
                                                       "Accept": "application/atom+xml"})
            with urllib.request.urlopen(req, timeout=25) as r:
                body = r.read().decode("utf-8", "replace")
            save_cache(path, body, verbose)
            if verbose:
                print(f"  r/{sub:<20} [{window}] ok", file=sys.stderr)
            time.sleep(pace)
            return body, False
        except urllib.error.HTTPError as e:
            if e.code in (429, 503) and attempt < 3:
                wait = 30 * (attempt + 1)
                if verbose:
                    print(f"  r/{sub:<20} [{window}] {e.code} — waiting {wait}s",
                          file=sys.stderr)
                time.sleep(min(wait, max(0.0, deadline - time.time())))
                continue
            if verbose:
                print(f"  r/{sub:<20} [{window}] unavailable (HTTP {e.code})", file=sys.stderr)
            break
        except Exception as e:                                    # network, DNS, timeout
            if verbose:
                print(f"  r/{sub:<20} [{window}] unavailable ({type(e).__name__})",
                      file=sys.stderr)
            break

    stale = read_cache(path) if path.exists() else None            # stale beats nothing
    if stale:
        if verbose:
            print(f"  r/{sub:<20} [{window}] using stale cache", file=sys.stderr)
        return stale, True
    return None, False


def titles_from(xml: str) -> list[str]:
    try:
        root = ET.fromstring(xml)
    except ET.ParseError:
        return []
    out = []
    for entry in root.findall("a:entry", ATOM):
        node = entry.find("a:title", ATOM)
        if node is not None and node.text:
            out.append(re.sub(r"\s+", " ", node.text).strip())
    return out


# Reddit titles are full of smart punctuation. Normalise it before matching, or
# a pattern like ", né?" misses «"caro", né?» purely on quote style.
_SMART = str.maketrans({"‘": "'", "’": "'", "“": '"', "”": '"',
                        "–": "-", "—": "-", "…": "...",
                        "º": "o", "ª": "a"})        # 13º -> 13o, 1ª -> 1a


def fold(text: str) -> str:
    """Lower-case, smart punctuation flattened, accents stripped."""
    text = text.translate(_SMART).lower()
    text = unicodedata.normalize("NFKD", text)
    return "".join(c for c in text if not unicodedata.combining(c))


# Short keywords must match on word boundaries, with an optional plural "s".
# Plain substring matching would put "meio" under MEI and "carrossel" under
# carro; a strict boundary would miss "parcelas". Multi-word phrases stay
# substring matches, since those are specific enough on their own.
_BOUNDARY_CACHE: dict[str, re.Pattern] = {}


def _matches(word: str, low: str) -> bool:
    """`word` must already be folded; `low` is a folded, space-padded title."""
    if " " in word or len(word) > 9:
        return word in low
    pat = _BOUNDARY_CACHE.get(word)
    if pat is None:
        pat = _BOUNDARY_CACHE[word] = re.compile(
            rf"(?<![a-z0-9]){re.escape(word)}s?(?![a-z0-9])")
    return bool(pat.search(low))


_FOLDED_THEMES = {k: [fold(w) for w in words] for k, (_, words) in THEMES.items()}
_FOLDED_NOISE = [fold(n) for n in NOISE]
_FOLDED_QUESTIONS = [fold(q) for q in QUESTION_WORDS]


def is_useful(title: str) -> bool:
    low = f" {fold(title)} "
    if len(title) < 12:              # "Ajuda com Bets" (14) is a real question
        return False
    if any(_matches(n, low) for n in _FOLDED_NOISE):
        return False
    if TAG_QUESTION.search(low):
        return False
    # All-caps venting posts carry no query intent.
    letters = [c for c in title if c.isalpha()]
    if letters and sum(c.isupper() for c in letters) > len(letters) * 0.6:
        return False
    return any(_matches(w, low) for w in _FOLDED_QUESTIONS) or "?" in title


def themes_of(text: str) -> list[str]:
    low = f" {fold(text)} "
    return [key for key, words in _FOLDED_THEMES.items()
            if any(_matches(w, low) for w in words)]


def _frontmatter(path: Path) -> dict[str, str]:
    """title / keyword from a post's YAML front matter (no YAML parser: stdlib)."""
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return {}
    head = text[3:].split("\n---", 1)[0]
    out = {}
    for line in head.split("\n"):
        if ":" in line and not line.startswith((" ", "\t", "-")):
            k, v = line.split(":", 1)
            out[k.strip()] = v.strip().strip('"').strip("'")
    return out


def covered_themes(posts_dir: Path = POSTS) -> dict[str, list[str]]:
    """Map theme -> [slugs] for themes an existing post already addresses.

    Matched against the target keyword and the slug only (the title only when
    a post has no keyword). Titles carry secondary words: "Como planejar o 13º
    salário: quitar dívidas, guardar e gastar" would otherwise mark the whole
    debt theme as covered by a post that is about the 13º.
    """
    out: dict[str, list[str]] = {}
    if not posts_dir.is_dir():
        return out
    for path in sorted(posts_dir.glob("*.md")):
        fm = _frontmatter(path)
        subject = f"{fm.get('keyword') or fm.get('title', '')} {path.stem.replace('-', ' ')}"
        for key in themes_of(subject):
            out.setdefault(key, []).append(path.stem)
    return out


def backlog(plan: Path = PLAN) -> list[dict]:
    """Rows of the '## Backlog' table in BLOG_CONTENT_PLAN.md.

    Columns: # | Working title | Keyword idea | Funnel | Notes. Returns
    [{num, title, keyword, funnel, themes}] — themes from title + keyword.
    """
    try:
        text = plan.read_text(encoding="utf-8")
    except OSError:
        return []
    m = re.search(r"^## Backlog.*?$(.*?)(?=^## |\Z)", text, re.M | re.S)
    if not m:
        return []
    rows = []
    for line in m.group(1).split("\n"):
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) < 4 or not cells[0].isdigit():
            continue                                  # header, separator, prose
        num, title, keyword, funnel = cells[:4]
        rows.append({"num": int(num), "title": title, "keyword": keyword,
                     "funnel": funnel, "themes": themes_of(f"{title} {keyword}")})
    return rows


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--subs", help="comma-separated subreddits (default: the pt-BR set)")
    ap.add_argument("--windows", default=",".join(WINDOWS), help="top windows: month,year")
    ap.add_argument("--pace", type=float, default=8.0, help="seconds between requests")
    ap.add_argument("--max-seconds", type=float, default=600.0,
                    help="total time budget; stops fetching and reports what it has")
    ap.add_argument("--ttl", type=int, default=20 * 3600, help="cache lifetime in seconds")
    ap.add_argument("--refresh", action="store_true", help="ignore the cache")
    ap.add_argument("--themes", type=int, default=8, help="how many themes to report")
    ap.add_argument("--examples", type=int, default=3, help="example titles per theme")
    ap.add_argument("--json", action="store_true", dest="as_json")
    ap.add_argument("--quiet", action="store_true", help="no progress on stderr")
    a = ap.parse_args()

    subs = [s.strip() for s in (a.subs.split(",") if a.subs else SUBREDDITS) if s.strip()]
    windows = [w.strip() for w in a.windows.split(",") if w.strip()]
    verbose = not a.quiet

    if verbose:
        print(f"Reading {len(subs)} subreddits x {len(windows)} windows "
              f"(~{a.pace:.0f}s apart, cached {a.ttl // 3600}h, "
              f"{a.max_seconds:.0f}s budget)...", file=sys.stderr)

    deadline = time.time() + a.max_seconds
    seen: set[str] = set()
    entries: list[tuple[str, str, int]] = []          # (title, sub, rank)
    ok = cached = failed = 0
    # Windows outer, subs inner: with a budget that truncates, every subreddit
    # should get its "month" feed before any subreddit gets its "year".
    for window in windows:
        for sub in subs:
            xml, from_cache = fetch(sub, window, a.pace, a.ttl, a.refresh, verbose, deadline)
            if xml is None:
                failed += 1
                continue
            ok += 1
            cached += 1 if from_cache else 0
            for rank, title in enumerate(titles_from(xml)):
                key = re.sub(r"[^a-z0-9]+", "", fold(title))[:60]
                if key in seen:
                    continue
                seen.add(key)
                entries.append((title, sub, rank))

    if not entries:
        print("reddit-topics: every feed failed (Reddit is blocking or offline).\n"
              "Fall back to the Backlog in BLOG_CONTENT_PLAN.md — that is expected "
              "and fine.", file=sys.stderr)
        return 2

    useful = [(t, s, r) for t, s, r in entries if is_useful(t)]
    covered = covered_themes()
    plan_rows = backlog()

    buckets: dict[str, dict] = {}
    for title, sub, rank in useful:
        for key in themes_of(title):
            b = buckets.setdefault(key, {
                "key": key, "label": THEMES[key][0], "count": 0, "weight": 0.0,
                "titles": [], "covered_by": covered.get(key, []),
                "plan": [f"#{r['num']} {r['keyword']} ({r['funnel']})"
                         for r in plan_rows if key in r["themes"]]})
            b["count"] += 1
            b["weight"] += 1.0 / (rank + 3)           # higher in /top = stronger demand
            b["titles"].append(title)

    ranked = sorted(buckets.values(), key=lambda b: (b["weight"], b["count"]), reverse=True)
    for b in ranked:
        b["weight"] = round(b["weight"], 2)
        b["titles"] = sorted(b["titles"], key=len)[-a.examples * 3:][::-1][:a.examples]

    fresh_themes = [b for b in ranked if not b["covered_by"]]
    done_themes = [b for b in ranked if b["covered_by"]]

    if a.as_json:
        print(json.dumps({
            "feeds_ok": ok, "feeds_failed": failed, "feeds_from_cache": cached,
            "posts_seen": len(entries), "posts_useful": len(useful),
            "themes": ranked,
            "backlog": [{k: v for k, v in r.items()} for r in plan_rows],
        }, indent=2, ensure_ascii=False))
        return 0

    print(f"REDDIT DEMAND — {ok} feeds ({cached} cached, {failed} unavailable), "
          f"{len(entries)} posts, {len(useful)} carrying a real question")
    print()
    print("UNCOVERED THEMES — strongest demand first (plano = matching Backlog row)")
    if not fresh_themes:
        print("  (every theme is already covered — write a fresher angle on a top one)")
    for i, b in enumerate(fresh_themes[:a.themes], 1):
        print(f"{i:2}. {b['label']}  [{b['key']}]  {b['count']} posts, weight {b['weight']}")
        print(f"      plano: {'; '.join(b['plan']) if b['plan'] else '— none, new keyword'}")
        for t in b["titles"]:
            print(f"      · {t[:110]}")
    print()
    print("ALREADY COVERED")
    for b in done_themes[:8]:
        slugs = sorted(set(b["covered_by"]))
        more = f" +{len(slugs) - 3}" if len(slugs) > 3 else ""
        print(f"  - {b['label']} ({b['count']}) → {', '.join(slugs[:3])}{more}")
    print()
    print("TOP QUESTION TITLES VERBATIM — the reader's own words, use them")
    on_topic = [e for e in useful if themes_of(e[0])]
    for title, sub, rank in sorted(on_topic, key=lambda e: e[2])[:15]:
        print(f"  · [r/{sub}] {title[:110]}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
