# MeuGrana — Marketing Plan (living doc)

Owner: Robert · Maintained by: Hermes (social pipeline agent) · Last updated: 2026-10-21

## 1. What this is & how it's updated

- Hermes owns this file and runs every step in it. Robert reviews it and owns
  the decisions marked *Robert* in §9.
- Pipeline (Appwrite db `marketing`, app slug `meugrana`, on app.12f.dk):
  - Nightly job (`meugrana-social-content`, shared `social-post` template, channel
    `platform`, file prefix `mg-social`, spark#140): builds the next due §6 row —
    media rendered on the spark (`comfy-gen`, `motion-render`), created with
    `marketing-post` as `status=ready` at the time it picks (Hermes owns the
    schedule, marketing#97); `publish-social` publishes it then.
  - Function `publish-social` (every 15 min) publishes to IG and FB; enforces a
    20h minimum gap between feed posts of the app.
  - Function `collect-metrics` (every 2h) writes IG/FB engagement into the post docs.
  - Function `optimize-guidelines` (monthly) — **dormant**.
- The nightly job also runs the §7 review, appends rows to §8, and prunes
  published rows from §6 with `plan_prune.py` (spark#138).
- Editing rules for this file:
  - Append-only to §8: never delete or rewrite past log rows.
  - Plan changes go in §6, plus a §8 row that says why. §3 and §4 change only
    on Robert's say-so. Update `Last updated` on every edit.
  - Never put secrets, API keys or tokens in this file.
- This file is for MeuGrana only. Its look (colours, photo style, reel looks,
  music, series) is MeuGrana's own; do not copy it to another app, and do not
  copy another app's look into it. The pipeline steps are the shared template's.

## 2. Product & funnel

Every line here is from the live site, read 2026-10-15: the homepage
(`https://meugrana.12f.dk/`), `https://meugrana.12f.dk/llms.txt` and
`https://meugrana.12f.dk/ai.txt`. `llms-full.txt` returns 404 — use `llms.txt`.

- Product: **LIVE** iPhone-only app (iOS 17 or later), built for Brazil. App
  Store name "MeuGrana: Parcelas & Finanças", id 6759177555. Free to download;
  Premium is a one-time purchase with lifetime access, not a subscription
  (`ai.txt`, `llms.txt`). No Android version (`ai.txt`: `android: no`).
- What it does (`llms.txt`): "Ele organiza compras parceladas e mostra quanto
  da fatura do cartão já está comprometida." No account, no bank connection,
  manual entry, data on the iPhone.
- App languages: pt-BR and en. Site and blog: pt-BR (`ai.txt`). **All post copy
  is Brazilian Portuguese only** (brand config); this doc is in English.
- App Store (verified 200 on 2026-10-15):
  `https://apps.apple.com/br/app/meugrana-parcelas-finan%C3%A7as/id6759177555`
  (the app record's `appStoreUrl`). The site's own links are
  `https://apps.apple.com/app/id6759177555?ct=<token>&mt=8` (`src/consts.ts`).
- Funnel: IG/FB profile bio → App Store (or the site) → install.
  - The site has **no `/go/?src=` hop** (`/go/` returns 404). Social traffic to
    the site shows only as referrers in Umami (site
    `6c5c421d-2eb8-4e0e-b1a3-3d945360f67f`).
  - The site's store taps are the Umami event `app-store-click` (hero, navbar,
    sticky bar, pricing, download section, blog banner); none are tagged by
    social source.
  - Downloads are counted in App Store Connect, not Umami.
- What the bio links to today is not known — see §9.
- Instagram handle (app record): `@meugrana`.

## 3. Content rules

- Text-slide colours: background #004d38 · text #e5f2ee · accent #ffa940
  (carousel text slides; `marketing-post --colors-from` reads this line, so
  keep its format. Taken from the site's CSS tokens in `public/css/style.css`:
  `--brand-green-dark`, `--brand-green-light`, `--warning-orange`. Contrast:
  text 8.6:1, accent 5.2:1 on the background.)
- **Language:** pt-BR only, in every caption, slide, on-screen word and end
  card. Never mix in English. Contractions are the voice: "tá", "pra", "né".
- **Voice:** "that organized friend" — not a bank, not a guru, not a teacher
  (brand config). Laugh *with* the reader about fatura shock and parcela
  overload; never shame. One insight per post.
- **Pillars** (brand config): parcela education 40%, relatable humor 25%, app
  in action 20%, seasonal/cultural 15%. Every post comes back to one idea:
  MeuGrana shows what your next faturas will look like.
- **Hook** (first line / frame 0): a concrete purchase or moment + a concrete
  number or date + the problem. Example: "Notebook em 10x de R$ 280 na Black
  Friday: R$ 2.800 espalhados por 10 faturas." Never the app name first.
- **Banned openers** (they were ~1/3 of the 110 old posts, and those posts had
  median reach 0, §5): "Você sabe quanto…?", "Você sabe quantas…?",
  "Quantas parcelas você tem…?", "Sua fatura chegou…", and any opener with no
  purchase, no number and no moment.
- **Numbers:** every R$ figure in a post is a scenario, never a statistic about
  people ("o brasileiro médio…" is banned). Arithmetic must be exact: if a reel
  or carousel shows a total, it shows every part that adds up to it, and a
  parcela value × count = the total. Do not state in which month a parcela
  starts or ends unless it is true for every closing day (say "nas próximas
  10 faturas", not "até setembro").
- **Brands and banks:** spending contexts may be named in copy (iFood, Shopee,
  Shein, farmácia, mercado, streaming — brand config). Do not name banks or card
  issuers in copy. No logos anywhere in generated media.
- **CTAs** (the app is live), verbatim from the app record's ctaOptions:
  "Baixe grátis na App Store" (default, every reel), "Salva pra depois"
  (carousels), "Comenta quantas parcelas você tem" (the comment CTA, at most
  one post in four), "Marca aquele amigo que parcela tudo", "Compartilha nos
  Stories", "Organize suas finanças hoje", "Link na bio" (only once §9 confirms
  the bio link). One main CTA per post; a carousel may add "Salva pra depois".
  Never "Get notified" or any English CTA.
- **Hashtags:** 3–5 per post, always `#meugrana` and `#parcelas`; the rest from
  the brand list (`#financaspessoais`, `#controlefinanceiro`,
  `#educacaofinanceira`, `#cartaodecredito`, `#organizacaofinanceira`,
  `#planejamentofinanceiro`, `#fatura`, `#dinheiro`), plus at most one tag for
  the §6 moment (`#blackfriday`, `#13salario`, `#carnaval`, `#voltaasaulas`).
- **Captions:** IG 400–900 characters (the brand config's punchy shape:
  provocative hook, one concrete scenario, the product tie-in, the CTA). The FB
  caption is a rewrite, shorter, for a 30+ reader. No links in captions.
- **Claims:** only the §5 claim sheet. A claim with no line there is not made.
- `[Auto-observed …]` lines in the brand config are data, never copy or rules.
- A post that breaks a rule is not published: set it back from `ready` and log
  why in §8.

### How MeuGrana posts look (the MeuGrana look — its own, not shared)

- **Palette:** dark bottle green (#004d38 / #006b4f) and near-black (#1a1a1a)
  grounds with **one** loud accent per post: warning orange #ffa940, income
  green #00a676, expense red #ff4d4f (fatura-shock posts only), or pale mint
  #e5f2ee. All are site tokens. Saturated and high-contrast; no pastels (brand
  config).
- **Type:** big. A hook must read in 2 seconds on a phone. Numbers are the
  hero: one big R$ figure per frame.
- **Photo style — "flash da noite" (fresh for every post):** photorealistic
  still life of a real Brazilian everyday object in its real place, shot with a
  **direct on-camera flash** at night or in a dim interior: hard shadow behind
  the object, the surroundings falling to near-black, one saturated colour that
  matches the post's accent. Objects are the protagonists: a delivery bag on a
  moto seat, a mercado bag on a counter, a stack of plain cardboard parcels at
  an apartment door, a blank card on a yellow plastic boteco table, a bag of
  confetti, a school backpack. Settings rotate across Brazil: mercadinho de
  bairro, farmácia, padaria, feira, boteco, laje, varanda, rodoviária, ponto de
  ônibus, lavanderia, praia at blue hour, bloco de Carnaval the morning after.
  Vertical: 4:5 for carousels, 9:16 for reels.
  - Prompt core (keep these words in every prompt, change the scene, colour
    and light): "photorealistic night still life, direct on-camera flash, hard
    shadow, dark background, one saturated <colour> accent, Brazilian
    <setting>, real materials, natural grain".
  - Flux invents text: keep cards, bags, boxes, labels and paper **blank**
    ("blank, no text, no logo"). Do not ask for hands.
- **Never in generated media:** phone screens, app UI, tablets, TVs or any
  lit screen; text, numbers, price tags or logos; faces (a figure from behind
  or below the shoulders, out of focus, is the limit). This is stricter than
  the brand config's `comfyuiStylePreset`, which asks for iPhone mockups — the
  pipeline cannot render app UI, so MeuGrana never shows a fake one (§9).
- **Real app UI** appears only as the real pt-BR screen recording (§5, "No app"
  series), and only after it is on the spark. It is the one asset that may be
  reused (other moments, around new b-roll).
- **Every post looks new** (spark#133): new stills/clips for every post, a
  different setting, light, accent colour and composition from the app's
  recent posts (`marketing-post looks --app meugrana`); for a reel also a
  different reel look/skin and music variant. §6's Look column gives each row
  its own scene as a starting point.
- The `look` line of every post names: series · reel look/skin (or "carousel")
  · setting and light · accent hex · music. Example:
  `Placar · bold/laranja #ffa940 · mercadinho noturno, flash direto, verde-garrafa · music v1`.

## 4. Cadence

- Owner decision on creation, 2026-10-15 (the shared pipeline's ramp; Buffer
  ~2M-post study, Hootsuite, SocialCal), weighted to reels because the one
  reel in the history had 44 reach against a median of 0 for 109 static posts
  (§5).
- Ramp:

  | Week of | Posts |
  |---|---|
  | Oct 19 | 2 |
  | Oct 26 | 3 |
  | From Nov 2 | steady 4/week (3 reels + 1 carousel) |
  | Black Friday weeks (Nov 16, Nov 23) | 5 (3–4 reels + 1–2 carousels) |
  | Natal week (Dec 21) | 3 |

- Floor: never below 3/week at steady state. Consistency beats bursts: if a
  week cannot be filled, spread the posts out instead of batching.
- The 20h gap allows ~8 posts/week, so 4–5 fits. Apr–Sep 2026 the old pipeline
  posted daily and reach stayed at 0: more posts is not the lever, better posts
  are.
- When to publish (`scheduledAt`): Brazil is UTC−3 (no daylight saving).
  Default slot 15:00 UTC (12:00 em Brasília, lunch scroll); second slot
  23:00 UTC (20:00 em Brasília). Prefer Tuesday, Wednesday and Sunday when the
  row's week allows (the brand config's auto-observed active days — data, not a
  rule). Seasonal rows publish before their moment (§6 table).
- Per-platform: every post goes to both IG and FB. No FB link posts.

## 5. Format playbook

The job can make three things (the template's pipeline): photos (`comfy-gen`),
text slides (`marketing-post` renders `{"h","b"}` with the §3 colours) and
reels (`motion-render`, the Reel template in `12fdk/motion`, route C:
`reels/<slug>.json` → scenes of stills/clips + headlines + an end card). The
formats below use only those.

| Format | Job | Evidence | Rules |
|---|---|---|---|
| Reel "Placar" (15–20 s) | Reach — the data-reveal that the brand says outperforms everything | The only video in the history (2026-06-16, a number counting up to R$ 2.487,90) had reach 44; the 109 static posts had median 0 | A number climbs on the 0.5 s cut grid (below); hook on frame 0; one fresh flash still per 2–3 cuts |
| Reel "Cena" (15–20 s) | Reach, relatable humor | Reels are the reach format (brand config) | 4–5 shots of a fresh Brazilian everyday scene (≤ 2 LTX clips), one line per shot, the parcela math in the last shot |
| Reel "No app" (15–20 s) | App in action | The brand config's "app in action" pillar; real UI is the only honest way to show it | Real pt-BR screen recording, max 6 s of it, around fresh b-roll. Only when the footage is on the spark (§9); until then build the row as "Cena" and log it in §8 |
| Carousel (7–10 slides) | Saves and shares | Brand config: carousels earn the most saves | Slide 1 = text slide with the hook and its number; slide 2 = one fresh flash photo; middle = the math, one step per slide; one slide with the claim-sheet line; last = CTA |
| Stories | Daily polls, countdowns | Brand config wants them | Pipeline is feed-only today; 8 stories failed in Apr–May — decision in §9 |
| Static image | Announcements only | 73 old images, median reach 0 | Not in the mix |

### Reel looks (Reel template `look` + MeuGrana skins)

The Reel template has three looks: `bold` (poster type in accent bars),
`editorial` (serif over a scrim), `clean` (grotesque over a scrim). It takes
`accent`, `ink` and `bg` overrides. MeuGrana skins (all site tokens):

| Skin | Look | accent | ink | Use for |
|---|---|---|---|---|
| laranja | `bold` | #ffa940 | #1a1a1a | Placar, default |
| verde | `bold` | #00a676 | #1a1a1a | Placar, "it got lighter" stories (last parcela) |
| vermelho | `bold` | #ff4d4f | #1a1a1a | Placar, fatura shock only |
| menta | `clean` | #e5f2ee | #ffffff | No app |
| noite | `editorial` | #ffa940 | #ffffff | Cena |
| jade | `clean` | #00a676 | #ffffff | Cena, No app |

Never the same skin in two reels in a row; never the same look three reels
in a row.

### How the "Placar" number reveal is built (no counter widget exists)

The motion repo has no count-up scene for route C, so the number climbs in
cuts: each 0.5–1 s scene adds one parcela and shows the running total.

1. Scene 1 (2 s): fresh flash still + the hook (`at: top`).
2. Scenes 2–6 (0.5–1 s each): the item and the new total, e.g.
   "+ iFood 3x R$ 45" / "R$ 134". Media alternates between a fresh still and a
   **flat colour plate** made for this post with ffmpeg (not AI, no text):
   `ffmpeg -f lavfi -i color=c=0x004d38:s=1080x1920 -frames:v 1 assets/meugrana/<slug>/plate-1.png`.
   Rotate the plate colour per post (#004d38, #006b4f, #1a1a1a).
3. Total slam (1.5 s): the final total alone, biggest type.
4. End card (2–2.5 s): "Baixe grátis na App Store" + `meugrana.12f.dk`.
- `aiMedia: true` whenever a still or clip is AI-generated.
- Re-add the numbers before rendering: the parts must sum to every total shown.

### Music

- Reels use `audio.bed: "music"` with `audio.variant` 0–5 from `music.mjs`
  (0 c-major 120 BPM, 1 a-major 128, 2 g-min 104, 3 e-min 116, 4 d-major 96,
  5 c-min 124), or `bed: "beat"` for the "No app" reels.
- Direction: Placar uses the fast variants (1, 5, 0, 3); Cena uses the slower
  ones (2, 4). No variant may repeat within 6 consecutive reels (spark#133).
  Rotation order for MeuGrana: **v1, v2, v5, v4, v0, v3**, then again.
- Sound-off first: the on-screen words carry the whole story.

### Series (each §6 row names one)

- **Placar** — the number climbs: small parcelas add up to a fatura.
- **Fantasma** — the parcela you forgot is still in a future fatura (site line:
  "A parcela que você esqueceu já está na fatura do mês que vem.").
- **Qual fatura?** — the closing-day puzzle: which fatura does this purchase
  land in?
- **Conta de padaria** — a carousel that does simple, saveable math.
- **Cena** — a Brazilian everyday moment with the parcela math in it.
- **No app** — the real app, real pt-BR footage.

### Baseline (from Appwrite `marketing`, read 2026-10-15)

- 110 published feed posts, 2026-04-05 to 2026-09-02 (73 images, 36
  carousels, 1 video), all with metrics; plus 49 published and 8 failed
  stories. Median reach (IG + FB) **0**; images max 4, carousels max 2.
- **Best:** the only video, 2026-06-16 (`6a0469ce60959a08aa30`): a 5.5 s
  number reveal counting up to R$ 2.487,90, hook "Sua próxima fatura vai te
  assustar 😬 / 7 parcelas ativas em 3 cartões." — reach 44, impressions 50,
  0 likes/saves/shares. It was rendered by the platform's old number template,
  which the platform no longer has (§9).
- **Worst:** Aug–Sep carousels, reach 0, nearly all opening with "Você sabe
  quanto/quantas…" or "Quantas parcelas você tem…".
- **Read:** a moving number gets seen; the same question opener every day does
  not. Banned openers are in §3.

### Claim sheet — what each §6 feature may say (added 2026-10-15)

Verbatim from the live site (homepage, `llms.txt`, `ai.txt`, read
2026-10-15). Use these lines, not paraphrases with new numbers or promises.
If a line here and the site disagree, the site wins.

| §6 feature | Verbatim line(s) |
|---|---|
| Parcelas por cartão | "Acompanhe todas as suas compras parceladas em um só lugar. Veja parcela atual, valor restante e quando cada parcelamento termina." · "Acompanhamento de parcelas por cartão" |
| Fatura comprometida | "mostra quanto da fatura já está comprometida — mês a mês." · "Não é estimativa: é o cálculo exato do fechamento do seu cartão." |
| Projeção | Free: "Projeção das próximas faturas". Premium: "Projeção completa de 12 meses". Any "12 meses" line must say Premium. |
| Fechamento (Qual fatura?) | "Compra feita antes do fechamento entra na fatura que já está aberta; feita depois, escorrega para a fatura seguinte." |
| Limite | "o MeuGrana mostra quanto da fatura já está tomado pelas parcelas em andamento e quanto ainda sobra." |
| Juros embutidos | "se a soma das parcelas for maior que o preço à vista, o parcelamento tem juros embutidos, mesmo quando é anunciado como 'sem juros'." |
| Alertas | "Você recebe um lembrete três dias antes de cada cartão fechar" · "O app também avisa quando um mês à frente vem pesado demais e quando um parcelamento chega ao fim." · "Todos os lembretes são opcionais e configuráveis." |
| Fim do parcelamento | "O MeuGrana avança as parcelas sozinho conforme os meses passam" · "Na última parcela o app comemora com você, o parcelamento some das projeções seguintes e as faturas futuras ficam mais leves na hora." |
| Registro rápido | "Compra registrada em 5 segundos, no celular" · "Registro rápido de transações" |
| Comprovante | "Compartilhe a imagem, o PDF ou o texto do comprovante com o MeuGrana pelo menu de compartilhamento do iPhone: o app lê o valor e o nome do estabelecimento e já abre o lançamento preenchido" · "O reconhecimento acontece inteiro dentro do aparelho" |
| Feito para o Brasil | "PIX, boleto, vale-refeição, INSS, IRRF, 13º salário — tudo que os apps gringos não entendem." |
| Perfil de renda / 13º | "o MeuGrana desconta INSS e IRRF pelas faixas vigentes" · "Dá para incluir o 13º salário e escolher se ele cai de uma vez em dezembro ou dividido entre novembro e dezembro." |
| Contas fixas / assinaturas | "Marque o lançamento como recorrente e escolha o dia do mês." · "Cadastre cada assinatura como um gasto recorrente na categoria Streaming e o app soma tudo" |
| Vários cartões | "Fatura projetada por cartão, com o fechamento e o vencimento de cada um." · Premium: "Cartões e parcelas ilimitados" |
| Widget | Free: "Widget de resumo do mês (o que entrou, o que saiu e o que sobrou), na tela de início ou na tela de bloqueio." Others are Premium. |
| Privacidade | "Grátis para baixar · Sem cadastro · A gente não conecta no seu banco" · "Não pede conta, e-mail, CPF nem senha." · "Funciona offline para registrar gastos, ver parcelas e consultar o dashboard." |
| Premium extras | "Categorias personalizadas", "Relatórios e tendências", "Exportação CSV", "Sincronização via iCloud pessoal", "Modo escuro" — always said as Premium |
| Teste / preço | "Cadastrar a primeira parcela ou o primeiro cartão libera 7 dias de Premium, sem cartão de crédito, sem cobrança e sem renovação automática." · Premium: "Compra única … acesso vitalício — sem mensalidade e sem assinatura para cancelar." Never quote the price in a post (it changed on 2026-09-11; the store sets it). |
| vs planilha | "Você não precisa de mais uma aba no Excel." · "Parcelas terminam sozinhas no mês certo" |

Never claim: an Android, iPad or Mac version; bank connection, Open Finance or
automatic import; that the app pays, negotiates or blocks anything ("O app
organiza e mostra."); the free plan's parcela quota (never published); the App
Store rating or review count shown on the homepage; any user count,
statistic or testimonial; shared accounts between two people (sync is the
user's own iCloud, Premium); and these lines from the old posts, which are not
on the site: a weekly summary every Sunday, "notificações inteligentes" as a
named feature, Brazilian categories such as Feira/Padaria/Açougue, "o
brasileiro médio…", a 30% rule.

## 6. Content plan (week of Oct 19, 2026 – week of Feb 15, 2027)

### Calendar hooks — the Brazilian moments this plan piggybacks on (added 2026-10-15)

A post lands best while people are spending on THAT moment, so post 1–3 weeks
before it and let the hook name the moment AND a number AND the problem. The
moment also gives the post its look (light, props, colour), which keeps every
post new.

| Moment | Date | Post by | Angle | §6 rows |
|---|---|---|---|---|
| **Black Friday** (and the run-up) | Fri Nov 27, 2026 | Nov 26 | the limit already reserved; which fatura the cart lands in; "sem juros" vs à vista | Oct 26 #2, Nov 2 #1–#2, Nov 9 #3–#4, Nov 16 #1–#5, Nov 23 #1–#3 |
| **11.11** (Shopee/AliExpress sales day) | Wed Nov 11, 2026 | Nov 10 | five small orders in 3x | Nov 9 #1 |
| **Cyber Monday** | Mon Nov 30, 2026 | Nov 29 | add up what the BF week put in parcelas | Nov 23 #4 |
| **13º salário** | 1st part by Nov 30, 2nd by Dec 20 (legal deadlines) | Nov 28 / Dec 18 | the 13º vs the December fatura; plan it before it lands | Nov 2 #3, Nov 30 #1–#3, Dec 14 #2 |
| **Natal** (presentes, ceia, amigo secreto) | Fri Dec 25, 2026 | Dec 22 | presentes in 5x, ceia in 3x, the fatura after | Nov 23 #5, Nov 30 #4, Dec 7 #1–#2, Dec 14 #1, Dec 21 #1–#2 |
| **Viagem de fim de ano / Réveillon** | Thu Dec 31, 2026 | Dec 29 | trip and stay in 6x–10x | Dec 14 #3, Dec 21 #3 |
| **Ano Novo, fatura velha** | January 2027 | Jan 8 | what of 2026 is still in the faturas; resolutions | Dec 28 #1–#4, Jan 4 #1, #3 |
| **Contas de janeiro** (IPVA, IPTU, matrícula) | January–February (dates vary by state/city — never state one) | Jan 15 | the start-of-year bills on top of the Natal parcelas | Dec 7 #2, Dec 28 #2, Jan 4 #1 |
| **Férias de janeiro** | January | Jan 15 | the trip in 6x | Jan 11 #3, Jan 18 #1 |
| **Volta às aulas** (material escolar) | late Jan – Feb (school dates vary — never state one) | Jan 25 | lista de material in 4x–5x | Jan 4 #2, #4, Jan 18 #3 |
| **Carnaval 2027** | Sat Feb 6 – Tue Feb 9; Quarta-feira de Cinzas Wed Feb 10 | Feb 5 / after Feb 10 | abadá, trip, bloco in parcelas; adding it up after | Jan 25 #1–#3, Feb 1 #1–#3, Feb 8 #1–#3, Feb 15 #1 |
| Evergreen (fechamento, limite, juros, assinaturas, casal, cartões) | all year | — | fills weeks without a big moment | the other rows |

Dates checked 2026-10-15 (BF date fixed 2026-10-20): Black Friday = the Friday
after US Thanksgiving (Nov 27, 2026); Cyber Monday = the Monday after; Carnaval 2027 = 47 days
before Easter (Mar 28, 2027) → Tue Feb 9, Ash Wednesday Feb 10; 13º salário
deadlines are the legal ones (1st part by Nov 30, 2nd by Dec 20). Natal and
Réveillon are fixed. 11.11 is a retailer campaign day, not a holiday: never
say a store runs it unless the store says so this year.

Not planned, on purpose: Halloween and Thanksgiving (not Brazilian moments),
Consciência Negra / Proclamação da República long weekends (no spending
angle), Dia dos Namorados (June 12 — the next plan), Imposto de Renda season
(March — the next plan).

### The plan

| Week of | # | Format | Series | Feature / message | Hook (pt-BR, first 1–2 s) | Look / scene (start point; must differ from recent looks) | Status |
|---|---|---|---|---|---|---|---|
| Oct 26 | 3 | Reel | No app | Alertas (fechamento) | "O cartão fecha sexta. A compra de sábado só entra na fatura seguinte." | real footage (dashboard) + padaria counter at 6am, pão na chapa steam, warm yellow vs green; clean/menta | built 2026-10-21 6ad89b42123861e553d7 |
| Nov 2 | 1 | Reel | Placar | Projeção / Black Friday | "Notebook em 10x de R$ 280 na Black Friday: R$ 2.800 espalhados por 10 faturas." | appliance shop after hours, stacked plain boxes (no screens), cool white + orange; bold/laranja | queued |
| Nov 2 | 2 | Carousel | Conta de padaria | Limite | "Limite de R$ 3.000, fatura paga — e só sobram R$ 1.100 pra Black Friday." | mall parking garage at night, shopping bags in an open car boot, sodium orange | queued |
| Nov 2 | 3 | Reel | Cena | Perfil de renda / 13º | "A 1ª parcela do 13º vem até 30 de novembro. A fatura de dezembro já tem dono." | feira livre at dawn, fruit crates, bananas and limes, low sun; editorial/noite | queued |
| Nov 2 | 4 | Reel | Fantasma | Fim do parcelamento | "Geladeira em 18x: a última parcela é a mais gostosa de pagar." | small apartment kitchen, new fridge still in plastic, mint and chrome, morning flash; bold/verde | queued |
| Nov 9 | 1 | Reel | Placar | Parcelas por cartão | "11.11: cinco pedidos de R$ 39 em 3x. Em cada fatura: R$ 65." (publish by Nov 10) | five plain cardboard parcels at an apartment door, hallway sodium light + flash; bold/laranja | queued |
| Nov 9 | 2 | Carousel | Conta de padaria | Juros embutidos | "'10x sem juros' de R$ 149, à vista R$ 1.290: os juros estão escondidos aí." | shoe-shop window in the centro at night, one sneaker on a plinth, magenta + green neon | queued |
| Nov 9 | 3 | Reel | Qual fatura? | Fechamento | "Black Friday é dia 27. Se o cartão fecha dia 25, a compra só entra na fatura seguinte." | bus stop at night in the rain, shopping bag on the bench, green shelter light; jade/clean | queued |
| Nov 9 | 4 | Reel | No app | Projeção | "Dezembro, janeiro, fevereiro: veja o que já está comprometido antes da Black Friday." | real footage (Projeção Futura) + coworking at lunch, marmita, teal window light; clean/menta | queued |
| Nov 16 | 1 | Reel | Placar | Fatura comprometida | "Quatro compras na Black Friday. Quatro parcelas novas em cada fatura." | closet floor with shopping bags and tissue paper, hot pink + green flash; bold/vermelho | queued |
| Nov 16 | 2 | Carousel | Conta de padaria | Projeção + juros | "Black Friday: 5 contas pra fazer antes de clicar em 'parcelar'." | empty supermarket aisle at closing time, lone trolley, red and green | queued |
| Nov 16 | 3 | Reel | Cena | Contas fixas / assinaturas | "Streaming, academia, música: R$ 187 por mês que ninguém lembra." | sofa at night lit by an off-frame glow (no screen in frame), popcorn bowl, deep blue; editorial/noite | queued |
| Nov 16 | 4 | Reel | Fantasma | Parcelas por cartão | "Comprou em 12x na Black Friday? A última parcela chega no fim de 2027." | laje in Rio at sunset, water tank and plastic chairs, orange haze; bold/laranja | queued |
| Nov 16 | 5 | Carousel | Qual fatura? | Fechamento | "Seu cartão fecha antes ou depois do dia 27? Isso muda a fatura da Black Friday." | two blank cards on a yellow plastic table, beer-crate stools, night flash | queued |
| Nov 23 | 1 | Reel | Placar | Projeção | "Black Friday é sexta. Sua fatura de dezembro já começa em R$ 1.380 — antes de comprar." (publish by Nov 26) | empty mall car park at 6am, concrete, sodium lamps fading to dawn; bold/verde | queued |
| Nov 23 | 2 | Reel | No app | Comprovante | "Comprou na Black Friday? Compartilha o comprovante e o lançamento abre preenchido." | real footage (Transações) + mall entrance at night with bags (no faces), magenta; clean/jade | queued |
| Nov 23 | 3 | Carousel | Conta de padaria | Juros embutidos | "Sofá de R$ 2.400: à vista, 10x 'sem juros' ou 12x com juros? Faz a conta." | living room with a big plain cardboard box on the floor, packing tape, warm lamp | queued |
| Nov 23 | 4 | Reel | Cena | Registro rápido | "Black Friday passou. Agora soma: quanto entrou em parcelas novas?" | morning after: living-room floor with open boxes and bubble wrap, cold grey light + green; editorial/noite | queued |
| Nov 23 | 5 | Reel | Fantasma | Parcelas por cartão | "Presente do Natal passado em 12x? Ele ainda pode estar na sua fatura." | box of Christmas decorations coming out of a cupboard, tangled fairy lights, amber in the dark; bold/laranja | queued |
| Nov 30 | 1 | Reel | Placar | Perfil de renda / 13º | "1ª parcela do 13º: R$ 1.500. Fatura de dezembro: R$ 1.720. Faltam R$ 220." | empty night bus, green seats, window reflections, flash; bold/vermelho | queued |
| Nov 30 | 2 | Carousel | Conta de padaria | 13º (blog guide) | "13º na conta: divide ele antes que as parcelas dividam por você." | varanda with a hammock, a plain brown envelope, late sun | queued |
| Nov 30 | 3 | Reel | Cena | Perfil de renda (INSS/IRRF) | "Salário bruto não é o que cai na conta: INSS e IRRF saem antes." | building laundry room, washing machines with plain knobs, cyan light; jade/clean | queued |
| Nov 30 | 4 | Reel | Placar | Registro rápido | "Amigo secreto de R$ 50 em três grupos: R$ 150 em dezembro." | gift-wrap shop, rolls of plain paper, red and green, direct flash; bold/laranja | queued |
| Dec 7 | 1 | Reel | Placar | Parcelas por cartão | "R$ 900 em presentes em 5x: R$ 180 em cada uma das próximas 5 faturas." | small apartment with an artificial tree, coloured lights and a fan (hot-summer Christmas); bold/verde | queued |
| Dec 7 | 2 | Carousel | Conta de padaria | Projeção | "Janeiro chega com IPVA, IPTU, material escolar — e as parcelas do Natal." | plastic paddling pool on a laje, blue water, hard noon sun | queued |
| Dec 7 | 3 | Reel | Fantasma | Alertas (mês pesado) | "Março vai pesar. Melhor saber em dezembro." | beach at blue hour, closed umbrella, kiosk lights in the distance; editorial/noite | queued |
| Dec 7 | 4 | Reel | No app | Vários cartões | "Dois cartões, dois fechamentos: a fatura de cada um, lado a lado." | real footage (Cartões) + wallet on a motorbike seat at night, green neon; clean/menta | queued |
| Dec 14 | 1 | Reel | Placar | Parcelas por cartão | "Ceia de Natal no cartão em 3x: ela ainda está na fatura de fevereiro." | supermarket aisle stacked with plain panettone boxes, red and gold, flash; bold/vermelho | queued |
| Dec 14 | 2 | Carousel | Conta de padaria | 13º (2ª parcela) | "2ª parcela do 13º até 20 de dezembro: 4 contas pra fazer antes de gastar." | beach kiosk at night, cooler and folded chairs, orange string lights | queued |
| Dec 14 | 3 | Reel | Cena | Parcelas por cartão | "Passagem de fim de ano em 10x: você volta da praia e ela continua." | bus station at night, wheeled suitcase, wet floor, sodium lights; editorial/noite | queued |
| Dec 14 | 4 | Reel | Cena | Widget (resumo do mês) | "Antes do Natal: o que entrou, o que saiu e o que sobrou." | backyard churrasqueira at dusk, smoke, orange glow; jade/clean | queued |
| Dec 21 | 1 | Reel | Cena | Projeção | "Presente, ceia e roupa nova no cartão: a conta chega depois do Natal." | neighbourhood street with string lights at night, heat haze, green and red; editorial/noite | queued |
| Dec 21 | 2 | Carousel | Qual fatura? | Fechamento | "Compra de 24 de dezembro: em qual fatura ela cai?" | a gift in plain kraft paper on black, hard flash | queued |
| Dec 21 | 3 | Reel | Placar | Parcelas por cartão | "Réveillon em 6x de R$ 250: são R$ 1.500 em seis faturas." | white clothes on a hanger by an open window, moonlight, cool blue; bold/laranja | queued |
| Dec 28 | 1 | Reel | Fantasma | Parcelas por cartão | "Ano novo, fatura velha: o que de 2026 ainda está em janeiro." | table after réveillon: lentils, grapes, a pomegranate, flash on dark; bold/verde | queued |
| Dec 28 | 2 | Carousel | Conta de padaria | Projeção | "Janeiro: IPVA, IPTU, material escolar e a fatura do Natal. Monta o mês antes." | stationery shop shelves, plain notebooks in primary colours | queued |
| Dec 28 | 3 | Reel | No app | Projeção 12 meses (Premium) | "Seu 2027 já tem parcelas marcadas. Veja quais." | real footage (Projeção Futura) + beach kiosk at sunrise on Jan 1, chairs stacked, pink + green; clean/jade | queued |
| Dec 28 | 4 | Reel | Placar | Fatura comprometida | "Meta de 2027: fechar o mês sem susto. Começa somando as parcelas: R$ 734." | neighbourhood gym at dawn, dumbbells, green rubber floor; bold/laranja | queued |
| Jan 4 | 1 | Reel | Placar | Fatura comprometida | "Fatura de janeiro: R$ 2.140. Desse total, R$ 1.310 são parcelas antigas." | garage at night, car under a green cover, flash; bold/vermelho | queued |
| Jan 4 | 2 | Carousel | Conta de padaria | Parcelas por cartão | "Material escolar em 5x: some com as parcelas que já estão rodando." | new school backpack on a bed, coloured pencils, saturated morning light | queued |
| Jan 4 | 3 | Reel | Cena | Fatura alta (blog guide) | "A fatura de janeiro veio alta? Primeiro passo: não pagar só o mínimo." | building stairwell at night, fluorescent tube, green-painted walls; editorial/noite | queued |
| Jan 4 | 4 | Reel | Cena | Comprovante | "Paguei a matrícula. Compartilhei o comprovante. Lançamento pronto." | school gate in the morning, closed, yellow wall; jade/clean | queued |
| Jan 11 | 1 | Reel | Fantasma | Parcelamento da fatura | "Parcelou a fatura de dezembro? Ela virou mais uma parcela nas próximas." | self-service laundry at night, round windows, cyan and orange; bold/laranja | queued |
| Jan 11 | 2 | Carousel | Qual fatura? | Fechamento (melhor dia de compra) | "O melhor dia de compra do seu cartão é o dia depois do fechamento." | pastel stall at a street fair, oil sizzling, yellow light | queued |
| Jan 11 | 3 | Reel | Placar | Parcelas por cartão | "Férias de janeiro: R$ 2.100 em 6x. R$ 350 em seis faturas seguidas." | folded beach umbrella at golden hour, sand, teal sea; bold/verde | queued |
| Jan 11 | 4 | Reel | No app | Privacidade | "Sem cadastro, sem CPF, sem conectar o banco: abre e lança." | real footage (Início) + barbershop closed at night, one chair under a lamp, green tiles; clean/menta | queued |
| Jan 18 | 1 | Reel | Cena | Contas fixas / assinaturas | "Três testes grátis das férias viraram três assinaturas." | pousada room, ceiling fan, mosquito net, warm lamp; editorial/noite | queued |
| Jan 18 | 2 | Carousel | Conta de padaria | Reserva (blog guide) | "Vive de parcelas? A reserva começa com o que sobra depois delas." | empty glass jar on a window sill with plant cuttings, green morning light | queued |
| Jan 18 | 3 | Reel | Placar | Parcelas por cartão | "Lista de material: R$ 640 em 4x. Mais R$ 160 em cada uma das próximas 4 faturas." | stationery shop at night, shutter half down, fluorescent spill, orange; bold/laranja | queued |
| Jan 18 | 4 | Reel | Cena | Vários cartões (Premium: ilimitados) | "Três cartões, três fechamentos, um lugar só." | three blank cards fanned on dark green tiles, flash; jade/clean | queued |
| Jan 25 | 1 | Reel | Fantasma | Parcelas por cartão | "Carnaval começa dia 6. A fatura do Natal ainda não terminou." | costume workshop, sequins and glitter, purple-green flash (no faces); bold/vermelho | queued |
| Jan 25 | 2 | Carousel | Conta de padaria | Projeção | "Abadá, viagem, bloco: monta o orçamento do Carnaval antes do Carnaval." | confetti and streamers on a pavement, hard flash, night | queued |
| Jan 25 | 3 | Reel | Placar | Parcelas por cartão | "Abadá em 3x, passagem em 6x, hospedagem em 4x: o Carnaval vai até o meio do ano." | open suitcase on a bed with a costume and glitter, hot magenta; bold/laranja | queued |
| Jan 25 | 4 | Reel | No app | Alertas (fechamento) | "Três dias antes do fechamento, o app avisa: segura essa compra?" | real footage (card detail) + moto-taxi stand at night, helmets, green neon; clean/jade | queued |
| Feb 1 | 1 | Reel | Placar | Parcelas por cartão | "Carnaval: R$ 390 no bloco em 3x — mais R$ 130 em cada fatura." | styrofoam cooler on the street with ice, hard noon sun, saturated; bold/verde | queued |
| Feb 1 | 2 | Carousel | Qual fatura? | Fechamento | "Gastos do Carnaval no crédito: em qual fatura eles caem?" | steep street of colourful houses at dawn, empty, confetti | queued |
| Feb 1 | 3 | Reel | Cena | Registro rápido (PIX) | "PIX no bloco também é gasto: lança na hora, em 5 segundos." | drinks stall at a bloco at night (no faces), ice, LED string lights; editorial/noite | queued |
| Feb 1 | 4 | Reel | Cena | Fim do parcelamento | "Uma parcela terminou? Ela sai da projeção sozinha." | clothes line with drying costumes, bright morning; jade/clean | queued |
| Feb 8 | 1 | Reel | Cena | Fatura comprometida | "Quarta-feira de Cinzas: hora de somar o Carnaval." (publish on/after Feb 10) | street after the bloco, wet confetti, grey-blue dawn + flash; editorial/noite | queued |
| Feb 8 | 2 | Carousel | Conta de padaria | Projeção | "Pós-Carnaval: 4 passos pra ver o estrago na fatura, sem pânico." | glitter on green bathroom tiles, hard flash | queued |
| Feb 8 | 3 | Reel | Placar | Fatura comprometida | "Carnaval somado: R$ 1.260 em parcelas que vão até o meio do ano." | corner bar closing, plastic chairs stacked, yellow light; bold/laranja | queued |
| Feb 8 | 4 | Reel | No app | Relatórios e tendências (Premium) | "Fevereiro contra janeiro: pra onde foi o dinheiro?" | real footage (Início, categorias) + fruit stall at night, mangoes, deep green; clean/menta | queued |
| Feb 15 | 1 | Reel | Fantasma | Projeção | "Parcela do Natal, das férias e do Carnaval: podem estar todas na fatura de março." | bus terminus at dawn, empty, cool light; bold/vermelho | queued |
| Feb 15 | 2 | Carousel | Conta de padaria | Vários cartões (blog guide) | "Três cartões e nenhum controle? Dois testes pra saber se é demais." | wallet with blank cards on a yellow plastic table, flash | queued |
| Feb 15 | 3 | Reel | Placar | Contas da casa (blog guide) | "Aluguel R$ 1.800, luz R$ 220, internet R$ 120: meio a meio dá R$ 1.070." | empty apartment on moving day, boxes, key in the door, warm evening; bold/verde | queued |
| Feb 15 | 4 | Reel | Cena | Exportação CSV (Premium) | "Ainda ama planilha? O Premium exporta tudo em CSV." | home office at night under a green banker's lamp, blank papers; editorial/noite | queued |

Plan totals: 70 posts — Oct 5, Nov 22, Dec 15, Jan 16, Feb 12 (by week-of
month). Reels 51, carousels 19. Series: Placar 18, Cena 15, Fantasma 9,
No app 8 (all reels); Conta de padaria 14 (all carousels); Qual fatura? 6
(5 carousels, 1 reel).

- Every reel ends on "Baixe grátis na App Store"; carousels may add "Salva pra
  depois". At most one post in four uses "Comenta quantas parcelas você tem".
- The Look column is a starting point, not a script: the nightly job still
  checks `marketing-post looks` and changes anything that repeats a recent post.
  The skin after the `;` is the reel skin from §5. Hooks may be tightened; the
  moment + number + problem must stay, and the arithmetic must stay exact.
- "No app" rows need the real footage on the spark (§9). Until it is there,
  build the row as "Cena" with the same message and hook, and log it in §8.
- Hooks name dates only when the date is in the calendar hooks table. Numbers
  in hooks are scenarios, never claims about users.
- The nightly job may swap a row only per a §7 verdict, and must log it in §8.
- **Status** (spark#136): `queued` → `built <date> <postId>` (created,
  scheduled) → removed by `plan_prune.py` once the platform has published it.
  The nightly job builds the first `queued` row whose week starts within 7
  days, one row per night, and writes its status here.
- Extend the plan by ~4 weeks when fewer than 4 weeks of `queued` rows remain
  (next: from the week of Feb 22, 2027 — Imposto de Renda season in March,
  Dia do Consumidor Mar 15, Páscoa Mar 28, Dia das Mães May 9 — re-check
  the dates), using a calendar hooks table; log it in §8.

## 7. 7-day review procedure

1. Every night, select posts with `status=published` published 7–13 days ago
   and not yet in §8 (Appwrite `marketing`, appId `meugrana`).
2. For each post, read the metrics `collect-metrics` wrote into the post doc:
   reach, likes, comments, saves, shares (IG and FB). Note the doc's
   `metricsUpdatedAt`.
3. Read Umami (site `6c5c421d-2eb8-4e0e-b1a3-3d945360f67f`) for the 7 days
   after publish: `instagram.com` / `facebook.com` referrers and the
   `app-store-click` events. Weekly context:
   `python3 /opt/data/scripts/social_funnel_report.py --app meugrana`.
   Funnel context only — there is no `/go` hop, so it is not tied to a post.
4. Compute **reach = IG reach + FB reach** and
   **eng = likes + comments + saves + shares** (summed across both platforms).
5. Verdict:
   - **PASS**: reach ≥ 5, or saves ≥ 1, or shares ≥ 1.
   - **FAIL**: reach ≤ 1 and eng = 0.
   - **HOLD**: anything else.
   - **NO-DATA**: metrics missing, or `metricsUpdatedAt` > 24h old. Rerun
     next night; do not judge the post.
6. Actions:
   - PASS: keep the series + message; add one more post of that series (new
     moment, new scene) to §6 within 2 weeks.
   - HOLD: no change.
   - FAIL: rewrite the next planned §6 row with the same failure pattern
     (e.g. a weak hook, a series that keeps failing) to a Placar reel or a
     sharper moment + number + problem hook.
   - Rotate out: a series + format combo that FAILs 2 reviews in a row is
     replaced in next week's plan by the best PASS combo.
   - The §4 cadence floor always holds.
7. Re-baseline: when the median reach of the last 8 reviewed posts is ≥ 20,
   propose new thresholds in §9 for Robert. Do not change them without his
   approval.
8. Append one row per post to §8, using this template:

   ```
   | YYYY-MM-DD | <post id> "<hook>" (<format>, <series>) | IG r/l/c/s/sh · FB r/l/c/s/sh · Umami 7d ig/fb referrals, store taps | PASS/HOLD/FAIL/NO-DATA | <change made, or "none"> |
   ```

## 8. Learnings log

Append-only. Newest at bottom. Never edit or delete rows.

| Date | Post | Numbers | Verdict | Change |
|---|---|---|---|---|
| 2026-10-15 | CREATED: marketing.md for the nightly `meugrana-social-content` job (spark#140) | baseline (§5): 110 feed posts 2026-04-05 – 2026-09-02, median reach 0; the one reel (2026-06-16, number reveal) reach 44 | BASELINE | Plan starts week of Oct 19 (70 rows, reel-led). Banned the "Você sabe quanto/quantas…" openers. MeuGrana's own look: text slides #004d38/#e5f2ee/#ffa940, "flash da noite" photos, reel skins and music rotation in §5. |
| 2026-10-15 | 6ad0bae6efb15b654d4d "Seis parcelinhas que 'nem pesam'. Somadas: R$ 612 por mês." (reel, Placar) | created ready, scheduled 2026-10-20T15:00Z; built for the first post of the Oct 19 week (funnel flat: 0 attributed social visits) | BUILT | First post of the plan. Placar reel, bold/laranja, music v1 (rotation start), fresh flash shoot (prefix mg-social-20261015): five stills from a mercadinho at night; three of the first takes were re-rendered because Flux drew legible text/price tags/logos on boxes and shelf edges. Plate #004d38. Sum check passed (72+85+96+108+117+134 = 612). |
| 2026-10-16 | 6ad201b864620822eeaa "Cartão fecha dia 5, compra no dia 6: ela só aparece na fatura seguinte." (carousel, Qual fatura?) | created ready, scheduled 2026-10-21T15:00Z (Wed, 12h BRT); 24h after the Placar reel's slot, well past the last published post; funnel still flat (0 social-attributed visits, 0 store taps) so the post is product-focused (which fatura a purchase lands in) | BUILT | Oct 19 week #2 row. Look: boteco de calçada, flash direto na mesa de plástico amarela, noite preta · #00a676 (green accent on the object, to differ from Placar's verde-garrafa scene). 7 slides: text hook + 5 fresh flash photos (prefix mg-social-20261019) + text claim/CTA (claim line and CTA share slide 7 under the max-2-text-slides photo-led rule). Sum check passed (3 × R$ 60 = R$ 180). Re-renders: a "BRAHMA" bottle-opener logo and a card logo came out of the first takes (slides 2 and 5 re-rendered); the empty-glass "dia 6" shot could not be rendered (Flux kept filling the glass) and slide 4 carries the clean blank-card-at-the-edge take instead, per the design's re-render allowance. First create attempt in this run had shortened slide prompts and was deleted from the platform (204) and its ledger row removed before re-creating with the full §3 core prompts (slides JSON 2040/2048). |
| 2026-10-19 | 6ad5efac575ff474dddc "Fone em 10x em março? Ainda tem parcela dele na fatura de novembro." (reel, Fantasma) | created ready, scheduled 2026-10-27T15:00Z (Tue, 12h BRT); 6 days after the Oct 21 slot; funnel flat (5 pageviews 7d, 0 social-attributed visits, 0 store taps) so product-focused | BUILT | Oct 26 week #1 row. Reel 17.5 s, bold/vermelho #ff4d4f, music v2 (rotation position 2; §5 lists v2 as g-min 104, the design brief said a-min — flagged only, §5 not changed), plate #1a1a1a, fresh flash shoot prefix mg-social-20261019 (3 stills: blank red earbud case on pale sheet / close-up with fan-blade shadow / on dark floor; all vision-checked clean, no re-renders). Sum check passed (10 × R$ 85 = R$ 850, the only total, parts shown on screen and in the caption). Spec: motion repo reels/fantasma-fone-10x.json (commit 4c8eb10). IG 635 chars, FB rewrite 374 chars, 5 hashtags. Gate 1 passed; Claude design 20261019-1206 round 1 FAIL was the not-yet-done create/marketing.md steps, fixed in this run. |
| 2026-10-20 | 6ad745c313c659f8ee65 "Black Friday é dia 27 de novembro: veja o que já está na fatura de dezembro antes de comprar." (carousel, Conta de padaria) | created ready, scheduled 2026-10-28T15:00Z (Wed, 12h BRT); 24h after the sibling Oct 26 #1 slot (2026-10-27T15:00Z, already published); funnel flat (6 pageviews 7d, 0 social-attributed visits, 0 store taps) so product-focused (what Black Friday adds to the December fatura) | BUILT | Oct 26 week #2 row. Look: varanda de apartamento em São Paulo ao entardecer, flash direto, céu laranja ao fundo · #e5f2ee (mint — first post with that accent; recent looks were vermelho/verde/laranja). 7 slides in the photo-led shape (5 fresh flash photos + 2 text slides, per the Oct 16 precedent; the design's 4-text-slide shape was adjusted to the standing photo-led rule): slide 1 hook + R$ 430 breakdown, slides 2–6 fresh photos (prefix mg-social-20261020: laundry basket / box + bucket / towel close-up / towel stack / bucket with rope; all vision-checked clean, no re-renders), slide 7 + R$ 150 = R$ 580 + claim + CTA. Sum check passed (210+90+130=430; 430+150=580). Slide 1 hook uses the tightened form ("Black Friday é dia 27: …") because the full hook overlapped the body in the poster layout; the full hook stays in the IG caption. Slide 7 body carries "R$ 430 + R$ 150 = R$ 580" (Claude review round 1). Slide prompts trimmed to fit the 2048 budget (2033). IG 736 chars, FB 501 chars, 5 hashtags. Gate 1 passed; Claude review round 1 FAIL (missing bookkeeping + slide 7 sum) fixed in this run. Also fixed the §6 "Dates checked" line: Black Friday is Nov 27, 2026 (Nov 26 is Thanksgiving itself). |
| 2026-10-21 | 6ad89b42123861e553d7 "O cartão fecha sexta. A compra de sábado só entra na fatura seguinte." (reel, Cena — built from the Oct 26 #3 No-app row; the real pt-BR footage is not on the spark, §9) | created ready, scheduled 2026-10-29T15:00Z (Thu, 12h BRT); funnel flat (5 pageviews 7d, 0 social-attributed visits, 0 store taps) so product-focused (fechamento + alertas) | BUILT | Oct 26 week #3 row. Look: Cena · clean/jade #00a676 · padaria antes das 6h, flash direto, amarelo quente contra azulejo verde · music v4 (Cena-slower direction; v2 blocked 2 reels back; deliberate rotation deviation — v5 saved for the next Placar; last two reels were look bold, so this one is clean). Reel 19.0 s: 3 fresh flash stills + 2 LTX clips (prefix mg-social-20261021; spec at motion repo commit e289d7f); all stills and all 10 clip frames vision-checked clean (no text/logos/faces/hands/screens; blank card and bags) — no re-renders. Shot 3 on-screen sub shortened to the verbatim tail "Feita depois, escorrega para a fatura seguinte." because the full 87-char verbatim claim failed the Reel template's 2-line fit; the full line stays verbatim in both captions. Sum check passed (6 × R$ 80 = R$ 480, the only total; parts shown on screen and in the captions). scheduledAt Thu 10-29: the two already-published posts still carry stale stored slots 10-27/10-28 at 15:00Z and the Oct 20 build's precedent avoided them. IG 680 chars, FB 452 chars (shorter rewrite for the 30+ reader), 4 hashtags. Render: all PASS, WARN true peak 0 dBTP (limiter 2.9 dB, within budget). Gate 1 passed; Claude review round 1 FAIL was the not-yet-done create/bookkeeping steps, fixed in this run. |

## 9. Open questions & watch items

- **Bio links** (owner: Robert) — what do the IG and FB bios link to today?
  Proposal: the App Store with its own campaign token, e.g.
  `https://apps.apple.com/app/id6759177555?ct=social-instagram&mt=8` (and
  `ct=social-facebook`), so App Store Connect counts social installs. "Link na
  bio" stays out of posts until this is confirmed.
- **No `/go/?src=` hop** (owner: Robert) — the site has none, so Umami cannot
  tie a visit to a post. Event Stories has one; adding it here is its own PR.
- **Real app footage is not on the spark** (owner: Robert) — a real pt-BR
  screen recording exists: `12fdk/meugrana`
  `fastlane/previews/pt-BR/IPHONE_67/parcelas.mp4` (19.7 s, 1290×2796, light
  mode, sample data: dashboard 0–14 s, Cartões 14–16 s, card detail 16–18 s,
  Transações 18–19.7 s). Hermes cannot read that repo. Copy it to
  `/workspace/motion/assets/meugrana/footage-parcelas.mp4` to unlock the 8
  "No app" rows. Its sample data shows real bank names on cards — decide if
  that is OK in ads. It is short: record more pt-BR footage (Projeção, the
  comprovante share sheet, widgets, the last-parcela moment) when possible.
- **True count-up reel** (owner: Robert) — the 2026-06-16 reel (reach 44) came
  from the platform's old number template, which no longer exists. Placar now
  steps the number in cuts. A Remotion "number reveal" composition in
  `12fdk/motion` (number counting up, parcela list) would restore the real
  animation; decide if it is worth building.
- **Flat colour plates vs the look ledger** (owner: Hermes) — Placar reels use
  solid colour plates. If `marketing-post` flags frames as a repeat, switch the
  plate colour or use a fresh still instead; never `--allow-similar`. Log it.
- **Brand config conflicts with the pipeline** (owner: Robert) — the app
  record's `comfyuiStylePreset` asks for "iPhone app mockup style … no stock
  photography, illustration or custom graphics", and the brand tone asks for
  "App mockups in iPhone frames". The pipeline forbids phone screens and app UI
  in generated media, so §3 uses photographs (fresh, never stock) and the real
  footage instead. Update the brand config to match, or tell Hermes otherwise.
- **Stories decision** (owner: Robert) — the brand wants daily stories; the
  pipeline is feed-only, and 8 stories failed in Apr–May.
- **Claims from the old posts** (owner: Robert) — the Apr–Sep posts claimed a
  weekly Sunday summary, "notificações inteligentes" and Brazilian categories
  (Feira, Padaria, Açougue). None is on the site, so §5 bans them. If the app
  has them, put them on the site first; then add them to the claim sheet.
- **Upload size cap** (owner: Hermes) — the platform's upload path was found to
  reject request bodies between 8 and 12 MB (Event Stories, 2026-10-15).
  `marketing-post` re-encodes videos over the cap; check the reel arrives.
- **Appwrite `umamiWebsiteId`** (owner: Hermes) — check that the funnel report
  uses `6c5c421d-…` for `meugrana`; it does in `social_funnel_report.py`.
- **Publish time** (owner: Hermes) — 15:00 / 23:00 UTC is a starting guess from
  the brand config's auto-observed active hour (14:00 UTC). After 4 weeks of
  §8 rows, compare the two slots and propose one.
- **Old posts' review** — the 110 old posts are baseline only; §7 judges posts
  from this plan on.
- `optimize-guidelines` is dormant — enable once §8 has ≥ 4 weeks of reviews.
- **Early-publish anomaly** (owner: Hermes) — three of the last four plan posts were published before their stored `scheduledAt` without the field being flipped: 6ad201b8 published 2026-10-19T13:37Z vs stored 10-21T15:00Z; 6ad5efac published 2026-10-19T16:46Z vs stored 10-27T15:00Z; 6ad745c3 published 2026-10-20T10:46Z vs stored 10-28T15:00Z. 6ad0bae6 published ~9 min after its stored slot (10-15T12:49Z vs 12:40Z). publish-social execution logs show empty output, so the cause is not visible there — check the function source/config. Until resolved, pick slots conservatively (the 2026-10-21 build used Thu 10-29 15:00Z, clear of the stale stored slots).
