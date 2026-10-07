import type { APIContext } from "astro";
import { renderAiTxt } from "../utils/aiDiscovery";

export function GET(_context: APIContext) {
  return new Response(renderAiTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
