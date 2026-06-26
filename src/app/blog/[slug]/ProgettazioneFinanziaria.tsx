const faqs = [
  {
    q: "Cos'è la progettazione finanziaria in poche parole?",
    a: "È un metodo di pianificazione finanziaria personalizzata che parte dalla persona — valori, obiettivi, priorità di vita, fragilità — e solo dopo si ragiona sulla strategia da mettere in piedi e sugli strumenti adeguati. L'opposto del modello tradizionale, che parte dai prodotti che si vogliono piazzare."
  },
  {
    q: "Qual è la differenza tra pianificazione finanziaria e progettazione finanziaria?",
    a: "Non è una contrapposizione, è una declinazione. La progettazione finanziaria è il termine che ho scelto per definire il mio modo di fare pianificazione finanziaria: un metodo che parte dalla persona — vita, valori, obiettivi, fragilità — e solo dopo arriva agli strumenti. La pianificazione finanziaria resta il concetto-cornice; la progettazione finanziaria ne è la versione che rimette l'individuo al centro."
  },
  {
    q: "Cos'è il Render Finanziario?",
    a: "È uno strumento proprietario sviluppato dal Dott. Amine Alahiyane: una tavola grafica che aiuta il cliente a visualizzare in forma concreta la propria vita futura insieme a quella delle persone a cui tiene. Serve a far emergere obiettivi, priorità e fragilità che spesso restano confusi se rimangono solo pensieri astratti."
  },
  {
    q: "A chi serve la progettazione finanziaria?",
    a: "A chiunque abbia un patrimonio — anche modesto — e voglia costruire un futuro finanziario allineato alla propria vita. Diventa particolarmente urgente nelle fasi 35-70 anni, quando il patrimonio inizia ad accumularsi, le responsabilità familiari aumentano e la pensione diventa visibile all'orizzonte."
  },
  {
    q: "Quanto costa una sessione di progettazione finanziaria?",
    a: "Il costo varia in base alla complessità del patrimonio e degli obiettivi. La filosofia di lavoro è costruire una collaborazione continuativa che si basi sulla fiducia reciproca e sul cointeresse. Il primo incontro conoscitivo è gratuito."
  },
  {
    q: "Come scegliere il consulente finanziario giusto?",
    a: "Il test più semplice è osservare le prime domande. Se chiede subito quanto vuoi investire, qual è il tuo orizzonte temporale, la tua tolleranza al rischio, sei dentro un modello di vendita. Se invece le prime domande riguardano te, la tua vita, le tue responsabilità, allora sei in una vera consulenza."
  },
  {
    q: "Quanto tempo richiede costruire un progetto finanziario?",
    a: "Il percorso iniziale richiede in genere 2-3 incontri distribuiti su qualche settimana. Ma la progettazione non finisce lì, se da entrambe le parti ci sono i presupposti per continuare con la consulenza continuativa, si procede con il monitoraggio, perché la vita cambia e il piano deve adattarsi. Non è un documento da chiudere in un cassetto, è un organismo vivo."
  },
  {
    q: "Posso fare progettazione finanziaria da solo?",
    a: "Le prime fasi sì: consiglio sempre di iniziare a fermarsi e fotografare la propria situazione anche prima di rivolgersi a un consulente. Ma quando il patrimonio diventa significativo e gli obiettivi complessi (pensione, protezione familiare, successione, ottimizzazione fiscale), la presenza di un professionista qualificato fa la differenza."
  }
];

