"use client";

/**
 * Link "Gestisci cookie": riapre il pannello dei consensi di Cookiebot, così
 * l'utente può modificare o revocare in qualsiasi momento le proprie scelte
 * (requisito delle linee guida del Garante sulla revocabilità del consenso).
 *
 * Usa l'API globale Cookiebot.renew(); se la CMP non è ancora caricata
 * (es. ID non configurato) il click non fa nulla, senza generare errori.
 */
type CookiebotWindow = Window & {
  Cookiebot?: { renew?: () => void };
};

export default function CookieSettingsButton({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        (window as CookiebotWindow).Cookiebot?.renew?.();
      }}
    >
      Gestisci cookie
    </button>
  );
}
