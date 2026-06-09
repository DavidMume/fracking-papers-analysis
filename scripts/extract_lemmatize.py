"""
extract_lemmatize.py
====================
Pipeline completo para los 4 papers académicos sobre fracking / UOGD:

1. Extrae texto plano por página y sección
2. Extrae TODAS las figuras/imágenes embebidas en el PDF
3. Limpia el texto (headers, footers, referencias inline)
4. Lematiza con spaCy (inglés — los papers son en inglés)
5. Extrae metadatos: título, autores, año, abstract, keywords
6. Guarda:
   - data/raw/<slug>_raw.txt          texto crudo por página
   - data/processed/<slug>_clean.txt  texto limpio
   - data/processed/<slug>_lemmas.txt lemas útiles planos
   - data/processed/<slug>_corpus.csv tabla: page|section|text|lemmas|n_tokens
   - data/figures/<slug>/fig_p<N>_<i>.png  imágenes extraídas
   - outputs/papers_metadata.csv      tabla resumen de todos los papers

Uso:
    python scripts/extract_lemmatize.py

Requisitos:
    pip install pymupdf spacy pandas pillow
    python -m spacy download en_core_web_sm
"""

import re
import os
import sys
import json
import csv
from pathlib import Path

import fitz          # PyMuPDF
import pandas as pd
import spacy

# ── configuración ──────────────────────────────────────────────────────────────
DOWNLOADS = Path("C:/Users/David.Munoz/Downloads")

PAPERS = [
    {
        "id":    "P01",
        "file":  "ssrn-3780721.pdf",
        "title": "Economic, Environmental, and Health Impacts of the Fracking Boom",
        "authors": "Black, Boslett, Hill, Ma, McCoy",
        "year":  2021,
        "journal": "SSRN Working Paper",
        "topic": "Review — UOGD economic, environmental and health impacts",
    },
    {
        "id":    "P02",
        "file":  "water-15-03334.pdf",
        "title": "TBD — water-15-03334",
        "authors": "TBD",
        "year":  None,
        "journal": "Water (MDPI)",
        "topic": "Water and fracking",
    },
    {
        "id":    "P03",
        "file":  "1-s2.0-S2405844024169149-main2.pdf",
        "title": "TBD — Heliyon",
        "authors": "TBD",
        "year":  2024,
        "journal": "Heliyon",
        "topic": "TBD",
    },
    {
        "id":    "P04",
        "file":  "1-s2.0-S0920410522003084-main.pdf",
        "title": "TBD — Journal of Petroleum Science",
        "authors": "TBD",
        "year":  2022,
        "journal": "Journal of Petroleum Science and Engineering",
        "topic": "TBD",
    },
]

ROOT      = Path(__file__).resolve().parent.parent
RAW_DIR   = ROOT / "data" / "raw"
PROC_DIR  = ROOT / "data" / "processed"
FIG_DIR   = ROOT / "data" / "figures"
OUT_DIR   = ROOT / "outputs"

for d in [RAW_DIR, PROC_DIR, OUT_DIR]:
    d.mkdir(parents=True, exist_ok=True)

# ── cargar modelo spaCy (inglés) ───────────────────────────────────────────────
MODEL = "en_core_web_lg"
try:
    nlp = spacy.load(MODEL)
    print(f"Model: {MODEL}")
except OSError:
    MODEL = "en_core_web_sm"
    try:
        nlp = spacy.load(MODEL)
        print(f"Model: {MODEL} (install en_core_web_lg for better accuracy)")
    except OSError:
        print("Installing en_core_web_sm...")
        os.system("python -m spacy download en_core_web_sm")
        nlp = spacy.load("en_core_web_sm")

nlp.max_length = 3_000_000

# ── utilidades de limpieza ─────────────────────────────────────────────────────
NOISE_PATTERNS = [
    r"Electronic copy available at:.*",
    r"https?://\S+",
    r"^\s*\d+\s*$",                        # números de página solos
    r"^[-–—]{3,}$",                        # líneas de separación
    r"^\s*(Figure|Table|Fig\.)\s+\d+[:.]", # caption en línea propia corta
    r"Working Paper$",
    r"^\s*\d+\s*/\s*\d+\s*$",             # N/M
]

SECTION_HEADERS = re.compile(
    r"^\s*(\d+\.?\d*\.?\d*)\s+(Introduction|Background|Method|Result|Discussion"
    r"|Conclusion|Reference|Abstract|Data|Model|Literature|Review"
    r"|Environment|Health|Economic|Water|Energy|Migration|Education"
    r"|Labor|Income|Agriculture|Welfare|Appendix)",
    re.IGNORECASE,
)

def clean_line(line: str) -> str:
    for pat in NOISE_PATTERNS:
        line = re.sub(pat, "", line, flags=re.IGNORECASE | re.MULTILINE)
    return re.sub(r"\s{2,}", " ", line).strip()

def detect_section(line: str) -> str | None:
    m = SECTION_HEADERS.match(line)
    return m.group(0).strip() if m else None

