import Image from "next/image";
import type { Metadata } from "next";
import { Compass, Eye, PencilRuler, Phone, Ear, Star, BadgeCheck } from "lucide-react";
import RenderGuidaForm from "./RenderGuidaForm";

const WHATSAPP_URL = "https://wa.me/message/IYGM7IR5X6E2J1";
const CTA_LABEL = "Richiedi la tua sessione di Render Finanziario";

const REVIEWS = [
  {
    name: "Cristian S.",
    role: "Imprenditore",
    text: "Persona di gran pazienza e disponibilità! Consulente di concezione completamente diversa dalle grandi banche.. non vende «pacchetti» di investimento ma cuce con cura ogni richiesta in base alle esigenze del cliente! Consigliato! Indispensabile!",
  },
  {
    name: "Federico D.",
    role: "Ricercatore",
    text: "Sono entrato nel mondo della finanza grazie ad Amine, dopo settimane di letture della sua newsletter. Inizialmente avevo qualche titubanza, ma dal primo incontro di lavoro Amine ha risolto tutti i dubbi con chiarezza, semplicità e soprattutto empatia. Mi è piaciuto che le prime domande non fossero sul quanto volessi guadagnare, ma su quale fosse il mio progetto di vita.",
  },
  {
    name: "Matteo B.",
    role: "Manager",
    text: "Una persona di fiducia. Mi sento supportato e coinvolto a differenza del rapporto con il referente di banca. Sono molto soddisfatto del percorso, lo consiglio vivamente!",
  },
  {
    name: "Virginia B.",
    role: "Libero professionista",
    text: "Certezza, solidità, fiducia, disponibilità, sicurezza: le prime parole che mi vengono in mente descrivendo il nostro rapporto. Posso dirmi completamente soddisfatta.",
  },
];

const CREDENTIALS = [
  "CFP® — tra i primi 100 in Italia",
  "Executive Master in Consulenza Finanziaria Indipendente",
  "Iscritto all'albo OCF n. 1873",
];

export const metadata: Metadata = {
  title: "La tua sessione di Render Finanziario | Amine Alahiyane",
  description:
    "Hai letto la guida «5 strategie per trasformare il caos finanziario in un progetto di vita»? Richiedi la tua sessione di Render Finanziario gratuita: uno spazio di ascolto e di chiarezza per iniziare a progettare il tuo futuro.",
};

