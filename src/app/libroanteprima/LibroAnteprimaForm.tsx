"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function LibroAnteprimaForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/libroanteprima", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastName, email, phone, consent }),
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
        <h3 className="text-2xl font-bold text-accent mb-4">Iscrizione completata!</h3>
        <p className="text-accent/70 leading-relaxed">
          Grazie! Sei nella lista dell&rsquo;anteprima. Ti scriver&ograve; non appena il libro sar&agrave; pronto per te.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl border border-gray-100 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-accent mb-1.5">
            Nome *
          </label>
          <input
            id="name"
            type="text"
            required
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-accent focus:border-accent-2 focus:ring-2 focus:ring-accent-2/20 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-accent mb-1.5">
            Cognome *
          </label>
          <input
            id="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-accent focus:border-accent-2 focus:ring-2 focus:ring-accent-2/20 outline-none transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-accent mb-1.5">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-accent focus:border-accent-2 focus:ring-2 focus:ring-accent-2/20 outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-accent mb-1.5">
          Cellulare *
        </label>
        <input
          id="phone"
          type="tel"
          required
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-accent focus:border-accent-2 focus:ring-2 focus:ring-accent-2/20 outline-none transition"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
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
          "Entra nella lista riservata"
        )}
      </button>
    </form>
  );
}
