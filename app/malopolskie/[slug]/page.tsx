import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllMalopolskieSeoPages,
  getMalopolskieSeoPageBySlug
} from "@/lib/malopolskie-seo-pages";

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
    <main className="min-h-screen bg-slate-950 text-slate-50">
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

      <article className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/malopolskie"
          className="text-sm font-semibold text-cyan-300 hover:text-cyan-100"
        >
          ← Małopolskie
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {page.city} · {page.county}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          {page.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{page.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
          >
            Zapytaj o wycenę
          </Link>
          <Link
            href="/dobierz-tlumaczenie"
            className="rounded-full border border-cyan-300 px-6 py-3 text-sm font-bold text-cyan-100 hover:bg-cyan-300/10"
          >
            Dobierz tłumaczenie
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100 hover:border-cyan-300 hover:text-cyan-100"
          >
            FAQ
          </Link>
        </div>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-2xl font-bold text-white">Najczęstsze pytania</h2>
          <div className="mt-6 space-y-6">
            {page.faqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="font-semibold text-cyan-200">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-2xl font-bold text-white">Powiązane strony</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {page.relatedLinks.map((link) => (
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
    </main>
  );
}
