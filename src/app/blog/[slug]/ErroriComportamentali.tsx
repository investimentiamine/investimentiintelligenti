const faqs = [
  {
    q: "Cosa sono gli errori comportamentali negli investimenti?",
    a: "Sono decisioni finanziarie guidate da emozioni e scorciatoie mentali invece che da obiettivi e orizzonte temporale: vendere per paura durante un ribasso, comprare ciò che tutti comprano, rimandare scelte importanti. Li studia la finanza comportamentale, nata dalla Teoria del Prospetto di Kahneman e Tversky (1979). Secondo lo studio Morningstar “Mind the Gap” 2026, gli errori di tempistica hanno fatto perdere agli investitori circa 1,2 punti di rendimento l’anno nel decennio chiuso a fine 2025."
  },
  {
    q: "Qual è il bias più pericoloso quando i mercati scendono?",
    a: "L’avversione alle perdite è il più potente: una perdita pesa psicologicamente molto più di un guadagno della stessa entità, e spinge a vendere pur di smettere di soffrire. Nelle crisi si somma al recency bias, cioè la tendenza a credere che la situazione presente durerà per sempre. Insieme trasformano una perdita temporanea in una perdita definitiva."
  },
  {
    q: "Conviene vendere quando il mercato crolla?",
    a: "Vendere per paura durante un crollo è storicamente tra le scelte più costose, perché obbliga a indovinare anche il rientro. Nella simulazione Vanguard sul 2020, chi è passato alla liquidità da marzo a luglio ha ottenuto circa il -2%, contro il +21% di chi ha mantenuto un portafoglio 60/40. Ogni decisione va comunque valutata sui propri obiettivi."
  },
  {
    q: "Cosa succede se perdo i giorni migliori del mercato?",
    a: "Il risultato di lungo periodo può ridursi drasticamente. Secondo Vanguard, 100.000 dollari investiti nell’S&P 500 dal 1988 al 2024 sarebbero diventati circa 4,9 milioni restando sempre investiti, ma solo 2,3 milioni perdendo i 10 giorni migliori e circa 900.000 dollari perdendone 30. Il rendimento annuo scende dall’11,1% all’8,9% mancando appena 10 giorni su 37 anni."
  },
  {
    q: "Quanto ha perso l’S&P 500 nel 2020, nel 2022 e nel 2025?",
    a: "Nel 2020 l’S&P 500 ha perso circa il 34% dal massimo al minimo del 23 marzo, recuperando nel giro di pochi mesi. Il 2022 si è chiuso in calo di circa il 13%, con azioni e molte obbligazioni in discesa insieme. Nel 2025, dopo il Liberation Day, la perdita massima da inizio anno ha sfiorato il 23%. Nonostante queste tre crisi, dal 2020 al 2025 l’indice ha più che raddoppiato il proprio valore."
  },
  {
    q: "Cos’è il market timing e perché è così difficile?",
    a: "È il tentativo di uscire dal mercato prima dei ribassi e rientrare prima dei rialzi. Richiede di indovinare due momenti, e il rientro è il più difficile: le riprese partono spesso quando le notizie sono ancora negative. Chi aspetta conferme rischia di perdere proprio i giorni di rimbalzo più forti."
  },
  {
    q: "Come evitare di prendere decisioni emotive sugli investimenti?",
    a: "Il modo più efficace è decidere prima della crisi: separare la liquidità per le emergenze da ciò che può oscillare, collegare ogni investimento a un obiettivo e a un orizzonte temporale, stabilire in anticipo regole di ribilanciamento, ridurre la frequenza con cui si controlla il portafoglio e confrontarsi con una figura terza prima di decisioni prese sotto pressione."
  },
  {
    q: "Un consulente finanziario può davvero aiutare a evitare gli errori comportamentali?",
    a: "Può aiutare a ridurli, non a eliminarli: una figura esterna aiuta a costruire un piano prima delle crisi e a rispettarlo durante. La ricerca Vanguard Advisor’s Alpha® stima un valore aggiunto potenziale di circa 3 punti di rendimento nel tempo, precisando che non è annuo, è molto irregolare e dipende dalla situazione del singolo. Non è una garanzia."
  }
];

