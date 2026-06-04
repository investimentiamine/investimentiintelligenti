import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informativa privacy del modulo | Investimenti Intelligenti",
  description:
    "Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR) per chi compila il modulo di iscrizione.",
};

const FINALITA = [
  {
    finalita:
      "Invio della newsletter e di comunicazioni informative ed educative sui temi della pianificazione finanziaria.",
    base: "Consenso dell’interessato – art. 6, par. 1, lett. a) GDPR.",
  },
  {
    finalita:
      "Invio di comunicazioni commerciali e promozionali relative ai servizi di consulenza e ai contenuti del Titolare (marketing diretto, anche via email).",
    base: "Consenso dell’interessato – art. 6, par. 1, lett. a) GDPR.",
  },
  {
    finalita:
      "Ricontatto telefonico o via email per organizzare un primo appuntamento conoscitivo gratuito.",
    base: "Consenso dell’interessato – art. 6, par. 1, lett. a) GDPR.",
  },
  {
    finalita: "Adempimento di obblighi di legge e gestione di eventuali contenziosi.",
    base: "Obbligo legale e legittimo interesse – art. 6, par. 1, lett. c) ed f) GDPR.",
  },
];

export default function InformativaPrivacyFormPage() {
  return (
    <div className="min-h-screen bg-surface py-32 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl prose prose-blue max-w-none">
        <h1 className="text-3xl md:text-5xl font-bold text-accent mb-4">
          Informativa sul trattamento dei dati personali
        </h1>
        <p className="text-sm text-accent/60 mb-12">
          Ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR) &middot; Ultimo
          aggiornamento: 03/05/2026
        </p>

        <p>
          La presente informativa descrive le modalità con cui vengono raccolti e trattati i dati
          personali degli utenti che compilano il modulo di iscrizione presente su questo sito, al
          fine di ricevere comunicazioni informative e commerciali (newsletter e marketing) e di
          essere ricontattati per fissare un appuntamento conoscitivo.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">
          1. Titolare del trattamento
        </h2>
        <p>
          Il Titolare del trattamento dei dati è Amine Alahiyane, Consulente Finanziario abilitato
          all’offerta fuori sede iscritto all’albo OCF con delibera N. 1873 del 24/03/2022, con sede
          legale in Strada Vecchia di San Giovanni 129, 10062 Luserna San Giovanni (TO), Partita IVA
          12679780010.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>
            Email:{" "}
            <a href="mailto:dott.amine@investimentiamine.it">dott.amine@investimentiamine.it</a>
          </li>
          <li>Telefono: +39 351 897 1482</li>
          <li>
            Sito web:{" "}
            <a href="https://www.investimentiintelligenti.com" target="_blank" rel="noopener noreferrer">
              www.investimentiintelligenti.com
            </a>
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">
          2. Quali dati raccogliamo
        </h2>
        <p>
          Attraverso il modulo di iscrizione raccogliamo esclusivamente i dati che l’utente fornisce
          volontariamente, in particolare:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>nome e cognome;</li>
          <li>indirizzo email;</li>
          <li>numero di telefono (se fornito, per l’eventuale ricontatto);</li>
          <li>
            eventuali ulteriori informazioni che l’utente decide di comunicare nel campo note o
            messaggio.
          </li>
        </ul>
        <p>
          Possono inoltre essere raccolti dati di navigazione e tecnici (es. indirizzo IP, orario di
          invio, dispositivo) per finalità di sicurezza e corretto funzionamento del servizio.
        </p>
        <p>
          Non vengono richiesti né trattati consapevolmente dati appartenenti a categorie particolari
          (art. 9 GDPR). Si invita pertanto l’utente a non inserire nel modulo dati sensibili.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">
          3. Finalità e base giuridica del trattamento
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left font-bold text-accent border border-gray-200 p-3">
                  Finalità
                </th>
                <th className="text-left font-bold text-accent border border-gray-200 p-3">
                  Base giuridica
                </th>
              </tr>
            </thead>
            <tbody>
              {FINALITA.map((row) => (
                <tr key={row.finalita} className="align-top">
                  <td className="border border-gray-200 p-3 text-accent/80">{row.finalita}</td>
                  <td className="border border-gray-200 p-3 text-accent/80">{row.base}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Il conferimento dei dati è facoltativo. Tuttavia, il mancato conferimento dei dati
          contrassegnati come obbligatori nel modulo impedisce l’erogazione del servizio richiesto
          (es. l’invio della newsletter o il ricontatto). Ciascun consenso è facoltativo, distinto e
          revocabile in qualsiasi momento.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">4. Modalità del trattamento</h2>
        <p>
          I dati sono trattati con strumenti elettronici e telematici, con logiche strettamente
          correlate alle finalità indicate e adottando misure tecniche e organizzative adeguate a
          garantirne la sicurezza, la riservatezza e l’integrità, prevenendo accessi non autorizzati,
          perdite o usi illeciti.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">
          5. Destinatari e responsabili del trattamento
        </h2>
        <p>
          I dati potranno essere trattati da soggetti terzi che agiscono come Responsabili del
          trattamento (art. 28 GDPR), debitamente nominati, tra cui:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            il fornitore della piattaforma di email marketing utilizzata per l’invio della newsletter
            (MailerLite – MailerLite Limited);
          </li>
          <li>il fornitore di hosting e gestione del sito web.</li>
        </ul>
        <p>
          I dati non sono oggetto di diffusione e non vengono ceduti a terzi per loro autonome
          finalità di marketing.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">
          6. Trasferimento dei dati extra UE
        </h2>
        <p>
          Alcuni fornitori di servizi (es. la piattaforma di email marketing) potrebbero trattare i
          dati al di fuori dello Spazio Economico Europeo. In tali casi il trasferimento avviene nel
          rispetto degli artt. 44 e seguenti del GDPR, sulla base di decisioni di adeguatezza della
          Commissione Europea oppure mediante l’adozione di Clausole Contrattuali Standard o altre
          garanzie adeguate.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">
          7. Periodo di conservazione
        </h2>
        <p>
          I dati raccolti per finalità di newsletter e marketing sono conservati fino alla revoca del
          consenso da parte dell’interessato e, in ogni caso, verificati periodicamente per accertarne
          l’effettivo interesse, indicativamente entro 24 mesi dall’ultima interazione. I dati
          raccolti per il ricontatto sono conservati per il tempo necessario a dare seguito alla
          richiesta. I dati conservati per obblighi di legge sono trattati per i termini previsti
          dalla normativa applicabile.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">
          8. Diritti dell’interessato
        </h2>
        <p>
          In qualsiasi momento l’interessato può esercitare i diritti previsti dagli artt. 15–22 del
          GDPR, tra cui:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>diritto di accesso ai propri dati;</li>
          <li>diritto di rettifica dei dati inesatti o incompleti;</li>
          <li>diritto alla cancellazione (&laquo;diritto all’oblio&raquo;);</li>
          <li>diritto di limitazione del trattamento;</li>
          <li>diritto alla portabilità dei dati;</li>
          <li>diritto di opposizione al trattamento per finalità di marketing;</li>
          <li>
            diritto di revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del
            trattamento basata sul consenso prestato prima della revoca.
          </li>
        </ul>
        <p>
          La revoca del consenso alla newsletter può essere esercitata anche tramite l’apposito link
          di disiscrizione presente in fondo a ogni email. Per ogni altra richiesta è possibile
          scrivere a{" "}
          <a href="mailto:dott.amine@investimentiamine.it">dott.amine@investimentiamine.it</a>.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">
          9. Reclamo all’Autorità di controllo
        </h2>
        <p>
          Fatta salva ogni altra azione in sede amministrativa o giudiziale, l’interessato che ritenga
          che il trattamento dei propri dati avvenga in violazione del GDPR ha diritto di proporre
          reclamo al Garante per la protezione dei dati personali (
          <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
            www.garanteprivacy.it
          </a>
          ).
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">
          10. Modifiche all’informativa
        </h2>
        <p>
          Il Titolare si riserva il diritto di modificare o aggiornare la presente informativa, anche
          in conseguenza di variazioni normative. Le modifiche saranno pubblicate su questa pagina con
          indicazione della data di aggiornamento.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">Contatti</h2>
        <p>
          Amine Alahiyane &middot; Consulente Finanziario abilitato all’offerta fuori sede iscritto
          all’albo OCF con delibera N. 1873 del 24/03/2022
          <br />
          Strada Vecchia di San Giovanni 129, 10062 Luserna San Giovanni (TO)
          <br />
          Email:{" "}
          <a href="mailto:dott.amine@investimentiamine.it">dott.amine@investimentiamine.it</a> &middot;
          Tel: +39 351 897 1482
        </p>
      </div>
    </div>
  );
}
