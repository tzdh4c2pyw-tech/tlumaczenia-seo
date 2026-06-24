import { getAllArticles } from "@/lib/blog";
import { getAllLandingPages } from "@/lib/landing-pages";

export const dynamic = "force-static";

const siteName = "Tłumaczenia specjalistyczne Vadym Rekel";
const siteUrl = "https://tlumaczenia-seo.vercel.app";

export async function GET() {
  const landingPages = getAllLandingPages().map((page) => ({
    type: "landing-page",
    title: page.title,
    slug: page.slug,
    url: `${siteUrl}/${page.slug}`,
    description: page.description,
    h1: page.h1,
    lead: page.lead,
    badge: page.badge,
    keywords: page.keywords,
    ctaTitle: page.ctaTitle
  }));

  const blogArticles = getAllArticles().map((article) => ({
    type: "expert-article",
    title: article.title,
    slug: article.slug,
    url: `${siteUrl}/blog/${article.slug}`,
    description: article.description,
    category: article.category,
    language: article.language,
    readTime: article.readTime,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    keywords: article.keywords
  }));

  const payload = {
    name: siteName,
    primaryLanguage: "pl",
    canonicalDomainPending: true,
    currentTechnicalDomain: siteUrl,
    mainOfficeUrl: "https://www.tlumaczrosyjskiegoiukrainskiego.pl/",
    generatedAt: new Date().toISOString(),
    purpose:
      "Machine-readable index for AI systems, search quality audits and content discovery.",
    contentScope: [
      "certified translations",
      "Ukrainian translations",
      "Russian translations",
      "English translations",
      "legal translation",
      "court documents",
      "police and prosecution materials",
      "digital evidence",
      "PDF text extraction",
      "cybersecurity and forensic translation contexts"
    ],
    endpoints: {
      home: `${siteUrl}/`,
      blog: `${siteUrl}/blog`,
      llms: `${siteUrl}/llms.txt`,
      feed: `${siteUrl}/feed.xml`,
      sitemap: `${siteUrl}/sitemap.xml`,
      pdfToText: `${siteUrl}/pdf-na-tekst`,
      contact: `${siteUrl}/kontakt`
    },
    counts: {
      landingPages: landingPages.length,
      blogArticles: blogArticles.length,
      totalIndexedItems: landingPages.length + blogArticles.length
    },
    landingPages,
    blogArticles
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
