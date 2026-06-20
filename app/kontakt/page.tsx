import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wyślij dokument do wyceny",
  description:
    "Prześlij dokument, skan, zdjęcie albo materiał cyfrowy do wstępnej wyceny tłumaczenia. Język ukraiński, rosyjski i angielski. Tłumaczenia prawnicze, sądowe, karne, cywilne, IT, cyber i forensic.",
  alternates: {
    canonical: "/kontakt"
  }
};

const languages = [
  "język ukraiński",
  "język rosyjski",
  "język angielski",
  "nie wiem / proszę o ocenę"
];

const caseTypes = [
  "dokument prywatny",
  "dokument urzędowy",
  "dokument z Ukrainy",
  "dokument z Rosji",
  "dokument angielski",
  "sprawa sądowa",
  "sprawa karna",
  "sprawa cywilna",
  "sprawa rodzinna",
  "sprawa gospodarcza",
  "sprawa administracyjna",
  "Policja",
  "prokuratura",
  "sąd",
  "kancelaria prawna",
  "firma",
  "IT / cyber / forensic",
  "BLIK / oszustwo internetowe",
  "kryptowaluty",
  "materiał cyfrowy",
  "inne"
];

const materialTypes = [
  "PDF",
  "skan",
  "zdjęcie dokumentu",
  "zrzuty ekranu",
  "korespondencja",
  "komunikator",
  "raport",
  "akta sprawy",
  "protokół",
  "wyrok / postanowienie",
  "umowa",
  "pełnomocnictwo",
  "inny materiał"
];

