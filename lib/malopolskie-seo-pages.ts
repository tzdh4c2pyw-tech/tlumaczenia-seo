export type MalopolskieSeoPage = {
  title: string;
  slug: string;
  city: string;
  county: string;
  service: string;
  description: string;
  keywords: string[];
  date: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
};

const date = "2026-06-24";

const cityPages = [
  {
    city: "Kraków",
    county: "Kraków",
    slugCity: "krakow",
    service: "tłumaczenia poświadczone dokumentów z Ukrainy",
    mainKeyword: "tłumacz przysięgły ukraiński Kraków"
  },
  {
    city: "Wieliczka",
    county: "powiat wielicki",
    slugCity: "wieliczka",
    service: "tłumaczenia ukraińskie do urzędu i sądu",
    mainKeyword: "tłumacz przysięgły ukraiński Wieliczka"
  },
  {
    city: "Skawina",
    county: "powiat krakowski",
    slugCity: "skawina",
    service: "tłumaczenia dokumentów ukraińskich",
    mainKeyword: "tłumacz przysięgły ukraiński Skawina"
  },
  {
    city: "Niepołomice",
    county: "powiat wielicki",
    slugCity: "niepolomice",
    service: "tłumaczenia dokumentów z Ukrainy dla firm i urzędów",
    mainKeyword: "tłumacz przysięgły ukraiński Niepołomice"
  },
  {
    city: "Bochnia",
    county: "powiat bocheński",
    slugCity: "bochnia",
    service: "tłumaczenia aktów, zaświadczeń i pełnomocnictw",
    mainKeyword: "tłumacz przysięgły ukraiński Bochnia"
  },
  {
    city: "Myślenice",
    county: "powiat myślenicki",
    slugCity: "myslenice",
    service: "tłumaczenia poświadczone dla spraw urzędowych",
    mainKeyword: "tłumacz przysięgły ukraiński Myślenice"
  },
  {
    city: "Olkusz",
    county: "powiat olkuski",
    slugCity: "olkusz",
    service: "tłumaczenia ukraińskie i rosyjskie dokumentów",
    mainKeyword: "tłumacz przysięgły ukraiński Olkusz"
  },
  {
    city: "Chrzanów",
    county: "powiat chrzanowski",
    slugCity: "chrzanow",
    service: "tłumaczenia dokumentów z Ukrainy",
    mainKeyword: "tłumaczenia ukraińskie Chrzanów"
  },
  {
    city: "Oświęcim",
    county: "powiat oświęcimski",
    slugCity: "oswiecim",
    service: "tłumaczenia ukraińskie do instytucji",
    mainKeyword: "tłumaczenia ukraińskie Oświęcim"
  },
  {
    city: "Tarnów",
    county: "Tarnów i powiat tarnowski",
    slugCity: "tarnow",
    service: "tłumaczenia poświadczone dokumentów ukraińskich",
    mainKeyword: "tłumacz przysięgły ukraiński Tarnów"
  },
  {
    city: "Nowy Sącz",
    county: "Nowy Sącz i powiat nowosądecki",
    slugCity: "nowy-sacz",
    service: "tłumaczenia dokumentów ukraińskich i sądowych",
    mainKeyword: "tłumacz przysięgły ukraiński Nowy Sącz"
  },
  {
    city: "Proszowice",
    county: "powiat proszowicki",
    slugCity: "proszowice",
    service: "tłumaczenia dokumentów do urzędu i sądu",
    mainKeyword: "tłumacz przysięgły ukraiński Proszowice"
  },
  {
    city: "Miechów",
    county: "powiat miechowski",
    slugCity: "miechow",
    service: "tłumaczenia poświadczone dokumentów z Ukrainy",
    mainKeyword: "tłumacz przysięgły ukraiński Miechów"
  },
  {
    city: "Wadowice",
    county: "powiat wadowicki",
    slugCity: "wadowice",
    service: "tłumaczenia ukraińskie dokumentów urzędowych",
    mainKeyword: "tłumacz przysięgły ukraiński Wadowice"
  },
  {
    city: "Limanowa",
    county: "powiat limanowski",
    slugCity: "limanowa",
    service: "tłumaczenia dokumentów z Ukrainy i materiałów sądowych",
    mainKeyword: "tłumacz przysięgły ukraiński Limanowa"
  },
  {
    city: "Gorlice",
    county: "powiat gorlicki",
    slugCity: "gorlice",
    service: "tłumaczenia poświadczone dokumentów ukraińskich",
    mainKeyword: "tłumacz przysięgły ukraiński Gorlice"
  },
  {
    city: "Zakopane",
    county: "powiat tatrzański",
    slugCity: "zakopane",
    service: "tłumaczenia ukraińskie i dokumenty urzędowe",
    mainKeyword: "tłumacz przysięgły ukraiński Zakopane"
  },
  {
    city: "Andrychów",
    county: "powiat wadowicki",
    slugCity: "andrychow",
    service: "tłumaczenia dokumentów ukraińskich i pracowniczych",
    mainKeyword: "tłumacz przysięgły ukraiński Andrychów"
  }
];

