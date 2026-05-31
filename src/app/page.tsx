import Image from "next/image";
import { AlignLeft, PenLine, Wallet, Eye, Star, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-foreground">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-6 text-sm font-semibold text-accent z-50">
        <div className="flex gap-8 items-center mx-auto max-w-7xl w-full justify-center">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Chi Sono</a>
          <a href="#metodo" className="hover:text-blue-600 transition">Il mio Metodo</a>
          <a href="#" className="hover:text-blue-600 transition">Domande Frequenti</a>
          <a href="#" className="hover:text-blue-600 transition">Prenota Appuntamento</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-20 pt-10 pb-32 max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center gap-10">
        <div className="space-y-6 z-10">
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-accent tracking-tight">
            PROGETTIAMO<br />INSIEME LA<br />TUA VITA?
          </h1>
          <p className="text-xl lg:text-2xl text-accent font-medium mt-6">
            Con un metodo finanziario<br />sereno e prospero
          </p>
        </div>
        <div className="relative h-[500px] lg:h-[700px] flex justify-center items-end">
          {/* Using a placeholder until the user uploads hero.png */}
          <div className="absolute inset-0 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
          <Image 
            src="/IMG_0391-copia-2.png" 
            alt="Consulente Finanziario" 
            fill 
            className="object-contain object-bottom z-10 drop-shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Wave to Dark Blue */}
      <div className="relative w-full h-24 lg:h-48 -mt-24 lg:-mt-48 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path fill="#000435" fillOpacity="1" d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,197.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* Metodo Section */}
      <section id="metodo" className="bg-accent text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">IL MIO METODO DI LAVORO</h2>
          <p className="max-w-3xl mx-auto text-lg text-blue-100">
            Render Finanziario: dalla complessità alla chiarezza. Insieme trasformiamo la pianificazione in libertà attraverso un percorso strutturato e misurabile.
          </p>
        </div>

        <div className="timeline-container">
          {/* Step 1 */}
          <div className="timeline-item right">
            <div className="timeline-icon">1</div>
            <div className="bg-white text-accent p-8 rounded-3xl shadow-xl ml-4">
              <h3 className="text-xl font-bold mb-3">Prima Consulenza</h3>
              <p className="text-sm">In 1 ora realizziamo una fotografia precisa della tua situazione finanziaria e valutiamo i passi per progettare i tuoi sogni.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="timeline-item left">
            <div className="timeline-icon">2</div>
            <div className="bg-white text-accent p-8 rounded-3xl shadow-xl mr-4">
              <h3 className="text-xl font-bold mb-3">Progettazione del proprio Futuro Finanziario</h3>
              <p className="text-sm">Se proseguiamo insieme, gettiamo le basi per progettare il tuo futuro finanziario in modo continuativo.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="timeline-item right">
            <div className="timeline-icon">3</div>
            <div className="bg-white text-accent p-8 rounded-3xl shadow-xl ml-4">
              <h3 className="text-xl font-bold mb-3">Implementazione del progetto</h3>
              <p className="text-sm">Implementiamo ciò che serve per realizzare i tuoi progetti finanziari.</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="timeline-item left">
            <div className="timeline-icon">4</div>
            <div className="bg-white text-accent p-8 rounded-3xl shadow-xl mr-4">
              <h3 className="text-xl font-bold mb-3">Monitoraggio costante</h3>
              <p className="text-sm">Monitoriamo progressi e obiettivi, muovendoci con agilità in base a esigenze e cambiamenti di mercato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave to Image Background */}
      <div className="relative w-full h-24 lg:h-48 bg-accent z-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full drop-shadow-lg" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.8" d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,101.3C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      {/* Valori Section */}
      <section className="relative py-24 px-6 min-h-[800px] flex flex-col items-center justify-center -mt-24 lg:-mt-48">
        <div className="absolute inset-0 -z-20">
          <Image src="/AMINE-2-scaled.jpg" alt="Background" fill className="object-cover object-top opacity-50" />
        </div>
        <div className="absolute inset-0 bg-white/70 -z-10"></div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-accent mb-12 relative z-10">I MIEI VALORI</h2>
        
        <div className="bg-white/95 backdrop-blur rounded-[40px] shadow-2xl p-10 max-w-6xl w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mb-12 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6 shadow-lg shadow-blue-600/30">
              <AlignLeft size={32} />
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">Trasparenza</h3>
            <p className="text-muted text-sm">La trasparenza è alla base di un rapporto di fiducia e duraturo.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6 shadow-lg shadow-blue-600/30">
              <PenLine size={32} />
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">Personalizzazione</h3>
            <p className="text-muted text-sm">Ogni persona ha esigenze e obiettivi differenti.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6 shadow-lg shadow-blue-600/30">
              <Wallet size={32} />
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">Zero conflitti d'interesse</h3>
            <p className="text-muted text-sm">Posso scegliere ogni strumento sul mercato senza incentivi.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-6 shadow-lg shadow-blue-600/30">
              <Eye size={32} />
            </div>
            <h3 className="text-xl font-bold text-accent mb-4">Aggiornamento continuo</h3>
            <p className="text-muted text-sm">Monitoraggio costante e competenze sempre aggiornate.</p>
          </div>
        </div>

        <button className="btn-primary relative z-10 px-12 py-4 text-lg">Chi Sono</button>
      </section>

      {/* Mission Section in Dark Blue */}
      <section className="bg-accent relative py-32 px-6 flex justify-center">
        {/* Top Wave transition into this section */}
        <div className="absolute top-0 left-0 w-full h-24 lg:h-32 -translate-y-full">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path fill="#000435" fillOpacity="1" d="M0,96L80,128C160,160,320,224,480,240C640,256,800,224,960,186.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="bg-white rounded-[40px] max-w-4xl p-12 lg:p-16 text-center shadow-2xl relative z-10">
          <p className="text-2xl lg:text-3xl font-bold text-accent italic leading-relaxed">
            "La mia missione è aiutare le persone a progettare con cura la propria vita attraverso una gestione consapevole del denaro, con l'obiettivo di costruire un futuro finanziario sereno e prospero"
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-surface-muted py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-accent mb-10">Cosa dicono di me su Google...</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-left">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <h3 className="font-bold text-lg text-accent mb-1">Dott.ssa Lorenza T. - Professoressa</h3>
              <p className="text-sm text-muted mb-4 mt-3">Consulente preparato e affidabile. Dopo un'attenta analisi del portafoglio, prospetta soluzioni adatte e spiega con sintesi e linearità.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Read on Google &rarr;</a>
            </div>
            <div className="card text-left">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <h3 className="font-bold text-lg text-accent mb-1">Dott. Nicolò S. - Medico Chirurgo</h3>
              <p className="text-sm text-muted mb-4 mt-3">Consiglia in modo chiaro e semplice, con strategie di diversificazione personalizzate e grande disponibilità.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Read on Google &rarr;</a>
            </div>
            <div className="card text-left">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <h3 className="font-bold text-lg text-accent mb-1">Arch. Virginia B. - Light Designer</h3>
              <p className="text-sm text-muted mb-4 mt-3">Professionale, serio e molto competente. Ti segue passo dopo passo con competenza e chiarezza.</p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">Read on Google &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <div>
                <p className="text-sm text-blue-200">Email</p>
                <p className="font-semibold">segreteria@investimentiamine.it</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <div>
                <p className="text-sm text-blue-200">Numero</p>
                <p className="font-semibold">+39 351 897 1482</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <div>
                <p className="text-sm text-blue-200">Posizione</p>
                <p className="font-semibold">via Clemente Lequio 76, Pinerolo TO</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-sm text-blue-200 border-l border-white/20 pl-8">
            <p className="uppercase tracking-widest text-xs font-bold text-white mb-4">Albo e Iscrizioni</p>
            <p>Consulente finanziario abilitato all'offerta fuori sede iscritto all'albo OCF con delibera N. 1873 del 24/03/2022</p>
            <p>Subagente assicurativo iscritto all'albo RUI sezione E con N.E000712221</p>
            <div className="flex gap-4 items-center mt-6">
              {/* Using text placeholders for logos, but they would normally be images */}
              <div className="bg-white text-accent px-4 py-2 rounded font-bold text-xl">OCF</div>
              <div className="bg-white text-accent px-4 py-2 rounded font-bold text-xl">IVASS</div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Chi Sono</a>
            <a href="#" className="hover:text-white transition">Domande Frequenti</a>
            <a href="#" className="hover:text-white transition">Prenota Appuntamento</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-blue-300/50">
          DOCUMENTO DI MARKETING CON FINALITÀ PROMOZIONALI, REDATTO DA AMINE BOUZAN DA CONSIDERARSI COME COMUNICAZIONE COMMERCIALE.
        </div>
      </footer>
    </div>
  );
}

