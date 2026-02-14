import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
}>;

const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  className = "",
  contentClassName = "",
  headerClassName = "",
  titleClassName = "",
  children
}: SectionProps) => {
  return (
    <section id={id} className={`section-space relative ${className}`}>
      <div className="site-container">
        <div className="section-shell">
          <header className={`ttl-reveal mb-14 max-w-prose ${headerClassName}`}>
            {eyebrow ? (
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-white/55">{eyebrow}</p>
            ) : null}
            <h2 className={`type-section leading-tight text-white ${titleClassName}`}>{title}</h2>
            {subtitle ? <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p> : null}
          </header>
          <div className={`ttl-reveal ttl-delay-1 section-content-shell ${contentClassName}`}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Section;
