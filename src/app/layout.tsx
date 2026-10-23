import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteFooterGate from "./_components/SiteFooterGate";
import SiteHeaderGate from "./_components/SiteHeaderGate";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  AUTHOR_NAME,
  AUTHOR_JOB_TITLE,
  CONTACT,
  OFFICE_TORINO,
  SAME_AS,
  absoluteUrl,
} from "./lib/site";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${AUTHOR_NAME}, Consulente Finanziario CFP®`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  keywords: [
    "consulente finanziario",
    "consulente finanziario CFP",
    "pianificazione finanziaria",
    "pianificazione patrimoniale",
    "previdenza complementare",
    "investimenti",
    "CFP",
    "Amine Alahiyane",
    "consulente finanziario Pinerolo",
    "consulente finanziario Pinerolese",
    "consulente finanziario Torino",
    "Pinerolo",
    "Pinerolese",
    "Val Pellice",
    "Val Chisone",
    "Torino",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${AUTHOR_NAME}, Consulente Finanziario CFP®`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${AUTHOR_NAME}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationId = `${SITE_URL}/#organization`;
const personId = `${SITE_URL}/#amine`;
const torinoOfficeId = `${SITE_URL}/#studio-torino`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["FinancialService", "ProfessionalService"],
      "@id": organizationId,
      name: SITE_NAME,
      alternateName: `${AUTHOR_NAME} - Consulente Finanziario`,
      url: SITE_URL,
      image: absoluteUrl("/AMINE-2-scaled.jpg"),
      logo: absoluteUrl("/logo.png"),
      email: CONTACT.email,
      telephone: CONTACT.phone,
      vatID: CONTACT.vatId,
      priceRange: "€€",
      description: SITE_DESCRIPTION,
      areaServed: [
        { "@type": "City", name: "Pinerolo" },
        { "@type": "AdministrativeArea", name: "Pinerolese" },
        { "@type": "AdministrativeArea", name: "Val Pellice" },
        { "@type": "AdministrativeArea", name: "Val Chisone" },
        { "@type": "City", name: "Torino" },
        { "@type": "Country", name: "Italia" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT.address.streetAddress,
        postalCode: CONTACT.address.postalCode,
        addressLocality: CONTACT.address.addressLocality,
        addressRegion: CONTACT.address.addressRegion,
        addressCountry: CONTACT.address.addressCountry,
      },
      founder: { "@id": personId },
      sameAs: SAME_AS,
    },
    {
      "@type": "FinancialService",
      "@id": torinoOfficeId,
      name: `${SITE_NAME} — Studio di Torino`,
      parentOrganization: { "@id": organizationId },
      url: SITE_URL,
      image: absoluteUrl("/AMINE-2-scaled.jpg"),
      email: CONTACT.email,
      telephone: CONTACT.phone,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: OFFICE_TORINO.streetAddress,
        postalCode: OFFICE_TORINO.postalCode,
        addressLocality: OFFICE_TORINO.addressLocality,
        addressRegion: OFFICE_TORINO.addressRegion,
        addressCountry: OFFICE_TORINO.addressCountry,
      },
      areaServed: [
        { "@type": "City", name: "Torino" },
        { "@type": "AdministrativeArea", name: "Città metropolitana di Torino" },
      ],
    },
    {
      "@type": "Person",
      "@id": personId,
      name: AUTHOR_NAME,
      jobTitle: AUTHOR_JOB_TITLE,
      honorificSuffix: "CFP®",
      url: `${SITE_URL}/chi-siamo`,
      image: absoluteUrl("/amine-braccia-conserte.jpg"),
      description:
        "Dott. Amine Alahiyane è tra i primi 100 professionisti italiani ad aver ottenuto la certificazione CFP® (Certified Financial Planner), la certificazione più importante al mondo in pianificazione finanziaria.",
      award:
        "Tra i primi 100 professionisti italiani ad aver ottenuto la certificazione CFP® (Certified Financial Planner)",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Certified Financial Planner (CFP®)",
        credentialCategory: "certification",
        description:
          "La certificazione più importante al mondo in pianificazione finanziaria.",
      },
      worksFor: { "@id": organizationId },
      knowsAbout: [
        "Pianificazione finanziaria",
        "Previdenza complementare",
        "Investimenti",
        "Pianificazione patrimoniale",
        "Protezione del patrimonio",
      ],
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "it-IT",
      publisher: { "@id": organizationId },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ID del dominio Cookiebot ("Domain Group ID", visibile nel Manager Cookiebot).
  // Non è un segreto: compare comunque nello script pubblico in ogni pagina.
  // Si può sovrascrivere con la env NEXT_PUBLIC_COOKIEBOT_CBID (es. per un dominio
  // di test). Se vuoto, non viene caricato alcuno script di consenso né di
  // tracciamento (comportamento conforme in assenza di CMP attiva).
  const cookiebotId =
    process.env.NEXT_PUBLIC_COOKIEBOT_CBID ??
    "16aa2f20-5400-4355-aaec-730d0eca8d12";

  return (
    <html
      lang="it"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground bg-background">
        {/*
          Cookiebot CMP (consenso cookie + Google Consent Mode v2).
          - strategy "beforeInteractive": Next lo inietta nell'<head> e lo esegue
            prima del codice first-party, come raccomandato per i cookie consent manager.
          - data-blockingmode="auto": blocco preventivo degli script di tracciamento
            finché l'utente non presta il consenso (richiesto dalle linee guida del Garante).
          - Il Consent Mode v2 (segnali ad_storage/ad_user_data/ad_personalization/
            analytics_storage) va abilitato dal pannello Cookiebot: Manager > Consent Mode.
        */}
        {cookiebotId && (
          <>
            {/*
              Google Consent Mode v2 — stato di default (tutto negato) PRIMA di
              Cookiebot e di qualsiasi tag Google. È un file esterno perché Next
              non consente inline script con beforeInteractive; l'ordine rispetto
              a Cookiebot è garantito dall'ordine in cui sono posti.
              data-cookieconsent="ignore": Cookiebot non deve bloccarlo.
            */}
            <Script
              id="google-consent-default"
              src="/gcm-consent-default.js"
              data-cookieconsent="ignore"
              strategy="beforeInteractive"
            />
            <Script
              id="Cookiebot"
              src="https://consent.cookiebot.com/uc.js"
              data-cbid={cookiebotId}
              data-blockingmode="auto"
              strategy="beforeInteractive"
            />
          </>
        )}

        {/* Dati strutturati Schema.org (Organization + Person + WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/*
          Microsoft Clarity: strumento di statistica/registrazione sessioni (cookie di
          profilazione). Viene caricato SOLO dopo il consenso alla categoria "statistics"
          raccolto da Cookiebot: senza una CMP attiva o senza consenso non parte affatto.
        */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function () {
              function loadClarity() {
                if (window.__clarityLoaded) return;
                window.__clarityLoaded = true;
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "nr5q6n25sz");
              }
              function checkConsent() {
                if (window.Cookiebot && window.Cookiebot.consent && window.Cookiebot.consent.statistics) {
                  loadClarity();
                }
              }
              window.addEventListener("CookiebotOnConsentReady", checkConsent);
              window.addEventListener("CookiebotOnAccept", checkConsent);
          })();`}
        </Script>
        <SiteHeaderGate />
        <main className="flex-1">{children}</main>
        <SiteFooterGate />
      </body>
    </html>
  );
}
