import Link from "next/link";

const terms = [
  "podejrzany",
  "oskarżony",
  "pokrzywdzony",
  "postanowienie",
  "protokół",
  "akta sprawy",
  "materiał dowodowy",
  "dowód cyfrowy",
  "powód",
  "pozwany",
  "pełnomocnictwo",
  "tłumaczenie ustne"
];

export default function LegalGlossaryTeaser() {
  return (
    <section className="px-6 py-16" data-component="legal-glossary-teaser">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 p-6 shadow-2xl shadow-black/25">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-200">
              Słownik bloga
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white">
              Pojęcia prawne i procesowe w pracy tłumacza.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Krótkie objaśnienia pojęć, które często pojawiają się w aktach,
            dokumentach sądowych, materiałach z Policji i Prokuratury,
            korespondencji oraz sprawach cywilnych i karnych.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {terms.map((term) => (
            <span
              key={term}
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-200"
            >
              {term}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog/slownik-prawno-tlumaczeniowy"
            className="inline-flex rounded-full bg-amber-200 px-5 py-3 text-sm font-black text-slate-950 no-underline"
          >
            Przejdź do słownika
          </Link>
        </div>
      </div>
    </section>
  );
}
