import Image from "next/image";
import { ArrowDown, Calendar } from "lucide-react";

const featuredVideo = { 
  id: "HVfMOqSIbFI", 
  title: "FONDO PENSIONE: Come RISPARMIARE fino a 2200€ di TASSE?!", 
  label: "In Evidenza" 
};

const videos = [
  { id: "iehr42fRFOs", title: "Ti sei mai fatto queste DOMANDE? L'importanza della PIANIFICAZIONE", label: "Popolare" },
  { id: "GABbznC25Qk", title: "PAC: PIANO di ACCUMULO del CAPITALE | Ecco perché devi averlo!", label: "Popolare" },
  { id: "S7xEq1oqqcs", title: "Come gestire i soldi da liberi professionisti: controllo di gestione 2026", label: "Recente" },
  { id: "aZDKndru6x8", title: "Come fare BUDGETING nel 2026 per famiglie (+Template GRATIS)", label: "Recente" },
  { id: "KUqh69wNfSg", title: "Budgeting 2026: Come gestire i soldi e risparmiare con il metodo 50/30/20", label: "Popolare" },
  { id: "T4QTbANZm-I", title: "Come gestire i soldi e risparmiare", label: "Recente" },
];

export default function EducazioneFinanziariaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Educazione Finanziaria Background" 
            fill 
            className="object-cover object-top opacity-30" 
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-accent/90 to-accent/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Educazione Finanziaria
          </h1>
        </div>

        {/* Wave Divider to White */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px] z-10 pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full h-[40px] md:h-[60px] lg:h-[80px] block" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,60 C400,120 1040,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 lg:py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-accent mb-6">
            Guarda alcuni <span className="text-blue-600">video</span> che potrebbero esserti utili!
          </h2>
          
          <div className="flex justify-center mb-16 text-blue-600 animate-bounce">
            <ArrowDown size={36} strokeWidth={3} />
          </div>

          {/* Main Large Video */}
          <a href={`https://youtu.be/${featuredVideo.id}`} target="_blank" rel="noopener noreferrer" className="block max-w-4xl mx-auto flex flex-col group cursor-pointer border-b-[3px] border-blue-600/0 hover:border-blue-600 pb-6 transition-all mb-16">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-200 mb-6 shadow-lg group-hover:shadow-2xl transition-all">
                <img src={`https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg`} alt={featuredVideo.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                   <div className="w-24 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-xl">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z" /></svg>
                   </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-accent/60 font-semibold mb-3 uppercase tracking-wider">
              <Calendar size={14} /> {featuredVideo.label}
            </div>
            <h3 className="font-bold text-2xl lg:text-3xl text-accent px-4 group-hover:text-blue-600 transition-colors leading-tight">
              {featuredVideo.title}
            </h3>
          </a>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {videos.map((video) => (
              <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer" key={video.id} className="flex flex-col group cursor-pointer border-b-[3px] border-blue-600/0 hover:border-blue-600 pb-6 transition-all">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-200 mb-4 shadow-md group-hover:shadow-xl transition-all">
                  <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                     <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z" /></svg>
                     </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-accent/60 font-semibold mb-2 uppercase tracking-wider">
                  <Calendar size={14} /> {video.label}
                </div>
                <h3 className="font-bold text-lg text-accent px-2 group-hover:text-blue-600 transition-colors leading-snug">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
