import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles
} from "@/lib/blog";

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
      name: "Tłumaczenia ukraiński, rosyjski, angielski"
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
              <span className="brand-title">Artykuł SEO</span>
              <span className="brand-subtitle">
                {article.language} · {article.category}
              </span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Strona główna</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#prawo">Prawo</Link>
            <Link href="/#cyfrowe">Forensic</Link>
            <Link className="nav-cta" href="/kontakt">
              Wyślij do wyceny
            </Link>
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
              <Link className="button button-primary" href="/kontakt">
                Wyślij dokumenty do wyceny
              </Link>
              <Link className="button button-secondary" href="/blog">
                Wróć do blogu
              </Link>
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
                <strong>CTA</strong>
                <span>formularz bez telefonu i maila w treści</span>
              </div>
            </div>
          </div>

          <aside className="article-hero-side">
            <div className="side-card">
              <h2>Tematy artykułu.</h2>
              <p>
                Ten wpis jest częścią klastra SEO dotyczącego tłumaczeń
                specjalistycznych. Prowadzi użytkownika do formularza wyceny, bez
                publikowania telefonu i adresu e-mail w treści.
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
                  Przejdź do formularza i opisz dokument, język, liczbę stron,
                  termin oraz cel tłumaczenia. Możesz wskazać, czy sprawa dotyczy
                  sądu, Policji, prokuratury, kancelarii, firmy, dokumentów z
                  Ukrainy, Rosji, języka angielskiego albo materiału cyfrowego.
                </p>

                <div className="hero-actions">
                  <Link className="button button-secondary" href="/kontakt">
                    Wyślij dokumenty do wstępnej wyceny
                  </Link>
                </div>
              </div>

              <div className="cta-panel">
                <strong>Bez publicznego telefonu i e-maila</strong>
                <span>
                  Artykuł kieruje do formularza. Dane kontaktowe nie są
                  publikowane w treści wpisu.
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
              <span className="tag">CTA</span>
              <h3>Wyślij materiał do wyceny.</h3>
              <p>
                Formularz pozwala opisać dokument, język, termin i rodzaj
                sprawy bez publikowania danych kontaktowych w artykule.
              </p>
              <Link className="card-link" href="/kontakt">
                Przejdź do formularza →
              </Link>
            </div>
          </aside>
        </section>
      </article>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">{article.title}</span>
            <span className="footer-line">
              Blog SEO o tłumaczeniach specjalistycznych.
            </span>
          </div>

          <div>
            <span className="footer-title">Nawigacja</span>
            <Link className="footer-link" href="/blog">
              Wróć do blogu
            </Link>
            <br />
            <Link className="footer-link" href="/">
              Strona główna
            </Link>
          </div>

          <div>
            <span className="footer-title">Wycena</span>
            <Link className="footer-link" href="/kontakt">
              Wyślij dokumenty do wyceny
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}