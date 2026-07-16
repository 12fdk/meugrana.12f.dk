// FAQ content in both languages. Rendered by Faq.astro (PT as static
// default, EN via the data-i18n dictionary in public/js/main.js — keep the
// three places in sync when adding questions: this file drives the section
// markup AND the FAQPage JSON-LD; main.js drives the client-side toggle).
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
      "Sim, o MeuGrana é grátis para baixar e usar. O plano gratuito inclui o dashboard mensal, registro de transações e acompanhamento de parcelas. O Premium desbloqueia cartões e parcelas ilimitados, projeção de 12 meses, categorias personalizadas, relatórios, exportação CSV e widgets extras — a partir de R$ 14,90/mês.",
    questionEn: "Is MeuGrana free? What's included in the free plan?",
    answerEn:
      "Yes, MeuGrana is free to download and use. The free plan includes the monthly dashboard, transaction logging and installment tracking. Premium unlocks unlimited cards and installments, 12-month projection, custom categories, reports, CSV export and extra widgets — from R$ 14.90/month.",
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
    key: "faq.q3",
    questionPt: "Meus dados ficam seguros? Onde são armazenados?",
    answerPt:
      "Sim. Seus dados são armazenados exclusivamente no seu iPhone e, se você ativar a sincronização Premium, no seu iCloud pessoal — a que nós não temos acesso. Não coletamos dados pessoais nem usamos analytics de terceiros.",
    questionEn: "Is my data safe? Where is it stored?",
    answerEn:
      "Yes. Your data is stored exclusively on your iPhone and, if you enable Premium sync, in your personal iCloud — which we cannot access. We don't collect personal data or use third-party analytics.",
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
    key: "faq.q5",
    questionPt: "O que é a projeção de faturas e como funciona?",
    answerPt:
      "O MeuGrana soma todas as parcelas futuras de cada cartão e mostra quanto você vai pagar em cada fatura nos próximos 12 meses — antes de a fatura fechar, sem surpresas.",
    questionEn: "What is the bill projection and how does it work?",
    answerEn:
      "MeuGrana adds up all future installments on each card and shows what you'll pay on every bill for the next 12 months — before the bill closes, no surprises.",
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
    key: "faq.q7",
    questionPt: "Tem versão para Android?",
    answerPt: "Ainda não. O MeuGrana é exclusivo para iPhone (iOS) no momento.",
    questionEn: "Is there an Android version?",
    answerEn: "Not yet. MeuGrana is currently iPhone (iOS) only.",
  },
  {
    key: "faq.q8",
    questionPt: "Como cancelo o Premium?",
    answerPt:
      "A assinatura é gerenciada pela Apple. Cancele a qualquer momento em Ajustes → seu nome → Assinaturas, sem multa.",
    questionEn: "How do I cancel Premium?",
    answerEn:
      "The subscription is managed by Apple. Cancel anytime in Settings → your name → Subscriptions, with no penalty.",
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
    key: "faq.q10",
    questionPt: "O app entende PIX, boleto e vale-refeição?",
    answerPt:
      "Sim. PIX, boleto, vale-refeição e outros métodos de pagamento brasileiros são nativos no MeuGrana — junto com INSS, IRRF e 13º salário no perfil de renda.",
    questionEn: "Does the app understand PIX, boleto and meal vouchers?",
    answerEn:
      "Yes. PIX, boleto, meal vouchers and other Brazilian payment methods are native in MeuGrana — along with INSS, IRRF and 13th salary in your income profile.",
  },
];
