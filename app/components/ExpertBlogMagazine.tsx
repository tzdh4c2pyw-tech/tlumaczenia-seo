import Link from "next/link";

const departments = [
  {
    href: "/blog/prawo-karne-przestepstwa-i-akta",
    label: "Prawo karne",
    title: "Przestępstwa, akta i materiały procesowe",
    tone: "from-red-950/75 to-slate-950/80",
    description:
      "Opracowania o tłumaczeniu akt sprawy karnej, zawiadomień, protokołów, postanowień, przestępstw gospodarczych, oszustw i wyłudzeń."
  },
  {
    href: "/blog/sprawy-cywilne-i-dokumenty",
    label: "Sprawy cywilne",
    title: "Dokumenty cywilne, rodzinne i spadkowe",
    tone: "from-indigo-950/75 to-slate-950/80",
    description:
      "Dokumenty do spraw cywilnych: rozwód, alimenty, spadek, pełnomocnictwo, umowa, oświadczenie, roszczenie i korespondencja procesowa."
  },
  {
    href: "/blog/policja-prokuratura-sad",
    label: "Instytucje",
    title: "Policja, Prokuratura i sąd",
    tone: "from-zinc-900/80 to-slate-950/80",
    description:
      "Jak czytać i przygotowywać dokumenty związane z organami procesowymi: wezwania, protokoły, załączniki, pisma i materiały do akt."
  },
  {
    href: "/blog/dowody-cyfrowe-i-korespondencja",
    label: "Dowody cyfrowe",
    title: "Komunikatory, screeny, transakcje i pliki",
    tone: "from-cyan-950/70 to-slate-950/80",
    description:
      "Telegram, WhatsApp, Signal, e-mail, SMS, BLIK, kryptowaluty, PDF, zrzuty ekranu i inne materiały cyfrowe w tłumaczeniu."
  },
  {
    href: "/blog/tlumaczenia-ustne-i-konferencje",
    label: "Ustne i konferencje",
    title: "Spotkania, konferencje i terminologia",
    tone: "from-amber-950/65 to-slate-950/80",
    description:
      "Przygotowanie do tłumaczenia ustnego: agenda, glosariusz, materiały konferencyjne, rozmowy formalne, spotkania z prawnikiem i instytucją."
  }
];

export default function ExpertBlogMagazine() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-2xl shadow-black/30">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-200">
            Magazyn ekspercki
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-white">
                Prawo, dokumenty, postępowania i język.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
              Blog jest uporządkowany jak biblioteka wiedzy: sprawy karne,
              sprawy cywilne, sąd, Policja, Prokuratura, dowody cyfrowe,
              konferencje oraz tłumaczenia ustne. Każdy dział prowadzi do
              praktycznych opracowań, nie do reklamowych opisów usług.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-[1.65rem] border border-white/10 bg-gradient-to-br ${item.tone} p-5 text-slate-100 no-underline shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-amber-200/50`}
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
        </div>
      </div>
    </section>
  );
}
