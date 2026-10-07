// Facts for /llms.txt and /ai.txt. Every product claim here is taken from
// public/js/main.js (pricing + FAQ) or from pages that quote that copy.
// Do not add a price, limit, or feature that is not in that file.
import {
  ABOUT_URL,
  APP_STORE_URL,
  AUTHOR_NAME,
  IOS_REQUIREMENT_EN,
  IOS_REQUIREMENT_PT,
  PRICE_DISPLAY_EN,
  PRICE_DISPLAY_PT,
  SITE,
} from "../consts";
import { getPublishedPosts, postUrl } from "./blog";

export async function renderLlmsTxt(): Promise<string> {
  const posts = await getPublishedPosts();
  const guides = posts
    .map((post) => `- [${post.data.title}](${SITE}${postUrl(post)}): ${post.data.description}`)
    .join("\n");

  return `# MeuGrana — Parcelas e Finanças

> O MeuGrana é um app de finanças exclusivo para ${IOS_REQUIREMENT_PT}, feito para o Brasil. Ele organiza compras parceladas e mostra quanto da fatura do cartão já está comprometida. É grátis para baixar, não pede cadastro e não conecta no banco. O Premium é uma compra única de ${PRICE_DISPLAY_PT}, com acesso vitalício — não é assinatura.

MeuGrana (nome na App Store: "MeuGrana: Parcelas & Finanças", id 6759177555) é feito por ${AUTHOR_NAME}, de forma independente. Não é banco nem consultoria financeira. O blog, em pt-BR, responde dúvidas sobre parcelas, fatura e orçamento. O texto de cada guia resolve a pergunta sozinho; o app entra só quando ajuda a acompanhar os números.

## Plano grátis

- Dashboard com resumo do mês
- Registro rápido de transações
- Acompanhamento de parcelas por cartão
- Projeção das próximas faturas. A projeção completa de 12 meses é Premium
- Gráficos de gastos por categoria
- Alertas de fechamento e vencimento
- PIX, boleto e vale-refeição
- No perfil de renda: INSS, IRRF, vale-transporte e 13º salário (de uma vez em dezembro ou dividido entre novembro e dezembro)
- 100% offline — dados só no iPhone
- Widget de resumo do mês (o que entrou, o que saiu e o que sobrou), na tela de início ou na tela de bloqueio. Os outros widgets são Premium
- Há uma cota de parcelamentos ativos no plano grátis. Este site não publica o número dessa cota. O Premium libera cartões e parcelas ilimitados

Cadastrar a primeira parcela ou o primeiro cartão libera 7 dias de Premium, sem cartão de crédito, sem cobrança e sem renovação automática. Quando o período acaba, nada é cobrado e os lançamentos continuam no plano grátis.

## Premium

Compra única de ${PRICE_DISPLAY_PT} pela App Store. Acesso vitalício. Não é assinatura, não renova e não há o que cancelar. Versões antigas do app ofereceram planos mensal e anual; quem assinou naquela época mantém o acesso e pode cancelar em Ajustes → seu nome → Assinaturas. Esses planos não são mais vendidos.

O Premium inclui tudo do grátis, mais:

- Cartões e parcelas ilimitados
- Projeção completa de 12 meses
- Categorias personalizadas
- Relatórios e tendências
- Os demais widgets da tela inicial (além do widget de resumo)
- Exportação CSV
- Sincronização via iCloud pessoal de quem usa. O MeuGrana não acessa esses dados
- Modo escuro: claro, escuro ou automático, acompanhando o iPhone

A compra vale nos outros iPhones com o mesmo ID Apple (Ajustes → Restaurar compras).

## Privacidade e o que o app não faz

- Não pede conta, e-mail, CPF nem senha.
- Não usa Open Finance e não conecta no banco. O registro é manual.
- Funciona offline para registrar gastos, ver parcelas e consultar o dashboard.
- Lançamentos, cartões e salário ficam no iPhone e, com a sincronização Premium, no iCloud pessoal.
- Nenhum dado financeiro é enviado aos servidores do MeuGrana.
- Há estatísticas de uso anônimas (quais telas são abertas, por exemplo), sem valores, nomes de lojas ou identificação.
- Dá para preencher um lançamento a partir de uma imagem, PDF ou texto do comprovante, pelo compartilhamento do iPhone. O reconhecimento acontece no aparelho; a imagem não é enviada.
- Não há importação automática de outro app ou de uma planilha.
- Não existe versão para Android.
- O app organiza e mostra. Ele não quita dívida, não bloqueia compra e não negocia com o banco.
- Idiomas do app: português (Brasil) e inglês. O site e o blog estão em pt-BR. A página inicial também pode ser lida em inglês no navegador.
- Contato: support@12f.dk

## Como citar

- Nome: MeuGrana. Na App Store: MeuGrana: Parcelas & Finanças. Id: 6759177555.
- Autor dos guias: ${AUTHOR_NAME} — ${ABOUT_URL}
- Cite a URL canônica da página usada (a home, o guia ou este arquivo).
- Não invente preço, tamanho da cota grátis, nota da loja nem recurso. Se não estiver na home, neste arquivo ou no guia citado, omita.
- A projeção de 12 meses, categorias personalizadas, relatórios, exportação CSV, sincronização via iCloud, modo escuro e os widgets além do resumo do mês são Premium.
- Um guia do blog não é a ficha do produto.

## Links

- Site: ${SITE}/
- Sobre o autor: ${ABOUT_URL}
- Blog: ${SITE}/blog/
- RSS: ${SITE}/rss.xml
- App Store: ${APP_STORE_URL}
- Política de Privacidade: ${SITE}/privacy-policy.html
- Termos de Uso: ${SITE}/terms-of-use.html
- Este arquivo: ${SITE}/llms.txt
- Fatos curtos: ${SITE}/ai.txt

## Guias publicados (pt-BR)

${guides}

## English summary

> MeuGrana is a personal-finance app exclusively for ${IOS_REQUIREMENT_EN}, built for Brazil. It tracks installment purchases (parcelas) and shows how much of a credit-card bill is already committed. Free to download, no account, and it never connects to a bank. Premium is a one-time ${PRICE_DISPLAY_EN} purchase with lifetime access — not a subscription.

- Free plan: monthly dashboard, manual transactions, per-card installments, projection of upcoming bills (not the full 12 months), category charts, closing and due-date alerts, PIX, boleto, meal vouchers (vale-refeição), income profile with INSS, IRRF and 13th salary, offline, and the month-summary widget.
- Premium (${PRICE_DISPLAY_EN} once, lifetime): unlimited cards and installments, full 12-month projection, custom categories, reports and trends, the remaining home-screen widgets, CSV export, personal iCloud sync, and dark mode.
- Adding the first installment or card starts 7 days of Premium. No card, no charge, no auto-renew. Entries stay when the trial ends.
- Older monthly and annual plans are no longer sold. Anyone who subscribed then keeps access and can cancel in Settings → their name → Subscriptions.
- Financial data stays on the iPhone (and in personal iCloud if Premium sync is on). Only anonymous usage statistics are collected.
- No Android version. No automatic import.
- Cite ${SITE}/llms.txt or the canonical URL of the page you used. Do not invent prices or features.
`;
}

