import Link from "next/link";
import type { ReactNode } from "react";

type LocalPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children: ReactNode;
};

export function LocalPageShell({
  eyebrow,
  title,
  description,
  primaryHref = "/kontakt",
  primaryLabel = "Zapytaj o wycenę",
  secondaryHref = "/dobierz-tlumaczenie",
  secondaryLabel = "Dobierz tłumaczenie",
  children
}: LocalPageShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#392018_0,#101827_36%,#050816_72%)] text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.75fr] lg:items-end">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/30 ring-1 ring-white/5 backdrop-blur md:p-10">
            <p className="inline-flex rounded-full bg-amber-300/15 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.26em] text-amber-200">
              {eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={primaryHref}
                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-200"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-amber-300/70 hover:text-amber-100"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/30 ring-1 ring-white/5 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
              Szybka ścieżka
            </p>
            <div className="mt-5 space-y-3">
              <Link
                href="/ukrainski"
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-100 transition hover:border-amber-300/60 hover:text-amber-100"
              >
                Tłumaczenia ukraińskie →
              </Link>
              <Link
                href="/tematy/dokumenty-z-ukrainy"
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-100 transition hover:border-amber-300/60 hover:text-amber-100"
              >
                Dokumenty z Ukrainy →
              </Link>
              <Link
                href="/tematy/sady-policja-prokuratura"
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-100 transition hover:border-amber-300/60 hover:text-amber-100"
              >
                Sąd, Policja, Prokuratura →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {children}
    </main>
  );
}

type LocalCardGridProps = {
  children: ReactNode;
};

export function LocalCardGrid({ children }: LocalCardGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </section>
  );
}

type LocalCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export function LocalCard({ eyebrow, title, description, href }: LocalCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/25 ring-1 ring-white/5 transition hover:-translate-y-1 hover:border-amber-300/60 hover:bg-slate-900/80"
    >
      <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-amber-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-black leading-tight text-white group-hover:text-amber-100">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      <span className="mt-6 inline-flex text-sm font-black text-amber-200">
        Czytaj dalej →
      </span>
    </Link>
  );
}

type LocalArticleShellProps = {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LocalArticleShell({
  backHref,
  backLabel,
  eyebrow,
  title,
  intro,
  children
}: LocalArticleShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#392018_0,#101827_36%,#050816_72%)] text-slate-50">
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Link
          href={backHref}
          className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-amber-200 transition hover:border-amber-300/60 hover:text-amber-100"
        >
          ← {backLabel}
        </Link>

        <header className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/30 ring-1 ring-white/5 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-amber-300">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">{intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-amber-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-amber-200"
            >
              Zapytaj o wycenę
            </Link>
            <Link
              href="/dobierz-tlumaczenie"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-amber-300/70 hover:text-amber-100"
            >
              Dobierz tłumaczenie
            </Link>
            <Link
              href="/faq"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-amber-300/70 hover:text-amber-100"
            >
              FAQ
            </Link>
          </div>
        </header>

        <div className="mt-10 space-y-6">{children}</div>
      </article>
    </main>
  );
}

type LocalTextSectionProps = {
  heading: string;
  paragraphs: string[];
};

export function LocalTextSection({ heading, paragraphs }: LocalTextSectionProps) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/25 ring-1 ring-white/5 md:p-8">
      <h2 className="text-2xl font-black text-white">{heading}</h2>
      <div className="mt-5 space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-slate-300">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

type LocalFaqProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

export function LocalFaq({ faqs }: LocalFaqProps) {
  return (
    <section className="rounded-[1.75rem] border border-amber-300/15 bg-amber-300/[0.06] p-6 shadow-xl shadow-black/25 ring-1 ring-white/5 md:p-8">
      <h2 className="text-2xl font-black text-white">Najczęstsze pytania</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-2xl border border-white/10 bg-slate-950/55 p-5">
            <h3 className="font-black text-amber-100">{faq.question}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

type LocalRelatedLinksProps = {
  links: {
    label: string;
    href: string;
  }[];
};

export function LocalRelatedLinks({ links }: LocalRelatedLinksProps) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-xl shadow-black/25 ring-1 ring-white/5 md:p-8">
      <h2 className="text-2xl font-black text-white">Powiązane strony</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-amber-300/70 hover:text-amber-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
