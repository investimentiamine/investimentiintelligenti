const ExternalLinkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const faqs = [
  {
    q: "Perché il sistema pensionistico italiano è considerato fragile?",
    a: "Perché si basa sul metodo a ripartizione: i contributi dei lavoratori di oggi pagano le pensioni di chi è già in quiescenza. Finché ci sono molti lavoratori e pochi pensionati il meccanismo regge; quando i nuovi ingressi nel mondo del lavoro non bastano più a compensare chi esce — ed è ciò che sta accadendo in Italia — l'equilibrio si rompe."
  },
  {
    q: "Quanti lavoratori perderà l'Italia nei prossimi anni?",
    a: "Secondo l'INAPP (Istituto Nazionale per l'Analisi delle Politiche Pubbliche), nei prossimi dieci anni l'Italia perderà circa sei milioni di lavoratori: un esodo verso la pensione che le nuove generazioni, troppo poco numerose, non riusciranno a compensare."
  },
  {
    q: "Cos'è il tasso di sostituzione della pensione?",
    a: "È la percentuale dell'ultimo stipendio che verrà percepita come pensione. Un tasso di sostituzione lordo del 70% significa che, andando in pensione, l'assegno pubblico coprirà il 70% dell'ultima retribuzione lorda. È l'indicatore che misura quanto il tuo tenore di vita cambierà il giorno in cui smetti di lavorare."
  },
  {
    q: "Di quanto scenderanno le pensioni future in Italia?",
    a: "Secondo il rapporto MEF 2025, il tasso di sostituzione lordo di un lavoratore dipendente passerà da circa il 72,1% nel 2030 al 61,8% nel 2040, fino al 58,4% nel 2070. Per gli autonomi la discesa è ancora più ripida: dal 50% nel 2030 a meno del 47% negli anni successivi. Chi oggi ha 30 o 40 anni rischia di vivere con una pensione pari a poco più della metà del proprio stipendio."
  },
  {
    q: "Perché conviene iniziare a pianificare la pensione il prima possibile?",
    a: "Perché in finanza il tempo è il vero alleato. Iniziare presto consente di sfruttare l'interesse composto, anche con piccoli accantonamenti mensili: ogni anno di ritardo va recuperato con versamenti molto più alti. Più si aspetta, più costruire una pensione integrativa efficace diventa difficile e costoso."
  },
  {
    q: "La previdenza complementare basta a colmare il divario?",
    a: "È lo strumento più diretto, ma non è l'unico. Una pianificazione seria combina previdenza integrativa, investimenti diversificati di lungo periodo e una visione d'insieme del patrimonio. Non esiste una formula unica valida per tutti: esiste un metodo che parte dalla tua vita e costruisce la soluzione su misura."
  },
  {
    q: "La situazione è davvero così grave o è allarmismo?",
    a: "Non si tratta di essere pessimisti, ma realistici. I numeri vengono da MEF e INAPP, non da previsioni di parte. La previdenza pubblica continuerà a esistere, ma non garantirà più lo stesso tenore di vita delle generazioni passate. Prenderne coscienza oggi, senza panico, è il primo passo per arrivare preparati."
  }
];

