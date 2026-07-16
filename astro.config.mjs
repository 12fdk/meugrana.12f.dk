import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://meugrana.12f.dk",
  base: "/",
  // 'preserve' mirrors the source structure: named pages keep their .html
  // URLs from the pre-Astro site (privacy-policy.html), while index files
  // stay directory indexes (blog/index.astro → /blog/).
  build: {
    format: "preserve",
  },
});
