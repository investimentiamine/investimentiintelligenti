"use client";

import { usePathname } from "next/navigation";
import SiteFooter from "./SiteFooter";

// Nasconde il footer completo sulle landing page di conversione (es. /render),
// dove i link di navigazione distrarrebbero dal solo obiettivo: la CTA.
// La pagina /render mostra al suo posto una riga legale minima (albo, P.IVA).
const HIDE_FOOTER_ON = ["/render"];

export default function SiteFooterGate() {
  const pathname = usePathname();

  if (pathname && HIDE_FOOTER_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }

  return <SiteFooter />;
}
