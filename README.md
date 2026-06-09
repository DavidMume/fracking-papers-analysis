# Fracking & UOGD — Academic Paper Analysis

> **NLP · Text Mining · Environmental Economics**  
> David Muñoz · 2026

---

## Papers analyzed

| ID | Authors | Title | Journal | Year |
|---|---|---|---|---|
| P01 | Black, Boslett, Hill, Ma, McCoy | Economic, Environmental, and Health Impacts of the Fracking Boom | SSRN Working Paper | 2021 |
| P02 | Hwang, Heo, Lim, Park | Environmental Implications of Shale Gas Hydraulic Fracturing | *Water* (MDPI) | 2023 |
| P03 | Makki, Maalouf, Yehya | Review of the environmental and health risks of hydraulic fracturing fluids | *Heliyon* | 2025 |
| P04 | Zhang et al. | Towards sustainable oil/gas fracking by reusing its process water | *J. Petroleum Science & Engineering* | 2022 |

**Total corpus:** 96 pages · 71,086 tokens · 26 figures extracted

---

## How to run

```bash
git clone https://github.com/DavidMume/fracking-papers-analysis.git
cd fracking-papers-analysis
pip install pymupdf spacy pandas pillow
python -m spacy download en_core_web_sm
python scripts/extract_lemmatize.py
```

---

---

# P01 — Economic, Environmental, and Health Impacts of the Fracking Boom

**Authors:** Katie Black · Andy Boslett · Elaine Hill · Lala Ma · Shawn J. McCoy  
**Source:** SSRN Working Paper 3780721 · February 2021  
**Type:** Systematic literature review  
**Link:** https://ssrn.com/abstract=3780721

### What it is

A comprehensive review of the academic literature on the local economic and environmental impacts of unconventional oil and gas development (UOGD) in the United States since the shale boom. Covers research published after Mason et al. (2015), the previous benchmark review in the field.

### Main sections covered

Environment · Health · Migration · Education · Labor & Income · Agriculture · Environmental Justice · Welfare

### Key findings

**Environment**
- UOGD is the largest source of VOC emissions in the US (14% of national total)
- An additional gas well within 1 km of groundwater sources increases UOGD-related contaminants by ~1% and detection rates by 10–20% (Hill & Ma 2017, 2020)
- Coal-fired electricity generation declined >60% between 2007–2019, partly from natural gas substitution — with health benefits estimated at **$17 billion/year** (Johnsen et al. 2019)
- Cheap natural gas decreases green innovation in the medium/long run (Acemoglu et al. 2019)

**Health**
- UOGD consistently associated with reduced birth weight and preterm birth across Colorado, Pennsylvania, Texas, Oklahoma, California and British Columbia
- In utero drilling exposure increases preterm birth and low birth weight by **9–13%** (Hill & Ma 2020)
- Associations documented with asthma exacerbation, heart attacks, pneumonia and opioid mortality
- UOGD areas show increased rates of gonorrhea, traffic accidents and mental health disorders

**Labor & Income**
- UOGD boom generated ~650,000 jobs; each $1M in new production → +$80K in county wage income (Feyrer et al. 2017)
- Private UOGD royalties reached **$40 billion/year** in 2014; accounted for 70% of all personal income gains from the boom (Brown et al. 2019)
- Income gains concentrated in non-college educated men and minority workers in Texas

**Environmental Justice**
- Hispanic, African American and low-income populations disproportionately exposed to UOGD
- Local residents (non-mineral owners) received only **6.3%** of total production value in Denton, TX
- Non-local mineral owners captured **61.4%** of all royalty value

**Housing**
- Homes near drilling sell at a **9.9–16.5% discount** (Muehlenbachs et al. 2015)
- Properties with severed mineral rights show post-drilling price declines of **>30%** (Boslett et al. 2019)

### Conclusions

> *"Current economic, global, and health forces may require researchers to revisit outcomes in the face of a potential shale bust."*

The literature documents net welfare gains from consumer surplus ($48–71B/year) but substantial localized environmental and health costs. Causal inference methods (DID, IV, regression discontinuity) are increasingly critical for identifying true effects. The COVID-19 pandemic triggered a major contraction of the sector, and the boom-period literature may not generalize to bust conditions.

