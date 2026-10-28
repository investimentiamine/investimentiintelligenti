import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

// Pagine di servizio/form senza valore per l'indicizzazione.
const DISALLOW = ["/api/", "/render", "/renderguida", "/libroanteprima", "/informativaprivacyform"];

// Crawler dei motori AI (GEO): non devono leggere la landing riservata /regalo.
// Non usano il meta noindex in modo affidabile, quindi li blocchiamo qui.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "meta-externalagent",
  "Amazonbot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // /regalo resta volutamente scansionabile dai motori di ricerca: solo così Google e
        // Bing leggono il "noindex" della pagina e non la mostrano mai nei risultati.
        // Bloccarla qui impedirebbe di vedere il noindex e l'URL potrebbe comparire comunque.
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: [...DISALLOW, "/regalo"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
