export type KrakowSeoPage = {
  title: string;
  slug: string;
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

const pageSeeds = [
  {
    slug: "tlumacz-przysiegly-ukrainski-krakow-centrum",
    title: "Tłumacz przysięgły ukraiński Kraków centrum",
    service: "tłumaczenia poświadczone ukraiński",
    focus: "dokumenty z Ukrainy składane w urzędach, sądach, kancelariach i instytucjach w centrum Krakowa",
    keywords: [
      "tłumacz przysięgły ukraiński Kraków centrum",
      "tłumaczenia ukraińskie Kraków centrum",
      "dokumenty z Ukrainy Kraków"
    ],
    relatedLinks: [
      { label: "Tłumaczenia ukraińskie", href: "/ukrainski" },
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumaczenie-dokumentow-z-ukrainy-krakow",
    title: "Tłumaczenie dokumentów z Ukrainy Kraków",
    service: "dokumenty z Ukrainy",
    focus: "akty stanu cywilnego, zaświadczenia, pełnomocnictwa, wyroki, decyzje i dokumenty urzędowe z Ukrainy",
    keywords: [
      "tłumaczenie dokumentów z Ukrainy Kraków",
      "dokumenty ukraińskie Kraków",
      "tłumacz ukraiński Kraków"
    ],
    relatedLinks: [
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "Dobierz tłumaczenie", href: "/dobierz-tlumaczenie" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  {
    slug: "tlumaczenia-dla-sadu-krakow",
    title: "Tłumaczenia dla sądu Kraków",
    service: "tłumaczenia sądowe",
    focus: "pisma procesowe, protokoły, załączniki, wyroki, postanowienia i materiały składane do sądu",
    keywords: [
      "tłumaczenia dla sądu Kraków",
      "tłumacz przysięgły do sądu Kraków",
      "tłumaczenia akt sprawy Kraków"
    ],
    relatedLinks: [
      { label: "Sądy, Policja, Prokuratura", href: "/tematy/sady-policja-prokuratura" },
      { label: "Sprawy karne", href: "/sprawy-karne" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumaczenia-dla-policji-prokuratury-krakow",
    title: "Tłumaczenia dla Policji i Prokuratury Kraków",
    service: "materiały dla organów ścigania",
    focus: "zawiadomienia, protokoły, akta, korespondencję, załączniki i dokumenty w sprawach karnych",
    keywords: [
      "tłumaczenia dla Policji Kraków",
      "tłumaczenia dla Prokuratury Kraków",
      "tłumacz przysięgły sprawy karne Kraków"
    ],
    relatedLinks: [
      { label: "Sądy, Policja, Prokuratura", href: "/tematy/sady-policja-prokuratura" },
      { label: "Dowody cyfrowe", href: "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumaczenie-dowodow-cyfrowych-krakow",
    title: "Tłumaczenie dowodów cyfrowych Kraków",
    service: "dowody cyfrowe",
    focus: "zrzuty ekranu, komunikatory, e-maile, SMS, dane transakcyjne, BLIK, kryptowaluty i materiały techniczne",
    keywords: [
      "tłumaczenie dowodów cyfrowych Kraków",
      "tłumaczenie screenów Kraków",
      "tłumaczenie materiałów cyfrowych Kraków"
    ],
    relatedLinks: [
      { label: "Dowody cyfrowe", href: "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych" },
      { label: "Komunikatory", href: "/poradniki/tlumaczenie-korespondencji-telegram-whatsapp-signal" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumaczenie-whatsapp-telegram-signal-krakow",
    title: "Tłumaczenie WhatsApp, Telegram i Signal Kraków",
    service: "komunikatory i korespondencja cyfrowa",
    focus: "rozmowy z komunikatorów, eksporty czatów, zrzuty ekranu, daty, godziny, nazwy użytkowników i załączniki",
    keywords: [
      "tłumaczenie WhatsApp Kraków",
      "tłumaczenie Telegram Kraków",
      "tłumaczenie Signal Kraków"
    ],
    relatedLinks: [
      { label: "Poradnik o komunikatorach", href: "/poradniki/tlumaczenie-korespondencji-telegram-whatsapp-signal" },
      { label: "Dowody cyfrowe", href: "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumaczenie-blik-kryptowaluty-krakow",
    title: "Tłumaczenie materiałów BLIK i kryptowalut Kraków",
    service: "oszustwa internetowe, BLIK i blockchain",
    focus: "potwierdzenia transakcji, giełdy kryptowalut, portfele, hashe, korespondencję z platformami i zgłoszenia",
    keywords: [
      "tłumaczenie BLIK Kraków",
      "tłumaczenie kryptowaluty Kraków",
      "tłumaczenie blockchain Kraków"
    ],
    relatedLinks: [
      { label: "Oszustwa internetowe i BLIK", href: "/poradniki/tlumaczenie-materialow-dotyczacych-oszustw-internetowych-i-blik" },
      { label: "Kryptowaluty i blockchain", href: "/poradniki/tlumaczenie-dokumentacji-kryptowalutowej-i-blockchain" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumacz-przysiegly-rosyjski-krakow",
    title: "Rosyjski w Krakowie — tłumaczenia zwykłe",
    service: "tłumaczenia rosyjskie",
    focus: "dokumenty rosyjskie, pisma urzędowe, materiały sądowe, dokumenty firmowe i korespondencję",
    keywords: [
      "tłumaczenia zwykłe rosyjski Kraków",
      "tłumaczenia rosyjskie Kraków",
      "tłumaczenie dokumentów rosyjskich Kraków"
    ],
    relatedLinks: [
      { label: "Tłumaczenia rosyjskie", href: "/rosyjski" },
      { label: "Tłumaczenia poświadczone", href: "/tematy/tlumaczenia-poswiadczone" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumacz-przysiegly-angielski-krakow",
    title: "Dokumenty angielskie — wymagania w Krakowie",
    service: "wymagania dla dokumentów angielskich",
    focus: "dokumenty angielskie, umowy, zaświadczenia, dokumenty firmowe, materiały urzędowe i sądowe",
    keywords: [
      "dokumenty angielskie Kraków",
      "wymagania dla dokumentów angielskich Kraków",
      "tłumaczenie dokumentów angielskich Kraków"
    ],
    relatedLinks: [
      { label: "Dokumenty angielskie — poradnik", href: "/angielski" },
      { label: "Tłumaczenia poświadczone", href: "/tematy/tlumaczenia-poswiadczone" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumaczenia-prawnicze-krakow",
    title: "Tłumaczenia prawnicze Kraków",
    service: "tłumaczenia prawnicze",
    focus: "umowy, pisma procesowe, dokumenty spółek, pełnomocnictwa, wyroki, decyzje i korespondencję prawną",
    keywords: [
      "tłumaczenia prawnicze Kraków",
      "tłumacz prawniczy Kraków",
      "tłumaczenie umów Kraków"
    ],
    relatedLinks: [
      { label: "Sądy, Policja, Prokuratura", href: "/tematy/sady-policja-prokuratura" },
      { label: "Sądy, Policja, Prokuratura", href: "/tematy/sady-policja-prokuratura" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumaczenia-akt-sprawy-krakow",
    title: "Tłumaczenie akt sprawy Kraków",
    service: "akta sprawy i materiały procesowe",
    focus: "większe pakiety akt, załączniki, protokoły, dokumenty procesowe, pisma i materiały dowodowe",
    keywords: [
      "tłumaczenie akt sprawy Kraków",
      "tłumaczenia akt sądowych Kraków",
      "tłumacz akt sprawy Kraków"
    ],
    relatedLinks: [
      { label: "Akta sprawy karnej", href: "/poradniki/tlumaczenie-akt-sprawy-karnej-z-jezyka-ukrainskiego" },
      { label: "Sądy, Policja, Prokuratura", href: "/tematy/sady-policja-prokuratura" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    slug: "tlumaczenia-dla-kancelarii-krakow",
    title: "Tłumaczenia dla kancelarii prawnych Kraków",
    service: "obsługa kancelarii i pełnomocników",
    focus: "dokumenty klientów, akta, pisma procesowe, korespondencję, pełnomocnictwa i materiały dowodowe",
    keywords: [
      "tłumaczenia dla kancelarii Kraków",
      "tłumacz dla kancelarii prawnej Kraków",
      "tłumaczenia prawnicze kancelaria Kraków"
    ],
    relatedLinks: [
      { label: "Sądy, Policja, Prokuratura", href: "/tematy/sady-policja-prokuratura" },
      { label: "Dobierz tłumaczenie", href: "/dobierz-tlumaczenie" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  }
];

const originalKrakowSeoPages: KrakowSeoPage[] = pageSeeds.map((seed) => ({
  title: seed.title,
  slug: seed.slug,
  service: seed.service,
  description: `${seed.title}: praktyczne opracowanie o usłudze ${seed.service}. Zakres obejmuje ${seed.focus}.`,
  keywords: seed.keywords,
  date,
  intro: `${seed.title} to lokalna ścieżka dla osób, firm, kancelarii i instytucji z Krakowa, które potrzebują tłumaczenia dokumentów, akt, korespondencji albo materiałów specjalistycznych. Strona opisuje zakres usługi, przygotowanie plików i sytuacje, w których warto rozważyć tłumaczenie poświadczone.`,
  sections: [
    {
      heading: `${seed.title}: zakres lokalnej usługi`,
      paragraphs: [
        `Zakres obejmuje ${seed.focus}. W praktyce ważne są czytelność dokumentu, kompletność materiału, zachowanie dat, numerów, pieczęci, podpisów, adnotacji i kolejności stron.`,
        "W przypadku materiałów dla sądu, Policji, Prokuratury, kancelarii lub urzędu znaczenie ma również kontekst sprawy oraz to, czy dokument ma zostać użyty jako materiał oficjalny."
      ]
    },
    {
      heading: "Jak przygotować dokumenty do wyceny?",
      paragraphs: [
        "Do wstępnej wyceny najlepiej przesłać pełny PDF, skan albo uporządkowany komplet zdjęć. Warto od razu podać język dokumentu, termin, objętość i cel użycia tłumaczenia.",
        "Jeżeli materiał obejmuje komunikatory, screeny, transakcje lub dane techniczne, nie należy usuwać dat, godzin, nazw użytkowników, numerów transakcji ani oznaczeń systemowych."
      ]
    },
    {
      heading: "Sprawy lokalne i zlecenia z Krakowa",
      paragraphs: [
        "Lokalna fraza nie oznacza, że cała obsługa musi odbywać się stacjonarnie. W wielu przypadkach pierwszy etap polega na zdalnej ocenie materiału na podstawie przesłanych plików.",
        "Dla użytkownika najważniejsze jest ustalenie, czy potrzebne jest tłumaczenie poświadczone, specjalistyczne, prawnicze, sądowe albo tłumaczenie materiałów cyfrowych."
      ]
    }
  ],
  faqs: [
    {
      question: `Czy ${seed.title.toLowerCase()} może być wycenione zdalnie?`,
      answer:
        "Tak. Do wstępnej oceny zwykle wystarczy czytelny skan, PDF albo komplet zdjęć dokumentów. Dokładność wyceny zależy od jakości i kompletności materiału."
    },
    {
      question: "Czy dokument dla sądu lub urzędu wymaga tłumaczenia poświadczonego?",
      answer:
        "Często tak, ale ostateczny wymóg zależy od instytucji oraz celu użycia dokumentu. W razie wątpliwości warto potwierdzić wymagania w miejscu, do którego dokument będzie składany."
    },
    {
      question: "Co przesłać przy pilnym zapytaniu?",
      answer:
        "Najlepiej przesłać dokumenty, wskazać język, termin, liczbę stron lub plików, cel tłumaczenia oraz instytucję, do której materiał ma trafić."
    }
  ],
  relatedLinks: seed.relatedLinks
}));

export const krakowSeoPages: KrakowSeoPage[] = originalKrakowSeoPages.map(page => {
  if (page.slug.includes("rosyjski")) return {...page, intro:"Tłumaczenia rosyjskie w kancelarii są zwykłe, po uzgodnieniu. Uprawnienia przysięgłe Vadym Rekel (TP/27/17) dotyczą wyłącznie języka ukraińskiego. Przekład poświadczony rosyjskiego wymaga tłumacza z uprawnieniami w tym języku.", sections:[{heading:"Rodzaj przekładu a wymagania odbiorcy",paragraphs:["Przed zleceniem ustal, czy odbiorca dopuszcza tłumaczenie zwykłe. Kraj wydania dokumentu nie przesądza o jego języku. Zachowaj cały dokument, pieczęcie, podpisy i załączniki."]}],faqs:[]};
  if (page.slug.includes("angielski")) return {...page, intro:"Poradnik informacyjny o dokumentach angielskich; nie oferta przekładu tego języka. Kancelaria poświadcza tłumaczenia języka ukraińskiego. Przy wymogu przekładu poświadczonego angielskiego należy wybrać osobę z odpowiednim wpisem na listę.",sections:[{heading:"Przygotuj dokumenty do właściwego zlecenia",paragraphs:["Podziel zestaw według języka, ustal wymagania odbiorcy i zachowaj załączniki. Jeżeli materiały zawierają część ukraińską, jej zakres można uzgodnić z kancelarią Vadym Rekel."]}],faqs:[]};
  return page;
});

export function getAllKrakowSeoPages() {
  return krakowSeoPages;
}

export function getKrakowSeoPageBySlug(slug: string) {
  return krakowSeoPages.find((page) => page.slug === slug);
}
