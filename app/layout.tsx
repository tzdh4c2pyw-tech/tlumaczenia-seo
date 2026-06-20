import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://tlumaczenia-seo-vadym-rekel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Tłumaczenia ukraiński, rosyjski, angielski | Tłumacz przysięgły Kraków",
    template: "%s | Tłumaczenia ukraiński, rosyjski, angielski"
  },
  description:
    "Specjalistyczne tłumaczenia poświadczone i prawnicze: język ukraiński, rosyjski i angielski. Kraków, dokumenty zdalnie, sprawy sądowe, karne, cywilne, IT, cyber, forensic.",
  keywords: [
    "tłumacz przysięgły ukraiński",
    "tłumacz przysięgły rosyjski",
    "tłumacz przysięgły angielski",
    "tłumacz ukraiński Kraków",
    "tłumacz rosyjski Kraków",
    "tłumacz angielski Kraków",
    "tłumaczenia prawnicze",
    "tłumaczenia sądowe",
    "tłumaczenia dla Policji",
    "tłumaczenia dla prokuratury",
    "tłumaczenia w sprawach karnych",
    "tłumaczenia dokumentów z Ukrainy",
    "tłumaczenia dokumentów z Rosji",
    "tłumaczenia materiału cyfrowego",
    "tłumaczenia forensic",
    "tłumaczenia oszustwa internetowe",
    "tłumaczenia BLIK",
    "tłumaczenia kryptowaluty"
  ],
  authors: [
    {
      name: "Vadym Rekel",
      url: siteUrl
    }
  ],
  creator: "Vadym Rekel",
  publisher: "Vadym Rekel",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Tłumaczenia ukraiński, rosyjski, angielski",
    title:
      "Tłumaczenia ukraiński, rosyjski, angielski | Tłumacz przysięgły Kraków",
    description:
      "Specjalistyczne tłumaczenia poświadczone i prawnicze dla sądów, Policji, prokuratur, kancelarii prawnych, instytucji i klientów prywatnych.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tłumaczenia ukraiński, rosyjski, angielski"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tłumaczenia ukraiński, rosyjski, angielski | Tłumacz przysięgły Kraków",
    description:
      "Tłumaczenia poświadczone, prawnicze, sądowe, karne, cywilne, IT, cyber i forensic."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "legal translation services"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#123c31"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: "Tłumaczenia ukraiński, rosyjski, angielski — Vadym Rekel",
    url: siteUrl,
    areaServed: [
      {
        "@type": "City",
        name: "Kraków"
      },
      {
        "@type": "Country",
        name: "Polska"
      }
    ],
    knowsLanguage: ["pl", "uk", "ru", "en"],
    serviceType: [
      "tłumaczenia poświadczone języka ukraińskiego",
      "tłumaczenia poświadczone języka rosyjskiego",
      "tłumaczenia poświadczone języka angielskiego",
      "tłumaczenia prawnicze",
      "tłumaczenia sądowe",
      "tłumaczenia dla Policji",
      "tłumaczenia dla prokuratury",
      "tłumaczenia w sprawach karnych",
      "tłumaczenia w sprawach cywilnych",
      "tłumaczenia materiału cyfrowego",
      "tłumaczenia forensic",
      "tłumaczenia oszustw internetowych",
      "tłumaczenia BLIK",
      "tłumaczenia kryptowalut"
    ],
    founder: {
      "@type": "Person",
      name: "Vadym Rekel",
      jobTitle: "Tłumacz przysięgły"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Tłumaczenia ukraiński, rosyjski, angielski",
    inLanguage: "pl-PL",
    publisher: {
      "@id": `${siteUrl}/#organization`
    }
  };

  return (
    <html lang="pl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />

        {children}
      </body>
    </html>
  );
}