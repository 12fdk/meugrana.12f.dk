import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://meugrana.12f.dk",
  base: "/",
  // Emit `privacy-policy.html` instead of `privacy-policy/index.html` so the
  // URLs of the previous pure-HTML site keep working unchanged.
  build: {
    format: "file",
  },
});
