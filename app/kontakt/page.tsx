import Link from "next/link";
import { mailtoHref } from "@/lib/mailto";

const languages = [
  {
    title: "Język ukraiński",
    text: "Tłumaczenia dokumentów z Ukrainy, akt spraw, pism procesowych, dokumentów urzędowych, korespondencji oraz materiału cyfrowego.",
    href: "/ukrainski",
    className: "card card-dark bento-large"
  },
  {
    title: "Język rosyjski",
    text: "Tłumaczenia dokumentów rosyjskojęzycznych, dokumentów sądowych, prywatnych, urzędowych, technicznych i dowodowych.",
    href: "/rosyjski",
    className: "card card-petrol bento-large"
  },
  {
    title: "Język angielski",
    text: "Tłumaczenia prawnicze, biznesowe, sądowe, akademickie, technologiczne i urzędowe w relacji z językiem angielskim.",
    href: "/angielski",
    className: "card card-gold"
  },
  {
    title: "Tłumaczenia prawnicze",
    text: "Dokumenty procesowe, umowy, pełnomocnictwa, wyroki, postanowienia, protokoły, opinie i materiał dowodowy.",
    href: "/tlumaczenia-prawnicze",
    className: "card"
  },
  {
    title: "Materiał cyfrowy i forensic",
    text: "Komunikatory, zrzuty ekranu, raporty PDF, dane z telefonu, BLIK, kryptowaluty, phishing i cyberoszustwa.",
    href: "/material-cyfrowy",
    className: "card card-red"
  }
];

const recipients = [
  {
    title: "Sądy",
    text: "Tłumaczenia akt spraw, załączników, wyroków, postanowień, protokołów, dokumentów prywatnych i materiału dowodowego.",
    href: "/tlumaczenia-dla-sadu"
  },
  {
    title: "Policja",
    text: "Protokoły, pouczenia, notatki urzędowe, dokumenty tożsamości, komunikatory, zrzuty ekranu i materiał cyfrowy.",
    href: "/tlumaczenia-dla-policji"
  },
  {
    title: "Prokuratury",
    text: "Dokumenty w postępowaniach przygotowawczych, pomoc prawna, korespondencja, raporty, dane cyfrowe i materiał dowodowy.",
    href: "/tlumaczenia-dla-prokuratury"
  },
  {
    title: "Kancelarie prawne",
    text: "Pisma procesowe, umowy, pełnomocnictwa, dokumenty klientów, załączniki, dowody i korespondencja stron.",
    href: "/tlumaczenia-prawnicze"
  },
  {
    title: "Firmy i instytucje",
    text: "Dokumenty rejestrowe, umowy, dokumentacja pracownicza, compliance, IT, korespondencja i dokumenty międzynarodowe.",
    href: "/dokumenty-angielskie"
  },
  {
    title: "Osoby prywatne",
    text: "Dokumenty z Ukrainy, dokumenty rosyjskojęzyczne, akty stanu cywilnego, dyplomy, zaświadczenia i dokumenty rodzinne.",
    href: "/dokumenty-z-ukrainy"
  }
];

const legalAreas = [
  "sprawy karne",
  "sprawy cywilne",
  "sprawy rodzinne",
  "sprawy gospodarcze",
  "sprawy administracyjne",
  "postępowania przygotowawcze",
  "pomoc prawna z Ukrainą",
  "akty oskarżenia",
  "protokoły przesłuchań",
  "wyroki i postanowienia",
  "pisma procesowe",
  "materiał dowodowy"
];

