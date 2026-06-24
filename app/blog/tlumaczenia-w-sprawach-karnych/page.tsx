import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenia w sprawach karnych",
  description: "Jak rozumieć tłumaczenia akt, protokołów, postanowień i materiałów dowodowych w postępowaniach karnych.",
  alternates: {
    canonical: "/blog/tlumaczenia-w-sprawach-karnych"
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
            Prawo karne
          </p>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-white">
            Tłumaczenia w sprawach karnych
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Jak rozumieć tłumaczenia akt, protokołów, postanowień i materiałów dowodowych w postępowaniach karnych.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Krótka odpowiedź</h2>
            <p className="mt-4 leading-8 text-slate-300">
              W sprawach karnych tłumaczenie nie dotyczy wyłącznie języka.
              Istotne jest zachowanie funkcji procesowej dokumentu: czy jest to
              dowód, załącznik, element akt, pismo organu, korespondencja strony
              albo materiał pomocniczy. Od tego zależy sposób opisu dokumentu,
              precyzja terminologii i zakres tłumaczenia.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Typowe materiały</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>akta sprawy karnej, postanowienia, zarządzenia i protokoły,</li>
              <li>zawiadomienia o podejrzeniu popełnienia przestępstwa,</li>
              <li>materiały dotyczące oszustwa, wyłudzenia, przemocy, gróźb albo fałszerstwa,</li>
              <li>korespondencja, dokumenty z Ukrainy, załączniki i dowody cyfrowe.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Na co uważać</h2>
            <p className="mt-4 leading-8 text-slate-800">
              W materiałach karnych znaczenie mają daty, numery spraw, status
              osoby, nazwy organów, kwalifikacja czynu, opis załączników i
              rozróżnienie między treścią dokumentu a komentarzem technicznym.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
