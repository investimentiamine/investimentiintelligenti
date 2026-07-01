import type { Metadata } from "next";
import MassimaleInvaliditaCalc from "./MassimaleInvaliditaCalc";

export const metadata: Metadata = {
  title: "Calcolatore Massimale Invalidità Permanente | Investimenti Intelligenti",
  description:
    "Scopri quanto vale il tuo capitale umano e qual è il massimale ideale per proteggerti da un'invalidità permanente.",
};

export default function MassimaleInvaliditaPage() {
  return <MassimaleInvaliditaCalc />;
}
