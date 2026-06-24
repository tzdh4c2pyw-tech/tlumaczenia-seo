import { getAllArticles } from "@/lib/blog";
import { getAllExpertGuides } from "@/lib/expert-guides";
import { getAllLandingPages } from "@/lib/landing-pages";
import { getAllTopicClusters } from "@/lib/topic-clusters";

const siteUrl = "https://tlumaczenia-seo.vercel.app";

export const dynamic = "force-static";

type ArticleForSearch = {
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

type LandingPageForSearch = {
  title: string;
  slug: string;
  description: string;
  h1?: string;
  lead?: string;
  badge?: string;
  keywords?: string[];
  type?: string;
};

type TopicClusterForSearch = {
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

function normalizeText(parts: Array<string | string[] | undefined>) {
  return parts
    .flatMap((part) => {
      if (!part) return [];
      return Array.isArray(part) ? part : [part];
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function GET() {
  const today = new Date().toISOString();

  const corePages = [
    {
      type: "core",
      title: "Strona główna",
      url: `${siteUrl}/`,
      path: "/",
      description:
        "Tłumaczenia poświadczone, prawnicze, sądowe, ukraińskie, rosyjskie i angielskie.",
      keywords: ["tłumacz przysięgły", "tłumaczenia prawne", "tłumaczenia ukraińskie"],
      content: "Tłumaczenia specjalistyczne i poświadczone dla sądów, Policji, Prokuratury, kancelarii, firm i osób prywatnych."
    },
    {
      type: "core",
      title: "Kontakt",
      url: `${siteUrl}/kontakt`,
      path: "/kontakt",
      description: "Kontakt w sprawie tłumaczeń dokumentów, akt i materiałów cyfrowych.",
      keywords: ["kontakt", "wycena tłumaczenia", "tłumacz przysięgły"],
      content: "Kontakt i wstępna wycena tłumaczenia poświadczonego lub specjalistycznego."
    },
    {
      type: "core",
      title: "Blog",
      url: `${siteUrl}/blog`,
      path: "/blog",
      description: "Artykuły o tłumaczeniach poświadczonych i prawnych.",
      keywords: ["blog", "tłumaczenia poświadczone", "prawo"],
      content: "Eksperckie artykuły o tłumaczeniach poświadczonych, ustawie o zawodzie tłumacza przysięgłego i praktyce tłumaczeń prawnych."
    },
    {
      type: "core",
      title: "Tematy eksperckie",
      url: `${siteUrl}/tematy`,
      path: "/tematy",
      description: "Klastry tematyczne o tłumaczeniach specjalistycznych.",
      keywords: ["tematy eksperckie", "topic clusters", "tłumaczenia sądowe"],
      content: "Strukturalne tematy eksperckie łączące usługi, blog i poradniki."
    },
    {
      type: "core",
      title: "Dobierz tłumaczenie",
      url: `${siteUrl}/dobierz-tlumaczenie`,
      path: "/dobierz-tlumaczenie",
      description:
        "Szybka ścieżka wyboru tłumaczenia poświadczonego lub specjalistycznego.",
      keywords: ["dobierz tłumaczenie", "wycena tłumaczenia", "tłumaczenia poświadczone"],
      content:
        "Strona pomaga dobrać właściwy rodzaj tłumaczenia dla dokumentów, akt, dowodów cyfrowych, sądu, Policji, Prokuratury, komunikatorów, BLIK i kryptowalut."
    },
    {
      type: "core",
      title: "Poradniki eksperckie",
      url: `${siteUrl}/poradniki`,
      path: "/poradniki",
      description: "Poradniki o tłumaczeniach akt, dokumentów i dowodów cyfrowych.",
      keywords: ["poradniki", "dowody cyfrowe", "dokumenty z Ukrainy"],
      content: "Praktyczne poradniki dla osób i instytucji zlecających tłumaczenia dokumentów, akt, korespondencji i materiałów cyfrowych."
    }
  ];

  const landingPages = getAllLandingPages().map((page) => {
    const item = page as LandingPageForSearch;

    return {
      type: "landingPage",
      title: item.title,
      url: `${siteUrl}/${item.slug}`,
      path: `/${item.slug}`,
      description: item.description,
      keywords: item.keywords ?? [],
      content: normalizeText([
        item.title,
        item.h1,
        item.lead,
        item.description,
        item.badge,
        item.keywords
      ])
    };
  });

  const blogArticles = getAllArticles().map((article) => {
    const item = article as ArticleForSearch;
    const date = item.date ?? item.publishedAt ?? item.updatedAt ?? today;

    return {
      type: "blogArticle",
      title: item.title,
      url: `${siteUrl}/blog/${item.slug}`,
      path: `/blog/${item.slug}`,
      description: item.description,
      category: item.category ?? "Blog",
      language: item.language ?? "pl",
      date,
      keywords: item.keywords ?? [],
      content: normalizeText([
        item.title,
        item.description,
        item.category,
        item.language,
        item.keywords
      ])
    };
  });

  const topicClusters = getAllTopicClusters().map((cluster) => {
    const item = cluster as TopicClusterForSearch;
    const title = item.title ?? item.name ?? item.slug;

    return {
      type: "topicCluster",
      title,
      url: `${siteUrl}/tematy/${item.slug}`,
      path: `/tematy/${item.slug}`,
      description: item.description,
      keywords: item.keywords ?? [],
      relatedPaths: [
        ...(item.relatedLandingPages ?? []).map((slug) => `/${slug}`),
        ...(item.relatedArticles ?? []).map((slug) => `/blog/${slug}`)
      ],
      content: normalizeText([
        title,
        item.h1,
        item.lead,
        item.description,
        item.keywords,
        item.relatedLandingPages,
        item.relatedArticles
      ])
    };
  });

  const expertGuides = getAllExpertGuides().map((guide) => ({
    type: "expertGuide",
    title: guide.title,
    url: `${siteUrl}/poradniki/${guide.slug}`,
    path: `/poradniki/${guide.slug}`,
    description: guide.description,
    category: guide.category,
    date: guide.date,
    keywords: guide.keywords,
    relatedPaths: guide.relatedLinks.map((link) => link.href),
    content: normalizeText([
      guide.title,
      guide.description,
      guide.summary,
      guide.category,
      guide.keywords,
      guide.sections.map((section) =>
        normalizeText([section.heading, section.paragraphs])
      ),
      guide.faqs.map((faq) => `${faq.question} ${faq.answer}`)
    ])
  }));

  const items = [
    ...corePages,
    ...landingPages,
    ...blogArticles,
    ...topicClusters,
    ...expertGuides
  ];

  return Response.json(
    {
      name: "Tłumaczenia specjalistyczne Vadym Rekel — search index",
      siteUrl,
      generatedAt: today,
      language: "pl",
      count: items.length,
      itemTypes: {
        core: corePages.length,
        landingPage: landingPages.length,
        blogArticle: blogArticles.length,
        topicCluster: topicClusters.length,
        expertGuide: expertGuides.length
      },
      items
    },
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400"
      }
    }
  );
}
