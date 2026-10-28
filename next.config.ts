import type { NextConfig } from "next";

// Direttive anti-indicizzazione per la landing riservata del voucher Starter Kit.
const NOINDEX_HEADERS = [
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet, noimageindex" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      // La pagina /regalo e le sue immagini (public/regalo/*).
      { source: "/regalo", headers: NOINDEX_HEADERS },
      { source: "/regalo/:path*", headers: NOINDEX_HEADERS },
      // Le stesse immagini servite dall'ottimizzatore di next/image.
      {
        source: "/_next/image",
        has: [{ type: "query", key: "url", value: "/regalo/.*" }],
        headers: NOINDEX_HEADERS,
      },
    ];
  },
};

export default nextConfig;
