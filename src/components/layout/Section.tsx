import type { PropsWithChildren } from "react";
import { useReveal } from "../../hooks/useReveal";

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
  const { ref, visible } = useReveal<HTMLElement>(0.12);

  return (
    <section id={id} ref={ref} className={`section-space relative ${className}`}>
      <div className="site-container">
        <div className="section-shell">
          <header
            className={`mb-14 max-w-prose transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            } ${headerClassName}`}
          >
            {eyebrow ? (
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-white/55">{eyebrow}</p>
            ) : null}
            <h2 className={`type-section leading-tight text-white ${titleClassName}`}>{title}</h2>
            {subtitle ? <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p> : null}
          </header>
          <div
            className={`section-content-shell transition-all duration-700 ease-out delay-150 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            } ${contentClassName}`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
