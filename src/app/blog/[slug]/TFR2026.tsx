const faqs = [
  {
    q: "Chi è interessato dal silenzio assenso dal 1° luglio 2026?",
    a: "I lavoratori dipendenti del settore privato assunti per la prima volta dal 1° luglio 2026 in avanti. Sono esclusi i lavoratori domestici, gli organismi pubblici privatizzati, gli enti pubblici economici e i dipendenti della pubblica amministrazione (salvo i casi in cui il rapporto di lavoro sia regolato integralmente dal diritto comune)."
  },
  {
    q: "Cosa succede se non scelgo entro i 60 giorni?",
    a: "Se entro 60 giorni dall'assunzione non comunichi alcuna scelta al tuo datore di lavoro, il TFR maturando, il contributo del datore di lavoro (se previsto dal CCNL) e il contributo minimo a tuo carico vengono versati automaticamente al fondo pensione di categoria previsto dal contratto collettivo. I versamenti iniziano dal mese successivo alla scadenza dei 60 giorni."
  },
  {
    q: "La scelta di destinare il TFR al fondo pensione è reversibile?",
    a: "No. Una volta che il TFR confluisce nel fondo pensione — sia per scelta esplicita sia per silenzio assenso — la decisione è irreversibile: non potrai più riportare il TFR in azienda. Diversamente, se entro i 60 giorni scegli espressamente di mantenere il TFR in azienda, potrai sempre cambiare idea in un momento successivo e aderire a un fondo pensione."
  },
  {
    q: "A quale fondo pensione verrei iscritto automaticamente?",
    a: "Al fondo pensione negoziale previsto dal contratto collettivo nazionale (CCNL) applicato dalla tua azienda. Se nella tua azienda esistono più forme di previdenza complementare di riferimento, l'iscrizione avviene a quella che raccoglie il maggior numero di iscritti tra i lavoratori dell'azienda, salvo diverso accordo aziendale."
  },
  {
    q: "Posso scegliere un fondo pensione diverso da quello di categoria?",
    a: "Sì. Entro i 60 giorni dall'assunzione puoi indicare al datore di lavoro un fondo pensione diverso, liberamente individuato: può essere un fondo pensione aperto o un Piano Individuale Pensionistico (PIP). In quel caso, il TFR confluirà nel fondo da te scelto e non in quello di default."
  },
  {
    q: "Il silenzio assenso riguarda anche chi è già al lavoro da anni?",
    a: "Per i lavoratori che alla data del 1° luglio 2026 risultano già occupati, le regole sono leggermente diverse. Se cambi azienda, il nuovo datore di lavoro è tenuto a verificare se in passato hai già destinato il TFR a un fondo pensione e, in caso negativo, a fornirti un'informativa specifica."
  },
  {
    q: "Quali sono i vantaggi fiscali del fondo pensione?",
    a: "I principali vantaggi fiscali sono due. Primo: i contributi volontari versati al fondo pensione sono deducibili dal reddito imponibile fino a 5.300 euro all'anno. Secondo: la tassazione finale è agevolata. Al momento della prestazione, l'aliquota parte da un massimo del 15% e si riduce fino a un minimo del 9%."
  },
  {
    q: "Posso prelevare i soldi dal fondo pensione prima della pensione?",
    a: "Sì, in casi specifici. La legge prevede tre tipologie di anticipazioni: in qualsiasi momento fino al 75% per spese sanitarie straordinarie; dopo 8 anni fino al 75% per l'acquisto o ristrutturazione prima casa; dopo 8 anni fino al 30% per ulteriori esigenze personali."
  },
  {
    q: "Conviene di più il TFR in azienda o il fondo pensione?",
    a: "Non esiste una risposta universale. Dipende dalla tua età, dal tuo orizzonte temporale, dal tuo profilo di rischio, dalla tua aliquota IRPEF attuale e attesa, dalla qualità del fondo di categoria e dai tuoi obiettivi finanziari complessivi. Una valutazione personalizzata fatta insieme a un consulente resta la strada migliore."
  }
];

