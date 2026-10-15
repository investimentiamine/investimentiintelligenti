import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { posts, postDateISO } from "./blog/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pagine statiche principali con priorità/frequenza indicative.
  const staticRoutes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/chi-siamo", changeFrequency: "yearly", priority: 0.8 },
    { path: "/servizi", changeFrequency: "monthly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
    { path: "/educazione-finanziaria", changeFrequency: "weekly", priority: 0.7 },
    { path: "/domande-frequenti", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contatti", changeFrequency: "yearly", priority: 0.8 },
    { path: "/libro", changeFrequency: "yearly", priority: 0.6 },
    { path: "/strumenti/massimale-invalidita", changeFrequency: "yearly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
    { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.2 },
    { path: "/disclaimer", changeFrequency: "yearly", priority: 0.2 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: postDateISO(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...postEntries];
}
