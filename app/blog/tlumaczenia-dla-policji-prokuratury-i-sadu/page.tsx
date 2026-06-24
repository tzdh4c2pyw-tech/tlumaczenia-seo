import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenia dla Policji, Prokuratury i sądu",
  description: "Jak przygotować dokumenty, protokoły, wezwania, postanowienia i załączniki do tłumaczenia dla organów procesowych.",
  alternates: {
    canonical: "/blog/tlumaczenia-dla-policji-prokuratury-i-sadu"
  }
};

export default function ArticlePage() {
  return (
    <main>
      <article className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="text-sm font-black text-amber-200 no-underline"
          >
            ← Blog ekspercki
          </Link>

          <p className="mt-10 text-xs font-black uppercase tracking-[0.24em] text-amber-200">
            Sąd · Policja · Prokuratura
          </p>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-white">
            Tłumaczenia dla Policji, Prokuratury i sądu
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Jak przygotować dokumenty, protokoły, wezwania, postanowienia i załączniki do tłumaczenia dla organów procesowych.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Krótka odpowiedź</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Dokumenty kierowane do Policji, Prokuratury albo sądu wymagają
              formalnego języka i konsekwentnej terminologii. W tłumaczeniu
              ważne są nie tylko zdania, ale także układ dokumentu, oznaczenia
              sprawy, podpisy, pieczęcie, adnotacje i załączniki.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Co zwykle podlega tłumaczeniu</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>wezwania, postanowienia, zarządzenia i protokoły,</li>
              <li>zawiadomienia, wyjaśnienia, oświadczenia i pisma procesowe,</li>
              <li>załączniki, dokumenty z Ukrainy i materiały dowodowe,</li>
              <li>korespondencja elektroniczna oraz materiały przekazane jako pliki.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Najważniejszy kontekst</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Przed tłumaczeniem warto wiedzieć, do jakiego organu dokument
              trafi i czy będzie częścią akt, załącznikiem do pisma czy
              materiałem pomocniczym dla pełnomocnika.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
