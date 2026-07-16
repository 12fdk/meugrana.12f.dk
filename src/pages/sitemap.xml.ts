import type { APIContext } from "astro";
import { getPublishedPosts, postUrl } from "../utils/blog";
import { SITE } from "../consts";

// Hand-built sitemap so /sitemap.xml (already referenced by robots.txt and
// search consoles) keeps its URL while blog posts are included automatically.
const day = (d: Date) => d.toISOString().slice(0, 10);

export async function GET(_context: APIContext) {
  const posts = await getPublishedPosts();

  const staticUrls = `  <url>
    <loc>${SITE}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${SITE}/images/og-image.png</image:loc>
      <image:title>MeuGrana — Parcelas &amp; Finanças</image:title>
    </image:image>
${[1, 2, 3, 4, 5]
  .map(
    (n) => `    <image:image>
      <image:loc>${SITE}/images/screenshots/pt-BR/screenshot-${n}.png</image:loc>
    </image:image>`,
  )
  .join("\n")}
  </url>
  <url>
    <loc>${SITE}/blog/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE}/privacy-policy.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE}/terms-of-use.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE}/llms.txt</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;

  const postUrls = posts
    .map(
      (post) => `  <url>
    <loc>${SITE}${postUrl(post)}</loc>
    <lastmod>${day(post.data.updatedDate ?? post.data.publishDate)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticUrls}
${postUrls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
