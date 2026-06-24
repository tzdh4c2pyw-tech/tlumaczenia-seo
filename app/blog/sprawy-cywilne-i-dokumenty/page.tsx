import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprawy cywilne i dokumenty procesowe",
  description: "Dokumenty w sprawach rodzinnych, spadkowych, o zapłatę, cywilnych, urzędowych i prywatnych z perspektywy tłumaczenia.",
  alternates: {
    canonical: "/blog/sprawy-cywilne-i-dokumenty"
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
            Sprawy cywilne
          </p>

          <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight text-white">
            Sprawy cywilne i dokumenty procesowe
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Dokumenty w sprawach rodzinnych, spadkowych, o zapłatę, cywilnych, urzędowych i prywatnych z perspektywy tłumaczenia.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/70 to-slate-950/85 p-6">
            <h2 className="text-3xl font-black text-white">Zakres tematyczny</h2>
            <p className="mt-4 leading-8 text-slate-300">
              W sprawach cywilnych znaczenie ma cel użycia dokumentu: sąd,
              urząd, kancelaria, notariusz, uczelnia, pracodawca albo druga
              strona postępowania. Ten sam dokument może wymagać różnego
              przygotowania w zależności od kontekstu.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Typowe tematy</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>sprawy rodzinne, rozwód, alimenty i opieka,</li>
              <li>sprawy spadkowe, testamenty, akty stanu cywilnego,</li>
              <li>umowy, pełnomocnictwa, oświadczenia i roszczenia,</li>
              <li>korespondencja stron i załączniki do sprawy,</li>
              <li>dokumenty z Ukrainy w polskich sprawach cywilnych.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Cel blogowy</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Dział ma porządkować problemy praktyczne: jakie dokumenty
              występują, co trzeba zachować w tłumaczeniu i jak uniknąć błędów
              przy przygotowaniu materiałów.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
