import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles
} from "@/lib/blog";
import { mailtoHref } from "@/lib/mailto";

const mainOfficeUrl = "https://www.tlumaczrosyjskiegoiukrainskiego.pl/";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artykuł nie istnieje"
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `/blog/${article.slug}`
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["Vadym Rekel"],
      tags: article.keywords
    }
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.relatedSlugs);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
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
      "@id": `/blog/${article.slug}`
    },
    keywords: article.keywords.join(", "),
    articleSection: article.category,
    inLanguage: "pl-PL"
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd)
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
              <span className="brand-title">Baza wiedzy</span>
              <span className="brand-subtitle">
                {article.language} · {article.category}
              </span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Strona główna</Link>
            <Link href="/blog">Baza wiedzy</Link>
            <Link href="/#prawo">Prawo</Link>
            <Link href="/#cyfrowe">Forensic</Link>
            <a className="nav-cta" href={mailtoHref}>
              Wyślij do wyceny
            </a>
          </div>
        </nav>
      </div>

      <article>
        <section className="article-hero">
          <div className="article-hero-main">
            <span className="eyebrow">
              {article.language} · {article.category} · {article.readTime}
            </span>

            <h1>{article.title}</h1>

            <p className="lead">{article.description}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={mailtoHref}>
                Wyślij tekst do wyceny
              </a>
              <Link className="button button-secondary" href="/blog">
                Wróć do bazy wiedzy
              </Link>
              <a
                className="button button-secondary"
                href={mainOfficeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Główna strona kancelarii
              </a>
            </div>

            <div className="hero-mini-grid">
              <div>
                <strong>Publikacja</strong>
                <span>{article.publishedAt}</span>
              </div>
              <div>
                <strong>Aktualizacja</strong>
                <span>{article.updatedAt}</span>
              </div>
              <div>
                <strong>Wycena</strong>
                <span>wiadomość e-mail z gotowym opisem sprawy</span>
              </div>
            </div>
          </div>

          <aside className="article-hero-side">
            <div className="side-card">
              <h2>Praktyczny kontekst tłumaczenia.</h2>
              <p>
                Artykuł pomaga ustalić, czy dokument wymaga tłumaczenia
                poświadczonego, jak przygotować materiał oraz jak opisać sprawę
                przed wstępną oceną.
              </p>
            </div>

            <div className="side-list">
              {article.keywords.slice(0, 6).map((keyword) => (
                <div key={keyword}>{keyword}</div>
              ))}
            </div>
          </aside>
        </section>

        <section className="article-layout">
          <div className="article-content">
            <div className="article-box">
              <p className="article-intro">{article.intro}</p>
            </div>

            {article.sections.map((section) => (
              <section className="article-box" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="article-box">
              <h2>Najczęstsze pytania</h2>

              <div className="faq-list">
                {article.faqs.map((faq) => (
                  <div className="faq-item" key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="cta-box article-cta">
              <div>
                <p className="section-label">Wycena</p>
                <h2>Potrzebujesz tłumaczenia podobnego materiału?</h2>
                <p>
                  Przygotowana wiadomość e-mail pozwala opisać dokument, język,
                  liczbę stron lub plików, termin oraz cel tłumaczenia.
                  Załączniki można dodać ręcznie w programie pocztowym.
                </p>

                <div className="hero-actions">
                  <a className="button button-secondary" href={mailtoHref}>
                    Wyślij tekst do wyceny
                  </a>
                  <a
                    className="button button-secondary"
                    href={mainOfficeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Główna strona kancelarii
                  </a>
                </div>
              </div>

              <div className="cta-panel">
                <strong>Dokumenty, akta i materiał cyfrowy</strong>
                <span>
                  Wstępna wiadomość może być krótka. Wystarczy wskazać język,
                  rodzaj dokumentu, termin i cel tłumaczenia.
                </span>
              </div>
            </section>
          </div>

          <aside className="article-sidebar">
            <div className="contact-card">
              <span className="tag">Spis treści</span>
              <h3>W tym artykule</h3>
              <div className="article-toc">
                {article.sections.map((section) => (
                  <span key={section.heading}>{section.heading}</span>
                ))}
                <span>Najczęstsze pytania</span>
              </div>
            </div>

            <div className="contact-card">
              <span className="tag">Powiązane</span>
              <h3>Podobne artykuły</h3>
              <div className="related-list">
                {relatedArticles.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`}>
                    {related.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="contact-card">
              <span className="tag">Wycena</span>
              <h3>Wyślij materiał do oceny.</h3>
              <p>
                Opisz dokument, język, termin i cel tłumaczenia. Wiadomość
                e-mail zostanie otwarta z gotową strukturą opisu.
              </p>
              <a className="card-link" href={mailtoHref}>
                Otwórz wiadomość e-mail →
              </a>
            </div>

            <div className="contact-card">
              <span className="tag">Kancelaria</span>
              <h3>Główna strona usług.</h3>
              <p>
                Pełny opis działalności kancelarii znajduje się na głównej
                stronie tłumacza przysięgłego języka ukraińskiego i rosyjskiego.
              </p>
              <a
                className="card-link"
                href={mainOfficeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Przejdź do strony kancelarii →
              </a>
            </div>
          </aside>
        </section>
      </article>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">{article.title}</span>
            <span className="footer-line">
              Baza wiedzy o tłumaczeniach specjalistycznych.
            </span>
          </div>

          <div>
            <span className="footer-title">Nawigacja</span>
            <Link className="footer-link" href="/blog">
              Wróć do bazy wiedzy
            </Link>
            <br />
            <a
              className="footer-link"
              href={mainOfficeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Główna strona kancelarii
            </a>
          </div>

          <div>
            <span className="footer-title">Wycena</span>
            <a className="footer-link" href={mailtoHref}>
              Wyślij tekst do wyceny
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}