export type LandingPageType =
  | "język"
  | "usługa"
  | "specjalizacja"
  | "miasto";

export type LandingPageSection = {
  heading: string;
  text: string;
};

export type LandingPage = {
  slug: string;
  type: LandingPageType;
  title: string;
  description: string;
  h1: string;
  lead: string;
  badge: string;
  keywords: string[];
  sections: LandingPageSection[];
  ctaTitle: string;
  ctaText: string;
};

const commonLegalSections: LandingPageSection[] = [
  {
    heading: "Tłumaczenia dokumentów wymagających precyzji",
    text: "W sprawach prawniczych, sądowych, urzędowych i dowodowych tłumaczenie nie polega wyłącznie na przełożeniu słów. Ważne jest zachowanie znaczenia dokumentu, jego funkcji procesowej, układu, numeracji, nazw instytucji, dat, podpisów, pieczęci i elementów formalnych."
  },
  {
    heading: "Materiały dla sądów, Policji, prokuratur i kancelarii",
    text: "Do wyceny można przekazać dokumenty procesowe, protokoły, pisma, akty sprawy, materiał dowodowy, zrzuty ekranu, korespondencję, dokumenty z zagranicy albo opis większego zestawu materiałów."
  },
  {
    heading: "Wstępna ocena bez publikowania telefonu i adresu e-mail",
    text: "Ten projekt SEO kieruje użytkownika do formularza wyceny. Dane kontaktowe nie są eksponowane w treści podstron, co ogranicza ich automatyczne skanowanie przez roboty i narzędzia zewnętrzne."
  }
];

