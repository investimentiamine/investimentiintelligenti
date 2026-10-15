import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Pagine di servizio/form senza valore per l'indicizzazione.
        disallow: ["/api/", "/render", "/renderguida", "/libroanteprima", "/informativaprivacyform"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
