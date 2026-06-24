import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenia ustne, konferencje i spotkania",
  description: "Jak przygotować terminologię, materiały, agendę i dokumenty przed tłumaczeniem ustnym, spotkaniem albo konferencją.",
  alternates: {
    canonical: "/blog/tlumaczenia-ustne-konferencje-i-spotkania"
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
            Tłumaczenia ustne
          </p>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-white">
            Tłumaczenia ustne, konferencje i spotkania
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Jak przygotować terminologię, materiały, agendę i dokumenty przed tłumaczeniem ustnym, spotkaniem albo konferencją.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Krótka odpowiedź</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Przy tłumaczeniu ustnym kluczowe jest przygotowanie: temat
              spotkania, języki, uczestnicy, terminologia, dokumenty źródłowe,
              agenda oraz przewidywany tryb pracy. Inaczej wygląda spotkanie
              formalne, inaczej konferencja, rozmowa z prawnikiem albo
              omówienie dokumentów przed złożeniem ich w instytucji.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Co przygotować</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>agenda spotkania lub konferencji,</li>
              <li>materiały dla uczestników, prezentacje i dokumenty pomocnicze,</li>
              <li>lista nazw własnych, instytucji, skrótów i terminów,</li>
              <li>informacja o trybie pracy: konsekutywnym, roboczym albo konsultacyjnym.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Dlaczego materiały są ważne</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Im bardziej specjalistyczne spotkanie, tym większe znaczenie ma
              wcześniejsze przygotowanie terminologii. Dotyczy to szczególnie
              rozmów prawnych, medycznych, technicznych, biznesowych i
              instytucjonalnych.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
