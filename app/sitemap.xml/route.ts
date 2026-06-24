import { getAllArticles } from "@/lib/blog";
import { getAllLandingPages } from "@/lib/landing-pages";

const siteUrl = "https://tlumaczenia-seo.vercel.app";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function urlEntry({
  url,
  lastModified,
  changeFrequency,
  priority
}: {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: string;
}) {
  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const now = new Date().toISOString();

  const corePages = [
  {
    url: `${siteUrl}/llms.txt`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: "0.4"
  },

  {
    url: `${siteUrl}/ai-index.json`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: "0.4"
  },

  {
    url: `${siteUrl}/feed.xml`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: "0.5"
  },
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: "1.0"
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: "0.9"
    },
    {
      url: `${siteUrl}/pdf-na-tekst`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: "0.82"
    }
  ];

  const landingPages = getAllLandingPages().map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: page.type === "miasto" ? "monthly" : "weekly",
    priority:
      page.type === "język"
        ? "0.95"
        : page.type === "usługa"
          ? "0.9"
          : page.type === "specjalizacja"
            ? "0.88"
            : "0.72"
  }));

  const blogPages = getAllArticles().map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt).toISOString(),
    changeFrequency: "monthly",
    priority: "0.85"
  }));

  const urls = [...corePages, ...landingPages, ...blogPages]
    .map(urlEntry)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}