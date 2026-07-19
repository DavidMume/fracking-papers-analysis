export const corpusTotals = {
  papers: 4,
  pages: 96,
  tokens: 71086,
  vocab: 4800,
  vocabApprox: true,
  figures: 26,
  yearRange: "2021–2025",
};

export const corpusByPaper = [
  { id: "P01", pages: 38, tokens: 16240, vocab: 2178, figures: 2 },
  { id: "P02", pages: 18, tokens: 13215, vocab: 2008, figures: 6 },
  { id: "P03", pages: 17, tokens: 16041, vocab: 2012, figures: 6 },
  { id: "P04", pages: 23, tokens: 25590, vocab: 2523, figures: 12 },
];

// Independently documented flowback/produced-water recovery ranges, one per paper.
export const recoveryRateRanges = [
  { paperId: "P02", label: "P02", min: 15, max: 35 },
  { paperId: "P03", label: "P03", min: 10, max: 50 },
];