### Figures extracted from paper

| Figure | Description |
|---|---|
| ![Fig 1](figures/p01_fracking_boom_review/p01_fracking_boom_review_p003_img01.png) | **Fig. 1** — Yearly UOGD EconLit publication counts 2000–2020. Shows exponential growth in research output alongside the shale boom. |
| ![Fig 2](figures/p01_fracking_boom_review/p01_fracking_boom_review_p024_img01.jpeg) | **Fig. 2** — US monthly oil and gas production and wells drilled (2010–2020). Shows the 80% collapse in drilling activity in April 2020 from COVID-19. |

---

---

# P02 — Environmental Implications of Shale Gas Hydraulic Fracturing

**Authors:** Bohyun Hwang · Joonghyeok Heo · Chungwan Lim · Joonkyu Park  
**Source:** *Water* (MDPI) 2023, 15, 3334  
**Institutions:** Ohio State University · University of Texas–Permian Basin · Kongju National University · Seoil University  
**Type:** Systematic literature review  
**DOI:** 10.3390/w15193334

### What it is

A comprehensive review focused specifically on **water contamination and induced seismicity** from hydraulic fracturing in the US, covering federal reports and peer-reviewed literature up to July 2023. The hydraulic fracturing industry is projected to grow from USD 15.31B (2021) to USD 28.93B (2028) at a 9.5% CAGR.

### Main sections covered

Water Use · Groundwater Contamination · Surface Water · Soil Contamination · Induced Seismicity · Air Pollution · Remediation Technologies

### Key findings

**Water consumption**
- Average water use: **2.4 million gallons per well**
- Only **15–35%** of injected water is typically recovered at the surface
- The remaining 65–85% stays in the subsurface, raising migration and aquifer contamination risks

**Water contamination**
- Methane migration into drinking water wells documented near active fracturing sites
- Contaminants detected include: benzene, toluene, ethylbenzene, xylene (BTEX), chloride, barium, strontium and radium
- Surface spills are a primary documented pathway for soil and surface water contamination

**Induced seismicity**
- Wastewater injection wells (not fracturing itself) are the primary cause of induced seismicity
- Oklahoma experienced a 40× increase in M≥3 earthquakes between 2009–2015, coinciding with increased injection
- Seismicity risk correlated with proximity to faults, injection volume and rate

**Air pollution**
- VOC, methane, NOx and particulate matter emissions during all phases of well development
- Silica dust from proppant handling poses occupational health risks

**Remediation / best practices**
- Garfield County, Colorado: demonstrated **100% wastewater reuse** for hydraulic fracturing — cited as a model for eliminating freshwater demand
- Advances in membrane treatment, thermal distillation and electrocoagulation for FPW treatment
- Remote monitoring and real-time sensing proposed for early contamination detection

### Conclusions

> *"These findings underscore the need for stringent regulations, sustained research, and effective management practices."*

The review calls for a **collaborative approach** combining field studies, experimental research and computational modeling. The 15–35% recovery rate creates a structural uncertainty about subsurface fluid fate that current regulations do not adequately address. The Garfield County 100% reuse model is presented as a technically viable path to significantly reduce environmental impact.

### Figures extracted from paper

| Figure | Description |
|---|---|
| ![Cover](figures/p02_water_contamination_seismicity/p02_water_contamination_seismicity_p001_img03.png) | Journal / publisher logos |
| ![Fig p3](figures/p02_water_contamination_seismicity/p02_water_contamination_seismicity_p003_img01.png) | **Fig. 1** — Conceptual diagram of hydraulic fracturing water cycle: injection, flowback, produced water and disposal pathways |
| ![Fig p5](figures/p02_water_contamination_seismicity/p02_water_contamination_seismicity_p005_img01.jpeg) | **Fig. 2** — Map or diagram of contamination pathways and monitoring zones |
| ![Fig p8](figures/p02_water_contamination_seismicity/p02_water_contamination_seismicity_p008_img01.jpeg) | **Fig. 3** — Induced seismicity frequency and magnitude distribution across US shale regions |

---

