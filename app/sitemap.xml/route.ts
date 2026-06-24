import { getAllArticles } from "@/lib/blog";
import { getAllExpertGuides } from "@/lib/expert-guides";
import { getAllLandingPages } from "@/lib/landing-pages";
import { getAllTopicClusters } from "@/lib/topic-clusters";

const siteUrl = "https://tlumaczenia-seo.vercel.app";

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
};

type ArticleForSitemap = {
  slug: string;
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

export async function GET() {
  const today = new Date().toISOString();

  const corePages: SitemapEntry[] = [
    { url: siteUrl, lastModified: today, changeFrequency: "weekly", priority: "1.0" },
    { url: `${siteUrl}/blog`, lastModified: today, changeFrequency: "weekly", priority: "0.8" },
    { url: `${siteUrl}/kontakt`, lastModified: today, changeFrequency: "monthly", priority: "0.7" },
    { url: `${siteUrl}/pdf-na-tekst`, lastModified: today, changeFrequency: "monthly", priority: "0.6" },
    { url: `${siteUrl}/tematy`, lastModified: today, changeFrequency: "weekly", priority: "0.8" },
    { url: `${siteUrl}/poradniki`, lastModified: today, changeFrequency: "weekly", priority: "0.8" },
    { url: `${siteUrl}/llms.txt`, lastModified: today, changeFrequency: "monthly", priority: "0.4" },
    { url: `${siteUrl}/ai-index.json`, lastModified: today, changeFrequency: "weekly", priority: "0.4" },
    { url: `${siteUrl}/search-index.json`, lastModified: today, changeFrequency: "weekly", priority: "0.4" },
    { url: `${siteUrl}/feed.xml`, lastModified: today, changeFrequency: "weekly", priority: "0.4" }
  ];

  const landingPages: SitemapEntry[] = getAllLandingPages().map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: "0.8"
  }));

  const blogArticles: SitemapEntry[] = getAllArticles().map((article) => {
    const item = article as ArticleForSitemap;

    return {
      url: `${siteUrl}/blog/${item.slug}`,
      lastModified: item.date ?? item.publishedAt ?? item.updatedAt ?? today,
      changeFrequency: "monthly",
      priority: "0.7"
    };
  });

  const topicHubs: SitemapEntry[] = getAllTopicClusters().map((cluster) => ({
    url: `${siteUrl}/tematy/${cluster.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: "0.75"
  }));

  const expertGuides: SitemapEntry[] = getAllExpertGuides().map((guide) => ({
    url: `${siteUrl}/poradniki/${guide.slug}`,
    lastModified: guide.date || today,
    changeFrequency: "monthly",
    priority: "0.75"
  }));

  const entries = [
    ...corePages,
    ...landingPages,
    ...blogArticles,
    ...topicHubs,
    ...expertGuides
  ];

  const uniqueEntries = Array.from(
    new Map(entries.map((entry) => [entry.url, entry])).values()
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueEntries
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
