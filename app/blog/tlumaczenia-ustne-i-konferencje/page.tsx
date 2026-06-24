import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenia ustne, konferencje i spotkania",
  description: "Jak przygotować spotkanie, konferencję, rozmowę formalną, glosariusz, materiały i terminologię do tłumaczenia ustnego.",
  alternates: {
    canonical: "/blog/tlumaczenia-ustne-i-konferencje"
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
            Tłumaczenia ustne
          </p>

          <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight text-white">
            Tłumaczenia ustne, konferencje i spotkania
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Jak przygotować spotkanie, konferencję, rozmowę formalną, glosariusz, materiały i terminologię do tłumaczenia ustnego.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-950/70 to-slate-950/85 p-6">
            <h2 className="text-3xl font-black text-white">Zakres tematyczny</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Tłumaczenie ustne wymaga przygotowania terminologii, agendy,
              materiałów i kontekstu rozmowy. Inaczej wygląda spotkanie
              formalne, inaczej konferencja, rozmowa z prawnikiem, konsultacja
              z instytucją albo omówienie dokumentów.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Tematy blogowe</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>przygotowanie glosariusza przed spotkaniem,</li>
              <li>materiały konferencyjne i prezentacje,</li>
              <li>tłumaczenie konsekutywne i rozmowy formalne,</li>
              <li>spotkania z udziałem prawnika, instytucji lub klienta,</li>
              <li>różnica między tłumaczeniem ustnym i pisemnym.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Praktyczny sens działu</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Ten dział wyjaśnia, jak myśleć o tłumaczeniu ustnym jako pracy z
              kontekstem, terminologią i strukturą rozmowy, a nie tylko jako
              prostym przekładem zdań.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
