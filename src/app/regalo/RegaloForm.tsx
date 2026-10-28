"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const INPUT_CLASS =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-accent focus:border-accent-2 focus:ring-2 focus:ring-accent-2/20 outline-none transition";

function Field({ id, label, hint, children }: { id: string; label: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-accent mb-1.5">
        {label}
      </label>
      {children}
      {hint && <p className="text-xs text-accent/50 mt-1.5">{hint}</p>}
    </div>
  );
}

export default function RegaloForm() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    giftedBy: "",
    street: "",
    addressDetails: "",
    zip: "",
    city: "",
    province: "",
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(key: keyof typeof form) {
    return (e: { target: { value: string } }) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/regalo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consent }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Qualcosa è andato storto. Riprova.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Connessione non riuscita. Controlla la rete e riprova.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl border border-gray-100 text-center">
        <div className="inline-flex items-center justify-center bg-green-100 text-green-600 rounded-full p-4 mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-accent mb-4">Richiesta ricevuta, {form.name}!</h3>
        <p className="text-accent/70 leading-relaxed">
          Il tuo Starter Kit &egrave; prenotato. A breve riceverai un messaggio su{" "}
          <strong className="text-accent">WhatsApp</strong> per confermare l&rsquo;indirizzo di spedizione.
        </p>
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 p-4 text-left">
          <WhatsAppIcon size={24} className="text-[#25D366] shrink-0 mt-0.5" />
          <p className="text-sm text-accent leading-relaxed">
            <strong>Rispondi al messaggio:</strong> spediamo lo Starter Kit solo dopo la tua conferma,
            cos&igrave; siamo sicuri che sei proprio tu.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl border border-gray-100 space-y-5 text-left"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="name" label="Nome *">
          <input id="name" type="text" required autoComplete="given-name" value={form.name} onChange={update("name")} className={INPUT_CLASS} />
        </Field>
        <Field id="lastName" label="Cognome *">
          <input id="lastName" type="text" required autoComplete="family-name" value={form.lastName} onChange={update("lastName")} className={INPUT_CLASS} />
        </Field>
      </div>

      <Field id="email" label="Email *">
        <input id="email" type="email" required autoComplete="email" value={form.email} onChange={update("email")} className={INPUT_CLASS} />
      </Field>

      <Field id="phone" label="Cellulare (WhatsApp) *" hint="Ti scriveremo qui per confermare l'indirizzo di spedizione.">
        <input id="phone" type="tel" required autoComplete="tel" value={form.phone} onChange={update("phone")} className={INPUT_CLASS} />
      </Field>

      <Field id="giftedBy" label="Chi ti ha regalato il voucher? *">
        <input id="giftedBy" type="text" required placeholder="Nome e cognome" value={form.giftedBy} onChange={update("giftedBy")} className={INPUT_CLASS} />
      </Field>

      <div className="pt-3 border-t border-gray-100">
        <p className="text-sm font-bold text-accent uppercase tracking-wider pt-2">Indirizzo di spedizione</p>
      </div>

      <Field id="street" label="Via e numero civico *">
        <input id="street" type="text" required autoComplete="address-line1" value={form.street} onChange={update("street")} className={INPUT_CLASS} />
      </Field>

      <Field id="addressDetails" label="Scala, interno, citofono (facoltativo)">
        <input id="addressDetails" type="text" autoComplete="address-line2" value={form.addressDetails} onChange={update("addressDetails")} className={INPUT_CLASS} />
      </Field>

      <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr_1fr] gap-5">
        <Field id="zip" label="CAP *">
          <input id="zip" type="text" required inputMode="numeric" pattern="\d{5}" maxLength={5} title="5 cifre" autoComplete="postal-code" value={form.zip} onChange={update("zip")} className={INPUT_CLASS} />
        </Field>
        <Field id="city" label="Città *">
          <input id="city" type="text" required autoComplete="address-level2" value={form.city} onChange={update("city")} className={INPUT_CLASS} />
        </Field>
        <div className="col-span-2 sm:col-span-1">
          <Field id="province" label="Provincia *">
            <input id="province" type="text" required pattern="[A-Za-z]{2}" maxLength={2} title="Sigla di 2 lettere, es. TO" placeholder="TO" autoComplete="address-level1" value={form.province} onChange={(e) => setForm((f) => ({ ...f, province: e.target.value.toUpperCase() }))} className={`${INPUT_CLASS} uppercase`} />
          </Field>
        </div>
      </div>

      <label className="flex items-start gap-3 cursor-pointer pt-2">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 text-accent-2 focus:ring-accent-2/30"
        />
        <span className="text-xs text-accent/60 leading-relaxed">
          Acconsento al trattamento dei miei dati personali ai sensi dell&rsquo;articolo 13 del
          Regolamento (UE) 2016/679 e alla ricezione di informazioni commerciali. *{" "}
          <a href="/informativaprivacyform" target="_blank" className="underline hover:text-accent-2">
            Leggi l&rsquo;informativa privacy
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 w-full px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={20} className="animate-spin" /> Invio in corso&hellip;
          </>
        ) : (
          "Ricevi il tuo Starter Kit"
        )}
      </button>

      <p className="flex items-center justify-center gap-2 text-xs text-accent/50">
        <WhatsAppIcon size={14} className="text-[#25D366]" /> Spedizione gratuita &middot; Conferma dell&rsquo;indirizzo via WhatsApp
      </p>
    </form>
  );
}
