"use client";

import { useState } from "react";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo-calc",
});

function presentValue(R: number, i: number, g: number, n: number) {
  if (n <= 0 || R <= 0) return 0;
  if (Math.abs(i - g) < 1e-9) return (R * n) / (1 + i);
  const k = (1 + g) / (1 + i);
  return (R * (1 - Math.pow(k, n))) / (i - g);
}

function fmtEuro(n: number) {
  return "€ " + Math.round(n).toLocaleString("it-IT");
}

function fmtPct(n: number) {
  return n.toLocaleString("it-IT", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export default function MassimaleInvaliditaCalc() {
  const [age, setAge] = useState(40);
  const [income, setIncome] = useState(32000);
  const [retire, setRetire] = useState(67);
  const [disc, setDisc] = useState(1.5);
  const [growth, setGrowth] = useState(1.0);
  const [existing, setExisting] = useState(0);

  const i = disc / 100;
  const g = growth / 100;
  const R = Math.max(0, income || 0);
  const ded = Math.max(0, existing || 0);
  const n = Math.max(0, retire - age);

  const gross = presentValue(R, i, g, n);
  const net = Math.max(0, gross - ded);
  const mult = R > 0 ? gross / R : 0;

  const spread = Math.abs(i - g);
  let warning = "";
  if (n > 0 && spread < 0.005) {
    warning =
      "Lo scarto tra tasso di sconto e crescita è molto ridotto: in questa zona il massimale diventa molto sensibile a piccole variazioni dei parametri. Usa il valore con prudenza.";
  } else if (g > i && n > 0) {
    warning =
      "Hai impostato una crescita del reddito superiore al tasso di sconto: il fabbisogno cresce rapidamente con l’orizzonte. Verifica che l’ipotesi sia realistica.";
  }

  const W = 600;
  const H = 120;
  const pad = 6;
  let linePath = "";
  let areaPath = "";
  let firstPoint: { x: number; y: number } | null = null;

  if (retire > age) {
    const pts: { a: number; v: number }[] = [];
    let maxV = 0;
    for (let a = age; a <= retire; a++) {
      const v = Math.max(0, presentValue(R, i, g, retire - a) - ded);
      pts.push({ a, v });
      if (v > maxV) maxV = v;
    }

    if (pts.length >= 2 && maxV > 0) {
      const xs = (a: number) => pad + ((a - age) / (retire - age)) * (W - 2 * pad);
      const ys = (v: number) => H - pad - (v / maxV) * (H - 2 * pad);

      areaPath = `M ${xs(pts[0].a)} ${H - pad} `;
      pts.forEach((p, idx) => {
        const x = xs(p.a);
        const y = ys(p.v);
        linePath += (idx === 0 ? "M" : "L") + ` ${x.toFixed(1)} ${y.toFixed(1)} `;
        areaPath += `L ${x.toFixed(1)} ${y.toFixed(1)} `;
      });
      areaPath += `L ${xs(pts[pts.length - 1].a)} ${H - pad} Z`;
      firstPoint = { x: xs(pts[0].a), y: ys(pts[0].v) };
    }
  }

  return (
    <div className={`${archivo.variable} mi-calc`}>
      <div className="wrap">
        <header>
          <h1>Massimale ideale per l&rsquo;invalidità permanente</h1>
          <p className="sub">
            Pensiamo ad assicurare l&rsquo;auto e la casa, ma raramente ci fermiamo a proteggere
            ciò che le paga: noi stessi. Il valore economico di una persona non è soltanto ciò che
            ha, ma ciò che è ancora in grado di produrre. Ogni anno di lavoro che hai davanti è
            denaro non ancora incassato: è il tuo <b>capitale umano</b> — spesso la voce più
            rilevante e la meno protetta di un patrimonio. Un&rsquo;invalidità permanente può
            cancellarlo di colpo, con conseguenze economiche e umane difficili da immaginare.
          </p>
          <p className="sub" style={{ marginTop: 10 }}>
            Questo strumento traduce quel capitale in una cifra, così puoi decidere quanto
            proteggerlo.
          </p>
        </header>

        <div className="grid">
          <section className="card">
            <h2>I tuoi dati</h2>
            <p className="hint">Modifica i parametri: il risultato si aggiorna in tempo reale.</p>

            <div className="field">
              <label htmlFor="age">Età attuale</label>
              <div className="inwrap">
                <input
                  type="number"
                  id="age"
                  min={18}
                  max={66}
                  step={1}
                  value={age}
                  onChange={(e) => setAge(e.target.valueAsNumber || 0)}
                />
                <span className="unit">anni</span>
              </div>
            </div>

            <div className="field">
              <label htmlFor="income">Reddito netto annuo</label>
              <div className="inwrap">
                <input
                  type="number"
                  id="income"
                  min={0}
                  step={500}
                  value={income}
                  onChange={(e) => setIncome(e.target.valueAsNumber || 0)}
                />
                <span className="unit">€</span>
              </div>
            </div>

            <div className="field">
              <label htmlFor="retire">Età di fine attività lavorativa</label>
              <div className="inwrap">
                <input
                  type="number"
                  id="retire"
                  min={50}
                  max={75}
                  step={1}
                  value={retire}
                  onChange={(e) => setRetire(e.target.valueAsNumber || 0)}
                />
                <span className="unit">anni</span>
              </div>
            </div>

            <div className="field">
              <div className="row">
                <label htmlFor="disc" style={{ margin: 0 }}>
                  Tasso di sconto reale
                </label>
                <span className="val">
                  {fmtPct(disc)}
                  <small> %</small>
                </span>
              </div>
              <input
                type="range"
                id="disc"
                min={0}
                max={6}
                step={0.1}
                value={disc}
                onChange={(e) => setDisc(e.target.valueAsNumber)}
              />
            </div>

            <div className="field">
              <div className="row">
                <label htmlFor="growth" style={{ margin: 0 }}>
                  Crescita reale del reddito
                </label>
                <span className="val">
                  {fmtPct(growth)}
                  <small> %</small>
                </span>
              </div>
              <input
                type="range"
                id="growth"
                min={0}
                max={5}
                step={0.1}
                value={growth}
                onChange={(e) => setGrowth(e.target.valueAsNumber)}
              />
            </div>

            <div className="optional">
              <div className="field" style={{ margin: 0 }}>
                <label htmlFor="existing">
                  Capitali / coperture già disponibili{" "}
                  <span style={{ fontWeight: 500, color: "var(--text-muted)" }}>(opzionale)</span>
                </label>
                <div className="inwrap">
                  <input
                    type="number"
                    id="existing"
                    min={0}
                    step={1000}
                    value={existing}
                    onChange={(e) => setExisting(e.target.valueAsNumber || 0)}
                  />
                  <span className="unit">€</span>
                </div>
                <p className="hint" style={{ margin: "8px 0 0" }}>
                  Es. TFR maturato, risparmi destinati, altre polizze IP. Vengono sottratti dal
                  fabbisogno per ottenere il <b>gap</b> da assicurare.
                </p>
              </div>
            </div>
          </section>

          <section className="card result">
            <svg className="tex" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <g fill="none" stroke="#8CA9DB" strokeWidth={0.6} opacity={0.55}>
                <polygon points="0,60 90,10 150,90 60,140" />
                <polygon points="150,90 60,140 130,210 220,150" />
                <polygon points="220,150 130,210 200,300 300,230" />
                <polygon points="300,230 200,300 280,380 380,320" />
                <polygon points="90,10 200,40 150,90" />
                <polygon points="200,40 320,20 280,110 150,90" />
                <polygon points="280,110 400,90 360,200 220,150" />
                <polygon points="360,200 400,90 400,260" />
              </g>
              <g fill="none" stroke="#75E5D5" strokeWidth={0.7} opacity={0.4}>
                <polygon points="60,140 130,210 40,250 0,180" />
                <polygon points="320,20 400,0 400,90 280,110" />
              </g>
            </svg>
            <div className="inner">
              <div className="reslabel">Massimale consigliato</div>
              <div className="figure">{fmtEuro(net)}</div>
              <div className="mult">
                pari a <b>{mult.toLocaleString("it-IT", { maximumFractionDigits: 1 })}×</b> il
                reddito netto
              </div>

              <div className="meta">
                <div className="m">
                  <b>{n}</b>
                  <span>anni di reddito a rischio</span>
                </div>
                <div className="m">
                  <b>{fmtEuro(gross)}</b>
                  <span>fabbisogno lordo</span>
                </div>
                <div className="m">
                  <b>{fmtEuro(ded)}</b>
                  <span>coperture dedotte</span>
                </div>
              </div>

              {warning && <div className="warn show">{warning}</div>}

              <div className="curvewrap">
                <div className="ct">
                  Capitale umano residuo per età — il fabbisogno cala verso fine attività
                </div>
                <svg viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true">
                  {linePath && (
                    <>
                      <defs>
                        <linearGradient id="fillg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#75E5D5" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#75E5D5" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <path d={areaPath} fill="url(#fillg)" />
                      <path
                        d={linePath}
                        fill="none"
                        stroke="#75E5D5"
                        strokeWidth={2.5}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      {firstPoint && (
                        <circle
                          cx={firstPoint.x}
                          cy={firstPoint.y}
                          r={4.5}
                          fill="#fff"
                          stroke="#75E5D5"
                          strokeWidth={2.5}
                        />
                      )}
                    </>
                  )}
                </svg>
              </div>
            </div>
          </section>
        </div>

        <div className="branches">
          <div className="branch">
            <h3>IP da infortunio</h3>
            <p>
              Stesso obiettivo di capitale. Ramo più semplice da coprire: <b>massimali alti</b>,
              premi contenuti, franchigie basse. Spesso conviene puntare a massimali pieni,
              valutando la rivalutazione automatica del capitale assicurato.
            </p>
          </div>
          <div className="branch">
            <h3>IP da malattia</h3>
            <p>
              Stesso target, ma mercato più rigido: premi più alti ed <b>esclusioni</b> più
              frequenti. In genere paga solo <b>oltre una franchigia elevata</b>; valuta il
              bilanciamento tra massimale, franchigia e premio sostenibile.
            </p>
          </div>
        </div>

        <footer>
          <b>Disclaimer.</b> Questo strumento ha finalità esclusivamente informative ed educative e
          non costituisce in alcun modo consulenza finanziaria, assicurativa o previdenziale
          personalizzata, né sollecitazione alla sottoscrizione di prodotti assicurativi o
          finanziari. I risultati ottenuti si basano su ipotesi semplificate e non tengono conto
          della situazione personale, patrimoniale o degli obiettivi specifici dell&rsquo;utente.
          L&rsquo;autore non si assume alcuna responsabilità per eventuali decisioni prese sulla
          base delle informazioni fornite da questo calcolatore.
          <br />
          <br />
          <b>Metodo.</b> Valore attuale di una rendita crescente posticipata: M = R &middot; [1 −
          ((1+g)/(1+i))ⁿ] / (i − g), con n = (età fine lavoro − età attuale), R = reddito netto
          annuo, i = tasso di sconto reale, g = crescita reale del reddito. Lavorando in termini
          reali, l&rsquo;inflazione è già implicita. Il risultato stima il fabbisogno a
          invalidità totale (100%); a invalidità parziale resta una capacità lavorativa residua.
        </footer>
      </div>

      <style jsx>{`
        .mi-calc {
          --navy-900: #03045e;
          --navy-800: #0b0e63;
          --navy-700: #181a6a;
          --navy-500: #2e3392;
          --navy-400: #4a4fa0;
          --cornflower-500: #6e8fcf;
          --cornflower-400: #8ca9db;
          --cornflower-300: #afc2e6;
          --cornflower-200: #cedaef;
          --periwinkle-500: #8182ab;
          --periwinkle-400: #a9abd4;
          --periwinkle-300: #c7c9e6;
          --mint-600: #3fcab4;
          --mint-500: #4fd9c4;
          --mint-400: #75e5d5;
          --mint-300: #9ceee2;
          --green-500: #7fbe43;
          --white: #ffffff;
          --paper: #fbfbfc;
          --lavender-50: #f6f6f9;
          --lavender-100: #ececf2;
          --gray-100: #f2f2f2;
          --gray-200: #e4e4ec;
          --gray-300: #d2d3df;
          --gray-400: #b9bacb;

          --text-strong: var(--navy-900);
          --text-body: var(--navy-700);
          --text-muted: var(--periwinkle-500);
          --accent: var(--mint-400);
          --accent-hover: var(--mint-500);
          --accent-press: var(--mint-600);

          --font-sans: var(--font-archivo-calc), "Helvetica Neue", Helvetica, Arial, sans-serif;
          --fw-regular: 400;
          --fw-medium: 500;
          --fw-semibold: 600;
          --fw-bold: 700;
          --fw-extra: 800;
          --fw-black: 900;

          --tracking-tight: -0.02em;
          --tracking-wide: 0.04em;
          --tracking-wider: 0.08em;
          --radius-md: 6px;
          --radius-lg: 8px;
          --radius-xl: 14px;
          --radius-pill: 999px;
          --shadow-sm: 0 1px 2px rgba(3, 4, 94, 0.08);
          --shadow-md: 0 4px 14px rgba(3, 4, 94, 0.1);
          --shadow-lg: 0 12px 40px rgba(3, 4, 94, 0.14);
          --shadow-mint: 0 6px 18px rgba(79, 217, 196, 0.35);
          --focus-ring: 0 0 0 3px rgba(117, 229, 213, 0.55);
          --content-max: 1080px;

          font-family: var(--font-sans);
          background: var(--paper);
          color: var(--text-body);
          line-height: 1.4;
          padding-left: clamp(16px, 4vw, 48px);
          padding-right: clamp(16px, 4vw, 48px);
          padding-bottom: clamp(16px, 4vw, 48px);
          padding-top: 8rem;
        }
        @media (min-width: 1024px) {
          .mi-calc {
            padding-top: 12rem;
          }
        }
        .mi-calc * {
          box-sizing: border-box;
        }
        .wrap {
          max-width: var(--content-max);
          margin: 0 auto;
        }

        header {
          margin-bottom: 30px;
        }
        .eyebrow {
          font-size: 0.6875rem;
          letter-spacing: var(--tracking-wider);
          text-transform: uppercase;
          color: var(--cornflower-500);
          font-weight: var(--fw-bold);
          margin-bottom: 12px;
        }
        h1 {
          font-weight: var(--fw-black);
          font-size: clamp(2rem, 5vw, 3rem);
          color: var(--navy-900);
          line-height: 1.04;
          letter-spacing: var(--tracking-tight);
          margin: 0;
        }
        .sub {
          color: var(--text-muted);
          font-size: 0.9375rem;
          margin-top: 12px;
          margin-left: auto;
          margin-right: auto;
          max-width: 62ch;
          font-weight: var(--fw-medium);
          text-align: center;
        }
        .sub b {
          color: var(--navy-700);
          font-weight: var(--fw-bold);
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 22px;
          margin-top: 30px;
        }
        @media (max-width: 880px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: var(--white);
          border: 1px solid var(--gray-300);
          border-radius: var(--radius-xl);
          padding: clamp(20px, 3vw, 30px);
          box-shadow: var(--shadow-sm);
        }
        .card h2 {
          font-weight: var(--fw-extra);
          font-size: 1.375rem;
          color: var(--navy-900);
          letter-spacing: var(--tracking-tight);
          margin: 0 0 4px;
        }
        .card .hint {
          font-size: 0.8125rem;
          color: var(--text-muted);
          margin-bottom: 22px;
          font-weight: var(--fw-medium);
        }

        .field {
          margin-bottom: 22px;
        }
        .field:last-child {
          margin-bottom: 0;
        }
        label {
          display: block;
          font-size: 0.8125rem;
          font-weight: var(--fw-bold);
          color: var(--navy-700);
          margin-bottom: 8px;
          letter-spacing: var(--tracking-tight);
        }
        .row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 10px;
        }
        .val {
          font-variant-numeric: tabular-nums;
          font-weight: var(--fw-extra);
          color: var(--navy-900);
          font-size: 0.9375rem;
        }
        .val small {
          font-weight: var(--fw-medium);
          color: var(--text-muted);
        }

        input[type="number"] {
          width: 100%;
          font-family: inherit;
          font-size: 1rem;
          font-weight: var(--fw-bold);
          color: var(--navy-900);
          padding: 12px 13px;
          border: 1.5px solid var(--gray-300);
          border-radius: var(--radius-lg);
          background: var(--lavender-50);
          -moz-appearance: textfield;
        }
        input[type="number"]:focus {
          outline: none;
          box-shadow: var(--focus-ring);
          border-color: var(--mint-500);
        }
        .inwrap {
          position: relative;
        }
        .inwrap .unit {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--periwinkle-500);
          font-size: 0.875rem;
          font-weight: var(--fw-bold);
          pointer-events: none;
        }
        .inwrap input {
          padding-right: 36px;
        }

        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 5px;
          border-radius: var(--radius-pill);
          background: var(--gray-300);
          outline: none;
          margin-top: 6px;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--mint-400);
          cursor: pointer;
          border: 4px solid #fff;
          box-shadow: var(--shadow-mint);
        }
        input[type="range"]::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--mint-400);
          cursor: pointer;
          border: 4px solid #fff;
          box-shadow: var(--shadow-mint);
        }
        input[type="range"]:focus-visible {
          box-shadow: var(--focus-ring);
        }

        .optional {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px dashed var(--gray-300);
        }

        .result {
          position: relative;
          overflow: hidden;
          color: #fff;
          border: none;
          background: linear-gradient(155deg, var(--navy-700) 0%, var(--navy-900) 100%);
          box-shadow: var(--shadow-lg);
        }
        .result svg.tex {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
          pointer-events: none;
        }
        .result .inner {
          position: relative;
          z-index: 1;
        }
        .result h2 {
          color: #fff;
        }
        .reslabel {
          font-size: 0.6875rem;
          letter-spacing: var(--tracking-wider);
          text-transform: uppercase;
          color: var(--mint-300);
          font-weight: var(--fw-bold);
        }
        .figure {
          font-weight: var(--fw-black);
          font-size: clamp(2.5rem, 8vw, 4rem);
          line-height: 1.02;
          letter-spacing: var(--tracking-tight);
          margin: 10px 0 4px;
          color: var(--mint-400);
          font-variant-numeric: tabular-nums;
        }
        .mult {
          color: var(--cornflower-300);
          font-size: 0.9375rem;
          font-weight: var(--fw-semibold);
        }
        .mult b {
          color: #fff;
          font-weight: var(--fw-extra);
        }
        .meta {
          display: flex;
          gap: 28px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .meta .m b {
          display: block;
          font-weight: var(--fw-black);
          font-size: 1.5rem;
          color: #fff;
          font-variant-numeric: tabular-nums;
          letter-spacing: var(--tracking-tight);
        }
        .meta .m span {
          font-size: 0.6875rem;
          color: var(--periwinkle-300);
          letter-spacing: var(--tracking-wide);
          text-transform: uppercase;
          font-weight: var(--fw-semibold);
        }

        .curvewrap {
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }
        .curvewrap .ct {
          font-size: 0.6875rem;
          letter-spacing: var(--tracking-wide);
          color: var(--periwinkle-300);
          margin-bottom: 12px;
          text-transform: uppercase;
          font-weight: var(--fw-semibold);
        }
        .curvewrap svg {
          width: 100%;
          height: 120px;
          display: block;
        }

        .warn {
          margin-top: 18px;
          font-size: 0.8125rem;
          color: var(--navy-900);
          background: var(--mint-300);
          border-radius: var(--radius-md);
          padding: 10px 13px;
          font-weight: var(--fw-semibold);
        }

        .branches {
          margin-top: 22px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 880px) {
          .branches {
            grid-template-columns: 1fr;
          }
        }
        .branch {
          background: var(--white);
          border: 1px solid var(--gray-300);
          border-radius: var(--radius-xl);
          padding: 20px 22px;
          border-left: 4px solid var(--mint-400);
          box-shadow: var(--shadow-sm);
        }
        .branch h3 {
          font-weight: var(--fw-extra);
          font-size: 1.125rem;
          color: var(--navy-900);
          margin: 0 0 8px;
          letter-spacing: var(--tracking-tight);
        }
        .branch p {
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.5;
          font-weight: var(--fw-medium);
          margin: 0;
        }
        .branch p b {
          color: var(--navy-700);
          font-weight: var(--fw-bold);
        }

        footer {
          margin-top: 28px;
          margin-left: auto;
          margin-right: auto;
          font-size: 0.6875rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 84ch;
          font-weight: var(--fw-medium);
          text-align: center;
        }
        footer b {
          color: var(--navy-700);
          font-weight: var(--fw-bold);
        }
      `}</style>
    </div>
  );
}
