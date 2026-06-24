export type LocalSeoArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type LocalSeoArticleFaq = {
  question: string;
  answer: string;
};

export type LocalSeoArticle = {
  title: string;
  slug: string;
  city: string;
  region: string;
  category: string;
  description: string;
  intro: string;
  keywords: string[];
  date: string;
  sections: LocalSeoArticleSection[];
  faqs: LocalSeoArticleFaq[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
};

const baseDate = "2026-06-24";

const localArticles: LocalSeoArticle[] = [
  {
    title: "Tłumacz przysięgły języka ukraińskiego Kraków — dokumenty, sąd i urzędy",
    slug: "tlumacz-przysiegly-ukrainski-krakow",
    city: "Kraków",
    region: "Małopolskie",
    category: "Tłumaczenia ukraińskie",
    description:
      "Lokalny poradnik SEO o tłumaczeniach poświadczonych z języka ukraińskiego w Krakowie: dokumenty urzędowe, sądowe, rodzinne i firmowe.",
    intro:
      "Kraków jest jednym z głównych ośrodków, w których dokumenty ukraińskie trafiają do urzędów, sądów, uczelni, kancelarii oraz instytucji publicznych. W praktyce najczęściej chodzi o akty stanu cywilnego, pełnomocnictwa, zaświadczenia, wyroki, decyzje, dokumenty pracownicze i materiały procesowe.",
    keywords: [
      "tłumacz przysięgły ukraiński Kraków",
      "tłumaczenia ukraińskie Kraków",
      "tłumaczenie dokumentów z Ukrainy Kraków",
      "tłumaczenia poświadczone ukraiński"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Kiedy w Krakowie potrzebne jest tłumaczenie poświadczone z ukraińskiego?",
        paragraphs: [
          "Tłumaczenie poświadczone jest zwykle wymagane wtedy, gdy dokument ma zostać użyty oficjalnie: w sądzie, urzędzie, banku, uczelni, kancelarii, organie ścigania albo w postępowaniu administracyjnym.",
          "W Krakowie często dotyczy to dokumentów składanych w sprawach rodzinnych, cywilnych, karnych, pobytowych, pracowniczych oraz gospodarczych."
        ]
      },
      {
        heading: "Jak przygotować dokumenty z Ukrainy?",
        paragraphs: [
          "Najlepiej przekazać pełny, czytelny skan lub PDF. Jeżeli dokument ma pieczęcie, adnotacje, dopiski albo podpisy, powinny być widoczne w całości.",
          "Przy materiałach procesowych warto zachować kolejność stron, sygnatury, załączniki oraz informację, do jakiej instytucji dokument zostanie złożony."
        ]
      },
      {
        heading: "Tłumaczenia ukraińskie dla sądów i kancelarii w Krakowie",
        paragraphs: [
          "Materiały dla sądu lub kancelarii wymagają precyzyjnej terminologii, spójnego oznaczenia stron, dat, nazw organów i funkcji procesowych.",
          "W przypadku akt, protokołów i pism procesowych ważne jest, aby nie skracać treści i nie usuwać elementów kontekstowych."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy dokument z Ukrainy do sądu w Krakowie musi być przetłumaczony poświadczone?",
        answer:
          "W wielu przypadkach tak, szczególnie gdy dokument ma być użyty jako materiał urzędowy lub procesowy. Ostateczny wymóg zależy od instytucji i celu użycia dokumentu."
      },
      {
        question: "Czy można przesłać zdjęcia dokumentów?",
        answer:
          "Można, jeżeli są czytelne. Do dokładnej wyceny lepszy jest jednak skan lub PDF obejmujący cały dokument."
      }
    ],
    relatedLinks: [
      { label: "Tłumaczenia ukraińskie", href: "/ukrainski" },
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumaczenie dokumentów z Ukrainy w Krakowie i Małopolsce",
    slug: "tlumaczenie-dokumentow-z-ukrainy-krakow-malopolskie",
    city: "Kraków",
    region: "Małopolskie",
    category: "Dokumenty z Ukrainy",
    description:
      "Artykuł lokalny o tłumaczeniu dokumentów z Ukrainy dla urzędów, sądów, uczelni i kancelarii w Krakowie oraz Małopolsce.",
    intro:
      "Dokumenty z Ukrainy są często potrzebne w Małopolsce w sprawach rodzinnych, pracowniczych, sądowych, edukacyjnych i administracyjnych. Kluczowe znaczenie ma czytelność dokumentu, kompletność materiału oraz informacja, gdzie tłumaczenie będzie użyte.",
    keywords: [
      "tłumaczenie dokumentów z Ukrainy Kraków",
      "dokumenty ukraińskie Małopolska",
      "tłumacz ukraiński Małopolskie",
      "tłumaczenia poświadczone Ukraina"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Jakie dokumenty z Ukrainy są najczęściej tłumaczone?",
        paragraphs: [
          "Najczęściej są to akty urodzenia, małżeństwa, rozwodu, zaświadczenia, wyroki, decyzje administracyjne, świadectwa, dyplomy, pełnomocnictwa i dokumenty firmowe.",
          "W sprawach sądowych dochodzą także protokoły, zawiadomienia, postanowienia, korespondencja i załączniki."
        ]
      },
      {
        heading: "Kraków, Wieliczka, Skawina, Niepołomice i okolice",
        paragraphs: [
          "W praktyce zapytania o dokumenty ukraińskie pochodzą nie tylko z Krakowa, ale też z pobliskich miejscowości: Wieliczki, Skawiny, Niepołomic, Bochni, Myślenic i innych miast Małopolski.",
          "Przy zleceniu zdalnym najważniejsze jest przesłanie pełnego materiału w dobrej jakości."
        ]
      },
      {
        heading: "Czy potrzebna jest forma poświadczona?",
        paragraphs: [
          "Jeżeli dokument ma zostać złożony w instytucji publicznej, sądzie, urzędzie albo banku, forma poświadczona może być wymagana.",
          "W razie wątpliwości warto ustalić wymóg bezpośrednio z instytucją, do której dokument zostanie złożony."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy tłumaczenie dokumentów z Ukrainy można zlecić zdalnie?",
        answer:
          "Tak, do wstępnej oceny i wyceny zwykle wystarczy czytelny skan lub PDF. Oryginał może być potrzebny w zależności od rodzaju dokumentu i celu tłumaczenia."
      },
      {
        question: "Czy tłumaczone są pieczęcie i dopiski?",
        answer:
          "Tak, widoczne pieczęcie, dopiski, adnotacje i podpisy są istotną częścią dokumentu."
      }
    ],
    relatedLinks: [
      { label: "Temat: dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "Dobierz tłumaczenie", href: "/dobierz-tlumaczenie" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  {
    title: "Tłumaczenia dla sądu, Policji i Prokuratury w Krakowie",
    slug: "tlumaczenia-dla-sadu-policji-prokuratury-krakow",
    city: "Kraków",
    region: "Małopolskie",
    category: "Sądy i organy ścigania",
    description:
      "Lokalny artykuł o tłumaczeniach materiałów procesowych, akt, protokołów i dokumentów dla sądu, Policji i Prokuratury w Krakowie.",
    intro:
      "Tłumaczenia dla sądu, Policji i Prokuratury wymagają zachowania treści, struktury, oznaczeń, dat, nazw organów i terminologii procesowej. W Krakowie takie materiały często obejmują akta spraw, pisma, protokoły, załączniki oraz korespondencję.",
    keywords: [
      "tłumaczenia dla sądu Kraków",
      "tłumaczenia dla Policji Kraków",
      "tłumaczenia dla Prokuratury Kraków",
      "tłumaczenia akt sprawy Kraków"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Jakie materiały trafiają do tłumaczenia?",
        paragraphs: [
          "Najczęściej są to protokoły, zawiadomienia, postanowienia, akty oskarżenia, pisma pełnomocników, korespondencja, załączniki oraz dokumenty osobowe.",
          "Coraz częściej tłumaczone są także materiały cyfrowe: wiadomości, zrzuty ekranu, potwierdzenia płatności i dane z komunikatorów."
        ]
      },
      {
        heading: "Dlaczego kontekst sprawy jest ważny?",
        paragraphs: [
          "Ten sam termin może mieć inne znaczenie w sprawie karnej, cywilnej, rodzinnej albo administracyjnej.",
          "Dlatego przy większych materiałach warto wskazać rodzaj sprawy, organ prowadzący i oczekiwany sposób użycia tłumaczenia."
        ]
      },
      {
        heading: "Jak zachować porządek akt?",
        paragraphs: [
          "Najlepiej przekazywać pliki w kolejności stron lub według numeracji załączników.",
          "Nazwy plików, sygnatury i oznaczenia załączników mogą mieć znaczenie organizacyjne i powinny zostać zachowane."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy można tłumaczyć tylko wybrane strony akt?",
        answer:
          "Tak, jeżeli zakres został wskazany przez zlecającego, pełnomocnika albo organ. Tłumacz nie powinien sam wybierać procesowo istotnych fragmentów."
      },
      {
        question: "Czy zrzuty ekranu mogą być częścią materiału dla sądu?",
        answer:
          "Tak, jeżeli są czytelne i zachowują kontekst: daty, godziny, nazwy użytkowników i kolejność wypowiedzi."
      }
    ],
    relatedLinks: [
      { label: "Sądy, Policja, Prokuratura", href: "/tematy/sady-policja-prokuratura" },
      { label: "Sprawy karne", href: "/sprawy-karne" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumaczenie dowodów cyfrowych w Krakowie — komunikatory, BLIK, kryptowaluty",
    slug: "tlumaczenie-dowodow-cyfrowych-krakow",
    city: "Kraków",
    region: "Małopolskie",
    category: "Dowody cyfrowe",
    description:
      "Lokalny artykuł SEO o tłumaczeniu dowodów cyfrowych w Krakowie: komunikatory, screeny, BLIK, kryptowaluty, e-mail i materiały z postępowań.",
    intro:
      "Dowody cyfrowe pojawiają się w sprawach karnych, cywilnych, rodzinnych i gospodarczych. Tłumaczenie takich materiałów wymaga zachowania treści, układu, dat, godzin, nazw użytkowników oraz elementów technicznych.",
    keywords: [
      "tłumaczenie dowodów cyfrowych Kraków",
      "tłumaczenie screenów Kraków",
      "tłumaczenie WhatsApp Telegram Kraków",
      "tłumaczenie materiałów BLIK kryptowaluty"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Co może być dowodem cyfrowym do tłumaczenia?",
        paragraphs: [
          "Mogą to być wiadomości z komunikatorów, e-maile, SMS-y, potwierdzenia płatności, transakcje, dane giełd kryptowalutowych, screeny i eksporty rozmów.",
          "Ważne jest, aby zachować oryginalny układ i kolejność materiału."
        ]
      },
      {
        heading: "Dlaczego nie usuwać metadanych i kontekstu?",
        paragraphs: [
          "Daty, godziny, nazwy użytkowników, numery transakcji i oznaczenia systemowe mogą mieć znaczenie dla zrozumienia materiału.",
          "Tłumaczenie powinno umożliwiać odczytanie treści bez zacierania kontekstu dowodowego."
        ]
      },
      {
        heading: "Kraków i sprawy cyberprzestępczości",
        paragraphs: [
          "Materiały dotyczące oszustw internetowych, BLIK, kryptowalut i komunikatorów coraz częściej pojawiają się w postępowaniach prowadzonych lokalnie i zdalnie.",
          "Przed wyceną warto przygotować opis sprawy oraz uporządkowany zestaw plików."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy emoji i skróty trzeba tłumaczyć?",
        answer:
          "Niektóre elementy można opisać, inne pozostawić z objaśnieniem. Ważne jest zachowanie sensu, tonu i kontekstu rozmowy."
      },
      {
        question: "Czy lepsze są screeny czy eksport rozmowy?",
        answer:
          "Eksport rozmowy jest zwykle bardziej uporządkowany, ale czytelne screeny też mogą być podstawą tłumaczenia."
      }
    ],
    relatedLinks: [
      {
        label: "Poradnik: dowody cyfrowe",
        href: "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych"
      },
      {
        label: "Poradnik: komunikatory",
        href: "/poradniki/tlumaczenie-korespondencji-telegram-whatsapp-signal"
      },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumacz przysięgły ukraiński Wieliczka — dokumenty do urzędu i sądu",
    slug: "tlumacz-przysiegly-ukrainski-wieliczka",
    city: "Wieliczka",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Artykuł lokalny dla Wieliczki: tłumaczenia poświadczone dokumentów ukraińskich do urzędu, sądu, kancelarii i instytucji.",
    intro:
      "Wieliczka i okolice generują wiele zapytań o tłumaczenia dokumentów z Ukrainy, szczególnie w sprawach rodzinnych, urzędowych, pracowniczych i sądowych.",
    keywords: [
      "tłumacz przysięgły ukraiński Wieliczka",
      "tłumaczenia ukraińskie Wieliczka",
      "dokumenty z Ukrainy Wieliczka"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Dokumenty ukraińskie w Wieliczce",
        paragraphs: [
          "Najczęściej tłumaczone są akty stanu cywilnego, zaświadczenia, pełnomocnictwa, decyzje, świadectwa i dokumenty do spraw urzędowych.",
          "Przy dokumentach przeznaczonych do instytucji publicznych często potrzebna jest forma poświadczona."
        ]
      },
      {
        heading: "Zlecenie zdalne z Wieliczki",
        paragraphs: [
          "Do wstępnej oceny wystarczy czytelny skan lub PDF. Istotne jest wskazanie celu tłumaczenia oraz oczekiwanego terminu.",
          "Jeżeli dokument ma zostać złożony w sądzie lub urzędzie, warto zachować wszystkie pieczęcie i adnotacje w widocznym kadrze."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy z Wieliczki można zlecić tłumaczenie zdalnie?",
        answer:
          "Tak, wstępna wycena może zostać przygotowana na podstawie czytelnego skanu lub PDF."
      }
    ],
    relatedLinks: [
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "Ukraiński", href: "/ukrainski" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumacz przysięgły ukraiński Skawina — dokumenty i sprawy urzędowe",
    slug: "tlumacz-przysiegly-ukrainski-skawina",
    city: "Skawina",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Lokalny artykuł SEO dla Skawiny: tłumaczenia dokumentów ukraińskich, poświadczonych, urzędowych i sądowych.",
    intro:
      "W Skawinie zapytania o tłumaczenia ukraińskie dotyczą zwykle dokumentów urzędowych, rodzinnych, pracowniczych i materiałów składanych w instytucjach.",
    keywords: [
      "tłumacz przysięgły ukraiński Skawina",
      "tłumaczenia ukraińskie Skawina",
      "tłumaczenie dokumentów Skawina"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Jakie dokumenty tłumaczy się w Skawinie?",
        paragraphs: [
          "Najczęściej są to akty, zaświadczenia, pełnomocnictwa, dokumenty szkolne, dokumenty pracownicze i pisma urzędowe.",
          "Jeżeli dokument ma zostać użyty oficjalnie, warto upewnić się, czy instytucja wymaga tłumaczenia poświadczonego."
        ]
      },
      {
        heading: "Tłumaczenia dla spraw sądowych i administracyjnych",
        paragraphs: [
          "W sprawach sądowych ważna jest pełna treść dokumentu, sygnatury, daty, nazwy organów oraz załączniki.",
          "Przy dokumentach administracyjnych szczególne znaczenie mają pieczęcie, podpisy i adnotacje."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy dokumenty ze Skawiny można przesłać mailem?",
        answer:
          "Do wyceny tak. Do wykonania i odbioru forma zależy od rodzaju dokumentu i ustaleń dotyczących tłumaczenia."
      }
    ],
    relatedLinks: [
      { label: "Tłumaczenia poświadczone", href: "/tematy/tlumaczenia-poswiadczone" },
      { label: "Dobierz tłumaczenie", href: "/dobierz-tlumaczenie" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumacz przysięgły ukraiński Niepołomice — dokumenty z Ukrainy",
    slug: "tlumacz-przysiegly-ukrainski-niepolomice",
    city: "Niepołomice",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Artykuł lokalny dla Niepołomic: tłumaczenia poświadczone dokumentów ukraińskich do urzędów, sądów i firm.",
    intro:
      "Niepołomice i okolice to lokalizacja, z której często pojawiają się zapytania o tłumaczenie dokumentów ukraińskich dla urzędów, pracodawców, sądów i kancelarii.",
    keywords: [
      "tłumacz przysięgły ukraiński Niepołomice",
      "tłumaczenia ukraińskie Niepołomice",
      "dokumenty z Ukrainy Niepołomice"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Dokumenty do pracy, urzędu i sądu",
        paragraphs: [
          "Do tłumaczenia trafiają dokumenty osobowe, pracownicze, edukacyjne, rodzinne i sądowe.",
          "W zależności od celu użycia może być potrzebna forma poświadczona."
        ]
      },
      {
        heading: "Co wpływa na wycenę?",
        paragraphs: [
          "Objętość, jakość skanu, liczba stron, język, termin oraz rodzaj dokumentu.",
          "Przy dokumentach wielostronicowych warto przesłać cały materiał od razu."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy tłumaczenie może objąć kilka dokumentów naraz?",
        answer:
          "Tak, najlepiej przesłać komplet dokumentów do wspólnej oceny zakresu i terminu."
      }
    ],
    relatedLinks: [
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumacz przysięgły ukraiński Bochnia — dokumenty, akty i zaświadczenia",
    slug: "tlumacz-przysiegly-ukrainski-bochnia",
    city: "Bochnia",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Lokalna treść SEO dla Bochni: tłumaczenia dokumentów ukraińskich, aktów stanu cywilnego, zaświadczeń i dokumentów do instytucji.",
    intro:
      "W Bochni zapytania o tłumaczenia ukraińskie dotyczą najczęściej dokumentów rodzinnych, urzędowych, szkolnych, pracowniczych oraz pism do instytucji.",
    keywords: [
      "tłumacz przysięgły ukraiński Bochnia",
      "tłumaczenia ukraińskie Bochnia",
      "tłumaczenie dokumentów Bochnia"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Tłumaczenia dokumentów w Bochni",
        paragraphs: [
          "Akty urodzenia, małżeństwa, zaświadczenia, decyzje i pełnomocnictwa powinny być przekazane w dobrej jakości.",
          "Jeżeli dokument będzie używany w urzędzie lub sądzie, warto ustalić, czy wymagana jest forma poświadczona."
        ]
      },
      {
        heading: "Jak skrócić czas wyceny?",
        paragraphs: [
          "Prześlij komplet dokumentów, wskaż język, termin i cel użycia.",
          "Przy dokumentach wielostronicowych warto przesłać jeden uporządkowany PDF."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy dokument musi być w PDF?",
        answer:
          "Nie musi, ale PDF jest zwykle wygodniejszy i zmniejsza ryzyko pominięcia stron."
      }
    ],
    relatedLinks: [
      { label: "Ukraiński", href: "/ukrainski" },
      { label: "Tłumaczenia poświadczone", href: "/tematy/tlumaczenia-poswiadczone" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumacz przysięgły ukraiński Myślenice — dokumenty do urzędu i sądu",
    slug: "tlumacz-przysiegly-ukrainski-myslenice",
    city: "Myślenice",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Lokalny artykuł SEO dla Myślenic: tłumaczenia poświadczone dokumentów ukraińskich i materiałów do instytucji.",
    intro:
      "Myślenice i okolice to częsty obszar zapytań o tłumaczenia dokumentów ukraińskich, szczególnie w sprawach rodzinnych, pracowniczych i urzędowych.",
    keywords: [
      "tłumacz przysięgły ukraiński Myślenice",
      "tłumaczenia ukraińskie Myślenice",
      "dokumenty z Ukrainy Myślenice"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Dokumenty z Ukrainy w Myślenicach",
        paragraphs: [
          "Najczęściej tłumaczone są dokumenty osobowe, akty, zaświadczenia, dyplomy, świadectwa, pełnomocnictwa i pisma urzędowe.",
          "W przypadku spraw oficjalnych warto od razu wskazać, gdzie dokument będzie składany."
        ]
      },
      {
        heading: "Czy potrzebny jest oryginał?",
        paragraphs: [
          "Do wyceny zwykle wystarczy skan. Kwestia oryginału zależy od rodzaju dokumentu, celu tłumaczenia i sposobu odbioru.",
          "Najważniejsze jest, aby materiał był kompletny i czytelny."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy można tłumaczyć dokumenty ze zdjęć?",
        answer:
          "Tak, jeżeli zdjęcia są czytelne i obejmują cały dokument, bez uciętych pieczęci i podpisów."
      }
    ],
    relatedLinks: [
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "Dobierz tłumaczenie", href: "/dobierz-tlumaczenie" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumacz przysięgły ukraiński Olkusz — tłumaczenia dokumentów",
    slug: "tlumacz-przysiegly-ukrainski-olkusz",
    city: "Olkusz",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Artykuł lokalny dla Olkusza: tłumaczenia poświadczone dokumentów ukraińskich, urzędowych, sądowych i pracowniczych.",
    intro:
      "Olkusz i zachodnia część Małopolski to obszar, z którego często pojawiają się zapytania o tłumaczenia dokumentów ukraińskich i rosyjskich do celów urzędowych oraz sądowych.",
    keywords: [
      "tłumacz przysięgły ukraiński Olkusz",
      "tłumaczenia ukraińskie Olkusz",
      "tłumaczenie dokumentów Olkusz"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Dokumenty do instytucji",
        paragraphs: [
          "W dokumentach urzędowych znaczenie mają dane osobowe, daty, numery, pieczęcie, podpisy i adnotacje.",
          "Przy dokumentach sądowych dodatkowo ważna jest terminologia i zachowanie struktury pisma."
        ]
      },
      {
        heading: "Zlecenie z Olkusza",
        paragraphs: [
          "Materiały można przygotować do wstępnej wyceny w formie skanu, PDF lub dobrej jakości zdjęć.",
          "W opisie warto wskazać cel tłumaczenia i oczekiwany termin."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy tłumaczenie może być wykonane zdalnie?",
        answer:
          "Wstępna ocena i wycena mogą zostać wykonane zdalnie. Szczegóły zależą od rodzaju dokumentu."
      }
    ],
    relatedLinks: [
      { label: "Ukraiński", href: "/ukrainski" },
      { label: "Rosyjski", href: "/rosyjski" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumaczenia ukraińskie Chrzanów — dokumenty z Ukrainy i sprawy urzędowe",
    slug: "tlumaczenia-ukrainskie-chrzanow",
    city: "Chrzanów",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Lokalna strona artykułowa dla Chrzanowa: tłumaczenia ukraińskie dokumentów z Ukrainy, akt, zaświadczeń i pism urzędowych.",
    intro:
      "Chrzanów i okolice to lokalny obszar zapytań o tłumaczenia dokumentów z Ukrainy, szczególnie do spraw rodzinnych, pracowniczych, szkolnych i administracyjnych.",
    keywords: [
      "tłumaczenia ukraińskie Chrzanów",
      "tłumacz przysięgły ukraiński Chrzanów",
      "dokumenty z Ukrainy Chrzanów"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Co najczęściej wymaga tłumaczenia?",
        paragraphs: [
          "Akty stanu cywilnego, zaświadczenia, świadectwa, dokumenty pracownicze, pełnomocnictwa i decyzje administracyjne.",
          "Przy dokumentach do sądu albo urzędu warto sprawdzić, czy potrzebne jest tłumaczenie poświadczone."
        ]
      },
      {
        heading: "Jak przygotować komplet dokumentów?",
        paragraphs: [
          "Najlepiej przesłać wszystkie strony dokumentu, także te z pieczęciami, adnotacjami i klauzulami.",
          "Nie należy kadrować dokumentów w sposób usuwający elementy urzędowe."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy dokument ukraiński może być przetłumaczony na podstawie kopii?",
        answer:
          "Do oceny i wyceny kopia zwykle wystarczy. Forma wykonania zależy od celu tłumaczenia i ustaleń."
      }
    ],
    relatedLinks: [
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumaczenia ukraińskie Oświęcim — dokumenty, sąd i urzędy",
    slug: "tlumaczenia-ukrainskie-oswiecim",
    city: "Oświęcim",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Artykuł lokalny dla Oświęcimia: tłumaczenia dokumentów ukraińskich do urzędów, sądów, firm i instytucji.",
    intro:
      "W Oświęcimiu i okolicy dokumenty ukraińskie mogą być potrzebne w sprawach urzędowych, pracowniczych, rodzinnych i procesowych.",
    keywords: [
      "tłumaczenia ukraińskie Oświęcim",
      "tłumacz przysięgły ukraiński Oświęcim",
      "dokumenty ukraińskie Oświęcim"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Dokumenty do urzędu i pracy",
        paragraphs: [
          "Tłumaczenia mogą obejmować dokumenty osobowe, szkolne, zawodowe, rodzinne i firmowe.",
          "Jeżeli dokument ma być użyty oficjalnie, forma poświadczona może być właściwa."
        ]
      },
      {
        heading: "Materiały dla sądu lub kancelarii",
        paragraphs: [
          "Przy materiałach procesowych należy zachować pełną treść, kolejność stron i oznaczenia.",
          "Warto przesłać informację o celu tłumaczenia i organie, do którego dokument zostanie złożony."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy z Oświęcimia można przesłać dokumenty online?",
        answer:
          "Tak, do wyceny można przesłać skan, PDF albo dobrej jakości zdjęcia."
      }
    ],
    relatedLinks: [
      { label: "Tłumaczenia poświadczone", href: "/tematy/tlumaczenia-poswiadczone" },
      { label: "Ukraiński", href: "/ukrainski" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumacz przysięgły ukraiński Tarnów — Małopolska wschodnia",
    slug: "tlumacz-przysiegly-ukrainski-tarnow",
    city: "Tarnów",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Lokalny artykuł SEO dla Tarnowa: tłumaczenia poświadczone dokumentów ukraińskich, sądowych, urzędowych i firmowych.",
    intro:
      "Tarnów jest ważnym ośrodkiem wschodniej Małopolski, gdzie dokumenty ukraińskie bywają używane w sprawach urzędowych, sądowych, rodzinnych, pracowniczych i edukacyjnych.",
    keywords: [
      "tłumacz przysięgły ukraiński Tarnów",
      "tłumaczenia ukraińskie Tarnów",
      "dokumenty z Ukrainy Tarnów"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Tłumaczenia ukraińskie w Tarnowie",
        paragraphs: [
          "Zakres obejmuje dokumenty osobowe, akty, zaświadczenia, pełnomocnictwa, dokumenty pracownicze i materiały procesowe.",
          "W przypadku dokumentów oficjalnych warto ustalić, czy instytucja wymaga tłumaczenia poświadczonego."
        ]
      },
      {
        heading: "Materiały wielostronicowe",
        paragraphs: [
          "Przy większych pakietach dokumentów istotne jest zachowanie porządku plików, kolejności stron i kompletności załączników.",
          "Wycena jest dokładniejsza, gdy przesłany materiał obejmuje całość dokumentów."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy dokumenty z Tarnowa można wycenić zdalnie?",
        answer:
          "Tak, do wstępnej wyceny wystarczy czytelny skan lub PDF oraz opis celu tłumaczenia."
      }
    ],
    relatedLinks: [
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "Dobierz tłumaczenie", href: "/dobierz-tlumaczenie" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumacz przysięgły ukraiński Nowy Sącz — dokumenty i sprawy urzędowe",
    slug: "tlumacz-przysiegly-ukrainski-nowy-sacz",
    city: "Nowy Sącz",
    region: "Małopolskie",
    category: "Lokalne tłumaczenia ukraińskie",
    description:
      "Artykuł lokalny SEO dla Nowego Sącza: tłumaczenia dokumentów ukraińskich do urzędów, sądów, firm i instytucji.",
    intro:
      "Nowy Sącz i południowa Małopolska to region, z którego mogą pochodzić zapytania o tłumaczenia dokumentów ukraińskich, urzędowych, sądowych i edukacyjnych.",
    keywords: [
      "tłumacz przysięgły ukraiński Nowy Sącz",
      "tłumaczenia ukraińskie Nowy Sącz",
      "dokumenty z Ukrainy Nowy Sącz"
    ],
    date: baseDate,
    sections: [
      {
        heading: "Dokumenty ukraińskie w Nowym Sączu",
        paragraphs: [
          "Najczęściej chodzi o akty, zaświadczenia, dyplomy, świadectwa, decyzje, pełnomocnictwa i dokumenty rodzinne.",
          "Jeżeli dokument ma zostać użyty w urzędzie, sądzie lub uczelni, może być wymagana forma poświadczona."
        ]
      },
      {
        heading: "Przygotowanie materiału",
        paragraphs: [
          "Najlepszą podstawą do wyceny jest kompletny PDF lub czytelny skan.",
          "Należy zachować pieczęcie, podpisy, adnotacje i numery dokumentu."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy można przesłać kilka dokumentów naraz?",
        answer:
          "Tak, przy kilku dokumentach warto przesłać komplet w jednym uporządkowanym pakiecie."
      }
    ],
    relatedLinks: [
      { label: "Ukraiński", href: "/ukrainski" },
      { label: "Tłumaczenia poświadczone", href: "/tematy/tlumaczenia-poswiadczone" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  }
];

export function getAllLocalSeoArticles() {
  return localArticles;
}

export function getLocalSeoArticleBySlug(slug: string) {
  return localArticles.find((article) => article.slug === slug);
}

export function getLocalSeoArticleSlugs() {
  return localArticles.map((article) => article.slug);
}