const faseDiVita = [
  {
    eta: "25–35 anni",
    fase: "Costruzione",
    situazione: "Primi risparmi, primi investimenti, mutuo, famiglia nascente, carriera in crescita. Tante decisioni da prendere senza ancora un metodo.",
    bisogni: "Voglia di chiarezza. Bisogno di costruire abitudini sane, capire da dove partire, non sentirsi in ritardo."
  },
  {
    eta: "35–45 anni",
    fase: "Crescita e complessità",
    situazione: "Carriera avviata, reddito buono, figli piccoli o adolescenti. Patrimonio che inizia ad accumularsi ma resta sparso tra conti, fondi e polizze fatte senza un disegno d'insieme.",
    bisogni: "Avere una visione di insieme. Sapere se ciò che ho è coerente con ciò che voglio. Dare senso e direzione a quello che ho già costruito."
  },
  {
    eta: "45–55 anni",
    fase: "Presa di coscienza",
    situazione: "Patrimonio significativo, retropensiero della pensione, figli quasi indipendenti, genitori che invecchiano. Una possibile eredità in arrivo che cambia gli equilibri.",
    bisogni: "Capire dove sono davvero rispetto al futuro che voglio. Smettere di rimandare. Sentire che ciò che costruisco ha una direzione, e proteggerlo da scelte sbagliate."
  },
  {
    eta: "55–65 anni +",
    fase: "Protezione",
    situazione: "Avvicinamento alla pensione, patrimonio consolidato, primi pensieri concreti su figli e nipoti. Una vita di lavoro che si avvicina a un nuovo capitolo.",
    bisogni: "Trasformare il patrimonio in serenità vera. Sapere che ciò che ho costruito può accompagnarmi e proteggere chi amo. Lasciare un'eredità ordinata."
  }
];

