// Route handler per il form della landing /regalo (voucher Starter Kit).
// Riceve i dati di chi ha ricevuto il voucher e li iscrive al gruppo MailerLite "Starter Kit",
// salvando anche l'indirizzo di spedizione e chi ha regalato il voucher.
//
// Richiede la variabile d'ambiente MAILERLITE_API_KEY:
//  - in locale: file .env.local
//  - in produzione (Vercel): Settings → Environment Variables

// ID del gruppo MailerLite di destinazione ("Starter Kit").
const MAILERLITE_GROUP_ID = "202560298684515843";
const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";

const CONSENT_TEXT =
  "Acconsento al trattamento dei miei dati personali ai sensi dell'articolo 13 del Regolamento (UE) 2016/679 e alla ricezione di informazioni commerciali *";

export async function POST(request: Request) {
  let payload: {
    name?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    giftedBy?: string;
    street?: string;
    addressDetails?: string;
    zip?: string;
    city?: string;
    province?: string;
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
  const giftedBy = payload.giftedBy?.trim();
  const street = payload.street?.trim();
  const addressDetails = payload.addressDetails?.trim() || "";
  const zip = payload.zip?.trim();
  const city = payload.city?.trim();
  const province = payload.province?.trim().toUpperCase();
  const consent = payload.consent === true;

  if (!name || !lastName || !email || !phone || !giftedBy || !street || !zip || !city || !province) {
    return Response.json({ error: "Compila tutti i campi obbligatori." }, { status: 400 });
  }
  if (!/^\d{5}$/.test(zip)) {
    return Response.json({ error: "Il CAP deve essere di 5 cifre." }, { status: 400 });
  }
  if (!/^[A-Z]{2}$/.test(province)) {
    return Response.json(
      { error: "Indica la provincia con la sigla di 2 lettere (es. TO)." },
      { status: 400 },
    );
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
          voucher_regalato_da: giftedBy,
          indirizzo: street,
          dettagli_indirizzo: addressDetails,
          z_i_p: zip,
          city,
          state: province,
          country: "Italia",
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
