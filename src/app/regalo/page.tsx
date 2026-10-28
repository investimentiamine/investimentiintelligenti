import Image from "next/image";
import type { Metadata } from "next";
import { BookOpen, Compass, Landmark, Gift, Lock, CheckCircle2, Quote } from "lucide-react";
import RegaloForm from "./RegaloForm";
import WhatsAppIcon from "./WhatsAppIcon";

// Landing riservata a chi ha ricevuto il voucher cartaceo (QR code) o la mail dedicata.
// NON deve comparire su Google né sui motori AI: noindex qui, header X-Robots-Tag in
// next.config.ts, blocco dei crawler AI in robots.ts ed esclusione dalla sitemap.
export const metadata: Metadata = {
  title: { absolute: "Il tuo Starter Kit in regalo | Dott. Amine Alahiyane" },
  description:
    "Hai ricevuto un voucher: richiedi gratuitamente lo Starter Kit con il libro «Non basta avere più soldi», la guida «5 strategie» e l'articolo sulle pensioni.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Un regalo per te: il tuo Starter Kit",
    description:
      "Richiedi gratuitamente lo Starter Kit del Dott. Amine Alahiyane, CFP®, direttamente a casa tua.",
  },
};

// Gli stessi miti della landing /libroanteprima.
const PHRASES = [
  "\"I soldi sono al sicuro solo sul conto corrente.\"",
  "\"Il mattone non tradisce mai.\"",
  "\"In borsa guadagna solo chi è già ricco.\"",
  "\"La banca mi chiama solo per vendermi qualcosa.\"",
  "\"Il mio bancario cambia in continuazione.\"",
  "\"Ci penserò più avanti.\"",
];

const KIT_ITEMS = [
  {
    icon: <BookOpen size={22} />,
    label: "Il libro",
    title: "«Non basta avere più soldi»",
    subtitle: "Capire il denaro per vivere con più libertà e meno preoccupazioni",
    image: { src: "/regalo/libro-copertina.webp", width: 700, height: 980, alt: "Copertina del libro «Non basta avere più soldi» di Amine Alahiyane" },
    desc: "Non è un manuale tecnico e non è scritto per specialisti: è pensato per chiunque voglia muoversi nel mondo della finanza personale con più lucidità. Il denaro non cambia la vita da solo: a cambiarla sono le decisioni che prendi quando inizi a comprenderlo davvero.",
    points: [
      "Storie, errori, svolte e decisioni difficili: il denaro non è mai solo una questione di numeri",
      "Le trappole mentali più comuni che impediscono di costruire serenità economica",
      "Strumenti pratici per gestire meglio il denaro e proteggere ciò che costruisci",
    ],
  },
  {
    icon: <Compass size={22} />,
    label: "La guida pratica",
    title: "«5 strategie per trasformare il caos finanziario in un progetto di vita»",
    subtitle: "Cinque mosse concrete per mettere ordine, fare chiarezza e riprendere il controllo",
    image: { src: "/regalo/guida-copertina.webp", width: 600, height: 842, alt: "Copertina della guida «Non è questione di soldi – 5 strategie»" },
    desc: "Un architetto non inizia mai dai materiali: prima disegna il progetto. Con il denaro quasi tutti fanno il contrario. In questa guida trovi i primi mattoni per costruire il tuo progetto, partendo dalla tua vita e non dai prodotti.",
    points: [
      "Cambia la tua mentalità e crea i tuoi contenitori",
      "Implementa il tuo budget e costruisci un fondo di emergenza",
      "Guarda al futuro, oggi. E la mossa che cambia tutto: progettare, non sperare",
    ],
  },
  {
    icon: <Landmark size={22} />,
    label: "L'articolo cartaceo",
    title: "«Pensioni, demografia e il grande inganno»",
    subtitle: "Perché serve pianificare oggi · Pubblicato da FPSB Italia",
    image: { src: "/regalo/articolo-pensioni.webp", width: 600, height: 849, alt: "Prima pagina dell'articolo «Pensioni, demografia e il grande inganno» pubblicato da FPSB Italia" },
    desc: "La piramide demografica si sta rovesciando e il sistema pensionistico pubblico regge sempre meno. Dati alla mano, l'articolo spiega cosa significa per la tua pensione e perché «ci penserò più avanti» è l'errore più costoso.",
    points: [
      "Nei prossimi 10 anni l'Italia perderà 6 milioni di lavoratori (INAPP)",
      "La pensione di un dipendente scenderà dal 72% al 58% dell'ultimo stipendio (MEF)",
      "Perché il tempo è il tuo miglior alleato per costruire una pensione integrativa",
    ],
  },
];

