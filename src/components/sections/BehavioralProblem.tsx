import Section from "../layout/Section";
import { behavioralProblem } from "../../content/siteContent";

const BehavioralProblem = () => {
  return (
    <Section
      id="problem"
      eyebrow="Behavioral Foundation"
      title={<>The Behavioral <em>Problem</em></>}
      subtitle="The failure is not awareness. The failure is what happens in the exact moment attention shifts."
      className="pt-20 lg:pt-24"
      contentClassName="grid gap-12 lg:grid-cols-2 lg:items-start"
      glow
    >
      <article className="relative max-w-[34ch]">
        <p className="eyebrow-label">Core Tension</p>
        <p className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Attention defaults to the easiest loop when no structured substitute exists.
        </p>
      </article>
      <div className="flex flex-col gap-4">
        {behavioralProblem.map((item, index) => (
          <article key={item} className="glass-item flex flex-col gap-2">
            <p className="eyebrow-label">Signal 0{index + 1}</p>
            <p className="text-base leading-relaxed text-white/90">{item}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default BehavioralProblem;
