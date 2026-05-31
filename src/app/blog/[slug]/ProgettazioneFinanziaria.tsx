const faqs = [
  {
    q: "Cos'è la progettazione finanziaria in poche parole?",
    a: "È un metodo di pianificazione finanziaria personalizzata che parte dalla persona — valori, obiettivi, priorità di vita, fragilità — e solo dopo arriva agli strumenti (investimenti, polizze, fondi, previdenza). L'opposto del modello tradizionale, che parte dai prodotti."
  },
  {
    q: "Qual è la differenza tra pianificazione finanziaria e progettazione finanziaria?",
    a: "Non è una contrapposizione, è una declinazione. La progettazione finanziaria è il termine che ho scelto per definire il mio modo di fare pianificazione finanziaria: un metodo che parte dalla persona e solo dopo arriva agli strumenti. La pianificazione finanziaria resta il concetto-cornice; la progettazione finanziaria ne è la versione che rimette l'individuo al centro."
  },
  {
    q: "Cos'è il Render Finanziario®?",
    a: "È uno strumento proprietario sviluppato dal Dott. Amine Alahiyane: una tavola grafica che aiuta il cliente a visualizzare in forma concreta la propria vita futura insieme a quella delle persone a cui tiene."
  },
  {
    q: "A chi serve la progettazione finanziaria?",
    a: "A chiunque abbia un patrimonio — anche modesto — e voglia costruire un futuro finanziario allineato alla propria vita. Diventa particolarmente urgente nelle fasi 35-55 anni, quando il patrimonio inizia ad accumularsi, le responsabilità familiari aumentano e la pensione diventa visibile all'orizzonte."
  },
  {
    q: "Quanto costa una progettazione finanziaria?",
    a: "Il costo varia in base alla complessità del patrimonio e degli obiettivi. Lavorando con il modello di Südtirol Bank, il valore del lavoro è legato al cointeresse: la soddisfazione e i risultati del cliente nel tempo, non a singole sottoscrizioni. Il primo incontro conoscitivo è gratuito."
  },
  {
    q: "Come scegliere il consulente finanziario giusto?",
    a: "Il test più semplice è osservare le prime domande. Se chiede subito quanto vuoi investire, qual è il tuo orizzonte temporale, la tua tolleranza al rischio, sei dentro un modello di vendita. Se invece le prime domande riguardano te, la tua vita, le tue responsabilità, allora sei in una vera consulenza."
  },
  {
    q: "Quanto tempo richiede costruire un progetto finanziario?",
    a: "Il percorso iniziale richiede in genere 2-3 incontri distribuiti su qualche settimana. Ma la progettazione non finisce lì: continua nel tempo con un monitoraggio strutturato, perché la vita cambia e il piano deve adattarsi. Non è un documento da chiudere in un cassetto, è un organismo vivo."
  },
  {
    q: "Posso fare progettazione finanziaria da solo?",
    a: "Le prime fasi sì: consiglio sempre di iniziare a fermarsi e fotografare la propria situazione anche prima di rivolgersi a un consulente. Ma quando il patrimonio diventa significativo e gli obiettivi complessi, la presenza di un professionista qualificato fa la differenza."
  }
];