/* Libro in 3D: copertina ruotata con lo spessore delle pagine visibile sul taglio e in cima */
function Book3D() {
  return (
    <div className="[perspective:1000px]">
      <div className="relative [--d:20px] sm:[--d:28px] [transform-style:preserve-3d] [transform:rotateY(-32deg)_rotateX(-8deg)]">
        {/* Copertina */}
        <div className="relative [transform:translateZ(calc(var(--d)/2))] rounded-r-[3px] overflow-hidden shadow-[0_20px_40px_rgba(0,4,53,0.45)]">
          <Image src="/regalo/libro-copertina.webp" alt="" width={700} height={980} priority className="w-full h-auto block" />
          {/* Cerniera del dorso e riflesso */}
          <div className="absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/35 via-white/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15" />
        </div>
        {/* Taglio delle pagine (lato destro) */}
        <div className="absolute top-[1.2%] bottom-[1.2%] left-[calc(100%-var(--d)/2)] w-[var(--d)] [transform:rotateY(90deg)] bg-[repeating-linear-gradient(90deg,#f7f3ea_0px,#f7f3ea_1px,#ddd5c3_1px,#ddd5c3_2px)] shadow-[inset_6px_0_8px_rgba(0,0,0,0.18)]" />
        {/* Pagine viste dall'alto */}
        <div className="absolute left-[1%] right-[1.2%] top-[calc(var(--d)/-2)] h-[var(--d)] [transform:rotateX(90deg)] bg-[repeating-linear-gradient(0deg,#f7f3ea_0px,#f7f3ea_1px,#ddd5c3_1px,#ddd5c3_2px)]" />
        {/* Retro di copertina */}
        <div className="absolute inset-0 [transform:translateZ(calc(var(--d)/-2))] bg-[#1d3461] rounded-r-[3px]" />
      </div>
    </div>
  );
}

