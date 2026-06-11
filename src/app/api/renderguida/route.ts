// Route handler per il form della landing /renderguida.
// Riceve i dati di chi ha scaricato la guida gratuita e li iscrive a un gruppo MailerLite.
//
// Richiede la variabile d'ambiente MAILERLITE_API_KEY:
//  - in locale: file .env.local
//  - in produzione (Vercel): Settings → Environment Variables
// Senza la key l'endpoint risponde 500 e l'iscrizione non avviene.

// ID del gruppo MailerLite di destinazione ("Lead - Guida Render", account 185664):
// chi si iscrive dalla landing /renderguida finisce qui.
const MAILERLITE_GROUP_ID = "189991182123665254";
const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";

// Testo del consenso mostrato e accettato nel form: registrato in MailerLite
// (campo "marketing_preferences" + opted_in_at + optin_ip) come prova GDPR.
const CONSENT_TEXT =
  "Acconsento al trattamento dei miei dati personali ai sensi dell'articolo 13 del Regolamento (UE) 2016/679 e alla ricezione di informazioni commerciali *";

export async function POST(request: Request) {
  let payload: {
    name?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    consent?: boolean;
  };

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const lastName = payload.lastName?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const consent = payload.consent === true;

  if (!name || !lastName || !email || !phone) {
    return Response.json({ error: "Compila tutti i campi." }, { status: 400 });
  }
  if (!consent) {
    return Response.json(
      { error: "Devi acconsentire al trattamento dei dati per proseguire." },
      { status: 400 },
    );
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    console.error("MAILERLITE_API_KEY non configurata.");
    return Response.json(
      { error: "Servizio momentaneamente non disponibile. Riprova più tardi." },
      { status: 500 },
    );
  }

  // Prova del consenso (GDPR): momento e indirizzo IP di chi ha accettato.
  const optinIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;
  const optedInAt = new Date().toISOString().slice(0, 19).replace("T", " ");

  try {
    const res = await fetch(MAILERLITE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name,
          last_name: lastName,
          phone,
          marketing_preferences: CONSENT_TEXT,
        },
        groups: [MAILERLITE_GROUP_ID],
        status: "active",
        opted_in_at: optedInAt,
        optin_ip: optinIp,
        ip_address: optinIp,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Errore MailerLite:", res.status, detail);
      return Response.json(
        { error: "Non siamo riusciti a registrare la richiesta. Riprova." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Errore inatteso nella chiamata a MailerLite:", err);
    return Response.json({ error: "Errore inatteso. Riprova più tardi." }, { status: 500 });
  }
}
