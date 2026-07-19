# Fracking Papers Analysis

**NLP · Text Mining · Environmental Economics**
Juan David Muñoz · 2026

A bilingual (EN/ES) data-journalism website built on top of an NLP text-mining
pipeline over four academic papers on hydraulic fracturing (UOGD) — economics,
water/seismicity, chemical engineering and petroleum engineering. Live site
built with React + TypeScript + Vite + Tailwind; deployed on Cloudflare Pages.

## Project description

The repository has two parts:

1. **The pipeline** (`scripts/extract_lemmatize.py`) — extracts text, figures
   and metadata from the four source PDFs and lemmatizes the text with spaCy.
   See [`docs/methodology.md`](docs/methodology.md) for how it works.
2. **The website** (`src/`) — an editorial, bilingual data-journalism site
   that presents the corpus, the findings and a case-study map built from the
   analysis in [`docs/analysis.md`](docs/analysis.md), the full paper-by-paper
   read (English + Spanish).

## What the web page shows

- **Executive summary** — the five convergent conclusions across all four papers.
- **Corpus overview** — pages, tokens, vocabulary and figures, per paper and in total.
- **Text & NLP analysis** — what the extraction pipeline currently outputs, and
  an explicit list of what it does not yet compute (sentiment, topic modeling,
  n-grams, entities, co-occurrence — marked "pending", not invented).
- **Findings by theme** — every claim attributed to its source paper, grouped
  into environment, health, water, economy, justice/regulation and seismicity.
- **Interactive case-study map** — Leaflet map of the places named as case
  studies or empirical settings in the four papers, color-coded by theme.
- **Sources** — full bibliographic detail for all four papers with links.
- **Methodology** — collection, cleaning, NLP pipeline, limitations, and a
  next-steps list.
- **Reproducibility** — how to run the pipeline and the site locally.

Available in English and Spanish via the switch in the header; the choice is
saved to `localStorage` and the page never reloads on switch.

## Repository structure

```
fracking-papers-analysis/
├── src/
│   ├── data/              ← sources.ts, findings.ts, metrics.ts,
│   │                          caseStudies.ts, synthesis.ts
│   ├── i18n/translations.ts  ← all UI chrome text, EN + ES
│   ├── context/LanguageContext.tsx
│   └── components/        ← one component per page section
├── public/figures/        ← copy of figures/, served by the site
├── figures/                ← 26 figures extracted from the 4 source PDFs
├── docs/
│   ├── analysis.md         ← full paper-by-paper analysis (EN + ES)
│   └── methodology.md      ← pipeline methodology notes
├── scripts/
│   └── extract_lemmatize.py ← extraction + lemmatization pipeline
└── outputs/                 ← gitignored, generated locally by the pipeline
```

## How to run locally

**The website:**

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

**The extraction pipeline** (requires the original PDFs locally, not committed
for copyright reasons):

```bash
pip install pymupdf spacy pandas pillow
python -m spacy download en_core_web_sm
python scripts/extract_lemmatize.py
```

## How to edit bilingual text

- UI chrome (nav, buttons, section titles, methodology copy, footer) lives in
  `src/i18n/translations.ts` as `{ en: {...}, es: {...} }`.
- Content that varies per item (a finding, a source, a case study) carries its
  own `{ en, es }` pair inline in its data file — see `src/types.ts` → `Bilingual`.

## How to update findings

Edit `src/data/findings.ts`. Each entry is `{ id, theme, paperId, claim: { en, es } }`.
`theme` must be one of the six keys in `src/data/findings.ts` (`Theme` type) —
these drive both the Findings section grouping and the map legend/marker colors.

## How to update case studies and map data

Edit `src/data/caseStudies.ts`. Each entry needs `lat`/`lng` and a `precision`
of `"site"` (county/city-level known coordinates) or `"region"` (state/province
centroid). Coordinates should be the public, known location of the named place —
not invented precise site coordinates the source papers don't disclose.

## How to update charts

Chart-ready arrays live in `src/data/metrics.ts` (`corpusByPaper`,
`recoveryRateRanges`). The chart components themselves are
`src/components/ui/BarChart.tsx` and `src/components/ui/RangeBar.tsx` — plain
SVG/CSS, no charting library dependency.

## Data limitations

- The pipeline's raw/processed text (`data/raw/`, `data/processed/`) and the
  metadata/figure CSVs (`outputs/`) are generated locally and gitignored —
  they are not in this repository. The committed `figures/` folder and the
  content written into the site's data files are the durable, versioned
  outputs of that pipeline.
- No sentiment analysis, topic modeling, n-gram tables, named-entity
  extraction or co-occurrence network have been computed yet — the site marks
  these explicitly as "pending verification" rather than fabricating results.
- Case-study map coordinates are place-level (city/county or state/region),
  not exact well or study-site coordinates, which the source papers do not
  publish. See `src/data/caseStudies.ts` and the Methodology section on the site.

## Cloudflare Pages deployment

**Build command:**

```
npm run build
```

**Output directory:**

```
dist
```

To deploy: Cloudflare Dashboard → Pages → Create project → connect
`DavidMume/fracking-papers-analysis` → set the build command and output
directory above → Deploy.
