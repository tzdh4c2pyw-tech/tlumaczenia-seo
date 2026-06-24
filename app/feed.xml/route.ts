import { getAllArticles } from "@/lib/blog";

export const dynamic = "force-static";

const siteUrl = "https://tlumaczenia-seo.vercel.app";
const feedTitle = "Baza wiedzy | Tłumaczenia specjalistyczne Vadym Rekel";
const feedDescription =
  "Ekspercki blog o tłumaczeniach poświadczonych i specjalistycznych: ukraiński, rosyjski, angielski, sądy, Policja, prokuratura, prawo, cyber, forensic i PDF.";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const articles = getAllArticles();

  const items = articles
    .map((article) => {
      const url = `${siteUrl}/blog/${article.slug}`;

      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description>${escapeXml(article.description)}</description>
      <category>${escapeXml(article.category)}</category>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <link>${siteUrl}/blog</link>
    <description>${escapeXml(feedDescription)}</description>
    <language>pl</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