export function ProgettazioneFinanziaria() {
  return (
    <>
      <p className="lead italic text-accent/70 border-l-4 border-blue-400 pl-6">
        Perché la pianificazione finanziaria personalizzata non parte dal portafoglio, ma dalla persona — e perché questo cambia tutto.
      </p>
      <p className="text-sm text-gray-500 italic">
        A cura di <strong>Dott. Amine Alahiyane, Consulente Finanziario CFP®</strong>
      </p>

      <p>
        Corriamo tutti i giorni. Apriamo gli occhi al mattino e siamo già dentro la giornata: una lista, una notifica, una scadenza, un messaggio a cui rispondere. E in fondo a quella lista, sempre più giù, restano le domande che contano davvero.
      </p>
      <p>
        <strong>Quelle sui soldi, sulla vita, sul futuro.</strong>
      </p>
      <p>
        Le rimandiamo a un &ldquo;quando avrò più tempo&rdquo; che non arriva mai. Eppure proprio da lì, dalla pausa che non ci concediamo, dovrebbe partire la <strong>progettazione finanziaria</strong>. Non dal fondo del momento, non dal nuovo prodotto interessante che sta uscendo, non dal &ldquo;quanto vuoi investire&rdquo;. Da una domanda più scomoda: <em>che vita vuoi costruire, e come può il tuo patrimonio servirla?</em>
      </p>

      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        La progettazione finanziaria non è scegliere un fondo. Non è azzeccare il momento giusto. È qualcosa che viene molto prima — e che la maggior parte delle persone non ha mai fatto davvero.
      </p>

      <p>
        In questo articolo voglio raccontarti cosa intendo quando uso l&rsquo;espressione <strong>Progettazione Finanziaria</strong>. Cosa la distingue e perché ho costruito un <strong>metodo che parte dalla vita e non dagli strumenti</strong>. Sono arrivato a questa conclusione perché credo sia l&rsquo;unica strada quando in gioco non ci sono solo i soldi, ma il futuro tuo e delle persone che ami.
      </p>

      <h2>Cos&rsquo;è la progettazione finanziaria?</h2>
      <p>
        La <strong>Progettazione Finanziaria</strong>{" "}è il mio modo di intendere la pianificazione finanziaria: un metodo di lavoro che parte dalla persona e dalla sua vita — <strong>valori, priorità, obiettivi, fragilità</strong> — e solo dopo arrivano gli strumenti. È una declinazione specifica della pianificazione finanziaria, costruita <strong>per rimettere al centro la persona</strong> invece del prodotto. Non un&rsquo;alternativa alla pianificazione, ma una scelta di metodo: <strong>l&rsquo;opposto di ciò che fa il sistema bancario tradizionale, che parte dal prodotto che vuole piazzare e cerca di adattarlo al cliente.</strong> Se la consulenza tradizionale risponde alla domanda &ldquo;come investo i miei soldi?&rdquo;, la progettazione parte da una domanda diversa:
      </p>
      <p className="text-xl font-medium text-accent text-center italic">
        <strong>che cosa vuoi costruire, proteggere o lasciare con questi soldi?</strong>
      </p>
      <p>
        Lo dico in modo diretto: nel mio lavoro la prima domanda che faccio a una persona non riguarda il denaro. Non chiedo qual è il portafoglio attuale, non parto dai rendimenti, non chiedo quanto vuole investire. <strong>Poiché il denaro è uno strumento, e uno strumento ha senso solo in funzione di ciò che vuoi costruire con esso.</strong>
      </p>

      <h2>Siamo un paese con poca consapevolezza finanziaria</h2>
      <p>
        Purtroppo, in Italia <strong>non sappiamo abbastanza di finanza</strong> e <strong>non ci fermiamo abbastanza</strong> per pensare al futuro.
      </p>
      <p>
        I numeri sono impietosi: secondo l&rsquo;indagine OCSE/INFE 2023, condotta in 39 Paesi, l&rsquo;Italia si colloca tra gli ultimi posti con un punteggio medio di 10,6 su 20. La Banca d&rsquo;Italia, con l&rsquo;indagine triennale IACOFI, conferma che il livello di conoscenza, comportamenti e atteggiamenti finanziari degli adulti italiani resta basso. Tradotto: <strong>gran parte degli italiani non padroneggia concetti quotidiani come inflazione, interesse composto, diversificazione</strong> del rischio. E se non hai gli strumenti culturali per capire cosa stai facendo, è naturale affidarsi a chi te li propone senza fare le domande giuste.
      </p>
      <p>
        Il secondo problema è più universale: <strong>siamo costantemente di corsa</strong>. Negli ultimi decenni ci hanno insegnato che il valore della nostra vita dipende dalla capacità di essere veloci e produttivi. Chi rallenta sembra in ritardo, chi si ferma a riflettere appare meno competitivo. Così, proprio per via di questa corsa, finiamo per perdere di vista le decisioni che richiedono ordine mentale e pazienza. <strong>A finire in fondo alla lista sono le domande più importanti: sui soldi, sul futuro, sulla pensione, sui figli</strong> — domande che non hanno l&rsquo;urgenza di una bolletta ma che, quando arrivano, arrivano tutte insieme. Questo meccanismo ha un nome preciso: <em>present bias</em>, la tendenza sistematica a <strong>dare più peso al presente che al futuro</strong>. È proprio questa distorsione che ci porta a rimandare le decisioni importanti ma non urgenti — la progettazione del futuro finanziario è il caso emblematico.
      </p>
      <p>
        Il risultato si vede nei dati. Secondo la Relazione COVIP 2024, solo il 38,3% dei lavoratori italiani è iscritto a una forma di previdenza complementare, e considerando solo chi versa contributi nell&rsquo;anno la percentuale scende al 27,6%. In altre parole: <strong>due lavoratori su tre non stanno costruendo nulla per integrare la propria pensione futura</strong>, in un Paese in cui la pensione pubblica sarà progressivamente più bassa. Sull&rsquo;altro fronte, secondo le elaborazioni FABI su dati Banca d&rsquo;Italia, le famiglie italiane hanno una ricchezza finanziaria di oltre 6.000 miliardi a fine 2024 — ma circa 1.593 miliardi restano parcheggiati su conti correnti, dove l&rsquo;inflazione li erode anno dopo anno. Dietro questi numeri c&rsquo;è quasi sempre la stessa storia: persone che non si sono mai fermate abbastanza per progettare con metodo.
      </p>

      <h2>Perché il sistema bancario tradizionale ti vuole piazzare prodotti</h2>
      <p>
        Quello che descrivo qui non è un&rsquo;opinione contro qualcuno. È quello che ho visto in anni di formazione e di lavoro con i clienti, ed è la ragione per cui ho scelto di lavorare diversamente. Il modello dominante è ancora oggi un <strong>modello di collocamento</strong>: la maggior parte dei consulenti opera dentro strutture che misurano il loro lavoro sulla base di quanti prodotti riescono a piazzare (vendere). Non su quanto bene capiscono la vita del cliente.
      </p>
      <p>
        Da questa logica derivano comportamenti che chi è stato in una banca ha già visto: incontri frettolosi, domande superficiali su obiettivi e tolleranza al rischio buttate lì per soddisfare un questionario, proposte standardizzate costruite attorno al prodotto interno alla banca. <strong>Il cliente esce con una firma su un contratto, senza aver mai veramente raccontato chi è e dove vuole andare.</strong> È così che, anno dopo anno, si è consumato quello che viene chiamato il <em>risparmio tradito</em>: una generazione di italiani che ha accantonato con sacrificio e si è ritrovata con prodotti mai veramente capiti.
      </p>
      <p>
        C&rsquo;è un momento preciso in cui puoi accorgerti se chi hai davanti sta davvero facendo consulenza oppure sta cercando di proporti qualcosa: arriva nelle <em>prime domande</em>. Se riguardano quanto vuoi investire, l&rsquo;orizzonte temporale, il rendimento atteso — sei già nella logica del collocamento. Se invece riguardano te, la tua vita, le persone che ami, sei in tutt&rsquo;altra conversazione.
      </p>

      <hr className="my-12" />

      <div className="not-prose bg-accent text-white p-6 sm:p-10 rounded-3xl mt-12 text-center">
        <h3 className="text-white mt-0 mb-4 text-2xl sm:text-3xl font-bold">Il libro è in uscita</h3>
        <p className="text-blue-100 mb-8 text-sm sm:text-base leading-relaxed">
          Approfondisco la progettazione finanziaria, gli investimenti per il lungo periodo e molto altro nel mio libro che sta per uscire. È il distillato di anni di lavoro con persone reali, dati ufficiali e una convinzione di fondo: la confusione finanziaria non è un destino, è un problema risolvibile.
        </p>
        <a href="/libroanteprima" className="inline-block bg-white text-accent font-bold px-6 py-3.5 sm:px-8 sm:py-3.5 rounded-full hover:bg-blue-50 transition-colors w-full sm:w-auto">
          Iscriviti alla lista d&rsquo;attesa
        </a>
      </div>

      <h2>Il metodo: come funziona la Progettazione Finanziaria</h2>
      <p>Quando una persona arriva da me, il percorso che facciamo insieme si articola in quattro fasi. L&rsquo;ordine non è casuale: ogni fase costruisce le fondamenta per quella successiva.</p>

      <h3>Fase 1 — Chiarezza</h3>
      <p>
        La prima fase è la più delicata, ed è quella che il sistema tradizionale tende a saltare. Serve a fare chiarezza su tre cose: i tuoi valori, le tue priorità, i tuoi desideri di vita. Non parliamo di portafoglio, non di rendimenti. <strong>Parliamo di te: di come vivi adesso, come vorresti vivere domani, cosa ti preoccupa, cosa desideri per chi ami.</strong> Molte persone si accorgono di non aver mai veramente pensato a queste cose — non perché siano superficiali, ma perché nessuno gli ha mai dato il tempo per farlo.
      </p>

      <h3>Fase 2 — Visualizzazione (con il Render Finanziario)</h3>
      <p>
        Nella seconda fase entra in gioco lo strumento a cui tengo di più: il <strong>Render Finanziario</strong>, una <strong>tavola grafica</strong> che ho creato e <strong>che trasforma in forma visibile la tua vita futura</strong> — tappe, priorità, obiettivi vicini e lontani, fragilità da proteggere, persone a cui tieni. Funziona <strong>come il render di un architetto</strong>: quando un architetto sta per costruire una casa per una famiglia, non parte dai mattoni, parte dal render, un&rsquo;immagine prospettica di come sarà la casa una volta costruita. Solo quando la famiglia vede il render, quella casa smette di essere un&rsquo;idea astratta e diventa qualcosa di concreto, che può approvare, modificare, far propria. Solo a quel punto si parla di materiali. Il <strong>Render Finanziario</strong> fa la stessa cosa con la tua vita: <strong>trasforma in immagine ciò che spesso resta solo un pensiero confuso.</strong>
      </p>
      <p>
        È in quel momento, quando vedi nero su bianco le tappe, le persone, gli obiettivi, le risorse, i tempi, che succede qualcosa di interessante. Una persona che pensava di voler solo &ldquo;investire meglio&rdquo; scopre che vuole sentirsi libera di lavorare meno tra dieci anni. Una coppia che credeva di voler proteggere il capitale capisce che il vero tema è aiutare i figli senza compromettere il proprio equilibrio. Un professionista che pensava di avere solo investimenti disordinati si accorge che il problema più grande è non aver mai collegato il patrimonio alla vita che vorrebbe vivere.
      </p>
      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        È lì che la finanza smette di essere fredda e torna a essere profondamente umana.
      </p>

      <h3>Fase 3 — Strategia</h3>
      <p>
        Solo dopo aver capito <strong>chi sei, cosa vuoi raggiungere e cosa vuoi proteggere, ha senso parlare di strumenti.</strong> Nella terza fase traduciamo gli obiettivi emersi in scelte operative: allocazione efficace dei risparmi, pianificazione patrimoniale, investimenti coerenti, copertura dei rischi, ottimizzazione fiscale, previdenza, successione. È qui che si parla degli strumenti utili a soddisfare gli obiettivi di cui mi hai parlato. Ma se ne parla dopo aver fatto le prime due fasi. Gli strumenti diventano materiali al servizio di un progetto, non un fine in sé.
      </p>

      <h3>Fase 4 — Monitoraggio</h3>
      <p>
        Una volta costruito il progetto, inizia la parte più importante: <strong>accompagnarlo nel tempo.</strong> <strong>La vita finanziaria non è un documento statico da chiudere in un cassetto, è un organismo vivo.</strong> Cambiano i mercati, le leggi, i bisogni, le famiglie. Un figlio cresce, un genitore invecchia, un&rsquo;eredità arriva. Per questo <strong>una progettazione ha bisogno di monitoraggio, confronto e adattamento.</strong> Inoltre, c&rsquo;è una cosa che reputo fondamentale: il <strong>cointeresse</strong>. Il valore del mio lavoro dipende dalla soddisfazione della persona nel tempo.
      </p>

      <h2>La progettazione cambia con la fase di vita: una mappa operativa</h2>
      <p>
        Un altro principio spesso dimenticato è questo: <strong>i bisogni finanziari cambiano con la fase della vita in cui ci si ritrova</strong>. Quello che ha senso a 30 anni non è quello che ha senso a 45 o a 55. Eppure il sistema tradizionale tende a proporre prodotti simili a chiunque. Ecco una mappa sintetica delle quattro grandi fasi della vita finanziaria adulta. Riconoscere in quale fase sei è il primo passo per capire da dove deve partire la tua progettazione:
      </p>

      <div className="not-prose overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-accent text-white">
              <th className="p-4 text-left font-bold rounded-tl-xl"></th>
              <th className="p-4 text-left font-bold">Fase di vita</th>
              <th className="p-4 text-left font-bold">Situazione tipica</th>
              <th className="p-4 text-left font-bold rounded-tr-xl">Bisogni principali</th>
            </tr>
          </thead>
          <tbody>
            {faseDiVita.map((fase, index) => (
              <tr key={fase.eta} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                <td className="p-4 font-bold text-accent whitespace-nowrap">{fase.eta}</td>
                <td className="p-4 font-semibold text-blue-700">{fase.fase}</td>
                <td className="p-4 text-accent/70">{fase.situazione}</td>
                <td className="p-4 text-accent/70">{fase.bisogni}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Cinque passi per iniziare a progettare la tua vita finanziaria</h2>
      <p>Se ti sei riconosciuto in qualcosa di ciò che ho descritto, ecco un percorso concreto. Non sostituisce una consulenza, ma è un punto di partenza.</p>
      <ol>
        <li><strong>Fermati. Davvero.</strong> Trova un&rsquo;ora vera, non venti minuti rubati tra una riunione e l&rsquo;altra. Spegni il telefono. Foglio bianco e penna. Niente schermi. È <strong>l&rsquo;investimento con il maggior rendimento</strong>, non una perdita di tempo.</li>
        <li><strong>Scrivi a mano persone, obiettivi, paure.</strong> Tre colonne. Le persone di cui sei responsabile, gli obiettivi che hai (casa, studi dei figli, pensione, libertà, eredità), le paure che ti porti dietro.</li>
        <li><strong>Fotografa il presente con onestà.</strong> Quanti conti correnti hai? Quanti investimenti, e in che cosa? Hai una previdenza complementare? A cosa servono davvero le tue polizze? Hai un fondo di emergenza? Quanto risparmi davvero — non quanto dovresti risparmiare? La progettazione non parte mai da dove vorresti essere, ma da dove sei oggi.</li>
        <li><strong>Confronta presente e desiderio.</strong> Dove vuoi essere tra 5, 10, 20 anni? E quello che stai facendo oggi ti sta avvicinando lì, o ti sta solo facendo restare dove sei? In questa distanza si nasconde tutta la tua progettazione finanziaria.</li>
        <li><strong>Decidi se vuoi farti accompagnare.</strong> Se il quadro è complesso e continui a rimandare, chiedi aiuto. La domanda giusta da farti quando scegli un consulente non è &ldquo;quanto rende?&rdquo;, ma è se &ldquo;il suo supporto continuativo mi aiuterà a raggiungere i miei progetti di vita&rdquo;.</li>
      </ol>

      <h2>Una progettazione che parte dalla vita</h2>
      <p>
        Lo dico spesso: <strong>il mio obiettivo non è che tu diventi un esperto di finanza, ma che tu diventi un esperto della <em>tua</em> finanza.</strong> Per troppo tempo il rapporto tra noi italiani e il denaro è stato costruito su un&rsquo;asimmetria: noi che non sapevamo, e qualcuno dall&rsquo;altra parte che ci proponeva qualcosa senza darci il tempo di capirla. <strong>Il risultato è una generazione che ha lavorato tanto, risparmiato tanto, e oggi si ritrova con un patrimonio frammentato, fermo, mal allineato a quello che vorrebbe davvero costruire o proteggere.</strong> La progettazione finanziaria è il tentativo di invertire quell&rsquo;asimmetria: mettere te al centro, non i prodotti. Fermarsi prima di scegliere. Disegnare il render della tua vita prima di scegliere i materiali.
      </p>

      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        Prima si capisce la casa che vuoi costruire. Poi si decide come realizzarla.
      </p>

      <p>
        Se sei stanco di sentirti chiedere quanto vuoi investire prima di essere stato ascoltato, se vuoi tornare a <strong>pensare al denaro come strumento di vita e non come fine in sé,</strong> allora forse hai bisogno di iniziare proprio dal <strong>Render Finanziario.</strong>
      </p>

      <div className="not-prose text-center my-12 py-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-4">Vuoi svolgere insieme il tuo Render Finanziario?</h3>
        <p className="text-slate-600 mb-8 text-base leading-relaxed max-w-xl mx-auto">
          Prenota una prima consulenza gratuita per capire come posso aiutarti a visualizzare il tuo futuro finanziario e costruire un progetto su misura per te.
        </p>
        <a href="https://wa.me/message/IYGM7IR5X6E2J1" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Prenota Appuntamento
        </a>
      </div>

      <h2>Domande frequenti sulla progettazione finanziaria</h2>
      <div className="grid gap-4 not-prose my-8">
        {faqs.map((faq, index) => (
          <details key={faq.q} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-start sm:items-center justify-between gap-4 p-6 cursor-pointer hover:bg-slate-50 transition-colors font-semibold text-base sm:text-lg text-accent">
              <span className="flex items-start sm:items-center gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm mt-0.5 sm:mt-0">{index + 1}</span>
                <span>{faq.q}</span>
              </span>
              <span className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-blue-500 mt-1 sm:mt-0">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-6 pt-2 text-accent/70 leading-relaxed text-sm sm:text-base">
              <p>{faq.a}</p>
            </div>
          </details>
        ))}
      </div>

      <h2>Fonti e riferimenti</h2>
      <ul>
        <li>OCSE / INFE — OECD/INFE 2023 International Survey of Adult Financial Literacy (dicembre 2023).</li>
        <li>Banca d&rsquo;Italia — IACOFI 2023, Indagini sull&rsquo;alfabetizzazione finanziaria e le competenze di finanza digitale in Italia: adulti (maggio 2024).</li>
        <li>COVIP — Relazione annuale 2024 sulla previdenza complementare in Italia (giugno 2025).</li>
        <li>Banca d&rsquo;Italia — Rapporto sulla stabilità finanziaria n. 1 / 2024 e Conti distributivi sulla ricchezza delle famiglie.</li>
        <li>FABI — Analisi sulla ricchezza finanziaria delle famiglie italiane (2024-2025).</li>
        <li>Daniel Kahneman — Pensieri lenti e veloci (per i bias cognitivi citati: present bias).</li>
      </ul>
    </>
  );
}
