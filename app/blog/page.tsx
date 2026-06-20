import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles
} from "@/lib/blog";
import { mailtoHref } from "@/lib/mailto";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const mainOfficeUrl = "https://www.tlumaczrosyjskiegoiukrainskiego.pl/";

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
      "@id": `https://tlumaczenia-seo.vercel.app/blog/${article.slug}`
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((item) => ({
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
            <Link href="/pdf-na-tekst">PDF na TXT</Link>
            <Link href="/#prawo">Prawo</Link>
            <Link href="/#cyfrowe">Materiał cyfrowy</Link>
            <a className="nav-cta" href={mailtoHref}>
              Wyślij do wyceny
            </a>
          </div>
        </nav>
      </div>

      <section className="article-hero">
        <div className="article-hero-main">
          <span className="eyebrow">
            {article.language} · {article.category} · {article.readTime}
          </span>

          <h1>{article.title}</h1>

          <p className="lead">{article.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={mailtoHref}>
              Wyślij materiał do wyceny
            </a>

            <Link className="button button-secondary" href="/blog">
              Wróć do bazy wiedzy
            </Link>

            <Link className="button button-secondary" href="/pdf-na-tekst">
              PDF na TXT
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
              <strong>Temat</strong>
              <span>{article.category}</span>
            </div>
          </div>
        </div>

        <aside className="article-hero-side">
          <div className="side-card">
            <h2>Tematy artykułu.</h2>
            <p>
              Ten wpis wyjaśnia praktyczne zagadnienia związane z tłumaczeniami
              poświadczonymi i specjalistycznymi. Pomaga przygotować dokument,
              określić zakres materiału i przekazać go do wstępnej oceny.
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
        <article className="article-content">
          <section className="article-box">
            <p>{article.intro}</p>
          </section>

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
              {article.faqs.map((item) => (
                <div className="faq-item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cta-box article-cta">
            <div>
              <p className="section-label">Wycena</p>
              <h2>Potrzebujesz tłumaczenia podobnego materiału?</h2>
              <p>
                Przygotuj krótką wiadomość: język dokumentu, rodzaj materiału,
                liczba stron lub plików, termin oraz cel tłumaczenia. Do
                wiadomości możesz dodać skan, zdjęcie, PDF albo fragment akt.
              </p>

              <div className="hero-actions">
                <a className="button button-secondary" href={mailtoHref}>
                  Wyślij materiał do wstępnej wyceny
                </a>

                <Link className="button button-secondary" href="/pdf-na-tekst">
                  Przygotuj tekst z PDF
                </Link>
              </div>
            </div>

            <div className="cta-panel">
              <strong>Dokumenty, akta, PDF i materiał cyfrowy</strong>
              <span>
                Do wstępnej oceny wystarczy opis materiału, język, termin i cel
                tłumaczenia. Załączniki można dodać ręcznie w programie
                pocztowym.
              </span>
            </div>
          </section>
        </article>

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

          {relatedArticles.length ? (
            <div className="contact-card">
              <span className="tag">Powiązane</span>
              <h3>Podobne artykuły</h3>

              <div className="related-list">
                {relatedArticles.map((related) => (
                  <Link href={`/blog/${related.slug}`} key={related.slug}>
                    {related.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="contact-card">
            <span className="tag">PDF na TXT</span>
            <h3>Przygotuj tekst z pliku PDF.</h3>
            <p>
              Jeżeli dokument jest zapisany jako PDF z warstwą tekstową, możesz
              wyciągnąć tekst, skopiować go albo pobrać jako TXT przed
              przekazaniem materiału do oceny.
            </p>
            <Link className="card-link" href="/pdf-na-tekst">
              Otwórz PDF na TXT →
            </Link>
          </div>

          <div className="contact-card">
            <span className="tag">Wycena</span>
            <h3>Wyślij materiał do oceny.</h3>
            <p>
              Opisz dokument, język, termin i cel tłumaczenia. Wiadomość e-mail
              zostanie otwarta z gotową strukturą opisu.
            </p>
            <a className="card-link" href={mailtoHref}>
              Otwórz wiadomość e-mail →
            </a>
          </div>

          <div className="contact-card">
            <span className="tag">Kancelaria</span>
            <h3>Główna strona kancelarii.</h3>
            <p>
              Strona główna kancelarii zawiera informacje o tłumaczeniach
              poświadczonych języka ukraińskiego i rosyjskiego.
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
            <Link className="footer-link" href="/">
              Strona główna
            </Link>
            <br />
            <Link className="footer-link" href="/pdf-na-tekst">
              PDF na TXT
            </Link>
          </div>

          <div>
            <span className="footer-title">Wycena</span>
            <a className="footer-link" href={mailtoHref}>
              Wyślij materiał do wyceny
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}