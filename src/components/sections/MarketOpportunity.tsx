import Section from "../layout/Section";
import { marketMetrics } from "../../content/siteContent";

const MarketOpportunity = () => {
  return (
    <Section
      title="Market Opportunity"
      subtitle="Market sizing focused on reachable adoption logic and clear revenue potential."
      className="py-36 sm:py-40"
      contentClassName="space-y-12"
    >
      <p className="max-w-[28ch] font-heading text-5xl font-semibold tracking-tight text-white sm:text-6xl">
        Market size supports institutional-scale outcomes.
      </p>
      <div className="max-w-prose space-y-7">
        <div className="glass-item">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">Thesis</p>
          <p className="mt-2 muted-copy">
          If replacement sessions convert 1% of the reachable segment, annual recurring revenue crosses $5M with
          disciplined retention.
          </p>
        </div>
      </div>
      <div className="space-y-4">
      {marketMetrics.map((metric) => (
        <article key={metric.label} className="glass-item grid gap-2 sm:grid-cols-[8rem_12rem_1fr] sm:items-baseline sm:gap-6">
          <p className="text-xs uppercase tracking-[0.16em] text-white/45">{metric.label}</p>
          <p className="type-metric leading-none">{metric.value}</p>
          <p className="text-sm text-white/65">{metric.note}</p>
        </article>
      ))}
      </div>
    </Section>
  );
};

export default MarketOpportunity;
