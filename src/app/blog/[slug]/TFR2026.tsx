const faqs = [
  {
    q: "Chi è interessato dal silenzio assenso dal 1° luglio 2026?",
    a: "I lavoratori dipendenti del settore privato assunti per la prima volta dal 1° luglio 2026 in avanti."
  },
  {
    q: "Cosa succede se non scelgo entro i 60 giorni?",
    a: "Se entro 60 giorni dall'assunzione non comunichi alcuna scelta al tuo datore di lavoro, il TFR che maturerai verrà versato al fondo pensione previsto dal CCNL dell'azienda, insieme ad un tuo contributo che ti verrà prelevato dalla busta paga e ad un contributo aggiuntivo del datore di lavoro."
  },
  {
    q: "La scelta di destinare il TFR al fondo pensione è reversibile?",
    a: "No. Una volta che il TFR confluisce nel fondo pensione — sia per scelta esplicita sia per silenzio assenso — la decisione è irreversibile: non potrai più riportare il TFR in azienda. Diversamente, se entro i 60 giorni scegli espressamente di mantenere il TFR in azienda, potrai sempre cambiare idea in un momento successivo e aderire a un fondo pensione."
  },
  {
    q: "A quale fondo pensione verrei iscritto automaticamente?",
    a: "Al fondo pensione negoziale previsto dal contratto collettivo nazionale (CCNL) applicato dalla tua azienda."
  },
  {
    q: "Posso scegliere un fondo pensione diverso da quello di categoria?",
    a: "Sì. Entro i 60 giorni dall'assunzione puoi indicare al datore di lavoro un fondo pensione diverso, liberamente individuato. In questo caso il TFR confluirà nel fondo pensione da te scelto e non in quello di default."
  },
  {
    q: "Il silenzio assenso riguarda anche chi è già al lavoro da anni?",
    a: "No, riguarda chi inizia a lavorare o cambia datore di lavoro dal 1° luglio 2026."
  },
  {
    q: "Quali sono i vantaggi fiscali del fondo pensione?",
    a: "I principali vantaggi fiscali sono due. Primo: i contributi volontari versati al fondo pensione sono deducibili dal reddito imponibile fino a 5.300 euro all'anno (la Legge di Bilancio 2026 ha innalzato il precedente limite di 5.164,57 euro). Significa che, se versi 2.000 euro all'anno nel fondo, le tasse vengono calcolate sul tuo reddito al netto di quei 2.000 euro. Secondo: la tassazione finale è agevolata. Al momento della riscatto del fondo pensione, l'aliquota parte da un massimo del 15% e si riduce dello 0,30% per ogni anno di partecipazione oltre il quindicesimo, fino a un minimo del 9%. Per confronto, il TFR liquidato dall'azienda viene tassato con la media delle aliquote IRPEF degli ultimi cinque anni (in genere tra il 23% e il 43%)."
  },
  {
    q: "Posso prelevare i soldi dal fondo pensione prima della pensione?",
    a: "Sì, in casi specifici. La legge prevede tre tipologie di anticipazioni: in qualsiasi momento, fino al 75% del capitale accumulato, per spese sanitarie straordinarie tue, dei figli o del coniuge; dopo 8 anni di partecipazione al fondo, fino al 75%, per l'acquisto o la ristrutturazione della prima casa (tua o dei figli); dopo 8 anni di partecipazione, fino al 30%, per ulteriori esigenze personali, senza necessità di motivazione."
  },
  {
    q: "Conviene di più il TFR in azienda o il fondo pensione?",
    a: "Non esiste una risposta universale. Dipende dalla tua età, dal tuo orizzonte temporale, dal tuo profilo di rischio, dalla tua aliquota IRPEF attuale e attesa, dalla qualità del fondo pensione a cui saresti iscritto e dai tuoi obiettivi finanziari complessivi. In linea generale, più sei giovane e più hai davanti tempo per sfruttare l'interesse composto e i vantaggi fiscali del fondo pensione, più la previdenza complementare tende a essere vantaggiosa. È consigliato fare una valutazione personalizzata insieme ad un consulente finanziario."
  }
];

