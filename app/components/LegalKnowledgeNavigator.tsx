import Link from "next/link";

const mainTracks = [
  {
    href: "/blog/tlumaczenia-w-sprawach-karnych",
    label: "Prawo karne",
    title: "Sprawy karne, przestępstwa i akta",
    description:
      "Protokoły, postanowienia, zawiadomienia, przestępstwa gospodarcze, oszustwa, wyłudzenia, fałszerstwa i materiały procesowe."
  },
  {
    href: "/blog/tlumaczenia-w-sprawach-cywilnych",
    label: "Sprawy cywilne",
    title: "Dokumenty cywilne, rodzinne i spadkowe",
    description:
      "Rozwód, alimenty, spadek, pełnomocnictwo, umowa, oświadczenie, roszczenie, załącznik i dokument urzędowy."
  },
  {
    href: "/blog/tlumaczenia-dla-policji-prokuratury-i-sadu",
    label: "Instytucje",
    title: "Sąd, Policja i Prokuratura",
    description:
      "Dokumenty organów procesowych, wezwania, pisma, akta, załączniki, materiały składane w sądzie i postępowaniu przygotowawczym."
  }
];

const supportingTracks = [
  {
    href: "/blog/tlumaczenia-dowodow-cyfrowych-w-sprawach-karnych",
    title: "Dowody cyfrowe i korespondencja",
    description:
      "Telegram, WhatsApp, Signal, e-mail, SMS, BLIK, kryptowaluty, pliki PDF i zrzuty ekranu."
  },
  {
    href: "/blog/tlumaczenia-ustne-konferencje-i-spotkania",
    title: "Tłumaczenia ustne i konferencje",
    description:
      "Spotkania, konferencje, rozmowy formalne, terminologia, agenda i materiały przygotowawcze."
  },
  {
    href: "/blog/tlumaczenia-dokumentow-z-ukrainy-w-postepowaniach",
    title: "Dokumenty z Ukrainy w postępowaniach",
    description:
      "Dokumenty ukraińskie używane w sprawach karnych, cywilnych, urzędowych i instytucjonalnych."
  }
];

export default function LegalKnowledgeNavigator() {
  return (
    <section className="px-6 py-16" data-component="legal-knowledge-navigator">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-black/25">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-200">
              Ścieżki bloga eksperckiego
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white">
              Prawo karne, cywilne, sąd, Policja, Prokuratura i materiały dowodowe.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
            Ten blok prowadzi do najważniejszych opracowań blogowych. Nie jest
            katalogiem usług — porządkuje wiedzę o dokumentach, aktach,
            korespondencji, sprawach procesowych, konferencjach i tłumaczeniach
            ustnych.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {mainTracks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[1.65rem] border border-amber-200/25 bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-slate-100 no-underline shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-amber-200/70"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">
                {item.label}
              </span>
              <span className="mt-4 block text-2xl font-black leading-tight text-white">
                {item.title}
              </span>
              <span className="mt-4 block text-sm leading-7 text-slate-300">
                {item.description}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {supportingTracks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4 text-slate-100 no-underline transition hover:border-amber-200/50 hover:bg-slate-900"
            >
              <span className="block text-lg font-black leading-tight text-white">
                {item.title}
              </span>
              <span className="mt-3 block text-sm leading-6 text-slate-300">
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