---

# P03 — Review of the Environmental and Health Risks of Hydraulic Fracturing Fluids

**Authors:** Sara Makki · Elsa Maalouf · Alissar Yehya  
**Source:** *Heliyon* 11 (2025) e40883 · Published December 2024  
**Institutions:** American University of Beirut · Harvard John A. Paulson School of Engineering and Applied Sciences  
**Type:** Review article  
**DOI:** 10.1016/j.heliyon.2024.e40883

### What it is

A focused review on the **composition, toxicity, fate and risks of hydraulic fracturing (HF) fluid** — the mixture injected into wells. Unlike papers focused on geology or economics, this paper concentrates on the fluid itself: what's in it, where it goes, what it does to health and the environment, and why so little is known.

### Main sections covered

HF Fluid Composition · Toxicity · Spill Data · Flowback Ratio · Fluid Migration · Induced Seismicity · Regulatory Disclosure Gaps

### Key findings

**HF fluid composition**
- Contains hundreds of chemicals: gelling agents, friction reducers, biocides, scale inhibitors, surfactants and crosslinkers
- Many ingredients are classified as trade secrets — full disclosure is not legally required in most US states
- EPA identified **1,084 unique chemicals** used between 2005–2013; toxicity data is missing for a significant fraction

**Recovery rate (the core problem)**
- Flowback and produced water (FPW) recovery: **10–50%** of injected volume
- This means **50–90% of injected HF fluid remains in the subsurface** in some formations
- Negative correlations found between recovery rate and:
  - Shut-in period (longer shut-in → less flowback)
  - Fracture network complexity (more complex → less recovery)
  - Induced seismicity (higher seismicity → lower recovery)
- Positive correlation: faster migration speed in formations with **more permeable pathways**

**Environmental and health hazards**
- Documented aquifer contamination cases linked to FPW migration through natural or induced fractures
- High concentration of toxic chemicals + limited toxicity data = underestimated risk profile
- Probability of surface spills is high: synthesized spill data shows thousands of documented incidents

**Induced seismicity from HF fluids**
- HF fluid injection itself (not only wastewater disposal) can trigger seismicity in some conditions
- Mitigation strategy proposed: cyclic injection to reduce pressure buildup

### Conclusions

> *"The main handicap in assessing related risks is the scarcity of disclosure and monitoring data."*

The paper argues that the most urgent action is **regulatory reform on chemical disclosure**: without knowing what is being injected or where it goes, risk assessment is systematically incomplete. It calls for mandatory spill reporting, unified national databases and more peer-reviewed studies specifically examining HF fluid fate and toxicity.

### Figures extracted from paper

| Figure | Description |
|---|---|
| ![Fig p4](figures/p03_hf_fluid_risks/p03_hf_fluid_risks_p004_img01.jpeg) | **Fig. 1** — Composition breakdown of typical HF fluid: water (~90%), proppant (~9%), chemical additives (~1%) |
| ![Fig p5a](figures/p03_hf_fluid_risks/p03_hf_fluid_risks_p005_img01.jpeg) | **Fig. 2** — Schematic of HF fluid injection, flowback and subsurface migration pathways |
| ![Fig p5b](figures/p03_hf_fluid_risks/p03_hf_fluid_risks_p005_img02.jpeg) | **Fig. 3** — Factors affecting flowback ratio and fluid fate in the subsurface |
| ![Fig p7](figures/p03_hf_fluid_risks/p03_hf_fluid_risks_p007_img01.jpeg) | **Fig. 4** — Spill frequency and volume data by state/region |
| ![Fig p8](figures/p03_hf_fluid_risks/p03_hf_fluid_risks_p008_img01.jpeg) | **Fig. 5** — Correlation matrix: recovery rate vs. operational and geological parameters |

---

---

# P04 — Towards Sustainable Oil/Gas Fracking by Reusing Its Process Water