export default function RenderGuidaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground selection:bg-accent/20">
      {/* Hero */}
      <section className="relative w-full pt-20 lg:pt-28 pb-28 lg:pb-40 overflow-hidden bg-gradient-to-b from-blue-50/40 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
            Riservato a chi ha letto la guida gratuita
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-accent tracking-tight">
            Il tuo patrimonio non merita di essere gestito.
            <br />
            Merita di essere <span className="text-accent-2">progettato</span>.
          </h1>
          <p className="text-lg sm:text-xl text-accent/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Come promesso nelle ultime pagine della guida, ho lasciato una porta aperta solo per chi è
            arrivato fino in fondo: una{" "}
            <strong className="text-accent">sessione di Render Finanziario</strong> con me, in regalo
            per te che sei arrivato fino a qui.
          </p>
          <div className="pt-2">
            <a
              href="#richiedi"
              className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {CTA_LABEL}
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
              obiettivi futuri e ti aiuta a vedere con{" "}
              <strong className="text-white">chiarezza la tua vita futura</strong> &mdash; e quella
              delle persone che ami &mdash; prima ancora di parlare di strumenti.
            </p>
            <p className="text-lg text-blue-100/80 leading-relaxed">
              Come un architetto usa il render per far vedere una casa prima di costruirla, io uso il
              Render Finanziario per aiutarti a{" "}
              <strong className="text-white">vedere la vita che vuoi costruire e proteggere</strong>:
              le tappe, le priorità, le persone, gli obiettivi vicini e lontani.
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

      {/* Cosa sarà / come funziona */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent">Cosa sarà questa sessione</h2>
          <p className="text-lg text-accent/70 leading-relaxed">
            <strong>Non ti proporrò una soluzione già pronta.</strong> Sarà, prima di tutto, uno
            spazio di ascolto e di chiarezza. Un primo passo per capire se esiste il terreno giusto
            per costruire, insieme, un progetto più ordinato e più coerente con la vita che desideri.
          </p>
        </div>

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
          Gratuita e senza alcun impegno per te che hai letto la guida.
        </p>
      </section>

      {/* Authority + Recensioni */}
      <section className="bg-slate-50 py-20 lg:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Chi sono */}
          <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl border border-gray-100 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                <Image src="/amine-attestato-cfp.jpg" alt="Amine Alahiyane con la certificazione CFP®" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-5">
              <h2 className="text-3xl lg:text-4xl font-bold text-accent">Chi sono</h2>
              <p className="text-accent/75 leading-relaxed">
                Sono <strong className="text-accent">Amine Alahiyane</strong>, Consulente Finanziario e
                tra i primi 100 professionisti in Italia ad aver ottenuto la certificazione
                internazionale <strong className="text-accent">CFP®</strong> &mdash; la più importante
                al mondo in pianificazione finanziaria.
              </p>
              <p className="text-accent/75 leading-relaxed">
                Aiuto <strong className="text-accent">famiglie, liberi professionisti e imprenditori</strong>{" "}
                a progettare il proprio futuro con metodo, trasparenza e un approccio profondamente
                umano. Parto sempre dalla vita delle persone, mai dai prodotti: prima il progetto, poi
                gli strumenti.
              </p>
              <ul className="space-y-2.5 pt-1">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <BadgeCheck className="text-blue-600 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-accent/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recensioni */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-3">Cosa dicono di me</h2>
            <div className="flex items-center justify-center gap-1 mb-12">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-[2rem] p-7 lg:p-8 shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-accent/80 text-sm leading-relaxed italic flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="font-bold text-accent text-sm">{review.name}</p>
                  <p className="text-accent/55 text-xs">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="richiedi" className="bg-white py-20 lg:py-28 px-6 scroll-mt-12">
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
          <RenderGuidaForm />
        </div>
      </section>

      {/* Box "ti chiamo io" */}
      <div className="relative bg-accent">
        <section className="py-20 lg:py-28 px-6 text-white relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-xl lg:text-2xl font-semibold italic leading-relaxed">
              Nessun call center. Ti richiamo direttamente io per fissare un incontro personale.
            </p>
            <div className="space-y-2">
              <p className="text-lg text-blue-100/80 italic leading-relaxed">
                Riceverai una chiamata da questo numero:
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-2xl font-bold text-white underline decoration-blue-400 underline-offset-4 hover:decoration-white"
              >
                <Phone size={22} /> 351 89 71 482
              </a>
              <p className="text-sm text-blue-100/70">
                (inizia a salvarti il numero così saprai che sono io)
              </p>
            </div>
            <div className="flex justify-center pt-2">
              <div className="relative w-44 h-44 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-400/20">
                <Image src="/amine-braccia-conserte.jpg" alt="Amine Alahiyane" fill className="object-cover" />
              </div>
            </div>
            <div className="pt-2">
              <p className="text-lg italic text-blue-100/90">A presto,</p>
              <p className="text-xl font-bold">Amine</p>
            </div>
          </div>
        </section>
      </div>

      {/* Riga legale minima (sostituisce il footer, nascosto su questa landing) */}
      <footer className="bg-accent text-blue-200/50 px-6 pb-10 pt-2 text-center text-[11px] leading-relaxed">
        <div className="max-w-3xl mx-auto space-y-1">
          <p>
            Amine Alahiyane &middot; Consulente finanziario abilitato all&rsquo;offerta fuori sede,
            iscritto all&rsquo;albo OCF con delibera n. 1873 del 24/03/2022 &middot; Subagente
            assicurativo iscritto all&rsquo;albo RUI sez. E n. E000712221.
          </p>
          <p>P. IVA 12679780010 &middot; Copyright &copy; 2026 Amine Alahiyane</p>
          <p className="space-x-4 pt-1">
            <a href="/privacy-policy" target="_blank" className="hover:text-white underline">
              Privacy Policy
            </a>
            <a href="/cookie-policy" target="_blank" className="hover:text-white underline">
              Cookie Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
