import type { Metadata } from "next";
import Link from "next/link";
import { getAllTopicClusters } from "@/lib/topic-clusters";
import { mailtoHref } from "@/lib/mailto";
import ContentHubLinks from "../components/ContentHubLinks";
import ExpertConversionSections from "../components/ExpertConversionSections";

export const metadata: Metadata = {
  title: "Tematy eksperckie | Tłumaczenia specjalistyczne",
  description:
    "Huby tematyczne o tłumaczeniach poświadczonych i specjalistycznych: dokumenty z Ukrainy, sądy, Policja, prokuratura, cyber, forensic, wynagrodzenie i obowiązki tłumacza.",
  alternates: {
    canonical: "/tematy"
  },
  openGraph: {
    title: "Tematy eksperckie | Tłumaczenia specjalistyczne",
    description:
      "Uporządkowane centra wiedzy dla klientów, organów, kancelarii i instytucji."
  }
};

export default function TopicClustersPage() {
  const clusters = getAllTopicClusters();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tematy eksperckie | Tłumaczenia specjalistyczne",
    description:
      "Centra wiedzy o tłumaczeniach poświadczonych i specjalistycznych.",
    hasPart: clusters.map((cluster) => ({
      "@type": "WebPage",
      name: cluster.title,
      description: cluster.description,
      url: `https://tlumaczenia-seo.vercel.app/tematy/${cluster.slug}`
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />

      <div className="topbar">
        <nav className="nav">
          <Link className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span>
              <span className="brand-title">Tematy eksperckie</span>
              <span className="brand-subtitle">SEO · AI · baza wiedzy</span>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Strona główna</Link>
            <Link href="/blog">Baza wiedzy</Link>
            <Link href="/pdf-na-tekst">PDF na TXT</Link>
            <a className="nav-cta" href={mailtoHref}>
              Wyślij do wyceny
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">Centra wiedzy dla SEO i AI</span>
          <h1>Tematy eksperckie o tłumaczeniach specjalistycznych.</h1>
          <p className="lead">
            Uporządkowane huby prowadzą do najważniejszych artykułów, usług i
            zagadnień: tłumaczenia poświadczone, dokumenty z Ukrainy, sądy,
            Policja, prokuratura, cyber, forensic, wynagrodzenie i obowiązki
            tłumacza.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={mailtoHref}>
              Wyślij materiał do wyceny
            </a>
            <Link className="button button-secondary" href="/blog">
              Przejdź do bloga
            </Link>
          </div>
        </div>

        <aside className="hero-side">
          <div className="side-card">
            <h2>Dlaczego huby tematyczne?</h2>
            <p>
              Huby wzmacniają strukturę strony: grupują artykuły, usługi i
              pytania użytkowników w logiczne klastry. To pomaga wyszukiwarkom,
              modelom AI i użytkownikom szybciej zrozumieć specjalizację strony.
            </p>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Mapa ekspercka</p>
            <h2>Główne klastry tematyczne.</h2>
          </div>
          <p>
            Każdy hub łączy artykuły poradnikowe, landing pages i najczęstsze
            pytania. Dzięki temu strona ma mocniejszą architekturę informacji.
          </p>
        </div>

        <div className="grid-3">
          {clusters.map((cluster) => (
            <article className="card card-gold" key={cluster.slug}>
              <span className="tag">Hub ekspercki</span>
              <h3>{cluster.title}</h3>
              <p>{cluster.description}</p>

              <div className="article-meta">
                <span>{cluster.keywords[0]}</span>
                <span>{cluster.articleSlugs.length} artykuły</span>
              </div>

              <Link className="card-link" href={`/tematy/${cluster.slug}`}>
                Otwórz temat →
              </Link>
            </article>
          ))}
        </div>
      </section>
    
      <ContentHubLinks />

      <ExpertConversionSections />
</main>
  );
}
