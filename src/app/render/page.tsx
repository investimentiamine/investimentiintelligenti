import Image from "next/image";
import type { Metadata } from "next";
import { Compass, Eye, PencilRuler, Phone, Ear } from "lucide-react";
import RenderForm from "./RenderForm";

const WHATSAPP_URL = "https://wa.me/message/IYGM7IR5X6E2J1";

export const metadata: Metadata = {
  title: "La tua sessione di Render Finanziario | Amine Alahiyane",
  description:
    "Hai letto «Non basta avere soldi»? Richiedi la tua sessione di Render Finanziario gratuita: uno spazio di ascolto e di chiarezza per iniziare a progettare il tuo futuro.",
};

export default function RenderPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground selection:bg-accent/20">
      {/* Hero */}
      <section className="relative w-full pt-32 lg:pt-44 pb-28 lg:pb-40 overflow-hidden bg-gradient-to-b from-blue-50/40 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
            Riservato a chi ha letto il libro
          </div>
          <p className="text-base text-accent/60 font-medium">
            Hai chiuso il libro. Adesso si apre la porta.
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-accent tracking-tight">
            Il tuo patrimonio non merita di essere gestito.
            <br />
            Merita di essere <span className="text-accent-2">progettato</span>.
          </h1>
          <p className="text-lg sm:text-xl text-accent/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Come promesso nelle ultime pagine, ho lasciato uno spazio aperto solo per chi è arrivato
            fino in fondo: una <strong>sessione di Render Finanziario</strong>, in regalo.
          </p>
          <div className="pt-2">
            <a
              href="#richiedi"
              className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Richiedi la tua sessione gratuita
            </a>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[70px] lg:h-[100px] block" preserveAspectRatio="none">
            <path fill="#000435" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Cos'è il Render Finanziario */}
      <div className="relative bg-accent z-20">
        <section className="text-white py-20 lg:py-28 px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Cos&rsquo;è il Render Finanziario</h2>
            <p className="text-lg text-blue-100/80 leading-relaxed">
              Non è una simulazione, non è un portafoglio modello, non è una proposta da firmare. È una{" "}
              <strong className="text-white">tavola grafica</strong> che accende la luce sui tuoi
              obiettivi: ti aiuta a vedere con chiarezza la tua vita futura &mdash; e quella delle
              persone che ami &mdash; prima ancora di parlare di strumenti.
            </p>
            <p className="text-lg text-blue-100/80 leading-relaxed">
              Come un architetto usa il render per far vedere una casa prima di costruirla, io uso il
              Render Finanziario per aiutarti a vedere la vita che vuoi costruire o proteggere: le
              tappe, le priorità, le persone, gli obiettivi vicini e lontani.
            </p>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[70px] lg:h-[100px] block" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Cosa sarà / non sarà */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent">Cosa sarà questa sessione</h2>
          <p className="text-lg text-accent/70 leading-relaxed">
            <strong>Non ti proporrò una soluzione già pronta.</strong> Sarà, prima di tutto, uno
            spazio di ascolto e di chiarezza. Un primo passo per capire se esiste il terreno giusto
            per costruire, insieme, un progetto più ordinato e più coerente con la vita che desideri.
          </p>
        </div>

        {/* Come funziona — 3 step */}
        <div className="max-w-5xl mx-auto mt-16 grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Ear size={28} />,
              title: "1. Ascolto",
              desc: "Partiamo dalla tua storia, dalla tua famiglia e dai tuoi obiettivi. Mai dai prodotti.",
            },
            {
              icon: <Eye size={28} />,
              title: "2. Render",
              desc: "Costruiamo insieme la tavola grafica che rende visibile e ordinato ciò che oggi è confuso.",
            },
            {
              icon: <PencilRuler size={28} />,
              title: "3. Chiarezza",
              desc: "Esci con più lucidità sulle decisioni che contano e sui possibili passi successivi.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 text-center"
            >
              <div className="bg-blue-600 text-white p-4 rounded-full mb-6 inline-flex shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">{step.title}</h3>
              <p className="text-accent/70 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-accent/50 text-sm mt-8 italic">
          Gratuita e senza alcun impegno.
        </p>
      </section>

      {/* Form */}
      <section id="richiedi" className="bg-slate-50 py-20 lg:py-28 px-6 scroll-mt-24">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center bg-accent text-white rounded-full p-3 mb-5">
              <Compass size={26} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-3">
              Richiedi la tua sessione
            </h2>
            <p className="text-accent/70 leading-relaxed">
              Lasciami i tuoi contatti: ti richiamo personalmente per fissare insieme l&rsquo;incontro.
            </p>
          </div>
          <RenderForm />
        </div>
      </section>

      {/* Box "ti chiamo io" */}
      <div className="relative bg-accent">
        <section className="py-20 lg:py-28 px-6 text-white relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-xl lg:text-2xl font-semibold italic leading-relaxed">
              Nessun call center. Ti richiamo direttamente io per fissare un incontro personale.
            </p>
            <p className="text-lg text-blue-100/80 italic leading-relaxed">
              Riceverai una chiamata da questo numero:{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-white underline decoration-blue-400 underline-offset-4 hover:decoration-white"
              >
                <Phone size={18} /> 351 89 71 482
              </a>{" "}
              <span className="not-italic">(inizia a salvarti il numero così saprai che sono io)</span>
            </p>
            <div className="flex justify-center pt-2">
              <div className="relative w-40 h-40 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-400/20">
                <Image src="/AMINE-2-scaled.jpg" alt="Amine Alahiyane" fill className="object-cover" />
              </div>
            </div>
            <div className="pt-2">
              <p className="text-lg italic text-blue-100/90">A presto,</p>
              <p className="text-xl font-bold">Amine</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
