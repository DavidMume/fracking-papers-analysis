import type { Bilingual } from "../types";

export interface SynthesisRow {
  dimension: Bilingual;
  P01: Bilingual;
  P02: Bilingual;
  P03: Bilingual;
  P04: Bilingual;
}

export const synthesisTable: SynthesisRow[] = [
  {
    dimension: { en: "Focus", es: "Enfoque" },
    P01: { en: "Costs & benefits at community level", es: "Costos y beneficios a nivel comunitario" },
    P02: { en: "Water & seismicity impacts", es: "Impactos en agua y sismicidad" },
    P03: { en: "HF fluid composition & fate", es: "Composición y destino del fluido HF" },
    P04: { en: "FPW reuse technology", es: "Tecnología de reutilización del FPW" },
  },
  {
    dimension: { en: "Methodology", es: "Metodología" },
    P01: { en: "Quasi-experimental economics (DID, IV)", es: "Economía cuasi-experimental (DID, VI)" },
    P02: { en: "Systematic literature review", es: "Revisión sistemática de literatura" },
    P03: { en: "Synthesis + correlation analysis", es: "Síntesis + análisis de correlación" },
    P04: { en: "Materials science review", es: "Revisión de ciencia de materiales" },
  },
  {
    dimension: { en: "Water problem", es: "Problema del agua" },
    P01: { en: "Willingness to pay to avoid contamination", es: "DAP para evitar contaminación" },
    P02: { en: "2.4M gal/well, 15–35% recovery", es: "2,4M galones/pozo, 15–35% recuperado" },
    P03: { en: "10–50% recovery; migration risk", es: "10–50% recuperación; riesgo de migración" },
    P04: { en: "High-TDS reuse challenge", es: "Desafío de reutilizar FPW con alto TDS" },
  },
  {
    dimension: { en: "Key number", es: "Cifra clave" },
    P01: { en: "$48–71B/year welfare gain", es: "$48–71 mil millones/año en bienestar" },
    P02: { en: "9.5% CAGR industry growth", es: "9,5% CAGR de la industria" },
    P03: { en: "1,084 chemicals identified", es: "1.084 sustancias identificadas" },
    P04: { en: "78% of US gas from shale (2020)", es: "78% del gas de EE. UU. desde esquisto (2020)" },
  },
  {
    dimension: { en: "Main concern", es: "Preocupación principal" },
    P01: { en: "Distribution of costs vs. benefits", es: "Distribución de costos vs. beneficios" },
    P02: { en: "Insufficient regulation", es: "Regulación insuficiente" },
    P03: { en: "Disclosure gaps", es: "Brechas en divulgación" },
    P04: { en: "Freshwater scarcity", es: "Escasez de agua dulce" },
  },
  {
    dimension: { en: "Proposed solution", es: "Solución propuesta" },
    P01: { en: "Causal research + policy design", es: "Investigación causal + diseño de política" },
    P02: { en: "Stringent monitoring + Garfield model", es: "Monitoreo estricto + modelo Garfield" },
    P03: { en: "Mandatory disclosure + databases", es: "Divulgación obligatoria + bases de datos" },
    P04: { en: "Salt-resistant fracturing fluid", es: "Fluido de fracturamiento resistente a la sal" },
  },
];

export const convergentConclusions: Bilingual[] = [
  {
    en: "Water is the binding constraint. All four papers identify water — its consumption, contamination or reuse — as the central environmental challenge of fracking.",
    es: "El agua es la restricción vinculante. Los cuatro artículos identifican el agua — su consumo, contaminación o reutilización — como el desafío ambiental central del fracking.",
  },
  {
    en: "What goes down doesn't come back. P02 and P03 independently document that 50–90% of injected fluid stays in the subsurface, with poorly understood fate.",
    es: "Lo que baja no vuelve a subir. P02 y P03 documentan independientemente que 50–90% del fluido inyectado permanece en el subsuelo, con un destino poco comprendido.",
  },
  {
    en: "Disclosure is systemically inadequate. P03 documents ~1,084 chemicals injected with incomplete toxicity data; P01 shows causal health effects are hard to estimate precisely because of data gaps.",
    es: "La divulgación es sistémicamente insuficiente. P03 documenta ~1.084 sustancias inyectadas con datos de toxicidad incompletos; P01 muestra que los efectos causales en salud son difíciles de estimar con precisión por las brechas en los datos.",
  },
  {
    en: "There is a viable path to sustainability. P02 shows 100% wastewater reuse is technically demonstrated (Garfield, CO); P04 shows the materials science exists to scale it; P01 shows economic incentives could align if externalities are properly priced.",
    es: "Existe un camino viable hacia la sostenibilidad. P02 muestra que la reutilización del 100% de aguas residuales está técnicamente demostrada (Garfield, CO); P04 muestra que la ciencia de materiales existe para escalarlo; P01 muestra que los incentivos económicos podrían alinearse si las externalidades se valoran correctamente.",
  },
  {
    en: "Environmental justice is unresolved. P01 documents that those who bear the costs (resident non-mineral owners, minority communities) are structurally separated from those who capture the benefits (non-local mineral owners, gas companies, consumers).",
    es: "La justicia ambiental sigue sin resolverse. P01 documenta que quienes cargan con los costos (residentes sin derechos minerales, comunidades minoritarias) están estructuralmente separados de quienes capturan los beneficios (propietarios no locales, empresas de gas, consumidores).",
  },
];
