"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";

// Nasconde la barra di navigazione in alto sulle landing page di conversione
// (es. /render, /renderguida), dove l'unico obiettivo è la CTA e il menu sarebbe una distrazione.
const HIDE_HEADER_ON = ["/render", "/renderguida", "/libroanteprima"];

export default function SiteHeaderGate() {
  const pathname = usePathname();

  if (pathname && HIDE_HEADER_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }

  return <SiteHeader />;
}
