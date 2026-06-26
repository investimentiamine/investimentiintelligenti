const faqs = [
  {
    q: "Cosa significa “mettere ordine nel patrimonio familiare”?",
    a: "Significa fare una fotografia completa di tutto ciò che la famiglia possiede (liquidità, immobili, investimenti, polizze, TFR, fondi pensione, debiti), dare un compito preciso a ogni voce in funzione degli obiettivi di vita, eliminare sovrapposizioni e colmare lacune, e impostare una manutenzione periodica. Non è un’operazione di vendita di prodotti: è un lavoro di mappatura e di progetto."
  },
  {
    q: "Da dove si comincia per organizzare il patrimonio di famiglia?",
    a: "Si comincia dall’inventario. Tutti i conti correnti, tutti gli investimenti, tutti gli immobili, tutte le polizze, tutti i fondi pensione, tutti i debiti: su un solo foglio. Poi si scrive accanto a ogni voce a cosa serve. Le voci con “scopo non chiaro” sono il punto da cui partire. Solo dopo questa mappatura ha senso ragionare su cosa cambiare, cosa tenere, cosa aggiungere."
  },
  {
    q: "Quanti soldi tenere fermi sul conto corrente per il fondo di emergenza?",
    a: "La regola “tre stipendi” è una semplificazione e va personalizzata. Per un dipendente con reddito stabile, il fondo di emergenza adeguato è in genere pari a sei mesi di spese familiari. Per un libero professionista o per chi ha reddito variabile, può salire a dodici mesi o più. Tutto ciò che eccede questa cifra è liquidità erosa dall’inflazione, non prudenza."
  },
  {
    q: "Conviene avere più conti correnti o uno solo?",
    a: "Per un dipendente con vita finanziaria semplice un conto principale può bastare, eventualmente affiancato da un canale separato per il fondo di emergenza ed uno per gli investimenti. Per un libero professionista la separazione tra flussi personali e flussi professionali (incassi, tasse, contributi) è la base di una gestione finanziaria sostenibile. Tenere tutto su un conto unico è la principale causa di ansia finanziaria che vedo in studio."
  },
  {
    q: "Quanto costa lasciare i soldi fermi sul conto corrente?",
    a: "In termini di potere d’acquisto, il costo dipende dall’inflazione del periodo. Nel 2022 in Italia è stata dell’8,1% (ISTAT). In condizioni normali oscilla tra il 2% e il 3% annuo. Su orizzonti di dieci o vent’anni anche un’inflazione “normale” erode silenziosamente una parte significativa del capitale fermo."
  },
  {
    q: "Cosa intende un consulente finanziario per “Progettazione Finanziaria”?",
    a: "Per me, Progettazione Finanziaria significa partire dalla vita di una persona (obiettivi, fasi, valori, vincoli, fragilità) e non dai prodotti finanziari disponibili. Il prodotto è il materiale di costruzione. Il progetto è la casa che vuoi costruire. La consulenza che parte dal prodotto è per me una vendita, non una consulenza."
  },
  {
    q: "Quando è il momento giusto per ripensare la propria organizzazione finanziaria?",
    a: "Il momento giusto non esiste come momento naturale: va creato. I momenti che spingono a farlo sono in genere i cambiamenti di vita (matrimonio, nascita di un figlio, acquisto immobiliare, cambio di lavoro, vicinanza alla pensione, eredità ricevute). Ma più si aspetta, più il lavoro è lungo: chi arriva con un patrimonio già stratificato da decenni paga un costo maggiore di chi mette ordine prima."
  }
];