export function ProgettazioneFinanziaria() {
  return (
    <>
      <p className="lead italic text-accent/70 border-l-4 border-blue-400 pl-6">
        Perché la pianificazione finanziaria personalizzata non parte dal portafoglio, ma dalla persona — e perché questo cambia tutto.
      </p>
      <p>A cura di <strong>Dott. Amine Alahiyane, CFP®</strong></p>
      
      <p>
        Corriamo tutti. Apriamo gli occhi al mattino e siamo già dentro la giornata: una lista, una notifica, una scadenza, un messaggio a cui rispondere. E in fondo a quella lista, sempre più giù, restano le domande che contano davvero. Quelle sui soldi, sulla vita, sul futuro. Le rimandiamo a un "quando avrò più tempo" che non arriva mai. Eppure proprio da lì — dalla pausa che non ci concediamo — dovrebbe partire la <strong>progettazione finanziaria</strong>. Non dal fondo del momento, non dal prodotto in promozione, non dal "quanto vuoi investire". Da una domanda più scomoda: <em>che vita vuoi costruire, e come può il tuo patrimonio servirla?</em>
      </p>
      
      <p className="text-xl font-medium text-accent">
        <em>La progettazione finanziaria non è scegliere un fondo. Non è azzeccare il momento giusto. È qualcosa che viene molto prima — e che la maggior parte delle persone non ha mai fatto davvero.</em>
      </p>

      <h2>Cos'è la progettazione finanziaria</h2>
      <p>
        La <strong>progettazione finanziaria</strong> è il mio modo di intendere la pianificazione finanziaria: un metodo di lavoro che parte dalla persona e dalla sua vita — valori, priorità, obiettivi, fragilità — e solo dopo arriva agli strumenti. È una declinazione specifica della pianificazione finanziaria, costruita per rimettere al centro la persona invece del prodotto. Non un'alternativa alla pianificazione, ma una scelta di metodo: l'opposto di ciò che fa il sistema bancario tradizionale, che parte dal prodotto e cerca di adattarlo al cliente. Se la consulenza tradizionale risponde alla domanda "come investo i miei soldi?", la progettazione parte da una domanda diversa: <em>che cosa vuoi costruire, proteggere o lasciare con questi soldi?</em>
      </p>
      <p>
        Lo dico in modo diretto: nel mio lavoro la prima domanda che faccio a una persona non riguarda il denaro. Non chiedo qual è il portafoglio attuale, non parto dai rendimenti, non chiedo quanto vuole investire. Chiedo di parlarmi della vita. Della famiglia, del lavoro, dei progetti, delle paure che si porta dietro, delle decisioni che sta rimandando. Perché il denaro è uno strumento, e uno strumento ha senso solo in funzione di ciò che vuoi costruire con esso.
      </p>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-8">
        <h3 className="mt-0 text-blue-700">💡 Facciamo chiarezza!</h3>
        <p className="text-sm font-bold mb-2">Sistema bancario tradizionale ≠ Progettazione Finanziaria</p>
        <p className="text-sm">
          Il sistema bancario tradizionale, fondato sul collocamento di prodotti, parte dagli strumenti: fondi, titoli, polizze, asset allocation. Domanda iniziale: "quanto vuoi investire?". La Progettazione Finanziaria parte dalla persona: prima la vita, poi gli strumenti. Domanda iniziale: "che vita vuoi costruire?". Prima si capisce la casa, poi si scelgono i materiali.
        </p>
      </div>

      <h2>Perché in Italia non progettiamo (quasi) mai</h2>
      <p>
        Ci sono due ragioni concrete per cui in Italia la progettazione finanziaria è ancora poco praticata, e si rinforzano a vicenda: <strong>non sappiamo abbastanza di finanza</strong> e <strong>non ci fermiamo abbastanza</strong> per pensare al futuro lungo. I numeri sono impietosi: secondo l'indagine OCSE/INFE 2023, condotta in 39 Paesi, l'Italia si colloca tra gli ultimi posti con un punteggio medio di 10,6 su 20. Se non hai gli strumenti culturali per capire cosa stai facendo, è naturale affidarsi a chi te li propone senza fare le domande giuste.
      </p>
      <p>
        Il secondo problema è più universale: siamo costantemente di corsa. Questo meccanismo ha un nome preciso: <em>present bias</em>, la tendenza sistematica a dare più peso al presente che al futuro. È proprio questa distorsione che ci porta a rimandare le decisioni importanti ma non urgenti.
      </p>

      <h2>Perché il sistema tradizionale ti vende, non ti progetta</h2>
      <p>
        Il modello dominante della consulenza finanziaria in Italia è ancora oggi un <strong>modello di collocamento</strong>: la maggior parte dei consulenti opera dentro strutture che misurano il loro lavoro sulla base di quanti prodotti riescono a piazzare. Non su quanto bene capiscono la vita del cliente.
      </p>
      <p>
        C'è un momento preciso in cui puoi accorgerti se chi hai davanti sta davvero facendo consulenza oppure sta cercando di proporti qualcosa: arriva nelle <em>prime domande</em>. Se riguardano quanto vuoi investire, l'orizzonte temporale, il rendimento atteso — sei già nella logica del collocamento. Se invece riguardano te, la tua vita, le persone che ami, sei in tutt'altra conversazione.
      </p>

      <h2>Il metodo: come funziona la Progettazione Finanziaria</h2>
      <p>Quando una persona arriva da me, il percorso che facciamo insieme si articola in quattro fasi:</p>
      
      <h3>Fase 1 — Chiarezza</h3>
      <p>
        Serve a fare chiarezza su tre cose: i tuoi valori, le tue priorità, i tuoi desideri di vita. Non parliamo di portafoglio, non di rendimenti. Parliamo di te.
      </p>

      <h3>Fase 2 — Visualizzazione (con il Render Finanziario®)</h3>
      <p>
        Nella seconda fase entra in gioco lo strumento a cui tengo di più: il <strong>Render Finanziario®</strong>. È uno strumento proprietario, una tavola grafica che traduce in forma visibile la tua vita futura — tappe, priorità, obiettivi vicini e lontani, fragilità da proteggere, persone a cui tieni.
      </p>
      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        È lì che la finanza smette di essere fredda e torna a essere profondamente umana.
      </p>

      <h3>Fase 3 — Strategia</h3>
      <p>
        Solo dopo aver capito chi sei, cosa vuoi e cosa vuoi proteggere, ha senso parlare di strumenti. Nella terza fase traduciamo gli obiettivi emersi in scelte operative: allocazione efficace dei risparmi, pianificazione patrimoniale, investimenti coerenti, copertura dei rischi, ottimizzazione fiscale.
      </p>

      <h3>Fase 4 — Monitoraggio</h3>
      <p>
        La vita finanziaria non è un documento statico da chiudere in un cassetto, è un organismo vivo. Per questo una vera progettazione ha bisogno di monitoraggio, confronto e adattamento.
      </p>

      <h2>Cinque passi per iniziare a progettare la tua vita finanziaria</h2>
      <ol>
        <li><strong>Fermati. Davvero.</strong> Trova un'ora vera. Spegni il telefono. Foglio bianco e penna.</li>
        <li><strong>Scrivi a mano persone, obiettivi, paure.</strong> Tre colonne che si parlano.</li>
        <li><strong>Fotografa il presente con onestà.</strong> Quanti conti hai? A cosa servono?</li>
        <li><strong>Confronta presente e desiderio.</strong> Quello che fai oggi ti avvicina a dove vuoi essere domani?</li>
        <li><strong>Decidi se vuoi farti accompagnare.</strong> La domanda giusta per scegliere un consulente è: <em>le sue prime domande riguardano la mia vita o i miei soldi?</em></li>
      </ol>

      <p className="text-center font-bold text-xl my-8 text-accent">
        Prima si capisce la casa che vuoi costruire. Poi si decide come realizzarla.
      </p>

      <hr className="my-12" />
      
      <div className="not-prose bg-accent text-white p-6 sm:p-10 rounded-3xl mt-12 text-center">
        <h3 className="text-white mt-0 mb-4 text-2xl sm:text-3xl font-bold">Il libro è in uscita</h3>
        <p className="text-blue-100 mb-8 text-sm sm:text-base leading-relaxed">
          Approfondisco la progettazione finanziaria e gli investimenti per il lungo periodo nel mio libro che sta per uscire.
        </p>
        <a href="https://wa.me/393273577594" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-accent font-bold px-6 py-3.5 sm:px-8 sm:py-3.5 rounded-full hover:bg-blue-50 transition-colors w-full sm:w-auto">
          Iscriviti alla lista d'attesa
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
        <li>Banca d'Italia — IACOFI 2023, Indagini sull'alfabetizzazione finanziaria.</li>
        <li>COVIP — Relazione annuale 2024 sulla previdenza complementare in Italia.</li>
        <li>Banca d'Italia — Rapporto sulla stabilità finanziaria n. 1 / 2024.</li>
        <li>FABI — Analisi sulla ricchezza finanziaria delle famiglie italiane (2024-2025).</li>
        <li>Daniel Kahneman — Pensieri lenti e veloci (per i bias cognitivi citati: present bias).</li>
      </ul>
    </>
  );
}
