import Link from "next/link";

type ExpertConversionSectionProps = {
  variant?: string;
};

const processSteps = [
  "Przekazujesz dokumenty lub opis sprawy.",
  "Zakres materiału jest oceniany pod kątem czytelności i objętości.",
  "Otrzymujesz informację o możliwej wycenie, terminie i sposobie odbioru.",
  "Tłumaczenie jest przygotowywane z zachowaniem układu, terminologii i kontekstu."
];

const useCases = [
  {
    title: "Dokument do sądu, Policji lub Prokuratury",
    text:
      "Przygotuj czytelny skan, PDF albo komplet zdjęć dokumentów. Jeżeli sprawa ma charakter pilny, wskaż termin oraz instytucję, do której ma trafić tłumaczenie."
  },
  {
    title: "Akta, protokoły i materiały procesowe",
    text:
      "Przy większych pakietach dokumentów warto zachować kolejność stron, sygnatury, nazwy plików i załączniki. Ułatwia to spójne tłumaczenie całego materiału."
  },
  {
    title: "Wiadomości, zrzuty ekranu i dowody cyfrowe",
    text:
      "Nie usuwaj dat, godzin, nazw użytkowników ani oznaczeń systemowych. Te elementy mogą mieć znaczenie dla kontekstu i późniejszej oceny materiału."
  }
];

export default function ExpertConversionSection({}: ExpertConversionSectionProps = {}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="overflow-hidden rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-[#321421] via-slate-950 to-[#071824] shadow-2xl shadow-black/35 ring-1 ring-white/5">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 md:p-10">
            <p className="inline-flex rounded-full bg-amber-300/15 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.25em] text-amber-200">
              Wstępna ocena materiału
            </p>

            <h2 className="mt-6 max-w-2xl text-3xl font-black tracking-tight text-white md:text-5xl">
              Potrzebujesz tłumaczenia dokumentów, akt albo materiałów cyfrowych?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Prześlij opis sprawy albo dokumenty do wstępnej oceny. W przypadku
              materiałów dla sądu, Policji, Prokuratury lub kancelarii prawnej
              najważniejsze są: czytelność plików, pełny kontekst, termin oraz
              informacja, do jakiego celu tłumaczenie ma zostać użyte.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-200"
              >
                Wyślij tekst do wyceny
              </Link>
              <Link
                href="/poradniki"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-amber-300/70 hover:text-amber-100"
              >
                Zobacz poradniki
              </Link>
              <Link
                href="/tematy"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-amber-300/70 hover:text-amber-100"
              >
                Zobacz tematy
              </Link>
            </div>
          </div>

          <aside className="border-t border-white/10 bg-white/[0.04] p-6 md:p-10 lg:border-l lg:border-t-0">
            <h3 className="text-2xl font-black text-white">Jak przygotować zapytanie</h3>
            <ol className="mt-6 space-y-3">
              {processSteps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-slate-200">{step}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <div className="grid gap-4 border-t border-white/10 p-6 md:grid-cols-3 md:p-10">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-950/55 p-5"
            >
              <h3 className="text-lg font-black leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