**Authors:** Yang Zhang · Jinhua Mao · Jincheng Mao · An Chen · Xiaojiang Yang · Chong Lin · Zhihong Wei · Xiaoliang Huang · Li Song · Feng Tang · Qi Jiang · Yonghao Ni  
**Source:** *Journal of Petroleum Science and Engineering* 213 (2022) 110422  
**Institutions:** Southwest Petroleum University (Chengdu, China) · University of New Brunswick (Canada) · BHDC (Renqiu, China)  
**Type:** Review article  
**DOI:** 10.1016/j.petrol.2022.110422

### What it is

A technical review addressing the **fundamental challenge of reusing flowback and produced water (FPW)** — the water that comes back out of fracking wells — as a replacement for freshwater in new fracking operations. The paper is engineering-focused: it reviews the chemistry, materials science and process design needed to make this work at scale.

### The core problem

FPW has **very high total dissolved solids (TDS)** — salts, heavy metals, organic compounds, radioactive materials — that interfere with the chemistry of fracking fluids. Standard fracking fluids fail under high-salt conditions. The paper reviews what makes a fluid salt-resistant and how to design one.

### Context

- Shale gas production in the US grew from **19.6 × 10⁸ m³ (1980) to 7,362 × 10⁸ m³ (2020)** — representing **78% of total US natural gas production in 2020**
- Global energy demand projected to grow 28% by 2045; oil and gas expected to remain >50% of the energy mix
- Water stress is a binding constraint: fracking typically requires 2–5 million gallons of fresh water per well

### Key findings

**FPW characteristics**
- TDS can range from 10,000 to over 300,000 mg/L (seawater is ~35,000 mg/L)
- Contains: barium, strontium, calcium, magnesium, chloride, bromide, NORM (naturally occurring radioactive material), dissolved organics, bacteria
- Composition varies significantly by formation, region and production age

**Technical challenges for FPW reuse**
- High salinity degrades gelling agents (guar, synthetic polymers)
- Divalent cations (Ba²⁺, Ca²⁺) cause crosslinker failure and scale deposition
- Bacteria in FPW can cause biofouling, H₂S production and polymer degradation
- Temperature resistance required for deep wells (>120°C)

**Proposed solutions**
1. **Salt-tolerant gelling agents:** grafting synthetic polymers (acrylamide-based) onto biopolymers (guar)
2. **Bio-based nano-crosslinkers:** replace traditional Zr/Ti crosslinkers with lower-toxicity alternatives
3. **Cost-effective nano-breakers:** allow polymer degradation after fracture creation without damaging the formation
4. **Friction reducers (FRs):** high-elasticity, salt-resistant polymers that maintain performance in high-TDS conditions

**Environmental and economic case**
- FPW reuse reduces freshwater withdrawal, wastewater disposal costs and injection well usage (→ less seismicity risk)
- Economic savings estimated at significant scale given >50% of injection costs relate to water logistics
- Environmental benefit: eliminates disposal pathway that drives induced seismicity

### Conclusions

> *"A new type of fracturing fluid should be developed... which will have great potential for the reuse of FPW and the development of unconventional formations."*

The paper proposes a **next-generation fracturing fluid** combining a biopolymer-synthetic polymer hybrid gelling agent, bio-based nano-crosslinkers, nano-breakers and high-performance friction reducers. This fluid should maintain performance in high-salt, high-temperature conditions while being biodegradable and cost-competitive. The authors position FPW reuse as the primary lever for making fracking sustainable — more practical and faster to implement than eliminating fracking itself.

### Figures extracted from paper

