/**
 * Configurazione centrale SEO/GEO del sito.
 *
 * ⚠️ IMPORTANTE: verifica i valori qui sotto prima della messa online.
 * - SITE_URL deve corrispondere ESATTAMENTE al dominio di produzione (con o senza www,
 *   http vs https). Un dominio sbagliato qui produce canonical e sitemap errati.
 * - L'indirizzo (NAP: Name-Address-Phone) deve essere IDENTICO su sito, Google Business
 *   Profile e directory esterne: la coerenza NAP è un fattore chiave di Local SEO.
 */

// Dominio di produzione. Cambia qui se il dominio ufficiale è diverso (es. .it).
export const SITE_URL = "https://www.investimentiintelligenti.com";

export const SITE_NAME = "Investimenti Intelligenti";

export const SITE_DESCRIPTION =
  "Amine Alahiyane, Consulente Finanziario CFP®. Pianificazione patrimoniale, previdenza, investimenti e protezione con metodo, chiarezza e visione di lungo periodo.";

export const AUTHOR_NAME = "Amine Alahiyane";
export const AUTHOR_JOB_TITLE = "Consulente Finanziario CFP®";

// Contatti (fonte: footer del sito). Mantienili allineati al Google Business Profile.
export const CONTACT = {
  email: "segreteria@investimentiamine.it",
  phone: "+39 351 897 1482",
  whatsapp: "https://wa.me/message/IYGM7IR5X6E2J1",
  vatId: "12679780010",
  address: {
    streetAddress: "Strada vecchia di San Giovanni 129",
    postalCode: "10062",
    addressLocality: "Luserna San Giovanni",
    addressRegion: "TO",
    addressCountry: "IT",
  },
};

// Profili esterni collegati al brand (sameAs). Aggiungi qui gli URL reali di
// LinkedIn, Instagram, Facebook, canale YouTube, scheda Google, ecc.
export const SAME_AS: string[] = [
  CONTACT.whatsapp,
];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