export function ErroriComportamentali() {
  return (
    <>
      <p className="lead italic text-accent/70 border-l-4 border-blue-400 pl-6">
        Pandemia, guerra in Ucraina, dazi del Liberation Day: tre crisi in sei anni, e ogni volta la stessa tentazione di uscire dal mercato &ldquo;in attesa che si calmino le acque&rdquo;. Cosa succede nella nostra testa quando i mercati scendono, quanto costano gli errori comportamentali e come proteggersi prima della prossima tempesta.
      </p>
      <p className="text-sm text-gray-500 italic">
        A cura di <strong>Dott. Amine Alahiyane, Consulente Finanziario CFP®</strong>
      </p>

      <p>
        Ogni crisi sembra unica mentre la stai vivendo. Le reazioni degli investitori, invece, si ripetono sempre uguali.
      </p>
      <p>
        Marzo 2020. Le domande che ci si poneva erano quasi sempre le stesse: &ldquo;E se questa volta fosse diverso?&rdquo;, &ldquo;Non sarebbe meglio vendere tutto e aspettare?&rdquo;. Due anni dopo, con la guerra in Ucraina, quelle domande sono tornate con parole nuove. E ad aprile 2025, con i dazi annunciati dalla Casa Bianca, sono tornate di nuovo.
      </p>
      <p>
        Tre crisi diverse, con cause diverse e titoli di giornale diversi. Una sola reazione, identica ogni volta: il bisogno di fare qualcosa, subito, pur di smettere di sentire quel disagio.
      </p>
      <p>
        Voglio parlarti di questo: non di cosa faranno i mercati domani (nessuno lo sa), ma di cosa facciamo noi quando scendono. Perché la convinzione che mi sono fatto ascoltando le persone in studio è semplice: <strong>il rischio più grande per i tuoi investimenti raramente si trova sullo schermo. Molto più spesso si trova davanti allo schermo.</strong>
      </p>

      <h2>Cosa sono gli errori comportamentali negli investimenti</h2>
      <p>
        Per decenni l&rsquo;economia ha descritto l&rsquo;investitore come una persona perfettamente razionale. Poi due psicologi, <strong>Daniel Kahneman e Amos Tversky</strong>, hanno dimostrato che le cose vanno diversamente. Nel 1979 pubblicarono la <strong>Teoria del Prospetto</strong>, il lavoro che ha dato vita alla finanza comportamentale e che nel 2002 è valso a Kahneman il Premio Nobel per l&rsquo;Economia.
      </p>
      <p>
        La loro scoperta più famosa si riassume in poche parole: <strong>una perdita ci fa soffrire molto più di quanto un guadagno della stessa entità ci renda felici.</strong> Trovare 100 euro per strada fa piacere, ma perderne 100 dal portafoglio ci rovina la giornata. Il cervello dà più peso alle minacce che alle opportunità, anche quando la &ldquo;minaccia&rdquo; è un numero rosso sull&rsquo;app della banca.
      </p>
      <p>
        Gli errori comportamentali sono le decisioni finanziarie che nascono da questi meccanismi psicologici invece che da un ragionamento sui propri obiettivi. Vendere perché si ha paura, comprare perché lo fanno tutti, rimandare perché &ldquo;adesso non è il momento&rdquo;. Non sono errori da sprovveduti: li commettono anche persone brillanti e abituate a decidere. Sono errori umani.
      </p>
      <p>
        E c&rsquo;è un punto che vale la pena fissare subito: <strong>quasi mai il problema è lo strumento in cui si è investito. Quasi sempre il problema è il momento e il modo in cui si decide di entrarci o di uscirne.</strong>
      </p>

      <h2>Tre crisi in sei anni: cosa si provava davvero</h2>
      <p>
        A distanza di anni, sul grafico, le crisi diventano piccole pieghe in una linea che sale. Viverle è un&rsquo;altra cosa. Proviamo a rientrarci per ricordare cosa si sentiva.
      </p>

      <h3>Marzo 2020: la pandemia</h3>
      <p>
        Le città vuote, i bollettini della Protezione Civile alle sei del pomeriggio, la sensazione che il mondo si fosse fermato da un giorno all&rsquo;altro. In poche settimane l&rsquo;indice S&P 500, il principale mercato azionario americano, arrivò a perdere circa il 34% dal suo massimo, toccando il punto più basso il 23 marzo 2020. Un mese dopo successe qualcosa che nessuno aveva mai visto: il 20 aprile il contratto sul petrolio americano WTI con consegna a maggio chiuse a -37,63 dollari al barile. Chi aveva petrolio da consegnare pagava per disfarsene. A molti sembrò la fine del petrolio, e forse di molto altro.
      </p>
      <p>
        In quei giorni le frasi che sentivo più spesso erano &ldquo;meglio aspettare a investire, siamo in una pandemia globale, aspettiamo tempi migliori&rdquo; oppure &ldquo;meglio uscire adesso, anche perdendoci qualcosa, e rientrare quando si saranno calmate le acque&rdquo;. Frasi comprensibili. Avevamo paura tutti.
      </p>

      <h3>2022: guerra, inflazione e tassi</h3>
      <p>
        Il 24 febbraio 2022 la Russia invade l&rsquo;Ucraina. Nei primi giorni di marzo il Brent arriva a sfiorare i 140 dollari al barile, vicino al record del 2008: lo stesso petrolio che due anni prima era sceso sotto zero e che molti davano per finito. Bollette alle stelle, inflazione ai massimi da decenni, banche centrali che alzano i tassi di corsa. Scendono le azioni ma anche molte obbligazioni, colpite dal rialzo dei tassi: la sensazione era di non avere un posto dove ripararsi. L&rsquo;S&P 500 chiuse l&rsquo;anno in calo di circa il 13%.
      </p>

      <h3>Aprile 2025: il Liberation Day</h3>
      <p>
        Il 2 aprile 2025 gli Stati Uniti annunciano dazi su gran parte dei partner commerciali. Seguono settimane di notizie che cambiano ogni giorno, a volte ogni ora. Dall&rsquo;inizio dell&rsquo;anno al punto più basso, l&rsquo;S&P 500 arriva a perdere quasi il 23%. Tornano i titoli sui &ldquo;miliardi bruciati&rdquo; e torna la domanda di sempre: e se questa volta fosse diverso?
      </p>
      <p>
        Tre crisi con cause completamente diverse. Eppure, se rileggi le frasi che si dicevano in quei momenti, sembrano scritte dalla stessa persona.
      </p>

      <h2>La storia di Sara, che ha dormito sei anni</h2>
      <p>
        Ti propongo un esperimento mentale. Immagina Sara, 38 anni. È il 1° gennaio 2020 e Sara decide di partecipare a un programma sperimentale di ibernazione: dormirà sei anni esatti, senza invecchiare di un giorno. Prima di addormentarsi investe 100.000 euro nel mercato azionario americano (l&rsquo;indice S&P 500), un capitale di cui sa che non avrà bisogno per molto tempo. Poi chiude gli occhi.
      </p>
      <p>
        Si risveglia il 31 dicembre 2025. Le raccontano che nel frattempo c&rsquo;è stata una pandemia che ha chiuso il mondo in casa, che il petrolio per un giorno è valso meno di zero, che la Russia ha invaso l&rsquo;Ucraina, che l&rsquo;inflazione è tornata a mordere e che gli Stati Uniti hanno avviato una guerra commerciale con mezzo mondo. Sara impallidisce e corre a controllare il conto, convinta di trovare macerie.
      </p>
      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        Trova circa 222.000 euro. In sei anni, con tre crisi in mezzo, il suo capitale è più che raddoppiato (+122%).
      </p>
      <p>
        Ma il numero non è la parte più interessante di questa storia. La parte interessante è ciò che Sara si è risparmiata. Non ha visto il suo capitale perdere un terzo del valore nel giro di poche settimane nel marzo 2020, non ha letto i titoli sul petrolio sotto zero, non ha passato il 2022 a chiedersi se l&rsquo;inflazione le avrebbe mangiato tutto e non ha assistito, nella primavera del 2025, alla perdita di quasi un quarto del valore rispetto a inizio anno. Soprattutto, <strong>non ha mai avuto l&rsquo;occasione di dire &ldquo;esco e rientro quando si calmano le acque&rdquo;.</strong> Il tempo ha lavorato al posto delle sue paure.
      </p>
      <p>
        Per chi preferisce una diversificazione più ampia, lo stesso esperimento sull&rsquo;indice azionario mondiale (MSCI All Country World Index) avrebbe portato Sara a circa 194.000 euro (+94%), attraversando cadute molto simili nei momenti peggiori. Del resto, oggi gli Stati Uniti pesano circa due terzi di quell&rsquo;indice.
      </p>
      <p>
        Il passato non garantisce il futuro, e nessuno può sapere come andrà la prossima crisi. L&rsquo;esempio di Sara non serve a dire che bisogna investire tutto in azioni e dimenticarsene. Serve a mostrare una verità scomoda: <strong>noi non siamo Sara. Siamo svegli.</strong> Guardiamo le notizie, apriamo l&rsquo;app della banca, ascoltiamo il collega che ha appena venduto tutto. Il vero rischio non è l&rsquo;oscillazione in sé, ma quello che siamo tentati di fare mentre la viviamo.
      </p>

      <h2>Perché succede: i bias che si accendono quando il mercato scende</h2>
      <p>
        Nei momenti di crisi il cervello non cerca la decisione migliore. Cerca sollievo. Vuole smettere di vedere il segno meno e tornare a sentirsi al sicuro. Il problema è che sentirsi al sicuro e prendere una buona decisione non sono sempre la stessa cosa. La finanza comportamentale ha dato un nome a molti dei meccanismi che entrano in gioco, e io li ho visti all&rsquo;opera proprio in queste tre crisi.
      </p>
      <p>
        Il primo a scattare è l&rsquo;<strong>avversione alle perdite</strong> di cui parlavano Kahneman e Tversky. Nel marzo 2020 vendere significava smettere di soffrire. Peccato che in quel modo una perdita temporanea, che sul grafico sarebbe durata pochi mesi, diventasse una perdita definitiva.
      </p>
      <p>
        Subito dopo arriva il <strong>recency bias</strong>, la tendenza a pensare che ciò che sta succedendo adesso durerà per sempre. Ad aprile 2020 sembrava che il lockdown non sarebbe mai finito e che il petrolio non sarebbe più servito a nessuno. Due anni dopo quello stesso petrolio sfiorava i 140 dollari. Quando fa paura, il presente ci sembra eterno.
      </p>
      <p>
        Poi c&rsquo;è l&rsquo;<strong>effetto gregge</strong>. Quando tutti intorno a te vendono, restare fermi sembra da incoscienti; quando tutti comprano il tema del momento, restarne fuori sembra da sciocchi. Nel mio libro lo chiamo il consiglio del &ldquo;cuggino&rdquo;: quello che ieri non distingueva un&rsquo;obbligazione da una bolletta e oggi ti spiega con grande sicurezza cosa fare. Il &ldquo;cuggino&rdquo;, nelle crisi, di solito ha appena venduto.
      </p>

      <hr className="my-12" />

      <div className="not-prose bg-accent text-white p-6 sm:p-10 rounded-3xl mt-12 text-center">
        <h3 className="text-white mt-0 mb-4 text-2xl sm:text-3xl font-bold">Il libro è in uscita</h3>
        <p className="text-blue-100 mb-8 text-sm sm:text-base leading-relaxed">
          Nel libro che sta per uscire racconto chi è davvero il &ldquo;cuggino&rdquo;, perché i suoi consigli ci sembrano così convincenti e come difendersi dal rumore, insieme a come si trasforma una perdita in una strategia d&rsquo;azione. È il distillato di anni di lavoro con persone reali, dati ufficiali e una convinzione di fondo: la confusione finanziaria non è un destino, è un problema risolvibile.
        </p>
        <a href="/libroanteprima" className="inline-block bg-white text-accent font-bold px-6 py-3.5 sm:px-8 sm:py-3.5 rounded-full hover:bg-blue-50 transition-colors w-full sm:w-auto">
          Iscriviti alla lista d&rsquo;attesa
        </a>
      </div>

      <p>
        Più subdolo è l&rsquo;<strong>ancoraggio</strong>. Chi esce si fissa un numero in testa: &ldquo;rientro quando torna al prezzo a cui ho venduto&rdquo;. Ma spesso, nonostante la ripartenza, il ricordo dell&rsquo;esperienza negativa rimane vivo dentro di noi, e si continua a rimandare il rientro in attesa di tempi migliori. E chi aspetta resta fuori. È successo a tanti nel 2020.
      </p>
      <p>
        Infine l&rsquo;<strong>eccesso di fiducia</strong>, la convinzione di riuscire a capire quando è il momento giusto per rientrare. Per funzionare, la strategia &ldquo;esco e rientro&rdquo; richiede di indovinare due momenti perfetti, l&rsquo;uscita e il rientro. Il secondo è molto più difficile del primo, perché il mercato non manda inviti: di solito riparte quando le notizie sono ancora pessime e nessuno si sente davvero tranquillo.
      </p>
      <p>
        Nessuno di questi meccanismi è un difetto di carattere. Come ricorda Vanguard nella sua guida pubblica sui principi dell&rsquo;investimento, le reazioni emotive agli alti e bassi del mercato sono naturali e in parte incontrollabili. Possiamo però controllare se agire o meno sulla loro spinta.
      </p>

      <h2>Quanto costa davvero un errore comportamentale</h2>
      <p>
        Il primo dato riguarda i <strong>giorni migliori del mercato</strong>. Vanguard ha calcolato che 100.000 dollari investiti nell&rsquo;S&P 500 dal 1988 al 2024, restando sempre investiti, sarebbero diventati circa 4,9 milioni. Perdendo solo i 10 giorni migliori di quei 37 anni, il risultato si sarebbe fermato a circa 2,3 milioni. Perdendone 20, a circa 1,4 milioni. Perdendone 30, a circa 900.000 dollari. In termini annui si passa dall&rsquo;11,1% all&rsquo;8,9% mancando appena 10 giorni. E Vanguard sottolinea un dettaglio decisivo: <strong>i giorni migliori tendono a concentrarsi vicino ai peggiori</strong>, proprio quando la paura è al massimo e la tentazione di uscire è più forte.
      </p>
      <p>
        Il secondo dato riguarda proprio il <strong>2020</strong>. In una simulazione pubblicata nella sua guida sui principi dell&rsquo;investimento, Vanguard ha confrontato due investitori con un portafoglio bilanciato 60% azioni e 40% obbligazioni. Il primo è rimasto fermo. Il secondo, spaventato, è passato interamente alla liquidità nel punto più basso di marzo 2020 ed è rientrato solo a luglio, quando il mercato si era già ripreso. Nel periodo osservato, chi è rimasto fedele al proprio piano ha ottenuto circa il <strong>+21%</strong>, chi è fuggito nella liquidità circa il <strong>-2%</strong>. Pochi mesi di paura, una differenza enorme.
      </p>
      <p>
        Il terzo dato riguarda milioni di risparmiatori. Morningstar confronta ogni anno il rendimento dei fondi con quello ottenuto davvero da chi li possiede, che dipende da quando si entra e si esce. Nello studio &ldquo;Mind the Gap&rdquo; 2026, nei dieci anni chiusi a fine 2025 fondi ed ETF americani hanno reso in media il 9,9% annuo, gli investitori l&rsquo;8,7%: circa il 12% dei rendimenti lasciato sul tavolo. E il divario cresce negli strumenti più volatili.
      </p>
      <p>
        C&rsquo;è poi un costo che nessuna statistica misura bene, ed è quello che vedo in studio. Tra chi nel 2020 aveva deciso di aspettare, o di uscire per rientrare più tardi, in tanti non sono più rientrati in tempo. Aspettavano una conferma, poi un&rsquo;altra ancora, poi pensavano &ldquo;ormai è salito troppo&rdquo;. Un anno dopo alcuni mi hanno detto, con sincerità, di essersi pentiti di non aver colto quel momento. Non era mancanza di intelligenza: in quel momento avevano paura, e l&rsquo;avevamo tutti. È la dimostrazione più chiara che, sotto pressione, le emozioni pesano più della razionalità.
      </p>
      <p>
        Warren Buffett lo scrisse agli azionisti di Berkshire Hathaway già nella lettera del 1986: cercare di essere timorosi quando gli altri sono avidi, e avidi solo quando gli altri sono timorosi. Un detto ancora più crudo, attribuito al barone Rothschild, dice che il momento di comprare è quando c&rsquo;è sangue nelle strade. Non significa indovinare il punto più basso, cosa impossibile. Significa che <strong>i momenti di massima paura sono spesso quelli in cui fuggire costa di più.</strong>
      </p>

      <h2>La mia posizione: il problema non è la crisi, è arrivarci senza un progetto</h2>
      <p>
        Permettimi un&rsquo;opinione personale. Quando si parla di investimenti, quasi tutta l&rsquo;attenzione va sulla scelta dello strumento: quale fondo, quale ETF, quale mercato. Io credo che esista una domanda molto più importante, che quasi nessuno si fa: <strong>cosa farai quando il tuo investimento perderà il 30%?</strong> Se la risposta non è scritta prima, la scriverà la paura, nel momento peggiore possibile.
      </p>
      <p>
        Il vero lavoro si fa prima della crisi: decidere quale parte del patrimonio può oscillare, a quale obiettivo è legato ogni euro, quanto tempo ha davanti ciascun investimento. Con queste risposte la crisi fa comunque paura, ma non diventa una decisione sbagliata. Senza, anche il portafoglio migliore può essere smontato in una settimana di telegiornali.
      </p>
      <p>
        C&rsquo;è poi un aspetto che a molti sembra strano: anche a un consulente finanziario servirebbe un collega per gestire il proprio patrimonio personale. È la stessa ragione per cui un medico non dovrebbe curarsi da solo. Quando i soldi sono i tuoi, la vicinanza emotiva riduce la lucidità. Una figura terza funziona come il salvavita di un impianto elettrico ben progettato: non impedisce che arrivino gli sbalzi di corrente, ma scatta prima che il danno si propaghi a tutta la casa. Ti riporta al piano, ti ricorda perché hai fatto certe scelte e ti aiuta a distinguere il rumore dai segnali veri.
      </p>
      <p>
        Vanguard ha provato a dare un valore a questo ruolo con la sua ricerca pubblica sul Vanguard Advisor&rsquo;s Alpha®. Secondo le sue stime, un insieme di buone pratiche di consulenza (dalla costruzione di un&rsquo;allocazione adeguata alla gestione dei costi, fino all&rsquo;accompagnamento comportamentale nei momenti difficili) può aggiungere potenzialmente circa 3 punti percentuali di rendimento nel tempo. È la stessa Vanguard, però, a precisare che quel valore non va atteso ogni anno, che è molto irregolare e che dipende dalla situazione di ciascuno. Le occasioni più importanti per crearlo arrivano proprio nei periodi di stress o di euforia, quando si è tentati di abbandonare il proprio piano. Per questo lo considero un ragionamento sul metodo, non una promessa di rendimento: nessuno può garantirti i risultati dei mercati.
      </p>
      <p>
        Voglio essere onesto anche su un altro punto: <strong>il portafoglio giusto non è quello che rende di più sulla carta, ma quello che riesci a mantenere nel momento peggiore.</strong> Con una parte obbligazionaria, Sara avrebbe probabilmente guadagnato meno, ma avrebbe anche sofferto molto meno nelle cadute. Per molti è proprio questa la differenza tra restare investiti e vendere nel panico.
      </p>
      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        Il consulente non elimina l&rsquo;incertezza. Ma può aiutarti a non subirla.
      </p>

      <h2>Sei cose da decidere prima della prossima crisi</h2>
      <p>
        Non posso dirti quando arriverà la prossima crisi, né da dove. Posso però dirti cosa conviene decidere adesso, a mente fredda, perché nel mezzo della tempesta sarà molto più difficile.
      </p>
      <ol>
        <li><strong>Dai un compito a ogni euro.</strong> Separa il denaro per le emergenze e le spese dei prossimi anni da quello che può oscillare. Chi è costretto a vendere in piena crisi per una spesa imprevista non commette un errore comportamentale, ma di struttura. E si previene solo prima.</li>
        <li><strong>Collega ogni investimento a un orizzonte temporale.</strong> Un capitale che ti servirà tra dodici anni non ha motivo di reagire a una crisi di dodici mesi. Se sai perché quel denaro è lì e quando ti servirà, il rumore del breve periodo perde potere.</li>
        <li><strong>Scegli un&rsquo;oscillazione che sai vivere, non solo sopportare sulla carta.</strong> Dichiarare di accettare un calo del 30% è diverso dal vederlo sul proprio conto. Vanguard distingue tra la disponibilità a sopportare il rischio (quanto sei a tuo agio con le oscillazioni) e la capacità di sopportarlo (quanto puoi permetterti di perdere senza compromettere i tuoi progetti). Servono entrambe.</li>
        <li><strong>Scrivi le regole prima.</strong> Decidi in anticipo ogni quanto ribilanciare e cosa fare se il mercato scende del 10, del 20 o del 30%. Una regola scritta a mente fredda è molto più difficile da tradire di una decisione presa sotto l&rsquo;effetto di un telegiornale.</li>
        <li><strong>Riduci il rumore.</strong> Più spesso controlli i tuoi investimenti, più spesso vedrai il segno meno e più occasioni darai alla paura. Scegli con cura anche le fonti: i titoli pensati per i clic raramente aiutano a decidere.</li>
        <li><strong>Prima di decidere sotto pressione, confrontati con una figura terza.</strong> Se ti ritrovi a pensare &ldquo;forse dovrei uscire&rdquo;, non hai bisogno di altre notizie ma di chiarezza. Prenditi del tempo e parlane con qualcuno che conosca i tuoi obiettivi e non sia emotivamente coinvolto dal tuo denaro.</li>
      </ol>

      <h2>Le crisi cambiano nome, le emozioni no</h2>
      <p>
        La prossima crisi arriverà. Non sappiamo quando né che nome avrà, ma porterà le stesse emozioni: la paura, il bisogno di fare qualcosa, la voce che ti dice che questa volta è diversa. <strong>La differenza non la farà la tua capacità di prevederla, ma la solidità di ciò che avrai costruito prima.</strong>
      </p>
      <p>
        Perché nel lungo periodo i mercati hanno dimostrato di saper creare valore, ma nel breve periodo, senza una struttura, le emozioni possono distruggerne una parte importante. Il mio lavoro, e il senso di questo articolo, è aiutarti a non trasformare una paura temporanea in un errore permanente.
      </p>
      <p>
        Nel prossimo articolo allargherò lo sguardo: perché, dopo ogni crisi, i mercati hanno continuato a creare valore.
      </p>
      <p className="font-bold italic text-center text-xl my-8 text-blue-600">
        Prima si disegna il progetto. Poi si scelgono i materiali.
      </p>

      <div className="not-prose text-center my-12 py-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-4">Vuoi arrivare alla prossima crisi con un progetto già scritto?</h3>
        <p className="text-slate-600 mb-8 text-base leading-relaxed max-w-xl mx-auto">
          Prenota una prima consulenza gratuita: faremo insieme una fotografia della tua situazione finanziaria complessiva e capiremo come costruire una strategia coerente con i tuoi obiettivi, da rispettare anche quando i mercati fanno paura.
        </p>
        <a href="https://wa.me/message/IYGM7IR5X6E2J1" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Prenota Appuntamento
        </a>
      </div>

      <h2>Domande frequenti sugli errori comportamentali</h2>
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
        <li>Kahneman D., Tversky A., <em>Prospect Theory: An Analysis of Decision under Risk</em>, Econometrica, vol. 47, n. 2, 1979, pp. 263-291.</li>
        <li>Vanguard, <em>Vanguard&rsquo;s Principles for Investing Success</em>, 2023 (sezione Discipline, simulazione COVID-19 su portafoglio 60/40, marzo-luglio 2020).</li>
        <li>Kinniry F.M. Jr., Jaconetti C.M., <em>Staying the course does not mean &ldquo;set it and forget it&rdquo;</em>, Vanguard Investment Advisory Research Center, 17 aprile 2025 (S&P 500, rendimenti totali di un investimento di 100.000 dollari, 1988-2024).</li>
        <li>Kinniry F.M. Jr. et al., <em>Putting a value on your value: Quantifying Vanguard Advisor&rsquo;s Alpha®</em>, Vanguard research, 2022.</li>
        <li>Morningstar, <em>Mind the Gap 2026: A Report on Investor Returns in the United States</em> (periodo 1° gennaio 2016 - 31 dicembre 2025).</li>
        <li>Berkshire Hathaway, <em>Chairman&rsquo;s Letter to Shareholders 1986</em> (pubblicata a febbraio 1987).</li>
        <li>MSCI, <em>MSCI ACWI Index Factsheet</em>, dati al 31 dicembre 2025 (peso per Paese).</li>
        <li>NYMEX, chiusura del future WTI con consegna maggio 2020 al 20 aprile 2020 (-37,63 dollari al barile).</li>
        <li>Elaborazione tramite Exact di Analysis su dati degli indici S&P 500 e MSCI ACWI, periodo 1° gennaio 2020 - 31 dicembre 2025. I rendimenti passati non sono indicativi di quelli futuri.</li>
      </ul>
    </>
  );
}
