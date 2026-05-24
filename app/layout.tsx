import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cerrajería SacuLnaI · Cerrajero 24hs",
  description:
    "Cerrajero de barrio en Zona Sur, 24 horas. Aperturas sin romper, cambio de cerraduras, copias en el acto. Atención personal.",
  metadataBase: new URL("https://saculnai.com.ar"),
  openGraph: {
      title: "Cerrajería SacuLnaI · 24hs Zona Sur",
    description:
      "Aperturas, urgencias y cerrajería en todo Zona Sur. Atención 24hs.",
    type: "website",
    locale: "es_AR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${sans.variable} ${display.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Locksmith",
              name: "Cerrajería SacuLnaI",
              telephone: "+541130942292",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Carlos Casares 2987",
                addressLocality: "Lanús Oeste",
                addressRegion: "Buenos Aires",
                postalCode: "1824",
                addressCountry: "AR",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              areaServed: "Todo Zona Sur",
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}
