import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllKrakowSeoPages,
  getKrakowSeoPageBySlug
} from "@/lib/krakow-seo-pages";
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
  return getAllKrakowSeoPages().map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getKrakowSeoPageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/krakow/${page.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: `/krakow/${page.slug}`
    }
  };
}

export default async function KrakowSeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getKrakowSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: page.title,
    description: page.description,
    areaServed: {
      "@type": "City",
      name: "Kraków"
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
      backHref="/krakow"
      backLabel="Kraków i okolice"
      eyebrow={`Kraków · ${page.service}`}
      title={page.title}
      intro={page.intro}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
