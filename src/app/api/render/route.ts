// Route handler per il form della landing /render.
// Riceve i dati del lettore e li iscrive al gruppo MailerLite "Lead – Libro / Render".
//
// Richiede la variabile d'ambiente MAILERLITE_API_KEY:
//  - in locale: file .env.local
//  - in produzione (Vercel): Settings → Environment Variables
// Senza la key l'endpoint risponde 500 e l'iscrizione non avviene.

// ID del gruppo MailerLite di destinazione ("Lead – Libro / Render", account 185664).
const MAILERLITE_GROUP_ID = "188617390103201749";
const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";

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
        fields: { name, last_name: lastName, phone },
        groups: [MAILERLITE_GROUP_ID],
        status: "active",
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
