import { getAllArticles } from "@/lib/blog";
import { getAllExpertGuides } from "@/lib/expert-guides";

const siteUrl = "https://tlumaczenia-seo.vercel.app";

type ArticleForFeed = {
  title: string;
  slug: string;
  description: string;
  date?: string;
  publishedAt?: string;
  updatedAt?: string;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function safePubDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return new Date().toUTCString();
  }
  return date.toUTCString();
}

export async function GET() {
  const today = new Date().toISOString();

  const blogItems = getAllArticles().map((article) => {
    const item = article as ArticleForFeed;

    return {
      title: item.title,
      description: item.description,
      url: `${siteUrl}/blog/${item.slug}`,
      date: item.date ?? item.publishedAt ?? item.updatedAt ?? today
    };
  });

  const guideItems = getAllExpertGuides().map((guide) => ({
    title: guide.title,
    description: guide.description,
    url: `${siteUrl}/poradniki/${guide.slug}`,
    date: guide.date
  }));

  const items = [...blogItems, ...guideItems].sort((a, b) =>
    String(b.date).localeCompare(String(a.date))
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Tłumaczenia specjalistyczne Vadym Rekel</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>Eksperckie materiały o tłumaczeniach poświadczonych, prawniczych, sądowych i cyfrowych.</description>
    <language>pl</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid>${escapeXml(item.url)}</guid>
      <pubDate>${safePubDate(item.date)}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
