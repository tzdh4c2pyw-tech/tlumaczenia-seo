export type BlogLanguage = "ukraiński" | "rosyjski" | "angielski" | "wielojęzyczne";

export type BlogCategory =
  | "tłumaczenia przysięgłe"
  | "prawo"
  | "sądy i organy"
  | "cyber / forensic"
  | "dokumenty"
  | "poradnik";

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
  language: BlogLanguage;
  category: BlogCategory;
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
    title: "Tłumacz przysięgły języka ukraińskiego — kiedy jest potrzebny?",
    description:
      "Praktyczny poradnik o tym, kiedy dokument w języku ukraińskim wymaga tłumaczenia poświadczonego, jak przygotować materiał i kiedy warto skorzystać z tłumacza specjalistycznego.",
    language: "ukraiński",
    category: "tłumaczenia przysięgłe",
    readTime: "8 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumacz przysięgły ukraiński",
      "tłumacz przysięgły języka ukraińskiego",
      "tłumaczenie poświadczone ukraiński",
      "dokumenty z Ukrainy",
      "tłumacz ukraiński Kraków"
    ],
    intro:
      "Tłumacz przysięgły języka ukraińskiego jest potrzebny wtedy, gdy dokument ma zostać złożony w urzędzie, sądzie, prokuraturze, na Policji, w uczelni, u notariusza albo w innej instytucji wymagającej tłumaczenia poświadczonego. W praktyce dotyczy to zwłaszcza dokumentów z Ukrainy, aktów stanu cywilnego, dyplomów, zaświadczeń, wyroków, pełnomocnictw i dokumentów procesowych.",
    sections: [
      {
        heading: "Kiedy zwykłe tłumaczenie nie wystarczy?",
        paragraphs: [
          "Zwykłe tłumaczenie może być wystarczające do celów prywatnych, orientacyjnych albo roboczych. Jeżeli jednak dokument ma wywołać skutki prawne w Polsce, najczęściej wymagane jest tłumaczenie poświadczone wykonane przez tłumacza przysięgłego.",
          "Dotyczy to między innymi dokumentów składanych w urzędach, sądach, organach ścigania, szkołach, uczelniach, bankach, kancelariach prawnych i u notariuszy. Instytucja, która przyjmuje dokument, może wymagać tłumaczenia z podpisem i pieczęcią tłumacza przysięgłego."
        ]
      },
      {
        heading: "Najczęstsze dokumenty z Ukrainy do tłumaczenia",
        paragraphs: [
          "Do najczęściej tłumaczonych dokumentów z Ukrainy należą akty urodzenia, akty małżeństwa, akty zgonu, dyplomy, świadectwa, zaświadczenia o niekaralności, dokumenty sądowe, pełnomocnictwa, dokumenty rozwodowe, dokumenty pobytowe i dokumenty edukacyjne.",
          "Osobną kategorię stanowią dokumenty procesowe: protokoły, postanowienia, wyroki, zawiadomienia, pisma procesowe, korespondencja stron oraz materiał dowodowy."
        ]
      },
      {
        heading: "Jak przygotować dokument do wyceny?",
        paragraphs: [
          "Do wstępnej wyceny zwykle wystarczy czytelny skan, zdjęcie lub plik PDF. Ważne jest, aby widoczny był cały dokument: pieczęcie, podpisy, numery, adnotacje, daty oraz wszystkie strony załączników.",
          "W wiadomości warto wskazać, do jakiej instytucji dokument ma zostać złożony, w jakim terminie jest potrzebny oraz czy wymagane jest tłumaczenie poświadczone."
        ]
      },
      {
        heading: "Tłumaczenia ukraińskie w sprawach sądowych i karnych",
        paragraphs: [
          "W sprawach sądowych i karnych samo znaczenie słów nie wystarcza. Istotne jest również rozumienie funkcji dokumentu w postępowaniu. Inaczej tłumaczy się prywatny list, inaczej protokół przesłuchania, a jeszcze inaczej dokument stanowiący załącznik do akt sprawy.",
          "Przy dokumentach procesowych ważna jest konsekwencja terminologiczna, precyzja i świadomość, że tłumaczenie może być analizowane przez sąd, prokuratora, obrońcę, pełnomocnika lub organ prowadzący czynności."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy dokument z Ukrainy zawsze musi być tłumaczony przez tłumacza przysięgłego?",
        answer:
          "Nie zawsze. Jeżeli dokument jest wykorzystywany prywatnie lub roboczo, może wystarczyć tłumaczenie zwykłe. Jeżeli jednak dokument ma zostać złożony w urzędzie, sądzie, uczelni, banku lub innej instytucji, zwykle wymagane jest tłumaczenie poświadczone."
      },
      {
        question: "Czy do wyceny wystarczy zdjęcie dokumentu?",
        answer:
          "Do wstępnej wyceny zazwyczaj wystarczy czytelne zdjęcie lub skan. Ważne, aby widoczne były wszystkie strony, podpisy, pieczęcie i adnotacje."
      },
      {
        question: "Czy można wycenić dokument bez wizyty w kancelarii?",
        answer:
          "Tak. Wstępna wycena może zostać przygotowana na podstawie przesłanego pliku, skanu albo zdjęcia dokumentu."
      }
    ],
    relatedSlugs: [
      "tlumaczenie-dokumentow-z-ukrainy-kompletny-przewodnik",
      "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski",
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto"
    ]
  },
  {
    slug: "tlumaczenie-dokumentow-z-ukrainy-kompletny-przewodnik",
    title: "Tłumaczenie dokumentów z Ukrainy — kompletny przewodnik",
    description:
      "Przewodnik po tłumaczeniach dokumentów z Ukrainy: akty stanu cywilnego, dyplomy, świadectwa, pełnomocnictwa, dokumenty sądowe i urzędowe.",
    language: "ukraiński",
    category: "dokumenty",
    readTime: "10 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumaczenie dokumentów z Ukrainy",
      "tłumaczenie aktu urodzenia z Ukrainy",
      "tłumaczenie dyplomu z Ukrainy",
      "dokumenty ukraińskie tłumaczenie",
      "tłumacz ukraiński dokumenty"
    ],
    intro:
      "Dokumenty z Ukrainy są często potrzebne w Polsce do spraw urzędowych, rodzinnych, edukacyjnych, zawodowych, sądowych i pobytowych. W wielu sytuacjach instytucja wymaga tłumaczenia poświadczonego, czyli tłumaczenia wykonanego przez tłumacza przysięgłego.",
    sections: [
      {
        heading: "Jakie dokumenty z Ukrainy są najczęściej tłumaczone?",
        paragraphs: [
          "Najczęściej tłumaczy się akty urodzenia, akty małżeństwa, akty zgonu, dyplomy, świadectwa, suplementy do dyplomów, zaświadczenia, pełnomocnictwa, dokumenty rozwodowe, dokumenty sądowe, dokumenty pobytowe i dokumenty związane z pracą.",
          "W praktyce wiele dokumentów występuje w kilku wersjach: papierowej, elektronicznej, skanowanej lub jako fotografia. Do wyceny ważna jest czytelność dokumentu i kompletność wszystkich stron."
        ]
      },
      {
        heading: "Dokumenty do urzędu, sądu i uczelni",
        paragraphs: [
          "Jeżeli dokument ma być złożony w urzędzie, sądzie, szkole, uczelni, banku, kancelarii notarialnej albo innej instytucji, należy wcześniej ustalić, czy wymagane jest tłumaczenie poświadczone.",
          "W przypadku dokumentów edukacyjnych i urzędowych znaczenie mają nie tylko dane osobowe, lecz także pieczęcie, podpisy, nazwy instytucji, daty, numery dokumentów i adnotacje."
        ]
      },
      {
        heading: "Dokumenty sądowe z Ukrainy",
        paragraphs: [
          "Osobną grupą są dokumenty sądowe: wyroki, postanowienia, wezwania, protokoły, pisma procesowe, załączniki, pełnomocnictwa i dokumenty dotyczące spraw rodzinnych, cywilnych lub karnych.",
          "Tego rodzaju dokumenty wymagają szczególnej dokładności, ponieważ ich treść może mieć znaczenie dla oceny sprawy przez sąd, organ administracji albo pełnomocnika."
        ]
      },
      {
        heading: "Jak przekazać dokumenty do wstępnej oceny?",
        paragraphs: [
          "Najbezpieczniej przygotować czytelny plik PDF albo zdjęcia wykonane w dobrym świetle. Każda strona powinna być widoczna w całości, bez uciętych pieczęci, podpisów i numerów.",
          "W formularzu warto dopisać, do czego dokument jest potrzebny: urząd, sąd, uczelnia, praca, sprawa pobytowa, sprawa rodzinna, sprawa karna albo inny cel."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy tłumaczenie dokumentu z Ukrainy może być wykonane na podstawie skanu?",
        answer:
          "Do wstępnej wyceny zwykle wystarczy skan lub zdjęcie. Ostateczna forma realizacji zależy od rodzaju dokumentu i wymagań instytucji, do której dokument ma zostać złożony."
      },
      {
        question: "Czy trzeba tłumaczyć pieczęcie i podpisy?",
        answer:
          "W tłumaczeniu poświadczonym opisuje się również elementy formalne dokumentu, takie jak pieczęcie, podpisy, adnotacje i oznaczenia urzędowe."
      },
      {
        question: "Czy dokumenty z Ukrainy można przesłać online?",
        answer:
          "Tak, do wstępnej oceny można przesłać pliki przez formularz wyceny."
      }
    ],
    relatedSlugs: [
      "tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny",
      "tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski",
      "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski"
    ]
  },
  {
    slug: "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski",
    title: "Tłumaczenia dla sądu, Policji i prokuratury — język ukraiński",
    description:
      "Tłumaczenia dokumentów, protokołów, akt sprawy i materiału dowodowego w języku ukraińskim dla sądów, Policji, prokuratur i organów ścigania.",
    language: "ukraiński",
    category: "sądy i organy",
    readTime: "9 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumacz ukraiński dla sądu",
      "tłumacz ukraiński Policja",
      "tłumacz ukraiński prokuratura",
      "tłumaczenia dla organów ścigania",
      "tłumaczenie protokołu ukraiński"
    ],
    intro:
      "W sprawach prowadzonych przez sąd, Policję lub prokuraturę tłumaczenie nie jest zwykłą usługą językową. Dokument może być częścią akt, dowodem, załącznikiem, materiałem operacyjnym albo pismem procesowym. Dlatego ważna jest precyzja, konsekwencja terminologiczna i rozumienie kontekstu postępowania.",
    sections: [
      {
        heading: "Jakie dokumenty trafiają do tłumaczenia?",
        paragraphs: [
          "W praktyce są to między innymi protokoły przesłuchań, pouczenia, notatki urzędowe, zawiadomienia o przestępstwie, postanowienia, wyroki, pisma procesowe, dokumenty z Ukrainy, korespondencja, zrzuty ekranu i inne materiały dowodowe.",
          "Często dokumenty występują w formie mieszanej: część materiału jest urzędowa, część prywatna, a część pochodzi z komunikatorów, telefonu lub systemów elektronicznych."
        ]
      },
      {
        heading: "Tłumaczenia dla Policji",
        paragraphs: [
          "W czynnościach policyjnych znaczenie mają szybkość, czytelność i dokładność. Tłumaczone mogą być protokoły, pouczenia, notatki, dokumenty tożsamości, wiadomości z komunikatorów, zrzuty ekranu oraz materiały przekazane przez strony.",
          "Przy materiale cyfrowym istotne jest zachowanie struktury: kto pisze, kiedy, w jakiej kolejności i w jakim kontekście pojawia się wypowiedź."
        ]
      },
      {
        heading: "Tłumaczenia dla prokuratury",
        paragraphs: [
          "W postępowaniu przygotowawczym tłumaczeniu mogą podlegać dokumenty procesowe, materiały z pomocy prawnej, dokumenty z Ukrainy, korespondencja, dane z komunikatorów, opinie i raporty.",
          "Tłumaczenie powinno umożliwiać analizę materiału przez prokuratora, referenta, biegłego, pełnomocnika lub sąd."
        ]
      },
      {
        heading: "Tłumaczenia dla sądu",
        paragraphs: [
          "W sądzie tłumaczenie może dotyczyć akt sprawy, załączników, dokumentów prywatnych, urzędowych, dowodowych i korespondencji procesowej.",
          "W sprawach karnych, cywilnych i rodzinnych ważna jest precyzja opisu faktów oraz zgodność terminologii z charakterem dokumentu."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy organy mogą przesłać materiał do wstępnej oceny?",
        answer:
          "Tak. Materiał może zostać opisany ogólnie przez formularz, ze wskazaniem rodzaju dokumentów, języka, objętości i terminu."
      },
      {
        question: "Czy tłumaczone mogą być zrzuty ekranu i komunikatory?",
        answer:
          "Tak. Materiał cyfrowy, taki jak komunikatory, zrzuty ekranu, SMS-y i raporty PDF, może wymagać tłumaczenia w kontekście sprawy."
      },
      {
        question: "Czy tłumaczenia dla sądu różnią się od zwykłych tłumaczeń?",
        answer:
          "Tak. Tłumaczenia sądowe i procesowe wymagają większej precyzji, konsekwencji terminologicznej i rozumienia funkcji dokumentu w aktach sprawy."
      }
    ],
    relatedSlugs: [
      "tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski",
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto",
      "tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny"
    ]
  },
  {
    slug: "tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski",
    title: "Tłumaczenia w sprawach karnych — ukraiński, rosyjski, angielski",
    description:
      "Tłumaczenia dokumentów i materiałów w sprawach karnych: protokoły, akty oskarżenia, korespondencja, komunikatory, dowody cyfrowe i dokumenty procesowe.",
    language: "wielojęzyczne",
    category: "prawo",
    readTime: "9 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumaczenia w sprawach karnych",
      "tłumacz sprawy karne ukraiński",
      "tłumacz sprawy karne rosyjski",
      "tłumacz sprawy karne angielski",
      "tłumaczenie aktu oskarżenia"
    ],
    intro:
      "Sprawy karne wymagają szczególnej dokładności tłumaczenia. Dokument może dotyczyć czynności procesowej, zeznań, wyjaśnień, zarzutów, materiału dowodowego, korespondencji albo analizy danych cyfrowych. W takich sprawach liczy się nie tylko język, ale również funkcja dokumentu w postępowaniu.",
    sections: [
      {
        heading: "Jakie materiały występują w sprawach karnych?",
        paragraphs: [
          "Najczęściej są to protokoły przesłuchań, wyjaśnienia podejrzanych, zeznania świadków, akty oskarżenia, postanowienia, zawiadomienia, notatki urzędowe, korespondencja, dokumenty z zagranicy oraz materiał cyfrowy.",
          "Coraz częściej w sprawach karnych pojawiają się także zrzuty ekranu, eksporty rozmów, dane z telefonu, raporty PDF, potwierdzenia transakcji, dokumenty bankowe i informacje związane z kryptowalutami."
        ]
      },
      {
        heading: "Język ukraiński, rosyjski i angielski w jednej sprawie",
        paragraphs: [
          "W jednej sprawie mogą pojawić się materiały w kilku językach. Przykładowo dokumenty urzędowe mogą być po ukraińsku, rozmowy prywatne po rosyjsku, a raport techniczny lub dokumentacja platformy po angielsku.",
          "Dlatego przy większych sprawach istotna jest spójność terminologii i zachowanie logicznej struktury materiału."
        ]
      },
      {
        heading: "Korespondencja i komunikatory",
        paragraphs: [
          "Korespondencja w sprawach karnych może obejmować listy, wiadomości SMS, komunikatory, e-maile, zrzuty ekranu i opisy transakcji.",
          "Tłumaczenie powinno pozwalać odbiorcy ustalić, kto jest nadawcą, kto odbiorcą, kiedy doszło do komunikacji i jaki jest sens wypowiedzi w kontekście sprawy."
        ]
      },
      {
        heading: "Jak przygotować materiał do wyceny?",
        paragraphs: [
          "Do wstępnej wyceny należy wskazać języki, rodzaj materiału, liczbę stron lub plików, termin oraz ogólny kontekst: sprawa karna, przygotowawcza, sądowa, policyjna, prokuratorska lub prywatna.",
          "Nie trzeba opisywać wszystkich szczegółów sprawy na początku. Wystarczy tyle informacji, ile jest potrzebne do oceny zakresu pracy."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy można tłumaczyć rozmowy z komunikatorów w sprawie karnej?",
        answer:
          "Tak. Rozmowy z komunikatorów mogą stanowić materiał wymagający tłumaczenia, zwłaszcza jeżeli są częścią akt, załącznikiem lub materiałem dowodowym."
      },
      {
        question: "Czy sprawa karna może obejmować kilka języków?",
        answer:
          "Tak. W jednej sprawie mogą występować dokumenty i wypowiedzi po ukraińsku, rosyjsku i angielsku."
      },
      {
        question: "Czy do wyceny trzeba przesyłać całość akt?",
        answer:
          "Nie zawsze. Do wstępnej oceny można opisać rodzaj materiału, liczbę stron lub plików i wskazać języki."
      }
    ],
    relatedSlugs: [
      "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski",
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto",
      "tlumaczenia-prawnicze-angielski-umowy-opinie-dokumenty"
    ]
  },
  {
    slug: "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto",
    title: "Tłumaczenie materiału cyfrowego — komunikatory, BLIK, krypto, forensic",
    description:
      "Jak przygotować do tłumaczenia materiał cyfrowy: zrzuty ekranu, komunikatory, SMS-y, raporty PDF, dane z telefonu, BLIK, kryptowaluty i cyberoszustwa.",
    language: "wielojęzyczne",
    category: "cyber / forensic",
    readTime: "11 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumaczenie materiału cyfrowego",
      "tłumaczenie zrzutów ekranu",
      "tłumaczenie WhatsApp",
      "tłumaczenie Telegram",
      "tłumaczenie BLIK",
      "tłumaczenie kryptowaluty",
      "tłumaczenie forensic"
    ],
    intro:
      "Materiał cyfrowy coraz częściej pojawia się w sprawach karnych, cywilnych, rodzinnych, gospodarczych i związanych z oszustwami internetowymi. Może obejmować komunikatory, zrzuty ekranu, SMS-y, e-maile, raporty PDF, dane z telefonu, potwierdzenia transakcji BLIK, kryptowaluty i elementy informatyki śledczej.",
    sections: [
      {
        heading: "Czym jest materiał cyfrowy do tłumaczenia?",
        paragraphs: [
          "Materiał cyfrowy to nie tylko dokument elektroniczny. To również zrzuty ekranu, rozmowy z komunikatorów, eksporty czatów, potwierdzenia płatności, raporty, dane z systemów, e-maile i treści z aplikacji.",
          "W tłumaczeniu ważne jest nie tylko przełożenie tekstu, ale także zachowanie struktury informacji: nadawca, odbiorca, data, godzina, kolejność wypowiedzi, kontekst i opis elementów graficznych."
        ]
      },
      {
        heading: "Komunikatory: WhatsApp, Telegram, Messenger, Signal",
        paragraphs: [
          "Rozmowy z komunikatorów mogą być przedstawiane jako zrzuty ekranu, eksporty plików, wydruki albo raporty. Każda forma wymaga innego podejścia organizacyjnego.",
          "Przy dużej liczbie wiadomości warto uporządkować materiał chronologicznie i wskazać, które fragmenty mają znaczenie dla sprawy."
        ]
      },
      {
        heading: "BLIK, kryptowaluty i oszustwa internetowe",
        paragraphs: [
          "W sprawach oszustw internetowych pojawiają się potwierdzenia płatności, korespondencja z osobami trzecimi, dane rachunków, identyfikatory transakcji, komunikaty z platform, giełdy kryptowalut i portfele cyfrowe.",
          "Tłumaczenie takich materiałów powinno być ostrożne terminologicznie, ponieważ często łączy język potoczny, techniczny, finansowy i procesowy."
        ]
      },
      {
        heading: "Jak przygotować materiał cyfrowy?",
        paragraphs: [
          "Najlepiej przygotować pliki w czytelnej kolejności i opisać, czego dotyczą. W przypadku zrzutów ekranu warto zadbać o jakość obrazu, widoczność dat, godzin, nazw użytkowników i pełnej treści wiadomości.",
          "Do wstępnej wyceny można podać liczbę zrzutów, format plików, język, rodzaj sprawy i termin."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy zrzuty ekranu można tłumaczyć?",
        answer:
          "Tak. Zrzuty ekranu mogą być tłumaczone, jeżeli są czytelne i pozwalają ustalić treść, kolejność oraz kontekst wiadomości."
      },
      {
        question: "Czy tłumaczenie może dotyczyć kryptowalut?",
        answer:
          "Tak. Materiał dotyczący kryptowalut, giełd, portfeli, transakcji i oszustw internetowych może wymagać tłumaczenia specjalistycznego."
      },
      {
        question: "Czy trzeba przesyłać cały telefon?",
        answer:
          "Nie. Do wstępnej oceny zwykle wystarczy opis materiału, liczba plików i przykładowe czytelne fragmenty."
      }
    ],
    relatedSlugs: [
      "tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski",
      "tlumaczenia-dla-sadu-policji-prokuratury-jezyk-ukrainski",
      "tlumaczenia-prawnicze-angielski-umowy-opinie-dokumenty"
    ]
  },
  {
    slug: "tlumacz-przysiegly-jezyka-rosyjskiego-dokumenty-i-sprawy",
    title: "Tłumacz przysięgły języka rosyjskiego — dokumenty i sprawy specjalistyczne",
    description:
      "Kiedy potrzebny jest tłumacz przysięgły języka rosyjskiego? Dokumenty rosyjskojęzyczne, sprawy sądowe, urzędowe, prywatne i materiał dowodowy.",
    language: "rosyjski",
    category: "tłumaczenia przysięgłe",
    readTime: "8 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumacz przysięgły rosyjski",
      "tłumacz rosyjski Kraków",
      "tłumaczenie dokumentów rosyjskich",
      "tłumaczenia rosyjski sąd",
      "tłumaczenia rosyjski prokuratura"
    ],
    intro:
      "Tłumacz przysięgły języka rosyjskiego jest potrzebny wtedy, gdy dokument rosyjskojęzyczny ma zostać użyty formalnie: w urzędzie, sądzie, kancelarii, uczelni, banku, u notariusza albo w postępowaniu prowadzonym przez organ.",
    sections: [
      {
        heading: "Jakie dokumenty rosyjskojęzyczne są tłumaczone?",
        paragraphs: [
          "Do tłumaczenia trafiają dokumenty urzędowe, akty stanu cywilnego, dyplomy, świadectwa, zaświadczenia, pełnomocnictwa, umowy, dokumenty sądowe i dokumenty prywatne.",
          "W praktyce dokument rosyjskojęzyczny nie zawsze pochodzi z Federacji Rosyjskiej. Język rosyjski może pojawić się również w dokumentach prywatnych, korespondencji, aktach sprawy lub materiale cyfrowym."
        ]
      },
      {
        heading: "Rosyjski w dokumentach sądowych i dowodowych",
        paragraphs: [
          "W sprawach sądowych i karnych rosyjski może występować w korespondencji, komunikatorach, dokumentach prywatnych, zeznaniach, wyjaśnieniach lub załącznikach.",
          "Tłumaczenie wymaga oceny kontekstu, ponieważ ten sam zwrot może mieć inne znaczenie w języku potocznym, formalnym i procesowym."
        ]
      },
      {
        heading: "Jak odróżnić rosyjski od ukraińskiego?",
        paragraphs: [
          "Osoby, które nie znają alfabetu cyrylickiego, często nie wiedzą, czy dokument jest po rosyjsku czy po ukraińsku. Do wstępnej oceny można przesłać czytelny obraz dokumentu i poprosić o rozpoznanie języka.",
          "W jednej sprawie mogą występować oba języki, szczególnie w korespondencji, aktach albo dokumentach prywatnych."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy dokument po rosyjsku zawsze pochodzi z Rosji?",
        answer:
          "Nie. Dokument albo korespondencja w języku rosyjskim może pochodzić z różnych państw lub od różnych osób. Ważne jest ustalenie języka i celu tłumaczenia."
      },
      {
        question: "Czy rosyjski materiał cyfrowy można tłumaczyć?",
        answer:
          "Tak. Tłumaczeniu mogą podlegać wiadomości, zrzuty ekranu, dokumenty elektroniczne i raporty."
      },
      {
        question: "Czy do wyceny wystarczy zdjęcie dokumentu?",
        answer:
          "Do wstępnej wyceny zwykle wystarczy czytelne zdjęcie lub skan."
      }
    ],
    relatedSlugs: [
      "tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski",
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto",
      "tlumacz-przysiegly-jezyka-ukrainskiego-kiedy-potrzebny"
    ]
  },
  {
    slug: "tlumaczenia-prawnicze-angielski-umowy-opinie-dokumenty",
    title: "Tłumaczenia prawnicze z języka angielskiego — umowy, opinie, dokumenty",
    description:
      "Tłumaczenia prawnicze z języka angielskiego: umowy, opinie, dokumenty korporacyjne, dokumenty sądowe, materiał dowodowy i dokumentacja biznesowa.",
    language: "angielski",
    category: "prawo",
    readTime: "8 min",
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    keywords: [
      "tłumaczenia prawnicze angielski",
      "tłumacz angielski prawniczy",
      "tłumaczenie umowy angielski",
      "tłumaczenie opinii prawnej angielski",
      "tłumaczenia angielski sąd"
    ],
    intro:
      "Język angielski w tłumaczeniach prawniczych pojawia się w umowach, dokumentach korporacyjnych, opiniach prawnych, regulaminach, dokumentach sądowych, korespondencji biznesowej i materiałach technicznych. W takich tekstach znaczenie ma nie tylko poprawność językowa, ale też precyzja terminologiczna.",
    sections: [
      {
        heading: "Jakie dokumenty prawnicze są tłumaczone z angielskiego?",
        paragraphs: [
          "Najczęściej tłumaczy się umowy, aneksy, pełnomocnictwa, regulaminy, dokumenty spółek, dokumentację compliance, opinie prawne, korespondencję, dokumenty sądowe i materiały dowodowe.",
          "Język angielski pojawia się również w sprawach technologicznych, finansowych, cyber i kryptowalutowych."
        ]
      },
      {
        heading: "Umowy i dokumenty biznesowe",
        paragraphs: [
          "Tłumaczenie umowy wymaga zachowania struktury, numeracji, definicji, odwołań i konsekwencji terminologicznej. Niekiedy znaczenie ma również system prawny, z którego pochodzi dokument.",
          "Przy dokumentach biznesowych ważne jest odróżnienie tłumaczenia roboczego od tłumaczenia przeznaczonego do formalnego użycia."
        ]
      },
      {
        heading: "Angielski w sprawach sądowych i dowodowych",
        paragraphs: [
          "W sprawach sądowych język angielski może pojawić się w korespondencji, raportach, dokumentach platform internetowych, regulaminach, danych technicznych lub dokumentach transakcyjnych.",
          "Tłumaczenie powinno być czytelne dla odbiorcy procesowego: sądu, pełnomocnika, organu albo strony postępowania."
        ]
      }
    ],
    faqs: [
      {
        question: "Czy tłumaczenie umowy z angielskiego musi być poświadczone?",
        answer:
          "To zależy od celu użycia dokumentu. Jeżeli dokument ma zostać złożony w instytucji wymagającej tłumaczenia poświadczonego, może być potrzebny tłumacz przysięgły."
      },
      {
        question: "Czy można tłumaczyć dokumenty biznesowe online?",
        answer:
          "Do wstępnej wyceny można przesłać dokument przez formularz lub opisać jego zakres."
      },
      {
        question: "Czy tłumaczenia angielskie mogą dotyczyć IT i cyber?",
        answer:
          "Tak. Język angielski często występuje w dokumentacji technicznej, raportach, regulaminach platform i sprawach cyber."
      }
    ],
    relatedSlugs: [
      "tlumaczenie-materialu-cyfrowego-komunikatory-blik-krypto",
      "tlumaczenia-w-sprawach-karnych-ukrainski-rosyjski-angielski",
      "tlumacz-przysiegly-jezyka-rosyjskiego-dokumenty-i-sprawy"
    ]
  }
];

export function getAllArticles() {
  return blogArticles;
}

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slugs: string[]) {
  return blogArticles.filter((article) => slugs.includes(article.slug));
}

export function getArticlesByLanguage(language: BlogLanguage) {
  return blogArticles.filter((article) => article.language === language);
}

export function getArticlesByCategory(category: BlogCategory) {
  return blogArticles.filter((article) => article.category === category);
}