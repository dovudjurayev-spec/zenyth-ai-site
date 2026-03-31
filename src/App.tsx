import Hero from "./components/sections/Hero";
import BehavioralProblem from "./components/sections/BehavioralProblem";
import CurrentSolutionsFail from "./components/sections/CurrentSolutionsFail";
import OurApproach from "./components/sections/OurApproach";
import HowItWorks from "./components/sections/HowItWorks";
import CoreSystem from "./components/sections/CoreSystem";
import MarketOpportunity from "./components/sections/MarketOpportunity";
import MvpValidation from "./components/sections/MvpValidation";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-page">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <BehavioralProblem />
        <CurrentSolutionsFail />
        <OurApproach />
        <HowItWorks />
        <CoreSystem />
        <MarketOpportunity />
        <MvpValidation />
        <Team />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
