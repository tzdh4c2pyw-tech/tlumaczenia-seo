import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumaczenia dowodów cyfrowych w sprawach karnych",
  description: "Komunikatory, zrzuty ekranu, wiadomości, e-maile, BLIK, kryptowaluty i inne materiały cyfrowe w tłumaczeniu.",
  alternates: {
    canonical: "/blog/tlumaczenia-dowodow-cyfrowych-w-sprawach-karnych"
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
            Dowody cyfrowe
          </p>

          <h1 className="mt-5 text-6xl font-black tracking-tight text-white">
            Tłumaczenia dowodów cyfrowych w sprawach karnych
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Komunikatory, zrzuty ekranu, wiadomości, e-maile, BLIK, kryptowaluty i inne materiały cyfrowe w tłumaczeniu.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Krótka odpowiedź</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Dowód cyfrowy powinien być przygotowany tak, aby zachować kontekst:
              nadawcę, odbiorcę, datę, kolejność wiadomości, nazwę aplikacji,
              numer transakcji albo inne oznaczenia techniczne. Bez kontekstu
              tłumaczenie może być mniej czytelne dla sądu, Policji,
              Prokuratury lub pełnomocnika.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-3xl font-black text-white">Typowe materiały</h2>
            <ul className="mt-4 grid gap-3 text-slate-300">
              <li>Telegram, WhatsApp, Signal, Messenger, SMS i e-mail,</li>
              <li>zrzuty ekranu, eksporty rozmów i pliki PDF,</li>
              <li>historia transakcji BLIK, potwierdzenia przelewów i kryptowaluty,</li>
              <li>nagrania, transkrypcje i materiały mieszane.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-amber-200/30 bg-amber-100 p-6 text-slate-950">
            <h2 className="text-3xl font-black text-slate-950">Praktyczna checklista</h2>
            <p className="mt-4 leading-8 text-slate-800">
              Materiał cyfrowy najlepiej przekazać w oryginalnym układzie,
              z zachowaniem kolejności, metadanych widocznych na ekranie oraz
              informacji, które fragmenty mają być tłumaczone.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
