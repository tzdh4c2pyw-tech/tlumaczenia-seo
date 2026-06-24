import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const content = await readFile(join(process.cwd(), "public", "llms.txt"), "utf8");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}


// Kluczowe zasoby indeksowania:
// Blog ekspercki: /blog
// Poradniki: /poradniki
// Tematy eksperckie: /tematy
// FAQ: /faq
// Dobierz tłumaczenie: /dobierz-tlumaczenie
// Kontakt: /kontakt
// Search index: /search-index.json
// RSS feed: /feed.xml
// LLMS: /llms.txt
// AI index: /ai-index.json
// Sitemap: /sitemap.xml
// Internal link graph: /internal-link-graph.json
