# Fracking & UOGD — Academic Paper Analysis

> **NLP · Text Mining · Environmental Economics**  
> David Muñoz · 2026

---

## Papers analyzed

| ID | Title | Journal | Year | Pages | Figures |
|---|---|---|---|---|---|
| P01 | Economic, Environmental, and Health Impacts of the Fracking Boom | SSRN Working Paper | 2021 | 38 | 2 |
| P02 | Environmental Implications of Shale Gas Hydraulic Fracturing | Water (MDPI) | 2023 | 18 | 6 |
| P03 | Review of the environmental and health risks of hydraulic fracturing | Heliyon | 2024 | 17 | 6 |
| P04 | Towards sustainable oil/gas fracking by reusing its process water | J. Petroleum Science & Engineering | 2022 | 23 | 12 |

**Total corpus:** 96 pages · 71,086 tokens · 26 figures extracted

---

## What this repo does

1. **Extracts** full text + all embedded figures from each PDF
2. **Cleans** noise: headers, footers, inline citations, URLs
3. **Lemmatizes** with spaCy (English) — keeps nouns, verbs, adjectives
4. **Saves** flat text files and structured CSVs ready for NLP
5. **Compares** vocabulary, topics and framing across papers

---

## Repository structure

```
fracking-papers-analysis/
├── scripts/
│   ├── extract_lemmatize.py   ← main pipeline (text + images)
│   └── analyze.py             ← coming: frequency, topics, networks
├── notebooks/
│   └── 01_exploration.ipynb   ← coming
├── graficos/
│   ├── frecuencias/
│   ├── tematico/
│   └── comparativo/
├── docs/
│   └── methodology.md
└── outputs/                   ← generated locally (gitignored)
    ├── papers_metadata.csv
    ├── figures_index.csv
    └── corpus_summary.csv
```

> `data/` and `outputs/` are gitignored — run the script locally to generate them.

---

## Pipeline output (per paper)

| File | Description |
|---|---|
| `data/raw/<slug>_raw.txt` | Raw extracted text, page by page |
| `data/processed/<slug>_clean.txt` | Cleaned text (no citations, URLs, noise) |
| `data/processed/<slug>_lemmas.txt` | Flat lemmatized text (useful POS only) |
| `data/processed/<slug>_corpus.csv` | Table: page · section · text · lemmas · n_tokens |
| `data/figures/<slug>/` | All figures extracted from the PDF |

---

## Key themes across papers

- **Environmental impacts:** air quality, water contamination, groundwater, seismicity
- **Health outcomes:** birth weight, preterm birth, asthma, mental health
- **Economic impacts:** employment, income, housing prices, royalties
- **Water management:** wastewater, hydraulic fracturing fluid reuse, scarcity
- **Environmental justice:** distributional effects on minority/low-income communities

---

## How to run

```bash
git clone https://github.com/DavidMume/fracking-papers-analysis.git
cd fracking-papers-analysis

pip install pymupdf spacy pandas pillow
python -m spacy download en_core_web_sm
# For better accuracy:
python -m spacy download en_core_web_lg

# Put the 4 PDFs in C:/Users/David.Munoz/Downloads/ (or edit path in script)
python scripts/extract_lemmatize.py
```

---

## Corpus summary

| Paper | Pages | Paragraphs | Tokens | Vocab (lemmas) | Figures |
|---|---|---|---|---|---|
| P01 — Fracking Boom Review | 38 | 38 | 16,240 | 2,178 | 2 |
| P02 — Water (MDPI) | 18 | 18 | 13,215 | 2,008 | 6 |
| P03 — Heliyon 2024 | 17 | 17 | 16,041 | 2,012 | 6 |
| P04 — Petroleum Science | 23 | 23 | 25,590 | 2,523 | 12 |
| **Total** | **96** | **96** | **71,086** | **~4,800** | **26** |