export function OrdinePatrimonio() {
  return (
    <>
      <p className="lead italic text-accent/70 border-l-4 border-blue-400 pl-6">
        Conti correnti che si confondono, polizze dimenticate in un cassetto, una casa che pesa sul bilancio e qualche fondo che non sai più cosa contenga. Un patrimonio familiare disordinato non è un problema estetico: è un costo silenzioso. Ecco come fare ordine, partendo dal metodo prima che dai prodotti.
      </p>
      <p className="text-sm text-gray-500 italic">
        A cura di <strong>Dott. Amine Alahiyane, Consulente Finanziario CFP®</strong>.
      </p>

      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        Un patrimonio disordinato non si vede. Si subisce.
      </p>

      <p>
        Non c&rsquo;è una mattina in cui ti svegli e scopri che hai perso soldi. Non ricevi una notifica che ti dice: &ldquo;Attenzione, oggi il tuo patrimonio vale meno di ieri&rdquo;. L&rsquo;erosione del disordine è lenta, silenziosa, accettata come parte naturale delle cose. Eppure è una delle voci di costo più alte che pagano le famiglie italiane, e quasi nessuno la vede a bilancio.
      </p>
      <p>
        In questo articolo voglio spiegarti come si fa ordine in un patrimonio familiare. Non come ti diranno in una pubblicità (con il prodotto del momento, con la &ldquo;soluzione miracolosa&rdquo;, con l&rsquo;investimento che &ldquo;rende di più del conto corrente&rdquo;) ma come lo affronto in studio: con metodo, partendo dalla persona prima che dai numeri. E partendo da un fatto che vedo tutti i giorni: il problema non è quanti soldi hai. Il problema è la geografia di quei soldi.
      </p>

      <h2>Perché corriamo, e perché non ci fermiamo mai a fare ordine</h2>
      <p>
        Viviamo in <strong>un&rsquo;epoca che corre veloce</strong>. Ce ne accorgiamo ogni mattina: una lista di cose da fare, una notifica da controllare, una scadenza da rispettare. La sensazione è quasi sempre la stessa: non c&rsquo;è tempo da perdere, è tutto necessario, è tutto importante.
      </p>
      <p>
        In mezzo a questa rincorsa, ci sono domande che finiscono sempre in fondo alla lista. Domande scomode ma necessarie: dove si trovano davvero i miei soldi? Che obiettivo hanno? Quale parte del mio patrimonio sta lavorando per i miei progetti, e quale sta solo dormendo? Sono le domande che richiedono <strong>ordine mentale, pazienza, rispetto.</strong> Ed è per questo che rimandiamo: sembrano lente, e noi siamo abituati a essere veloci.
      </p>
      <p>
        Eppure il <strong>disordine ha un costo,</strong> e il costo si paga comunque. Lo paghi quando ti accorgi tardi che avevi dei fondi che neanche ti ricordavi di avere. Lo paghi quando il conto corrente è un caos ed è diventato impossibile da leggere. Lo paghi quando devi fare una scelta importante e non sai se puoi permettertelo: vendere la casa, aiutare un figlio, decidere se andare in pensione anticipata.
      </p>
      <p>
        Il <strong>disordine è una scelta che subisci in silenzio</strong>, anche quando non la riconosciamo come tale. Perché non scegliere corrisponde già a una scelta. Solo che, essendo passiva, viene percepita come neutra. E ciò che viene percepito come neutro raramente spaventa.
      </p>
      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        Il problema è che il tempo, mentre tu non decidi, continua a decidere per te.
      </p>

      <h2>Cosa significa davvero &ldquo;patrimonio familiare&rdquo;</h2>
      <p>
        Prima di parlare di ordine, vale la pena fermarsi un istante sulla parola. Quando dico <strong>&ldquo;patrimonio familiare&rdquo;</strong> non intendo solo i soldi sul conto. Intendo tutto ciò che la famiglia possiede e che ha un valore economico, presente o futuro: liquidità sui conti correnti, depositi e libretti, immobili (prima casa e seconde case), investimenti finanziari (fondi, ETF, azioni, obbligazioni, titoli di Stato, polizze a contenuto finanziario), TFR e fondi pensione, partecipazioni in società, polizze di puro rischio che proteggono il capitale umano (vita, malattia, infortuni), debiti e impegni futuri (mutuo, finanziamenti, fideiussioni). Tutto questo è il patrimonio familiare.
      </p>
      <p>
        In Italia il <strong>patrimonio delle famiglie è enorme</strong> e, allo stesso tempo, <strong>mal distribuito</strong> al suo interno. La <strong>ricchezza finanziaria complessiva degli italiani ha superato i 6.030 miliardi di euro nel 2024</strong> (rilevazione FABI di giugno 2025). Di questi, oltre 1.363 miliardi giacciono ancora come liquidità ferma sui conti correnti di famiglie e imprese (dati FABI 2024, Banca d&rsquo;Italia). Sul fronte immobiliare, la ricchezza non finanziaria delle famiglie è ampiamente concentrata nelle abitazioni, che da decenni rappresentano la quota dominante del patrimonio.
      </p>
      <p>
        Tradotto: in Italia c&rsquo;è tanto patrimonio. Ma è disordinato. E <strong>quando un patrimonio è disordinato, smette di essere uno strumento di vita e diventa un peso da gestire</strong>. Mettere ordine, prima ancora di parlare di prodotti finanziari o di scelte di investimento, significa fare una <strong>fotografia precisa di cosa hai, dove si trova, a cosa serve</strong>. È un lavoro di mappatura, non di vendita. E il consulente serio non parte dal cosa proporti: parte dal capire cosa hai già.
      </p>

      <h2>Perché un patrimonio si disordina (anche quando si è prudenti)</h2>
      <p>
        Una cosa va detta subito, perché il disordine finanziario porta con sé spesso un senso di colpa, e il senso di colpa è il peggior consigliere quando si tratta di decidere bene. <strong>Il disordine non nasce dalla pigrizia o dalla superficialità delle persone</strong>. Nasce dal modo in cui in Italia, negli ultimi decenni, ci hanno abituati a comprare soluzioni finanziarie.
      </p>
      <p>
        Per anni, in molte filiali, l&rsquo;incontro tra risparmiatore e intermediario è stato impostato così: la persona arriva, racconta di avere dei soldi da investire e di non sapere come investirli, e l&rsquo;interlocutore propone &ldquo;il prodotto più adatto, pescando da un catalogo prestabilito di prodotti preconfezionati&rdquo;. Hai paura della pensione? Ti propongo una polizza pensionistica. Vuoi mettere via qualcosa per i figli? Ti propongo un fondo. Hai liquidità ferma? Ti propongo un piano di accumulo. Una preoccupazione, un prodotto.
      </p>
      <p>
        <strong>Il problema è che la vita di una famiglia non è una somma di preoccupazioni isolate. È un sistema.</strong> Le scelte sui figli si parlano con le scelte sulla pensione. Il mutuo si parla con la liquidità di emergenza. La protezione del capitale umano si parla con l&rsquo;esposizione agli investimenti. Se sommi prodotti senza un disegno generale, ottieni esattamente quello che vedo arrivare in studio quasi ogni settimana: dieci-quindici strumenti finanziari distribuiti su quattro o cinque istituti, polizze sottoscritte in tempi diversi con coperture che si sovrappongono in alcune cose e si dimenticano in altre, conti correnti aperti per pagare una rata e mai più chiusi, immobili comprati con grandi aspettative che oggi rappresentano una zavorra invece che una risorsa.
      </p>
      <p>
        È quello che, nel libro che sto scrivendo, viene chiamato <em>risparmio tradito</em>. Non perché ci sia un nemico da indicare, ma perché <strong>un sistema che vende prodotti senza disegnare prima un progetto trasforma il risparmio</strong> (che è la materia prima delle nostre scelte di vita) <strong>in una collezione di oggetti che a un certo punto non si capisce più a cosa servano.</strong>
      </p>
      <p>
        E così succede, paradossalmente, che le famiglie più prudenti finiscano per essere le più disordinate. Sono quelle che, per non sbagliare, hanno detto sì a tutto: un po&rsquo; di liquidità sempre, un po&rsquo; di mattone, qualche polizza, qualche obbligazione, qualche fondo. Hanno <strong>costruito un patrimonio per stratificazione, non per progetto</strong>. Ed è proprio quel patrimonio che oggi va ripensato come si ripensa una casa: prima il progetto, poi i materiali.
      </p>

      <h2>Il costo silenzioso del disordine</h2>
      <p>
        La voce di costo più conosciuta del disordine patrimoniale è la liquidità ferma. In Italia, secondo i dati FABI, oltre il 25% della ricchezza finanziaria delle famiglie resta come liquidità sui conti correnti. Vale la pena chiarire un equivoco frequente: <strong>tenere soldi sul conto è risparmiare, non è investire.</strong> Risparmiare vuol dire mettere da parte, trattenere consumo oggi per averlo disponibile domani. Sono due cose diverse, e l&rsquo;inflazione le tratta diversamente. Sul conto, il potere d&rsquo;acquisto si erode anno dopo anno: l&rsquo;inflazione media in Italia nel 2022 è stata dell&rsquo;8,1% (ISTAT, dicembre 2022); negli anni successivi è rientrata, ma il danno cumulato resta. Il conto ti protegge il numero (il &ldquo;100&rdquo; resta &ldquo;100&rdquo;), non quello che con quel &ldquo;100&rdquo; puoi davvero comprare.
      </p>
      <p>
        Ma il disordine non costa solo in liquidità ferma. Costa anche in altri modi, meno visibili e spesso più dolorosi quando si manifestano.
      </p>
      <p>
        <strong>Costa in copertura mancante.</strong> Una famiglia con un patrimonio costruito a strati spesso ha più polizze, ma raramente ha le coperture giuste. Capita di avere una polizza vita molto generosa e nessuna copertura sulla perdita di reddito da invalidità, oppure di pagare una RC famiglia tre volte perché tre intermediari diversi l&rsquo;hanno proposta nel tempo. Le sovrapposizioni costano denaro; le lacune costano serenità.
      </p>
      <p>
        <strong>Costa in fiscalità.</strong> Quando gli strumenti finanziari sono frammentati su molti intermediari, è quasi impossibile compensare correttamente le minusvalenze con le plusvalenze. Quel famoso &ldquo;zainetto fiscale&rdquo; che dovrebbe ridurre il prelievo futuro spesso si svuota nel tempo, semplicemente perché chi possiede il patrimonio non sa che esiste, o non sa quanto è grande, o non sa come usarlo prima che scada.
      </p>
      <p>
        <strong>Costa in tempo perso.</strong> Ogni decisione importante (vendere una casa, fare una donazione, scegliere se andare in pensione, gestire un&rsquo;eredità) richiede una fotografia precisa del patrimonio. Quando la fotografia non c&rsquo;è, la decisione si prende sulla base di sensazioni. E le sensazioni sono il peggior consigliere quando ci sono numeri da rispettare.
      </p>
      <p>
        <strong>Costa in passaggio generazionale.</strong> Un patrimonio disordinato è difficile da trasmettere. I figli che ereditano un sistema che non capiscono pagano il prezzo del disordine altrui: spesso vendono in fretta, in periodi sbagliati, o tengono fermo ciò che andava mosso. È uno dei modi più comuni in cui la ricchezza si dissipa tra generazioni.
      </p>
      <p>
        Tutte queste voci, sommate, costano alle famiglie italiane più di quanto costino i rendimenti negativi sui mercati nei loro anni peggiori. Ma essendo distribuite nel tempo e mai dichiarate da nessuno, non vengono percepite. Sono il rumore di fondo di un Paese che non ha mai messo l&rsquo;educazione finanziaria al centro della propria scuola. Lo dicono i numeri: secondo l&rsquo;indagine OCSE PISA 2022 Financial Literacy (rapporto INVALSI – Banca d&rsquo;Italia pubblicato nel 2024), gli studenti quindicenni italiani ottengono 484 punti contro una media OCSE di 498, e il 18% non raggiunge il livello minimo di competenza finanziaria. Cresciamo senza un linguaggio per parlare del nostro patrimonio. E un patrimonio di cui non sai parlare è un patrimonio che inevitabilmente si disordina.
      </p>

      <h2>Non è un problema di prodotti, è un problema di progetto</h2>
      <p>
        Permettimi un&rsquo;opinione personale, perché su questo punto vado controcorrente rispetto a buona parte di ciò che si racconta in giro.
      </p>
      <p>
        La narrazione dominante oggi è che, per mettere ordine in un patrimonio, servano prodotti nuovi. Più si parla di rendimenti, di ETF a basso costo, di gestioni patrimoniali, di robo-advisor, di soluzioni &ldquo;ottimali&rdquo;, più si dà la sensazione che mettere ordine sia una questione di scelta dello strumento giusto. Non sono d&rsquo;accordo.
      </p>
      <p>
        Negli anni che ho passato ad ascoltare famiglie in studio (giovani professionisti che si stavano sposando, imprenditori a metà carriera, coppie a un passo dalla pensione, vedove o vedovi che si trovavano per la prima volta a gestire da soli un patrimonio costruito in due) ho visto una cosa ripetersi con una regolarità imbarazzante. Non avevano solo un problema di prodotto. <strong>Avevano un problema di progetto</strong>. Sapevano cosa avevano comprato. <strong>Non sapevano <em>perché</em> lo avessero comprato</strong>, e soprattutto non sapevano se ciò che avevano comprato fosse ancora coerente con la vita che stavano costruendo.
      </p>
      <p>
        Mettere ordine in un patrimonio non significa svuotare il portafoglio e ricostruirlo da zero. Quasi mai serve farlo. Significa rispondere, prima di toccare qualunque cosa, a tre domande.
      </p>
      <p>
        La prima: quali sono gli obiettivi reali della tua famiglia nei prossimi dieci, venti, trent&rsquo;anni? Non i sogni vaghi, gli obiettivi precisi. Aiutare i figli a sostenere gli studi universitari. Comprare casa entro cinque anni. Smettere di lavorare anticipatamente. Proteggere il coniuge nel caso si venisse a mancare prima. Lasciare un&rsquo;eredità ordinata invece che un labirinto.
      </p>
      <p>
        La seconda: come si lega ciascuno degli strumenti che hai oggi a uno di quegli obiettivi? Quali strumenti hanno una funzione precisa, e quali sono lì per inerzia o per una decisione che vent&rsquo;anni fa aveva senso ma oggi non ne ha più?
      </p>
      <p>
        La terza: cosa manca? Quali rischi non sono coperti, quali obiettivi non hanno un canale dedicato, quali parti del patrimonio sono ridondanti rispetto ad altre?
      </p>
      <p>
        Solo dopo aver risposto a queste tre domande ha senso parlare di prodotti. Perché un prodotto, <strong>qualunque prodotto, è un materiale da costruzione. E nessun materiale, per quanto buono, costruisce una casa senza un disegno alla base.</strong>
      </p>
      <p>
        È esattamente questa la differenza tra ciò che chiamo Progettazione Finanziaria e ciò che troppo spesso viene venduto come &ldquo;consulenza&rdquo; nelle filiali. La consulenza che parte dal prodotto è una vendita travestita. <strong>La Progettazione Finanziaria parte dalla vita, dai valori, dagli obiettivi, dalla fotografia esatta di dove sei. E solo quando il disegno è chiaro, sceglie i materiali giusti per costruirlo.</strong>
      </p>

      <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 my-10">
        <h3 className="mt-0 text-blue-700">Il caso di Giovanni: cosa significa fare ordine, in pratica</h3>
        <p className="text-sm leading-relaxed">
          Per non restare sull&rsquo;astratto, voglio raccontarti un caso reale (cambio nome e qualche dettaglio per riservatezza). Giovanni è un architetto. Quando è arrivato in studio, era già in età pensionabile, ma continuava a lavorare.
        </p>
        <p className="text-sm leading-relaxed">
          <strong>Risultato concreto:</strong> un unico conto corrente su cui transitava tutto. Gli incassi della libera professione, le spese di casa, le bollette, le vacanze, le tasse e i contributi che doveva accantonare. Un fondo per &ldquo;le emergenze&rdquo; che esisteva solo nella sua testa, perché di fatto i soldi dell&rsquo;emergenza si confondevano con tutto il resto.
        </p>
        <p className="text-sm leading-relaxed">
          <strong>Risultato emotivo: un&rsquo;ansia costante. La sensazione di non avere mai il controllo.</strong> La preoccupazione di non avere abbastanza liquidità per un imprevisto, che lo portava a tenere sempre una <strong>grossa cifra &ldquo;di sicurezza&rdquo; sul conto</strong>. Una cifra che, paradossalmente, non lo tranquillizzava per niente, perché non sapeva quanta di quella cifra fosse davvero &ldquo;sua&rdquo; e quanta fosse soltanto un transito in attesa di andare altrove.
        </p>
        <p className="text-sm leading-relaxed">
          Quando si è seduto davanti a me, due erano gli obiettivi che gli stavano davvero a cuore: mantenere il tenore di vita anche lavorando a qualche progetto sporadico e contribuire ai matrimoni dei suoi due figli. Obiettivi precisi, raggiungibili. Ma solo se il patrimonio era ordinato. E in quel momento non lo era affatto.
        </p>
        <p className="text-sm leading-relaxed">
          Il primo lavoro che abbiamo fatto insieme non è stato sui prodotti. Non gli ho proposto investimenti né polizze. Abbiamo fatto una cosa diversa: abbiamo <strong>separato</strong>. Abbiamo distinto i flussi della vita professionale da quelli della vita personale. Abbiamo creato canali dedicati per le tasse e i contributi (la zona grigia che generava ansia ogni anno fiscale). Abbiamo definito, sulla base delle sue spese reali annuali, un fondo di emergenza dimensionato non a sensazione ma sulla base di numeri concreti, e gli abbiamo dato una collocazione precisa. Abbiamo dato a ciascun euro un compito.
        </p>
        <p className="text-sm leading-relaxed">
          Il sistema dei conti dedicati — un conto per la vita personale, un conto per le tasse e i contributi, un conto-cuscinetto per le emergenze, un canale separato per gli investimenti — non è una tecnicalità contabile. <strong>È un cambio di paradigma</strong>. Quando ogni euro ha un compito, non c&rsquo;è più ambiguità. Quel piccolo <strong>cambio strutturale</strong>, da solo, <strong>abbatte</strong> una parte enorme dell&rsquo;<strong>ansia finanziaria.</strong> E ti permette di prendere le decisioni successive da una posizione di lucidità, non di stress.
        </p>
        <p className="text-sm leading-relaxed">
          Solo dopo aver fatto ordine, abbiamo affrontato i passi successivi: una strategia di investimento dedicata all&rsquo;integrazione della pensione, e un canale specifico per accumulare le risorse da destinare ai matrimoni dei figli. Prodotti scelti dopo, non prima. Strumenti coerenti con il progetto finanziario.
        </p>
        <p className="text-sm leading-relaxed">
          Il risultato non è stato un cambio di rendimento. <strong>È stato un cambio di vita</strong>. Giovanni oggi non lavora più perché ha paura di non farcela: <strong>lavora perché ama farlo.</strong> Quando arriva una spesa imprevista, sa esattamente dove pescare senza toccare nient&rsquo;altro.
        </p>
      </div>

      <h2>La checklist operativa: come iniziare a mettere ordine</h2>
      <p>Ti scrivo qui sotto i passaggi pratici per iniziare a fare ordine e ritrovare la chiarezza. Non è un manuale &ldquo;fai da te&rdquo; (su un patrimonio articolato il fai da te quasi sempre lascia buchi che si pagano cari), ma è una mappa di cosa significa concretamente fare ordine.</p>

      <h3>1. Mappare tutto, su un foglio solo</h3>
      <p>
        Il primo lavoro è un inventario completo. Tutti i conti correnti, tutti i depositi, tutti gli investimenti, tutti gli immobili, tutte le polizze, tutti i fondi pensione, tutti i debiti. Tutto, su un solo foglio. Se non riesci a tenere il quadro su un solo foglio, il problema non è il foglio: è la frammentazione.
      </p>

      <h3>2. Dare un nome e un compito a ciascuna voce</h3>
      <p>
        Per ogni voce della mappa, scrivi accanto a cosa serve. &ldquo;Conto corrente principale, qui transita lo stipendio&rdquo;. &ldquo;Polizza vita, copre il mutuo in caso io venga a mancare&rdquo;. &ldquo;Fondo X presso intermediario Y, scopo non chiaro: capirlo&rdquo;. Le voci con &ldquo;scopo non chiaro&rdquo; sono il primo punto su cui lavorare. Sono il sintomo del disordine.
      </p>

      <h3>3. Separare ciò che va separato</h3>
      <p>
        Se sei un libero professionista o un imprenditore, le finanze personali e quelle professionali devono vivere in canali distinti. Se sei un dipendente, vale comunque distinguere il conto dei flussi correnti dal conto-cuscinetto per le emergenze e dal canale dedicato agli investimenti. La separazione non è una complicazione: è la condizione di base per leggere il tuo patrimonio senza ambiguità.
      </p>

      <h3>4. Dimensionare il fondo di emergenza</h3>
      <p>
        Il cuscinetto di liquidità non si dimensiona a sensazione. Si dimensiona a partire dalle tue spese reali annuali e dalla stabilità del tuo reddito. Per un dipendente con reddito stabile, sei mesi di spese sono spesso sufficienti. Per un libero professionista, può servire molto di più. Il numero giusto non è universale: è il tuo.
      </p>

      <h3>5. Verificare le coperture, una a una</h3>
      <p>
        Ogni polizza che hai va riletta. Non per capire &ldquo;quanto rende&rdquo; (le polizze di rischio non rendono, proteggono), ma per capire cosa copre, in quali casi, con quali franchigie ed esclusioni. Verifica sovrapposizioni e lacune. Il patrimonio umano (la tua capacità di produrre reddito) di solito vale molto di più del patrimonio finanziario, ma raramente è protetto in modo adeguato.
      </p>

      <h3>6. Riallocare la liquidità eccedente</h3>
      <p>
        Una volta che il fondo di emergenza è dimensionato e collocato correttamente, tutto ciò che eccede non è &ldquo;prudenza&rdquo;: è erosione silenziosa. Questo non significa investire tutto immediatamente. Significa avere un piano per spostare gradualmente le risorse in eccesso verso strumenti coerenti con i tuoi obiettivi, con il tuo orizzonte temporale e con la tua reale tolleranza al rischio.
      </p>

      <h3>7. Programmare la manutenzione</h3>
      <p>
        Un patrimonio ordinato non resta ordinato da solo. Va rivisto almeno una volta l&rsquo;anno, e ogni volta che cambia qualcosa di rilevante nella vita (matrimonio, nascita di un figlio, perdita di un genitore, cambio di lavoro, acquisto immobiliare, vendita di un&rsquo;attività). La manutenzione è la parte meno romantica del lavoro, ma è quella che fa la differenza tra un ordine momentaneo e un equilibrio nel tempo.
      </p>

      <h2>Una chiusura, e un primo passo</h2>
      <p>
        Mettere ordine nel patrimonio familiare non è un&rsquo;operazione chirurgica. È una scelta di consapevolezza. È la <strong>decisione di non lasciare più che il caos quotidiano decida al posto tuo</strong> cose che riguardano i tuoi figli, la tua pensione, la tua libertà di scegliere come vivere il tempo che ti resta.
      </p>
      <p>
        Non serve avere un grande patrimonio per fare ordine. Anzi: <strong>prima si fa ordine, più piccolo è lo sforzo necessario.</strong> Le famiglie che arrivano in studio dopo trent&rsquo;anni di stratificazioni si trovano davanti a un lavoro lungo. Le famiglie che arrivano presto, con un patrimonio ancora &ldquo;leggero&rdquo;, fanno un lavoro molto più semplice e si portano avanti di vent&rsquo;anni.
      </p>
      <p>
        <strong>Il momento giusto per mettere ordine non esiste, va cercato, creato, e soprattutto va difeso dal rumore del quotidiano nel corso del tempo</strong>. La buona notizia è che, una volta fatto, il rumore del breve periodo perde potere. E quando il rumore perde potere, il tuo patrimonio smette di essere un peso e torna a essere quello che dovrebbe sempre essere stato: uno strumento di vita.
      </p>

      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        Prima si disegna il progetto. Poi si scelgono i materiali.
      </p>

      <div className="not-prose text-center my-12 py-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-4">Facciamo ordine insieme sul tuo patrimonio familiare?</h3>
        <p className="text-slate-600 mb-8 text-base leading-relaxed max-w-xl mx-auto">
          Prenota una prima consulenza gratuita per capire come posso aiutarti a fare chiarezza e costruire un progetto su misura per te.
        </p>
        <a href="https://wa.me/message/IYGM7IR5X6E2J1" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Prenota Appuntamento
        </a>
      </div>

      <h2>Domande frequenti</h2>
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

      <h2>Bibliografia e fonti</h2>
      <ul>
        <li>FABI, Nei salvadanai delle famiglie italiane 6.030 miliardi, comunicato del 14 giugno 2025.</li>
        <li>FABI, Sui conti correnti di famiglie e imprese 20 miliardi in più nel 2024, comunicato del 1° marzo 2025.</li>
        <li>Banca d&rsquo;Italia, Indagine sui bilanci delle famiglie italiane nell&rsquo;anno 2022, ottobre 2024.</li>
        <li>ISTAT, Prezzi al consumo. Dati definitivi. Dicembre 2022 e media 2022, comunicato del 17 gennaio 2023.</li>
        <li>ISTAT, Spese per consumi delle famiglie. Anno 2024, comunicato del 7 ottobre 2025.</li>
        <li>INVALSI – Banca d&rsquo;Italia, OCSE PISA 2022 Financial Literacy. I giovani e l&rsquo;alfabetizzazione finanziaria in Italia. Rapporto nazionale, giugno 2024.</li>
        <li>Banca d&rsquo;Italia, Conti distributivi sulla ricchezza delle famiglie, aggiornamento trimestrale.</li>
        <li>CONSOB, Report sulle scelte di investimento delle famiglie italiane, edizione 2024.</li>
      </ul>
    </>
  );
}
