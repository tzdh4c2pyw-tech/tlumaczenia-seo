import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prawo karne, przestępstwa i akta sprawy",
  description: "Biblioteka wiedzy o tłumaczeniu materiałów z postępowań karnych: akta, protokoły, zawiadomienia, postanowienia, dowody i dokumenty procesowe.",
  alternates: {
    canonical: "/blog/prawo-karne-przestepstwa-i-akta"
  }
};

export default function BlogDepartmentPage() {
  return (
    <main>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="text-sm font-black text-amber-200 no-underline"
          >
            ← Blog ekspercki
          </Link>

          <p className="mt-10 text-xs font-black uppercase tracking-[0.24em] text-amber-200">
            Prawo karne
          </p>

          <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight text-white">
            Prawo karne, przestępstwa i akta sprawy
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Biblioteka wiedzy o tłumaczeniu materiałów z postępowań karnych: akta, protokoły, zawiadomienia, postanowienia, dowody i dokumenty procesowe.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-950/70 to-slate-950/85 p-6">
            <h2 className="text-3xl font-black text-white">Zakres tematyczny</h2>
            <p className="mt-4 leading-8 text-slate-300">
              W sprawach karnych tłumaczenie wymaga rozumienia funkcji dokumentu:
              czy jest elementem akt, załącznikiem, dowodem, protokołem,
              postanowieniem, zawiadomieniem albo korespondencją procesową.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Tematy do opracowania</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>tłumaczenie akt sprawy karnej,</li>
              <li>zawiadomienie o podejrzeniu popełnienia przestępstwa,</li>
              <li>oszustwo, wyłudzenie, kradzież, groźby, przemoc, fałszerstwo,</li>
              <li>przestępstwa gospodarcze i cyberprzestępczość,</li>
              <li>dowody, załączniki i materiały z postępowania przygotowawczego.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Logika działu</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Ten dział nie opisuje usług sprzedażowo. Wyjaśnia, jak czytać,
              przygotowywać i porządkować materiały karne przed tłumaczeniem.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
