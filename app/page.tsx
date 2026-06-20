import Link from "next/link";

const languages = [
  {
    title: "Język ukraiński",
    text: "Tłumaczenia dokumentów z Ukrainy, akt spraw, pism procesowych, korespondencji, dokumentów urzędowych i materiału cyfrowego.",
    href: "#ukrainski",
    className: "card card-dark bento-large"
  },
  {
    title: "Język rosyjski",
    text: "Tłumaczenia dokumentów rosyjskojęzycznych, akt, dokumentów sądowych, prywatnych, urzędowych, technicznych i dowodowych.",
    href: "#rosyjski",
    className: "card card-petrol bento-large"
  },
  {
    title: "Język angielski",
    text: "Tłumaczenia prawnicze, sądowe, biznesowe, akademickie, technologiczne i urzędowe w relacji z językiem angielskim.",
    href: "#angielski",
    className: "card card-gold"
  },
  {
    title: "Tłumaczenia prawnicze",
    text: "Sprawy karne, cywilne, rodzinne, gospodarcze, administracyjne, sądowe i prokuratorskie.",
    href: "#prawo",
    className: "card"
  },
  {
    title: "Materiał cyfrowy i forensic",
    text: "Komunikatory, zrzuty ekranu, raporty PDF, dane z telefonu, cyberoszustwa, BLIK, kryptowaluty i ślady cyfrowe.",
    href: "#cyfrowe",
    className: "card card-red"
  }
];

const serviceCards = [
  {
    title: "Dla sądów",
    text: "Akta spraw, postanowienia, wyroki, protokoły, opinie, załączniki, korespondencja procesowa i dokumenty dowodowe."
  },
  {
    title: "Dla Policji",
    text: "Protokoły przesłuchań, pouczenia, notatki urzędowe, zrzuty ekranu, komunikatory, materiał cyfrowy i dokumentacja czynności."
  },
  {
    title: "Dla prokuratur",
    text: "Dokumenty z postępowań przygotowawczych, pomoc prawna, materiał dowodowy, korespondencja i dokumenty zagraniczne."
  },
  {
    title: "Dla kancelarii prawnych",
    text: "Tłumaczenia dokumentów procesowych, umów, pełnomocnictw, pism, dowodów i dokumentów klientów."
  },
  {
    title: "Dla firm",
    text: "Umowy, dokumenty rejestrowe, korespondencja, dokumenty pracownicze, compliance, IT i dokumentacja techniczna."
  },
  {
    title: "Dla osób prywatnych",
    text: "Dokumenty z Ukrainy, Rosji i krajów anglojęzycznych, dokumenty urzędowe, edukacyjne, rodzinne i osobiste."
  }
];

const legalSpecializations = [
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
  "materiał dowodowy",
  "opinie biegłych",
  "korespondencja osadzonych",
  "skargi i oświadczenia",
  "pełnomocnictwa",
  "umowy",
  "dokumenty rejestrowe",
  "dokumenty pracownicze",
  "dokumenty pobytowe"
];

const digitalSpecializations = [
  "komunikatory",
  "WhatsApp",
  "Telegram",
  "Messenger",
  "Signal",
  "SMS",
  "zrzuty ekranu",
  "raporty PDF",
  "dane z telefonu",
  "oszustwa internetowe",
  "BLIK",
  "kryptowaluty",
  "portfele krypto",
  "giełdy kryptowalut",
  "phishing",
  "scam",
  "forensic",
  "ślad cyfrowy",
  "dokumenty elektroniczne",
  "korespondencja e-mail"
];

const cityGroups = [
  {
    title: "Największe miasta",
    cities:
      "Warszawa, Kraków, Wrocław, Poznań, Gdańsk, Łódź, Szczecin, Lublin, Białystok, Katowice."
  },
  {
    title: "Miasta wojewódzkie",
    cities:
      "Rzeszów, Kielce, Olsztyn, Opole, Toruń, Bydgoszcz, Zielona Góra, Gorzów Wielkopolski."
  },
  {
    title: "Obsługa zdalna",
    cities:
      "Dokumenty można przygotować do wstępnej wyceny online z całej Polski — bez publikowania telefonu i adresu e-mail w treści SEO."
  }
];

