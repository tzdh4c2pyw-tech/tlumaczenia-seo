export const dynamic = "force-static";

const siteAreas = [
  {
    id: "home",
    title: "Strona główna",
    path: "/",
    role: "entry",
    connectsTo: [
      "/blog",
      "/poradniki",
      "/tematy",
      "/dobierz-tlumaczenie",
      "/kontakt",
      "/mapa-strony"
    ]
  },
  {
    id: "blog",
    title: "Blog ekspercki",
    path: "/blog",
    role: "knowledge",
    connectsTo: [
      "/blog/prawo-karne-przestepstwa-i-akta",
      "/blog/sprawy-cywilne-i-dokumenty",
      "/blog/policja-prokuratura-sad",
      "/blog/dowody-cyfrowe-i-korespondencja",
      "/blog/slownik-prawno-tlumaczeniowy",
      "/poradniki",
      "/tematy"
    ]
  },
  {
    id: "criminal-law",
    title: "Prawo karne, przestępstwa i akta",
    path: "/blog/prawo-karne-przestepstwa-i-akta",
    role: "article-cluster",
    connectsTo: [
      "/blog/tlumaczenia-w-sprawach-karnych",
      "/blog/tlumaczenia-dla-policji-prokuratury-i-sadu",
      "/blog/tlumaczenia-dowodow-cyfrowych-w-sprawach-karnych",
      "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych",
      "/tematy/sady-policja-prokuratura"
    ]
  },
  {
    id: "civil-documents",
    title: "Sprawy cywilne i dokumenty",
    path: "/blog/sprawy-cywilne-i-dokumenty",
    role: "article-cluster",
    connectsTo: [
      "/blog/tlumaczenia-w-sprawach-cywilnych",
      "/blog/tlumaczenia-dokumentow-z-ukrainy-w-postepowaniach",
      "/tematy/dokumenty-z-ukrainy",
      "/dobierz-tlumaczenie"
    ]
  },
  {
    id: "authorities",
    title: "Sąd, Policja i Prokuratura",
    path: "/blog/policja-prokuratura-sad",
    role: "article-cluster",
    connectsTo: [
      "/blog/tlumaczenia-dla-policji-prokuratury-i-sadu",
      "/tematy/sady-policja-prokuratura",
      "/poradniki",
      "/kontakt"
    ]
  },
  {
    id: "digital-evidence",
    title: "Dowody cyfrowe i korespondencja",
    path: "/blog/dowody-cyfrowe-i-korespondencja",
    role: "article-cluster",
    connectsTo: [
      "/blog/tlumaczenia-dowodow-cyfrowych-w-sprawach-karnych",
      "/poradniki/tlumaczenie-dowodow-cyfrowych-w-sprawach-karnych",
      "/poradniki/tlumaczenie-korespondencji-telegram-whatsapp-signal",
      "/pdf-na-tekst"
    ]
  },
  {
    id: "ukraine-documents",
    title: "Dokumenty z Ukrainy",
    path: "/blog/tlumaczenia-dokumentow-z-ukrainy-w-postepowaniach",
    role: "article-cluster",
    connectsTo: [
      "/tematy/dokumenty-z-ukrainy",
      "/poradniki/tlumaczenie-dokumentow-z-ukrainy-do-sadu-w-polsce",
      "/lokalnie/tlumaczenie-dokumentow-z-ukrainy-krakow-malopolskie",
      "/kontakt"
    ]
  },
  {
    id: "guides",
    title: "Poradniki",
    path: "/poradniki",
    role: "guide-index",
    connectsTo: [
      "/blog",
      "/tematy",
      "/dobierz-tlumaczenie",
      "/faq",
      "/kontakt"
    ]
  },
  {
    id: "topics",
    title: "Tematy eksperckie",
    path: "/tematy",
    role: "topic-index",
    connectsTo: [
      "/blog",
      "/poradniki",
      "/tematy/tlumaczenia-poswiadczone",
      "/tematy/dokumenty-z-ukrainy",
      "/tematy/sady-policja-prokuratura"
    ]
  },
  {
    id: "decision",
    title: "Dobierz tłumaczenie",
    path: "/dobierz-tlumaczenie",
    role: "decision-support",
    connectsTo: [
      "/blog",
      "/poradniki",
      "/faq",
      "/kontakt"
    ]
  },
  {
    id: "contact",
    title: "Kontakt",
    path: "/kontakt",
    role: "conversion",
    connectsTo: [
      "/",
      "/blog",
      "/poradniki",
      "/dobierz-tlumaczenie"
    ]
  }
];

export async function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://tlumaczenia-seo.vercel.app";

  const graph = siteAreas.map((area) => ({
    ...area,
    url: `${siteUrl}${area.path}`,
    connectsToUrls: area.connectsTo.map((path) => `${siteUrl}${path}`)
  }));

  return Response.json({
    name: "Internal link graph",
    language: "pl",
    purpose:
      "Mapa powiązań między najważniejszymi stronami serwisu: blog, poradniki, tematy, FAQ, dokumenty, materiały dowodowe i kontakt.",
    generatedBy: "static-route",
    nodes: graph,
    edges: graph.flatMap((area) =>
      area.connectsTo.map((target) => ({
        from: area.path,
        to: target,
        fromUrl: `${siteUrl}${area.path}`,
        toUrl: `${siteUrl}${target}`
      }))
    )
  });
}
