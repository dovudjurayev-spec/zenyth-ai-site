import Section from "../layout/Section";
import { workflowSteps } from "../../content/siteContent";

const mockups = [
  {
    label: "Home Screen",
    src: "/mockups/Mockup1.png",
    alt: "Zenyth Home screen mockup"
  },
  {
    label: "Tasks",
    src: "/mockups/Mockup2.png",
    alt: "Zenyth Tasks screen mockup"
  },
  {
    label: "Assistant",
    src: "/mockups/Mockup3.png",
    alt: "Zenyth Assistant screen mockup"
  },
  {
    label: "Stats",
    src: "/mockups/Mockup4.png",
    alt: "Zenyth Stats screen mockup"
  }
];

const HowItWorks = () => {
  return (
    <Section
      title={<>How It <em>Works</em></>}
      subtitle="A clear flow from onboarding to completed session. No dead ends, no ambiguity."
      contentClassName="grid items-start gap-14 lg:grid-cols-[1.02fr_0.98fr]"
    >
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
        {mockups.map((item) => (
          <figure key={item.label}>
            <img
              src={item.src}
              alt={item.alt}
              width={496}
              height={1024}
              loading="lazy"
              className="mx-auto block h-auto w-full max-w-[31rem] sm:max-w-[34rem]"
              style={{
                filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(59,130,246,0.08))"
              }}
            />
            <figcaption className="mt-5 text-center text-xs uppercase tracking-[0.12em] text-white/45">{item.label}</figcaption>
          </figure>
        ))}
      </div>
      <ol className="space-y-8">
        {workflowSteps.map((step, index) => (
          <li key={step.title} className="glass-item grid gap-2 sm:grid-cols-[5rem_1fr]">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
              style={{ background: "rgba(59,130,246,0.15)", color: "rgba(59,130,246,0.8)" }}
            >
              0{index + 1}
            </span>
            <div>
              <h3 className="type-subheading">{step.title}</h3>
              <p className="mt-3 muted-copy">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default HowItWorks;
