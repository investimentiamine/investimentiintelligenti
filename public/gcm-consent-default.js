/*
 * Google Consent Mode v2 — stato di default (pre-consenso).
 * Snippet fornito da Cookiebot (Implementazione > Google Consent Mode).
 * Deve essere eseguito PRIMA dello script Cookiebot e di qualsiasi tag Google
 * (gtag.js / GTM): per questo è caricato con strategy="beforeInteractive".
 * Tutto negato finché l'utente non presta il consenso; Cookiebot invia poi
 * automaticamente gli aggiornamenti del consenso.
 */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("consent", "default", {
  ad_personalization: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted",
  wait_for_update: 500,
});
gtag("set", "ads_data_redaction", true);
gtag("set", "url_passthrough", false);