export default function ContactPage() {
  return (
    <main>
      <div className="topbar">
        <nav className="nav">
          <Link className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span>
              <span className="brand-title">Wycena tłumaczenia</span>
              <span className="brand-subtitle">
                dokumenty · prawo · cyber · forensic
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

      <section className="contact-hero">
        <div className="contact-hero-main">
          <span className="eyebrow">Formularz wyceny</span>

          <h1>Wyślij dokumenty do wstępnej wyceny tłumaczenia.</h1>

          <p className="lead">
            Opisz krótko sprawę, wskaż język i rodzaj materiału. Formularz jest
            przygotowany dla dokumentów prywatnych, sądowych, policyjnych,
            prokuratorskich, prawniczych, firmowych oraz materiału cyfrowego:
            komunikatorów, zrzutów ekranu, spraw BLIK, kryptowalut i forensic.
          </p>

          <div className="hero-mini-grid">
            <div>
              <strong>Języki</strong>
              <span>ukraiński, rosyjski, angielski</span>
            </div>
            <div>
              <strong>Sprawy</strong>
              <span>karne, cywilne, sądowe, prokuratorskie</span>
            </div>
            <div>
              <strong>Materiał</strong>
              <span>PDF, skany, zdjęcia, komunikatory, zrzuty</span>
            </div>
          </div>
        </div>

        <aside className="contact-hero-side">
          <div className="side-card">
            <h2>Nie wpisuj danych wrażliwych bez potrzeby.</h2>
            <p>
              W pierwszej wiadomości wystarczy ogólny opis materiału, język,
              liczba stron lub plików oraz informacja, do jakiej instytucji ma
              trafić tłumaczenie.
            </p>
          </div>

          <div className="side-list">
            <div>Nie trzeba opisywać całej sprawy.</div>
            <div>Wystarczy wskazać rodzaj dokumentu i termin.</div>
            <div>Materiał cyfrowy można opisać ogólnie.</div>
            <div>
              Po wstępnej ocenie można ustalić dalszy sposób przekazania plików.
            </div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="contact-layout">
          <form className="contact-form">
            <div className="form-block">
              <p className="section-label">Krok 1</p>
              <h2>Dane sprawy</h2>

              <label>
                Imię / nazwa instytucji
                <input
                  name="name"
                  type="text"
                  placeholder="np. osoba prywatna, kancelaria, sąd, Policja, prokuratura"
                />
              </label>

              <label>
                Adres zwrotny do kontaktu
                <input
                  name="reply"
                  type="text"
                  placeholder="Wpisz preferowaną formę kontaktu"
                />
              </label>

              <label>
                Termin
                <select name="deadline" defaultValue="">
                  <option value="" disabled>
                    Wybierz orientacyjny termin
                  </option>
                  <option>pilne</option>
                  <option>2–3 dni</option>
                  <option>do tygodnia</option>
                  <option>termin sądowy / urzędowy</option>
                  <option>do ustalenia</option>
                </select>
              </label>
            </div>

            <div className="form-block">
              <p className="section-label">Krok 2</p>
              <h2>Język i rodzaj materiału</h2>

              <label>
                Język
                <select name="language" defaultValue="">
                  <option value="" disabled>
                    Wybierz język
                  </option>
                  {languages.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                Rodzaj sprawy
                <select name="caseType" defaultValue="">
                  <option value="" disabled>
                    Wybierz rodzaj sprawy
                  </option>
                  {caseTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label>
                Rodzaj materiału
                <select name="materialType" defaultValue="">
                  <option value="" disabled>
                    Wybierz rodzaj materiału
                  </option>
                  {materialTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-block">
              <p className="section-label">Krok 3</p>
              <h2>Opis</h2>

              <label>
                Krótki opis dokumentu albo sprawy
                <textarea
                  name="message"
                  rows={8}
                  placeholder="Przykład: dokument z Ukrainy do urzędu, protokół przesłuchania, zrzuty ekranu z komunikatora, dokumenty do sądu, materiał w sprawie BLIK, krypto albo cyber."
                />
              </label>

              <label>
                Liczba stron / plików
                <input
                  name="volume"
                  type="text"
                  placeholder="np. 2 strony, 15 stron PDF, 30 zrzutów ekranu"
                />
              </label>

              <div className="file-box">
                <strong>Załączniki</strong>
                <span>
                  Na tym etapie formularz jest przygotowany wizualnie. W kolejnym
                  kroku podepniemy realną obsługę plików albo przekierowanie do
                  właściwego formularza.
                </span>
              </div>

              <button className="button button-primary" type="button">
                Wyślij dokumenty do wstępnej wyceny
              </button>

              <p className="form-note">
                Przycisk jest obecnie demonstracyjny. W następnym kroku
                podepniemy realną obsługę formularza.
              </p>
            </div>
          </form>

          <aside className="contact-aside">
            <div className="contact-card">
              <span className="tag">Dla organów</span>
              <h3>Sąd, Policja, prokuratura, organy ścigania.</h3>
              <p>
                Formularz może być użyty do wstępnego opisania materiału
                procesowego, akt, protokołów, dokumentów dowodowych,
                korespondencji, zrzutów ekranu albo danych cyfrowych.
              </p>
            </div>

            <div className="contact-card">
              <span className="tag">Dla kancelarii</span>
              <h3>Dokumenty prawnicze i procesowe.</h3>
              <p>
                Można przekazać ogólny opis sprawy, rodzaj dokumentu, język,
                liczbę stron oraz termin. Szczegóły mogą zostać doprecyzowane po
                wstępnej ocenie.
              </p>
            </div>

            <div className="contact-card">
              <span className="tag">Cyber / forensic</span>
              <h3>Materiał cyfrowy do tłumaczenia.</h3>
              <p>
                Komunikatory, raporty PDF, zrzuty ekranu, materiał z telefonu,
                BLIK, kryptowaluty, scam, phishing i inne sprawy cyfrowe można
                opisać najpierw bez przesyłania danych wrażliwych.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">Wycena tłumaczenia</span>
            <span className="footer-line">
              Formularz bez publicznego telefonu i bez publicznego adresu e-mail.
            </span>
          </div>

          <div>
            <span className="footer-title">Zakres</span>
            <span className="footer-line">
              ukraiński · rosyjski · angielski · prawo · cyber · forensic
            </span>
          </div>

          <div>
            <span className="footer-title">Nawigacja</span>
            <Link className="footer-link" href="/">
              Wróć do strony głównej
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}