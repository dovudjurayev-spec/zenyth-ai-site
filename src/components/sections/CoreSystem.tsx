import Section from "../layout/Section";
import { coreSystem } from "../../content/siteContent";

const CoreSystem = () => {
  return (
    <Section
      eyebrow="System Architecture"
      title={<>Core <em>System</em></>}
      className="py-20 sm:py-24"
      contentClassName="grid gap-y-8 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3"
    >
      {coreSystem.map((item, index) => (
        <article key={item} className="glass-item">
          <p className="eyebrow-label">Module 0{index + 1}</p>
          <p className="mt-3 max-w-[30ch] text-base leading-relaxed text-white/85">{item}</p>
        </article>
      ))}
    </Section>
  );
};

export default CoreSystem;
