# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **MeuGrana**, an iOS finance app (parcelas/financas). Astro static site hosted on GitHub Pages at meugrana.12f.dk.

App Store: https://apps.apple.com/br/app/meugrana-parcelas-finan%C3%A7as/id6759177555

## Development

Astro 5 static build, managed with **pnpm** (same stack as the sister sites `~/Git/home-stories.12f.dk` and `~/Git/event-stories.12f.dk`).

**Run locally:**
```bash
pnpm install
pnpm dev        # http://localhost:4321
```

**Build & preview:**
```bash
pnpm build      # outputs to dist/
pnpm preview
```

**Deploy:** Push to `main` — `.github/workflows/deploy.yml` builds and deploys to GitHub Pages (custom domain via `public/CNAME`). PRs are build-checked by `.github/workflows/ci.yml`.

## Architecture

```
astro.config.mjs            # site URL, build.format:'file' (keeps *.html URLs)
src/
  consts.ts                 # SITE, App Store URL/badge constants
  layouts/Layout.astro      # shared head (meta, favicons, stylesheet, Umami)
  components/               # Navbar, Hero, Features, Screenshots, Premium,
                            #   DownloadCta, Footer
  pages/
    index.astro             # landing page (+ SoftwareApplication JSON-LD)
    privacy-policy.astro    # bilingual PT/EN privacy policy
    404.astro               # standalone error page
public/                     # copied verbatim into dist/
  CNAME                     # GitHub Pages custom domain
  css/style.css             # all styles (CSS custom properties)
  js/main.js                # i18n, scroll animations, mobile nav
  images/screenshots/       # locale-specific: pt-BR/ and en-US/ (1-5.png)
  robots.txt, llms.txt, sitemap.xml
```

**Important:** `build.format: 'file'` in `astro.config.mjs` makes `src/pages/foo.astro` emit `/foo.html` so URLs from the pre-Astro site keep working. Keep this until redirects are set up.

### Internationalization (i18n)

Client-side language switching implemented in `public/js/main.js`:
- Translation dictionary maps `data-i18n` attributes to PT-BR/EN-US strings
- Language preference persisted in LocalStorage
- Browser language auto-detected on first visit
- Screenshots swap between `images/screenshots/pt-BR/` and `images/screenshots/en-US/`

When adding translatable text, add `data-i18n="key"` to the element (PT-BR text as the static default) and add both `pt` and `en` entries in the `translations` object in `public/js/main.js`.

### CSS Design System

Brand colors defined as CSS custom properties in `public/css/style.css`:
- `--brand-green: #006B4F` (primary)
- Semantic colors: income green, installment blue, warning orange, expense red
- Mobile-first responsive breakpoints: 375px, 768px, 1024px, 1400px

### Scroll Animations

Uses IntersectionObserver for fade-in effects. Respects `prefers-reduced-motion`.

## Testing

No automated tests (CI just runs `pnpm build`). Manually verify:
- Both languages (toggle in nav)
- Mobile and desktop viewports
- iOS Safari (primary target audience)

## Task tracking

All work is tracked in GitHub issues (`gh issue list`). The roadmap epic is issue #14.
