"use client";

import { usePathname } from "next/navigation";
import SiteFooter from "./SiteFooter";

// Nasconde il footer completo sulle landing page di conversione (es. /render, /renderguida),
// dove i link di navigazione distrarrebbero dal solo obiettivo: la CTA.
// Queste pagine mostrano al loro posto una riga legale minima (albo, P.IVA).
const HIDE_FOOTER_ON = ["/render", "/renderguida", "/libroanteprima"];

export default function SiteFooterGate() {
  const pathname = usePathname();

  if (pathname && HIDE_FOOTER_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }

  return <SiteFooter />;
}
