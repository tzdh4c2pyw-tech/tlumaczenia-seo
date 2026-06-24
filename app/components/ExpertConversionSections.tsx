import Link from "next/link";

const useCases = [
  {
    title: "Dokument do sądu, Policji lub Prokuratury",
    description:
      "Przygotuj czytelny skan, PDF albo komplet zdjęć dokumentów. Jeżeli sprawa ma charakter pilny, wskaż termin oraz instytucję, do której ma trafić tłumaczenie."
  },
  {
    title: "Akta, protokoły i materiały procesowe",
    description:
      "Przy większych pakietach dokumentów warto zachować kolejność stron, sygnatury, nazwy plików i załączniki. Ułatwia to spójne tłumaczenie całego materiału."
  },
  {
    title: "Wiadomości, zrzuty ekranu i dowody cyfrowe",
    description:
      "Nie usuwaj dat, godzin, nazw użytkowników ani oznaczeń systemowych. Te elementy mogą mieć znaczenie dla kontekstu i późniejszej oceny materiału."
  }
];

const processSteps = [
  "Przekazujesz dokumenty lub opis sprawy.",
  "Zakres materiału jest weryfikowany pod kątem czytelności i objętości.",
  "Otrzymujesz informację o możliwości wykonania, terminie i sposobie odbioru.",
  "Tłumaczenie jest przygotowywane z zachowaniem układu, terminologii i kontekstu."
];

export default function ExpertConversionSections() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 shadow-xl shadow-black/20 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Wycena i kontakt
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Potrzebujesz tłumaczenia dokumentów, akt albo materiałów cyfrowych?
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-200">
            Prześlij opis sprawy albo dokumenty do wstępnej oceny. W przypadku
            materiałów dla sądu, Policji, Prokuratury lub kancelarii prawnej
            najważniejsze są: czytelność plików, pełny kontekst, termin oraz
            informacja, do jakiego celu tłumaczenie ma zostać użyte.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              Zobacz tematy eksperckie
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20 md:p-8">
          <h3 className="text-2xl font-bold text-white">Jak przygotować zapytanie</h3>
          <ol className="mt-6 space-y-4">
            {processSteps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-200">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-slate-300">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {useCases.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
