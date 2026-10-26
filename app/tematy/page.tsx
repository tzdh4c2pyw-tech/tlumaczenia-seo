import type { Metadata } from "next";
import Link from "next/link";
import { getAllTopicClusters } from "@/lib/topic-clusters";
import { mailtoHref } from "@/lib/mailto";
import ContentHubLinks from "../components/ContentHubLinks";
import ExpertConversionSections from "../components/ExpertConversionSections";
import RegionalSeoNavigation from "../components/RegionalSeoNavigation";
import LegalKnowledgeNavigator from "@/app/components/LegalKnowledgeNavigator";
import LegalGlossaryTeaser from "@/app/components/LegalGlossaryTeaser";
import InternalKnowledgeLinks from "@/app/components/InternalKnowledgeLinks";

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
      url: `https://seo.vadymrekel.pro/tematy/${cluster.slug}`
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

      

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">Tematy z praktyki tłumacza</span>
          <h1>Tematy eksperckie o dokumentach, sprawach i tłumaczeniach specjalistycznych.</h1>
          <p className="lead">
            Uporządkowane działy prowadzą do najważniejszych artykułów, usług i
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
            <h2>Dlaczego taki podział spraw?</h2>
            <p>
              Wybierz rodzaj dokumentu lub czynności, aby znaleźć potrzebne
              informacje o przygotowaniu materiału, zakresie tłumaczenia i kontakcie.
            </p>
          </div>
        </aside>
      </section>

      <RegionalSeoNavigation />

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Mapa ekspercka</p>
            <h2>Główne działy tematyczne.</h2>
          </div>
          <p>
            Każdy dział łączy poradniki, opisy spraw i najczęstsze
            pytania. Pomaga znaleźć odpowiedź przed zleceniem tłumaczenia.
          </p>
        </div>

        <div className="grid-3">
          {clusters.map((cluster) => (
            <article className="card card-gold" key={cluster.slug}>
              <span className="tag">Dział ekspercki</span>
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
      <LegalKnowledgeNavigator />
          <LegalGlossaryTeaser />
          <InternalKnowledgeLinks />
    </main>
  );
}
