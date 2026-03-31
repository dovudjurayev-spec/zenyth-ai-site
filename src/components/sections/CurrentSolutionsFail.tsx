import Section from "../layout/Section";
import { solutionFailures } from "../../content/siteContent";

const CurrentSolutionsFail = () => {
  return (
    <Section
      title={<>Why Current Solutions <em>Fail</em></>}
      subtitle="Restriction-only mechanics create friction but fail to build durable replacement behavior."
      className="py-28 sm:py-32"
      contentClassName="max-w-prose"
    >
      <ol className="flex flex-col gap-3">
        {solutionFailures.map((item, index) => (
          <li key={item} className="glass-item grid items-center gap-4 sm:grid-cols-[3rem_1fr] !py-4">
            <span className="text-sm font-medium tracking-wider" style={{ color: "rgba(59, 130, 246, 0.6)" }}>0{index + 1}</span>
            <p className="m-0 leading-snug text-white/70">{item}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default CurrentSolutionsFail;
