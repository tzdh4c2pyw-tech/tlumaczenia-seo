import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/blog";
import { mailtoHref } from "@/lib/mailto";

const mainOfficeUrl = "https://www.tlumaczrosyjskiegoiukrainskiego.pl/";

export const metadata: Metadata = {
  title: "Baza wiedzy | Tłumaczenia ukraiński, rosyjski, angielski",
  description:
    "Baza wiedzy o tłumaczeniach poświadczonych i specjalistycznych: język ukraiński, rosyjski, angielski, dokumenty z Ukrainy, sądy, Policja, prokuratura, prawo, cyber, BLIK, krypto, forensic i PDF.",
  alternates: {
    canonical: "/blog"
  }
};

const categories = [
  {
    title: "Tłumacz przysięgły",
    text: "Kiedy potrzebne jest tłumaczenie poświadczone, czym różni się od zwykłego i kiedy wymaga go urząd, sąd albo instytucja."
  },
  {
    title: "Ustawa i obowiązki",
    text: "Zasady wykonywania zawodu tłumacza przysięgłego, poświadczenie, repertorium, odpowiedzialność i forma tłumaczenia."
  },
  {
    title: "Wynagrodzenie i znaki",
    text: "Strona obliczeniowa, liczba znaków, objętość dokumentu, tryb pilny i różnice między zleceniami prywatnymi a zleceniami organów."
  },
  {
    title: "Dokumenty z Ukrainy",
    text: "Akty stanu cywilnego, dyplomy, świadectwa, zaświadczenia, pełnomocnictwa, dokumenty sądowe i urzędowe."
  },
  {
    title: "Sądy i organy",
    text: "Materiały dla sądów, Policji, prokuratur, organów ścigania, kancelarii prawnych i instytucji publicznych."
  },
  {
    title: "Cyber i forensic",
    text: "Komunikatory, zrzuty ekranu, BLIK, kryptowaluty, phishing, raporty PDF, dane z telefonu i materiał cyfrowy."
  }
];

