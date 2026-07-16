import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts, postUrl } from "../utils/blog";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: "Blog do MeuGrana",
    description:
      "Guias práticos sobre parcelas, fatura do cartão e controle financeiro do jeito brasileiro.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: postUrl(post),
      author: post.data.author,
      categories: [post.data.keyword, ...post.data.tags].filter(
        (t): t is string => Boolean(t),
      ),
    })),
    customData: "<language>pt-BR</language>",
  });
}
