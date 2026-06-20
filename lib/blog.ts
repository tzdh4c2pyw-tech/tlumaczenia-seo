export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  language: string;
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  intro: string;
  sections: BlogSection[];
  faqs: BlogFaq[];
  relatedSlugs: string[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny",
    title: "Kiedy potrzebny jest tłumacz przysięgły języka ukraińskiego?",
    description:
      "Wyjaśnienie, kiedy dokument z Ukrainy wymaga tłumaczenia poświadczonego i jak przygotować go do tłumaczenia.",
    language: "ukraiński",
    category: "tłumaczenia poświadczone",
    readTime: "6 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumacz przysięgły ukraiński",
      "tłumaczenie dokumentów z Ukrainy",
      "tłumaczenie poświadczone",
      "tłumacz ukraiński Kraków"
    ],
    intro:
      "Tłumacz przysięgły języka ukraińskiego jest potrzebny wtedy, gdy dokument ma zostać użyty przed urzędem, sądem, uczelnią, organem administracji, bankiem, notariuszem albo inną instytucją wymagającą tłumaczenia poświadczonego.",
    sections: [
      {
        heading: "Czym jest tłumaczenie poświadczone?",
        paragraphs: [
          "Tłumaczenie poświadczone, potocznie nazywane tłumaczeniem przysięgłym, jest tłumaczeniem sporządzonym przez osobę wpisaną na listę tłumaczy przysięgłych. Taki dokument zawiera formułę poświadczającą, podpis, pieczęć albo kwalifikowany podpis elektroniczny.",
          "W praktyce tłumaczenie poświadczone jest potrzebne wtedy, gdy dokument ma wywoływać skutki prawne albo formalne. Dotyczy to dokumentów urzędowych, sądowych, rodzinnych, edukacyjnych, pobytowych, spadkowych i procesowych."
        ]
      },
      {
        heading: "Najczęstsze dokumenty z Ukrainy",
        paragraphs: [
          "Do tłumaczenia trafiają najczęściej akty urodzenia, akty małżeństwa, akty zgonu, dyplomy, świadectwa, suplementy, zaświadczenia, pełnomocnictwa, dokumenty pobytowe, orzeczenia, wyroki, postanowienia i dokumenty z akt sprawy.",
          "Dokument ukraiński może zawierać pieczęcie, podpisy, dopiski odręczne, adnotacje urzędowe, skróty i oznaczenia instytucji. Wszystkie te elementy powinny zostać odpowiednio odnotowane w tłumaczeniu."
        ]
      },
      {
        heading: "Kiedy wystarczy tłumaczenie zwykłe?",
        paragraphs: [
          "Tłumaczenie zwykłe może wystarczyć do celów informacyjnych, wewnętrznych, biznesowych albo prywatnych. Nie zawsze jednak zostanie przyjęte przez urząd lub sąd.",
          "Jeżeli dokument ma być złożony w instytucji, warto wcześniej ustalić, czy wymagane jest tłumaczenie poświadczone. Pozwala to uniknąć ponownego tłumaczenia tego samego materiału."
        ]
      },
      {
        heading: "Jak przygotować dokument?",
        paragraphs: [
          "Najlepiej przygotować czytelny skan albo zdjęcie całego dokumentu. Widoczne powinny być wszystkie krawędzie, pieczęcie, podpisy, numery stron, adnotacje oraz ewentualne załączniki.",
          "Przy większych zestawach dokumentów warto opisać, które dokumenty mają być tłumaczone w całości, a które jedynie do wstępnej oceny zakresu."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy każdy dokument z Ukrainy wymaga tłumacza przysięgłego?",
        answer:
          "Nie każdy. Tłumaczenie poświadczone jest potrzebne głównie wtedy, gdy dokument ma być użyty przed urzędem, sądem albo inną instytucją wymagającą formy poświadczonej."
      },
      {
        question: "Czy można wysłać zdjęcie dokumentu?",
        answer:
          "Tak, do wstępnej oceny można przesłać zdjęcie. Powinno być czytelne i obejmować cały dokument, pieczęcie, podpisy oraz wszystkie strony."
      },
      {
        question: "Czy dokument ukraiński można tłumaczyć z pliku PDF?",
        answer:
          "Tak. Plik PDF jest wygodny do oceny i wyceny, pod warunkiem że dokument jest czytelny i kompletny."
      }
    ],
    relatedSlugs: [
      "tlumaczenie-dokumentow-z-ukrainy-kompletny-przewodnik",
      "ustawa-o-zawodzie-tlumacza-przysieglego-zasady",
      "wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow"
    ]
  },
  {
    slug: "ustawa-o-zawodzie-tlumacza-przysieglego-zasady",
    title: "Ustawa o zawodzie tłumacza przysięgłego — co oznacza dla klienta?",
    description:
      "Praktyczne omówienie obowiązków tłumacza przysięgłego, poświadczenia, repertorium i odpowiedzialności zawodowej.",
    language: "polski",
    category: "prawo zawodu",
    readTime: "7 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "ustawa o zawodzie tłumacza przysięgłego",
      "tłumacz przysięgły obowiązki",
      "repertorium tłumacza przysięgłego",
      "poświadczenie tłumaczenia"
    ],
    intro:
      "Zawód tłumacza przysięgłego jest zawodem zaufania publicznego. Dla klienta oznacza to, że tłumaczenie poświadczone nie jest zwykłą usługą tekstową, lecz czynnością o określonych skutkach formalnych.",
    sections: [
      {
        heading: "Kim jest tłumacz przysięgły?",
        paragraphs: [
          "Tłumacz przysięgły jest osobą uprawnioną do sporządzania i poświadczania tłumaczeń dokumentów oraz do wykonywania tłumaczeń ustnych w sytuacjach wymagających urzędowego charakteru.",
          "W praktyce jego praca obejmuje dokumenty sądowe, urzędowe, notarialne, prywatne, procesowe, dowodowe, edukacyjne, rodzinne i administracyjne."
        ]
      },
      {
        heading: "Poświadczenie tłumaczenia",
        paragraphs: [
          "Tłumaczenie poświadczone zawiera informację, z jakiego dokumentu zostało sporządzone tłumaczenie, czy dokument był oryginałem, kopią, skanem albo innym odwzorowaniem.",
          "Formuła poświadczająca jest istotna, ponieważ wskazuje zakres odpowiedzialności tłumacza oraz charakter materiału, który został przedstawiony do tłumaczenia."
        ]
      },
      {
        heading: "Repertorium tłumacza przysięgłego",
        paragraphs: [
          "Tłumacz przysięgły prowadzi repertorium, czyli ewidencję czynności. Wpis obejmuje między innymi dane dotyczące zlecenia, języka, rodzaju czynności i oznaczenia dokumentu.",
          "Dla klienta oznacza to, że tłumaczenie poświadczone jest czynnością rejestrowaną, a nie anonimową usługą tekstową."
        ]
      },
      {
        heading: "Odpowiedzialność i staranność",
        paragraphs: [
          "Tłumacz przysięgły powinien zachować szczególną staranność, poufność i wierność wobec treści dokumentu. Dotyczy to również nazw własnych, dat, oznaczeń akt, pieczęci i skrótów.",
          "W dokumentach procesowych lub urzędowych nie należy upraszczać treści w sposób, który mógłby zmienić znaczenie dokumentu."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy tłumacz przysięgły może poświadczyć tłumaczenie ze skanu?",
        answer:
          "Tak, ale w formule poświadczającej powinno zostać wskazane, że tłumaczenie sporządzono na podstawie skanu, kopii albo innego odwzorowania, jeżeli nie przedstawiono oryginału."
      },
      {
        question: "Czy każde tłumaczenie przysięgłe trafia do repertorium?",
        answer:
          "Czynności tłumacza przysięgłego są ujmowane w repertorium zgodnie z zasadami wykonywania zawodu."
      },
      {
        question: "Czy tłumacz przysięgły poprawia treść dokumentu?",
        answer:
          "Nie. Tłumacz oddaje treść dokumentu w innym języku. Nie poprawia błędów merytorycznych dokumentu, choć może odnotować elementy nieczytelne lub szczególne."
      }
    ],
    relatedSlugs: [
      "repertorium-tlumacza-przysieglego-co-oznacza",
      "wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow",
      "jak-tlumaczy-sie-dokumenty-etapy-pracy"
    ]
  },
  {
    slug: "wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow",
    title: "Wynagrodzenie tłumacza przysięgłego i strona 1125 znaków",
    description:
      "Jak rozumieć stronę obliczeniową, liczbę znaków, tryb pilny i różnicę między wyceną prywatną a zleceniem organu.",
    language: "polski",
    category: "wynagrodzenie",
    readTime: "7 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "wynagrodzenie tłumacza przysięgłego",
      "strona 1125 znaków",
      "ile kosztuje tłumaczenie przysięgłe",
      "stawki tłumacza przysięgłego"
    ],
    intro:
      "Wycena tłumaczenia poświadczonego często budzi pytania, ponieważ klient widzi liczbę stron dokumentu, a tłumacz rozlicza pracę według strony obliczeniowej, czyli według liczby znaków.",
    sections: [
      {
        heading: "Czym jest strona obliczeniowa?",
        paragraphs: [
          "W tłumaczeniach poświadczonych powszechnie stosuje się pojęcie strony obliczeniowej. Nie jest to fizyczna kartka papieru, lecz określona liczba znaków tekstu.",
          "W praktyce oznacza to, że jedna strona dokumentu może mieć mniej albo więcej niż jedna strona obliczeniowa. Dokument z tabelami, małą czcionką albo dużą ilością tekstu może dawać większą liczbę stron rozliczeniowych."
        ]
      },
      {
        heading: "Dlaczego liczba znaków ma znaczenie?",
        paragraphs: [
          "Liczba znaków pozwala obiektywnie określić objętość tłumaczenia. Do znaków zwykle wlicza się litery, cyfry, spacje, znaki interpunkcyjne i inne elementy tekstowe.",
          "Dokument składający się z dwóch stron graficznych może mieć różną objętość w zależności od układu, tabel, pieczęci, dopisków, nagłówków i treści drobnym drukiem."
        ]
      },
      {
        heading: "Zlecenia prywatne i zlecenia organów",
        paragraphs: [
          "W praktyce należy odróżnić zlecenia prywatne od zleceń wykonywanych na rzecz uprawnionych organów. W przypadku organów zastosowanie mogą mieć szczególne zasady wynagrodzenia wynikające z przepisów.",
          "W zleceniach prywatnych cena może zależeć od języka, terminu, objętości, formatu dokumentu, trudności, układu graficznego, specjalizacji i konieczności odtworzenia tabel albo oznaczeń."
        ]
      },
      {
        heading: "Tryb pilny",
        paragraphs: [
          "Tryb pilny wymaga wcześniejszego uzgodnienia. Krótki termin może wpływać na organizację pracy, kolejność zleceń i możliwość przyjęcia materiału.",
          "Przy dokumentach sądowych, policyjnych, prokuratorskich i urzędowych warto od razu wskazać termin procesowy albo datę złożenia dokumentu."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy jedna kartka dokumentu to jedna strona tłumaczenia?",
        answer:
          "Nie zawsze. Wycena zależy od liczby znaków i objętości tekstu, a nie tylko od liczby fizycznych kartek."
      },
      {
        question: "Czy zdjęcie dokumentu wystarczy do wyceny?",
        answer:
          "Tak, jeżeli jest czytelne. Przy nieczytelnym zdjęciu wycena może być tylko orientacyjna."
      },
      {
        question: "Czy stawki urzędowe i prywatne są takie same?",
        answer:
          "Nie zawsze. Zlecenia organów i zlecenia prywatne mogą być rozliczane według różnych zasad. Przy zleceniu warto wskazać, kto jest zleceniodawcą i jaki jest cel tłumaczenia."
      }
    ],
    relatedSlugs: [
      "ustawa-o-zawodzie-tlumacza-przysieglego-zasady",
      "jak-tlumaczy-sie-dokumenty-etapy-pracy",
      "tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny"
    ]
  },
  {
    slug: "jak-tlumaczy-sie-dokumenty-etapy-pracy",
    title: "Jak tłumaczy się dokumenty? Etapy pracy tłumacza przysięgłego",
    description:
      "Od oceny dokumentu po poświadczenie: jak przebiega tłumaczenie dokumentu urzędowego, sądowego, prywatnego albo cyfrowego.",
    language: "polski",
    category: "praktyka tłumaczenia",
    readTime: "8 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "jak tłumaczy się dokumenty",
      "etapy tłumaczenia",
      "tłumacz przysięgły dokumenty",
      "tłumaczenie poświadczone krok po kroku"
    ],
    intro:
      "Tłumaczenie dokumentu wymaga nie tylko znajomości języka, ale także rozpoznania rodzaju dokumentu, celu użycia, układu, nazw instytucji, pieczęci i elementów formalnych.",
    sections: [
      {
        heading: "Etap 1: ocena materiału",
        paragraphs: [
          "Pierwszy etap polega na sprawdzeniu, co dokładnie ma zostać przetłumaczone. Znaczenie ma język, rodzaj dokumentu, liczba stron, czytelność, cel tłumaczenia i termin.",
          "Na tym etapie ustala się również, czy materiał jest dokumentem urzędowym, prywatnym, sądowym, korespondencją, zrzutem ekranu, raportem albo zestawem plików."
        ]
      },
      {
        heading: "Etap 2: analiza terminologii",
        paragraphs: [
          "Dokumenty prawne i urzędowe wymagają spójnej terminologii. Tłumacz analizuje nazwy instytucji, funkcje procesowe, określenia stron, numery akt, przepisy, daty i oznaczenia.",
          "Przy języku ukraińskim, rosyjskim i angielskim istotne są różnice systemowe między instytucjami, których nie należy mechanicznie upraszczać."
        ]
      },
      {
        heading: "Etap 3: tłumaczenie treści i elementów formalnych",
        paragraphs: [
          "Tłumaczeniu podlega nie tylko główny tekst, ale również nagłówki, stopki, tabele, pieczęcie, podpisy, dopiski, adnotacje, numery dokumentów i elementy formularza.",
          "Elementy nieczytelne, skreślenia, brakujące fragmenty albo cechy dokumentu mogą zostać opisane w tłumaczeniu zgodnie z praktyką tłumaczeń poświadczonych."
        ]
      },
      {
        heading: "Etap 4: kontrola i poświadczenie",
        paragraphs: [
          "Po przygotowaniu tłumaczenia następuje kontrola spójności, nazw własnych, dat, numerów, układu, terminologii i zgodności z dokumentem źródłowym.",
          "W przypadku tłumaczenia poświadczonego dodaje się formułę poświadczającą, numer repertorium oraz podpis i pieczęć albo podpis elektroniczny."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy tłumacz zachowuje układ dokumentu?",
        answer:
          "W miarę możliwości tak. Układ powinien pomagać odbiorcy zrozumieć strukturę dokumentu, choć nie zawsze musi być identyczny graficznie."
      },
      {
        question: "Czy tłumaczy się pieczęcie i podpisy?",
        answer:
          "Tak, elementy takie jak pieczęcie, podpisy, adnotacje i dopiski powinny zostać odnotowane albo przetłumaczone zgodnie z ich funkcją."
      },
      {
        question: "Czy tłumacz może skrócić dokument?",
        answer:
          "Nie w tłumaczeniu poświadczonym całości dokumentu. Możliwe jest tłumaczenie wyciągu albo fragmentu, ale zakres musi być jasno ustalony."
      }
    ],
    relatedSlugs: [
      "repertorium-tlumacza-przysieglego-co-oznacza",
      "wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow",
      "tlumaczenie-dokumentow-z-ukrainy-kompletny-przewodnik"
    ]
  },
  {
    slug: "repertorium-tlumacza-przysieglego-co-oznacza",
    title: "Repertorium tłumacza przysięgłego — co oznacza numer na tłumaczeniu?",
    description:
      "Wyjaśnienie, czym jest repertorium tłumacza przysięgłego, po co prowadzi się wpisy i jakie znaczenie ma numer repertorium.",
    language: "polski",
    category: "prawo zawodu",
    readTime: "5 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "repertorium tłumacza przysięgłego",
      "numer repertorium",
      "tłumaczenie poświadczone numer",
      "tłumacz przysięgły ewidencja"
    ],
    intro:
      "Numer repertorium pojawiający się na tłumaczeniu poświadczonym informuje, że czynność została ujęta w ewidencji tłumacza przysięgłego.",
    sections: [
      {
        heading: "Czym jest repertorium?",
        paragraphs: [
          "Repertorium to ewidencja czynności tłumacza przysięgłego. Wpisy dotyczą tłumaczeń pisemnych, ustnych i innych czynności wykonywanych w ramach uprawnień tłumacza.",
          "Dla klienta numer repertorium jest jednym z elementów formalnych tłumaczenia poświadczonego."
        ]
      },
      {
        heading: "Co oznacza numer repertorium?",
        paragraphs: [
          "Numer repertorium pozwala zidentyfikować daną czynność w ewidencji. Nie jest to numer dokumentu źródłowego, lecz numer czynności tłumacza.",
          "Numer ten pojawia się zwykle przy formule poświadczającej, obok podpisu i pieczęci albo danych dotyczących podpisu elektronicznego."
        ]
      },
      {
        heading: "Dlaczego to ważne?",
        paragraphs: [
          "Repertorium porządkuje czynności tłumacza i wzmacnia formalny charakter tłumaczenia poświadczonego.",
          "W przypadku dokumentów sądowych, urzędowych i procesowych numer repertorium jest naturalnym elementem tłumaczenia."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy numer repertorium jest obowiązkowy?",
        answer:
          "Numer repertorium jest standardowym elementem czynności tłumacza przysięgłego i pojawia się w tłumaczeniu poświadczonym."
      },
      {
        question: "Czy klient może wybrać numer repertorium?",
        answer:
          "Nie. Numer wynika z kolejności i zasad prowadzenia ewidencji przez tłumacza."
      },
      {
        question: "Czy tłumaczenie elektroniczne też może mieć numer repertorium?",
        answer:
          "Tak. Tłumaczenie poświadczone elektronicznie również jest czynnością tłumacza przysięgłego i może być ujęte w repertorium."
      }
    ],
    relatedSlugs: [
      "ustawa-o-zawodzie-tlumacza-przysieglego-zasady",
      "jak-tlumaczy-sie-dokumenty-etapy-pracy",
      "wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow"
    ]
  },
  {
    slug: "jakie-tlumaczenia-wymagaja-tlumacza-przysieglego",
    title: "Jakie tłumaczenia wymagają tłumacza przysięgłego?",
    description:
      "Lista najczęstszych dokumentów i sytuacji, w których instytucje wymagają tłumaczenia poświadczonego.",
    language: "polski",
    category: "tłumaczenia poświadczone",
    readTime: "6 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "jakie tłumaczenia wymagają tłumacza przysięgłego",
      "tłumaczenie przysięgłe dokumentów",
      "tłumaczenie poświadczone dokumentów",
      "dokumenty do urzędu tłumacz przysięgły"
    ],
    intro:
      "Tłumacz przysięgły jest zwykle potrzebny wtedy, gdy dokument ma zostać przedstawiony instytucji i ma wywołać skutek formalny.",
    sections: [
      {
        heading: "Dokumenty urzędowe",
        paragraphs: [
          "Do tej grupy należą między innymi akty stanu cywilnego, zaświadczenia, decyzje, odpisy, dokumenty pobytowe, dokumenty edukacyjne i dokumenty administracyjne.",
          "Instytucje często wymagają tłumaczenia poświadczonego, ponieważ dokument ma zostać włączony do sprawy albo stanowić podstawę czynności urzędowej."
        ]
      },
      {
        heading: "Dokumenty sądowe i procesowe",
        paragraphs: [
          "Tłumaczenia poświadczone mogą być potrzebne w sprawach karnych, cywilnych, rodzinnych, gospodarczych i administracyjnych.",
          "Dotyczy to pozwów, wyroków, postanowień, protokołów, pełnomocnictw, akt sprawy, dokumentów dowodowych i korespondencji procesowej."
        ]
      },
      {
        heading: "Dokumenty prywatne używane formalnie",
        paragraphs: [
          "Dokument prywatny również może wymagać tłumaczenia poświadczonego, jeżeli ma zostać złożony w urzędzie, sądzie, u notariusza, w banku, uczelni albo przed inną instytucją.",
          "Przykładem mogą być umowy, oświadczenia, pełnomocnictwa, dokumenty rodzinne, zaświadczenia od pracodawcy albo dokumenty potwierdzające określone zdarzenie."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy urząd zawsze wymaga tłumaczenia przysięgłego?",
        answer:
          "Nie zawsze, ale bardzo często przy dokumentach zagranicznych. Warto sprawdzić wymóg w konkretnej instytucji."
      },
      {
        question: "Czy sąd przyjmie tłumaczenie zwykłe?",
        answer:
          "To zależy od rodzaju sprawy i decyzji sądu. W praktyce dokumenty procesowe i dowodowe często wymagają tłumaczenia poświadczonego."
      },
      {
        question: "Czy dokument cyfrowy może wymagać tłumacza przysięgłego?",
        answer:
          "Tak, jeżeli jego treść ma znaczenie dowodowe albo formalne w sprawie."
      }
    ],
    relatedSlugs: [
      "tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny",
      "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski",
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto"
    ]
  },
  {
    slug: "tlumaczenie-dokumentow-z-ukrainy-kompletny-przewodnik",
    title: "Jak przygotować dokumenty z Ukrainy do tłumaczenia?",
    description:
      "Praktyczny przewodnik: skany, zdjęcia, PDF, pieczęcie, podpisy, kompletność dokumentu i cel tłumaczenia.",
    language: "ukraiński",
    category: "dokumenty z Ukrainy",
    readTime: "7 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "dokumenty z Ukrainy",
      "tłumaczenie aktu urodzenia z Ukrainy",
      "tłumaczenie dyplomu z Ukrainy",
      "tłumacz ukraiński"
    ],
    intro:
      "Dobre przygotowanie dokumentu z Ukrainy skraca czas oceny, ułatwia wycenę i zmniejsza ryzyko błędów wynikających z nieczytelnego skanu albo braku stron.",
    sections: [
      {
        heading: "Czytelny skan albo zdjęcie",
        paragraphs: [
          "Dokument powinien być widoczny w całości. Ważne są krawędzie dokumentu, numery stron, pieczęcie, podpisy, adnotacje, dopiski i załączniki.",
          "Zdjęcie wykonane pod kątem, ucięte albo rozmazane może utrudnić ocenę dokumentu. Warto wykonać zdjęcie przy dobrym świetle i bez cieni."
        ]
      },
      {
        heading: "Wszystkie strony dokumentu",
        paragraphs: [
          "Niektóre dokumenty zawierają istotne informacje na odwrocie albo w załącznikach. Do wstępnej oceny warto przekazać cały dokument, nawet jeżeli część stron wydaje się pusta.",
          "Przy dyplomach, świadectwach i suplementach znaczenie mogą mieć tabele, wykazy przedmiotów, oceny, numery dokumentu i pieczęcie uczelni."
        ]
      },
      {
        heading: "Cel tłumaczenia",
        paragraphs: [
          "W wiadomości warto wskazać, czy dokument ma być złożony w urzędzie, sądzie, uczelni, banku, kancelarii, miejscu pracy albo innej instytucji.",
          "Cel tłumaczenia pomaga ustalić, czy potrzebne jest tłumaczenie poświadczone, tłumaczenie zwykłe, wyciąg, tłumaczenie całości dokumentu albo wstępna analiza zakresu."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy muszę przynieść oryginał dokumentu?",
        answer:
          "Do wstępnej oceny wystarczy skan albo zdjęcie. Przy tłumaczeniu poświadczonym należy ustalić, czy tłumaczenie ma być sporządzone z oryginału, kopii albo skanu."
      },
      {
        question: "Czy tłumaczy się pieczęcie?",
        answer:
          "Tak, pieczęcie i inne elementy formalne dokumentu powinny zostać odnotowane albo przetłumaczone zgodnie z ich funkcją."
      },
      {
        question: "Czy mogę wysłać wiele dokumentów naraz?",
        answer:
          "Tak. Przy większym zestawie warto opisać, które dokumenty są najpilniejsze i do jakiego celu będą użyte."
      }
    ],
    relatedSlugs: [
      "tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny",
      "jakie-tlumaczenia-wymagaja-tlumacza-przysieglego",
      "wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow"
    ]
  },
  {
    slug: "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski",
    title: "Tłumaczenia dla sądu, Policji i prokuratury",
    description:
      "Opis materiałów procesowych, akt sprawy, protokołów, korespondencji i dokumentów dowodowych w języku ukraińskim, rosyjskim i angielskim.",
    language: "ukraiński / rosyjski / angielski",
    category: "organy i instytucje",
    readTime: "7 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumaczenia dla sądu",
      "tłumaczenia dla Policji",
      "tłumaczenia dla prokuratury",
      "tłumaczenie akt sprawy"
    ],
    intro:
      "W materiałach dla sądów, Policji i prokuratury znaczenie ma precyzja, spójność terminologiczna i zachowanie funkcji dokumentu.",
    sections: [
      {
        heading: "Dokumenty sądowe",
        paragraphs: [
          "Tłumaczeniu mogą podlegać wyroki, postanowienia, pisma procesowe, załączniki, dokumenty dowodowe, pełnomocnictwa, akta sprawy i korespondencja stron.",
          "W sprawach z elementem zagranicznym dokument może pochodzić z Ukrainy, być sporządzony po rosyjsku albo zawierać fragmenty w języku angielskim."
        ]
      },
      {
        heading: "Materiały policyjne i prokuratorskie",
        paragraphs: [
          "W praktyce pojawiają się protokoły przesłuchań, pouczenia, zawiadomienia, notatki urzędowe, dokumenty tożsamości, komunikatory, zrzuty ekranu i materiał cyfrowy.",
          "Tłumaczenie powinno zachować oznaczenia osób, daty, godziny, kolejność wypowiedzi, numery dokumentów i elementy formalne."
        ]
      },
      {
        heading: "Materiał dowodowy",
        paragraphs: [
          "Materiał dowodowy może mieć formę dokumentu, zdjęcia, pliku PDF, wiadomości, zrzutu ekranu, raportu albo eksportu danych.",
          "Do wstępnej oceny warto opisać, czy materiał ma zostać przetłumaczony w całości, czy tylko wybrane fragmenty."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy organ może wysłać materiał do wstępnej oceny?",
        answer:
          "Tak. W pierwszej wiadomości wystarczy opisać rodzaj materiału, język, objętość i termin."
      },
      {
        question: "Czy tłumaczy się zrzuty ekranu?",
        answer:
          "Tak, jeżeli są istotne dla sprawy. Ważna jest kolejność, kontekst i czytelność materiału."
      },
      {
        question: "Czy można przekazać większy zestaw akt?",
        answer:
          "Tak. Przy większym materiale warto wskazać priorytety, zakres i termin."
      }
    ],
    relatedSlugs: [
      "tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski",
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto",
      "jak-tlumaczy-sie-dokumenty-etapy-pracy"
    ]
  },
  {
    slug: "tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski",
    title: "Tłumaczenia w sprawach karnych",
    description:
      "Protokoły, akty oskarżenia, wyjaśnienia, zeznania, dokumenty dowodowe, komunikatory i materiał cyfrowy.",
    language: "ukraiński / rosyjski / angielski",
    category: "sprawy karne",
    readTime: "7 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumaczenia w sprawach karnych",
      "tłumaczenie protokołu",
      "tłumaczenie aktu oskarżenia",
      "tłumaczenie zeznań"
    ],
    intro:
      "Sprawy karne wymagają szczególnej dokładności, ponieważ dokument może mieć znaczenie dowodowe, procesowe albo organizacyjne.",
    sections: [
      {
        heading: "Protokoły i czynności procesowe",
        paragraphs: [
          "Tłumaczeniu mogą podlegać protokoły przesłuchań, wyjaśnienia, zeznania, pouczenia, notatki, zawiadomienia i dokumenty z akt sprawy.",
          "W takich dokumentach znaczenie mają terminy procesowe, oznaczenia osób, daty, numery spraw i funkcja dokumentu."
        ]
      },
      {
        heading: "Materiał cyfrowy w sprawie karnej",
        paragraphs: [
          "W sprawach karnych często występują rozmowy z komunikatorów, SMS-y, potwierdzenia transakcji, BLIK, kryptowaluty, dokumenty platform internetowych i raporty techniczne.",
          "Tłumaczenie powinno pomagać w analizie materiału, dlatego istotne są kolejność wypowiedzi, nadawcy, odbiorcy, daty, godziny i identyfikatory."
        ]
      },
      {
        heading: "Języki w sprawach karnych",
        paragraphs: [
          "W jednej sprawie mogą występować fragmenty po ukraińsku, rosyjsku i angielsku. Warto przekazać materiał do wstępnej oceny, jeżeli język nie jest pewny.",
          "Dotyczy to szczególnie korespondencji, komunikatorów, dokumentów platform i materiałów z telefonu."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy można tłumaczyć tylko fragment akt?",
        answer:
          "Tak, jeżeli zakres zostanie jasno określony. Warto wskazać strony, pliki albo fragmenty do tłumaczenia."
      },
      {
        question: "Czy materiał z komunikatora nadaje się do tłumaczenia?",
        answer:
          "Tak, ale powinien być czytelny i uporządkowany. Ważne są daty, godziny i kolejność wiadomości."
      },
      {
        question: "Czy tłumaczenie może być pilne?",
        answer:
          "Może, ale tryb pilny wymaga wcześniejszego ustalenia zakresu, objętości i terminu."
      }
    ],
    relatedSlugs: [
      "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski",
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto",
      "wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow"
    ]
  },
  {
    slug: "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto",
    title: "Materiał cyfrowy: komunikatory, BLIK, krypto i forensic",
    description:
      "Omówienie tłumaczeń materiału cyfrowego w sprawach sądowych, karnych i dotyczących cyberoszustw.",
    language: "ukraiński / rosyjski / angielski",
    category: "cyber i forensic",
    readTime: "8 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumaczenie materiału cyfrowego",
      "tłumaczenie komunikatorów",
      "tłumaczenie BLIK",
      "tłumaczenie kryptowaluty",
      "forensic tłumaczenie"
    ],
    intro:
      "Materiał cyfrowy wymaga innego podejścia niż klasyczny dokument. Oprócz treści znaczenie mają daty, godziny, nadawcy, odbiorcy, identyfikatory, zrzuty ekranu i kolejność zdarzeń.",
    sections: [
      {
        heading: "Komunikatory i zrzuty ekranu",
        paragraphs: [
          "WhatsApp, Telegram, Messenger, Signal, SMS i inne kanały komunikacji wymagają zachowania kolejności wypowiedzi oraz opisania kontekstu rozmowy.",
          "W tłumaczeniu mogą być istotne nazwy profili, numery telefonu, daty, godziny, reakcje, załączniki i oznaczenia wiadomości."
        ]
      },
      {
        heading: "BLIK, płatności i oszustwa internetowe",
        paragraphs: [
          "W sprawach BLIK, phishingu i oszustw internetowych tłumaczeniu mogą podlegać potwierdzenia transakcji, komunikaty platform, wiadomości, dane rachunków i korespondencja z podmiotami zagranicznymi.",
          "Dokładne odwzorowanie treści komunikatów jest ważne, ponieważ pojedynczy komunikat może mieć znaczenie dowodowe."
        ]
      },
      {
        heading: "Kryptowaluty i platformy internetowe",
        paragraphs: [
          "Materiał może obejmować portfele, giełdy, identyfikatory transakcji, raporty, regulaminy platform i korespondencję w języku angielskim.",
          "W takich sprawach należy zachować ostrożność przy nazwach własnych, skrótach, identyfikatorach i terminologii technicznej."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy można tłumaczyć zrzuty ekranu?",
        answer:
          "Tak. Zrzuty powinny być czytelne, najlepiej uporządkowane chronologicznie i opisane według źródła."
      },
      {
        question: "Czy tłumaczy się identyfikatory transakcji?",
        answer:
          "Identyfikatory zwykle nie są tłumaczone, ale powinny zostać zachowane i czytelnie przeniesione do tłumaczenia."
      },
      {
        question: "Czy materiał cyfrowy może wymagać tłumaczenia poświadczonego?",
        answer:
          "Tak, jeżeli ma być użyty w sprawie sądowej, urzędowej albo dowodowej."
      }
    ],
    relatedSlugs: [
      "tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski",
      "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski",
      "jak-tlumaczy-sie-dokumenty-etapy-pracy"
    ]
  },
  {
    slug: "tlumacz-przysiegly-jezyka-rosyjskiego-dokumenty-i-sprawy",
    title: "Tłumacz przysięgły języka rosyjskiego — dokumenty i sprawy",
    description:
      "Kiedy potrzebne jest tłumaczenie poświadczone z rosyjskiego i jakie dokumenty rosyjskojęzyczne trafiają do tłumaczenia.",
    language: "rosyjski",
    category: "tłumaczenia poświadczone",
    readTime: "6 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumacz przysięgły rosyjski",
      "tłumaczenia rosyjski",
      "dokumenty rosyjskojęzyczne",
      "tłumacz rosyjski Kraków"
    ],
    intro:
      "Dokument rosyjskojęzyczny może pochodzić z różnych państw i występować zarówno w sprawach prywatnych, jak i sądowych, urzędowych lub dowodowych.",
    sections: [
      {
        heading: "Jakie dokumenty trafiają do tłumaczenia?",
        paragraphs: [
          "Najczęściej tłumaczone są akty stanu cywilnego, zaświadczenia, dokumenty edukacyjne, dokumenty prywatne, pisma sądowe, umowy, pełnomocnictwa, korespondencja i materiał dowodowy.",
          "Język rosyjski pojawia się także w komunikatorach, dokumentach platform, raportach i materiałach cyfrowych."
        ]
      },
      {
        heading: "Rosyjski w sprawach sądowych",
        paragraphs: [
          "W sprawach sądowych tłumaczenie powinno zachować znaczenie dokumentu, jego funkcję, daty, nazwy instytucji i oznaczenia formalne.",
          "Przy dokumentach z akt sprawy warto wskazać, czy tłumaczenie ma obejmować całość, fragment, załączniki albo konkretne strony."
        ]
      },
      {
        heading: "Rozpoznanie języka",
        paragraphs: [
          "Klient nie zawsze rozróżnia język rosyjski i ukraiński. Do wstępnej oceny można przekazać zdjęcie albo skan i poprosić o rozpoznanie języka materiału.",
          "Jest to szczególnie przydatne przy dokumentach mieszanych, korespondencji i materiałach z komunikatorów."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy dokument rosyjski zawsze wymaga tłumacza przysięgłego?",
        answer:
          "Nie zawsze. Wymóg zależy od celu użycia dokumentu i instytucji, do której ma trafić."
      },
      {
        question: "Czy można tłumaczyć dokument rosyjskojęzyczny ze zdjęcia?",
        answer:
          "Do wstępnej oceny tak. Zdjęcie powinno być czytelne i obejmować cały dokument."
      },
      {
        question: "Czy rosyjski i ukraiński można ocenić na podstawie skanu?",
        answer:
          "Tak, zwykle można rozpoznać język na podstawie skanu albo zdjęcia dokumentu."
      }
    ],
    relatedSlugs: [
      "jakie-tlumaczenia-wymagaja-tlumacza-przysieglego",
      "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski",
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto"
    ]
  },
  {
    slug: "tlumaczenia-prawnicze-angielski-umowy-opinie-dokumenty",
    title: "Tłumaczenia prawnicze z języka angielskiego",
    description:
      "Umowy, opinie, dokumenty korporacyjne, dokumentacja biznesowa, prawo, technologia i dokumenty platform.",
    language: "angielski",
    category: "tłumaczenia prawnicze",
    readTime: "7 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumaczenia prawnicze angielski",
      "tłumaczenie umowy angielski",
      "tłumaczenie opinii prawnej",
      "tłumaczenia biznesowe angielski"
    ],
    intro:
      "Tłumaczenia prawnicze z języka angielskiego wymagają znajomości języka, terminologii prawnej i funkcji dokumentu w konkretnej sprawie.",
    sections: [
      {
        heading: "Umowy i dokumenty biznesowe",
        paragraphs: [
          "Do tłumaczenia trafiają umowy, aneksy, regulaminy, dokumenty spółek, dokumenty compliance, dokumentacja pracownicza, raporty i korespondencja biznesowa.",
          "W tego typu dokumentach szczególnie istotna jest spójność terminologii oraz zachowanie struktury zobowiązań, definicji i odwołań."
        ]
      },
      {
        heading: "Angielski w technologii i cyber",
        paragraphs: [
          "Język angielski często pojawia się w regulaminach platform, dokumentacji IT, raportach technicznych, opisach transakcji i komunikacji z podmiotami zagranicznymi.",
          "W sprawach cyber i forensic należy ostrożnie przenosić skróty, nazwy usług, identyfikatory i terminy techniczne."
        ]
      },
      {
        heading: "Dokumenty do sądu lub urzędu",
        paragraphs: [
          "Jeżeli dokument angielski ma trafić do sądu albo urzędu, może być potrzebne tłumaczenie poświadczone.",
          "Warto wskazać, gdzie dokument będzie składany, ponieważ wpływa to na sposób przygotowania tłumaczenia."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy umowa po angielsku wymaga tłumaczenia przysięgłego?",
        answer:
          "To zależy od celu użycia. Do analizy biznesowej może wystarczyć tłumaczenie zwykłe, ale do urzędu lub sądu może być wymagane poświadczone."
      },
      {
        question: "Czy tłumaczy się regulaminy platform internetowych?",
        answer:
          "Tak, jeżeli są potrzebne w sprawie, analizie prawnej, reklamacji, sporze albo postępowaniu."
      },
      {
        question: "Czy dokument techniczny można tłumaczyć razem z prawnym?",
        answer:
          "Tak, ale trzeba uwzględnić oba poziomy: terminologię prawną i techniczną."
      }
    ],
    relatedSlugs: [
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto",
      "jak-tlumaczy-sie-dokumenty-etapy-pracy",
      "wynagrodzenie-tlumacza-przysieglego-strona-1125-znakow"
    ]
  }
];

export function getAllArticles() {
  return [...blogArticles].sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
}

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slugs: string[]) {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is BlogArticle => Boolean(article));
}

export function getArticlesByLanguage(language: string) {
  return getAllArticles().filter((article) =>
    article.language.toLowerCase().includes(language.toLowerCase())
  );
}

export function getArticlesByCategory(category: string) {
  return getAllArticles().filter((article) =>
    article.category.toLowerCase().includes(category.toLowerCase())
  );
}