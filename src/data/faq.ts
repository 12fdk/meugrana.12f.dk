// FAQ content in both languages. Rendered by Faq.astro (PT as static
// default, EN via the data-i18n dictionary in public/js/main.js — keep the
// three places in sync when adding questions: this file drives the section
// markup AND the FAQPage JSON-LD; main.js drives the client-side toggle).
//
// This file is the source of truth. After editing, run
// `node scripts/sync-faq-i18n.mjs` to regenerate the `faq.q*` lines in
// public/js/main.js from these entries.
//
// Answers must match what the app actually does — every claim below was
// checked against the app source (~/Git/meugrana) on 2026-07-30.
export interface FaqEntry {
  key: string;
  questionPt: string;
  answerPt: string;
  questionEn: string;
  answerEn: string;
}

export const faq: FaqEntry[] = [
  {
    key: "faq.q1",
    questionPt: "O MeuGrana é grátis? O que está incluído no plano gratuito?",
    answerPt:
      "Sim, o MeuGrana é grátis para baixar e usar. O plano gratuito inclui o dashboard mensal, registro de transações e acompanhamento de parcelas. O Premium desbloqueia cartões e parcelas ilimitados, projeção de 12 meses, categorias personalizadas, relatórios, exportação CSV e widgets extras — pagamento único de R$ 19,90 (acesso vitalício).",
    questionEn: "Is MeuGrana free? What's included in the free plan?",
    answerEn:
      "Yes, MeuGrana is free to download and use. The free plan includes the monthly dashboard, transaction logging and installment tracking. Premium unlocks unlimited cards and installments, 12-month projection, custom categories, reports, CSV export and extra widgets — a one-time payment of R$ 19.90 (lifetime access).",
  },
  {
    key: "faq.q13",
    questionPt: "Existe teste grátis do Premium?",
    answerPt:
      "Existe. Ao instalar o app você começa com 30 dias de Premium liberado — sem cartão, sem cobrança e sem renovação automática. Quando o período termina, nada é cobrado e nada some: o app continua funcionando no plano gratuito, com todos os seus lançamentos no lugar. Se quiser manter os recursos Premium, é uma compra única de R$ 19,90.",
    questionEn: "Is there a free trial of Premium?",
    answerEn:
      "There is. When you install the app you start with 30 days of Premium unlocked — no card, no charge, no auto-renewal. When it ends nothing is billed and nothing disappears: the app keeps working on the free plan with all your entries intact. If you want to keep the Premium features, it's a one-time R$ 19.90 purchase.",
  },
  {
    key: "faq.q8",
    questionPt: "O Premium é assinatura? Preciso cancelar depois?",
    answerPt:
      "Não é assinatura. O Premium do MeuGrana é uma compra única de R$ 19,90 pela App Store: você paga uma vez, o acesso é vitalício e não há nada para cancelar depois. Versões antigas do app chegaram a oferecer planos mensal e anual — quem assinou naquela época mantém o acesso e pode cancelar quando quiser em Ajustes → seu nome → Assinaturas.",
    questionEn: "Is Premium a subscription? Do I have to cancel it later?",
    answerEn:
      "It's not a subscription. MeuGrana Premium is a one-time R$ 19.90 App Store purchase: you pay once, access is for life, and there's nothing to cancel later. Older versions of the app did offer monthly and annual plans — anyone who subscribed back then keeps their access and can cancel anytime in Settings → your name → Subscriptions.",
  },
  {
    key: "faq.q14",
    questionPt: "Preciso criar conta, informar e-mail ou CPF?",
    answerPt:
      "Não. Você baixa o app e já começa a usar — sem cadastro, sem e-mail, sem CPF e sem senha. Não existe uma “conta MeuGrana”: o app é seu e os dados são seus.",
    questionEn: "Do I need to create an account or give my email?",
    answerEn:
      "No. You download the app and start using it right away — no sign-up, no email, no ID number, no password. There is no “MeuGrana account”: the app is yours and so is the data.",
  },
  {
    key: "faq.q2",
    questionPt: "Preciso conectar meu banco?",
    answerPt:
      "Não. O MeuGrana não usa Open Finance nem pede acesso ao seu banco. Você registra seus gastos manualmente em segundos — e seus dados ficam só no seu aparelho.",
    questionEn: "Do I need to connect my bank?",
    answerEn:
      "No. MeuGrana doesn't use Open Finance and never asks for access to your bank. You log your spending manually in seconds — and your data stays on your device.",
  },
  {
    key: "faq.q4",
    questionPt: "Funciona offline?",
    answerPt:
      "Sim. O MeuGrana é offline-first: registrar gastos, ver parcelas e consultar o dashboard funciona sem internet.",
    questionEn: "Does it work offline?",
    answerEn:
      "Yes. MeuGrana is offline-first: logging expenses, viewing installments and checking the dashboard all work without internet.",
  },
  {
    key: "faq.q3",
    questionPt: "Meus dados ficam seguros? Onde são armazenados?",
    answerPt:
      "Seus lançamentos, cartões e informações de salário ficam armazenados no seu iPhone e, se você ativar a sincronização Premium, no seu iCloud pessoal — a que nós não temos acesso. Nenhum dado financeiro seu é enviado para os nossos servidores. Coletamos apenas estatísticas de uso anônimas (quais telas são abertas, por exemplo), que não incluem valores, nomes de lojas nem nada que identifique você.",
    questionEn: "Is my data safe? Where is it stored?",
    answerEn:
      "Your entries, cards and salary details are stored on your iPhone and, if you enable Premium sync, in your personal iCloud — which we cannot access. None of your financial data is sent to our servers. We only collect anonymous usage statistics (which screens get opened, for example), which contain no amounts, no store names and nothing that identifies you.",
  },
  {
    key: "faq.q5",
    questionPt: "O que é a projeção de faturas e como funciona?",
    answerPt:
      "O MeuGrana soma todas as parcelas futuras de cada cartão e mostra quanto você vai pagar em cada fatura nos próximos 12 meses — antes de a fatura fechar, sem surpresas.",
    questionEn: "What is the bill projection and how does it work?",
    answerEn:
      "MeuGrana adds up all future installments on each card and shows what you'll pay on every bill for the next 12 months — before the bill closes, no surprises.",
  },
  {
    key: "faq.q15",
    questionPt: "Como o app sabe em qual fatura cada parcela vai cair?",
    answerPt:
      "Pelo dia de fechamento do cartão, que você informa ao cadastrá-lo. Compra feita antes do fechamento entra na fatura que já está aberta; feita depois, escorrega para a fatura seguinte. O MeuGrana aplica essa mesma regra a cada parcela, mês a mês — é por isso que a projeção bate com o que o banco cobra, em vez de simplesmente dividir o valor pelos meses do calendário.",
    questionEn: "How does the app know which bill each installment lands on?",
    answerEn:
      "From the card's closing day, which you set when you add the card. A purchase made before closing goes on the bill that's already open; after closing, it slides to the next one. MeuGrana applies that same rule to every parcela, month by month — which is why the projection matches what the bank actually charges instead of just splitting the amount across calendar months.",
  },
  {
    key: "faq.q16",
    questionPt: "E se o parcelamento tiver juros? O que eu lanço no app?",
    answerPt:
      "Lance o valor total que você vai realmente pagar, ou seja, a soma de todas as parcelas — não o preço à vista. Assim cada parcela fica com o valor certo e a projeção das próximas faturas sai correta. Vale a dica: se a soma das parcelas for maior que o preço à vista, o parcelamento tem juros embutidos, mesmo quando é anunciado como “sem juros”.",
    questionEn: "What if the installment plan has interest? What do I enter?",
    answerEn:
      "Enter the total you'll actually pay — the sum of all the instalments, not the cash price. That way each parcela carries the right amount and the projection of your next bills is correct. A tip: if the sum of the instalments is higher than the cash price, the plan has interest baked in, even when it's advertised as interest-free.",
  },
  {
    key: "faq.q17",
    questionPt: "Dá para ver quanto do limite do cartão as parcelas já comprometem?",
    answerPt:
      "Dá. Ao cadastrar o cartão você informa o limite, e o MeuGrana mostra quanto da fatura já está tomado pelas parcelas em andamento e quanto ainda sobra. Costuma ser o número que mais assusta quem parcela muito: boa parte do limite do mês que vem já está gasta antes de o mês começar.",
    questionEn: "Can I see how much of my card limit is already taken by instalments?",
    answerEn:
      "Yes. You enter the card's limit when you add it, and MeuGrana shows how much of the bill is already claimed by running instalments and how much is left. It's usually the most sobering number for heavy instalment users: a big share of next month's limit is spent before the month even starts.",
  },
  {
    key: "faq.q6",
    questionPt: "Posso acompanhar vários cartões?",
    answerPt:
      "Sim. Adicione seus cartões de crédito com dia de fechamento e vencimento e veja parcelas e faturas por cartão. No Premium, cartões ilimitados.",
    questionEn: "Can I track multiple cards?",
    answerEn:
      "Yes. Add your credit cards with closing and due dates and see installments and bills per card. Premium removes the card limit.",
  },
  {
    key: "faq.q18",
    questionPt: "O que acontece quando eu termino de pagar um parcelamento?",
    answerPt:
      "O MeuGrana avança as parcelas sozinho conforme os meses passam — você não precisa marcar nada como pago. Na última parcela o app comemora com você, o parcelamento some das projeções seguintes e as faturas futuras ficam mais leves na hora. No plano gratuito, ele também libera espaço na sua cota de parcelamentos ativos.",
    questionEn: "What happens when I finish paying off an instalment plan?",
    answerEn:
      "MeuGrana advances the instalments on its own as the months pass — you never have to mark anything as paid. On the final parcela the app celebrates with you, the plan drops out of the following projections and your future bills get lighter straight away. On the free plan it also frees up a slot in your active-instalment allowance.",
  },
  {
    key: "faq.q10",
    questionPt: "O app entende PIX, boleto e vale-refeição?",
    answerPt:
      "Sim. PIX, boleto, vale-refeição e outros métodos de pagamento brasileiros são nativos no MeuGrana — junto com INSS, IRRF e 13º salário no perfil de renda.",
    questionEn: "Does the app understand PIX, boleto and meal vouchers?",
    answerEn:
      "Yes. PIX, boleto, meal vouchers and other Brazilian payment methods are native in MeuGrana — along with INSS, IRRF and 13th salary in your income profile.",
  },
  {
    key: "faq.q19",
    questionPt: "Dá para lançar um gasto a partir de um print ou da foto do comprovante?",
    answerPt:
      "Dá. Compartilhe a imagem, o PDF ou o texto do comprovante com o MeuGrana pelo menu de compartilhamento do iPhone: o app lê o valor e o nome do estabelecimento e já abre o lançamento preenchido para você conferir e salvar. O reconhecimento acontece inteiro dentro do aparelho — a imagem não é enviada para lugar nenhum.",
    questionEn: "Can I log an expense from a screenshot or a photo of the receipt?",
    answerEn:
      "You can. Share the image, PDF or text with MeuGrana from the iPhone share sheet: the app reads the amount and the merchant name and opens a pre-filled entry for you to check and save. Recognition happens entirely on the device — the image is never uploaded anywhere.",
  },
  {
    key: "faq.q20",
    questionPt: "Como registro contas fixas, como aluguel, luz e academia?",
    answerPt:
      "Marque o lançamento como recorrente e escolha o dia do mês. O MeuGrana repete a conta automaticamente todos os meses e pode te lembrar quando a data chegar, então aluguel, luz, internet e mensalidade da academia entram no resumo do mês sem você digitar tudo de novo.",
    questionEn: "How do I log fixed bills like rent, electricity and the gym?",
    answerEn:
      "Mark the entry as recurring and pick the day of the month. MeuGrana repeats it automatically every month and can remind you when the date comes around, so rent, power, internet and the gym membership show up in your monthly summary without you retyping them.",
  },
  {
    key: "faq.q21",
    questionPt: "Dá para controlar gastos com assinaturas, tipo Netflix e Spotify?",
    answerPt:
      "Dá — e costuma ser a maior surpresa do mês. Cadastre cada assinatura como um gasto recorrente na categoria Streaming e o app soma tudo: aquelas mensalidades de R$ 20 ou R$ 50 que ninguém lembra viram um número só, e aí fica fácil decidir o que vale a pena manter.",
    questionEn: "Can I keep track of subscriptions like Netflix and Spotify?",
    answerEn:
      "You can — and it's usually the month's biggest surprise. Add each subscription as a recurring expense in the Streaming category and the app totals them up: all those forgotten R$ 20 and R$ 50 charges become a single number, and it gets easy to decide what's worth keeping.",
  },
  {
    key: "faq.q11",
    questionPt: "Lancei um gasto no mês errado. Dá para apagar ou corrigir?",
    answerPt:
      "Dá sim. Você pode apagar qualquer lançamento a qualquer momento — mas quase sempre não precisa: é só editar o lançamento e mudar a data. Todo gasto, receita ou compra parcelada tem uma data que você define, e é ela que decide em qual mês ele aparece. Corrigiu a data, o valor sai do mês errado e entra no mês certo automaticamente.",
    questionEn: "I logged an expense in the wrong month. Can I delete or fix it?",
    answerEn:
      "Yes. You can delete any entry at any time — but you usually don't need to: just edit the entry and change its date. Every expense, income or installment purchase has a date you set, and that date decides which month it shows up in. Fix the date and the amount moves out of the wrong month and into the right one automatically.",
  },
  {
    key: "faq.q12",
    questionPt: "Posso lançar gastos de meses anteriores para ter um panorama do ano?",
    answerPt:
      "Pode. Ao registrar um gasto ou uma receita você escolhe a data — inclusive de meses que já passaram. O lançamento entra no mês correspondente e o dashboard e os gráficos por categoria daquele mês são recalculados. Assim dá para preencher o histórico do ano aos poucos e comparar os meses; no Premium, os relatórios e tendências reúnem tudo em uma visão anual.",
    questionEn: "Can I log expenses from previous months to get a picture of the whole year?",
    answerEn:
      "Yes. When you log an expense or income you pick the date — including months that have already passed. The entry lands in that month and the dashboard and category charts for it are recalculated. That way you can fill in the year's history bit by bit and compare months; with Premium, reports and trends pull it all into a yearly view.",
  },
  {
    key: "faq.q22",
    questionPt: "O app calcula meu salário líquido, com INSS e IRRF?",
    answerPt:
      "Calcula. No perfil de renda você informa o salário bruto e o MeuGrana desconta INSS e IRRF pelas faixas vigentes, soma vale-refeição, vale-transporte e outros benefícios e mostra quanto de fato entra na sua conta. Dá para incluir o 13º salário e escolher se ele cai de uma vez em dezembro ou dividido entre novembro e dezembro.",
    questionEn: "Does the app work out my take-home pay, with INSS and IRRF?",
    answerEn:
      "It does. In the income profile you enter your gross salary and MeuGrana deducts INSS and IRRF using the current brackets, adds meal and transport vouchers and other benefits, and shows what actually lands in your account. You can include the 13th salary and choose whether it arrives as a December lump sum or split across November and December.",
  },
  {
    key: "faq.q23",
    questionPt: "O MeuGrana avisa antes do fechamento e do vencimento da fatura?",
    answerPt:
      "Avisa. Você recebe um lembrete três dias antes de cada cartão fechar — a última chance de segurar uma compra para a fatura seguinte —, um aviso quando o vencimento se aproxima e outro no dia de pagar. O app também avisa quando um mês à frente vem pesado demais e quando um parcelamento chega ao fim. Todos os lembretes são opcionais e configuráveis.",
    questionEn: "Does MeuGrana warn me before the card closes and before the bill is due?",
    answerEn:
      "It does. You get a reminder three days before each card closes — your last chance to hold a purchase for the next bill — a heads-up as the due date approaches, and one on the day itself. The app also warns you when a month ahead is looking unusually heavy and when an instalment plan is about to finish. Every reminder is optional and configurable.",
  },
  {
    key: "faq.q24",
    questionPt: "Tem widget para a tela de início?",
    answerPt:
      "Tem. Um widget mostra o resumo do mês (o que entrou, o que saiu e o que sobrou) e outro mostra a próxima fatura a vencer, direto na tela de início ou na tela de bloqueio. O plano gratuito inclui o widget de resumo; o Premium libera todos.",
    questionEn: "Is there a home screen widget?",
    answerEn:
      "Yes. One widget shows the month summary (what came in, what went out, what's left) and another shows the next bill due, right on your home or lock screen. The free plan includes the summary widget; Premium unlocks all of them.",
  },
  {
    key: "faq.q25",
    questionPt: "Tem modo escuro?",
    answerPt:
      "Tem. Nos ajustes do app, o Premium libera a escolha entre claro, escuro e automático (acompanhando a aparência do iPhone).",
    questionEn: "Is there a dark mode?",
    answerEn:
      "There is. In the app's settings, Premium unlocks the choice between light, dark and automatic (following your iPhone's appearance).",
  },
  {
    key: "faq.q9",
    questionPt: "Posso exportar meus dados?",
    answerPt:
      "Sim. Com o Premium você exporta suas transações em CSV para usar em planilhas ou levar para onde quiser.",
    questionEn: "Can I export my data?",
    answerEn:
      "Yes. With Premium you can export your transactions as CSV to use in spreadsheets or take anywhere.",
  },
  {
    key: "faq.q26",
    questionPt: "Dá para importar meus dados de outro app ou de uma planilha?",
    answerPt:
      "Ainda não existe importação automática. Na prática, quase ninguém precisa: comece cadastrando os cartões e só os parcelamentos que ainda estão correndo — são alguns minutos de trabalho e isso já reconstrói as suas próximas 12 faturas. O histórico antigo você preenche aos poucos, se quiser. No sentido contrário, o Premium exporta tudo em CSV para a planilha.",
    questionEn: "Can I import my data from another app or a spreadsheet?",
    answerEn:
      "There's no automatic import yet. In practice hardly anyone needs one: start by adding your cards and only the instalment plans still running — a few minutes of work already rebuilds your next 12 bills. You can fill in older history gradually if you want. In the other direction, Premium exports everything as CSV for your spreadsheet.",
  },
  {
    key: "faq.q27",
    questionPt: "Comprei o Premium. Vale nos meus outros iPhones? E se eu trocar de aparelho?",
    answerPt:
      "Vale, desde que você use o mesmo ID Apple: em Ajustes → Restaurar compras o acesso volta sem pagar de novo. Para levar junto os lançamentos, ative a sincronização via iCloud (Premium) — os dados viajam pela sua conta pessoal do iCloud, nunca pelos nossos servidores.",
    questionEn: "I bought Premium. Does it work on my other iPhones? What if I change device?",
    answerEn:
      "It does, as long as you use the same Apple ID: Settings → Restore purchases brings your access back at no extra cost. To bring your entries along too, turn on iCloud sync (Premium) — the data travels through your personal iCloud account, never through our servers.",
  },
  {
    key: "faq.q28",
    questionPt: "O MeuGrana substitui a planilha de gastos mensais?",
    answerPt:
      "Substitui — e sem a parte chata. Na planilha, você mantém fórmulas, abas e a projeção das parcelas na unha, e quase sempre para de atualizar depois de algumas semanas. O MeuGrana já nasce sabendo o que é parcela, fatura e dia de fechamento, e registra um gasto em segundos no celular, na hora da compra. Se ainda quiser sua planilha para outra coisa, o Premium exporta tudo em CSV.",
    questionEn: "Does MeuGrana replace my monthly expenses spreadsheet?",
    answerEn:
      "It does — without the tedious part. A spreadsheet means maintaining formulas, tabs and the instalment projection by hand, and most people stop updating it within weeks. MeuGrana already understands instalments, bills and closing days, and logs an expense in seconds on your phone, right at the checkout. If you still want your spreadsheet for something else, Premium exports everything as CSV.",
  },
  {
    key: "faq.q29",
    questionPt: "Qual a diferença entre o MeuGrana e apps como Mobills ou Organizze?",
    answerPt:
      "São apps mais amplos, com conexão bancária e cobrança por assinatura — e atendem bem quem quer isso. O MeuGrana foi construído em volta de um problema específico: as parcelas. Ele projeta a fatura de cada cartão pelos próximos 12 meses, não pede acesso ao seu banco, funciona offline e custa uma compra única de R$ 19,90 em vez de mensalidade. Se você quer o extrato bancário importado automaticamente, eles resolvem melhor; se você quer saber quanto das suas próximas faturas já está comprometido, o MeuGrana resolve melhor.",
    questionEn: "How is MeuGrana different from apps like Mobills or Organizze?",
    answerEn:
      "They're broader apps, with bank connections and subscription pricing — and they serve people who want that well. MeuGrana was built around one specific problem: instalments. It projects each card's bill for the next 12 months, never asks for bank access, works offline and costs a one-time R$ 19.90 instead of a monthly fee. If you want your bank statement imported automatically, they do it better; if you want to know how much of your next bills is already committed, MeuGrana does.",
  },
  {
    key: "faq.q7",
    questionPt: "Tem versão para Android?",
    answerPt: "Ainda não. O MeuGrana é exclusivo para iPhone (iOS 17 ou superior) no momento.",
    questionEn: "Is there an Android version?",
    answerEn: "Not yet. MeuGrana is currently iPhone only (iOS 17 or later).",
  },
];
