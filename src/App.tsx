import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ExecutiveSummary } from "./components/ExecutiveSummary";
import { CorpusOverview } from "./components/CorpusOverview";
import { NLPAnalysis } from "./components/NLPAnalysis";
import { Findings } from "./components/Findings";
import { CaseStudyMap } from "./components/CaseStudyMap";
import { Sources } from "./components/Sources";
import { Methodology } from "./components/Methodology";
import { Reproducibility } from "./components/Reproducibility";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-plane">
      <Header />
      <main>
        <Hero />
        <ExecutiveSummary />
        <CorpusOverview />
        <NLPAnalysis />
        <Findings />
        <CaseStudyMap />
        <Sources />
        <Methodology />
        <Reproducibility />
      </main>
      <Footer />
    </div>
  );
}
