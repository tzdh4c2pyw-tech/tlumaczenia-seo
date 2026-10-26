import { getAllArticles } from "@/lib/blog";
import { getAllExpertGuides } from "@/lib/expert-guides";
import { getAllLandingPages } from "@/lib/landing-pages";
import { getAllTopicClusters } from "@/lib/topic-clusters";
import { getAllLocalSeoArticles } from "@/lib/local-seo-articles";
import { getAllMalopolskieSeoPages } from "@/lib/malopolskie-seo-pages";
import { getAllKrakowSeoPages } from "@/lib/krakow-seo-pages";

const siteUrl = "https://seo.vadymrekel.pro";

type ArticleForIndex = {
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

type LandingPageForIndex = {
  title: string;
  slug: string;
  description: string;
  h1?: string;
  lead?: string;
  badge?: string;
  keywords?: string[];
  type?: string;
};

type TopicClusterForIndex = {
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
  const today = "2026-10-18T00:00:00Z";
  const landingPages = getAllLandingPages();
  const articles = getAllArticles();
  const topicClusters = getAllTopicClusters();
  const expertGuides = getAllExpertGuides();
  const localSeoArticles = getAllLocalSeoArticles();
  const malopolskieSeoPages = getAllMalopolskieSeoPages();
  const krakowSeoPages = getAllKrakowSeoPages();

  const payload = {
    name: "Tłumaczenia specjalistyczne Vadym Rekel",
    primaryLanguage: "pl",
    siteUrl,
    baseUrl: siteUrl,
    generatedAt: today,
    purpose:
      "Index of Ukrainian–Polish sworn translation, procedural guides and digital-material preparation. Russian services are ordinary only; English articles are educational.",
    contentScope: {
      services: [
        "tłumaczenia poświadczone polsko-ukraińskie",
        "tłumaczenia prawnicze",
        "tłumaczenia sądowe",
        "tłumaczenia dokumentów z Ukrainy",
        "tłumaczenia dowodów cyfrowych",
        "tłumaczenia materiałów karnych",
        "tłumaczenia ukraiński polski",
        "tłumaczenia zwykłe rosyjski polski",
        "dokumenty angielskie — wiedza informacyjna"
      ],
      audience: [
        "sądy",
        "Policja",
        "Prokuratura",
        "kancelarie prawne",
        "osoby prywatne",
        "firmy",
        "instytucje",
        "search systems"
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
      resources: `${siteUrl}/resources.txt`,
      feed: `${siteUrl}/feed.xml`,
      sitemap: `${siteUrl}/sitemap.xml`,
      contentIndex: `${siteUrl}/content-index.json`,
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
      const item = page as LandingPageForIndex;

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
      const item = article as ArticleForIndex;
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
      const item = cluster as TopicClusterForIndex;

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
    krakowSeoPages: krakowSeoPages.map((page) => ({
      title: page.title,
      slug: page.slug,
      url: `${siteUrl}/krakow/${page.slug}`,
      description: page.description,
      service: page.service,
      date: page.date,
      keywords: page.keywords,
      relatedLinks: page.relatedLinks.map((link) => ({
        label: link.label,
        url: `${siteUrl}${link.href}`
      }))
    })),
    malopolskieSeoPages: malopolskieSeoPages.map((page) => ({
      title: page.title,
      slug: page.slug,
      url: `${siteUrl}/malopolskie/${page.slug}`,
      description: page.description,
      city: page.city,
      county: page.county,
      service: page.service,
      date: page.date,
      keywords: page.keywords,
      relatedLinks: page.relatedLinks.map((link) => ({
        label: link.label,
        url: `${siteUrl}${link.href}`
      }))
    })),
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


// Additional index resources:
// contact: /kontakt
// internalLinkGraph: /internal-link-graph.json
