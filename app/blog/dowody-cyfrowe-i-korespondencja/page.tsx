import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dowody cyfrowe i korespondencja w tłumaczeniu",
  description: "Komunikatory, wiadomości, e-maile, SMS-y, screeny, transakcje, BLIK, kryptowaluty i pliki PDF jako materiał do tłumaczenia.",
  alternates: {
    canonical: "/blog/dowody-cyfrowe-i-korespondencja"
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
            Dowody cyfrowe
          </p>

          <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight text-white">
            Dowody cyfrowe i korespondencja w tłumaczeniu
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Komunikatory, wiadomości, e-maile, SMS-y, screeny, transakcje, BLIK, kryptowaluty i pliki PDF jako materiał do tłumaczenia.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/70 to-slate-950/85 p-6">
            <h2 className="text-3xl font-black text-white">Zakres tematyczny</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Materiały cyfrowe wymagają zachowania kontekstu: kto pisze, do
              kogo, kiedy, w jakiej aplikacji, w jakiej kolejności i z jakimi
              oznaczeniami technicznymi. Bez tego tłumaczenie może tracić
              wartość informacyjną.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Typowe materiały</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>Telegram, WhatsApp, Signal, Messenger, SMS i e-mail,</li>
              <li>zrzuty ekranu, eksporty rozmów, pliki PDF,</li>
              <li>potwierdzenia transakcji, BLIK, przelewy i kryptowaluty,</li>
              <li>nagrania, transkrypcje i materiały mieszane,</li>
              <li>materiały cyfrowe w sprawach karnych i cywilnych.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Zasada przygotowania</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Najlepiej przekazać materiał w oryginalnym układzie, bez
              wycinania kontekstu, z informacją, które fragmenty mają zostać
              przetłumaczone.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
