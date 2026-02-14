import Section from "../layout/Section";
import { mvpValidation } from "../../content/siteContent";

const MvpValidation = () => {
  return (
    <Section
      title="MVP & Validation"
      subtitle="Validation is tied to real behavior: retention, return intent, and completion consistency."
      className="py-24 sm:py-28"
      contentClassName="grid gap-14 lg:grid-cols-[1fr_0.9fr]"
    >
      <ul className="space-y-7">
        {mvpValidation.map((item) => (
          <li key={item} className="glass-item muted-copy">
            {item}
          </li>
        ))}
      </ul>
      <aside className="glass-item max-w-[28ch] lg:justify-self-end">
        <p className="text-xs uppercase tracking-[0.16em] text-white/45">Validation Cycle</p>
        <p className="mt-4 font-heading text-5xl font-semibold leading-none tracking-tight text-white">2-4 weeks</p>
        <p className="mt-5 text-sm leading-relaxed text-white/65">
          Short iteration windows allow fast model adjustment without losing signal quality across cohorts.
        </p>
      </aside>
    </Section>
  );
};

export default MvpValidation;
