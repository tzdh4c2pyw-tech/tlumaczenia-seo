import { getAllArticles } from "@/lib/blog";
import { getAllLandingPages } from "@/lib/landing-pages";
import { getAllTopicClusters } from "@/lib/topic-clusters";

const siteUrl = "https://tlumaczenia-seo.vercel.app";

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: string;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function GET() {
  const now = new Date().toISOString();

  const corePages: SitemapEntry[] = [
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
      priority: "0.8"
    },
    {
      url: `${siteUrl}/tematy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: "0.8"
    },
    {
      url: `${siteUrl}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: "0.7"
    },
    {
      url: `${siteUrl}/pdf-na-tekst`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: "0.7"
    },
    {
      url: `${siteUrl}/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: "0.4"
    },
    {
      url: `${siteUrl}/ai-index.json`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: "0.4"
    },
    {
      url: `${siteUrl}/feed.xml`,
      lastModified: now,
      changeFrequency: "daily",
      priority: "0.5"
    }
  ];

  const landingPages: SitemapEntry[] = getAllLandingPages().map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: "0.8"
  }));

  const topicPages: SitemapEntry[] = getAllTopicClusters().map((cluster) => ({
    url: `${siteUrl}/tematy/${cluster.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: "0.75"
  }));

  const blogPages: SitemapEntry[] = getAllArticles().map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: article.updatedAt || article.publishedAt || now,
    changeFrequency: "monthly",
    priority: "0.7"
  }));

  const entries = [
    ...corePages,
    ...landingPages,
    ...topicPages,
    ...blogPages
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${escapeXml(entry.lastModified)}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
