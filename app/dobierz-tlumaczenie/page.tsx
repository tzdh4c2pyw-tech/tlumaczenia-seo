import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dobierz tłumaczenie | Dokumenty, sąd, dowody cyfrowe",
  description:
    "Sprawdź, jakiego rodzaju tłumaczenia możesz potrzebować: dokumenty z Ukrainy, akta sprawy, materiały dla sądu, Policji lub Prokuratury, dowody cyfrowe i komunikatory.",
  alternates: {
    canonical: "/dobierz-tlumaczenie"
  },
  openGraph: {
    title: "Dobierz tłumaczenie | Dokumenty, sąd, dowody cyfrowe",
    description:
      "Szybka ścieżka wyboru tłumaczenia poświadczonego lub specjalistycznego.",
    type: "website",
    url: "/dobierz-tlumaczenie"
  }
};

const decisionCards = [
  {
    title: "Mam dokument z Ukrainy",
    description:
      "Akty stanu cywilnego, pełnomocnictwa, wyroki, zaświadczenia, decyzje, dokumenty urzędowe lub szkolne.",
    primaryHref: "/tematy/dokumenty-z-ukrainy",
    primaryLabel: "Dokumenty z Ukrainy",
    secondaryHref: "/ukrainski",
    secondaryLabel: "Tłumaczenia ukraińskie"
  },
  {
    title: "Materiał trafi do sądu, Policji lub Prokuratury",
    description:
      "Pisma, protokoły, załączniki, korespondencja, dokumenty procesowe, materiały z akt sprawy.",
    primaryHref: "/tematy/sady-policja-prokuratura",
    primaryLabel: "Sądy, Policja, Prokuratura",
    secondaryHref: "/sprawy-karne",
    secondaryLabel: "Sprawy karne"
  },
  {
    title: "Potrzebuję tłumaczenia poświadczonego",
    description:
      "Dokument ma zostać użyty oficjalnie przed urzędem, sądem, organem ścigania, uczelnią, bankiem albo kancelarią.",
    primaryHref: "/tematy/tlumaczenia-poswiadczone",
    primaryLabel: "Tłumaczenia poświadczone",
    secondaryHref: "/kontakt",
    secondaryLabel: "Zapytaj o wycenę"
  },
  {
    title: "Mam wiadomości, screeny lub dowody cyfrowe",
    description:
      "Telegram, WhatsApp, Signal, e-mail, SMS, zrzuty ekranu, potwierdzenia transakcji, dane techniczne.",
    primaryHref: "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych",
    primaryLabel: "Dowody cyfrowe",
    secondaryHref: "/poradniki/tlumaczenie-korespondencji-telegram-whatsapp-signal",
    secondaryLabel: "Komunikatory"
  },
  {
    title: "Sprawa dotyczy oszustwa internetowego, BLIK lub kryptowalut",
    description:
      "Materiały bankowe, transakcje, giełdy kryptowalut, portfele, hashe, korespondencja z platformą, zgłoszenia.",
    primaryHref: "/poradniki/tlumaczenie-materialow-dotyczacych-oszustw-internetowych-i-blik",
    primaryLabel: "Oszustwa internetowe i BLIK",
    secondaryHref: "/poradniki/tlumaczenie-dokumentacji-kryptowalutowej-i-blockchain",
    secondaryLabel: "Kryptowaluty i blockchain"
  },
  {
    title: "Nie wiem, od czego zacząć",
    description:
      "Wyślij krótki opis sprawy, język dokumentu, liczbę stron lub plików oraz termin. To wystarczy do wstępnej oceny.",
    primaryHref: "/kontakt",
    primaryLabel: "Przejdź do kontaktu",
    secondaryHref: "/poradniki",
    secondaryLabel: "Zobacz poradniki"
  }
];

const preparationSteps = [
  "Zachowaj pełną kolejność stron, zrzutów ekranu lub plików.",
  "Nie usuwaj dat, godzin, nazw użytkowników, sygnatur, numerów ani oznaczeń systemowych.",
  "Wskaż, czy tłumaczenie ma trafić do sądu, Policji, Prokuratury, urzędu, kancelarii lub firmy.",
  "Przy pilnych sprawach podaj oczekiwany termin oraz objętość materiału.",
  "Jeżeli materiał jest nieczytelny, przygotuj lepszy skan, PDF albo eksport rozmowy."
];

export default function DecisionGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Dobierz tłumaczenie",
    description:
      "Szybka ścieżka wyboru tłumaczenia poświadczonego lub specjalistycznego.",
    mainEntity: decisionCards.map((card) => ({
      "@type": "Question",
      name: card.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: card.description
      }
    }))
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Dobór tłumaczenia
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Jakiego tłumaczenia potrzebujesz?
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Wybierz sytuację najbliższą Twojej sprawie. Ścieżki prowadzą do
          odpowiednich usług, tematów eksperckich, poradników albo kontaktu w
          sprawie wyceny tłumaczenia.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
          >
            Przejdź do kontaktu
          </Link>
          <Link
            href="/poradniki"
            className="rounded-full border border-cyan-300 px-6 py-3 text-sm font-bold text-cyan-100 hover:bg-cyan-300/10"
          >
            Zobacz poradniki
          </Link>
          <Link
            href="/tematy"
            className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100 hover:border-cyan-300 hover:text-cyan-100"
          >
            Zobacz tematy
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-10 md:grid-cols-2">
        {decisionCards.map((card) => (
          <article
            key={card.title}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20"
          >
            <h2 className="text-2xl font-bold text-white">{card.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={card.primaryHref}
                className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-200"
              >
                {card.primaryLabel}
              </Link>
              <Link
                href={card.secondaryHref}
                className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-cyan-300 hover:text-cyan-200"
              >
                {card.secondaryLabel}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white">
            Jak przygotować materiał do wstępnej wyceny?
          </h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {preparationSteps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-200">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-slate-300">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