const digitalAreas = [
  {
    title: "Komunikatory",
    text: "WhatsApp, Telegram, Messenger, Signal, SMS i inne kanały komunikacji wymagają zachowania kolejności wypowiedzi, oznaczeń nadawców, dat i kontekstu."
  },
  {
    title: "Zrzuty ekranu",
    text: "Tłumaczenie zrzutów ekranu wymaga czytelnego odtworzenia treści oraz opisania elementów istotnych dla odbiorcy procesowego."
  },
  {
    title: "BLIK i płatności",
    text: "W sprawach oszustw internetowych tłumaczeniu mogą podlegać potwierdzenia transakcji, komunikaty platform, wiadomości i dane rachunków."
  },
  {
    title: "Kryptowaluty",
    text: "Materiał może obejmować portfele, giełdy, identyfikatory transakcji, korespondencję z platformą i dokumentację w języku angielskim."
  },
  {
    title: "Phishing i scam",
    text: "Tłumaczenia obejmują korespondencję, komunikaty, fałszywe oferty, regulaminy, dane kont oraz inne elementy dokumentujące przebieg zdarzenia."
  },
  {
    title: "Raporty i pliki PDF",
    text: "Raporty techniczne, eksporty danych, dokumenty elektroniczne i materiały dowodowe wymagają spójnego opracowania językowego."
  }
];

const knowledgeArticles = [
  {
    title: "Kiedy potrzebne jest tłumaczenie poświadczone z języka ukraińskiego?",
    text: "Wyjaśnienie sytuacji, w których dokument z Ukrainy powinien zostać przetłumaczony przez tłumacza przysięgłego.",
    href: "/blog/tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny"
  },
  {
    title: "Jak przygotować dokumenty z Ukrainy do tłumaczenia?",
    text: "Praktyczny przewodnik dotyczący skanów, zdjęć, plików PDF, pieczęci, podpisów i kompletności dokumentu.",
    href: "/blog/tlumaczenie-dokumentow-z-ukrainy-kompletny-przewodnik"
  },
  {
    title: "Tłumaczenia dla sądu, Policji i prokuratury",
    text: "Opis materiałów procesowych, akt sprawy, protokołów, korespondencji i dokumentów dowodowych.",
    href: "/blog/tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski"
  },
  {
    title: "Materiał cyfrowy: komunikatory, BLIK, krypto i forensic",
    text: "Omówienie tłumaczeń materiału cyfrowego w sprawach sądowych, karnych i dotyczących cyberoszustw.",
    href: "/blog/tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto"
  },
  {
    title: "Tłumaczenia w sprawach karnych",
    text: "Protokoły, akty oskarżenia, wyjaśnienia, zeznania, dokumenty dowodowe i komunikacja elektroniczna.",
    href: "/blog/tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski"
  },
  {
    title: "Tłumaczenia prawnicze z języka angielskiego",
    text: "Umowy, opinie, dokumenty korporacyjne, dokumentacja biznesowa, prawo i technologia.",
    href: "/blog/tlumaczenia-prawnicze-angielski-umowy-opinie-dokumenty"
  }
];

const cityLinks = [
  "Kraków",
  "Warszawa",
  "Wrocław",
  "Poznań",
  "Gdańsk",
  "Łódź",
  "Katowice",
  "Lublin",
  "Rzeszów",
  "Białystok",
  "Szczecin",
  "Bydgoszcz",
  "Toruń",
  "Opole",
  "Kielce",
  "Olsztyn",
  "Zielona Góra",
  "Gorzów Wielkopolski"
];

