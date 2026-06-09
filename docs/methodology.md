# Methodology

## 1. Text extraction

- Tool: PyMuPDF (`fitz`)
- Extraction mode: `page.get_text("text")` — preserves reading order
- Section detection: regex on numbered headers (`1. Introduction`, `2. Methods`, etc.)
- Noise removed: URLs, inline citations `(Author et al., YYYY)`, page numbers, `Electronic copy available at:...`

## 2. Figure extraction

- Tool: `page.get_images(full=True)` + `doc.extract_image(xref)`
- Filter: images < 5 KB discarded (icons, logos)
- Saved as: `data/figures/<paper_slug>/fig_p<page>_<index>.<ext>`
- Index: `outputs/figures_index.csv` (paper_id, page, size_kb, file path)

## 3. Lemmatization

- Model: spaCy `en_core_web_sm` (or `en_core_web_lg` for higher accuracy)
- Language: English (all 4 papers are in English)
- POS kept: NOUN, VERB, ADJ, ADV, PROPN
- Stopwords: spaCy default English stopwords
- Min token length: 3 characters

## 4. Corpus structure

Each paper produces a CSV with columns:
- `paper_id` — P01–P04
- `page` — page number in original PDF
- `section` — detected section header
- `text` — original extracted text (cleaned)
- `text_clean` — additional cleaning (citations removed)
- `lemmas_full` — all tokens lemmatized
- `lemmas_useful` — only content-bearing lemmas
- `n_tokens` — token count per page

## 5. Metadata extraction

From PDF internal metadata + first-page parsing:
- Title, authors (from `doc.metadata`)
- Abstract (regex between "Abstract" and "Keywords" / "1 Introduction")
- Keywords (regex on "Keywords—")

## 6. Limitations

- Section detection works best for standard academic structure; may miss subsections
- Citation removal regex is heuristic — some inline references may remain
- Figures extracted are raster images; no OCR on figure captions beyond page text
- `en_core_web_sm` has lower NER accuracy than `en_core_web_lg`