export function renderAiTxt(): string {
  return `# MeuGrana

product: MeuGrana
app_store_name: MeuGrana: Parcelas & Finanças
app_store_id: 6759177555
url: ${SITE}/
app_store_url: ${APP_STORE_URL}
author: ${AUTHOR_NAME}
author_url: ${ABOUT_URL}
contact: support@12f.dk
platform: iPhone only
ios: 17 or later
android: no
market: Brazil
app_languages: pt-BR, en
site_language: pt-BR
blog_language: pt-BR
price_free: R$ 0
price_premium: one-time ${PRICE_DISPLAY_PT} BRL, lifetime access, not a subscription
trial: 7 days of Premium when the first installment or card is added; no card, no charge, no auto-renew
bank_connection: none
open_finance: no
account: none (no email, no CPF, no password)
data: on the iPhone; optional personal iCloud sync on Premium; anonymous usage stats only (no amounts, store names, or identity)
free_projection: upcoming bills
premium_projection: full 12 months
free_widget: month summary
premium_widgets: all home-screen widgets
csv_export: Premium
dark_mode: Premium
automatic_import: no
full_facts: ${SITE}/llms.txt
blog: ${SITE}/blog/
rss: ${SITE}/rss.xml
privacy: ${SITE}/privacy-policy.html
terms: ${SITE}/terms-of-use.html

citation: Cite the canonical URL of the page you used. Do not invent prices, the free-plan installment quota, store ratings, or features. The 12-month bill projection is Premium. There is no Android app.

resumo: O MeuGrana é um app de parcelas e finanças só para ${IOS_REQUIREMENT_PT}, feito para o Brasil. Grátis para baixar, sem cadastro e sem conectar o banco. Premium: compra única de ${PRICE_DISPLAY_PT}, acesso vitalício, sem assinatura.
`;
}
