# MeuGrana — Blog Content Plan (pt-BR)

Adapted from the home-stories playbook: every post targets **one** low-competition
pt-BR keyword, answers the question people google *before* deciding they need an
app, and converts contextually (the post layout injects an App Store CTA banner
automatically; per-post clicks are tracked in Umami as
`app-store-click` / `blog-<slug>`).

## Strategy

- **Bottom-of-funnel first**: commercial-intent posts ("melhor app para…",
  comparisons) convert immediately even with low traffic.
- **pt-BR keywords** have far less competition than EN finance keywords, but the
  big SERPs are dominated by banks/fintechs (Nubank, Serasa, Mobills, InfoMoney).
  Target long-tail phrasings those players don't bother with.
- **One keyword per post.** Keyword goes in `keyword:` frontmatter, title, H1,
  first paragraph, and one H2.
- **Honesty is the moat**: no invented statistics, no fake reviews, no false
  claims about competitors. Recommend competitors where they genuinely fit.
- Cadence: **1–2 posts/week**, quality > volume. Expect compounding results in
  3–12 months.

> ⚠️ Search volumes below are **estimates by search-intent judgment** — they
> were not validated against Google Keyword Planner (no account access from
> this repo). Before writing each next post, spend 5 minutes: google the
> keyword, check who ranks (skip if the whole page 1 is Nubank/Serasa/major
> portals with exact-match titles), and check Keyword Planner if available.

## Published

| # | Slug | Keyword | Funnel | Status |
|---|------|---------|--------|--------|
| 1 | `melhor-app-para-controlar-parcelas` | app para controlar parcelas | Bottom | ✅ 2026-07-16 |
| 2 | `como-organizar-compras-parceladas` | como organizar compras parceladas | Mid | ✅ 2026-07-16 |
| 3 | `planilha-de-gastos-mensais-alternativa` | planilha de gastos mensais | Mid/Bottom | ✅ 2026-07-16 |
| 4 | `quanto-da-fatura-esta-comprometida` | fatura comprometida com parcelas | Mid | ✅ 2026-07-16 |
| 5 | `fatura-do-cartao-veio-alta-o-que-fazer` | fatura do cartão veio alta | Top | ✅ 2026-07-16 |
| 6 | `mobills-vs-organizze` | mobills ou organizze | Bottom | ✅ 2026-07-16 |

## Backlog (validate keyword before writing)

| # | Working title | Keyword idea | Funnel | Notes |
|---|---------------|--------------|--------|-------|
| 7 | 13º salário: como planejar (e não deixar sumir) | como planejar o 13º salário | Top | Seasonal — publish October/November |
| 8 | Vale a pena parcelar? Quando o parcelamento ajuda e quando vira bola de neve | vale a pena parcelar | Top | Links to posts 2 & 4 |
| 9 | Como funciona o fechamento da fatura do cartão | fechamento da fatura como funciona | Mid | Explains melhor dia de compra angle |
| 10 | Como sair do rotativo do cartão | como sair do rotativo | Top | Sensitive: practical, no rate claims, no financial-advice framing |
| 11 | App de finanças sem conectar o banco: por que escolher | app de finanças sem conectar banco | Bottom | Privacy angle, MeuGrana's differentiator |
| 12 | Quantos cartões de crédito ter (e como não se perder) | quantos cartões de crédito ter | Top | Multi-card pain → projection per card |
| 13 | Efeitos ocultos do mínimo do cartão de crédito | mínimo cartão crédito efeitos | Top | Explica o que é rotativo, como evitar |

## Per-post checklist

- [ ] Keyword validated (SERP check + Planner if available)
- [ ] `title` ≤ 70 chars, `description` ≤ 160 chars (CI enforces via schema)
- [ ] Keyword in title, first paragraph, one H2
- [ ] Worked example with realistic R$ numbers, clearly framed as example
- [ ] 2–3 FAQ H3s at the end (targets People-Also-Ask)
- [ ] `relatedSlugs` set (2 posts) — internal linking both directions
- [ ] MeuGrana mentioned naturally 1–2×; competitors treated honestly
- [ ] No invented statistics, rates, or competitor specifics

## Measurement

- Umami: `app-store-click` events with `placement: blog-<slug>` → which posts
  convert.
- Google Search Console: impressions/clicks per URL, position for the target
  keyword (recheck monthly).
- Revisit/refresh posts that stall at position 5–15 after 2–3 months.
