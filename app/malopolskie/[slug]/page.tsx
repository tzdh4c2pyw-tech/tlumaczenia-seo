import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllMalopolskieSeoPages,
  getMalopolskieSeoPageBySlug
} from "@/lib/malopolskie-seo-pages";
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
  return getAllMalopolskieSeoPages().map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getMalopolskieSeoPageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/malopolskie/${page.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: `/malopolskie/${page.slug}`
    }
  };
}

export default async function MalopolskieSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getMalopolskieSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: page.title,
    description: page.description,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${page.city}, ${page.county}, Małopolskie`
    },
    serviceType: page.service,
    inLanguage: "pl"
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    datePublished: page.date,
    dateModified: page.date,
    inLanguage: "pl",
    keywords: page.keywords.join(", ")
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
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
      backHref="/malopolskie"
      backLabel="Małopolskie SEO"
      eyebrow={`${page.city} · ${page.county}`}
      title={page.title}
      intro={page.intro}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {page.sections.map((section) => (
        <LocalTextSection
          key={section.heading}
          heading={section.heading}
          paragraphs={section.paragraphs}
        />
      ))}

      <LocalFaq faqs={page.faqs} />
      <LocalRelatedLinks links={page.relatedLinks} />
    </LocalArticleShell>
  );
}
