import Section from "../layout/Section";
import { solutionFailures } from "../../content/siteContent";

const CurrentSolutionsFail = () => {
  return (
    <Section
      title="Why Current Solutions Fail"
      subtitle="Restriction-only mechanics create friction but fail to build durable replacement behavior."
      className="py-28 sm:py-32"
      contentClassName="max-w-prose"
    >
      <ol className="space-y-8">
        {solutionFailures.map((item, index) => (
          <li key={item} className="glass-item grid gap-2 sm:grid-cols-[5rem_1fr]">
            <span className="text-sm text-white/45">0{index + 1}</span>
            <p className="muted-copy">{item}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default CurrentSolutionsFail;
