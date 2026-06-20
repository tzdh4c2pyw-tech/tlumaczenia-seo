import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllLandingPages,
  getLandingPageBySlug
} from "@/lib/landing-pages";
import { mailtoHref } from "@/lib/mailto";

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
      name: "Tłumaczenia specjalistyczne Vadym Rekel"
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
              <span className="brand-title">Tłumaczenia specjalistyczne</span>
              <span className="brand-subtitle">
                ukraiński · rosyjski · angielski · prawo · forensic
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

      <section className="article-hero">
        <div className="article-hero-main">
          <span className="eyebrow">{page.badge}</span>

          <h1>{page.h1}</h1>

          <p className="lead">{page.lead}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={mailtoHref}>
              Wyślij tekst do wyceny
            </a>

            <Link className="button button-secondary" href="/blog">
              Baza wiedzy
            </Link>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Zakres</strong>
              <span>{page.type}</span>
            </div>
            <div>
              <strong>Języki</strong>
              <span>ukraiński, rosyjski, angielski</span>
            </div>
            <div>
              <strong>Wycena</strong>
              <span>wiadomość e-mail z gotowym opisem sprawy</span>
            </div>
          </div>
        </div>

        <aside className="article-hero-side">
          <div className="side-card">
            <h2>Precyzja, kontekst i funkcja dokumentu.</h2>
            <p>
              W tłumaczeniach sądowych, urzędowych, policyjnych,
              prokuratorskich i prawniczych istotne jest nie tylko znaczenie
              słów, lecz także rola dokumentu: dowód, załącznik do akt, pismo
              procesowe, protokół, korespondencja albo materiał cyfrowy.
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
              <p className="section-label">Wstępna ocena materiału</p>
              <h2>{page.ctaTitle}</h2>
              <p>{page.ctaText}</p>

              <div className="hero-actions">
                <a className="button button-secondary" href={mailtoHref}>
                  Otwórz wiadomość e-mail
                </a>
              </div>
            </div>

            <div className="cta-panel">
              <strong>Dokumenty, akta, pisma i materiał cyfrowy</strong>
              <span>
                Do wstępnej oceny można przekazać opis dokumentu, język, termin,
                liczbę stron lub plików oraz cel tłumaczenia. Pliki, skany,
                zdjęcia albo zrzuty ekranu można dodać ręcznie w wiadomości
                e-mail.
              </span>
            </div>
          </section>
        </div>

        <aside className="article-sidebar">
          <div className="contact-card">
            <span className="tag">Zakres</span>
            <h3>Najważniejsze frazy tej strony</h3>
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
              <Link href="/blog">Baza wiedzy</Link>
            </div>
          </div>

          <div className="contact-card">
            <span className="tag">Wycena</span>
            <h3>Prześlij materiał do wstępnej oceny.</h3>
            <p>
              Opisz dokument, język, termin i cel tłumaczenia. Wiadomość e-mail
              zostanie otwarta z gotową strukturą opisu.
            </p>
            <a className="card-link" href={mailtoHref}>
              Otwórz wiadomość e-mail →
            </a>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">{page.title}</span>
            <span className="footer-line">
              Tłumaczenia specjalistyczne: dokumenty, prawo, organy i materiał
              cyfrowy.
            </span>
          </div>

          <div>
            <span className="footer-title">Nawigacja</span>
            <Link className="footer-link" href="/">
              Strona główna
            </Link>
            <br />
            <Link className="footer-link" href="/blog">
              Baza wiedzy
            </Link>
          </div>

          <div>
            <span className="footer-title">Wycena</span>
            <a className="footer-link" href={mailtoHref}>
              Otwórz wiadomość e-mail
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}