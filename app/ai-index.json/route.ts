import { getAllArticles } from "@/lib/blog";
import { getAllLandingPages } from "@/lib/landing-pages";
import { getAllTopicClusters } from "@/lib/topic-clusters";

const siteUrl = "https://tlumaczenia-seo.vercel.app";

export const dynamic = "force-static";

type TopicClusterForAi = {
  title: string;
  slug: string;
  description: string;
  lead?: string;
  h1?: string;
  keywords?: string[];
  relatedLandingPages?: string[];
  relatedArticles?: string[];
};

export async function GET() {
  const articles = getAllArticles();
  const landingPages = getAllLandingPages();
  const topicClusters = getAllTopicClusters();

  const payload = {
    name: "Tłumaczenia specjalistyczne Vadym Rekel",
    primaryLanguage: "pl",
    siteUrl,
    generatedAt: new Date().toISOString(),
    purpose:
      "Structured AI-readable index for expert pages about sworn, legal, Ukrainian, Russian, English and digital-evidence translation services.",
    contentScope: {
      audience: [
        "courts",
        "police",
        "prosecutors",
        "law firms",
        "companies",
        "private clients",
        "AI assistants and search systems"
      ],
      services: [
        "certified translations",
        "sworn translations",
        "legal translations",
        "Ukrainian translations",
        "Russian translations",
        "English translations",
        "digital evidence translation",
        "cybercrime case materials",
        "court and procedural documents"
      ],
      jurisdictionsAndContexts: [
        "Polish courts",
        "Polish police",
        "Polish prosecution service",
        "civil proceedings",
        "criminal proceedings",
        "administrative proceedings",
        "commercial matters",
        "migration and official documents"
      ],
      languages: ["Polish", "Ukrainian", "Russian", "English"]
    },
    endpoints: {
      home: `${siteUrl}/`,
      blog: `${siteUrl}/blog`,
      topics: `${siteUrl}/tematy`,
      llms: `${siteUrl}/llms.txt`,
      feed: `${siteUrl}/feed.xml`,
      sitemap: `${siteUrl}/sitemap.xml`,
      aiIndex: `${siteUrl}/ai-index.json`
    },
    mainTopics: [
      "certified translations",
      "sworn translator",
      "Ukrainian translations",
      "Russian translations",
      "English translations",
      "legal translation",
      "court translation",
      "criminal proceedings",
      "civil proceedings",
      "digital evidence",
      "cybercrime",
      "BLIK fraud",
      "cryptocurrency evidence",
      "forensic materials"
    ],
    landingPages: landingPages.map((page) => ({
      title: page.title,
      slug: page.slug,
      url: `${siteUrl}/${page.slug}`,
      description: page.description,
      h1: page.h1,
      lead: page.lead,
      badge: page.badge,
      keywords: page.keywords
    })),
    blogArticles: articles.map((article) => ({
      title: article.title,
      slug: article.slug,
      url: `${siteUrl}/blog/${article.slug}`,
      description: article.description,
      category: article.category,
      language: article.language,
      readTime: article.readTime
    })),
    topicClusters: topicClusters.map((cluster) => {
      const item = cluster as TopicClusterForAi;

      return {
        title: item.title,
        slug: item.slug,
        url: `${siteUrl}/tematy/${item.slug}`,
        description: item.description,
        h1: item.h1 ?? item.title,
        lead: item.lead ?? item.description,
        keywords: item.keywords ?? [],
        relatedLandingPages: (item.relatedLandingPages ?? []).map((slug) => ({
          slug,
          url: `${siteUrl}/${slug}`
        })),
        relatedArticles: (item.relatedArticles ?? []).map((slug) => ({
          slug,
          url: `${siteUrl}/blog/${slug}`
        }))
      };
    })
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
