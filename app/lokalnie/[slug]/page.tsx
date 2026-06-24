import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllLocalSeoArticles,
  getLocalSeoArticleBySlug
} from "@/lib/local-seo-articles";
import {
  LocalArticleShell,
  LocalFaq,
  LocalRelatedLinks,
  LocalTextSection
} from "../../components/LocalPageShell";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllLocalSeoArticles().map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getLocalSeoArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/lokalnie/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `/lokalnie/${article.slug}`
    }
  };
}

export default async function LocalSeoArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getLocalSeoArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "pl",
    articleSection: article.category,
    about: article.keywords,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${article.city}, ${article.region}`
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <LocalArticleShell
      backHref="/lokalnie"
      backLabel="Sprawy lokalne"
      eyebrow={`${article.city} · ${article.region}`}
      title={article.title}
      intro={article.intro}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {article.sections.map((section) => (
        <LocalTextSection
          key={section.heading}
          heading={section.heading}
          paragraphs={section.paragraphs}
        />
      ))}

      <LocalFaq faqs={article.faqs} />
      <LocalRelatedLinks links={article.relatedLinks} />
    </LocalArticleShell>
  );
}