# ── lematización ──────────────────────────────────────────────────────────────
POS_KEEP = {"NOUN", "VERB", "ADJ", "ADV", "PROPN"}

def lemmatize(text: str) -> tuple[str, str, int]:
    """Retorna (lemas_completos, lemas_útiles, n_tokens)."""
    if len(text) > 90_000:
        chunks = [text[i:i+85_000] for i in range(0, len(text), 85_000)]
        docs = list(nlp.pipe(chunks))
    else:
        docs = [nlp(text)]

    full, useful = [], []
    n_tok = 0
    for doc in docs:
        for t in doc:
            n_tok += 1
            if not t.is_space:
                full.append(t.lemma_.lower())
            if (t.pos_ in POS_KEEP
                    and not t.is_stop
                    and not t.is_punct
                    and len(t.lemma_) > 2):
                useful.append(t.lemma_.lower())

    return " ".join(full), " ".join(useful), n_tok

# ── extracción de imágenes ─────────────────────────────────────────────────────
MIN_IMG_SIZE = 5_000  # bytes — descartar íconos y logos pequeños

def extract_images(doc: fitz.Document, paper_id: str, slug: str) -> list[dict]:
    """Extrae todas las imágenes del PDF y las guarda en data/figures/<slug>/"""
    img_dir = FIG_DIR / slug
    img_dir.mkdir(parents=True, exist_ok=True)
    saved = []

    for page_num, page in enumerate(doc, start=1):
        img_list = page.get_images(full=True)
        for img_idx, img_info in enumerate(img_list):
            xref = img_info[0]
            try:
                base_img  = doc.extract_image(xref)
                img_bytes = base_img["image"]
                img_ext   = base_img["ext"]

                if len(img_bytes) < MIN_IMG_SIZE:
                    continue  # descartar imágenes triviales (íconos, logos)

                fname = f"{slug}_p{page_num:03d}_img{img_idx+1:02d}.{img_ext}"
                fpath = img_dir / fname
                fpath.write_bytes(img_bytes)

                saved.append({
                    "paper_id":  paper_id,
                    "page":      page_num,
                    "img_index": img_idx + 1,
                    "file":      str(fpath.relative_to(ROOT)),
                    "size_kb":   round(len(img_bytes) / 1024, 1),
                    "ext":       img_ext,
                })
            except Exception as e:
                print(f"    [img err] p{page_num} idx{img_idx}: {e}")

    return saved

# ── extracción de metadatos del PDF ───────────────────────────────────────────
def extract_metadata(doc: fitz.Document, paper_cfg: dict) -> dict:
    """Intenta extraer título, autores y abstract del texto de las primeras páginas."""
    meta = doc.metadata or {}
    first_pages = " ".join(
        doc[i].get_text("text") for i in range(min(3, len(doc)))
    )

    # Abstract
    abstract_match = re.search(
        r"Abstract\s*\n([\s\S]{100,1500?})\n(?:Keywords|1\s+Introduction|Introduction)",
        first_pages, re.IGNORECASE
    )
    abstract = abstract_match.group(1).replace("\n", " ").strip() if abstract_match else ""

    # Keywords
    kw_match = re.search(
        r"Keywords?[—–-]?\s*([^\n]{10,300})", first_pages, re.IGNORECASE
    )
    keywords = kw_match.group(1).strip() if kw_match else ""

    return {
        "id":       paper_cfg["id"],
        "file":     paper_cfg["file"],
        "title":    meta.get("title") or paper_cfg["title"],
        "authors":  meta.get("author") or paper_cfg["authors"],
        "year":     paper_cfg["year"],
        "journal":  paper_cfg["journal"],
        "topic":    paper_cfg["topic"],
        "abstract": abstract[:500],
        "keywords": keywords[:300],
        "n_pages":  len(doc),
    }

# ══════════════════════════════════════════════════════════════════════════════
# PIPELINE PRINCIPAL
# ══════════════════════════════════════════════════════════════════════════════

all_meta   = []
all_images = []
summary    = []