export function PensioniDemografia() {
  return (
    <>
      <p className="lead italic text-accent/70 border-l-4 border-blue-400 pl-6">
        Il passaggio dal metodo retributivo a quello contributivo ha cambiato le regole. Ma a pesare davvero, oggi, non sono i calcoli: è la demografia il vero punto debole della previdenza pubblica.
      </p>
      <p>A cura di <strong>Dott. Amine Alahiyane, Consulente Finanziario CFP®</strong></p>

      {/* Box attribuzione FPSB */}
      <div className="not-prose bg-blue-50 border border-blue-100 rounded-2xl p-6 my-8">
        <p className="text-sm text-accent/80 leading-relaxed m-0">
          <strong className="text-blue-700">Articolo scritto da Amine Alahiyane per FPSB Italia.</strong> Questo
          contenuto è stato pubblicato in versione originale sul sito di FPSB (Financial Planning Standards Board),
          l'ente che certifica i professionisti CFP®. Qui lo ripropongo nella mia versione per i lettori del blog.
        </p>
        <a
          href="https://fpsb.it/pensioni-demografia-e-il-grande-inganno-perche-serve-pianificare-oggi/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Leggi l'articolo originale su fpsb.it <ExternalLinkIcon />
        </a>
      </div>

      <p className="text-xl font-medium text-accent">
        <em>Tutti pensano che la pensione sia un problema dei vecchi. È esattamente il contrario: è un problema dei giovani, che ancora non se ne rendono conto.</em>
      </p>

      <p>
        Negli ultimi decenni il sistema pensionistico italiano è cambiato in profondità. Il passaggio dal metodo retributivo a quello contributivo ha legato le pensioni future ai contributi effettivamente versati, e già questo ha ridotto le aspettative di molti. Ma c'è un fattore che pesa più delle regole di calcolo, ed è quello di cui si parla meno: la <strong>demografia</strong>. È lì che si nasconde il vero punto debole della previdenza pubblica — ed è lì che si gioca il futuro di chi oggi ha tra i 30 e i 50 anni.
      </p>

      <h2>La piramide demografica si sta rovesciando</h2>
      <p>
        Secondo l'<strong>INAPP</strong> (Istituto Nazionale per l'Analisi delle Politiche Pubbliche), nei prossimi dieci anni l'Italia perderà circa <strong>sei milioni di lavoratori</strong>: un esodo verso la pensione che le nuove generazioni, troppo poco numerose, non riusciranno a compensare. Tradotto: il rapporto tra chi lavora e chi è in pensione continuerà a peggiorare, mettendo sotto pressione un sistema che si regge sulla solidarietà tra generazioni.
      </p>
      <p>
        Se negli anni '60 c'erano molti giovani e pochi anziani, oggi la piramide si è capovolta. I nuovi nati sono sempre meno, mentre i pensionati vivono molto più a lungo. Il risultato è semplice quanto scomodo: sempre meno lavoratori dovranno sostenere economicamente sempre più pensionati.
      </p>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-8">
        <h3 className="mt-0 text-blue-700">💡 Facciamo chiarezza!</h3>
        <p className="text-sm font-bold mb-2">Cos'è il sistema "a ripartizione"</p>
        <p className="text-sm m-0">
          Il sistema pensionistico italiano funziona a ripartizione: i contributi versati dai lavoratori di oggi non
          vengono messi da parte per loro, ma servono a pagare le pensioni di chi è già in quiescenza. È un patto tra
          generazioni: oggi pago per i pensionati di adesso, domani i lavoratori di domani pagheranno per me. Funziona
          finché le generazioni che entrano sono numerose almeno quanto quelle che escono. Quando questo equilibrio si
          rompe, il meccanismo entra in tensione.
        </p>
      </div>

      <h2>Tassi di sostituzione in caduta libera</h2>
      <p>
        Il <strong>Ministero dell'Economia e delle Finanze</strong>, nel rapporto 2025 <em>"Le tendenze di medio-lungo periodo del sistema pensionistico e socio-sanitario"</em>, fotografa il problema senza giri di parole. I <strong>tassi di sostituzione lordi</strong> — cioè la percentuale dell'ultimo stipendio lordo che si riceverà come pensione — sono destinati a ridursi drasticamente nei prossimi decenni.
      </p>
      <p>
        Un lavoratore dipendente che andrà in pensione nel <strong>2030</strong> potrà contare all'incirca sul <strong>72,1%</strong> dell'ultimo reddito. Ma già nel <strong>2040</strong> la quota scenderà al <strong>61,8%</strong>, fino ad arrivare al <strong>58,4% nel 2070</strong>. Per i lavoratori autonomi la situazione è ancora più critica: si passerà dal <strong>50%</strong> del 2030 a meno del <strong>47%</strong> negli anni successivi.
      </p>
      <p>
        In sintesi: chi oggi ha 30 o 40 anni rischia di dover vivere con una pensione pari a poco più della metà del proprio stipendio. Non è uno scenario lontano e astratto. È la matematica applicata alla busta paga di chi sta leggendo.
      </p>

      <h2>Un sistema sempre più fragile</h2>
      <p>
        Il sistema pensionistico si basa su un principio semplice: i contributi dei lavoratori di oggi pagano le pensioni di chi è già in quiescenza. Finché ci sono molti lavoratori e pochi pensionati, il meccanismo funziona. Ma quando il numero di nuovi ingressi nel mondo del lavoro non basta più a compensare chi esce, l'equilibrio si rompe.
      </p>
      <p>
        Ed è esattamente quello che sta accadendo in Italia: sempre meno giovani entrano nel mercato del lavoro, mentre i pensionati aumentano e l'aspettativa di vita si allunga. Questo squilibrio rende il sistema progressivamente insostenibile, e costringe i governi a interventi continui — innalzamento dell'età pensionabile, revisione dei coefficienti, riduzione degli importi futuri. Non è ideologia: è aritmetica.
      </p>

      <h2>La mia posizione: l'illusione del "ci penserò più avanti"</h2>
      <p>
        Permettimi un'opinione personale. Il problema è sotto gli occhi di tutti, eppure la reazione più diffusa è una frase che sento ripetere quasi ogni settimana: <em>"ci penserò più avanti"</em>. È l'errore più costoso che conosca.
      </p>
      <p>
        Più si aspetta, più costruire una pensione integrativa efficace diventa difficile — e caro. In finanza il tempo non è un dettaglio: <strong>è la variabile</strong>. Iniziare presto consente di sfruttare la forza dell'interesse composto, anche con piccoli accantonamenti mensili. Ogni anno di rinvio non si recupera con la stessa cifra: si recupera con versamenti molto più alti, perché manca il tempo che fa il lavoro al posto tuo.
      </p>
      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        Il tempo non è un dettaglio. È la variabile.
      </p>

      <h2>Verso una nuova consapevolezza</h2>
      <p>
        Non si tratta di essere pessimisti, ma realistici. La previdenza pubblica non sarà più in grado di garantire lo stesso tenore di vita delle generazioni passate. È un dato di fatto, non una previsione catastrofista: i numeri vengono da MEF e INAPP, non da allarmismi di parte.
      </p>
      <p>
        Quello che serve è che i cittadini ne prendano coscienza <strong>oggi</strong> e inizino a pianificare in autonomia il proprio futuro previdenziale. Previdenza integrativa, strumenti di investimento diversificati per il lungo periodo, una pianificazione anticipata e coerente: sono leve che fanno la differenza. Non esiste una formula unica valida per tutti — ma un principio è chiaro: prima si inizia, maggiore sarà la serenità domani.
      </p>

      <h2>Cinque passi per non arrivare impreparato</h2>
      <ol>
        <li><strong>Stima il tuo tasso di sostituzione.</strong> Chiediti, con onestà: con quale percentuale del mio stipendio attuale andrò in pensione? Se non lo sai, è il primo numero da scoprire.</li>
        <li><strong>Fotografa il divario.</strong> Tra la pensione attesa e il tenore di vita che vuoi mantenere c'è una distanza. Misurarla è metà del lavoro.</li>
        <li><strong>Inizia presto, anche con poco.</strong> Un piccolo versamento mensile avviato a 30 anni vale più di un grande sforzo iniziato a 50. È l'interesse composto a fare la differenza.</li>
        <li><strong>Diversifica, non improvvisare.</strong> La previdenza integrativa è un pilastro, ma va inserita in una strategia d'insieme coerente con i tuoi obiettivi e il tuo orizzonte temporale.</li>
        <li><strong>Fatti accompagnare, se serve.</strong> Quando il patrimonio cresce e gli obiettivi si fanno complessi, un professionista qualificato ti aiuta a trasformare la consapevolezza in un piano concreto.</li>
      </ol>

      <p className="text-center font-bold text-xl my-8 text-accent">
        Prima si disegna il progetto. Poi si scelgono i materiali.
      </p>

      <hr className="my-12" />

      <div className="not-prose bg-accent text-white p-6 sm:p-10 rounded-3xl mt-12 text-center">
        <h3 className="text-white mt-0 mb-4 text-2xl sm:text-3xl font-bold">Il libro è in uscita</h3>
        <p className="text-blue-100 mb-8 text-sm sm:text-base leading-relaxed">
          Approfondisco la previdenza, la pianificazione finanziaria e gli investimenti per il lungo periodo nel mio libro che sta per uscire.
        </p>
        <a href="https://wa.me/message/IYGM7IR5X6E2J1" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-accent font-bold px-6 py-3.5 sm:px-8 sm:py-3.5 rounded-full hover:bg-blue-50 transition-colors w-full sm:w-auto">
          Iscriviti alla lista d'attesa
        </a>
      </div>

      <h2>Domande frequenti su pensioni e demografia</h2>
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
        <li>Versione originale: <a href="https://fpsb.it/pensioni-demografia-e-il-grande-inganno-perche-serve-pianificare-oggi/" target="_blank" rel="noopener noreferrer">Pensioni, demografia e il grande inganno: perché serve pianificare oggi</a> — articolo a cura di Amine Alahiyane, pubblicato su FPSB Italia.</li>
        <li>MEF — Ragioneria Generale dello Stato, <em>Le tendenze di medio-lungo periodo del sistema pensionistico e socio-sanitario</em> (Rapporto n. 26, 2025).</li>
        <li>INAPP — Istituto Nazionale per l'Analisi delle Politiche Pubbliche, analisi sull'evoluzione demografica della forza lavoro italiana.</li>
        <li>ISTAT — Previsioni demografiche e indicatori sull'invecchiamento della popolazione.</li>
        <li>COVIP — Relazione annuale sulla previdenza complementare in Italia.</li>
      </ul>
    </>
  );
}
