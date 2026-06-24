export type TopicCluster = {
  slug: string;
  title: string;
  description: string;
  lead: string;
  audience: string;
  keywords: string[];
  articleSlugs: string[];
  landingPageSlugs: string[];
  questions: {
    question: string;
    answer: string;
  }[];
};

export const topicClusters: TopicCluster[] = [
  {
    slug: "tlumaczenia-poswiadczone",
    title: "Tłumaczenia poświadczone dokumentów",
    description:
      "Centrum wiedzy o tłumaczeniach poświadczonych dokumentów urzędowych, sądowych, akademickich i prywatnych.",
    lead:
      "Ten dział porządkuje najważniejsze informacje o tłumaczeniach poświadczonych: kiedy są wymagane, jak przygotować dokument, jak ocenić kompletność materiału i jak przekazać pliki do wstępnej wyceny.",
    audience:
      "Dla osób prywatnych, firm, kancelarii, sądów, Policji, prokuratur i instytucji publicznych.",
    keywords: [
      "tłumaczenie poświadczone",
      "tłumacz przysięgły",
      "dokument urzędowy",
      "dokument sądowy",
      "język ukraiński",
      "język rosyjski",
      "język angielski"
    ],
    articleSlugs: [
      "tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny",
      "ustawa-o-zawodzie-tlumacza-przysieglego-zasady",
      "tlumaczenie-dokumentow-z-ukrainy-kompletny-przewodnik"
    ],
    landingPageSlugs: [
      "ukrainski",
      "rosyjski",
      "angielski",
      "tlumaczenia-prawnicze"
    ],
    questions: [
      {
        question: "Kiedy potrzebne jest tłumaczenie poświadczone?",
        answer:
          "Najczęściej wtedy, gdy dokument ma zostać użyty przed urzędem, sądem, uczelnią, organem administracji, bankiem albo instytucją wymagającą formalnego poświadczenia zgodności tłumaczenia z dokumentem źródłowym."
      },
      {
        question: "Czy skan dokumentu wystarczy do wstępnej wyceny?",
        answer:
          "Do wstępnej oceny zwykle wystarczy czytelny skan albo zdjęcie. Do wykonania tłumaczenia poświadczonego może być jednak potrzebne ustalenie, czy tłumaczenie ma być sporządzone z oryginału, odpisu, kopii albo pliku elektronicznego."
      }
    ]
  },
  {
    slug: "dokumenty-z-ukrainy",
    title: "Dokumenty z Ukrainy do tłumaczenia",
    description:
      "Praktyczny przewodnik po tłumaczeniu dokumentów z Ukrainy: akty stanu cywilnego, dyplomy, zaświadczenia, pełnomocnictwa i pisma urzędowe.",
    lead:
      "Dokumenty z Ukrainy często zawierają pieczęcie, podpisy, adnotacje, transliterację nazwisk, dane urzędowe i elementy formalne, które trzeba poprawnie odczytać przed tłumaczeniem.",
    audience:
      "Dla osób przygotowujących dokumenty ukraińskie do użycia w Polsce, przed urzędem, uczelnią, sądem, bankiem albo pracodawcą.",
    keywords: [
      "dokumenty z Ukrainy",
      "tłumaczenie ukraińskiego",
      "akty stanu cywilnego",
      "dyplom z Ukrainy",
      "zaświadczenie z Ukrainy",
      "pełnomocnictwo z Ukrainy"
    ],
    articleSlugs: [
      "tlumaczenie-dokumentow-z-ukrainy-kompletny-przewodnik",
      "tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny"
    ],
    landingPageSlugs: [
      "ukrainski"
    ],
    questions: [
      {
        question: "Jak przygotować dokument z Ukrainy do tłumaczenia?",
        answer:
          "Najlepiej przygotować pełny, czytelny skan wszystkich stron dokumentu, łącznie z pieczęciami, podpisami, adnotacjami, odwrotem dokumentu i ewentualnymi załącznikami."
      },
      {
        question: "Czy trzeba tłumaczyć pieczęcie i adnotacje?",
        answer:
          "Tak, elementy formalne dokumentu, takie jak pieczęcie, podpisy, adnotacje, numery i oznaczenia urzędowe, są zwykle istotne dla pełnego tłumaczenia dokumentu."
      }
    ]
  },
  {
    slug: "sady-policja-prokuratura",
    title: "Tłumaczenia dla sądów, Policji i prokuratury",
    description:
      "Hub ekspercki dla tłumaczeń materiałów procesowych, policyjnych, prokuratorskich, dowodowych i kancelaryjnych.",
    lead:
      "Materiały dla organów wymagają precyzji terminologicznej, zachowania struktury dokumentu oraz jasnego oznaczenia osób, dat, numerów spraw, załączników i źródeł materiału.",
    audience:
      "Dla sądów, Policji, prokuratur, kancelarii prawnych, pełnomocników, obrońców i stron postępowań.",
    keywords: [
      "tłumaczenie dla sądu",
      "tłumaczenie dla Policji",
      "tłumaczenie dla prokuratury",
      "materiał dowodowy",
      "akta sprawy",
      "pismo procesowe"
    ],
    articleSlugs: [
      "tlumaczenia-dla-sadu-policji-prokuratury-jak-przygotowac-material",
      "ustawa-o-zawodzie-tlumacza-przysieglego-zasady"
    ],
    landingPageSlugs: [
      "sprawy-karne",
      "sprawy-cywilne",
      "tlumaczenia-prawnicze",
      "ukrainski",
      "rosyjski",
      "angielski"
    ],
    questions: [
      {
        question: "Jak przygotować materiał procesowy do tłumaczenia?",
        answer:
          "Warto przekazać kompletny plik albo pakiet plików z informacją o języku, celu tłumaczenia, terminie, sygnaturze sprawy oraz tym, czy tłumaczenie ma obejmować cały materiał czy wskazane fragmenty."
      },
      {
        question: "Czy można tłumaczyć materiał częściowo?",
        answer:
          "Tak, ale zakres powinien być jednoznacznie wskazany, aby uniknąć pominięcia elementów istotnych dla sprawy, takich jak nagłówki, załączniki, podpisy, pieczęcie albo oznaczenia stron."
      }
    ]
  },
  {
    slug: "wynagrodzenie-i-strona-1125-znakow",
    title: "Wynagrodzenie, strona obliczeniowa i 1125 znaków",
    description:
      "Wyjaśnienie rozliczania tłumaczeń poświadczonych i specjalistycznych według liczby znaków, objętości materiału i trybu wykonania.",
    lead:
      "Liczba fizycznych kartek nie zawsze odpowiada liczbie stron rozliczeniowych. W praktyce znaczenie ma liczba znaków, rodzaj materiału, czytelność dokumentu i zakres pracy.",
    audience:
      "Dla klientów, instytucji i pełnomocników, którzy chcą rozumieć, z czego wynika koszt tłumaczenia.",
    keywords: [
      "1125 znaków",
      "strona obliczeniowa",
      "wynagrodzenie tłumacza przysięgłego",
      "wycena tłumaczenia",
      "tryb pilny",
      "liczba znaków"
    ],
    articleSlugs: [
      "wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow"
    ],
    landingPageSlugs: [
      "ukrainski",
      "rosyjski",
      "angielski",
      "tlumaczenia-prawnicze"
    ],
    questions: [
      {
        question: "Dlaczego jedna kartka może mieć więcej niż jedną stronę rozliczeniową?",
        answer:
          "Ponieważ strona rozliczeniowa zależy od liczby znaków, a nie od liczby kartek. Gęsty tekst, tabele, adnotacje i pieczęcie mogą zwiększać objętość pracy."
      },
      {
        question: "Czy plik PDF można ocenić przed wyceną?",
        answer:
          "Tak. Czytelny plik PDF pozwala wstępnie sprawdzić objętość, układ, język, jakość skanu i elementy wymagające tłumaczenia."
      }
    ]
  },
  {
    slug: "cyber-forensic-i-material-cyfrowy",
    title: "Cyber, forensic i materiał cyfrowy",
    description:
      "Hub wiedzy o tłumaczeniu materiałów cyfrowych: komunikatory, zrzuty ekranu, BLIK, kryptowaluty, phishing, raporty i dane z urządzeń.",
    lead:
      "Materiał cyfrowy wymaga uporządkowania kontekstu: źródła pliku, chronologii, nazw użytkowników, dat, godzin, adresów, identyfikatorów transakcji i formatu danych.",
    audience:
      "Dla organów, kancelarii, firm i osób przekazujących materiał cyfrowy do analizy językowej albo tłumaczenia.",
    keywords: [
      "materiał cyfrowy",
      "dowody cyfrowe",
      "forensic",
      "BLIK",
      "kryptowaluty",
      "phishing",
      "komunikatory",
      "zrzuty ekranu"
    ],
    articleSlugs: [
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto-phishing",
      "pdf-na-tekst-jak-przygotowac-material-do-tlumaczenia"
    ],
    landingPageSlugs: [
      "material-cyfrowy",
      "tlumaczenia-prawnicze",
      "angielski",
      "ukrainski",
      "rosyjski"
    ],
    questions: [
      {
        question: "Jak przygotować zrzuty ekranu do tłumaczenia?",
        answer:
          "Najlepiej zachować kolejność rozmowy, daty, godziny, nazwy użytkowników i kontekst. Jeżeli materiał jest obszerny, warto wskazać zakres, który ma zostać przetłumaczony."
      },
      {
        question: "Czy raport PDF można przetworzyć przed tłumaczeniem?",
        answer:
          "Tak. Jeżeli PDF zawiera tekst, można go wyodrębnić. Jeżeli jest skanem lub obrazem, konieczna może być dodatkowa ocena jakości i czytelności materiału."
      }
    ]
  },
  {
    slug: "prawo-i-obowiazki-tlumacza",
    title: "Prawo, obowiązki i odpowiedzialność tłumacza",
    description:
      "Centrum wiedzy o zasadach wykonywania zawodu tłumacza przysięgłego, poświadczeniu, repertorium i odpowiedzialności zawodowej.",
    lead:
      "Zawód tłumacza przysięgłego działa w określonych ramach prawnych. Dla klienta znaczenie mają forma tłumaczenia, poświadczenie, oznaczenie dokumentu źródłowego i zakres odpowiedzialności.",
    audience:
      "Dla klientów instytucjonalnych, prawników, organów i osób prywatnych, które chcą rozumieć formalny charakter tłumaczenia poświadczonego.",
    keywords: [
      "ustawa o zawodzie tłumacza przysięgłego",
      "repertorium tłumacza",
      "poświadczenie tłumaczenia",
      "odpowiedzialność zawodowa",
      "tłumacz przysięgły"
    ],
    articleSlugs: [
      "ustawa-o-zawodzie-tlumacza-przysieglego-zasady",
      "repertorium-tlumacza-przysieglego-co-oznacza-dla-klienta"
    ],
    landingPageSlugs: [
      "tlumaczenia-prawnicze",
      "sprawy-karne",
      "sprawy-cywilne"
    ],
    questions: [
      {
        question: "Czym różni się tłumaczenie poświadczone od zwykłego?",
        answer:
          "Tłumaczenie poświadczone zawiera formalne poświadczenie tłumacza przysięgłego i może być wymagane przez urzędy, sądy, uczelnie oraz inne instytucje."
      },
      {
        question: "Dlaczego ważne jest oznaczenie dokumentu źródłowego?",
        answer:
          "Oznaczenie dokumentu źródłowego pomaga ustalić, czy tłumaczenie wykonano z oryginału, odpisu, kopii, skanu albo dokumentu elektronicznego."
      }
    ]
  }
];

export function getAllTopicClusters() {
  return topicClusters;
}

export function getTopicClusterBySlug(slug: string) {
  return topicClusters.find((cluster) => cluster.slug === slug);
}