| Figure | Description |
|---|---|
| ![p2](figures/p04_process_water_reuse/p04_process_water_reuse_p002_img01.jpeg) | **Fig. 1** — US shale gas production growth 1980–2020 and comparison with other countries |
| ![p3](figures/p04_process_water_reuse/p04_process_water_reuse_p003_img01.jpeg) | **Fig. 2** — Composition and TDS range of flowback and produced water (FPW) by formation |
| ![p8](figures/p04_process_water_reuse/p04_process_water_reuse_p008_img01.jpeg) | **Fig. 3** — Salt effects on polymer gelling agent performance: viscosity vs. NaCl concentration |
| ![p11](figures/p04_process_water_reuse/p04_process_water_reuse_p011_img01.jpeg) | **Fig. 4** — Nano-crosslinker structure and mechanism for salt-resistant fracturing fluid |
| ![p13](figures/p04_process_water_reuse/p04_process_water_reuse_p013_img01.jpeg) | **Fig. 5** — Comparison of conventional vs. FPW-adapted fracturing fluid performance |
| ![p15](figures/p04_process_water_reuse/p04_process_water_reuse_p015_img01.jpeg) | **Fig. 6** — Friction reducer performance in high-TDS conditions |
| ![p16a](figures/p04_process_water_reuse/p04_process_water_reuse_p016_img01.jpeg) | **Fig. 7** — Proposed architecture of the next-generation sustainable fracturing fluid |
| ![p16b](figures/p04_process_water_reuse/p04_process_water_reuse_p016_img02.jpeg) | **Fig. 8** — Environmental and economic benefits framework for FPW reuse |
| ![p17](figures/p04_process_water_reuse/p04_process_water_reuse_p017_img01.jpeg) | **Fig. 9** — Temperature resistance of salt-tolerant polymer systems |
| ![p18](figures/p04_process_water_reuse/p04_process_water_reuse_p018_img01.jpeg) | **Fig. 10** — Roadmap for sustainable fracking water management |

---

---

# Cross-paper synthesis

## Four perspectives on the same problem

| Dimension | P01 (Economics) | P02 (Hydrology) | P03 (Chemical Eng.) | P04 (Petroleum Eng.) |
|---|---|---|---|---|
| **Focus** | Costs & benefits at community level | Water & seismicity impacts | HF fluid composition & fate | FPW reuse technology |
| **Methodology** | Quasi-experimental economics (DID, IV) | Systematic literature review | Synthesis + correlation analysis | Materials science review |
| **Water problem** | WTP to avoid contamination | 2.4M gal/well, 15–35% recovery | 10–50% recovery; migration risk | High-TDS reuse challenge |
| **Key number** | $48–71B/year welfare gain | 9.5% CAGR industry growth | 1,084 chemicals identified | 78% of US gas from shale (2020) |
| **Main concern** | Distribution of costs vs. benefits | Insufficient regulation | Disclosure gaps | Freshwater scarcity |
| **Proposed solution** | Causal research + policy design | Stringent monitoring + Garfield model | Mandatory disclosure + databases | Salt-resistant fracturing fluid |

## Convergent conclusions across papers

1. **Water is the binding constraint.** All 4 papers identify water — its consumption, contamination or reuse — as the central environmental challenge of fracking.

2. **What goes down doesn't come back.** P02 and P03 independently document that 50–90% of injected fluid stays in the subsurface, with poorly understood fate.

3. **Disclosure is systemically inadequate.** P03 documents ~1,084 chemicals injected with incomplete toxicity data. P01 shows that causal health effects remain hard to estimate precisely because of data gaps.

4. **There is a viable path to sustainability.** P02 shows 100% wastewater reuse is technically demonstrated (Garfield, CO). P04 shows the material science exists to make it work at scale. P01 shows the economic incentives are aligned (royalty income, consumer surplus) if externalities are properly priced.

5. **Environmental justice is unresolved.** P01 documents that those who bear the costs (resident non-mineral owners, minority communities) are structurally separated from those who capture the benefits (non-local mineral owners, gas companies, consumers).

---

## Repository structure

```
fracking-papers-analysis/
├── scripts/
│   └── extract_lemmatize.py   ← full pipeline: text + lemmas + figures
├── figures/                   ← 26 figures extracted from 4 PDFs
│   ├── p01_fracking_boom_review/
│   ├── p02_water_contamination_seismicity/
│   ├── p03_hf_fluid_risks/
│   └── p04_process_water_reuse/
├── docs/
│   └── methodology.md
└── outputs/                   ← gitignored, generated locally
```

| Paper | Pages | Tokens | Lemmas vocab | Figures |
|---|---|---|---|---|
| P01 | 38 | 16,240 | 2,178 | 2 |
| P02 | 18 | 13,215 | 2,008 | 6 |
| P03 | 17 | 16,041 | 2,012 | 6 |
| P04 | 23 | 25,590 | 2,523 | 12 |
| **Total** | **96** | **71,086** | **~4,800** | **26** |
