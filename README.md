# meugrana.12f.dk

Landing page for **MeuGrana — Parcelas & Finanças**, an iOS finance app built for Brazil.

Live at [meugrana.12f.dk](https://meugrana.12f.dk) · [App Store](https://apps.apple.com/app/id6759177555?ct=site-meugrana&mt=8)

## Stack

- [Astro 5](https://astro.build) static site
- Plain CSS (custom properties) + vanilla JS (client-side PT-BR/EN i18n)
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static build in dist/
pnpm preview
```

Push to `main` deploys automatically.