export const landingPages: LandingPage[] = [
  {
    slug: "ukrainski",
    type: "język",
    title: "Tłumaczenia ukraiński | Tłumacz przysięgły języka ukraińskiego",
    description:
      "Tłumaczenia języka ukraińskiego: dokumenty z Ukrainy, sprawy sądowe, karne, cywilne, prokuratorskie, policyjne i materiał cyfrowy.",
    h1: "Tłumaczenia z języka ukraińskiego.",
    lead:
      "Specjalistyczne tłumaczenia dokumentów z Ukrainy, akt spraw, pism procesowych, korespondencji, materiału cyfrowego i dokumentów urzędowych.",
    badge: "język ukraiński",
    keywords: [
      "tłumacz przysięgły ukraiński",
      "tłumaczenia ukraiński",
      "dokumenty z Ukrainy",
      "tłumacz ukraiński Kraków"
    ],
    sections: [
      {
        heading: "Dokumenty z Ukrainy",
        text: "Tłumaczenia obejmują akty stanu cywilnego, dyplomy, świadectwa, pełnomocnictwa, zaświadczenia, dokumenty pobytowe, dokumenty sądowe, dokumenty urzędowe i prywatne."
      },
      {
        heading: "Język ukraiński w postępowaniach",
        text: "Język ukraiński często pojawia się w sprawach karnych, cywilnych, rodzinnych, administracyjnych, imigracyjnych i dowodowych. W takich sprawach istotna jest precyzja oraz spójność terminologiczna."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz dokument w języku ukraińskim?",
    ctaText:
      "Prześlij dokument do wstępnej wyceny przez formularz. Wskaż rodzaj dokumentu, termin i cel tłumaczenia."
  },
  {
    slug: "rosyjski",
    type: "język",
    title: "Tłumaczenia rosyjski | Tłumacz przysięgły języka rosyjskiego",
    description:
      "Tłumaczenia języka rosyjskiego: dokumenty rosyjskojęzyczne, sprawy sądowe, prawnicze, urzędowe, prywatne i materiał dowodowy.",
    h1: "Tłumaczenia z języka rosyjskiego.",
    lead:
      "Tłumaczenia dokumentów rosyjskojęzycznych, materiałów sądowych, pism urzędowych, dokumentów prywatnych, korespondencji i materiału cyfrowego.",
    badge: "język rosyjski",
    keywords: [
      "tłumacz przysięgły rosyjski",
      "tłumaczenia rosyjski",
      "tłumacz rosyjski Kraków",
      "dokumenty rosyjskie tłumaczenie"
    ],
    sections: [
      {
        heading: "Dokumenty rosyjskojęzyczne",
        text: "Język rosyjski może występować w dokumentach urzędowych, prywatnych, sądowych, korespondencji, komunikatorach, dokumentach z akt sprawy i materiałach dowodowych."
      },
      {
        heading: "Rosyjski a ukraiński",
        text: "W praktyce użytkownik często nie wie, czy dokument jest po rosyjsku czy po ukraińsku. Do wstępnej oceny można przekazać plik lub zdjęcie i wskazać, że język wymaga rozpoznania."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz dokument w języku rosyjskim?",
    ctaText:
      "Przekaż materiał przez formularz wyceny. W opisie wskaż, czy dokument ma być użyty w urzędzie, sądzie, sprawie prywatnej albo postępowaniu."
  },
  {
    slug: "angielski",
    type: "język",
    title: "Tłumaczenia angielski | Tłumaczenia prawnicze i specjalistyczne",
    description:
      "Tłumaczenia z języka angielskiego: dokumenty prawnicze, biznesowe, sądowe, techniczne, IT, cyber, umowy i opinie.",
    h1: "Tłumaczenia z języka angielskiego.",
    lead:
      "Tłumaczenia prawnicze, sądowe, biznesowe, akademickie, techniczne i cyfrowe z języka angielskiego.",
    badge: "język angielski",
    keywords: [
      "tłumacz przysięgły angielski",
      "tłumaczenia prawnicze angielski",
      "tłumaczenie umowy angielski",
      "tłumacz angielski Kraków"
    ],
    sections: [
      {
        heading: "Dokumenty prawnicze i biznesowe",
        text: "Język angielski pojawia się w umowach, dokumentach spółek, opiniach prawnych, regulaminach, dokumentacji biznesowej, korespondencji, raportach i materiałach technicznych."
      },
      {
        heading: "Angielski w sprawach technologicznych",
        text: "W sprawach cyber, IT, kryptowalutowych i transakcyjnych język angielski często występuje w raportach, regulaminach platform, dokumentacji technicznej i potwierdzeniach operacji."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz dokument w języku angielskim?",
    ctaText:
      "Wyślij dokument do wstępnej oceny. Opisz, czy chodzi o dokument prawniczy, biznesowy, urzędowy, techniczny albo procesowy."
  },
  {
    slug: "tlumaczenia-prawnicze",
    type: "specjalizacja",
    title: "Tłumaczenia prawnicze | Ukraiński, rosyjski, angielski",
    description:
      "Tłumaczenia prawnicze z języka ukraińskiego, rosyjskiego i angielskiego: umowy, pisma procesowe, wyroki, pełnomocnictwa, opinie i akta.",
    h1: "Tłumaczenia prawnicze.",
    lead:
      "Specjalistyczne tłumaczenia dokumentów prawnych, procesowych, sądowych i urzędowych w języku ukraińskim, rosyjskim i angielskim.",
    badge: "prawo",
    keywords: [
      "tłumaczenia prawnicze",
      "tłumaczenia sądowe",
      "tłumaczenie wyroku",
      "tłumaczenie umowy",
      "tłumaczenie pełnomocnictwa"
    ],
    sections: [
      {
        heading: "Zakres tłumaczeń prawniczych",
        text: "Tłumaczenia mogą obejmować umowy, pełnomocnictwa, pisma procesowe, wyroki, postanowienia, akty oskarżenia, opinie prawne, regulaminy, dokumenty spółek i dokumentację dowodową."
      },
      {
        heading: "Znaczenie kontekstu prawnego",
        text: "W tłumaczeniach prawniczych istotny jest nie tylko język, ale również kontekst: rodzaj sprawy, rola dokumentu, odbiorca, etap postępowania i cel użycia tłumaczenia."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Potrzebujesz tłumaczenia prawniczego?",
    ctaText:
      "Przekaż dokumenty przez formularz i opisz, czy dotyczą sprawy sądowej, urzędowej, biznesowej, karnej, cywilnej albo rodzinnej."
  },
  {
    slug: "sprawy-karne",
    type: "specjalizacja",
    title: "Tłumaczenia w sprawach karnych | Ukraiński, rosyjski, angielski",
    description:
      "Tłumaczenia w sprawach karnych: protokoły, akty oskarżenia, zeznania, wyjaśnienia, korespondencja, komunikatory i materiał dowodowy.",
    h1: "Tłumaczenia w sprawach karnych.",
    lead:
      "Tłumaczenia dokumentów i materiałów w postępowaniach karnych, przygotowawczych, sądowych, policyjnych i prokuratorskich.",
    badge: "sprawy karne",
    keywords: [
      "tłumaczenia w sprawach karnych",
      "tłumaczenie aktu oskarżenia",
      "tłumaczenie protokołu przesłuchania",
      "tłumaczenie zeznań",
      "tłumaczenie materiału dowodowego"
    ],
    sections: [
      {
        heading: "Dokumenty w sprawach karnych",
        text: "Tłumaczeniu mogą podlegać protokoły przesłuchań, wyjaśnienia podejrzanych, zeznania świadków, akty oskarżenia, notatki urzędowe, korespondencja, zrzuty ekranu i dokumenty z akt sprawy."
      },
      {
        heading: "Materiał cyfrowy w sprawach karnych",
        text: "W sprawach karnych często pojawiają się komunikatory, SMS-y, wiadomości e-mail, potwierdzenia transakcji, BLIK, kryptowaluty, dane z telefonu i raporty PDF."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz materiał do sprawy karnej?",
    ctaText:
      "Prześlij opis materiału do formularza. Wskaż język, rodzaj dokumentów, liczbę stron lub plików oraz termin."
  },
  {
    slug: "sprawy-cywilne",
    type: "specjalizacja",
    title: "Tłumaczenia w sprawach cywilnych | Dokumenty i pisma procesowe",
    description:
      "Tłumaczenia w sprawach cywilnych: pozwy, odpowiedzi na pozew, umowy, dokumenty rodzinne, spadkowe, gospodarcze i dowodowe.",
    h1: "Tłumaczenia w sprawach cywilnych.",
    lead:
      "Tłumaczenia dokumentów w sprawach cywilnych, rodzinnych, spadkowych, gospodarczych, kontraktowych i administracyjnych.",
    badge: "sprawy cywilne",
    keywords: [
      "tłumaczenia cywilne",
      "tłumaczenie pozwu",
      "tłumaczenie dokumentów rodzinnych",
      "tłumaczenie sprawy spadkowej",
      "tłumaczenie umowy"
    ],
    sections: [
      {
        heading: "Dokumenty cywilne i rodzinne",
        text: "Do tłumaczenia mogą trafić pozwy, odpowiedzi na pozew, dokumenty rozwodowe, dokumenty alimentacyjne, dokumenty rodzinne, spadkowe, umowy, pełnomocnictwa i korespondencja stron."
      },
      {
        heading: "Dokumenty jako materiał dowodowy",
        text: "W sprawach cywilnych dokument może być dowodem albo załącznikiem do pisma. Tłumaczenie powinno zachować jasność, układ i znaczenie dokumentu."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz dokument do sprawy cywilnej?",
    ctaText:
      "Opisz sprawę w formularzu i wskaż, czy dokument będzie użyty w sądzie, u pełnomocnika, w urzędzie albo prywatnie."
  },
  {
    slug: "material-cyfrowy",
    type: "specjalizacja",
    title: "Tłumaczenie materiału cyfrowego | Komunikatory, PDF, dane z telefonu",
    description:
      "Tłumaczenie materiału cyfrowego: komunikatory, zrzuty ekranu, raporty PDF, SMS-y, e-maile, dane z telefonu, cyber i forensic.",
    h1: "Tłumaczenie materiału cyfrowego.",
    lead:
      "Tłumaczenia komunikatorów, zrzutów ekranu, SMS-ów, raportów PDF, danych z telefonu, dokumentów elektronicznych i materiału dowodowego.",
    badge: "materiał cyfrowy",
    keywords: [
      "tłumaczenie materiału cyfrowego",
      "tłumaczenie zrzutów ekranu",
      "tłumaczenie WhatsApp",
      "tłumaczenie Telegram",
      "tłumaczenie danych z telefonu"
    ],
    sections: [
      {
        heading: "Co może być materiałem cyfrowym?",
        text: "Materiał cyfrowy może obejmować zrzuty ekranu, rozmowy z komunikatorów, SMS-y, e-maile, dokumenty PDF, dane z telefonu, pliki eksportu, raporty oraz dokumenty platform internetowych."
      },
      {
        heading: "Znaczenie kolejności i kontekstu",
        text: "W tłumaczeniu materiału cyfrowego ważne jest zachowanie kolejności wiadomości, oznaczenie nadawców, dat, godzin, kontekstu rozmowy i elementów technicznych."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz materiał cyfrowy do tłumaczenia?",
    ctaText:
      "Prześlij opis materiału przez formularz. Podaj liczbę plików, format, język i cel tłumaczenia."
  },
  {
    slug: "oszustwa-internetowe",
    type: "specjalizacja",
    title: "Tłumaczenia w sprawach oszustw internetowych | BLIK, krypto, cyber",
    description:
      "Tłumaczenia materiałów w sprawach oszustw internetowych: BLIK, phishing, scam, kryptowaluty, komunikatory, platformy i raporty.",
    h1: "Tłumaczenia w sprawach oszustw internetowych.",
    lead:
      "Tłumaczenia materiału dotyczącego oszustw internetowych, BLIK, phishingu, scamów, kryptowalut, komunikatorów i dokumentacji cyfrowej.",
    badge: "cyber / fraud",
    keywords: [
      "tłumaczenia oszustwa internetowe",
      "tłumaczenie BLIK",
      "tłumaczenie kryptowaluty",
      "tłumaczenie scam",
      "tłumaczenie phishing"
    ],
    sections: [
      {
        heading: "BLIK, phishing, scam i komunikatory",
        text: "W sprawach oszustw internetowych pojawiają się potwierdzenia płatności, rozmowy z komunikatorów, wiadomości e-mail, dane platform, zrzuty ekranu, linki, identyfikatory kont i dokumenty transakcyjne."
      },
      {
        heading: "Kryptowaluty i dokumentacja platform",
        text: "Materiał może obejmować giełdy kryptowalut, portfele, potwierdzenia transakcji, raporty, korespondencję z platformą i dokumenty w języku angielskim."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz materiał dotyczący oszustwa internetowego?",
    ctaText:
      "Opisz materiał w formularzu. Wskaż, czy chodzi o BLIK, krypto, komunikatory, platformę internetową, phishing albo inny typ sprawy."
  },
  {
    slug: "tlumaczenia-dla-sadu",
    type: "usługa",
    title: "Tłumaczenia dla sądu | Ukraiński, rosyjski, angielski",
    description:
      "Tłumaczenia dokumentów dla sądów: akta, załączniki, wyroki, postanowienia, pisma procesowe, dowody i materiał cyfrowy.",
    h1: "Tłumaczenia dla sądu.",
    lead:
      "Tłumaczenia dokumentów i materiałów dla sądów w sprawach karnych, cywilnych, rodzinnych, gospodarczych i administracyjnych.",
    badge: "sądy",
    keywords: [
      "tłumaczenia dla sądu",
      "tłumacz dla sądu",
      "tłumaczenie akt sprawy",
      "tłumaczenie wyroku",
      "tłumaczenie postanowienia"
    ],
    sections: [
      {
        heading: "Zakres tłumaczeń dla sądu",
        text: "Tłumaczeniu mogą podlegać akta sprawy, załączniki, dokumenty dowodowe, pisma procesowe, wyroki, postanowienia, protokoły, opinie i materiał cyfrowy."
      },
      {
        heading: "Sprawy z elementem zagranicznym",
        text: "Język ukraiński, rosyjski i angielski często pojawia się w dokumentach stron, aktach zagranicznych, korespondencji, dokumentach rodzinnych, cywilnych i karnych."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Potrzebujesz tłumaczenia dla sądu?",
    ctaText:
      "Przekaż dokumenty do wstępnej wyceny przez formularz. Wskaż język, typ sprawy i termin."
  },
  {
    slug: "tlumaczenia-dla-policji",
    type: "usługa",
    title: "Tłumaczenia dla Policji | Protokoły, pouczenia, materiał cyfrowy",
    description:
      "Tłumaczenia dla Policji: protokoły, pouczenia, notatki urzędowe, komunikatory, zrzuty ekranu i dokumenty w języku ukraińskim, rosyjskim i angielskim.",
    h1: "Tłumaczenia dla Policji.",
    lead:
      "Tłumaczenia materiałów dla czynności policyjnych: protokołów, pouczeń, notatek, dokumentów, komunikatorów i dowodów cyfrowych.",
    badge: "Policja",
    keywords: [
      "tłumaczenia dla Policji",
      "tłumacz ukraiński Policja",
      "tłumaczenie protokołu Policja",
      "tłumaczenie pouczenia",
      "tłumaczenie notatki urzędowej"
    ],
    sections: [
      {
        heading: "Dokumenty i czynności policyjne",
        text: "Tłumaczeniu mogą podlegać protokoły przesłuchań, pouczenia, notatki urzędowe, zawiadomienia, dokumenty tożsamości, zrzuty ekranu, komunikatory i korespondencja."
      },
      {
        heading: "Materiał cyfrowy w czynnościach",
        text: "W praktyce policyjnej coraz częściej pojawia się materiał z telefonu, komunikatorów, platform internetowych, transakcji i oszustw internetowych."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Jesteś funkcjonariuszem albo pracownikiem organu?",
    ctaText:
      "Prześlij opis materiału przez formularz wyceny. Wskaż język, rodzaj dokumentów i termin czynności."
  },
  {
    slug: "tlumaczenia-dla-prokuratury",
    type: "usługa",
    title: "Tłumaczenia dla prokuratury | Postępowania i materiał dowodowy",
    description:
      "Tłumaczenia dla prokuratur: dokumenty procesowe, protokoły, pomoc prawna, korespondencja, materiał dowodowy i cyfrowy.",
    h1: "Tłumaczenia dla prokuratury.",
    lead:
      "Tłumaczenia dokumentów w postępowaniach przygotowawczych, sprawach karnych, pomocy prawnej i materiale dowodowym.",
    badge: "prokuratura",
    keywords: [
      "tłumaczenia dla prokuratury",
      "tłumacz dla prokuratury",
      "tłumaczenie materiału dowodowego",
      "tłumaczenie dokumentów procesowych",
      "tłumaczenia postępowanie przygotowawcze"
    ],
    sections: [
      {
        heading: "Dokumenty dla prokuratur",
        text: "Tłumaczeniu mogą podlegać protokoły, postanowienia, materiały z pomocy prawnej, zawiadomienia, wyjaśnienia, korespondencja, raporty, dokumenty z Ukrainy, Rosji i krajów anglojęzycznych."
      },
      {
        heading: "Materiał dowodowy i cyfrowy",
        text: "W postępowaniach przygotowawczych często występuje materiał cyfrowy, komunikatory, zrzuty ekranu, transakcje, dane z telefonu i dokumenty techniczne."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Potrzebujesz tłumaczenia dla prokuratury?",
    ctaText:
      "Prześlij opis materiału do wstępnej wyceny. Podaj język, rodzaj dokumentów, zakres i termin."
  },
  {
    slug: "dokumenty-z-ukrainy",
    type: "usługa",
    title: "Tłumaczenie dokumentów z Ukrainy | Akty, dyplomy, zaświadczenia",
    description:
      "Tłumaczenia dokumentów z Ukrainy: akty urodzenia, małżeństwa, zgonu, dyplomy, świadectwa, zaświadczenia, pełnomocnictwa i dokumenty sądowe.",
    h1: "Tłumaczenie dokumentów z Ukrainy.",
    lead:
      "Tłumaczenia aktów stanu cywilnego, dyplomów, świadectw, zaświadczeń, pełnomocnictw, dokumentów sądowych i urzędowych z Ukrainy.",
    badge: "dokumenty z Ukrainy",
    keywords: [
      "tłumaczenie dokumentów z Ukrainy",
      "tłumaczenie aktu urodzenia z Ukrainy",
      "tłumaczenie dyplomu z Ukrainy",
      "tłumaczenie zaświadczenia z Ukrainy"
    ],
    sections: [
      {
        heading: "Najczęstsze dokumenty z Ukrainy",
        text: "Do tłumaczenia trafiają akty urodzenia, akty małżeństwa, akty zgonu, dyplomy, świadectwa, zaświadczenia o niekaralności, pełnomocnictwa, dokumenty pobytowe i dokumenty sądowe."
      },
      {
        heading: "Do urzędu, sądu, uczelni albo pracy",
        text: "Dokumenty z Ukrainy mogą być potrzebne w urzędzie, sądzie, uczelni, szkole, miejscu pracy, banku, kancelarii albo innej instytucji."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz dokument z Ukrainy?",
    ctaText:
      "Prześlij skan, zdjęcie albo PDF przez formularz. Wskaż, gdzie dokument ma zostać złożony."
  },
  {
    slug: "dokumenty-z-rosji",
    type: "usługa",
    title: "Tłumaczenie dokumentów z Rosji | Rosyjski",
    description:
      "Tłumaczenia dokumentów rosyjskojęzycznych: akty, zaświadczenia, dokumenty prywatne, sądowe, urzędowe i procesowe.",
    h1: "Tłumaczenie dokumentów z Rosji i dokumentów rosyjskojęzycznych.",
    lead:
      "Tłumaczenia dokumentów w języku rosyjskim: urzędowych, sądowych, prywatnych, procesowych i dowodowych.",
    badge: "dokumenty rosyjskie",
    keywords: [
      "tłumaczenie dokumentów z Rosji",
      "tłumaczenie dokumentów rosyjskich",
      "tłumacz rosyjski dokumenty",
      "tłumaczenie rosyjskiego aktu"
    ],
    sections: [
      {
        heading: "Dokument rosyjskojęzyczny nie zawsze oznacza Rosję",
        text: "Język rosyjski może występować w dokumentach prywatnych, korespondencji, aktach, komunikatorach i materiałach dowodowych niezależnie od kraju pochodzenia dokumentu."
      },
      {
        heading: "Dokumenty urzędowe i sądowe",
        text: "Tłumaczeniu mogą podlegać akty, zaświadczenia, dokumenty edukacyjne, dokumenty procesowe, pełnomocnictwa, umowy, wyroki i postanowienia."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz dokument rosyjskojęzyczny?",
    ctaText:
      "Prześlij dokument do wstępnej wyceny przez formularz. Wskaż cel tłumaczenia i termin."
  },
  {
    slug: "dokumenty-angielskie",
    type: "usługa",
    title: "Tłumaczenie dokumentów angielskich | Prawo, biznes, urząd",
    description:
      "Tłumaczenia dokumentów angielskich: umowy, dokumenty firmowe, akademickie, urzędowe, sądowe, techniczne i prawnicze.",
    h1: "Tłumaczenie dokumentów angielskich.",
    lead:
      "Tłumaczenia dokumentów w języku angielskim: prawniczych, biznesowych, urzędowych, akademickich, technicznych i sądowych.",
    badge: "dokumenty angielskie",
    keywords: [
      "tłumaczenie dokumentów angielskich",
      "tłumaczenie umowy angielski",
      "tłumaczenia prawnicze angielski",
      "tłumacz angielski dokumenty"
    ],
    sections: [
      {
        heading: "Dokumenty biznesowe i prawnicze",
        text: "Język angielski często pojawia się w umowach, dokumentach spółek, opiniach, regulaminach, dokumentach compliance, korespondencji i dokumentacji technicznej."
      },
      {
        heading: "Dokumenty akademickie i urzędowe",
        text: "Tłumaczeniu mogą podlegać dyplomy, certyfikaty, zaświadczenia, dokumenty rekrutacyjne, dokumenty urzędowe i dokumenty przeznaczone do instytucji."
      },
      ...commonLegalSections
    ],
    ctaTitle: "Masz dokument w języku angielskim?",
    ctaText:
      "Wyślij dokument do wstępnej wyceny i wskaż, czy chodzi o użycie urzędowe, biznesowe, sądowe albo prywatne."
  }
];

const cityNames = [
  ["tlumacz-ukrainski-krakow", "Kraków"],
  ["tlumacz-ukrainski-warszawa", "Warszawa"],
  ["tlumacz-ukrainski-wroclaw", "Wrocław"],
  ["tlumacz-ukrainski-poznan", "Poznań"],
  ["tlumacz-ukrainski-gdansk", "Gdańsk"],
  ["tlumacz-ukrainski-lodz", "Łódź"],
  ["tlumacz-ukrainski-katowice", "Katowice"],
  ["tlumacz-ukrainski-lublin", "Lublin"],
  ["tlumacz-ukrainski-rzeszow", "Rzeszów"],
  ["tlumacz-ukrainski-bialystok", "Białystok"],
  ["tlumacz-ukrainski-szczecin", "Szczecin"],
  ["tlumacz-ukrainski-bydgoszcz", "Bydgoszcz"],
  ["tlumacz-ukrainski-torun", "Toruń"],
  ["tlumacz-ukrainski-opole", "Opole"],
  ["tlumacz-ukrainski-kielce", "Kielce"],
  ["tlumacz-ukrainski-olsztyn", "Olsztyn"],
  ["tlumacz-ukrainski-zielona-gora", "Zielona Góra"],
  ["tlumacz-ukrainski-gorzow-wielkopolski", "Gorzów Wielkopolski"]
];

export const cityLandingPages: LandingPage[] = cityNames.map(([slug, city]) => ({
  slug,
  type: "miasto",
  title: `Tłumacz ukraiński ${city} | Tłumaczenia dokumentów z Ukrainy`,
  description: `Tłumacz ukraiński ${city}. Tłumaczenia dokumentów z Ukrainy, spraw sądowych, urzędowych, karnych, cywilnych i materiału cyfrowego z obsługą online.`,
  h1: `Tłumacz ukraiński ${city}.`,
  lead: `Tłumaczenia języka ukraińskiego dla osób i instytucji z miasta ${city}. Dokumenty z Ukrainy, sprawy sądowe, urzędowe, karne, cywilne i materiał cyfrowy można przekazać do wstępnej wyceny online.`,
  badge: `SEO lokalne · ${city}`,
  keywords: [
    `tłumacz ukraiński ${city}`,
    `tłumacz przysięgły ukraiński ${city}`,
    `tłumaczenia ukraiński ${city}`,
    `tłumaczenie dokumentów z Ukrainy ${city}`
  ],
  sections: [
    {
      heading: `Tłumaczenia ukraińskie dla miasta ${city}`,
      text: `Podstrona lokalna kieruje ruch z Google dla użytkowników szukających tłumacza języka ukraińskiego w mieście ${city}. Treść łączy lokalną frazę z możliwością przekazania dokumentów online.`
    },
    {
      heading: "Dokumenty z Ukrainy i sprawy specjalistyczne",
      text: "Do wyceny można przekazać akty stanu cywilnego, dyplomy, świadectwa, zaświadczenia, pełnomocnictwa, dokumenty sądowe, protokoły, korespondencję i materiał cyfrowy."
    },
    {
      heading: "Obsługa zdalna dokumentów",
      text: "Wstępna wycena może zostać przygotowana na podstawie skanu, zdjęcia lub pliku PDF. W formularzu warto wskazać rodzaj dokumentu, cel tłumaczenia i termin."
    }
  ],
  ctaTitle: `Szukasz tłumacza ukraińskiego w mieście ${city}?`,
  ctaText:
    "Przejdź do formularza i opisz dokument. Nie trzeba podawać danych wrażliwych w pierwszej wiadomości."
}));

export const allLandingPages: LandingPage[] = [
  ...landingPages,
  ...cityLandingPages
];

export function getAllLandingPages() {
  return allLandingPages;
}

export function getLandingPageBySlug(slug: string) {
  return allLandingPages.find((page) => page.slug === slug);
}