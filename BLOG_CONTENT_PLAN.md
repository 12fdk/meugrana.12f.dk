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
| 6 | `mobills-ou-organizze-qual-escolher` | mobills ou organizze | Bottom | ✅ 2026-07-16 |
| 7 | `como-planejar-o-13-salario` | como planejar o 13º salário | Top | ✅ 2026-07-16 (seasonal — indexed early, peaks Oct–Dec) |
| 8 | `vale-a-pena-parcelar` | vale a pena parcelar | Top | ✅ 2026-07-16 |
| 9 | `fechamento-da-fatura-como-funciona` | fechamento da fatura | Mid | ✅ 2026-07-16 |
| 10 | `como-sair-do-rotativo-do-cartao` | como sair do rotativo | Top | ✅ 2026-07-16 |
| 11 | `app-de-financas-sem-conectar-banco` | app de finanças sem conectar banco | Bottom | ✅ 2026-07-16 |
| 12 | `quantos-cartoes-de-credito-ter` | quantos cartões de crédito ter | Top | ✅ 2026-07-16 |
| 13 | `como-controlar-gastos-com-assinaturas` | controlar gastos com assinaturas | Mid | ✅ 2026-07-16 |
| 14 | `parcelamento-com-juros-ou-sem-juros` | parcelamento com juros ou sem juros | Mid | ✅ 2026-07-16 |
| 15 | `como-evitar-compras-por-impulso` | como evitar compras por impulso | Top | ✅ 2026-07-16 |
| 16 | `parcelas-ocupam-limite-cartao` | parcelas ocupam limite do cartão | Mid | ✅ 2026-07-17 |
| 17 | `cartao-adicional-controlar-gastos` | cartão adicional | Mid | ✅ 2026-07-17 |

## Backlog (validate keyword before writing)

| # | Working title | Keyword idea | Funnel | Notes |
|---|---------------|--------------|--------|-------|
| 18 | Como anotar gastos no celular sem planilha | como anotar gastos no celular | Bottom | ✅ 2026-07-17 |
| 19 | Efeitos ocultos do mínimo do cartão de crédito | mínimo cartão crédito efeitos | Top | Largely covered by post 10 — validate a distinct angle before writing |
| 20 | Como saber se seu limite de cartão está baixo | limite baixo cartão crédito | Mid | Banks adjust limits frequently; tips for monitoring |
| 21 | Como negociar aumento de limite do cartão de crédito | como aumentar limite cartão | Mid | When to ask, what banks look for, what happens after |
| 22 | Reserva de emergência para quem vive de parcelas | reserva de emergência parcelas | Top | Emergency fund for people living on installments |
| 23 | Vale-refeição e vale-alimentação no orçamento | vale refeição orçamento mensal | Mid | Free-tier tie-in: PIX/boleto/VR |

## Per-post checklist

- [ ] Keyword validated (SERP check + Planner if available)
- [ ] `title` ≤ 70 chars, `description` ≤ 160 chars (CI enforces via schema)
- [ ] Keyword in title, first paragraph, one H2
- [ ] Worked example with realistic R$ numbers, clearly framed as example
- [ ] 2–3 FAQ H3s at the end (targets People-Also-Ask)
- [ ] `relatedSlugs` set (2 posts) — internal linking both directions
- [ ] MeuGrana mentioned 0–1× (zero when nothing fits naturally — the layout's
      CTA banner converts, the body never sells); competitors treated honestly
- [ ] No invented statistics, rates, or competitor specifics

## Measurement

- Umami: `app-store-click` events with `placement: blog-<slug>` → which posts
  convert.
- Google Search Console: impressions/clicks per URL, position for the target
  keyword (recheck monthly).
- Revisit/refresh posts that stall at position 5–15 after 2–3 months.
