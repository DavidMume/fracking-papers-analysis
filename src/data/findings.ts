import type { Bilingual } from "../types";

export type Theme = "environment" | "health" | "water" | "economy" | "justice" | "seismicity";

export interface Finding {
  id: string;
  theme: Theme;
  paperId: "P01" | "P02" | "P03" | "P04";
  claim: Bilingual;
}

export const findings: Finding[] = [
  // Environment
  {
    id: "voc-emissions",
    theme: "environment",
    paperId: "P01",
    claim: {
      en: "UOGD is the largest single source of VOC emissions in the US — 14% of the national total.",
      es: "El UOGD es la mayor fuente individual de emisiones de COV en EE. UU. — 14% del total nacional.",
    },
  },
  {
    id: "groundwater-proximity",
    theme: "environment",
    paperId: "P01",
    claim: {
      en: "A gas well within 1 km of groundwater sources raises UOGD-related contaminant detection rates by 10–20%.",
      es: "Un pozo de gas a menos de 1 km de fuentes de agua subterránea aumenta las tasas de detección de contaminantes relacionados con UOGD entre 10–20%.",
    },
  },
  {
    id: "green-innovation",
    theme: "environment",
    paperId: "P01",
    claim: {
      en: "Cheap natural gas from the boom decreases green-technology innovation in the medium and long run.",
      es: "El gas natural barato del auge reduce la innovación en tecnologías verdes en el mediano y largo plazo.",
    },
  },
  {
    id: "air-pollution-phases",
    theme: "environment",
    paperId: "P02",
    claim: {
      en: "VOC, methane, NOx and particulate-matter emissions occur during every phase of well development; silica dust from proppant handling adds occupational risk.",
      es: "Las emisiones de COV, metano, NOx y material particulado ocurren en todas las fases del desarrollo de pozos; el polvo de sílice del manejo del agente de sostén añade riesgo ocupacional.",
    },
  },
  {
    id: "chemical-composition",
    theme: "environment",
    paperId: "P03",
    claim: {
      en: "HF fluid contains hundreds of substances — gelling agents, biocides, surfactants and crosslinkers. The EPA identified 1,084 unique chemicals used between 2005–2013.",
      es: "El fluido HF contiene cientos de sustancias — gelificantes, biocidas, surfactantes y entrecruzadores. La EPA identificó 1.084 sustancias químicas únicas usadas entre 2005–2013.",
    },
  },

  // Health
  {
    id: "birth-outcomes",
    theme: "health",
    paperId: "P01",
    claim: {
      en: "In-utero drilling exposure increases preterm birth and low birth weight by 9–13%, replicated across Colorado, Pennsylvania, Texas, Oklahoma, California and British Columbia.",
      es: "La exposición in útero a la perforación aumenta los partos prematuros y el bajo peso al nacer entre 9–13%, replicado en Colorado, Pensilvania, Texas, Oklahoma, California y Columbia Británica.",
    },
  },
  {
    id: "other-health",
    theme: "health",
    paperId: "P01",
    claim: {
      en: "UOGD areas show documented associations with asthma exacerbation, heart attacks, pneumonia, opioid mortality, and increased traffic accidents and mental-health disorders.",
      es: "Las zonas con UOGD muestran asociaciones documentadas con exacerbación del asma, infartos, neumonía, mortalidad por opioides, y mayores accidentes de tránsito y trastornos de salud mental.",
    },
  },
  {
    id: "toxicity-data-gap",
    theme: "health",
    paperId: "P03",
    claim: {
      en: "A high concentration of toxic chemicals combined with incomplete toxicity data means the health risk profile of HF fluid is systematically underestimated.",
      es: "Una alta concentración de sustancias tóxicas combinada con datos de toxicidad incompletos implica que el perfil de riesgo para la salud del fluido HF está sistemáticamente subestimado.",
    },
  },

  // Water
  {
    id: "water-use",
    theme: "water",
    paperId: "P02",
    claim: {
      en: "Average water use is 2.4 million gallons per well; only 15–35% of injected water is typically recovered at the surface.",
      es: "El uso promedio de agua es 2,4 millones de galones por pozo; solo se recupera en superficie entre 15–35% del agua inyectada.",
    },
  },
  {
    id: "btex-contamination",
    theme: "water",
    paperId: "P02",
    claim: {
      en: "Documented groundwater contaminants include methane migration plus BTEX compounds, chloride, barium, strontium and radium; surface spills are the primary contamination pathway.",
      es: "Los contaminantes documentados en agua subterránea incluyen migración de metano más compuestos BTEX, cloruro, bario, estroncio y radio; los derrames superficiales son la vía principal de contaminación.",
    },
  },
  {
    id: "recovery-rate",
    theme: "water",
    paperId: "P03",
    claim: {
      en: "Flowback and produced water (FPW) recovery ranges 10–50% of injected volume — meaning 50–90% of injected HF fluid stays in the subsurface in some formations.",
      es: "La recuperación de agua de retorno y producida (FPW) va de 10–50% del volumen inyectado — es decir, 50–90% del fluido HF inyectado permanece en el subsuelo en algunas formaciones.",
    },
  },
  {
    id: "garfield-reuse",
    theme: "water",
    paperId: "P02",
    claim: {
      en: "Garfield County, Colorado demonstrated 100% wastewater reuse for hydraulic fracturing — cited as a model for eliminating freshwater demand.",
      es: "El Condado de Garfield, Colorado, demostró reutilización del 100% de las aguas residuales para fracturamiento hidráulico — citado como modelo para eliminar la demanda de agua dulce.",
    },
  },
  {
    id: "fpw-tds",
    theme: "water",
    paperId: "P04",
    claim: {
      en: "Flowback and produced water total dissolved solids (TDS) can range from 10,000 to over 300,000 mg/L — up to ~9× seawater salinity — degrading standard gelling agents and crosslinkers.",
      es: "Los sólidos disueltos totales (TDS) del agua de retorno y producida pueden ir de 10.000 a más de 300.000 mg/L — hasta ~9 veces la salinidad del agua de mar — degradando los gelificantes y entrecruzadores estándar.",
    },
  },
  {
    id: "next-gen-fluid",
    theme: "water",
    paperId: "P04",
    claim: {
      en: "A next-generation fracturing fluid — biopolymer-synthetic gelling hybrid, bio-based nano-crosslinkers, nano-breakers and salt-resistant friction reducers — is proposed to make high-TDS FPW reuse viable at scale.",
      es: "Se propone un fluido de fracturamiento de próxima generación — gelificante híbrido biopolímero-sintético, nano-entrecruzadores de base biológica, nano-rompedores y reductores de fricción resistentes a la sal — para viabilizar la reutilización del FPW de alto TDS a escala.",
    },
  },

  // Economy
  {
    id: "jobs-wages",
    theme: "economy",
    paperId: "P01",
    claim: {
      en: "The UOGD boom generated roughly 650,000 jobs; each $1M in new production adds ~$80K in county wage income.",
      es: "El auge del UOGD generó cerca de 650.000 empleos; cada $1 millón en nueva producción añade ~$80.000 en ingresos salariales del condado.",
    },
  },
  {
    id: "royalties",
    theme: "economy",
    paperId: "P01",
    claim: {
      en: "Private UOGD royalties reached $40 billion/year in 2014 — 70% of all personal-income gains from the boom — alongside consumer-surplus welfare gains of $48–71 billion/year.",
      es: "Las regalías privadas del UOGD alcanzaron $40 mil millones/año en 2014 — 70% de todas las ganancias de ingreso personal del auge — junto a ganancias de bienestar por excedente del consumidor de $48–71 mil millones/año.",
    },
  },
  {
    id: "housing-discount",
    theme: "economy",
    paperId: "P01",
    claim: {
      en: "Homes near drilling sell at a 9.9–16.5% discount; properties with severed mineral rights show post-drilling price declines above 30%.",
      es: "Las viviendas cercanas a la perforación se venden con un descuento de 9,9–16,5%; las propiedades con derechos minerales separados muestran caídas de precio superiores al 30% tras la perforación.",
    },
  },
  {
    id: "fpw-economics",
    theme: "economy",
    paperId: "P04",
    claim: {
      en: "More than 50% of injection costs relate to water logistics — FPW reuse reduces freshwater withdrawal, disposal costs and injection-well use.",
      es: "Más del 50% de los costos de inyección se relacionan con la logística del agua — la reutilización del FPW reduce la extracción de agua dulce, los costos de disposición y el uso de pozos de inyección.",
    },
  },

  // Justice / regulation
  {
    id: "exposure-disparity",
    theme: "justice",
    paperId: "P01",
    claim: {
      en: "Hispanic, African American and low-income populations are disproportionately exposed to UOGD.",
      es: "Las poblaciones hispanas, afroamericanas y de bajos ingresos están desproporcionadamente expuestas al UOGD.",
    },
  },
  {
    id: "royalty-capture",
    theme: "justice",
    paperId: "P01",
    claim: {
      en: "In Denton, TX, local non-mineral-owning residents captured only 6.3% of total production value, while non-local mineral owners captured 61.4% of all royalties.",
      es: "En Denton, TX, los residentes locales sin derechos minerales capturaron solo el 6,3% del valor total de producción, mientras que los propietarios de derechos minerales no locales capturaron el 61,4% de todas las regalías.",
    },
  },
  {
    id: "disclosure-gap",
    theme: "justice",
    paperId: "P03",
    claim: {
      en: "Most HF fluid ingredients are classified as trade secrets; full chemical disclosure is not legally required in most US states, making risk assessment systematically incomplete.",
      es: "La mayoría de los ingredientes del fluido HF están clasificados como secretos comerciales; la divulgación química completa no es legalmente obligatoria en la mayoría de los estados de EE. UU., lo que hace que la evaluación de riesgos sea sistemáticamente incompleta.",
    },
  },

  // Seismicity
  {
    id: "wastewater-seismicity",
    theme: "seismicity",
    paperId: "P02",
    claim: {
      en: "Wastewater injection wells — not hydraulic fracturing itself — are the primary documented cause of induced seismicity; Oklahoma saw a 40× increase in M≥3 earthquakes 2009–2015.",
      es: "Los pozos de inyección de agua residual — no el fracturamiento en sí — son la causa principal documentada de sismicidad inducida; Oklahoma tuvo un aumento de 40 veces en sismos de magnitud ≥3 entre 2009–2015.",
    },
  },
  {
    id: "hf-fluid-seismicity",
    theme: "seismicity",
    paperId: "P03",
    claim: {
      en: "HF fluid injection itself — not only wastewater disposal — can trigger seismicity under some conditions; cyclic injection is proposed to reduce pressure buildup.",
      es: "La inyección del propio fluido HF — no solo la disposición de aguas residuales — puede desencadenar sismicidad en ciertas condiciones; se propone la inyección cíclica para reducir la acumulación de presión.",
    },
  },
];
