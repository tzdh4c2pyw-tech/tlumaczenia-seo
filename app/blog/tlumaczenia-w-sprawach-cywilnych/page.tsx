import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenia w sprawach cywilnych",
  description: "Dokumenty rodzinne, spadkowe, umowy, pełnomocnictwa, roszczenia i załączniki używane w sprawach cywilnych.",
  alternates: {
    canonical: "/blog/tlumaczenia-w-sprawach-cywilnych"
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
            Sprawy cywilne
          </p>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-white">
            Tłumaczenia w sprawach cywilnych
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Dokumenty rodzinne, spadkowe, umowy, pełnomocnictwa, roszczenia i załączniki używane w sprawach cywilnych.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Krótka odpowiedź</h2>
            <p className="mt-4 leading-8 text-slate-300">
              W sprawach cywilnych najpierw trzeba ustalić cel użycia dokumentu:
              sąd, urząd, kancelaria, uczelnia, pracodawca albo druga strona
              postępowania. Dopiero potem można ocenić, czy potrzebne jest
              tłumaczenie poświadczone, zwykłe, robocze czy pomocnicze.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Najczęstsze dokumenty</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>akty stanu cywilnego, dokumenty rodzinne i opiekuńcze,</li>
              <li>sprawy spadkowe, testamenty, pełnomocnictwa i oświadczenia,</li>
              <li>umowy, dokumenty do spraw o zapłatę i roszczenia cywilne,</li>
              <li>korespondencja stron i załączniki składane w sądzie.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Praktyczna zasada</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Ten sam dokument może wymagać innego przygotowania zależnie od
              tego, czy ma zostać złożony w sądzie, urzędzie, u notariusza albo
              przekazany kancelarii jako materiał do analizy.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
