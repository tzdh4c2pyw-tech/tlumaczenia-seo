import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Tłumaczenia poświadczone, sądowe i cyfrowe",
  description:
    "Najczęstsze pytania o tłumaczenia poświadczone, dokumenty z Ukrainy, materiały dla sądu, Policji i Prokuratury, dowody cyfrowe oraz wycenę tłumaczenia.",
  alternates: {
    canonical: "/faq"
  },
  openGraph: {
    title: "FAQ | Tłumaczenia poświadczone, sądowe i cyfrowe",
    description:
      "Odpowiedzi na najczęstsze pytania o tłumaczenia dokumentów, akt, korespondencji i materiałów cyfrowych.",
    type: "website",
    url: "/faq"
  }
};

const faqGroups = [
  {
    heading: "Tłumaczenia poświadczone",
    questions: [
      {
        question: "Kiedy potrzebne jest tłumaczenie poświadczone?",
        answer:
          "Tłumaczenie poświadczone jest zwykle potrzebne, gdy dokument ma zostać użyty oficjalnie: przed sądem, urzędem, organem ścigania, uczelnią, bankiem, kancelarią lub inną instytucją."
      },
      {
        question: "Czy każdy dokument z Ukrainy wymaga tłumaczenia poświadczonego?",
        answer:
          "Nie zawsze. Zależy to od celu użycia dokumentu. Jeżeli dokument ma być składany w instytucji publicznej albo w postępowaniu, tłumaczenie poświadczone jest często właściwym wyborem."
      },
      {
        question: "Czy tłumaczenie obejmuje pieczęcie, podpisy i adnotacje?",
        answer:
          "Tak. Widoczne pieczęcie, podpisy, dopiski, numery, daty i adnotacje są odnotowywane w tłumaczeniu zgodnie z dokumentem źródłowym."
      }
    ]
  },
  {
    heading: "Sąd, Policja i Prokuratura",
    questions: [
      {
        question: "Jak przygotować dokumenty do tłumaczenia dla sądu?",
        answer:
          "Najlepiej przekazać pełny, czytelny materiał: skany, PDF, komplet stron, załączniki i informację, do jakiej sprawy albo instytucji tłumaczenie ma trafić."
      },
      {
        question: "Czy można tłumaczyć tylko część akt sprawy?",
        answer:
          "Tak, jeżeli taka część została wskazana przez osobę zlecającą, pełnomocnika albo instytucję. Tłumacz nie powinien samodzielnie decydować, które fragmenty akt są procesowo istotne."
      },
      {
        question: "Czy protokoły i pisma procesowe tłumaczy się dosłownie?",
        answer:
          "Tłumaczenie powinno być wierne, precyzyjne i terminologicznie spójne. Zachowuje się sens, strukturę dokumentu, role procesowe, daty, sygnatury i oznaczenia organów."
      }
    ]
  },
  {
    heading: "Dowody cyfrowe i komunikatory",
    questions: [
      {
        question: "Czy zrzuty ekranu można tłumaczyć poświadczone?",
        answer:
          "Tak, jeżeli ich treść jest czytelna. Warto zachować daty, godziny, nazwy użytkowników, układ rozmowy i kolejność plików."
      },
      {
        question: "Jak przygotować rozmowy z Telegrama, WhatsAppa lub Signal?",
        answer:
          "Najlepiej przekazać eksport rozmowy albo uporządkowany PDF. Jeżeli dostępne są tylko screeny, należy zachować ich kolejność i nie usuwać elementów kontekstowych."
      },
      {
        question: "Czy emoji, literówki i potoczny język mają znaczenie?",
        answer:
          "Mogą mieć znaczenie. Tłumaczenie nie powinno sztucznie wygładzać wypowiedzi, jeżeli styl, błędy albo potoczność są widoczne w materiale źródłowym."
      }
    ]
  },
  {
    heading: "Wycena, termin i kontakt",
    questions: [
      {
        question: "Co przesłać do wstępnej wyceny?",
        answer:
          "Najlepiej przesłać skan, PDF albo zdjęcia dokumentów oraz krótki opis celu tłumaczenia, języka, terminu i instytucji, do której materiał ma zostać złożony."
      },
      {
        question: "Czy można zapytać bez przesyłania całego dokumentu?",
        answer:
          "Można, ale dokładna wycena wymaga oceny objętości i czytelności materiału. Wstępny opis pozwala jedynie określić ogólny zakres sprawy."
      },
      {
        question: "Czy materiały pilne powinny być oznaczone od razu?",
        answer:
          "Tak. Przy sprawach pilnych należy od razu wskazać termin, objętość materiału i sposób użycia tłumaczenia."
      }
    ]
  }
];

export default function FaqPage() {
  const allQuestions = faqGroups.flatMap((group) => group.questions);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          FAQ
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Najczęstsze pytania o tłumaczenia poświadczone, sądowe i cyfrowe
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Odpowiedzi dotyczą dokumentów z Ukrainy, materiałów dla sądu, Policji i
          Prokuratury, akt sprawy, dowodów cyfrowych, komunikatorów oraz wyceny
          tłumaczenia.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
          >
            Przejdź do kontaktu
          </Link>
          <Link
            href="/dobierz-tlumaczenie"
            className="rounded-full border border-cyan-300 px-6 py-3 text-sm font-bold text-cyan-100 hover:bg-cyan-300/10"
          >
            Dobierz tłumaczenie
          </Link>
          <Link
            href="/poradniki"
            className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100 hover:border-cyan-300 hover:text-cyan-100"
          >
            Zobacz poradniki
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="space-y-8">
          {faqGroups.map((group) => (
            <section
              key={group.heading}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 md:p-8"
            >
              <h2 className="text-2xl font-bold text-white">{group.heading}</h2>
              <div className="mt-6 space-y-6">
                {group.questions.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-lg font-semibold text-cyan-200">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
