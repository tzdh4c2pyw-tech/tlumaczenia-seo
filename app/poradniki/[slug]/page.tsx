import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllExpertGuides, getExpertGuideBySlug } from "@/lib/expert-guides";
import ExpertConversionSections from "../../components/ExpertConversionSections";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllExpertGuides().map((guide) => ({
    slug: guide.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getExpertGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/poradniki/${guide.slug}`
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: `/poradniki/${guide.slug}`
    }
  };
}

export default async function ExpertGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getExpertGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.date,
    author: {
      "@type": "Person",
      name: "Vadym Rekel"
    },
    publisher: {
      "@type": "Organization",
      name: "Tłumaczenia specjalistyczne Vadym Rekel"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/poradniki/${guide.slug}`
    },
    keywords: guide.keywords.join(", ")
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Poradniki",
        item: "/poradniki"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: guide.title,
        item: `/poradniki/${guide.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/poradniki" className="text-sm font-semibold text-cyan-300 hover:text-cyan-100">
          ← Wszystkie poradniki
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="rounded-full bg-cyan-400/10 px-3 py-1 font-semibold text-cyan-200">
            {guide.category}
          </span>
          <span>{guide.readingTime}</span>
          <span>{guide.date}</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
          {guide.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-300">{guide.summary}</p>

        <div className="mt-10 space-y-10">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-2xl font-bold">Najczęstsze pytania</h2>
          <div className="mt-6 space-y-6">
            {guide.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-cyan-200">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Powiązane strony</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {guide.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-300 hover:text-cyan-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    
      <ExpertConversionSections />
</main>
  );
}
