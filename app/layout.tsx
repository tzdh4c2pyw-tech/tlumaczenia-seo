import type { Metadata } from "next";
import "./globals.css";
import FloatingCta from "./components/FloatingCta";
import VisualScaleGuard from "./components/VisualScaleGuard";

import { TextVisualPolish } from "./components/TextVisualPolish";
const siteUrl = "https://tlumaczenia-seo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Tłumaczenia ukraiński, rosyjski, angielski | Prawo, sądy, cyber",
    template: "%s | Tłumaczenia specjalistyczne"
  },
  description:
    "Specjalistyczne tłumaczenia z języka ukraińskiego, rosyjskiego i angielskiego. Dokumenty prawnicze, sądowe, urzędowe, sprawy karne, cywilne, Policja, prokuratura, materiał cyfrowy, BLIK, kryptowaluty i forensic.",
  keywords: [
    "tłumacz przysięgły ukraiński",
    "tłumacz ukraiński Kraków",
    "tłumacz przysięgły rosyjski",
    "tłumaczenia angielski",
    "tłumaczenia prawnicze",
    "tłumaczenia dla sądu",
    "tłumaczenia dla Policji",
    "tłumaczenia dla prokuratury",
    "tłumaczenie dokumentów z Ukrainy",
    "tłumaczenie materiału cyfrowego",
    "BLIK",
    "kryptowaluty",
    "forensic",
    "PDF na TXT",
    "konwerter PDF na tekst",
    "tłumaczenie PDF"
  ],
  authors: [
    {
      name: "Vadym Rekel"
    }
  ],
  creator: "Vadym Rekel",
  publisher: "Vadym Rekel",
  alternates: {
    canonical: siteUrl
  },
  verification: {
    google: "IRGY-E1KJFL1eUQihR952TtnvoTINcS0GzMSq0XJbfQ"
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    title:
      "Tłumaczenia ukraiński, rosyjski, angielski | Prawo, sądy, cyber",
    description:
      "Tłumaczenia specjalistyczne: ukraiński, rosyjski, angielski, prawo, sądy, Policja, prokuratura, dokumenty z Ukrainy, cyber, BLIK, kryptowaluty i forensic.",
    siteName: "Tłumaczenia specjalistyczne Vadym Rekel"
  },
  robots: {
    index: true,
    follow: true
  }
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tłumaczenia specjalistyczne Vadym Rekel",
  url: siteUrl,
  areaServed: {
    "@type": "Country",
    name: "Polska"
  },
  availableLanguage: [
    {
      "@type": "Language",
      name: "Polish"
    },
    {
      "@type": "Language",
      name: "Ukrainian"
    },
    {
      "@type": "Language",
      name: "Russian"
    },
    {
      "@type": "Language",
      name: "English"
    }
  ],
  serviceType: [
    "tłumaczenia poświadczone",
    "tłumaczenia prawnicze",
    "tłumaczenia sądowe",
    "tłumaczenia dla Policji",
    "tłumaczenia dla prokuratury",
    "tłumaczenia dokumentów z Ukrainy",
    "tłumaczenia materiału cyfrowego",
    "tłumaczenia w sprawach cyber",
    "tłumaczenia w sprawach BLIK",
    "tłumaczenia w sprawach kryptowalut",
    "tłumaczenia forensic",
    "PDF na TXT",
    "konwerter PDF na tekst"
  ],
  audience: [
    {
      "@type": "Audience",
      audienceType: "sądy"
    },
    {
      "@type": "Audience",
      audienceType: "Policja"
    },
    {
      "@type": "Audience",
      audienceType: "prokuratury"
    },
    {
      "@type": "Audience",
      audienceType: "organy ścigania"
    },
    {
      "@type": "Audience",
      audienceType: "kancelarie prawne"
    },
    {
      "@type": "Audience",
      audienceType: "firmy"
    },
    {
      "@type": "Audience",
      audienceType: "osoby prywatne"
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <TextVisualPolish />
        <VisualScaleGuard />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd)
          }}
        />

        {children}

        <FloatingCta />
      </body>
    </html>
  );
}
