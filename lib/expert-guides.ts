export type ExpertGuideSection = {
  heading: string;
  paragraphs: string[];
};

export type ExpertGuideFaq = {
  question: string;
  answer: string;
};

export type ExpertGuide = {
  title: string;
  slug: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  keywords: string[];
  summary: string;
  sections: ExpertGuideSection[];
  faqs: ExpertGuideFaq[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
};

export const expertGuides: ExpertGuide[] = [
  {
    title: "Tłumaczenie dowodów cyfrowych w sprawach karnych",
    slug: "tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych",
    description:
      "Praktyczny przewodnik dla osób, które muszą przedstawić w Polsce tłumaczenie wiadomości, zrzutów ekranu, korespondencji elektronicznej lub materiałów cyfrowych w sprawie karnej.",
    category: "Dowody cyfrowe",
    date: "2026-06-24",
    readingTime: "7 min",
    keywords: [
      "tłumaczenie dowodów cyfrowych",
      "tłumacz przysięgły ukraiński",
      "sprawa karna",
      "zrzuty ekranu",
      "korespondencja elektroniczna"
    ],
    summary:
      "Dowody cyfrowe wymagają szczególnej precyzji językowej, spójnego opisu kontekstu oraz ostrożności przy zachowaniu chronologii i oznaczeń technicznych.",
    sections: [
      {
        heading: "Dlaczego dowody cyfrowe wymagają ostrożnego tłumaczenia",
        paragraphs: [
          "Materiały cyfrowe często obejmują wiadomości, nazwy użytkowników, daty, godziny, identyfikatory, skróty oraz fragmenty rozmów wyrwane z szerszego kontekstu. W tłumaczeniu nie chodzi wyłącznie o przełożenie słów, ale także o zachowanie układu, kolejności i relacji między elementami.",
          "W praktyce błędne odczytanie jednego skrótu, pseudonimu albo znacznika czasu może zmienić sens całej wypowiedzi. Dlatego tłumaczenie powinno być wykonane w sposób możliwie neutralny, wierny i konsekwentny."
        ]
      },
      {
        heading: "Jak przygotować materiał do tłumaczenia",
        paragraphs: [
          "Najlepiej przekazać komplet materiałów w możliwie czytelnej formie: pliki PDF, zrzuty ekranu, eksport rozmowy albo skany z akt. Jeżeli materiał zawiera kilka rozmów, warto zachować kolejność stron i nie usuwać elementów takich jak data, godzina, nazwa aplikacji lub identyfikator rozmówcy.",
          "Jeżeli dokument ma trafić do sądu, Policji, Prokuratury lub pełnomocnika, należy unikać samodzielnego skracania treści. Tłumacz powinien widzieć pełny kontekst."
        ]
      },
      {
        heading: "Co powinno pozostać bez zmian",
        paragraphs: [
          "Nie tłumaczy się dowolnie nazw użytkowników, numerów, adresów e-mail, identyfikatorów transakcji ani nazw plików. Takie elementy zwykle pozostają w oryginalnej formie, a tłumaczeniu podlega treść wypowiedzi oraz ewentualne oznaczenia systemowe, jeżeli mają znaczenie dla odbiorcy.",
          "Ważne jest także rozróżnienie między tłumaczeniem tekstu widocznego w materiale a opisem elementów technicznych. Opis nie powinien zastępować treści źródłowej."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy zrzuty ekranu można tłumaczyć przysięgle?",
        answer:
          "Tak, jeżeli ich treść jest czytelna i możliwa do jednoznacznego odczytania. W razie wątpliwości warto przekazać plik w lepszej jakości albo dodatkowy eksport rozmowy."
      },
      {
        question: "Czy tłumacz powinien poprawiać błędy językowe w rozmowie?",
        answer:
          "Nie. Błędy, potoczność, urwane zdania i styl wypowiedzi powinny być oddane możliwie wiernie, ponieważ mogą mieć znaczenie dowodowe."
      }
    ],
    relatedLinks: [
      { label: "Tłumaczenia ukraińskie", href: "/ukrainski" },
      { label: "Sprawy karne", href: "/sprawy-karne" },
      { label: "Tematy eksperckie", href: "/tematy" }
    ]
  },
  {
    title: "Tłumaczenie korespondencji z Telegrama, WhatsAppa i Signal",
    slug: "tlumaczenie-korespondencji-telegram-whatsapp-signal",
    description:
      "Jak przygotować do tłumaczenia rozmowy z komunikatorów internetowych, aby zachować chronologię, kontekst i przydatność materiału dla kancelarii, sądu lub organów ścigania.",
    category: "Komunikatory",
    date: "2026-06-24",
    readingTime: "6 min",
    keywords: [
      "tłumaczenie Telegram",
      "tłumaczenie WhatsApp",
      "tłumaczenie Signal",
      "tłumaczenie rozmów",
      "dowody z komunikatora"
    ],
    summary:
      "Korespondencja z komunikatorów powinna być tłumaczona z zachowaniem kolejności wypowiedzi, oznaczeń rozmówców oraz elementów technicznych widocznych w materiale.",
    sections: [
      {
        heading: "Najczęstszy problem: brak kontekstu",
        paragraphs: [
          "Rozmowy z komunikatorów bywają przedstawiane jako pojedyncze zrzuty ekranu. Często brakuje wcześniejszych wiadomości, dat, informacji o uczestnikach lub ciągłości rozmowy.",
          "Dla tłumaczenia istotne jest nie tylko to, co napisano, ale również kto napisał, kiedy, w jakiej kolejności i czy wiadomość była odpowiedzią na wcześniejszy fragment."
        ]
      },
      {
        heading: "Jak zachować czytelność rozmowy",
        paragraphs: [
          "Najbezpieczniej przekazywać materiał jako uporządkowany PDF albo eksport rozmowy. Jeżeli dostępne są tylko zdjęcia ekranu, należy zachować ich kolejność i nie zmieniać nazw plików, o ile wskazują chronologię.",
          "W tłumaczeniu warto zachować podział na wypowiedzi, daty, godziny i nazwy rozmówców, ponieważ ułatwia to późniejszą analizę materiału."
        ]
      },
      {
        heading: "Elementy techniczne w tłumaczeniu",
        paragraphs: [
          "Komunikatory mogą zawierać oznaczenia typu: edytowano, przesłano dalej, usunięto wiadomość, załącznik, reakcja, połączenie nieodebrane. Jeżeli takie elementy są widoczne i mają znaczenie, powinny zostać uwzględnione.",
          "Nie należy zastępować ich ogólnym opisem, jeżeli można je precyzyjnie oddać w języku docelowym."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy można tłumaczyć rozmowę bez danych rozmówcy?",
        answer:
          "Można, ale brak danych rozmówcy może ograniczać wartość kontekstową materiału. Tłumacz tłumaczy to, co wynika z przekazanego dokumentu."
      },
      {
        question: "Czy emoji mają znaczenie w tłumaczeniu?",
        answer:
          "Mogą mieć znaczenie. Zwykle pozostawia się je albo opisuje w sposób neutralny, jeżeli są istotne dla zrozumienia wypowiedzi."
      }
    ],
    relatedLinks: [
      { label: "Tłumaczenia prawnicze", href: "/tlumaczenia-prawnicze" },
      { label: "Tłumaczenia ukraińskie", href: "/ukrainski" },
      { label: "Dowody cyfrowe", href: "/tematy" }
    ]
  },
  {
    title: "Tłumaczenie dokumentów z Ukrainy do sądu w Polsce",
    slug: "tlumaczenie-dokumentow-z-ukrainy-do-sadu-w-polsce",
    description:
      "Co warto wiedzieć przed zleceniem tłumaczenia dokumentów ukraińskich przeznaczonych do akt sprawy sądowej w Polsce.",
    category: "Dokumenty z Ukrainy",
    date: "2026-06-24",
    readingTime: "7 min",
    keywords: [
      "tłumaczenie dokumentów z Ukrainy",
      "tłumacz przysięgły ukraiński",
      "dokumenty do sądu",
      "akty sądowe",
      "tłumaczenie poświadczone"
    ],
    summary:
      "Dokumenty z Ukrainy przeznaczone do sądu wymagają precyzyjnego tłumaczenia nazw organów, sygnatur, dat, pieczęci i pouczeń.",
    sections: [
      {
        heading: "Jakie dokumenty pojawiają się najczęściej",
        paragraphs: [
          "Do tłumaczenia trafiają między innymi akty stanu cywilnego, pełnomocnictwa, wyroki, postanowienia, zaświadczenia, decyzje administracyjne, dokumenty szkolne, dokumenty medyczne oraz materiały z postępowań karnych lub cywilnych.",
          "Każdy z tych dokumentów ma własną strukturę i terminologię. W tłumaczeniu trzeba zachować nie tylko sens, ale także funkcję dokumentu."
        ]
      },
      {
        heading: "Dlaczego nazwy organów są ważne",
        paragraphs: [
          "Ukraińskie nazwy sądów, urzędów, organów ścigania i jednostek administracyjnych nie zawsze mają bezpośredni odpowiednik w języku polskim. Dlatego tłumaczenie powinno być opisowe i jednoznaczne.",
          "Nieprecyzyjne tłumaczenie nazwy organu może utrudnić ocenę dokumentu przez pełnomocnika, sąd lub urząd."
        ]
      },
      {
        heading: "Co przekazać tłumaczowi",
        paragraphs: [
          "Najlepiej przekazać pełny dokument, wszystkie strony, załączniki oraz skany pieczęci. Jeżeli dokument jest częścią większej sprawy, warto poinformować, do jakiego celu ma zostać użyty.",
          "Nie oznacza to ingerowania w treść tłumaczenia, ale pomaga dobrać właściwy poziom precyzji terminologicznej."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy każda strona dokumentu musi być przetłumaczona?",
        answer:
          "Jeżeli dokument ma zostać przedłożony jako całość, zwykle tłumaczy się wszystkie strony wraz z widocznymi adnotacjami, pieczęciami i podpisami."
      },
      {
        question: "Czy można tłumaczyć zdjęcie dokumentu?",
        answer:
          "Można, jeżeli zdjęcie jest czytelne. Dla dokumentów urzędowych lepszy jest skan w dobrej jakości."
      }
    ],
    relatedLinks: [
      { label: "Tłumaczenia ukraińskie", href: "/ukrainski" },
      { label: "Sprawy cywilne", href: "/sprawy-cywilne" },
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" }
    ]
  },
  {
    title: "Tłumaczenie akt sprawy karnej z języka ukraińskiego",
    slug: "tlumaczenie-akt-sprawy-karnej-z-jezyka-ukrainskiego",
    description:
      "Jak wygląda tłumaczenie materiałów procesowych, protokołów, zawiadomień, pouczeń i korespondencji w sprawach karnych.",
    category: "Sprawy karne",
    date: "2026-06-24",
    readingTime: "8 min",
    keywords: [
      "tłumaczenie akt karnych",
      "język ukraiński",
      "protokół przesłuchania",
      "zawiadomienie o przestępstwie",
      "prokuratura"
    ],
    summary:
      "Akta sprawy karnej wymagają spójności terminologicznej, ostrożnego tłumaczenia czynności procesowych i zachowania formalnego charakteru dokumentów.",
    sections: [
      {
        heading: "Zakres materiałów w sprawie karnej",
        paragraphs: [
          "W sprawach karnych tłumaczeniu mogą podlegać protokoły przesłuchań, zawiadomienia, postanowienia, pouczenia, opinie, korespondencja, załączniki oraz materiały cyfrowe.",
          "Każdy z tych elementów może mieć znaczenie dla obrony, oskarżenia, pełnomocnika lub organu prowadzącego postępowanie."
        ]
      },
      {
        heading: "Terminologia procesowa",
        paragraphs: [
          "Tłumaczenie powinno zachowywać rozróżnienie między osobą podejrzaną, oskarżonym, pokrzywdzonym, świadkiem, pełnomocnikiem i obrońcą. Nieprecyzyjne użycie tych określeń może prowadzić do nieporozumień.",
          "Podobnie należy uważać na nazwy czynności procesowych oraz dokumentów wydawanych przez organy."
        ]
      },
      {
        heading: "Spójność w większych zleceniach",
        paragraphs: [
          "Jeżeli tłumaczeniu podlega większy pakiet akt, warto zachować jednolitą terminologię w całym materiale. Dotyczy to nazw organów, kwalifikacji czynów, nazw dokumentów oraz oznaczeń stron.",
          "Przy obszernych aktach pomocna jest wcześniejsza selekcja materiału przez pełnomocnika, ale samo tłumaczenie powinno pozostać wierne przekazanemu dokumentowi."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy można zlecić tłumaczenie tylko części akt?",
        answer:
          "Tak, jeżeli taka część została wybrana przez osobę zlecającą lub pełnomocnika. Tłumacz nie powinien samodzielnie decydować, które fragmenty są procesowo istotne."
      },
      {
        question: "Czy protokoły przesłuchań tłumaczy się dosłownie?",
        answer:
          "Należy zachować możliwie wierny sens, styl i strukturę wypowiedzi, przy jednoczesnym użyciu poprawnej terminologii w języku docelowym."
      }
    ],
    relatedLinks: [
      { label: "Sprawy karne", href: "/sprawy-karne" },
      { label: "Sądy, Policja, Prokuratura", href: "/tematy/sady-policja-prokuratura" },
      { label: "Tłumaczenia rosyjskie", href: "/rosyjski" }
    ]
  },
  {
    title: "Tłumaczenie materiałów dotyczących oszustw internetowych i BLIK",
    slug: "tlumaczenie-materialow-dotyczacych-oszustw-internetowych-i-blik",
    description:
      "Przewodnik po tłumaczeniu materiałów związanych z oszustwami internetowymi, wyłudzeniami, przelewami, kodami BLIK i korespondencją z platform cyfrowych.",
    category: "Cyberprzestępczość",
    date: "2026-06-24",
    readingTime: "7 min",
    keywords: [
      "tłumaczenie oszustwo BLIK",
      "cyberprzestępczość",
      "tłumaczenie wyłudzeń",
      "dowody cyfrowe",
      "transakcje internetowe"
    ],
    summary:
      "Materiały dotyczące oszustw internetowych łączą język potoczny, techniczny i prawny, dlatego wymagają spójnego tłumaczenia danych, rozmów i opisów transakcji.",
    sections: [
      {
        heading: "Jakie materiały są tłumaczone",
        paragraphs: [
          "W tego rodzaju sprawach pojawiają się rozmowy z komunikatorów, potwierdzenia przelewów, wiadomości SMS, e-maile, zrzuty ekranu aplikacji bankowych, dane kont i opisy transakcji.",
          "Tłumaczenie powinno zachować identyfikatory, numery, daty, godziny i oznaczenia systemowe bez nieuzasadnionych zmian."
        ]
      },
      {
        heading: "Język potoczny i techniczny",
        paragraphs: [
          "Sprawcy i pokrzywdzeni często używają języka potocznego, skrótów, literówek i zapożyczeń. Jednocześnie dokumenty bankowe lub procesowe posługują się językiem formalnym.",
          "Dobry przekład powinien rozróżniać te rejestry i nie ujednolicać ich sztucznie."
        ]
      },
      {
        heading: "Znaczenie chronologii",
        paragraphs: [
          "W sprawach o oszustwa internetowe kolejność zdarzeń jest szczególnie ważna: kontakt, prośba o kod, potwierdzenie, transakcja, blokada konta, zgłoszenie sprawy.",
          "Jeżeli materiał jest przekazywany do tłumaczenia, warto zachować chronologię plików oraz pełny układ rozmowy."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy numery rachunków i kody trzeba tłumaczyć?",
        answer:
          "Nie tłumaczy się ich znaczeniowo. Zwykle pozostają jako dane identyfikacyjne, z zachowaniem ich pierwotnej postaci."
      },
      {
        question: "Czy tłumacz ocenia, czy doszło do oszustwa?",
        answer:
          "Nie. Tłumacz przekłada materiał językowo. Ocena prawna i dowodowa należy do właściwych osób lub organów."
      }
    ],
    relatedLinks: [
      { label: "Cyberbezpieczeństwo", href: "/poradniki" },
      { label: "Dowody cyfrowe", href: "/tematy" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumaczenie dokumentacji kryptowalutowej i blockchain",
    slug: "tlumaczenie-dokumentacji-kryptowalutowej-i-blockchain",
    description:
      "Jak tłumaczyć dokumenty, korespondencję i materiały dotyczące kryptowalut, giełd, portfeli, transakcji oraz technologii blockchain.",
    category: "Blockchain",
    date: "2026-06-24",
    readingTime: "7 min",
    keywords: [
      "tłumaczenie kryptowaluty",
      "tłumaczenie blockchain",
      "portfel kryptowalutowy",
      "giełda kryptowalut",
      "transakcje blockchain"
    ],
    summary:
      "Materiały kryptowalutowe wymagają połączenia terminologii technicznej, finansowej i prawnej oraz ostrożnego traktowania adresów, hashy i identyfikatorów transakcji.",
    sections: [
      {
        heading: "Co występuje w dokumentacji kryptowalutowej",
        paragraphs: [
          "Do tłumaczenia mogą trafić regulaminy platform, korespondencja z giełdą, potwierdzenia transakcji, zrzuty ekranu portfela, opisy tokenów, zawiadomienia oraz materiały procesowe.",
          "Część terminologii nie ma jednego oczywistego odpowiednika, dlatego tłumaczenie musi być konsekwentne."
        ]
      },
      {
        heading: "Adresy, hashe i identyfikatory",
        paragraphs: [
          "Adresy portfeli, hashe transakcji, identyfikatory kont i oznaczenia sieci nie są tłumaczone. Powinny pozostać w pierwotnym brzmieniu.",
          "Błąd w jednym znaku może mieć znaczenie praktyczne, dlatego takie elementy wymagają szczególnej kontroli."
        ]
      },
      {
        heading: "Język techniczny a język prawny",
        paragraphs: [
          "Dokumenty blockchain często mieszają pojęcia techniczne z regulaminowymi albo prawnymi. Tłumaczenie powinno zachować tę strukturę, zamiast upraszczać treść.",
          "W sprawach spornych ważne jest, aby odbiorca tłumaczenia widział, które elementy pochodzą z platformy, a które z korespondencji użytkownika."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy hash transakcji należy przepisywać w tłumaczeniu?",
        answer:
          "Tak, jeżeli widnieje w materiale źródłowym. Powinien zostać zachowany bez tłumaczenia znaczeniowego."
      },
      {
        question: "Czy terminy typu wallet, exchange, token zawsze tłumaczy się na polski?",
        answer:
          "To zależy od kontekstu. W dokumentach formalnych można stosować polskie odpowiedniki, ale czasem zasadne jest zachowanie terminu technicznego."
      }
    ],
    relatedLinks: [
      { label: "Cyberbezpieczeństwo", href: "/poradniki" },
      { label: "Tłumaczenia angielskie", href: "/angielski" },
      { label: "Dowody cyfrowe", href: "/tematy" }
    ]
  },
  {
    title: "Rola tłumacza przysięgłego w kontaktach z Policją i Prokuraturą",
    slug: "rola-tlumacza-przysieglego-w-kontaktach-z-policja-i-prokuratura",
    description:
      "Kiedy tłumaczenie poświadczone może być potrzebne w sprawach prowadzonych przez Policję, Prokuraturę lub pełnomocnika procesowego.",
    category: "Organy ścigania",
    date: "2026-06-24",
    readingTime: "6 min",
    keywords: [
      "tłumacz przysięgły Policja",
      "tłumacz przysięgły Prokuratura",
      "tłumaczenie poświadczone",
      "sprawy karne",
      "język ukraiński"
    ],
    summary:
      "W kontaktach z organami ścigania tłumaczenie powinno być formalne, precyzyjne i przygotowane z myślą o dalszym użyciu procesowym.",
    sections: [
      {
        heading: "Kiedy tłumaczenie może być potrzebne",
        paragraphs: [
          "Tłumaczenie może być potrzebne przy zawiadomieniu, korespondencji z organem, przedłożeniu dokumentów, wyjaśnieniu treści materiału albo przygotowaniu załączników do pisma.",
          "Dotyczy to zarówno dokumentów urzędowych, jak i korespondencji prywatnej, jeżeli ma zostać użyta w sprawie."
        ]
      },
      {
        heading: "Neutralność tłumaczenia",
        paragraphs: [
          "Tłumacz nie wzmacnia argumentacji strony i nie ocenia wiarygodności materiału. Jego zadaniem jest wierne oddanie treści w języku docelowym.",
          "Taka neutralność jest szczególnie ważna w sprawach, w których materiał może być analizowany przez kilka podmiotów."
        ]
      },
      {
        heading: "Praktyczne przygotowanie dokumentów",
        paragraphs: [
          "Przed zleceniem tłumaczenia warto ustalić, czy potrzebne jest tłumaczenie całości, wybranych załączników, czy tylko konkretnego dokumentu.",
          "Jeżeli sprawa jest pilna, należy od razu wskazać termin, objętość i cel użycia tłumaczenia."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy tłumacz kontaktuje się bezpośrednio z Policją lub Prokuraturą?",
        answer:
          "Zależy to od konkretnej sprawy i trybu zlecenia. W zleceniach prywatnych tłumacz najczęściej przygotowuje dokument dla osoby zlecającej lub pełnomocnika."
      },
      {
        question: "Czy tłumaczenie może dotyczyć załączników do zawiadomienia?",
        answer:
          "Tak. Załączniki, korespondencja i dokumenty pomocnicze często wymagają tłumaczenia, jeżeli są sporządzone w języku obcym."
      }
    ],
    relatedLinks: [
      { label: "Sądy, Policja, Prokuratura", href: "/tematy/sady-policja-prokuratura" },
      { label: "Sprawy karne", href: "/sprawy-karne" },
      { label: "Kontakt", href: "/kontakt" }
    ]
  },
  {
    title: "Tłumaczenie pełnomocnictw, wyroków i zaświadczeń z Ukrainy",
    slug: "tlumaczenie-pelnomocnictw-wyrokow-i-zaswiadczen-z-ukrainy",
    description:
      "Jakie elementy dokumentów urzędowych z Ukrainy są szczególnie istotne przy tłumaczeniu poświadczonym na język polski.",
    category: "Dokumenty urzędowe",
    date: "2026-06-24",
    readingTime: "6 min",
    keywords: [
      "tłumaczenie pełnomocnictwa z Ukrainy",
      "tłumaczenie wyroku z Ukrainy",
      "tłumaczenie zaświadczenia",
      "tłumacz przysięgły ukraiński",
      "dokumenty urzędowe"
    ],
    summary:
      "Dokumenty urzędowe z Ukrainy wymagają zachowania struktury, nazw organów, dat, numerów, podpisów, pieczęci i adnotacji.",
    sections: [
      {
        heading: "Pełnomocnictwa",
        paragraphs: [
          "Pełnomocnictwa często zawierają dane osobowe, zakres umocowania, daty, podpisy, oznaczenia notarialne i wzmianki urzędowe. Każdy z tych elementów powinien być oddany precyzyjnie.",
          "Szczególnie ważne jest zachowanie zakresu czynności, do których dana osoba została upoważniona."
        ]
      },
      {
        heading: "Wyroki i orzeczenia",
        paragraphs: [
          "Wyroki, postanowienia i inne orzeczenia wymagają ostrożnego tłumaczenia sentencji, uzasadnienia, oznaczenia stron, dat, sygnatur i pouczeń.",
          "Nie należy upraszczać struktury dokumentu, ponieważ odbiorca może potrzebować odniesienia do konkretnego fragmentu."
        ]
      },
      {
        heading: "Zaświadczenia",
        paragraphs: [
          "Zaświadczenia bywają krótkie, ale zawierają wiele danych formalnych: organ, podstawę wydania, numer, datę, zakres informacji i podpis.",
          "W tłumaczeniu trzeba zachować także pieczęcie, dopiski i oznaczenia, jeżeli są widoczne w dokumencie."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy pieczęcie i podpisy są tłumaczone?",
        answer:
          "W tłumaczeniu opisuje się widoczne pieczęcie, podpisy i adnotacje w sposób zgodny z dokumentem źródłowym."
      },
      {
        question: "Czy dokument musi być skanem?",
        answer:
          "Najlepiej przekazać czytelny skan. Zdjęcie może wystarczyć, ale tylko wtedy, gdy wszystkie elementy dokumentu są widoczne."
      }
    ],
    relatedLinks: [
      { label: "Tłumaczenia ukraińskie", href: "/ukrainski" },
      { label: "Dokumenty z Ukrainy", href: "/tematy/dokumenty-z-ukrainy" },
      { label: "Tłumaczenia poświadczone", href: "/tematy/tlumaczenia-poswiadczone" }
    ]
  }
];

export function getAllExpertGuides() {
  return expertGuides;
}

export function getExpertGuideBySlug(slug: string) {
  return expertGuides.find((guide) => guide.slug === slug);
}
