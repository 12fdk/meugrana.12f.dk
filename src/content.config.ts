import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts: markdown in src/content/blog/, pt-BR primarily (target
// audience is Brazil). Title/description limits keep SERP snippets intact.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    /** Primary keyword the post targets (see BLOG_CONTENT_PLAN.md). */
    keyword: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Robert Jensen"),
    tags: z.array(z.string()).default([]),
    /** Slugs of related posts to show at the end of the article. */
    relatedSlugs: z.array(z.string()).default([]),
    /**
     * FAQ entries rendered as the "Perguntas frequentes" section AND emitted
     * as FAQPage JSON-LD — one source keeps visible text and schema in sync.
     */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** Cover illustration (root-absolute path under /images/blog/). */
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
