import type { Metadata } from "next";
import Link from "next/link";
import PdfToTextTool from "../components/PdfToTextTool";
import { mailtoHref } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "PDF na TXT | Konwerter tekstu z PDF do tłumaczenia",
  description:
    "Konwerter PDF na TXT dla klientów przygotowujących dokumenty do tłumaczenia. Wyciąganie tekstu z PDF, raportów, pism, dokumentów elektronicznych i materiału cyfrowego.",
  keywords: [
    "PDF na TXT",
    "konwerter PDF na tekst",
    "wyciąganie tekstu z PDF",
    "PDF do tłumaczenia",
    "tekst z PDF",
    "tłumaczenie PDF",
    "tłumaczenie dokumentów PDF",
    "tłumaczenie raportu PDF",
    "materiał cyfrowy tłumaczenie"
  ],
  alternates: {
    canonical: "/pdf-na-tekst"
  },
  openGraph: {
    type: "website",
    title: "PDF na TXT | Konwerter tekstu z PDF do tłumaczenia",
    description:
      "Narzędzie pomocnicze dla klientów przygotowujących dokumenty PDF, raporty, pisma i materiał cyfrowy do wstępnej oceny tłumaczenia.",
    url: "/pdf-na-tekst"
  }
};

const useCases = [
  {
    title: "Dokumenty urzędowe",
    text: "PDF z decyzją, zaświadczeniem, aktem, pismem urzędowym albo formularzem można wstępnie zamienić na tekst, aby łatwiej opisać zakres tłumaczenia."
  },
  {
    title: "Dokumenty sądowe",
    text: "Pozwy, wyroki, postanowienia, protokoły, załączniki i fragmenty akt często występują jako PDF. Tekst pomaga ocenić objętość i przygotować zapytanie."
  },
  {
    title: "Raporty i materiał cyfrowy",
    text: "Raporty PDF, eksporty danych, dokumenty z platform internetowych i materiały techniczne można uporządkować przed przekazaniem do oceny językowej."
  },
  {
    title: "Umowy i dokumenty firmowe",
    text: "Umowy, regulaminy, dokumenty korporacyjne, dokumentacja compliance i pisma biznesowe często zawierają dużo tekstu, którego objętość warto sprawdzić."
  },
  {
    title: "Dokumenty z Ukrainy",
    text: "Jeżeli dokument z Ukrainy został zapisany jako PDF z warstwą tekstową, narzędzie może pomóc wyciągnąć treść do wstępnej analizy."
  },
  {
    title: "Dokumenty angielskie i rosyjskie",
    text: "PDF-y w języku angielskim albo rosyjskim można wykorzystać do przygotowania zapytania o tłumaczenie prawnicze, biznesowe albo urzędowe."
  }
];

const limitations = [
  {
    title: "PDF ze skanu może nie zadziałać",
    text: "Jeżeli PDF jest wyłącznie obrazem albo skanem, narzędzie może nie wyciągnąć tekstu. W takim przypadku potrzebne jest OCR."
  },
  {
    title: "Układ dokumentu może się zmienić",
    text: "Konwersja do TXT usuwa część formatowania. Tabele, kolumny, przypisy, pieczęcie i układ graficzny mogą wymagać osobnej oceny."
  },
  {
    title: "To nie jest tłumaczenie",
    text: "Narzędzie wyciąga tekst z PDF. Nie tłumaczy dokumentu i nie zastępuje oceny tłumacza przysięgłego."
  }
];

