import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog SEO o tłumaczeniach ukraiński, rosyjski, angielski",
  description:
    "Blog SEO o tłumaczeniach specjalistycznych: język ukraiński, rosyjski, angielski, dokumenty z Ukrainy, sądy, Policja, prokuratura, prawo, cyber, BLIK, krypto i forensic.",
  alternates: {
    canonical: "/blog"
  }
};

const categories = [
  "tłumaczenia przysięgłe",
  "prawo",
  "sądy i organy",
  "cyber / forensic",
  "dokumenty",
  "poradnik"
];

const languages = ["ukraiński", "rosyjski", "angielski", "wielojęzyczne"];

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main>
      <div className="topbar">
        <nav className="nav">
          <Link className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span>
              <span className="brand-title">Blog SEO</span>
              <span className="brand-subtitle">
                ukraiński · rosyjski · angielski · prawo · cyber
              </span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Strona główna</Link>
            <Link href="/#jezyki">Języki</Link>
            <Link href="/#prawo">Prawo</Link>
            <Link href="/#cyfrowe">Forensic</Link>
            <Link className="nav-cta" href="/kontakt">
              Wyślij do wyceny
            </Link>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">Blog SEO · centrum wiedzy</span>

          <h1>Artykuły o tłumaczeniach specjalistycznych.</h1>

          <p className="lead">
            Blog poświęcony tłumaczeniom z języka ukraińskiego, rosyjskiego i
            angielskiego. Tematy: dokumenty z Ukrainy, sprawy karne, sądy,
            Policja, prokuratura, tłumaczenia prawnicze, materiał cyfrowy,
            komunikatory, BLIK, kryptowaluty i forensic.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/kontakt">
              Wyślij dokumenty do wyceny
            </Link>
            <Link className="button button-secondary" href="/#cyfrowe">
              Materiał cyfrowy i forensic
            </Link>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Bez telefonu</strong>
              <span>artykuły kierują do formularza</span>
            </div>
            <div>
              <strong>Bez maila</strong>
              <span>brak publicznego adresu w treści</span>
            </div>
            <div>
              <strong>SEO</strong>
              <span>długie wpisy pod realne pytania</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <div className="side-card">
            <h2>Treści mają przyciągać ruch i budować autorytet.</h2>
            <p>
              Każdy artykuł odpowiada na konkretną intencję użytkownika: jaki
              dokument trzeba przetłumaczyć, kiedy potrzebny jest tłumacz
              przysięgły i jak przygotować materiał do wyceny.
            </p>
          </div>

          <div className="side-list">
            <div>Ukraiński, rosyjski i angielski.</div>
            <div>Sądy, Policja, prokuratura i kancelarie prawne.</div>
            <div>Sprawy karne, cywilne, rodzinne i gospodarcze.</div>
            <div>Cyber, BLIK, kryptowaluty, komunikatory i forensic.</div>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          {languages.map((language) => (
            <div className="trust-item" key={language}>
              <strong>{language}</strong>
              klaster językowy do rozbudowy SEO
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Kategorie</p>
            <h2>Klastry tematyczne blogu.</h2>
          </div>
          <p>
            Blog nie jest listą przypadkowych wpisów. To uporządkowana struktura
            tematów: języki, dokumenty, prawo, organy, cyber i poradniki.
          </p>
        </div>

        <div className="grid-3">
          {categories.map((category) => (
            <article className="card card-gold" key={category}>
              <span className="tag">Kategoria</span>
              <h3>{category}</h3>
              <p>
                Artykuły w tej kategorii będą rozwijane jako osobny klaster SEO
                z linkowaniem wewnętrznym do usług i formularza wyceny.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Artykuły</p>
            <h2>Pierwszy pakiet wpisów SEO.</h2>
          </div>
          <p>
            Poniższe wpisy stanowią fundament blogu. Każdy z nich ma własny
            tytuł, opis, FAQ, linkowanie wewnętrzne i CTA do formularza wyceny.
          </p>
        </div>

        <div className="grid-3">
          {articles.map((article) => (
            <article className="card" key={article.slug}>
              <span className="tag">{article.language}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>

              <div className="article-meta">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>

              <Link className="card-link" href={`/blog/${article.slug}`}>
                Czytaj artykuł →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="cta-box">
          <div>
            <p className="section-label">CTA blogu</p>
            <h2>Masz dokument albo materiał cyfrowy do tłumaczenia?</h2>
            <p>
              Przejdź do formularza wyceny. Opisz język, rodzaj dokumentu,
              termin i cel tłumaczenia. Nie trzeba publikować ani podawać danych
              kontaktowych w treści artykułów.
            </p>

            <div className="hero-actions">
              <Link className="button button-secondary" href="/kontakt">
                Wyślij dokumenty do wyceny
              </Link>
            </div>
          </div>

          <div className="cta-panel">
            <strong>Bez publicznego telefonu i e-maila</strong>
            <span>
              Blog prowadzi użytkownika do formularza, zamiast eksponować dane
              kontaktowe w widocznej treści SEO.
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">Blog SEO</span>
            <span className="footer-line">
              Tłumaczenia specjalistyczne: ukraiński, rosyjski, angielski.
            </span>
          </div>

          <div>
            <span className="footer-title">Nawigacja</span>
            <Link className="footer-link" href="/">
              Strona główna
            </Link>
            <br />
            <Link className="footer-link" href="/kontakt">
              Formularz wyceny
            </Link>
          </div>

          <div>
            <span className="footer-title">Zakres</span>
            <span className="footer-line">
              prawo · organy · cyber · dokumenty · forensic
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}