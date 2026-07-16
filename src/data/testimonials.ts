// Real user testimonials, sourced from App Store reviews (Brazil storefront).
//
// IMPORTANT: only add REAL quotes from actual reviews — never invent them.
// Check for new written reviews with:
//   curl -s "https://itunes.apple.com/br/rss/customerreviews/id=6759177555/sortby=mostrecent/json"
// or via App Store Connect. As of 2026-07-16 the app has ratings but no
// written reviews yet, so this list is empty and the section is hidden.
//
// When adding a quote: use first name + initial (e.g. "Maria S."), keep the
// original Portuguese in `quotePt` and translate it in `quoteEn`. Prefer
// quotes that each highlight a distinct benefit (parcelas, projeção,
// feito-para-o-Brasil).
export interface Testimonial {
  /** First name + initial, e.g. "Maria S." */
  name: string;
  /** Star rating the reviewer gave (1–5). */
  rating: number;
  quotePt: string;
  quoteEn: string;
}

export const testimonials: Testimonial[] = [];
