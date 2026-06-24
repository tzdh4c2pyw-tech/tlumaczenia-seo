import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenia dokumentów z Ukrainy w postępowaniach",
  description: "Dokumenty ukraińskie używane w polskich sprawach sądowych, cywilnych, karnych, urzędowych i instytucjonalnych.",
  alternates: {
    canonical: "/blog/tlumaczenia-dokumentow-z-ukrainy-w-postepowaniach"
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
            Dokumenty z Ukrainy
          </p>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-white">
            Tłumaczenia dokumentów z Ukrainy w postępowaniach
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Dokumenty ukraińskie używane w polskich sprawach sądowych, cywilnych, karnych, urzędowych i instytucjonalnych.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Krótka odpowiedź</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Dokument z Ukrainy może mieć różne znaczenie w zależności od tego,
              czy jest składany w sądzie, urzędzie, postępowaniu karnym,
              sprawie cywilnej, uczelni, kancelarii czy u pracodawcy. Przed
              tłumaczeniem warto ustalić, gdzie dokument ma zostać użyty i czy
              potrzebna jest forma poświadczona.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Najczęstsze dokumenty</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>akty stanu cywilnego, dokumenty rodzinne i urzędowe,</li>
              <li>dokumenty sądowe, procesowe i administracyjne,</li>
              <li>dyplomy, zaświadczenia, pełnomocnictwa i oświadczenia,</li>
              <li>materiały z postępowań oraz załączniki do akt.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Co sprawdzić przed wysłaniem</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Przy dokumentach z Ukrainy znaczenie mają pieczęcie, podpisy,
              adnotacje, kompletność stron, czytelność skanu oraz cel użycia
              tłumaczenia w Polsce.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
