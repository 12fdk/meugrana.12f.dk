// Shared site-wide constants.
export const SITE = "https://meugrana.12f.dk";

export const APP_STORE_URL =
  "https://apps.apple.com/br/app/meugrana-parcelas-finan%C3%A7as/id6759177555";

// Localized "Download on the App Store" badges. The pt-BR badge is the static
// default (page default language); js/main.js swaps `img[data-badge]` sources
// when the language is toggled.
export const APP_STORE_BADGE_BASE =
  "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/";

export const APP_STORE_BADGE_URL = `${APP_STORE_BADGE_BASE}pt-br?size=250x83`;