const blogPlan = [
  {
    title:
      "Tłumacz przysięgły ukraiński — kiedy potrzebne jest tłumaczenie poświadczone?",
    text: "Artykuł edukacyjny dla osób z dokumentami z Ukrainy, sądów, urzędów i instytucji."
  },
  {
    title: "Tłumaczenia dla Policji — protokoły, pouczenia i materiał cyfrowy",
    text: "Wpis kierowany do funkcjonariuszy, pełnomocników i osób uczestniczących w czynnościach."
  },
  {
    title:
      "Tłumaczenia dla prokuratury — dokumenty w sprawach z elementem ukraińskim, rosyjskim lub angielskim",
    text: "Artykuł o dokumentach procesowych, pomocy prawnej, dowodach i aktach postępowań."
  },
  {
    title: "Tłumaczenie korespondencji osadzonych z języka ukraińskiego",
    text: "Wpis o listach, skargach, prośbach, oświadczeniach i pismach odręcznych."
  },
  {
    title:
      "Tłumaczenie materiału cyfrowego — komunikatory, BLIK, krypto, forensic",
    text: "Artykuł SEO dla spraw cyber, oszustw internetowych i dowodów cyfrowych."
  },
  {
    title: "Tłumacz rosyjski czy ukraiński — jak rozpoznać język dokumentu?",
    text: "Praktyczny wpis dla osób, które nie wiedzą, czy dokument wymaga tłumacza ukraińskiego czy rosyjskiego."
  }
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
  return (
    <Link
      className={
        variant === "primary"
          ? "button button-primary"
          : "button button-secondary"
      }
      href={href}
    >
      {children}
    </Link>
  );
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
            <a href="#prawo">Prawo</a>
            <a href="#cyfrowe">Forensic</a>
            <a href="#organy">Dla organów</a>
            <a href="#miasta">Miasta</a>
            <a href="#blog">Blog SEO</a>
            <Link className="nav-cta" href="/kontakt">
              Wyślij do wyceny
            </Link>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">
            Tłumaczenia ukraiński · rosyjski · angielski
          </span>

          <h1>Specjalistyczne tłumaczenia prawnicze, sądowe i cyfrowe.</h1>

          <p className="lead">
            Strona SEO poświęcona tłumaczeniom z języka ukraińskiego,
            rosyjskiego i angielskiego. Główne obszary: dokumenty sądowe,
            sprawy karne, cywilne, prokuratorskie, policyjne, materiał cyfrowy,
            cyberoszustwa, BLIK, kryptowaluty i forensic.
          </p>

          <div className="hero-actions">
            <CtaButton href="/kontakt">Wyślij dokumenty do wyceny</CtaButton>
            <CtaButton href="#organy" variant="secondary">
              Dla sądu, Policji i prokuratury
            </CtaButton>
            <CtaButton href="#blog" variant="secondary">
              Zobacz strategię blogu
            </CtaButton>
          </div>

          <div className="hero-mini-grid">
            <div>
              <strong>Języki</strong>
              <span>ukraiński, rosyjski, angielski</span>
            </div>
            <div>
              <strong>Specjalizacja</strong>
              <span>prawo, sądy, karne, cywilne, IT</span>
            </div>
            <div>
              <strong>SEO</strong>
              <span>artykuły edukacyjne generujące ruch</span>
            </div>
          </div>
        </div>

        <aside className="hero-side">
          <div className="side-card">
            <h2>Centrum wiedzy o tłumaczeniach specjalistycznych.</h2>
            <p>
              Celem strony jest pozyskiwanie ruchu z Google przez długie,
              praktyczne artykuły odpowiadające na realne pytania klientów,
              organów ścigania, sądów, prokuratur, kancelarii i firm.
            </p>
          </div>

          <div className="side-list">
            <div>Bez widocznego telefonu na stronie SEO.</div>
            <div>Bez widocznego adresu e-mail w treści.</div>
            <div>CTA prowadzi do formularza wyceny.</div>
            <div>
              Treść budowana pod intencje: prawo, dokumenty, sprawy i miasta.
            </div>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item">
            <strong>Ukraiński</strong>
            dokumenty z Ukrainy, sprawy sądowe i urzędowe
          </div>
          <div className="trust-item">
            <strong>Rosyjski</strong>
            dokumenty rosyjskojęzyczne, akta i materiał dowodowy
          </div>
          <div className="trust-item">
            <strong>Angielski</strong>
            prawo, biznes, IT, dokumenty akademickie i urzędowe
          </div>
          <div className="trust-item">
            <strong>Forensic</strong>
            komunikatory, BLIK, krypto, cyber i ślad cyfrowy
          </div>
        </div>
      </section>

      <section className="section" id="jezyki">
        <SectionHeading
          label="Języki i zakres"
          title="Trzy języki, jedna specjalizacja: dokumenty wymagające precyzji."
          text="Strona pracuje na frazy wyszukiwane przez klientów prywatnych, kancelarie prawne, organy ścigania, sądy, prokuratury i firmy."
        />

        <div className="bento-grid">
          {languages.map((item) => (
            <article
              className={item.className}
              key={item.title}
              id={item.href.replace("#", "")}
            >
              <span className="tag">Zakres</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="card-link" href={item.href}>
                Przejdź do zakresu →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="organy">
        <SectionHeading
          label="Odbiorcy usług"
          title="Treść kierowana do organów, kancelarii, firm i osób prywatnych."
          text="Każdy segment odbiorców powinien mieć własne podstrony i wpisy blogowe, ponieważ wpisuje inne zapytania w Google."
        />

        <div className="grid-3">
          {serviceCards.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Dla kogo</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="card-link" href="/kontakt">
                Wyślij dokumenty do wstępnej wyceny →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact" id="prawo">
        <div className="feature">
          <div>
            <p className="section-label">Tłumaczenia prawnicze</p>
            <h2>
              Sprawy karne, cywilne, rodzinne, gospodarcze i administracyjne.
            </h2>
          </div>

          <div>
            <p>
              Najmocniejszy kierunek SEO powinien obejmować tłumaczenia
              prawnicze i sądowe, ponieważ użytkownicy szukają nie tylko języka,
              ale też konkretnego rodzaju sprawy: karnej, cywilnej, rodzinnej,
              gospodarczej, administracyjnej albo prokuratorskiej.
            </p>

            <div className="labels">
              {legalSpecializations.slice(0, 12).map((item) => (
                <span className="label" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="cyfrowe">
        <SectionHeading
          label="Materiał cyfrowy"
          title="Tłumaczenia IT, cyber, BLIK, krypto i forensic."
          text="To osobny, mocny kierunek tematyczny. W Google można budować ruch przez artykuły o tłumaczeniu komunikatorów, zrzutów ekranu, raportów PDF, oszustw internetowych i materiału dowodowego."
        />

        <div className="grid-4">
          {digitalSpecializations.slice(0, 16).map((item) => (
            <article className="card card-red" key={item}>
              <span className="tag">Cyber / IT</span>
              <h3>{item}</h3>
              <p>
                Fraza tematyczna do rozwinięcia w osobnym wpisie blogowym lub
                sekcji SEO opisującej tłumaczenia materiału cyfrowego.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="miasta">
        <SectionHeading
          label="Lokalne SEO"
          title="Kraków i wszystkie miasta wojewódzkie w Polsce."
          text="Strona łączy silną lokalizację Kraków z obsługą zdalną dokumentów z całej Polski."
        />

        <div className="grid-3">
          {cityGroups.map((item) => (
            <article className="card card-gold" key={item.title}>
              <span className="tag">Miasta</span>
              <h3>{item.title}</h3>
              <p>{item.cities}</p>
              <Link className="card-link" href="/kontakt">
                Wyślij dokumenty z dowolnego miasta →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="blog">
        <SectionHeading
          label="Strategia blogu"
          title="Blog ma być do czytania, nie tylko pod roboty."
          text="Każdy wpis powinien odpowiadać na konkretny problem: jaki dokument trzeba przetłumaczyć, kiedy potrzebne jest tłumaczenie poświadczone, jak przygotować materiał i kiedy warto szukać tłumacza specjalistycznego."
        />

        <div className="grid-3">
          {blogPlan.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Plan wpisu</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="card-link" href="/kontakt">
                CTA: wyślij dokumenty do wyceny →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Pełna mapa specjalizacji"
          title="Tematy do rozbudowy na kolejne podstrony i artykuły."
          text="Z tych fraz można zbudować strukturę SEO: strony językowe, strony prawnicze, strony dla organów, strony lokalne i serię długich wpisów blogowych."
        />

        <div className="grid-4">
          {legalSpecializations.concat(digitalSpecializations).map((item) => (
            <article className="card" key={item}>
              <span className="tag">SEO</span>
              <h3>{item}</h3>
              <p>
                Osobny akapit, podstrona albo wpis blogowy może kierować ruch z
                Google na tę specjalizację.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="wycena">
        <div className="cta-box">
          <div>
            <p className="section-label">Call to action</p>
            <h2>
              Potrzebujesz tłumaczenia? Wyślij dokumenty do wstępnej wyceny.
            </h2>
            <p>
              Przygotuj skan, zdjęcie albo plik PDF. W formularzu opisz język,
              rodzaj dokumentu, termin oraz to, czy dokument dotyczy sądu,
              prokuratury, Policji, sprawy prywatnej, firmy, IT, cyber,
              kryptowalut albo materiału dowodowego.
            </p>

            <div className="hero-actions">
              <CtaButton href="/kontakt" variant="secondary">
                Przejdź do formularza wyceny
              </CtaButton>
              <CtaButton
                href="https://www.tlumaczrosyjskiegoiukrainskiego.pl/"
                variant="secondary"
              >
                Główna strona kancelarii
              </CtaButton>
            </div>
          </div>

          <div className="cta-panel">
            <strong>CTA bez telefonu i bez e-maila w treści</strong>
            <span>
              Ten projekt SEO nie pokazuje danych kontaktowych w widocznych
              sekcjach. Użytkownik jest kierowany do formularza, strony głównej
              albo sekcji wyceny.
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
              SEO blog i centrum wiedzy o tłumaczeniach specjalistycznych.
            </span>
            <span className="footer-line">
              Prawo · sądy · Policja · prokuratura · IT · cyber · forensic.
            </span>
          </div>

          <div>
            <span className="footer-title">Najważniejsze działy</span>
            <a className="footer-link" href="#jezyki">
              Języki
            </a>
            <br />
            <a className="footer-link" href="#prawo">
              Tłumaczenia prawnicze
            </a>
            <br />
            <a className="footer-link" href="#cyfrowe">
              Materiał cyfrowy
            </a>
          </div>

          <div>
            <span className="footer-title">CTA</span>
            <Link className="footer-link" href="/kontakt">
              Wyślij dokumenty do wyceny
            </Link>
            <br />
            <a
              className="footer-link"
              href="https://www.tlumaczrosyjskiegoiukrainskiego.pl/"
            >
              Strona główna kancelarii
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}