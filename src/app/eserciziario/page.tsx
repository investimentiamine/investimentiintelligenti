import Image from "next/image";
import type { Metadata } from "next";
import { PenLine, Eye, HelpCircle, Quote } from "lucide-react";
import EserciziarioForm from "./EserciziarioForm";

// Landing breve per scaricare l'«Eserciziario di progetto» (PDF inviato via email da MailerLite).
// Raggiungibile solo tramite link (social, YouTube, newsletter): noindex qui, header X-Robots-Tag
// in next.config.ts, blocco dei crawler AI in robots.ts ed esclusione dalla sitemap.
export const metadata: Metadata = {
  title: { absolute: "Eserciziario di progetto | Dott. Amine Alahiyane" },
  description:
    "Le domande per guardare la tua vita finanziaria tutta insieme, una sera alla volta. Scarica gratis l'Eserciziario di progetto in PDF.",
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
    type: "website",
    locale: "it_IT",
    url: "/eserciziario",
    siteName: "Investimenti Intelligenti",
    title: "Eserciziario di progetto: le domande che nessuno ti ha mai fatto sui tuoi soldi",
    description:
      "Una domanda alla volta, una sera alla volta. Scaricalo gratis in PDF e inizia a guardare la tua vita finanziaria tutta insieme.",
    images: [
      {
        url: "/eserciziario/copertina.webp",
        width: 800,
        height: 1121,
        alt: "Copertina dell'Eserciziario di progetto del Dott. Amine Alahiyane",
      },
    ],
  },
};

const SAMPLE_QUESTIONS = [
  {
    icon: <Eye size={16} />,
    kind: "Immagina",
    text: "Tra dieci anni, come vorresti che fosse una tua giornata qualunque? Dove ti svegli, con chi, quanto lavori, cosa fai il pomeriggio.",
  },
  {
    icon: <PenLine size={16} />,
    kind: "Rispondi subito",
    text: "Se il mese scorso il tuo reddito si fosse fermato, per quanti mesi avresti coperto le spese con quello che avevi da parte?",
  },
  {
    icon: <HelpCircle size={16} />,
    kind: "Domanda aperta",
    text: "I progetti che hai scritto si possono realizzare tutti, nei tempi che hai indicato, con quello che hai oggi e con quello che guadagni?",
  },
];

const AREAS = [
  "Prima dei numeri, la tua vita",
  "Quanto entra, quanto esce",
  "Le tasse si possono progettare",
  "Il giorno dopo l'ultimo stipendio",
  "Chi protegge chi",
  "I tuoi risparmi e i tuoi obiettivi",
  "Ciò che resta, a chi resta",
];

export default function EserciziarioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground selection:bg-accent/20">
      {/* Hero */}
      <section className="relative w-full pt-16 lg:pt-24 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
              Eserciziario gratuito &middot; PDF
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-accent tracking-tight">
              Quando hai pensato ai tuoi soldi{" "}
              <span className="text-accent-2">tutti insieme</span>, l&rsquo;ultima volta?
            </h1>
            <p className="text-lg sm:text-xl text-accent/70 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Non un test, non un punteggio. Solo le domande giuste, una sera alla volta, con una penna in
              mano. Perch&eacute; avere pi&ugrave; soldi non basta: serve sapere a cosa servono.
            </p>
            <div className="pt-2">
              <a
                href="#scarica"
                className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Ricevi l&rsquo;eserciziario gratis
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] bg-blue-200/50 rounded-full blur-3xl" />
            <Image
              src="/eserciziario/copertina.webp"
              alt="Copertina dell'Eserciziario di progetto"
              width={800}
              height={1121}
              priority
              className="relative w-[240px] sm:w-[280px] lg:w-[340px] h-auto rounded-xl shadow-2xl rotate-2"
            />
          </div>
        </div>
      </section>

      {/* Giulio e Laura */}
      <section className="bg-accent text-white py-16 lg:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-blue-100/80 text-lg leading-relaxed">
            Quando ho chiesto a Giulio cosa volesse dai suoi soldi, ha risposto{" "}
            <strong className="text-white">&ldquo;investirli meglio&rdquo;</strong>. Poi gli ho chiesto come
            immaginava una sua giornata a sessantacinque anni. Ha parlato di una casa al mare, di Laura, di sua
            figlia all&rsquo;universit&agrave;, di mattine senza sveglia.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Quote className="text-blue-300/60 shrink-0" size={28} />
            <p className="text-2xl lg:text-3xl font-bold italic">
              Di rendimenti, in quella risposta, non c&rsquo;era traccia.
            </p>
          </div>
        </div>
      </section>

      {/* Assaggio delle domande */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4">Prova a rispondere a queste tre</h2>
            <p className="text-lg text-accent/70 max-w-2xl mx-auto">
              Se anche solo una ti ha fatto fermare un attimo, l&rsquo;eserciziario fa per te.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SAMPLE_QUESTIONS.map((q) => (
              <div key={q.kind} className="bg-slate-50 rounded-[2rem] p-7 border border-gray-100">
                <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                  {q.icon}
                  {q.kind}
                </div>
                <p className="text-accent text-base leading-relaxed font-medium">{q.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-accent/50 mb-5">
              Si parte da te, poi le sei aree della pianificazione finanziaria CFP&reg;
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {AREAS.map((area, i) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-accent/80"
                >
                  <span className="font-bold text-accent-2">{String(i).padStart(2, "0")}</span>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="scarica" className="bg-slate-50 py-16 lg:py-24 px-6 scroll-mt-8">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent">Inizia stasera, dalla prima domanda</h2>
          <p className="text-lg text-accent/70 leading-relaxed">
            Lascia nome ed email: ti mando subito l&rsquo;eserciziario in PDF. Stampalo o tienilo sul telefono,
            e rispondi con calma, quando vuoi.
          </p>
          <EserciziarioForm />
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100 shadow-md shrink-0">
              <Image src="/IMG_0391-copia-2.png" alt="Amine Alahiyane" fill className="object-cover object-top" />
            </div>
            <div className="text-left">
              <p className="font-bold text-accent">Dott. Amine Alahiyane</p>
              <p className="text-sm text-accent/60">Consulente Finanziario CFP&reg;</p>
            </div>
          </div>
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
