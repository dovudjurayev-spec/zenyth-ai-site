import Section from "../layout/Section";
import { behavioralProblem } from "../../content/siteContent";

const BehavioralProblem = () => {
  return (
    <Section
      id="problem"
      eyebrow="Behavioral Foundation"
      title="The Behavioral Problem"
      subtitle="The failure is not awareness. The failure is what happens in the exact moment attention shifts."
      className="pt-20 lg:pt-24"
      contentClassName="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <article className="max-w-[34ch]">
        <p className="text-xs uppercase tracking-[0.16em] text-white/50">Core Tension</p>
        <p className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Attention defaults to the easiest loop when no structured substitute exists.
        </p>
      </article>
      <div className="space-y-7">
        {behavioralProblem.map((item, index) => (
          <article key={item} className="behavior-signal">
            <p className="text-xs uppercase tracking-[0.16em] text-white/50">Signal 0{index + 1}</p>
            <p className="mt-2 muted-copy">{item}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default BehavioralProblem;
