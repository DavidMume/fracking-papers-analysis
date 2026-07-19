import type { Bilingual } from "../types";
import type { Theme } from "./findings";

export interface CaseStudy {
  id: string;
  place: string;
  lat: number;
  lng: number;
  /** "site" = county/city-level known coordinates; "region" = state/province-level centroid, coarser. */
  precision: "site" | "region";
  paperId: "P01" | "P02" | "P03" | "P04";
  theme: Theme;
  topic: Bilingual;
  summary: Bilingual;
}

// Coordinates are the known public location of the named place (city/county centroid
// or state/province centroid) — not precise well or study-site coordinates, which the
// source papers do not disclose. See methodology → "How case studies were mapped".
export const caseStudies: CaseStudy[] = [
  {
    id: "denton-tx",
    place: "Denton County, Texas, USA",
    lat: 33.2148,
    lng: -97.1331,
    precision: "site",
    paperId: "P01",
    theme: "justice",
    topic: { en: "Royalty distribution", es: "Distribución de regalías" },
    summary: {
      en: "Local non-mineral-owning residents captured only 6.3% of production value; non-local mineral owners captured 61.4% of royalties.",
      es: "Los residentes locales sin derechos minerales capturaron solo 6,3% del valor de producción; los propietarios no locales capturaron 61,4% de las regalías.",
    },
  },
  {
    id: "garfield-co",
    place: "Garfield County, Colorado, USA",
    lat: 39.5297,
    lng: -107.3237,
    precision: "site",
    paperId: "P02",
    theme: "water",
    topic: { en: "100% wastewater reuse model", es: "Modelo de reutilización del 100% de aguas residuales" },
    summary: {
      en: "Cited as a technically demonstrated model for eliminating freshwater demand in hydraulic fracturing.",
      es: "Citado como un modelo técnicamente demostrado para eliminar la demanda de agua dulce en el fracturamiento hidráulico.",
    },
  },
  {
    id: "oklahoma",
    place: "Oklahoma, USA",
    lat: 35.4676,
    lng: -97.5164,
    precision: "region",
    paperId: "P02",
    theme: "seismicity",
    topic: { en: "Induced seismicity", es: "Sismicidad inducida" },
    summary: {
      en: "40× increase in M≥3 earthquakes between 2009–2015, coinciding with wastewater injection volumes.",
      es: "Aumento de 40 veces en sismos de magnitud ≥3 entre 2009–2015, coincidiendo con los volúmenes de inyección de agua residual.",
    },
  },
  {
    id: "colorado",
    place: "Colorado, USA",
    lat: 39.5501,
    lng: -105.7821,
    precision: "region",
    paperId: "P01",
    theme: "health",
    topic: { en: "Birth outcomes study region", es: "Región de estudio de resultados de nacimiento" },
    summary: {
      en: "One of six regions where in-utero UOGD exposure was linked to a 9–13% rise in preterm birth and low birth weight.",
      es: "Una de seis regiones donde la exposición in útero al UOGD se vinculó con un aumento de 9–13% en partos prematuros y bajo peso al nacer.",
    },
  },
  {
    id: "pennsylvania",
    place: "Pennsylvania, USA",
    lat: 41.2033,
    lng: -77.1945,
    precision: "region",
    paperId: "P01",
    theme: "health",
    topic: { en: "Birth outcomes study region", es: "Región de estudio de resultados de nacimiento" },
    summary: {
      en: "Marcellus Shale core region; one of six regions in the birth-outcomes literature reviewed by P01.",
      es: "Región central del esquisto Marcellus; una de seis regiones en la literatura de resultados de nacimiento revisada por P01.",
    },
  },
  {
    id: "texas",
    place: "Texas, USA",
    lat: 31.9686,
    lng: -99.9018,
    precision: "region",
    paperId: "P01",
    theme: "economy",
    topic: { en: "Income gains & birth outcomes", es: "Ganancias de ingreso y resultados de nacimiento" },
    summary: {
      en: "UOGD income gains concentrated among non-college-educated men and minority workers; also a birth-outcomes study region.",
      es: "Las ganancias de ingreso del UOGD se concentraron en hombres sin título universitario y trabajadores de minorías; también región de estudio de resultados de nacimiento.",
    },
  },
  {
    id: "california",
    place: "California, USA",
    lat: 36.7783,
    lng: -119.4179,
    precision: "region",
    paperId: "P01",
    theme: "health",
    topic: { en: "Birth outcomes study region", es: "Región de estudio de resultados de nacimiento" },
    summary: {
      en: "One of six regions where in-utero UOGD exposure was linked to adverse birth outcomes.",
      es: "Una de seis regiones donde la exposición in útero al UOGD se vinculó con resultados adversos de nacimiento.",
    },
  },
  {
    id: "british-columbia",
    place: "British Columbia, Canada",
    lat: 53.7267,
    lng: -127.6476,
    precision: "region",
    paperId: "P01",
    theme: "health",
    topic: { en: "Birth outcomes study region", es: "Región de estudio de resultados de nacimiento" },
    summary: {
      en: "The one non-US region in P01's cross-jurisdiction birth-outcomes evidence.",
      es: "La única región fuera de EE. UU. en la evidencia de resultados de nacimiento entre jurisdicciones de P01.",
    },
  },
];
