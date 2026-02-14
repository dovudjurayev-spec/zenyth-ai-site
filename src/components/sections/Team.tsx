import Section from "../layout/Section";
import { team } from "../../content/siteContent";

const Team = () => {
  return (
    <Section
      title="Team"
      subtitle="Execution-focused founding team with product, AI, and validation ownership."
      className="py-32"
    >
      <div className="grid gap-16 lg:grid-cols-2">
        {team.map((member) => (
          <article key={member.name} className="glass-item">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">{member.role}</p>
            <h3 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white">{member.name}</h3>
            <ul className="mt-7 list-disc space-y-3 pl-5 text-sm leading-relaxed text-white/75 sm:text-base">
              {member.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Team;
