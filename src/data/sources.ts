import type { Bilingual } from "../types";

export interface Source {
  id: "P01" | "P02" | "P03" | "P04";
  title: Bilingual;
  authors: string;
  journal: string;
  year: number;
  type: Bilingual;
  institutions: string;
  link: string | null;
  pages: number;
  tokens: number;
  vocab: number;
  figures: number;
  focus: Bilingual;
}

export const sources: Source[] = [
  {
    id: "P01",
    title: {
      en: "Economic, Environmental, and Health Impacts of the Fracking Boom",
      es: "Impactos económicos, ambientales y de salud del auge del fracking",
    },
    authors: "Katie Black, Andy Boslett, Elaine Hill, Lala Ma, Shawn J. McCoy",
    journal: "SSRN Working Paper 3780721",
    year: 2021,
    type: { en: "Systematic literature review", es: "Revisión sistemática de la literatura" },
    institutions: "University of Rochester · Duke University",
    link: "https://ssrn.com/abstract=3780721",
    pages: 38,
    tokens: 16240,
    vocab: 2178,
    figures: 2,
    focus: {
      en: "Local economic, health and environmental impacts of UOGD in the US",
      es: "Impactos económicos, de salud y ambientales locales del UOGD en EE. UU.",
    },
  },
  {
    id: "P02",
    title: {
      en: "Environmental Implications of Shale Gas Hydraulic Fracturing",
      es: "Implicaciones ambientales del fracturamiento hidráulico de gas de esquisto",
    },
    authors: "Bohyun Hwang, Joonghyeok Heo, Chungwan Lim, Joonkyu Park",
    journal: "Water (MDPI), 2023, 15, 3334",
    year: 2023,
    type: { en: "Systematic literature review", es: "Revisión sistemática de la literatura" },
    institutions: "Ohio State University · University of Texas–Permian Basin · Kongju National University · Seoil University",
    link: "https://doi.org/10.3390/w15193334",
    pages: 18,
    tokens: 13215,
    vocab: 2008,
    figures: 6,
    focus: {
      en: "Water contamination and induced seismicity from hydraulic fracturing",
      es: "Contaminación del agua y sismicidad inducida por el fracturamiento hidráulico",
    },
  },
  {
    id: "P03",
    title: {
      en: "Review of the Environmental and Health Risks of Hydraulic Fracturing Fluids",
      es: "Revisión de los riesgos ambientales y de salud de los fluidos de fracturamiento hidráulico",
    },
    authors: "Sara Makki, Elsa Maalouf, Alissar Yehya",
    journal: "Heliyon 11 (2025) e40883",
    year: 2025,
    type: { en: "Review article", es: "Artículo de revisión" },
    institutions: "American University of Beirut · Harvard John A. Paulson School of Engineering and Applied Sciences",
    link: "https://doi.org/10.1016/j.heliyon.2024.e40883",
    pages: 17,
    tokens: 16041,
    vocab: 2012,
    figures: 6,
    focus: {
      en: "Composition, toxicity, fate and disclosure of hydraulic fracturing fluid",
      es: "Composición, toxicidad, destino y divulgación del fluido de fracturamiento hidráulico",
    },
  },
  {
    id: "P04",
    title: {
      en: "Towards Sustainable Oil/Gas Fracking by Reusing Its Process Water",
      es: "Hacia un fracking sostenible mediante la reutilización del agua de proceso",
    },
    authors:
      "Yang Zhang, Jinhua Mao, Jincheng Mao, An Chen, Xiaojiang Yang, Chong Lin, Zhihong Wei, Xiaoliang Huang, Li Song, Feng Tang, Qi Jiang, Yonghao Ni",
    journal: "Journal of Petroleum Science and Engineering 213 (2022) 110422",
    year: 2022,
    type: { en: "Review article", es: "Artículo de revisión" },
    institutions: "Southwest Petroleum University (Chengdu) · University of New Brunswick · BHDC (Renqiu)",
    link: "https://doi.org/10.1016/j.petrol.2022.110422",
    pages: 23,
    tokens: 25590,
    vocab: 2523,
    figures: 12,
    focus: {
      en: "Materials science for reusing flowback and produced water at scale",
      es: "Ciencia de materiales para reutilizar el agua de retorno y producida a escala",
    },
  },
];
