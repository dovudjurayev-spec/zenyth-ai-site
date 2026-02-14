import Section from "../layout/Section";
import { approachPoints } from "../../content/siteContent";

const OurApproach = () => {
  return (
    <Section
      id="approach"
      eyebrow="Intervention Model"
      title="Our Approach"
      subtitle="Behavioral substitution instead of restriction."
      className="py-36 sm:py-40"
      titleClassName="text-5xl sm:text-6xl lg:text-7xl"
      contentClassName="space-y-8"
    >
      <p className="max-w-[20ch] font-heading text-5xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl">
        Replace the habit loop, do not fight it.
      </p>
      <ul className="grid gap-y-6 text-white/80 sm:grid-cols-2 sm:gap-x-12">
        {approachPoints.map((item) => (
          <li key={item} className="glass-item text-base leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default OurApproach;