/* Mockup della busta in cartone dello Starter Kit, con la grafica reale stampata sul fronte */
function StarterKitMockup() {
  return (
    <div className="relative w-[300px] sm:w-[420px] aspect-[5/6]" aria-label="Lo Starter Kit: busta in cartone con libro, guida e articolo" role="img">
      {/* Aletta aperta e retro della busta */}
      <div className="absolute inset-x-[2%] top-[16%] h-[26%] bg-gradient-to-b from-[#8f92c8] to-[#a3a6d6] [clip-path:polygon(0_100%,100%_100%,90%_0,10%_0)]" />
      <div className="absolute inset-x-0 top-[40%] bottom-0 rounded-[6px] bg-gradient-to-b from-[#7f83bf] to-[#9a9dd3]" />

      {/* Contenuti che spuntano dalla busta */}
      <div className="absolute left-[5%] top-[19%] w-[33%] -rotate-[9deg] shadow-[0_10px_25px_rgba(0,4,53,0.35)] rounded-[2px] overflow-hidden">
        <Image src="/regalo/guida-copertina.webp" alt="" width={600} height={842} className="w-full h-auto block" />
      </div>
      <div className="absolute right-[5%] top-[21%] w-[33%] rotate-[8deg] shadow-[0_10px_25px_rgba(0,4,53,0.35)] rounded-[2px] overflow-hidden">
        <Image src="/regalo/articolo-pensioni.webp" alt="" width={600} height={849} className="w-full h-auto block" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[7%] w-[40%]">
        <Book3D />
      </div>

      {/* Fronte della busta: grafica reale */}
      <div className="absolute inset-x-0 bottom-0 rounded-[6px] overflow-hidden shadow-[0_-10px_24px_rgba(0,4,53,0.28),0_30px_50px_rgba(0,4,53,0.30)]">
        <Image src="/regalo/busta-fronte.webp" alt="" width={1000} height={717} priority className="w-full h-auto block" />
        {/* Bordo del cartone e leggera ombra interna all'apertura */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-white/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />
      </div>

      {/* Bollino sorprese */}
      <div className="absolute -right-3 sm:-right-6 -bottom-4 sm:-bottom-5 rotate-12 w-[70px] h-[70px] sm:w-[86px] sm:h-[86px] rounded-full bg-accent-2 text-white flex flex-col items-center justify-center text-center shadow-[0_8px_20px_rgba(37,99,235,0.45)] border-4 border-white">
        <Gift size={18} />
        <span className="text-[10px] sm:text-xs font-extrabold leading-tight mt-0.5">+ sorprese</span>
      </div>
    </div>
  );
}

export default function RegaloPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground selection:bg-accent/20">

      {/* Hero Section */}
      <section className="relative w-full pt-20 lg:pt-28 pb-32 lg:pb-44 overflow-hidden bg-gradient-to-b from-blue-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="z-10 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
              <Gift size={14} /> Un regalo per te
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-accent tracking-tight">
              RICEVI IL TUO<br /><span className="text-accent-2">STARTER KIT</span>
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-bold max-w-lg mx-auto lg:mx-0 leading-snug">
              Qualcuno ha voluto farti un regalo donandoti questo voucher.
            </p>
            <p className="text-lg sm:text-xl text-accent/70 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Con questo voucher ricevi <strong className="text-accent">gratuitamente</strong> lo Starter Kit,{" "}
              <strong className="text-accent">direttamente a casa tua</strong>, che comprende il mio libro, una guida pratica e un articolo sulle pensioni&hellip; e qualche sorpresa.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#richiedi" className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                Richiedi il tuo Starter Kit
              </a>
              <a href="#kit" className="inline-block px-10 py-4 border-2 border-accent text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all text-center">
                Scopri cosa contiene
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center z-10">
            <div className="absolute w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] bg-blue-200/40 rounded-full blur-3xl opacity-60"></div>
            <StarterKitMockup />
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
      <div className="relative bg-accent z-20">
        <section className="text-white py-20 lg:py-28 px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">Ti riconosci in queste frasi?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left max-w-4xl mx-auto">
              {PHRASES.map((frase) => (
                <div key={frase} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <Quote className="text-blue-300/60 mb-2" size={18} />
                  <p className="text-blue-100/90 text-sm font-medium italic leading-relaxed">{frase}</p>
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto pt-4">
              <p className="text-lg text-blue-100/80 leading-relaxed">
                Se hai pensato almeno una di queste cose, non sei solo. Sono le convinzioni con cui cresce la maggior parte degli italiani.
              </p>
              <p className="text-lg text-blue-100/80 leading-relaxed mt-4">
                Lo Starter Kit nasce per questo: <strong className="text-white">storie vere e dati</strong> per smettere di subire le decisioni sul denaro e diventare <strong className="text-white">esperto della tua finanza</strong>.
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

      {/* Cosa contiene Section */}
      <section id="kit" className="py-20 lg:py-28 px-6 scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-accent mb-6">Cosa c&rsquo;&egrave; nel tuo Starter Kit</h2>
            <p className="text-lg text-accent/70 max-w-2xl mx-auto">
              Tre strumenti cartacei, da leggere con calma, pensati per aiutarti a guardare soldi, risparmio e pensione con occhi nuovi.
            </p>
          </div>

          <div className="space-y-10 lg:space-y-14">
            {KIT_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 grid gap-8 lg:gap-12 items-center ${i % 2 === 1 ? "md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_260px]" : "md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]"}`}
              >
                <div className={`flex justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className={`w-[180px] lg:w-[220px] rounded-md overflow-hidden shadow-2xl ${i % 2 === 1 ? "rotate-2" : "-rotate-2"}`}>
                    <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} className="w-full h-auto" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white p-3 rounded-full inline-flex shadow-[0_8px_20px_rgba(37,99,235,0.4)]">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{item.label}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-accent leading-tight">{item.title}</h3>
                  <p className="text-accent/60 font-medium italic">{item.subtitle}</p>
                  <p className="text-accent/75 leading-relaxed">{item.desc}</p>
                  <div className="space-y-3 pt-2">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={18} />
                        <p className="text-accent/80 text-sm leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sorprese Section */}
      <section className="relative py-24 lg:py-32 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            <Lock size={14} /> Top secret
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-accent mb-6">&hellip;e qualche sorpresa</h2>
          <p className="text-lg text-accent/70 max-w-2xl mx-auto mb-14">
            Non posso svelarti tutto: dentro la busta troverai anche qualcosa in pi&ugrave;. Lo scoprirai solo quando aprirai il tuo Starter Kit.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden min-h-[260px] bg-gradient-to-br from-accent to-blue-900">
                {/* Contenuto finto, volutamente oscurato */}
                <div className="absolute inset-0 p-8 blur-md select-none pointer-events-none space-y-4 text-left" aria-hidden="true">
                  <div className="w-20 h-28 rounded-lg bg-blue-300/60 rotate-[-8deg]" />
                  <div className="h-4 w-3/4 rounded-full bg-white/60" />
                  <div className="h-3 w-full rounded-full bg-white/30" />
                  <div className="h-3 w-2/3 rounded-full bg-white/30" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-accent/30 backdrop-blur-sm text-white">
                  <div className="bg-white text-accent p-4 rounded-full shadow-lg mb-4">
                    <Lock size={24} />
                  </div>
                  <p className="font-bold text-lg">Sorpresa #{n}</p>
                  <p className="text-xs text-blue-100/70 mt-1">Si svela all&rsquo;apertura della busta</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chi è l'autore Section */}
      <div className="relative bg-accent">
        <section className="py-24 lg:py-32 px-6 text-white relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-[250px] h-[320px] lg:w-[300px] lg:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-blue-400/20">
                <Image src="/amine-attestato-cfp.jpg" alt="Amine Alahiyane con la certificazione CFP®" fill sizes="300px" className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Chi ti fa questo regalo</h2>
              <p className="text-blue-100/80 leading-relaxed">
                Sono <strong className="text-white">Amine Alahiyane</strong>, Consulente Finanziario e tra i primi 100 professionisti in Italia certificati <strong className="text-white">CFP&reg; (Certified Financial Planner)</strong>, il riconoscimento pi&ugrave; importante al mondo in pianificazione finanziaria.
              </p>
              <p className="text-blue-100/80 leading-relaxed">
                Ho scritto il libro <strong className="text-white">&laquo;Non basta avere pi&ugrave; soldi&raquo;</strong> per aiutare famiglie, liberi professionisti e imprenditori a progettare la loro <strong className="text-white">serenit&agrave; economica</strong>.
              </p>
              <p className="text-blue-100/80 leading-relaxed">
                Con il mio <strong className="text-white">Metodo Progettazione Finanziaria</strong> e il <strong className="text-white">Render Finanziario</strong> aiuto le persone a trasformare il denaro da fonte di ansia a strumento concreto per progettare la propria vita.
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

      {/* CTA Finale — Form Starter Kit */}
      <section id="richiedi" className="bg-slate-50 py-24 lg:py-32 px-6 scroll-mt-12">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-accent">
            Richiedi il tuo Starter Kit gratuito
          </h2>
          <p className="text-lg text-accent/70 leading-relaxed max-w-2xl mx-auto">
            Compila il modulo: ti spediamo la busta direttamente a casa, senza alcun costo.
          </p>
          <div className="text-left max-w-md mx-auto space-y-4">
            {[
              "Il libro «Non basta avere più soldi»",
              "La guida «5 strategie per trasformare il caos finanziario»",
              "L'articolo «Pensioni, demografia e il grande inganno»",
              "…e qualche sorpresa",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-600 mt-0.5 shrink-0" size={18} />
                <p className="text-accent/75 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <RegaloForm />

          {/* Reminder WhatsApp */}
          <div className="bg-accent text-white rounded-[2rem] p-6 lg:p-8 text-left shadow-xl space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-[#25D366] text-white p-3 rounded-full shrink-0 shadow-[0_8px_20px_rgba(37,211,102,0.35)]">
                <WhatsAppIcon size={28} />
              </div>
              <p className="font-bold text-lg lg:text-xl leading-snug">Importante: tieni d&rsquo;occhio WhatsApp</p>
            </div>
            <p className="text-blue-100/80 text-sm lg:text-base leading-relaxed">
              Dopo la richiesta riceverai un messaggio su WhatsApp dal numero dello studio{" "}
              <strong className="text-white whitespace-nowrap">+39 351 897 1482</strong>{" "}per confermare l&rsquo;indirizzo di spedizione.
            </p>
            <div className="rounded-2xl bg-[#25D366]/15 border border-[#25D366]/50 p-4 lg:p-5">
              <p className="text-white font-bold leading-relaxed">
                Rispondi al messaggio: spediamo lo Starter Kit solo dopo la tua conferma.
              </p>
              <p className="text-blue-100/80 text-sm leading-relaxed mt-1">
                Cos&igrave; siamo sicuri che sei proprio tu e che il kit arrivi all&rsquo;indirizzo giusto.
              </p>
            </div>
          </div>

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
            iscritto all&rsquo;albo OCF con delibera n. 1873 del 24/03/2022, che opera su mandato di
            S&uuml;dtirol Bank S.p.A. &middot; Subagente assicurativo iscritto all&rsquo;albo RUI sez.
            E n. E000712221.
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
