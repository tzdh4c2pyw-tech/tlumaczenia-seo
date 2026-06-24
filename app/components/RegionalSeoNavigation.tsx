import Link from "next/link";

const regionalLinks = [
  {
    title: "Kraków SEO",
    href: "/krakow",
    badge: "Miasto",
    description:
      "Strony lokalne dla Krakowa: ukraiński, rosyjski, angielski, sąd, Policja, Prokuratura, dowody cyfrowe, BLIK i kryptowaluty."
  },
  {
    title: "Małopolskie SEO",
    href: "/malopolskie",
    badge: "Region",
    description:
      "Tłumaczenia dokumentów z Ukrainy i tłumaczenia poświadczone dla miast w Małopolsce: Kraków, Wieliczka, Skawina, Tarnów, Nowy Sącz i okolice."
  },
  {
    title: "Lokalne artykuły SEO",
    href: "/lokalnie",
    badge: "Artykuły",
    description:
      "Artykuły pod frazy lokalne: tłumacz przysięgły, dokumenty z Ukrainy, sąd, urząd, Policja, Prokuratura i dowody cyfrowe."
  }
];

export default function RegionalSeoNavigation() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/30 ring-1 ring-white/5">
        <div className="grid gap-0 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="border-b border-white/10 bg-white/[0.04] p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-amber-300">
              SEO lokalne
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-white md:text-3xl">
              Kraków, Małopolskie i lokalne ścieżki tłumaczeń.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Ten blok wzmacnia linkowanie wewnętrzne do sekcji lokalnych i
              pomaga użytkownikowi szybko przejść do właściwej grupy stron:
              miasto, region albo artykuły lokalne.
            </p>
          </div>

          <div className="grid gap-3 p-4 md:grid-cols-3 md:p-5">
            {regionalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-amber-300/70 hover:bg-white/[0.07]"
              >
                <span className="inline-flex rounded-full bg-amber-300/15 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.2em] text-amber-200">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-xl font-black text-white group-hover:text-amber-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-black text-amber-200">
                  Przejdź →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
