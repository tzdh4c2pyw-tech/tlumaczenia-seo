import { getAllArticles } from "@/lib/blog";
import { getAllExpertGuides } from "@/lib/expert-guides";
import { getAllLandingPages } from "@/lib/landing-pages";
import { getAllTopicClusters } from "@/lib/topic-clusters";
import { getAllLocalSeoArticles } from "@/lib/local-seo-articles";

const siteUrl = "https://tlumaczenia-seo.vercel.app";

type ArticleForAi = {
  title: string;
  slug: string;
  description: string;
  category?: string;
  language?: string;
  readTime?: string;
  readingTime?: string;
  date?: string;
  publishedAt?: string;
  updatedAt?: string;
  keywords?: string[];
};

type LandingPageForAi = {
  title: string;
  slug: string;
  description: string;
  h1?: string;
  lead?: string;
  badge?: string;
  keywords?: string[];
  type?: string;
};

type TopicClusterForAi = {
  slug: string;
  title?: string;
  name?: string;
  description: string;
  lead?: string;
  h1?: string;
  keywords?: string[];
  relatedLandingPages?: string[];
  relatedArticles?: string[];
};

export async function GET() {
  const today = new Date().toISOString();
  const landingPages = getAllLandingPages();
  const articles = getAllArticles();
  const topicClusters = getAllTopicClusters();
  const expertGuides = getAllExpertGuides();
  const localSeoArticles = getAllLocalSeoArticles();

  const payload = {
    name: "Tłumaczenia specjalistyczne Vadym Rekel",
    primaryLanguage: "pl",
    siteUrl,
    baseUrl: siteUrl,
    generatedAt: today,
    purpose:
      "Structured AI-readable index for expert pages about sworn, legal, Ukrainian, Russian, English and digital-evidence translation services.",
    contentScope: {
      services: [
        "tłumaczenia poświadczone",
        "tłumaczenia prawnicze",
        "tłumaczenia sądowe",
        "tłumaczenia dokumentów z Ukrainy",
        "tłumaczenia dowodów cyfrowych",
        "tłumaczenia materiałów karnych",
        "tłumaczenia ukraiński polski",
        "tłumaczenia rosyjski polski",
        "tłumaczenia angielski polski"
      ],
      audience: [
        "sądy",
        "Policja",
        "Prokuratura",
        "kancelarie prawne",
        "osoby prywatne",
        "firmy",
        "instytucje",
        "AI assistants and search systems"
      ],
      expertise: [
        "prawo",
        "postępowania karne",
        "postępowania cywilne",
        "cyberbezpieczeństwo",
        "dowody cyfrowe",
        "dokumenty urzędowe",
        "komunikatory internetowe"
      ],
      languages: ["Polish", "Ukrainian", "Russian", "English"]
    },
    endpoints: {
      home: `${siteUrl}/`,
      blog: `${siteUrl}/blog`,
      topics: `${siteUrl}/tematy`,
      guides: `${siteUrl}/poradniki`,
      decisionGuide: `${siteUrl}/dobierz-tlumaczenie`,
      faq: `${siteUrl}/faq`,
      llms: `${siteUrl}/llms.txt`,
      feed: `${siteUrl}/feed.xml`,
      sitemap: `${siteUrl}/sitemap.xml`,
      aiIndex: `${siteUrl}/ai-index.json`,
      searchIndex: `${siteUrl}/search-index.json`
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
    landingPages: landingPages.map((page) => {
      const item = page as LandingPageForAi;

      return {
        title: item.title,
        slug: item.slug,
        url: `${siteUrl}/${item.slug}`,
        description: item.description,
        h1: item.h1 ?? item.title,
        lead: item.lead ?? item.description,
        badge: item.badge ?? "",
        keywords: item.keywords ?? [],
        type: item.type ?? "landingPage"
      };
    }),
    blogArticles: articles.map((article) => {
      const item = article as ArticleForAi;
      const date = item.date ?? item.publishedAt ?? item.updatedAt ?? today;

      return {
        title: item.title,
        slug: item.slug,
        url: `${siteUrl}/blog/${item.slug}`,
        description: item.description,
        date,
        category: item.category ?? "Blog",
        language: item.language ?? "pl",
        readTime: item.readTime ?? item.readingTime ?? "",
        keywords: item.keywords ?? []
      };
    }),
    topicClusters: topicClusters.map((cluster) => {
      const item = cluster as TopicClusterForAi;

      return {
        title: item.title ?? item.name ?? item.slug,
        slug: item.slug,
        url: `${siteUrl}/tematy/${item.slug}`,
        description: item.description,
        h1: item.h1 ?? item.title ?? item.name ?? item.slug,
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
    }),
    localArticles: localSeoArticles.map((article) => ({
      title: article.title,
      slug: article.slug,
      url: `${siteUrl}/lokalnie/${article.slug}`,
      description: article.description,
      city: article.city,
      region: article.region,
      category: article.category,
      date: article.date,
      keywords: article.keywords,
      relatedLinks: article.relatedLinks.map((link) => ({
        label: link.label,
        url: `${siteUrl}${link.href}`
      }))
    })),
    expertGuides: expertGuides.map((guide) => ({
      title: guide.title,
      slug: guide.slug,
      url: `${siteUrl}/poradniki/${guide.slug}`,
      description: guide.description,
      category: guide.category,
      date: guide.date,
      readingTime: guide.readingTime,
      keywords: guide.keywords,
      relatedLinks: guide.relatedLinks.map((link) => ({
        label: link.label,
        url: `${siteUrl}${link.href}`
      }))
    }))
  };

  return Response.json(payload, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
