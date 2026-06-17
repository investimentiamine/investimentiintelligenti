import Image from "next/image";
import { BookOpen, ShieldAlert, TrendingUp, Brain, Landmark, Home, PiggyBank, Target, ChevronRight, CheckCircle2 } from "lucide-react";
import LibroAnteprimaForm from "./LibroAnteprimaForm";

export default function LibroAnteprimaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground selection:bg-accent/20">

      {/* Hero Section */}
      <section className="relative w-full pt-32 lg:pt-44 pb-32 lg:pb-44 overflow-hidden bg-gradient-to-b from-blue-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="z-10 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
              Il libro di Amine Alahiyane
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-accent tracking-tight">
              NON BASTA<br />AVERE SOLDI
            </h1>
            <p className="text-lg sm:text-xl text-accent/70 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Il libro che ti apre gli occhi su come funziona davvero il sistema finanziario italiano e su cosa puoi fare per riprendere il controllo del tuo futuro.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#anteprima" className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                Entra nella lista riservata
              </a>
              <a href="#scopri" className="inline-block px-10 py-4 border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all text-center">
                Scopri di cosa parla
              </a>
            </div>
          </div>

          {/* Book mockup placeholder */}
          <div className="relative flex justify-center items-center z-10">
            <div className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-200/40 rounded-full blur-3xl opacity-60"></div>
            <div className="relative w-[260px] h-[380px] sm:w-[300px] sm:h-[440px] lg:w-[340px] lg:h-[500px] bg-gradient-to-br from-accent to-blue-900 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 text-center border border-blue-300/20">
              <BookOpen className="text-blue-300/60 mb-6" size={48} />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
                Non basta<br />avere soldi
              </h2>
              <div className="w-12 h-0.5 bg-blue-400/50 mb-4"></div>
              <p className="text-blue-200/80 text-sm font-medium">
                Amine Alahiyane
              </p>
              <p className="text-blue-300/50 text-xs mt-1">
                Consulente Finanziario CFP&reg;
              </p>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[70px] lg:h-[100px] block" preserveAspectRatio="none">
            <path fill="#000435" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Il Problema Section */}
      <div className="relative bg-accent z-20" id="scopri">
        <section className="text-white py-20 lg:py-28 px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">Ti riconosci in queste frasi?</h2>
            <div className="grid sm:grid-cols-2 gap-5 text-left max-w-3xl mx-auto">
              {[
                "\"I soldi sono al sicuro solo sul conto corrente.\"",
                "\"Il mattone non tradisce mai.\"",
                "\"In borsa guadagna solo chi è già ricco.\"",
                "\"La banca mi chiama solo per vendermi qualcosa.\"",
                "\"Il mio bancario cambia in continuazione.\"",
                "\"Ci penserò più avanti.\"",
              ].map((frase) => (
                <div key={frase} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <p className="text-blue-100/90 text-sm font-medium italic leading-relaxed">{frase}</p>
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto pt-4">
              <p className="text-lg text-blue-100/80 leading-relaxed">
                Se hai pensato almeno una di queste cose, non sei solo. Sono le convinzioni con cui cresce la maggior parte degli italiani. Ma <strong className="text-white">e se non fosse davvero cos&igrave;?</strong>
              </p>
              <p className="text-lg text-blue-100/80 leading-relaxed mt-4">
                In Italia 1.593 miliardi di euro giacciono fermi sui conti correnti. Intanto l&rsquo;inflazione li erode in silenzio, la pensione pubblica si assottiglia e il sistema bancario non sempre lavora nel tuo interesse.
              </p>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[70px] lg:h-[100px] block" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Cosa troverai Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-accent mb-6">Cosa troverai nel libro</h2>
            <p className="text-lg text-accent/70 max-w-2xl mx-auto">
              Un percorso di consapevolezza in 15 capitoli, scritto per chi vuole capire come funzionano davvero i soldi, la pensione e gli investimenti in Italia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Landmark size={28} />,
                title: "La pensione che non ci sarà",
                desc: "Come è cambiato il sistema previdenziale italiano, perché le pensioni future saranno molto più basse e cosa puoi fare adesso per non farti trovare impreparato.",
              },
              {
                icon: <ShieldAlert size={28} />,
                title: "Il risparmio tradito",
                desc: "Cosa succede davvero dietro le quinte delle banche: pressioni commerciali, conflitti di interesse e perché il sistema troppo spesso non lavora per te.",
              },
              {
                icon: <PiggyBank size={28} />,
                title: "I soldi fermi non fanno rumore",
                desc: "L'inflazione è una tassa invisibile. Scopri quanto ti costa davvero lasciare il denaro fermo sul conto corrente, anno dopo anno.",
              },
              {
                icon: <Home size={28} />,
                title: "Il mito del mattone",
                desc: "Il mattone non tradisce mai? Non è così semplice. Costi nascosti, concentrazione del rischio e perché l'immobiliare va trattato come un investimento, non come un rifugio.",
              },
              {
                icon: <TrendingUp size={28} />,
                title: "I mercati fanno paura perché si vedono",
                desc: "La storia di Andrea, ibernato per 20 anni: da 100.000 a oltre 536.000 euro nonostante crisi, pandemie e guerre. Il tempo è il vero alleato.",
              },
              {
                icon: <Brain size={28} />,
                title: "Le trappole della mente",
                desc: "Avversione alle perdite, bias cognitivi, il nuovo cuggino digitale: perché le emozioni sono il peggior nemico dei tuoi investimenti e come difenderti.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-blue-600 text-white p-4 rounded-full mb-6 inline-flex shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-accent mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-accent/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per chi è Section */}
      <section className="relative py-24 lg:py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-8">Per chi è questo libro?</h2>
            <div className="space-y-5">
              {[
                "Per chi non ha mai cambiato banca e non sa bene perché",
                "Per chi lascia i soldi fermi sul conto \"perché almeno sono al sicuro\"",
                "Per chi si rifugia nel mattone perché è l'unica cosa che sembra concreta",
                "Per chi si è sentito tradito da un investimento che non ha mai capito fino in fondo",
                "Per chi rimanda da anni il tema della pensione integrativa",
                "Per chi vuole capire come funziona il sistema prima di affidarsi a qualcuno",
                "Per chi vuole regalare consapevolezza finanziaria a una persona cara",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={20} />
                  <p className="text-accent/80 text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl border border-gray-100">
            <p className="text-lg text-accent/80 leading-relaxed italic mb-6">
              &ldquo;Ho scritto queste pagine pensando a un lettore ben preciso: lo scettico. Quello che non ha mai cambiato banca, che lascia i soldi fermi sul conto, che si rifugia nel mattone perch&eacute; &ldquo;&egrave; sicuro&rdquo;. Non scrivo per convincere, ma per aprire uno spiraglio, piantare un seme di curiosit&agrave;.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100 shadow-md shrink-0">
                <Image src="/IMG_0391-copia-2.png" alt="Amine Alahiyane" fill className="object-cover object-top" />
              </div>
              <div>
                <p className="font-bold text-accent">Amine Alahiyane</p>
                <p className="text-sm text-accent/60">Consulente Finanziario CFP&reg;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chi è l'autore Section */}
      <div className="relative bg-accent">
        <section className="py-24 lg:py-32 px-6 text-white relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-[250px] h-[320px] lg:w-[300px] lg:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-blue-400/20">
                <Image src="/aMINE-5-scaled.jpg" alt="Amine Alahiyane" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Chi è l&rsquo;autore</h2>
              <p className="text-blue-100/80 leading-relaxed">
                Amine Alahiyane è Consulente Finanziario e tra i primi 100 professionisti in Italia a ottenere la certificazione internazionale <strong className="text-white">CFP&reg; (Certified Financial Planner)</strong>, il massimo standard mondiale in pianificazione finanziaria.
              </p>
              <p className="text-blue-100/80 leading-relaxed">
                Laureato in Finanza Aziendale e Mercati Finanziari, ha completato un Executive Master in Consulenza Finanziaria Indipendente. Fondatore del canale YouTube <strong className="text-white">&ldquo;Investimenti Intelligenti&rdquo;</strong>, aiuta ogni giorno persone e famiglie a progettare il proprio futuro finanziario con metodo, trasparenza e un approccio profondamente umano.
              </p>
              <p className="text-blue-100/80 leading-relaxed">
                Il suo metodo, il <strong className="text-white">Render Finanziario</strong>, trasforma la complessit&agrave; finanziaria in chiarezza, partendo sempre dalla vita delle persone e mai dai prodotti.
              </p>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[70px] lg:h-[100px] block" preserveAspectRatio="none">
            <path fill="#f8fafc" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* CTA Finale — Form Anteprima */}
      <section id="anteprima" className="bg-slate-50 py-24 lg:py-32 px-6 scroll-mt-12">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-accent">
            Entra nel percorso riservato del libro
          </h2>
          <p className="text-lg text-accent/70 leading-relaxed max-w-2xl mx-auto">
            Per ricevere in anteprima le novit&agrave; sul libro
          </p>
          <div className="text-left max-w-md mx-auto space-y-4">
            {[
              "Aggiornamenti in anteprima — data di uscita, copertina definitiva, dove sarà disponibile",
              "Contenuti bonus esclusivi — approfondimenti su temi del libro che non sono finiti nelle pagine",
              "Dietro le quinte — il percorso di scrittura, le scelte editoriali, cosa è stato tagliato e perché",
              "Accesso prioritario a eventi — presentazioni dal vivo o in diretta streaming",
              "Prezzo riservato o bonus al lancio — sconto lancio, checklist finanziaria o capitolo extra in esclusiva",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={18} />
                <p className="text-accent/75 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <LibroAnteprimaForm />
          <p className="text-accent/50 text-sm pt-4 max-w-lg mx-auto italic">
            &ldquo;Il mio obiettivo non &egrave; che tu diventi un esperto di finanza, ma che diventi esperto della tua finanza.&rdquo;
          </p>
        </div>
      </section>

      {/* Riga legale minima */}
      <footer className="bg-accent text-blue-200/50 px-6 pb-10 pt-6 text-center text-[11px] leading-relaxed">
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
