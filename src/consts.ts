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

export const APP_STORE_URL =
  "https://apps.apple.com/br/app/meugrana-parcelas-finan%C3%A7as/id6759177555";

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
// src/data/faq.ts, src/pages/*.astro, public/llms.txt and the blog, and run
// `node scripts/sync-faq-i18n.mjs`.
export const PRICE_BRL = "29.90";        // schema.org numeric, BRL
export const PRICE_DISPLAY_PT = "R$ 29,90";
export const PRICE_DISPLAY_EN = "R$ 29.90";
