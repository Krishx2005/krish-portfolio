import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import GitHubGraph from "./components/GitHubGraph";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CursorSpotlight from "./components/CursorSpotlight";
import Confetti from "./components/Confetti";
import useKonamiCode from "./hooks/useKonamiCode";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const konamiActivated = useKonamiCode();

  return (
    <>
      <ScrollProgress />
      <CursorSpotlight />
      {konamiActivated && <Confetti />}
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <GitHubGraph username="Krishx2005" />
        <Footer />
      </main>
      <BackToTop />
      <Analytics />
    </>
  );
}
