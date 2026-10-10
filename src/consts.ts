// Shared site-wide constants.
export const SITE = "https://meugrana.12f.dk";

// JSON-LD @id anchors for the site-wide entities emitted by Layout.astro.
// Reference these from page-level schema (SoftwareApplication, BlogPosting).
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

// The author entity, defined in full on /sobre.html and referenced by @id
// from every BlogPosting so the byline resolves to a real, crawlable page.
export const PERSON_ID = `${SITE}/sobre.html#robert-jensen`;
export const ABOUT_URL = `${SITE}/sobre.html`;

/** Author bio (E-E-A-T). Single source for /sobre.html and BlogPosting.author. */
export const AUTHOR_NAME = "Robert Jensen";
export const AUTHOR_BIO =
  "Robert Jensen é o desenvolvedor independente por trás do MeuGrana. Cria apps para iPhone na Dinamarca e escreve guias práticos sobre parcelas, cartão de crédito e controle financeiro para o público brasileiro.";
export const AUTHOR_SITE = "https://12f.dk";

const APP_STORE_ID = "6759177555";

/** App Store Connect reads `ct` into the Campaign column. Max 40 characters. */
const APP_STORE_CT_MAX = 40;

/**
 * Tagged App Store link. `mt=8` is the iOS app media type.
 * Do not add `pt=` (provider token) unless Connect still leaves Campaign empty.
 */
export function appStoreCampaignUrl(token: string): string {
  const ct = token.slice(0, APP_STORE_CT_MAX);
  return `https://apps.apple.com/app/id${APP_STORE_ID}?ct=${encodeURIComponent(ct)}&mt=8`;
}

/** Homepage and site-chrome CTAs. */
export const APP_STORE_URL = appStoreCampaignUrl("site-meugrana");

/** /llms.txt and /ai.txt, so assistant referrals are their own campaign. */
export const APP_STORE_URL_LLMS = appStoreCampaignUrl("llms-meugrana");

/** In-post links and the blog banner. Token is `blog-<slug>`, truncated to 40. */
export function appStoreBlogUrl(slug: string): string {
  return appStoreCampaignUrl(`blog-${slug}`);
}

// Localized "Download on the App Store" badges. The pt-BR badge is the static
// default (page default language); js/main.js swaps `img[data-badge]` sources
// when the language is toggled.
export const APP_STORE_BADGE_BASE =
  "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/";

export const APP_STORE_BADGE_URL = `${APP_STORE_BADGE_BASE}pt-br?size=250x83`;

// Premium price. One number, one place — it was left at R$ 19,90 in the
// SoftwareApplication JSON-LD for the whole of 12fdk/meugrana#365, which is
// the copy Google and the AI crawlers read. Raised to R$ 29,90 on 2026-09-11.
// When it changes: edit here, then grep for the display strings in
// src/data/faq.ts, src/pages/*.astro, src/utils/aiDiscovery.ts and the blog,
// and run `node scripts/sync-faq-i18n.mjs`.
export const PRICE_BRL = "29.90";        // schema.org numeric, BRL
export const PRICE_DISPLAY_PT = "R$ 29,90";
export const PRICE_DISPLAY_EN = "R$ 29.90";

// Homepage meta description. Also the WebSite JSON-LD description.
// Free-plan-safe: the 12-month projection is Premium (see public/js/main.js).
export const SITE_DESCRIPTION =
  "App de parcelas exclusivo para iPhone, feito para o Brasil: acompanhe cartões e a projeção das próximas faturas. Grátis, sem cadastro e sem conectar o banco.";

// faq.q7 in public/js/main.js. There is no Android app.
export const IOS_REQUIREMENT_PT = "iPhone (iOS 17 ou superior)";
export const IOS_REQUIREMENT_EN = "iPhone (iOS 17 or later)";
