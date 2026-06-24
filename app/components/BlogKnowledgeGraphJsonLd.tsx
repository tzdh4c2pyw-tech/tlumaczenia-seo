import { blogExpertIndexItems } from "@/app/components/BlogExpertIndex";

export default function BlogKnowledgeGraphJsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://tlumaczenia-seo.vercel.app";

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Indeks ekspercki bloga",
    description:
      "Indeks opracowań blogowych dotyczących prawa karnego, spraw cywilnych, sądu, Policji, Prokuratury, dowodów cyfrowych, konferencji, tłumaczeń ustnych i dokumentów z Ukrainy.",
    itemListElement: blogExpertIndexItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${siteUrl}${item.href}`,
      description: item.description
    }))
  };

  const definedTerms = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Pojęcia bloga prawno-tłumaczeniowego",
    description:
      "Pojęcia używane w opracowaniach blogowych o tłumaczeniu dokumentów prawnych, procesowych, cyfrowych i konferencyjnych.",
    hasDefinedTerm: blogExpertIndexItems.flatMap((item) =>
      item.terms.map((term) => ({
        "@type": "DefinedTerm",
        name: term,
        inDefinedTermSet: "Pojęcia bloga prawno-tłumaczeniowego"
      }))
    )
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTerms) }}
      />
    </>
  );
}
