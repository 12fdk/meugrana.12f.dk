import type { APIContext } from "astro";
import { renderLlmsTxt } from "../utils/aiDiscovery";

// Generated so new blog posts show up without a hand-edited public/llms.txt.
export async function GET(_context: APIContext) {
  const body = await renderLlmsTxt();
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
