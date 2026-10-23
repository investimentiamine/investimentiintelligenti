# Investimenti Intelligenti - Amine Alahiyane

Sito web personale e professionale per **Amine Alahiyane**, Consulente Finanziario CFP®. Il sito è progettato con un'estetica moderna, animazioni fluide e una forte impronta istituzionale, mantenendo al tempo stesso un approccio umano e accessibile.

## 🚀 Tecnologie Utilizzate

Il progetto è costruito sfruttando le tecnologie più moderne per garantire il massimo delle prestazioni, della sicurezza e dell'indicizzazione (SEO):

- **[Next.js 14+](https://nextjs.org/)** (App Router) - Framework React per rendering lato server e generazione di siti statici ad altissime prestazioni.
- **[React](https://react.dev/)** - Libreria JavaScript per la costruzione di interfacce utente interattive.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first per un design altamente reattivo, personalizzato e moderno.
- **[TypeScript](https://www.typescriptlang.org/)** - Tipizzazione statica per garantire un codice solido e prevenire bug.
- **[Lucide React](https://lucide.dev/)** - Set di icone pulite e moderne.

## 🌟 Funzionalità e Pagine Principali

- **Home Page**: Un impatto visivo (Hero Section) moderno con divisori a forma di onda, sezioni dedicate alla proposta di valore, servizi in evidenza e testimonianze.
- **Chi Sono**: Racconta la storia, la missione e il percorso accademico/professionale del consulente con una timeline interattiva ed elegante e mappa Google integrata per l'ufficio.
- **Educazione Finanziaria**: Layout premium dedicato ad ospitare futuri video YouTube e contenuti formativi.
- **Domande Frequenti**: Sistema ad *Accordion* (a tendina) modernissimo per esplorare le risposte ai dubbi più comuni.
- **Blog**: Una griglia di "Card" reattive e dal design premium per ospitare gli articoli e gli insight del consulente.
- **Servizi**: Modulare e scalabile per presentare pacchetti e approcci al portafoglio.
- **Integrazione WhatsApp**: Tutti i pulsanti di conversione (Call To Action) "Prenota Appuntamento" sono collegati direttamente al numero WhatsApp del consulente, massimizzando il tasso di interazione.

## 🛠️ Design System e UI/UX

- **Glassmorphism**: Il menu di navigazione utilizza effetti sfocati (blur) e trasparenze che si adattano allo scorrimento (Scroll Event) e riconoscono se la pagina ha un'intestazione chiara o scura, garantendo un'eccezionale armonia cromatica.
- **Responsive**: Perfettamente scalabile e leggibile su ogni dispositivo, dagli smartphone (dove le lunghezze di testo sono finemente calcolate) ai grandi schermi 4K.
- **Tipografia**: Utilizzo combinato di *Fraunces* (per i titoli, per conferire autorità ed eleganza) e *Manrope* (per i testi, per la massima pulizia e leggibilità).

## 💻 Installazione e Comandi

1. **Clona o scarica il repository**
2. **Installa le dipendenze:**
   ```bash
   npm install
   ```
3. **Avvia il server di sviluppo (Sviluppo locale):**
   ```bash
   npm run dev
   ```
   Il sito sarà visibile su `http://localhost:3000`.

4. **Compila il progetto per la produzione (Test o Deploy):**
   ```bash
   npm run build
   ```

## 🍪 Consenso cookie e tracciamento (Cookiebot + Google Consent Mode v2)

Il sito usa **Cookiebot** come Consent Management Platform. Il Domain Group ID è
già configurato di default nel codice (`src/app/layout.tsx`), quindi il banner è
attivo dopo il deploy senza ulteriori passaggi. Microsoft Clarity parte **solo**
dopo il consenso alla categoria *statistiche*.

### 1. Variabile d'ambiente (opzionale)

L'ID Cookiebot (non è un segreto: appare nello script pubblico di ogni pagina) può
essere sovrascritto tramite env, ad esempio per un dominio di test:

```bash
# Cookiebot > Manager > Impostazioni > "Domain Group ID"
NEXT_PUBLIC_COOKIEBOT_CBID=00000000-0000-0000-0000-000000000000
```

Se la env è vuota viene usato l'ID di produzione. Se la imposti a stringa vuota,
nessuno script di consenso/tracciamento viene caricato.

### 2. Impostazioni nel pannello Cookiebot (banner minimal ma conforme)

- **Consent Mode**: attiva *Google Consent Mode* (Manager → Impostazioni) → invia
  a Google i segnali `ad_storage`, `ad_user_data`, `ad_personalization`,
  `analytics_storage`. È il requisito per fare Google Ads/remarketing a norma.
- **Layout banner**: scegli il tipo *Banner* in basso (non il popup overlay a
  centro pagina), così è discreto e non oscura il sito.
- **Pulsanti**: abilita il pulsante *Rifiuta* accanto ad *Accetta* (parità
  richiesta dal Garante). Non usare "solo Accetta".
- **Blocco preventivo**: lascia attivo l'auto-blocking (già impostato via
  `data-blockingmode="auto"` nel codice).

Lo stile on-brand del banner (card d'angolo, colori, angoli arrotondati) è già
definito in `src/app/globals.css` nella sezione "Cookiebot". Nota: il piano Free
di Cookiebot mostra una piccola dicitura "Consent by Cookiebot".

### 3. Quando aggiungerai Google Ads / GA4

Inserisci i tag (preferibilmente via Google Tag Manager). Grazie a Consent Mode
v2 gestito da Cookiebot, i tag rispetteranno automaticamente le scelte di
consenso dell'utente. Il remarketing si attiva solo con consenso *marketing*.

## 📝 Note Operative
- Sostituire le immagini placeholder o i video (su Educazione Finanziaria) con asset di produzione prima della messa online definitiva.
- I testi correnti sulle pagine *Blog* ed *Educazione Finanziaria* fungono da segnaposto architetturale per i veri contenuti editoriali.
- **Prima della messa online**: aggiornare Privacy Policy e Cookie Policy (dati del
  titolare ed email coerenti) e far validare le informative a un legale/DPO.

---
*Progettato su misura per unire istituzionalità finanziaria e accessibilità visiva.*