function SectionHeading({
  label,
  title,
  text
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}

function CtaButton({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary" ? "button button-primary" : "button button-secondary";

  if (href.startsWith("mailto:")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

function cityToSlug(city: string) {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("ł", "l")
    .replace(/\s+/g, "-");
}

export default function HomePage() {
  return (
    <main>
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
            <a href="#jezyki">Języki</a>
            <a href="#organy">Dla organów</a>
            <a href="#prawo">Prawo</a>
            <a href="#cyfrowe">Materiał cyfrowy</a>
            <Link href="/blog">Baza wiedzy</Link>
            <a className="nav-cta" href={mailtoHref}>
              Wyślij do wyceny
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">
            Tłumaczenia poświadczone i specjalistyczne
          </span>

          <h1>
            Tłumaczenia dla prawa, organów ścigania i materiału cyfrowego.
          </h1>

          <p className="lead">
            Tłumaczenia z języka ukraińskiego, rosyjskiego i angielskiego dla
            spraw sądowych, karnych, cywilnych, urzędowych, gospodarczych,
            rodzinnych oraz technologicznych. Dokumenty, akta, korespondencja,
            komunikatory, BLIK, kryptowaluty i materiał forensic wymagają
            precyzyjnego opracowania językowego.
          </p>

          <div className="hero-actions">
            <CtaButton href={mailtoHref}>Wyślij tekst do wyceny</CtaButton>
            <CtaButton href="/tlumaczenia-dla-policji" variant="secondary">
              Dla sądu, Policji i prokuratury
            </CtaButton>
            <CtaButton href="/blog" variant="secondary">
              Baza wiedzy
            </CtaButton>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Języki</strong>
              <span>ukraiński, rosyjski, angielski</span>
            </div>
            <div>
              <strong>Zakres</strong>
              <span>prawo, sądy, organy, dokumenty, cyber</span>
            </div>
            <div>
              <strong>Wycena</strong>
              <span>wiadomość e-mail z gotowym opisem sprawy</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <div className="side-card">
            <h2>Wstępna ocena dokumentów i materiałów.</h2>
            <p>
              Do analizy można przekazać dokument, skan, zdjęcie, fragment akt,
              korespondencję, zrzuty ekranu albo opis większego materiału. W
              pierwszej wiadomości wystarczy wskazać język, rodzaj dokumentu,
              termin i instytucję, do której ma trafić tłumaczenie.
            </p>
          </div>

          <div className="side-list">
            <div>Zapraszam sądy, Policję, prokuratury i organy ścigania.</div>
            <div>Obsługa dokumentów prawniczych, sądowych i urzędowych.</div>
            <div>Materiały cyfrowe: komunikatory, BLIK, krypto, phishing.</div>
            <div>Dokumenty z Ukrainy, rosyjskojęzyczne i angielskie.</div>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item">
            <strong>Ukraiński</strong>
            dokumenty z Ukrainy, akta, sprawy sądowe i urzędowe
          </div>
          <div className="trust-item">
            <strong>Rosyjski</strong>
            dokumenty rosyjskojęzyczne, korespondencja i materiał dowodowy
          </div>
          <div className="trust-item">
            <strong>Angielski</strong>
            prawo, biznes, technologia, dokumenty akademickie i urzędowe
          </div>
          <div className="trust-item">
            <strong>Forensic</strong>
            komunikatory, BLIK, krypto, cyber i ślad cyfrowy
          </div>
        </div>
      </section>

      <section className="section" id="jezyki">
        <SectionHeading
          label="Języki"
          title="Trzy języki w sprawach wymagających dokładności."
          text="Tłumaczenia obejmują dokumenty poświadczone, prawnicze, sądowe, urzędowe, prywatne, biznesowe i cyfrowe. Każdy język wymaga nie tylko poprawności, lecz także rozumienia celu dokumentu."
        />

        <div className="bento-grid">
          {languages.map((item) => (
            <article className={item.className} key={item.title}>
              <span className="tag">Zakres</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="card-link" href={item.href}>
                Zobacz szczegóły →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="organy">
        <SectionHeading
          label="Dla kogo"
          title="Tłumaczenia dla instytucji, organów, kancelarii i klientów prywatnych."
          text="Dokument może być dowodem, załącznikiem do akt, podstawą czynności urzędowej albo materiałem do analizy prawnej. Dlatego forma tłumaczenia powinna odpowiadać funkcji dokumentu."
        />

        <div className="grid-3">
          {recipients.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Odbiorca</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="card-link" href={item.href}>
                Przejdź do zakresu →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact" id="prawo">
        <div className="feature">
          <div>
            <p className="section-label">Prawo i postępowania</p>
            <h2>
              Tłumaczenia dokumentów, które funkcjonują w sprawie prawnej.
            </h2>
          </div>

          <div>
            <p>
              W sprawach karnych, cywilnych, rodzinnych, gospodarczych i
              administracyjnych znaczenie ma nie tylko treść dokumentu, lecz
              także jego rola: dowód, załącznik, pismo procesowe, protokół,
              dokument urzędowy albo materiał wymagający oceny przez organ.
            </p>

            <div className="labels">
              {legalAreas.map((item) => (
                <span className="label" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <CtaButton href="/sprawy-karne" variant="secondary">
                Sprawy karne
              </CtaButton>
              <CtaButton href="/sprawy-cywilne" variant="secondary">
                Sprawy cywilne
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="cyfrowe">
        <SectionHeading
          label="Materiał cyfrowy"
          title="Komunikatory, BLIK, krypto, phishing i dane elektroniczne."
          text="W sprawach cyfrowych istotna jest struktura materiału: nadawcy, odbiorcy, daty, godziny, kolejność wiadomości, identyfikatory transakcji i kontekst. Tłumaczenie powinno pomagać w analizie, a nie zaciemniać materiał."
        />

        <div className="grid-3">
          {digitalAreas.map((item) => (
            <article className="card card-red" key={item.title}>
              <span className="tag">Cyber / forensic</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="card-link" href="/material-cyfrowy">
                Materiał cyfrowy →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="dokumenty">
        <SectionHeading
          label="Dokumenty"
          title="Dokumenty z Ukrainy, dokumenty rosyjskojęzyczne i angielskie."
          text="Do tłumaczenia trafiają zarówno dokumenty urzędowe i osobiste, jak i materiały procesowe, biznesowe, techniczne oraz dowodowe."
        />

        <div className="grid-3">
          <article className="card card-dark">
            <span className="tag">Ukraina</span>
            <h3>Dokumenty z Ukrainy</h3>
            <p>
              Akty stanu cywilnego, dyplomy, świadectwa, zaświadczenia,
              pełnomocnictwa, dokumenty pobytowe, dokumenty sądowe i urzędowe.
            </p>
            <Link className="card-link" href="/dokumenty-z-ukrainy">
              Dokumenty z Ukrainy →
            </Link>
          </article>

          <article className="card card-petrol">
            <span className="tag">Rosyjski</span>
            <h3>Dokumenty rosyjskojęzyczne</h3>
            <p>
              Dokumenty prywatne, sądowe, urzędowe, korespondencja, komunikatory
              oraz materiały, w których język rosyjski występuje obok
              ukraińskiego.
            </p>
            <Link className="card-link" href="/dokumenty-z-rosji">
              Dokumenty rosyjskojęzyczne →
            </Link>
          </article>

          <article className="card card-gold">
            <span className="tag">Angielski</span>
            <h3>Dokumenty angielskie</h3>
            <p>
              Umowy, dokumenty firmowe, opinie, regulaminy, raporty techniczne,
              dokumentacja IT, dokumenty akademickie i sądowe.
            </p>
            <Link className="card-link" href="/dokumenty-angielskie">
              Dokumenty angielskie →
            </Link>
          </article>
        </div>
      </section>

      <section className="section" id="miasta">
        <SectionHeading
          label="Kraków i obsługa online"
          title="Tłumaczenia dla klientów i instytucji z całej Polski."
          text="Dokumenty można przekazać do wstępnej oceny przez przygotowaną wiadomość e-mail. Strona obsługuje zapytania lokalne dla Krakowa i największych miast wojewódzkich."
        />

        <div className="grid-3">
          <article className="card card-gold">
            <span className="tag">Kraków</span>
            <h3>Tłumacz ukraiński Kraków</h3>
            <p>
              Lokalna podstrona dla dokumentów z Ukrainy, spraw sądowych,
              urzędowych, policyjnych, prokuratorskich i cyfrowych.
            </p>
            <Link className="card-link" href="/ukrainski">
              Tłumacz ukraiński Kraków →
            </Link>
          </article>

          <article className="card">
            <span className="tag">Online</span>
            <h3>Wstępna wycena zdalna</h3>
            <p>
              Do pierwszej oceny wystarczy opis sprawy, język, termin oraz skan,
              zdjęcie albo plik PDF. Nie trzeba opisywać wszystkich szczegółów w
              pierwszej wiadomości.
            </p>
            <a className="card-link" href={mailtoHref}>
              Wyślij dokument do wyceny →
            </a>
          </article>

          <article className="card card-petrol">
            <span className="tag">Miasta</span>
            <h3>Największe miasta w Polsce</h3>
            <p>
              Podstrony lokalne prowadzą użytkowników z miast wojewódzkich do
              wstępnej oceny dokumentów.
            </p>
            <Link className="card-link" href="/ukrainski">
              Przykład: Warszawa →
            </Link>
          </article>
        </div>

        <div className="labels" style={{ marginTop: "24px" }}>
          {cityLinks.map((city) => (
            <Link
              className="label"
              key={city}
              href={`/tlumacz-ukrainski-${cityToSlug(city)}`}
            >
              {city}
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="wiedza">
        <SectionHeading
          label="Baza wiedzy"
          title="Poradnik tłumaczeń specjalistycznych."
          text="Artykuły wyjaśniają, kiedy potrzebne jest tłumaczenie poświadczone, jak przygotować dokumenty, jak opisać materiał cyfrowy oraz na co zwrócić uwagę w sprawach sądowych i urzędowych."
        />

        <div className="grid-3">
          {knowledgeArticles.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Poradnik</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="card-link" href={item.href}>
                Czytaj więcej →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="wycena">
        <div className="cta-box">
          <div>
            <p className="section-label">Wstępna ocena</p>
            <h2>Wyślij dokument, tekst albo materiał cyfrowy do wyceny.</h2>
            <p>
              W wiadomości wskaż język, rodzaj materiału, termin oraz cel
              tłumaczenia. Możesz przekazać dokument urzędowy, skan, zdjęcie,
              fragment akt, pismo procesowe, korespondencję albo materiał
              cyfrowy. Sądy, Policja, prokuratury, organy ścigania, kancelarie i
              instytucje mogą opisać zakres materiału bez ujawniania danych
              wrażliwych w pierwszej wiadomości.
            </p>

            <div className="hero-actions">
              <CtaButton href={mailtoHref} variant="secondary">
                Wyślij tekst do wyceny
              </CtaButton>
              <CtaButton href="/tlumaczenia-dla-prokuratury" variant="secondary">
                Dla organów i instytucji
              </CtaButton>
            </div>
          </div>

          <div className="cta-panel">
            <strong>Dokumenty, akta, komunikatory i materiał cyfrowy</strong>
            <span>
              Wstępna ocena pozwala ustalić zakres, język, termin oraz sposób
              przygotowania tłumaczenia. Wiadomość e-mail można uzupełnić o
              pliki, skany, zdjęcia albo zrzuty ekranu.
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">
              Tłumaczenia ukraiński, rosyjski, angielski
            </span>
            <span className="footer-line">
              Dokumenty prawnicze, sądowe, urzędowe, cyfrowe i dowodowe.
            </span>
            <span className="footer-line">
              Prawo · sądy · Policja · prokuratura · IT · cyber · forensic.
            </span>
          </div>

          <div>
            <span className="footer-title">Zakres</span>
            <Link className="footer-link" href="/ukrainski">
              Język ukraiński
            </Link>
            <br />
            <Link className="footer-link" href="/tlumaczenia-prawnicze">
              Tłumaczenia prawnicze
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
            <br />
            <Link className="footer-link" href="/blog">
              Baza wiedzy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}