for cfg in PAPERS:
    pdf_path = DOWNLOADS / cfg["file"]
    if not pdf_path.exists():
        print(f"\n[!] Not found: {pdf_path}")
        continue

    slug = re.sub(r"[^a-z0-9]", "_", cfg["file"].lower().replace(".pdf", ""))[:35]
    print(f"\n{'='*65}")
    print(f"Processing [{cfg['id']}]: {cfg['file'][:55]}")
    print(f"{'='*65}")

    doc = fitz.open(pdf_path)

    # ── 1. Metadatos ──────────────────────────────────────────────────────────
    print("  [1/5] Extracting metadata...")
    meta = extract_metadata(doc, cfg)
    all_meta.append(meta)
    print(f"        Title:   {meta['title'][:60]}")
    print(f"        Pages:   {meta['n_pages']}")

    # ── 2. Extracción de imágenes ─────────────────────────────────────────────
    print("  [2/5] Extracting figures/images...")
    imgs = extract_images(doc, cfg["id"], slug)
    all_images.extend(imgs)
    print(f"        Figures saved: {len(imgs)}")

    # ── 3. Extracción de texto por página ──────────────────────────────────────
    print("  [3/5] Extracting text...")
    records = []
    current_section = "Introduction"

    for page_num, page in enumerate(doc, start=1):
        raw_text = page.get_text("text")
        lines    = raw_text.split("\n")
        clean_lines = []

        for line in lines:
            sec = detect_section(line)
            if sec:
                current_section = sec
            cl = clean_line(line)
            if cl:
                clean_lines.append(cl)

        paragraph = " ".join(clean_lines)
        if len(paragraph) > 60:
            records.append({
                "paper_id":  cfg["id"],
                "file":      cfg["file"],
                "page":      page_num,
                "section":   current_section,
                "text":      paragraph,
            })

    doc.close()

    # Guardar raw
    raw_text_full = "\n\n".join(r["text"] for r in records)
    (RAW_DIR / f"{slug}_raw.txt").write_text(raw_text_full, encoding="utf-8")

    # ── 4. Limpieza ────────────────────────────────────────────────────────────
    print("  [4/5] Cleaning text...")
    for r in records:
        t = r["text"]
        t = re.sub(r"\b(doi|DOI|arXiv|SSRN)\s*[:\.]?\s*\S+", "", t)
        t = re.sub(r"\([A-Z][a-z]+ et al\.\,?\s*\d{4}\w?\)", "", t)
        t = re.sub(r"\([A-Z][a-z]+\s*\&?\s*[A-Z]?[a-z]*,?\s*\d{4}\w?\)", "", t)
        t = re.sub(r"\s{2,}", " ", t).strip()
        r["text_clean"] = t

    clean_text_full = "\n\n".join(r["text_clean"] for r in records)
    (PROC_DIR / f"{slug}_clean.txt").write_text(clean_text_full, encoding="utf-8")

    # ── 5. Lematización ────────────────────────────────────────────────────────
    print("  [5/5] Lemmatizing (English)...")
    for r in records:
        lf, lu, nt = lemmatize(r["text_clean"])
        r["lemmas_full"]   = lf
        r["lemmas_useful"] = lu
        r["n_tokens"]      = nt

    lemma_text = "\n\n".join(r["lemmas_useful"] for r in records)
    (PROC_DIR / f"{slug}_lemmas.txt").write_text(lemma_text, encoding="utf-8")

    # CSV
    df = pd.DataFrame([{
        "paper_id":     r["paper_id"],
        "file":         r["file"],
        "page":         r["page"],
        "section":      r["section"],
        "text":         r["text"],
        "text_clean":   r["text_clean"],
        "lemmas_full":  r["lemmas_full"],
        "lemmas_useful":r["lemmas_useful"],
        "n_tokens":     r["n_tokens"],
    } for r in records])
    df.to_csv(PROC_DIR / f"{slug}_corpus.csv", index=False, encoding="utf-8-sig")

    total_tokens = df["n_tokens"].sum()
    vocab = len(set(" ".join(df["lemmas_useful"]).split()))
    print(f"\n  Summary [{cfg['id']}]:")
    print(f"    Pages      : {meta['n_pages']}")
    print(f"    Paragraphs : {len(records)}")
    print(f"    Tokens     : {total_tokens:,}")
    print(f"    Vocab      : {vocab:,} lemmas")
    print(f"    Figures    : {len(imgs)}")

    summary.append({
        "id":         cfg["id"],
        "file":       cfg["file"],
        "pages":      meta["n_pages"],
        "paragraphs": len(records),
        "tokens":     int(total_tokens),
        "vocab":      vocab,
        "figures":    len(imgs),
    })

# ── Guardar metadatos y figuras ───────────────────────────────────────────────
pd.DataFrame(all_meta).to_csv(
    OUT_DIR / "papers_metadata.csv", index=False, encoding="utf-8-sig"
)
pd.DataFrame(all_images).to_csv(
    OUT_DIR / "figures_index.csv", index=False, encoding="utf-8-sig"
)
pd.DataFrame(summary).to_csv(
    OUT_DIR / "corpus_summary.csv", index=False, encoding="utf-8-sig"
)

print(f"\n{'='*65}")
print("FINAL SUMMARY")
print(f"{'='*65}")
print(pd.DataFrame(summary).to_string(index=False))
total_figs = sum(s["figures"] for s in summary)
print(f"\nTotal figures extracted: {total_figs}")
print(f"\nOutputs saved to:")
print(f"  data/raw/       — raw text per paper")
print(f"  data/processed/ — clean text, lemmas, CSV corpus")
print(f"  data/figures/   — all extracted figures by paper")
print(f"  outputs/        — metadata, figure index, summary CSV")
print(f"\nTo improve lemmatization accuracy:")
print(f"  python -m spacy download en_core_web_lg")