export function TFR2026() {
  return (
    <>
      <p className="lead italic text-accent/70 border-l-4 border-blue-400 pl-6">
        <em>Dal 1° luglio 2026 l'adesione alla previdenza complementare diventa la regola, la rinuncia l'eccezione.</em>
      </p>

      <p>A cura di <strong>Dott. Amine Alahiyane, Consulente Finanziario CFP®</strong></p>

      <p>
        Per la prima volta nella storia previdenziale italiana, <em>non scegliere è una scelta.</em>
      </p>
      <p>
        <strong>Dal 1° luglio 2026</strong> — con l'entrata in vigore dell'articolo 1, commi 203-205 della Legge 30 dicembre 2025 n. 199 (Legge di Bilancio 2026) — i lavoratori dipendenti del settore privato che vengono assunti per la prima volta saranno <em>iscritti automaticamente alla previdenza complementare.</em> Se <em>entro 60 giorni </em>dall'assunzione non manifestano espressamente una scelta diversa, il loro TFR confluirà di default nel fondo pensione previsto da CCNL dell'azienda.
      </p>
      <p><em>È un cambio di paradigma culturale.</em></p>
      <p>
        Per decenni, il sistema italiano si è retto su una promessa implicita: <em>ci penserà lo Stato.</em> Quella promessa, oggi, lo dice il legislatore stesso: non basta. E lo dice nel modo più chiaro possibile, <em>ribaltando l'onere della scelta.</em> Non sei più tu che devi attivarti per aderire alla previdenza integrativa. Sei tu che, se vuoi restarne fuori, devi dirlo entro un tempo preciso.
      </p>
      <p>
        In questo articolo voglio aiutarti a capire tre cose: cosa cambia concretamente per te il 1° luglio 2026, perché lo Stato lo sta facendo proprio adesso, e — soprattutto — come trasformare un automatismo normativo in una decisione tua, consapevole, costruita su misura della tua vita.
      </p>

      <h2>Cos'è il silenzio assenso TFR e cosa cambia dal 1° luglio 2026</h2>
      <p>
        Il <strong>silenzio assenso</strong> è il meccanismo per cui l'assenza di una scelta esplicita da parte del lavoratore equivale, ai fini di legge, a una scelta affermativa. Applicato alla previdenza complementare, significa questo: se al momento dell'assunzione non comunichi nulla, il tuo TFR — il trattamento di fine rapporto — viene destinato automaticamente a un fondo pensione di categoria, quello previsto dal contratto collettivo nazionale (CCNL) applicato alla tua azienda.
      </p>
      <p>
        Fino al 30 giugno 2026, le regole erano diverse. Avevi sei mesi di tempo per decidere dove far confluire il tuo TFR e, in assenza di scelta, scattava comunque un meccanismo di adesione tacita, ma con caratteristiche più morbide. Dal 1° luglio 2026, tutto cambia.
      </p>

      <h3>Le tre novità da conoscere</h3>
      <ul>
        <li><strong>Adesione automatica dal primo giorno.</strong> Per i lavoratori alla prima esperienza lavorativa, al momento dell'assunzione si è di fatto già "pre-iscritti" al fondo pensione di categoria. L'iscrizione non richiede più una manifestazione di volontà iniziale.</li>
        <li><strong>Finestra di scelta ridotta a 60 giorni.</strong> I sei mesi di tempo per riflettere diventano due. Entro 60 giorni dall'assunzione puoi decidere di destinare il TFR a un altro fondo pensione (di tua scelta) oppure di mantenerlo in azienda. Trascorsi i 60 giorni senza alcuna comunicazione, il datore di lavoro procede con l'iscrizione al fondo di riferimento e avvia i versamenti dal mese successivo.</li>
        <li><strong>Cosa confluisce nel fondo.</strong> Con l'adesione automatica al fondo finiscono tre cose: il TFR maturando, il contributo a carico del datore di lavoro previsto dal CCNL (quando previsto), e il contributo minimo del lavoratore nella misura stabilita dagli accordi applicabili.</li>
      </ul>

      <p>
        C'è un punto che voglio sottolineare con forza, perché è quello che molte persone non capiscono: se il TFR finisce nel fondo pensione per silenzio assenso, la scelta è <strong>irreversibile</strong>. Non potrai più, in un secondo momento, ripensarci e riportare il TFR in azienda. Il percorso inverso, invece, resta possibile: se entro i 60 giorni scegli di lasciare il TFR in azienda, in qualsiasi momento futuro potrai cambiare idea e destinarlo a un fondo pensione.
      </p>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-8">
        <h3 className="mt-0 text-blue-700">Facciamo chiarezza!</h3>
        <p className="text-sm">
          Il TFR — Trattamento di Fine Rapporto — è una quota della tua retribuzione (circa il 6,91% della retribuzione annua lorda) che il datore di lavoro accantona ogni anno e ti liquida al termine del rapporto di lavoro. Può seguire due strade: restare in azienda oppure essere destinato a una forma di previdenza complementare.
        </p>
        <p className="text-sm">
          <strong>TFR in azienda:</strong> viene rivalutato ogni anno dell'1,5% fisso più il 75% dell'inflazione. Al momento della liquidazione, viene tassato con un'aliquota IRPEF media calcolata sui tuoi ultimi cinque anni di redditi (in genere tra il 23% e il 43%).
        </p>
        <p className="text-sm mb-0">
          <strong>TFR nel fondo pensione:</strong> viene investito sui mercati finanziari secondo la linea di investimento prescelta. Al momento della prestazione, l'aliquota fiscale parte da un massimo del 15% e si riduce dello 0,30% per ogni anno di partecipazione oltre il quindicesimo, fino a un minimo del 9%.
        </p>
      </div>

      <h2>Perché lo Stato sta facendo questo proprio adesso</h2>
      <p>
        La risposta breve è: perché la pensione pubblica, da sola, non basterà più. La risposta lunga è più scomoda, e merita di essere capita fino in fondo.
      </p>
      <p>
        Il sistema previdenziale italiano funziona <strong>a ripartizione</strong>. I contributi che versi oggi non vengono accantonati in un fondo intestato a te, ma usati immediatamente per pagare le pensioni di chi è già in quiescenza. La promessa è implicita: quando sarà il tuo turno, ci saranno altri lavoratori che faranno lo stesso per te.
      </p>

      <h3>I numeri che il legislatore ha letto prima di te</h3>
      <p>
        Nel 1950, ogni donna italiana metteva al mondo in media 2,5 figli. Oggi siamo a 1,2. Nel frattempo l'aspettativa di vita è passata da 65 a quasi 84 anni.
        Le proiezioni stimano che nei prossimi dieci anni l'Italia perderà sei milioni di lavoratori, un esodo verso la pensione che non sarà compensato da nuovi ingressi.
      </p>
      <p>
        Un lavoratore dipendente che andrà in pensione nel 2030 potrà contare su circa il 72% dell'ultimo reddito. Nel 2040 scenderà al 62%. Nel 2070 sarà al 58%.
      </p>

      <h2>Cosa fare entro i tuoi 60 giorni: una checklist concreta</h2>
      <ol>
        <li><strong>Leggi l'informativa</strong> che il datore di lavoro è obbligato a consegnarti all'assunzione.</li>
        <li><strong>Capisci qual è il fondo di default</strong> a cui saresti iscritto. Cerca informazioni su rendimenti storici e costi.</li>
        <li><strong>Valuta alternative.</strong> Oltre ai fondi negoziali esistono i fondi aperti e i Piani Individuali Pensionistici (PIP).</li>
        <li><strong>Considera investimenti alternativi.</strong> Puoi costruire la tua pensione anche attraverso investimenti liberi, perdendo i vantaggi fiscali ma guadagnando flessibilità totale.</li>
        <li><strong>Se vuoi, chiedi aiuto a un professionista.</strong> L'Italia è indietro nell'alfabetizzazione finanziaria. Affidarti a un consulente qualificato che ti aiuti a capire non è una spesa, ma un investimento.</li>
      </ol>

      <h2>Il messaggio dietro la riforma</h2>
      <p>
        Il legislatore sta dicendo a chi entra oggi nel mondo del lavoro: <strong>comincia subito</strong>. Non aspettare i tuoi 40 anni per accorgerti che la pensione pubblica non sarà sufficiente. Comincia dal primo stipendio, di default, anche se non hai ancora studiato la materia.
      </p>

      <hr className="my-12" />
      
      <div className="not-prose bg-accent text-white p-6 sm:p-10 rounded-3xl mt-12 text-center">
        <h3 className="text-white mt-0 mb-4 text-2xl sm:text-3xl font-bold">Il libro è in uscita</h3>
        <p className="text-blue-100 mb-8 text-sm sm:text-base leading-relaxed">
          Approfondisco la pensione, la previdenza integrativa, gli investimenti per il lungo periodo e molto altro nel mio libro che sta per uscire. È il distillato di anni di lavoro con persone reali e dati ufficiali.
        </p>
        <a href="/libroanteprima" className="inline-block bg-white text-accent font-bold px-6 py-3.5 sm:px-8 sm:py-3.5 rounded-full hover:bg-blue-50 transition-colors w-full sm:w-auto">
          Iscriviti alla lista d'attesa
        </a>
      </div>

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

      <h2>Fonti e riferimenti normativi</h2>
      <ul>
        <li>Legge 30 dicembre 2025 n. 199 (Legge di Bilancio 2026), articolo 1, commi 203-205.</li>
        <li>D.Lgs. 5 dicembre 2005 n. 252 (disciplina delle forme pensionistiche complementari), articolo 8.</li>
        <li>Ministero dell'Economia e delle Finanze, Ragioneria Generale dello Stato, rapporto 2025 n. 26.</li>
        <li>INAPP — proiezioni demografiche e occupazionali 2024-2034.</li>
        <li>COVIP — relazione annuale 2024 e dati sulla partecipazione alla previdenza complementare.</li>
        <li>OCSE/PISA 2023, indagine sull'alfabetizzazione finanziaria.</li>
      </ul>
    </>
  );
}