export const malopolskieSeoPages: MalopolskieSeoPage[] = cityPages.map((item) => ({
  title: `${item.mainKeyword} — ${item.service}`,
  slug: `tlumacz-przysiegly-ukrainski-${item.slugCity}`,
  city: item.city,
  county: item.county,
  service: item.service,
  description: `${item.mainKeyword}: lokalna informacja o tłumaczeniach poświadczonych, dokumentach z Ukrainy, materiałach sądowych, urzędowych i firmowych w regionie ${item.county}.`,
  keywords: [
    item.mainKeyword,
    `tłumaczenia ukraińskie ${item.city}`,
    `tłumaczenia dokumentów z Ukrainy ${item.city}`,
    `tłumacz przysięgły ${item.city}`,
    `tłumaczenia poświadczone ${item.city}`,
    "tłumaczenia ukraińskie Małopolskie"
  ],
  date,
  intro: `${item.city} i ${item.county} to lokalny obszar, w którym dokumenty ukraińskie mogą być potrzebne w sprawach urzędowych, sądowych, pracowniczych, rodzinnych, edukacyjnych lub firmowych. Strona opisuje, kiedy warto przygotować tłumaczenie poświadczone i jak przekazać materiał do wstępnej wyceny.`,
  sections: [
    {
      heading: `${item.mainKeyword}: kiedy taka usługa jest potrzebna?`,
      paragraphs: [
        "Tłumaczenie poświadczone lub specjalistyczne może być potrzebne, gdy dokument z Ukrainy albo materiał w języku ukraińskim ma zostać użyty oficjalnie w urzędzie, sądzie, banku, kancelarii, firmie, uczelni lub przed organem prowadzącym postępowanie.",
        `W praktyce dla lokalizacji ${item.city} najczęściej chodzi o akty stanu cywilnego, zaświadczenia, pełnomocnictwa, decyzje, wyroki, dokumenty pracownicze, dokumenty szkolne oraz materiały z postępowań cywilnych lub karnych.`
      ]
    },
    {
      heading: `Jak przygotować dokumenty z ${item.city} lub okolic?`,
      paragraphs: [
        "Do wstępnej wyceny najlepiej przesłać czytelny skan, PDF albo komplet zdjęć dokumentu. Ważne, aby widoczne były wszystkie strony, pieczęcie, podpisy, daty, numery i adnotacje.",
        "Jeżeli dokument ma trafić do sądu, Policji, Prokuratury, urzędu albo kancelarii, warto od razu wskazać cel tłumaczenia i termin. Ułatwia to ocenę zakresu oraz dobranie właściwej terminologii."
      ]
    },
    {
      heading: "Tłumaczenia dla Małopolski: lokalne SEO i zlecenia zdalne",
      paragraphs: [
        "Zapytania lokalne nie muszą oznaczać osobistego spotkania. W wielu przypadkach wstępna ocena materiału może zostać wykonana na podstawie przesłanych plików, a dalsze kroki zależą od rodzaju dokumentu i celu użycia tłumaczenia.",
        "Dla użytkownika istotne jest szybkie ustalenie, czy potrzebna jest forma poświadczona, czy wystarczy tłumaczenie specjalistyczne. Pomocne może być także skorzystanie ze strony „Dobierz tłumaczenie”."
      ]
    }
  ],
  faqs: [
    {
      question: `Czy w ${item.city} można zlecić tłumaczenie dokumentów z Ukrainy zdalnie?`,
      answer:
        "Do wstępnej wyceny zwykle wystarczy czytelny skan, PDF albo zdjęcie dokumentu. Szczegóły wykonania zależą od rodzaju dokumentu i celu tłumaczenia."
    },
    {
      question: "Czy dokument do urzędu lub sądu wymaga tłumaczenia poświadczonego?",
      answer:
        "Często tak, ale ostateczny wymóg zależy od instytucji oraz celu użycia dokumentu. W razie wątpliwości warto potwierdzić wymagania w miejscu, do którego dokument będzie składany."
    },
    {
      question: "Co wpływa na cenę i termin tłumaczenia?",
      answer:
        "Znaczenie ma objętość dokumentu, język, jakość skanu, liczba stron, termin, rodzaj dokumentu oraz to, czy materiał wymaga szczególnej terminologii prawnej, sądowej lub technicznej."
    }
  ],
  relatedLinks: [
    { label: "Tłumaczenia ukraińskie", href: "/ukrainski" },
    { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
    { label: "Tłumaczenia poświadczone", href: "/tematy/tlumaczenia-poswiadczone" },
    { label: "Dobierz tłumaczenie", href: "/dobierz-tlumaczenie" },
    { label: "Kontakt", href: "/kontakt" }
  ]
}));

export function getAllMalopolskieSeoPages() {
  return malopolskieSeoPages;
}

export function getMalopolskieSeoPageBySlug(slug: string) {
  return malopolskieSeoPages.find((page) => page.slug === slug);
}