export function TFR2026() {
  return (
    <>
      <p className="lead italic text-accent/70 border-l-4 border-blue-400 pl-6">
        <strong>Dal 1° luglio 2026 l'adesione alla previdenza complementare diventa la regola, la rinuncia l'eccezione</strong>
      </p>
      <p className="italic text-accent/70">
        Cosa significa per i lavoratori dipendenti del settore privato, perché lo Stato lo sta facendo davvero e come trasformare un automatismo normativo in una scelta consapevole.
      </p>

      <p className="text-sm text-gray-500 italic">
        A cura di <strong>Dott. Amine Alahiyane, Consulente Finanziario CFP®</strong>
      </p>

      <p>
        Per la prima volta nella storia previdenziale italiana, <strong>non scegliere è una scelta</strong>
      </p>
      <p>
        <strong>Dal 1° luglio 2026</strong> — con l'entrata in vigore <em>dell'articolo 1, commi 203-205 della Legge 30 dicembre 2025 n. 199 (Legge di Bilancio 2026)</em> — i lavoratori dipendenti del settore privato che vengono assunti per la prima volta saranno <strong>iscritti automaticamente alla previdenza complementare</strong>. Se <strong>entro 60 giorni</strong> dall'assunzione non manifestano espressamente una scelta diversa, il loro TFR confluirà di default nel fondo pensione previsto dal contratto collettivo applicato in azienda.
      </p>
      <p>
        <strong>È un cambio di paradigma culturale.</strong>
      </p>
      <p>
        Per decenni, il sistema italiano si è retto su una promessa implicita: <strong><em>ci penserà lo Stato</em>.</strong> Quella promessa, oggi, lo dice il legislatore stesso: non basta. E lo dice nel modo più chiaro possibile, <strong>ribaltando l'onere della scelta.</strong> Non sei più tu che devi attivarti per aderire alla previdenza integrativa. Sei tu che, se vuoi restarne fuori, devi dirlo entro un tempo preciso.
      </p>
      <p>
        In questo articolo voglio aiutarti a capire tre cose: cosa cambia concretamente per te il 1° luglio 2026, perché lo Stato lo sta facendo proprio adesso, e — soprattutto — come trasformare un automatismo normativo in una decisione tua, consapevole, costruita su misura per te.
      </p>

      <h2>Cos'è il silenzio assenso TFR e cosa cambia dal 1° luglio 2026</h2>
      <p>
        Il <strong>silenzio assenso</strong> è il meccanismo per cui l'assenza di una scelta esplicita da parte del lavoratore equivale, ai fini di legge, a una scelta affermativa. Applicato alla previdenza complementare, significa questo: se al momento dell'assunzione non comunichi nulla, il tuo TFR — il trattamento di fine rapporto — viene destinato automaticamente a un fondo pensione di categoria, quello previsto dal contratto collettivo nazionale (CCNL) applicato alla tua azienda.
      </p>
      <p>
        <strong>Fino al 30 giugno 2026, le regole erano diverse. Avevi sei mesi di tempo per decidere dove far confluire il tuo TFR e, in assenza di scelta, il TFR rimaneva in azienda.</strong> Dal 1° luglio 2026, tutto cambia.
      </p>

      <h3>Le tre novità da conoscere</h3>
      <ul>
        <li><strong>Adesione automatica dal primo giorno.</strong> Per i lavoratori alla prima esperienza lavorativa, al momento dell'assunzione si è di fatto già <strong>'pre-iscritti'</strong> al fondo pensione di categoria. L'iscrizione non richiede più una manifestazione di volontà iniziale.</li>
        <li><strong>Finestra di scelta ridotta a 60 giorni.</strong> I sei mesi di tempo per riflettere diventano due. Entro 60 giorni dall'assunzione puoi decidere di destinare il TFR a un altro fondo pensione (di tua scelta) oppure di mantenerlo in azienda. Trascorsi i 60 giorni senza alcuna comunicazione, il datore di lavoro procede con l'iscrizione al fondo di riferimento e avvia i versamenti dal mese successivo.</li>
        <li><strong>Cosa confluisce nel fondo.</strong> Con l'adesione automatica al fondo finiscono tre cose: il <strong>TFR maturando, il contributo a carico del datore di lavoro</strong> previsto dal CCNL (quando previsto), e <strong>il contributo minimo del lavoratore</strong> nella misura stabilita dagli accordi applicabili.</li>
      </ul>

      <p>
        C'è un punto che voglio sottolineare con forza, perché è quello che molte persone non capiscono: se il TFR finisce nel fondo pensione per silenzio assenso, <strong>la scelta è irreversibile</strong>.
      </p>
      <p>
        Non potrai più, in un secondo momento, ripensarci e riportare il TFR in azienda. Il percorso inverso, invece, resta possibile: se entro i 60 giorni scegli di lasciare il TFR in azienda, in qualsiasi momento futuro potrai cambiare idea e destinarlo a un fondo pensione.
      </p>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-8">
        <h3 className="mt-0 text-blue-700">Facciamo chiarezza!</h3>
        <p className="text-sm">
          Il <strong>TFR</strong> — Trattamento di Fine Rapporto — è una quota della tua retribuzione (circa il 6,91% della retribuzione annua lorda) che il datore di lavoro accantona ogni anno e ti liquida al termine del rapporto di lavoro. Può seguire due strade: restare in azienda oppure essere destinato a una forma di previdenza complementare.
        </p>
        <p className="text-sm">
          La differenza non è solo amministrativa. È fiscale, finanziaria e di prospettiva.
        </p>
        <p className="text-sm">
          <strong>TFR in azienda:</strong> viene <strong>rivalutato ogni anno dell'1,5% fisso più il 75% dell'inflazione</strong>. Al momento della liquidazione, viene tassato con un'aliquota IRPEF media calcolata sui tuoi ultimi cinque anni di redditi (in genere tra il 23% e il 43%).
        </p>
        <p className="text-sm mb-0">
          <strong>TFR nel fondo pensione:</strong> viene investito sui mercati finanziari secondo la linea di investimento prescelta. Al momento della prestazione, l'aliquota fiscale parte da un massimo del 15% e si riduce dello 0,30% per ogni anno di partecipazione oltre il quindicesimo, fino a un minimo del 9%.
        </p>
      </div>

      <h2>Perché lo Stato sta facendo questo proprio adesso</h2>
      <p>
        La risposta breve è: <strong>perché la pensione pubblica, da sola, non basterà più.</strong> La risposta lunga è più scomoda, e merita di essere capita fino in fondo.
      </p>
      <p>
        Il sistema previdenziale italiano funziona <strong>a ripartizione</strong>. Tradotto: <strong>i contributi che versi</strong> oggi non vengono accantonati in un fondo intestato a te, da cui un domani attingerai. <strong>Vengono usati immediatamente per pagare le pensioni di chi ha smesso di lavorare</strong>. La <strong>promessa è implicita</strong> ma chiara: quando sarà il tuo turno, ci saranno altri lavoratori che faranno lo stesso per te.
      </p>
      <p>
        Finché ci sono molti lavoratori e pochi pensionati, il meccanismo regge. Quando il rapporto si inverte, comincia a scricchiolare.
      </p>

      <h3>I numeri che il legislatore ha letto prima di te</h3>
      <p>
        <strong>Nel 1950,</strong> ogni donna italiana metteva al mondo in <strong>media 2,5 figli.</strong> <strong>Oggi siamo a 1,2 figli per donna</strong>, e il dato è stabile su questi livelli da oltre vent'anni. Nel frattempo <strong>l'aspettativa di vita</strong> è passata <strong>da 65 a quasi 84 anni.</strong>
      </p>
      <p>
        Le proiezioni dell'INAPP (Istituto Nazionale per l'Analisi delle Politiche Pubbliche) stimano che nei <strong>prossimi dieci anni l'Italia perderà sei milioni di lavoratori</strong>, un esodo verso la pensione che non sarà compensato da nuovi ingressi nel mondo del lavoro. Il <strong>rapporto MEF 2025</strong> <strong><em>"Le tendenze di medio-lungo periodo del sistema pensionistico e socio-sanitario"</em></strong> fotografa con chiarezza l'esito: <strong>i tassi di sostituzione lordi</strong> — cioè la percentuale dell'ultimo stipendio lordo che riceverai come pensione — sono <strong>destinati a scendere drasticamente.</strong>
      </p>
      <p>
        Un lavoratore <strong>dipendente</strong> che andrà in pensione nel <strong>2030</strong> potrà contare su circa il <strong>72% dell'ultimo reddito</strong>. Nel <strong>2040</strong> scenderà al <strong>62%.</strong> Nel <strong>2070</strong> sarà al <strong>58%.</strong> Per i <strong>lavoratori autonomi</strong>, la prospettiva è ancora più dura: <strong>si passerà dal 50% del 2030 a meno del 47%</strong> nei decenni successivi.
      </p>
      <p>
        Tradotto in parole semplici: chi oggi ha 30 o 40 anni rischia di vivere con una pensione pari a poco più della metà del proprio ultimo stipendio. La differenza tra ciò che guadagni ora e ciò che riceverai poi è il cosiddetto gap previdenziale. Ed è enorme.
      </p>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-8">
        <h3 className="mt-0 text-blue-700">Facciamo chiarezza!</h3>
        <p className="text-sm">
          <strong>Il tasso di sostituzione</strong> è la percentuale che indica quanto del tuo ultimo stipendio otterrai una volta in pensione. Più il tasso è basso, più sarà la perdita di potere d'acquisto nel passaggio dalla vita lavorativa a quella da pensionato.
        </p>
        <p className="text-sm mb-0">
          <strong>Il gap previdenziale</strong> è invece la differenza tra il tuo ultimo stipendio e la pensione che effettivamente riceverai. È lo spazio che, se vuoi mantenere il tuo tenore di vita, dovrai colmare con altre risorse: previdenza integrativa, investimenti, patrimonio.
        </p>
      </div>

      <p>
        È questo il contesto che spiega la riforma. Il legislatore sa benissimo che <strong>una pensione pubblica al 58% dell'ultimo stipendio non basta</strong> a garantire il tenore di vita a cui le persone sono abituate. E sa anche un'altra cosa: che, lasciati liberi di scegliere, i lavoratori italiani tendono a rimandare. Nel 2024 la partecipazione ai fondi pensione privati era ferma al 38,3% della forza lavoro. Due lavoratori su tre, in un Paese dove la pensione pubblica del futuro coprirà appena metà dello stipendio, non hanno alcuna copertura integrativa attiva.
      </p>
      <p>
        Il silenzio assenso, in questo quadro, è la risposta più diretta possibile: se le persone non scelgono attivamente di proteggersi, le proteggiamo noi per default. Non è cattiveria. Non è imposizione. È, in linguaggio tecnico, un nudge — una spinta gentile che sfrutta proprio quella tendenza all'inerzia che è la principale nemica della pianificazione previdenziale.
      </p>

      <hr className="my-12" />

      <div className="not-prose bg-accent text-white p-6 sm:p-10 rounded-3xl mt-12 text-center">
        <h3 className="text-white mt-0 mb-4 text-2xl sm:text-3xl font-bold">Il mio libro è in uscita</h3>
        <p className="text-blue-100 mb-8 text-sm sm:text-base leading-relaxed">
          Approfondisco la pensione, la previdenza integrativa, gli investimenti e molto altro nel mio libro che sta per uscire. È il distillato di anni di lavoro con persone reali, dati ufficiali e una convinzione di fondo: la confusione finanziaria non è un destino, è un problema risolvibile.
        </p>
        <a href="/libroanteprima" className="inline-block bg-white text-accent font-bold px-6 py-3.5 sm:px-8 sm:py-3.5 rounded-full hover:bg-blue-50 transition-colors w-full sm:w-auto">
          Iscriviti alla lista d'attesa
        </a>
      </div>

      <h2>Il messaggio dietro la riforma</h2>
      <p>
        C'è un sottotesto, in questa norma, che merita di essere nominato chiaramente.
      </p>
      <p>
        Il legislatore sta dicendo a chi entra oggi nel mondo del lavoro: <strong>comincia subito</strong>. Non aspettare i tuoi 40 anni per accorgerti che la pensione pubblica non sarà sufficiente. Comincia dal primo stipendio, di default, anche se non hai ancora studiato la materia.
      </p>
      <p>
        È un riconoscimento, da parte dello Stato, di una verità finanziaria semplice: in previdenza il tempo non è un dettaglio. È la variabile. Iniziare a 25 anni con piccole somme batte iniziare a 40 con somme molto più grandi — non per magia, ma per matematica dell'interesse composto.
      </p>
      <p>
        Il silenzio assenso, letto con questa lente, non è una stretta. È una porta che lo Stato apre per te quando sei ancora in tempo perché serva davvero
      </p>

      <h2>Cosa fare entro i tuoi 60 giorni: una checklist concreta</h2>
      <p>
        Se vieni assunto per la prima volta nel settore privato dal 1° luglio 2026 in avanti, hai esattamente 60 giorni dalla data di assunzione per agire. Ti propongo una breve mappa per non arrivare alla scadenza senza aver capito.
      </p>

      <h3>1. Leggi l'informativa che il datore di lavoro è obbligato a consegnarti</h3>
      <p>
        Al momento dell'assunzione, l'azienda è obbligata per legge a fornirti <strong>un'informativa chiara</strong> e completa
      </p>

      <h3>2. Capisci qual è il fondo di default a cui saresti iscritto</h3>
      <p>
        Cerca sul sito del fondo (e su quello della COVIP, la Commissione di Vigilanza sui Fondi Pensione) le informazioni essenziali: rendimenti storici dei diversi comparti, livello dei costi, modalità di gestione. Non serve diventare esperti, serve farsi un'idea.
      </p>

      <h3>3. Valuta se quel fondo è il migliore per te</h3>
      <p>
        Oltre ai fondi pensione di categoria (negoziali) esistono i fondi pensione aperti e i Piani Individuali Pensionistici (PIP). Hanno strutture diverse, costi diversi, gradi di personalizzazione diversi.
      </p>

      <h2>In sintesi: cosa portare a casa</h2>
      <p>
        Il 1° luglio 2026 segna l'inizio di una nuova era della previdenza complementare italiana. Non è una rivoluzione fiscale. Non è una stretta. È un cambio di paradigma culturale: lo Stato, nei fatti, ammette che la pensione pubblica del futuro non basterà, e ribalta l'onere della scelta sui lavoratori. Chi non sceglie, viene iscritto comunque.
      </p>
      <p>
        Per la maggior parte delle persone — soprattutto chi è giovane, ha davanti decenni di lavoro e poca dimestichezza con la materia previdenziale — <strong>questo automatismo è una buona notizia</strong>. Costruisce una protezione che, da soli, in molti non avrebbero mai costruito.
      </p>
      <p>
        Ma il silenzio assenso non sostituisce la consapevolezza. Capire dove sta andando il tuo TFR, in quale fondo, con quale linea di investimento, con quali costi, con quali alternative possibili: questo resta un lavoro che vale la pena fare.
      </p>
      <p>
        <strong>Perché un futuro previdenziale solido non si costruisce per default. Si progetta.</strong>
      </p>
      <p>
        <strong>Ragiona come un architetto, prima si disegna il progetto. Poi si scelgono i materiali.</strong>
      </p>

      <h2>Domande frequenti sul silenzio assenso TFR 2026</h2>
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

      <p className="text-sm italic underline text-gray-500 mt-8">
        Aggiornato al 17/6/2026 – Si resta in attesa dei decreti attuativi che chiariscano aspetti pratici più dettagliati
      </p>

      <h2>Fonti e riferimenti normativi</h2>
      <ul>
        <li>Legge 30 dicembre 2025 n. 199 (Legge di Bilancio 2026), articolo 1, commi 203-205.</li>
        <li>D.Lgs. 5 dicembre 2005 n. 252 (disciplina delle forme pensionistiche complementari), articolo 8.</li>
        <li>Ministero dell'Economia e delle Finanze, Ragioneria Generale dello Stato, rapporto 2025 n. 26 — "Le tendenze di medio-lungo periodo del sistema pensionistico e socio-sanitario".</li>
        <li>INAPP — Istituto Nazionale per l'Analisi delle Politiche Pubbliche, proiezioni demografiche e occupazionali 2024-2034.</li>
        <li>COVIP — Commissione di Vigilanza sui Fondi Pensione, relazione annuale 2024 e dati sulla partecipazione alla previdenza complementare.</li>
        <li>OCSE/PISA 2023, indagine sull'alfabetizzazione finanziaria nei Paesi membri.</li>
      </ul>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="font-bold text-lg mb-1">Dott. Amine Alahiyane</p>
        <p className="italic text-gray-500 mb-1">Consulente Finanziario CFP®</p>
        <p className="italic text-gray-400 text-sm mb-0">Consulente Finanziario abilitato all'offerta fuori sede</p>
      </div>
    </>
  );
}
