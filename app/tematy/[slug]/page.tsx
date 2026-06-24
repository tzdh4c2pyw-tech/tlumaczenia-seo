import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles } from "@/lib/blog";
import { getAllLandingPages } from "@/lib/landing-pages";
import {
  getAllTopicClusters,
  getTopicClusterBySlug
} from "@/lib/topic-clusters";
import { mailtoHref } from "@/lib/mailto";
import ExpertConversionSections from "../../components/ExpertConversionSections";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllTopicClusters().map((cluster) => ({
    slug: cluster.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cluster = getTopicClusterBySlug(slug);

  if (!cluster) {
    return {
      title: "Temat nie istnieje"
    };
  }

  return {
    title: `${cluster.title} | Tematy eksperckie`,
    description: cluster.description,
    keywords: cluster.keywords,
    alternates: {
      canonical: `/tematy/${cluster.slug}`
    },
    openGraph: {
      title: `${cluster.title} | Tematy eksperckie`,
      description: cluster.description,
      type: "article"
    }
  };
}

export default async function TopicClusterPage({ params }: PageProps) {
  const { slug } = await params;
  const cluster = getTopicClusterBySlug(slug);

  if (!cluster) {
    notFound();
  }

  const allArticles = getAllArticles();
  const allLandingPages = getAllLandingPages();

  const articles = allArticles.filter((article) =>
    cluster.articleSlugs.includes(article.slug)
  );

  const landingPages = allLandingPages.filter((page) =>
    cluster.landingPageSlugs.includes(page.slug)
  );

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cluster.title,
    description: cluster.description,
    audience: cluster.audience,
    keywords: cluster.keywords.join(", "),
    mainEntity: articles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      description: article.description,
      url: `https://tlumaczenia-seo.vercel.app/blog/${article.slug}`
    }))
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cluster.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd)
        }}
      />

      <div className="topbar">
        <nav className="nav">
          <Link className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span>
              <span className="brand-title">Tematy eksperckie</span>
              <span className="brand-subtitle">blog · usługi · FAQ</span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Strona główna</Link>
            <Link href="/tematy">Tematy</Link>
            <Link href="/blog">Baza wiedzy</Link>
            <Link href="/pdf-na-tekst">PDF na TXT</Link>
            <a className="nav-cta" href={mailtoHref}>
              Wyślij do wyceny
            </a>
          </div>
        </nav>
      </div>

      <section className="article-hero">
        <div className="article-hero-main">
          <span className="eyebrow">Hub ekspercki · SEO · AI</span>
          <h1>{cluster.title}</h1>
          <p className="lead">{cluster.lead}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={mailtoHref}>
              Wyślij materiał do wyceny
            </a>
            <Link className="button button-secondary" href="/tematy">
              Wszystkie tematy
            </Link>
            <Link className="button button-secondary" href="/blog">
              Baza wiedzy
            </Link>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Odbiorcy</strong>
              <span>{cluster.audience}</span>
            </div>
            <div>
              <strong>Artykuły</strong>
              <span>{articles.length}</span>
            </div>
            <div>
              <strong>Usługi</strong>
              <span>{landingPages.length}</span>
            </div>
          </div>
        </div>

        <aside className="article-hero-side">
          <div className="side-card">
            <h2>Słowa kluczowe.</h2>
            <p>
              Ten hub łączy zapytania informacyjne, eksperckie i usługowe w
              jeden klaster tematyczny.
            </p>
          </div>

          <div className="side-list">
            {cluster.keywords.slice(0, 8).map((keyword) => (
              <div key={keyword}>{keyword}</div>
            ))}
          </div>
        </aside>
      </section>

      <section className="article-layout">
        <article className="article-content">
          <section className="article-box">
            <h2>Najważniejsze informacje</h2>
            <p>{cluster.description}</p>
            <p>
              Strona grupuje treści według realnych potrzeb użytkowników:
              przygotowanie dokumentu, określenie celu tłumaczenia, ocena
              formatu pliku, wymogi formalne, materiał dowodowy oraz kontakt w
              sprawie wstępnej wyceny.
            </p>
          </section>

          {articles.length > 0 && (
            <section className="article-box">
              <h2>Powiązane artykuły eksperckie</h2>
              <div className="faq-list">
                {articles.map((article) => (
                  <div className="faq-item" key={article.slug}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <Link className="card-link" href={`/blog/${article.slug}`}>
                      Czytaj artykuł →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {landingPages.length > 0 && (
            <section className="article-box">
              <h2>Powiązane usługi</h2>
              <div className="faq-list">
                {landingPages.map((page) => (
                  <div className="faq-item" key={page.slug}>
                    <h3>{page.title}</h3>
                    <p>{page.description}</p>
                    <Link className="card-link" href={`/${page.slug}`}>
                      Otwórz usługę →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="article-box">
            <h2>Najczęstsze pytania</h2>
            <div className="faq-list">
              {cluster.questions.map((item) => (
                <div className="faq-item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="article-sidebar">
          <div className="sticky-card">
            <h2>Wstępna wycena</h2>
            <p>
              Prześlij dokument, opis sprawy albo materiał cyfrowy. Dołącz
              informację o języku, terminie, celu tłumaczenia i oczekiwanej
              formie.
            </p>
            <a className="button button-primary" href={mailtoHref}>
              Wyślij materiał
            </a>
          </div>
        </aside>
      </section>
    
      <ExpertConversionSections />
</main>
  );
}