const tools = [
  {
    title: "PDF na TXT",
    text: "Narzędzie pomocnicze do wyciągania tekstu z plików PDF przed wstępną oceną tłumaczenia.",
    href: "/pdf-na-tekst"
  },
  {
    title: "Strona 1125 znaków",
    text: "Wyjaśnienie, dlaczego liczba fizycznych kartek nie zawsze odpowiada liczbie stron rozliczeniowych.",
    href: "/blog/wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow"
  },
  {
    title: "Jak przygotować dokument?",
    text: "Praktyczny poradnik dotyczący skanów, zdjęć, PDF-ów, pieczęci, podpisów i kompletności dokumentu.",
    href: "/blog/tlumaczenie-dokumentow-z-ukrainy-kompletny-przewodnik"
  }
];

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main>
      <div className="topbar">
        <nav className="nav">
          <Link className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span>
              <span className="brand-title">Baza wiedzy</span>
              <span className="brand-subtitle">
                tłumaczenia · prawo · sądy · cyber
              </span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Strona główna</Link>
            <Link href="/#jezyki">Języki</Link>
            <Link href="/#organy">Dla organów</Link>
            <Link href="/#prawo">Prawo</Link>
            <Link href="/#cyfrowe">Materiał cyfrowy</Link>
            <Link href="/pdf-na-tekst">PDF na TXT</Link>
            <a className="nav-cta" href={mailtoHref}>
              Wyślij do wyceny
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">Poradnik tłumaczeń specjalistycznych</span>

          <h1>Baza wiedzy o tłumaczeniach dokumentów i materiałów.</h1>

          <p className="lead">
            Artykuły wyjaśniają, kiedy potrzebne jest tłumaczenie poświadczone,
            jak przygotować dokumenty do wstępnej oceny, jak działa strona
            obliczeniowa, czym jest repertorium tłumacza przysięgłego oraz jak
            opisać materiał sądowy, urzędowy, policyjny, prokuratorski i
            cyfrowy.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={mailtoHref}>
              Wyślij tekst do wyceny
            </a>

            <Link className="button button-secondary" href="/pdf-na-tekst">
              PDF na TXT
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
              <strong>Dokumenty</strong>
              <span>urzędy, sądy, uczelnie, kancelarie, firmy</span>
            </div>
            <div>
              <strong>Postępowania</strong>
              <span>karne, cywilne, rodzinne, gospodarcze</span>
            </div>
            <div>
              <strong>Cyber</strong>
              <span>komunikatory, BLIK, krypto, phishing, forensic</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <div className="side-card">
            <h2>Praktyczne omówienia dla klientów i instytucji.</h2>
            <p>
              Baza wiedzy porządkuje zagadnienia, które pojawiają się przed
              zleceniem tłumaczenia: rodzaj dokumentu, cel użycia, wymogi
              formalne, objętość materiału, format plików i termin realizacji.
            </p>
          </div>

          <div className="side-list">
            <div>Jak przygotować dokument z Ukrainy do tłumaczenia?</div>
            <div>Kiedy potrzebne jest tłumaczenie poświadczone?</div>
            <div>Jak oblicza się stronę 1125 znaków?</div>
            <div>Jak przygotować PDF albo materiał cyfrowy?</div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Zakres tematyczny</p>
            <h2>Najważniejsze obszary wiedzy.</h2>
          </div>
          <p>
            Artykuły są uporządkowane według realnych sytuacji: dokument do
            urzędu, materiał do sądu, sprawa karna, materiał cyfrowy, dokumenty
            z Ukrainy, dokumenty rosyjskojęzyczne, angielskie oraz zasady pracy
            tłumacza przysięgłego.
          </p>
        </div>

        <div className="grid-3">
          {categories.map((category) => (
            <article className="card card-gold" key={category.title}>
              <span className="tag">Temat</span>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Narzędzia</p>
            <h2>Przygotowanie materiału do tłumaczenia.</h2>
          </div>
          <p>
            Przed wysłaniem dokumentów do wstępnej oceny można uporządkować
            materiał, sprawdzić tekst z PDF albo przeczytać, jak działa
            rozliczenie według liczby znaków.
          </p>
        </div>

        <div className="grid-3">
          {tools.map((tool) => (
            <article className="card" key={tool.title}>
              <span className="tag">Pomoc</span>
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
              <Link className="card-link" href={tool.href}>
                Otwórz →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Artykuły</p>
            <h2>Poradniki dla spraw wymagających precyzji.</h2>
          </div>
          <p>
            Każdy tekst odpowiada na konkretne pytanie: kiedy tłumaczenie jest
            potrzebne, jak przygotować materiał, jak rozpoznać zakres pracy,
            czym jest repertorium, jak liczyć stronę obliczeniową i jak
            przekazać dokumenty do wstępnej oceny.
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
            <p className="section-label">Wstępna ocena</p>
            <h2>Masz dokument, tekst albo materiał cyfrowy do tłumaczenia?</h2>
            <p>
              Przygotowana wiadomość e-mail pozwala opisać język, rodzaj
              materiału, liczbę stron lub plików, termin oraz cel tłumaczenia.
              Załączniki można dodać ręcznie w programie pocztowym.
            </p>

            <div className="hero-actions">
              <a className="button button-secondary" href={mailtoHref}>
                Wyślij tekst do wyceny
              </a>

              <Link className="button button-secondary" href="/pdf-na-tekst">
                PDF na TXT
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
          </div>

          <div className="cta-panel">
            <strong>Dokumenty, akta i materiał cyfrowy</strong>
            <span>
              Wstępna wiadomość może być krótka. Wystarczy wskazać język,
              rodzaj dokumentu, termin i cel tłumaczenia. Pliki można dołączyć
              ręcznie do wiadomości e-mail.
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">Baza wiedzy</span>
            <span className="footer-line">
              Poradniki o tłumaczeniach specjalistycznych: ukraiński, rosyjski,
              angielski, prawo, dokumenty, sądy i materiał cyfrowy.
            </span>
          </div>

          <div>
            <span className="footer-title">Nawigacja</span>
            <Link className="footer-link" href="/">
              Strona główna
            </Link>
            <br />
            <Link className="footer-link" href="/pdf-na-tekst">
              PDF na TXT
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