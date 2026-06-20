import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllLandingPages,
  getLandingPageBySlug
} from "@/lib/landing-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllLandingPages().map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);

  if (!page) {
    return {
      title: "Strona nie istnieje"
    };
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      type: "website",
      title: page.title,
      description: page.description,
      url: `/${page.slug}`
    }
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    areaServed: {
      "@type": "Country",
      name: "Polska"
    },
    serviceType: page.type,
    provider: {
      "@type": "ProfessionalService",
      name: "Tłumaczenia ukraiński, rosyjski, angielski"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd)
        }}
      />

      <div className="topbar">
        <nav className="nav">
          <Link className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span>
              <span className="brand-title">Landing SEO</span>
              <span className="brand-subtitle">
                {page.type} · ukraiński · rosyjski · angielski
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

      <section className="article-hero">
        <div className="article-hero-main">
          <span className="eyebrow">{page.badge}</span>

          <h1>{page.h1}</h1>

          <p className="lead">{page.lead}</p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/kontakt">
              Wyślij dokumenty do wyceny
            </Link>
            <Link className="button button-secondary" href="/blog">
              Czytaj blog SEO
            </Link>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Typ strony</strong>
              <span>{page.type}</span>
            </div>
            <div>
              <strong>Języki</strong>
              <span>ukraiński, rosyjski, angielski</span>
            </div>
            <div>
              <strong>Kontakt</strong>
              <span>formularz bez telefonu i maila w treści</span>
            </div>
          </div>
        </div>

        <aside className="article-hero-side">
          <div className="side-card">
            <h2>Podstrona SEO.</h2>
            <p>
              Ta strona została przygotowana jako landing page pod konkretną
              frazę. Jej celem jest generowanie ruchu z Google i kierowanie
              użytkownika do formularza wyceny.
            </p>
          </div>

          <div className="side-list">
            {page.keywords.slice(0, 6).map((keyword) => (
              <div key={keyword}>{keyword}</div>
            ))}
          </div>
        </aside>
      </section>

      <section className="article-layout">
        <div className="article-content">
          {page.sections.map((section) => (
            <section className="article-box" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </section>
          ))}

          <section className="cta-box article-cta">
            <div>
              <p className="section-label">Wycena</p>
              <h2>{page.ctaTitle}</h2>
              <p>{page.ctaText}</p>

              <div className="hero-actions">
                <Link className="button button-secondary" href="/kontakt">
                  Przejdź do formularza wyceny
                </Link>
              </div>
            </div>

            <div className="cta-panel">
              <strong>Bez telefonu i e-maila w widocznej treści</strong>
              <span>
                Podstrona prowadzi do formularza. Dane kontaktowe nie są
                publikowane jako tekst na stronie SEO.
              </span>
            </div>
          </section>
        </div>

        <aside className="article-sidebar">
          <div className="contact-card">
            <span className="tag">Słowa kluczowe</span>
            <h3>Frazy tej strony</h3>
            <div className="article-toc">
              {page.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <span className="tag">Powiązane</span>
            <h3>Przydatne sekcje</h3>
            <div className="related-list">
              <Link href="/ukrainski">Język ukraiński</Link>
              <Link href="/rosyjski">Język rosyjski</Link>
              <Link href="/angielski">Język angielski</Link>
              <Link href="/tlumaczenia-prawnicze">
                Tłumaczenia prawnicze
              </Link>
              <Link href="/material-cyfrowy">Materiał cyfrowy</Link>
              <Link href="/blog">Blog SEO</Link>
            </div>
          </div>

          <div className="contact-card">
            <span className="tag">CTA</span>
            <h3>Wyślij materiał do wyceny.</h3>
            <p>
              Opisz dokument, język, termin i cel tłumaczenia. Formularz
              pozwala przekazać sprawę bez publikowania telefonu i maila w
              treści SEO.
            </p>
            <Link className="card-link" href="/kontakt">
              Przejdź do formularza →
            </Link>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">{page.title}</span>
            <span className="footer-line">
              Podstrona SEO dla tłumaczeń specjalistycznych.
            </span>
          </div>

          <div>
            <span className="footer-title">Nawigacja</span>
            <Link className="footer-link" href="/">
              Strona główna
            </Link>
            <br />
            <Link className="footer-link" href="/blog">
              Blog
            </Link>
          </div>

          <div>
            <span className="footer-title">Wycena</span>
            <Link className="footer-link" href="/kontakt">
              Formularz wyceny
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}