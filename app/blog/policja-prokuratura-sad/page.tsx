import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policja, Prokuratura i sąd w tłumaczeniu dokumentów",
  description: "Jak rozumieć dokumenty organów procesowych, wezwania, protokoły, pisma, załączniki i materiały składane w sądzie.",
  alternates: {
    canonical: "/blog/policja-prokuratura-sad"
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
            Instytucje
          </p>

          <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight text-white">
            Policja, Prokuratura i sąd w tłumaczeniu dokumentów
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Jak rozumieć dokumenty organów procesowych, wezwania, protokoły, pisma, załączniki i materiały składane w sądzie.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-slate-950/85 p-6">
            <h2 className="text-3xl font-black text-white">Zakres tematyczny</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Dokumenty policyjne, prokuratorskie i sądowe mają określoną
              funkcję formalną. W tłumaczeniu trzeba zachować strukturę,
              nazewnictwo organów, oznaczenia spraw, podpisy, pieczęcie,
              daty oraz relację między dokumentem głównym a załącznikami.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Typowe materiały</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>wezwania, protokoły, zarządzenia i postanowienia,</li>
              <li>pisma procesowe i dokumenty urzędowe,</li>
              <li>materiały do akt i załączniki,</li>
              <li>korespondencja z organami,</li>
              <li>dokumenty z Ukrainy składane w polskich instytucjach.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Praktyczna zasada</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Przed tłumaczeniem warto wiedzieć, czy dokument ma trafić do akt,
              do pełnomocnika, do organu prowadzącego postępowanie czy do
              klienta jako materiał roboczy.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