const faqItems = [
  {
    question: "Czy narzędzie PDF na TXT tłumaczy dokument?",
    answer:
      "Nie. Narzędzie wyciąga tekst z pliku PDF. Tłumaczenie wymaga osobnej oceny języka, celu dokumentu, terminologii i formy, w jakiej dokument ma zostać użyty."
  },
  {
    question: "Czy mogę użyć tekstu do wyceny tłumaczenia?",
    answer:
      "Tak. Wyciągnięty tekst można skopiować, pobrać jako TXT albo wykorzystać przy przygotowaniu wiadomości z zapytaniem o tłumaczenie."
  },
  {
    question: "Czy PDF ze skanem dokumentu zostanie odczytany?",
    answer:
      "Nie zawsze. Jeżeli PDF jest skanem bez warstwy tekstowej, zwykła konwersja PDF na TXT nie wystarczy. Potrzebne jest rozpoznawanie OCR."
  },
  {
    question: "Czy pliki są tłumaczone automatycznie?",
    answer:
      "Nie. Narzędzie nie wykonuje automatycznego tłumaczenia. Służy wyłącznie do technicznego wyciągania tekstu z PDF."
  },
  {
    question: "Czy tekst z PDF odpowiada liczbie stron tłumaczenia poświadczonego?",
    answer:
      "Nie zawsze. Tekst pomaga orientacyjnie ocenić objętość, ale rozliczenie tłumaczenia poświadczonego zależy od zasad strony obliczeniowej, liczby znaków i charakteru dokumentu."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PDF na TXT",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Narzędzie do wyciągania tekstu z plików PDF w celu przygotowania materiału do wstępnej oceny tłumaczenia.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PLN"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function PdfToTextPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
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
              <span className="brand-title">PDF na TXT</span>
              <span className="brand-subtitle">
                dokumenty · tekst · tłumaczenie
              </span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Strona główna</Link>
            <Link href="/blog">Baza wiedzy</Link>
            <Link href="/material-cyfrowy">Materiał cyfrowy</Link>
            <Link href="/tlumaczenia-prawnicze">Prawo</Link>
            <a className="nav-cta" href={mailtoHref}>
              Wyślij do wyceny
            </a>
          </div>
        </nav>
      </div>

      <section className="contact-hero">
        <div className="contact-hero-main">
          <span className="eyebrow">Narzędzie dla klientów</span>

          <h1>PDF na TXT — wyciągnij tekst z pliku PDF.</h1>

          <p className="lead">
            Konwerter PDF na TXT pomaga przygotować dokument, raport, pismo,
            korespondencję albo materiał cyfrowy do wstępnej oceny tłumaczenia.
            Po wyciągnięciu tekstu można go skopiować, pobrać jako plik TXT i
            łatwiej opisać zakres materiału.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#konwerter">
              Przejdź do konwertera
            </a>
            <a className="button button-secondary" href={mailtoHref}>
              Wyślij tekst do wyceny
            </a>
            <Link className="button button-secondary" href="/blog">
              Baza wiedzy
            </Link>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Format</strong>
              <span>PDF z warstwą tekstową</span>
            </div>
            <div>
              <strong>Wynik</strong>
              <span>tekst do kopiowania albo plik TXT</span>
            </div>
            <div>
              <strong>Zastosowanie</strong>
              <span>wstępna ocena tłumaczenia</span>
            </div>
          </div>
        </div>

        <aside className="contact-hero-side">
          <div className="side-card">
            <h2>Pomoc przy przygotowaniu materiału.</h2>
            <p>
              Konwersja PDF na tekst jest przydatna przy dokumentach
              elektronicznych, raportach, pismach, korespondencji i plikach,
              które mają zostać opisane przed wyceną tłumaczenia.
            </p>
          </div>

          <div className="side-list">
            <div>PDF z tekstem można zamienić na TXT.</div>
            <div>Skan dokumentu może wymagać OCR.</div>
            <div>Tekst można skopiować albo pobrać.</div>
            <div>Pliki można później dodać do wiadomości e-mail.</div>
          </div>
        </aside>
      </section>

      <section className="section" id="konwerter">
        <div className="section-heading">
          <div>
            <p className="section-label">Konwerter</p>
            <h2>Wybierz PDF i wyciągnij tekst.</h2>
          </div>
          <p>
            Narzędzie działa najlepiej z plikami PDF, które mają zapisaną
            warstwę tekstową. Przy skanach, zdjęciach dokumentów i plikach bez
            warstwy tekstowej może być potrzebne OCR.
          </p>
        </div>

        <PdfToTextTool />
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Zastosowanie</p>
            <h2>Kiedy konwersja PDF na TXT może być przydatna?</h2>
          </div>
          <p>
            Wyciągnięcie tekstu z PDF pomaga przygotować zapytanie o tłumaczenie,
            uporządkować materiał, wskazać fragmenty do tłumaczenia i ocenić
            orientacyjną objętość dokumentu.
          </p>
        </div>

        <div className="grid-3">
          {useCases.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">PDF na tekst</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="feature">
          <div>
            <p className="section-label">Strona obliczeniowa</p>
            <h2>Tekst z PDF pomaga w orientacyjnej ocenie objętości.</h2>
          </div>

          <div>
            <p>
              W tłumaczeniach poświadczonych istotna jest nie tylko liczba
              fizycznych stron dokumentu, lecz także liczba znaków. PDF
              zawierający dużo tekstu, tabele, przypisy albo drobny druk może
              mieć większą objętość niż wynikałoby to z liczby kartek.
            </p>

            <p>
              Konwersja PDF na TXT może pomóc wstępnie ocenić, ile tekstu
              zawiera dokument. Ostateczna wycena zależy jednak od języka,
              rodzaju dokumentu, terminu, jakości pliku, układu oraz celu
              tłumaczenia.
            </p>

            <div className="hero-actions">
              <Link
                className="button button-secondary"
                href="/blog/wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow"
              >
                Strona 1125 znaków
              </Link>
              <a className="button button-secondary" href={mailtoHref}>
                Wyślij materiał do oceny
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Ograniczenia</p>
            <h2>Co warto wiedzieć przed użyciem narzędzia?</h2>
          </div>
          <p>
            PDF na TXT to narzędzie pomocnicze. Nie zastępuje OCR, tłumaczenia
            poświadczonego ani analizy dokumentu przez tłumacza.
          </p>
        </div>

        <div className="grid-3">
          {limitations.map((item) => (
            <article className="card card-red" key={item.title}>
              <span className="tag">Uwaga</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="article-content">
          <section className="article-box">
            <h2>Jak przygotować PDF do tłumaczenia?</h2>
            <p>
              Najlepiej przekazać kompletny plik PDF, bez uciętych stron i bez
              brakujących załączników. Jeżeli dokument zawiera pieczęcie,
              podpisy, tabele, numery akt, daty albo oznaczenia instytucji,
              powinny być one czytelne.
            </p>
            <p>
              Przy dokumentach sądowych, urzędowych i procesowych warto od razu
              wskazać, czy tłumaczenie ma obejmować cały dokument, wybrane
              strony, określone fragmenty albo tylko część materiału.
            </p>
          </section>

          <section className="article-box">
            <h2>PDF, skan i OCR — jaka jest różnica?</h2>
            <p>
              PDF może zawierać prawdziwy tekst albo wyłącznie obraz dokumentu.
              Jeżeli tekst można zaznaczyć kursorem w zwykłej przeglądarce PDF,
              zwykle oznacza to, że plik zawiera warstwę tekstową.
            </p>
            <p>
              Jeżeli PDF powstał ze zdjęcia albo skanu i nie zawiera warstwy
              tekstowej, zwykły konwerter PDF na TXT może nie wystarczyć. Wtedy
              potrzebne jest OCR, czyli rozpoznawanie tekstu z obrazu.
            </p>
          </section>

          <section className="article-box">
            <h2>Najczęstsze pytania</h2>

            <div className="faq-list">
              {faqItems.map((item) => (
                <div className="faq-item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="section">
        <div className="cta-box">
          <div>
            <p className="section-label">Po konwersji</p>
            <h2>Wyślij tekst albo dokument do wstępnej oceny.</h2>
            <p>
              Po wyciągnięciu tekstu z PDF możesz skopiować treść, pobrać plik
              TXT albo przygotować wiadomość e-mail z opisem materiału do
              tłumaczenia. Załączniki można dodać ręcznie w programie pocztowym.
            </p>

            <div className="hero-actions">
              <a className="button button-secondary" href={mailtoHref}>
                Wyślij tekst do wyceny
              </a>
              <Link className="button button-secondary" href="/blog">
                Baza wiedzy
              </Link>
            </div>
          </div>

          <div className="cta-panel">
            <strong>PDF, dokumenty i materiał cyfrowy</strong>
            <span>
              Narzędzie pomaga technicznie przygotować tekst. Ocena
              tłumaczeniowa zależy od rodzaju dokumentu, języka, celu
              tłumaczenia i jakości materiału.
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">PDF na TXT</span>
            <span className="footer-line">
              Narzędzie pomocnicze do przygotowania materiału do tłumaczenia.
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
            <br />
            <Link className="footer-link" href="/material-cyfrowy">
              Materiał cyfrowy
            </Link>
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