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

const App = () => {
  return (
    <div className="min-h-screen bg-page">
      <main>
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
      </main>
    </div>
  );
};

export default App;
