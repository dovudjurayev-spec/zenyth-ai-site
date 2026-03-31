import type { PropsWithChildren, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

type SectionProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  noDivider?: boolean;
  glow?: boolean;
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
  noDivider = false,
  glow = false,
  children
}: SectionProps) => {
  const { ref, visible } = useReveal<HTMLElement>(0.12);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-space relative ${noDivider ? "" : "section-divider"} ${className}`}
    >
      {glow && (
        <div
          className="ambient-glow"
          style={{ width: 600, height: 600, left: "50%", top: "40%", transform: "translate(-50%, -50%)" }}
          aria-hidden="true"
        />
      )}
      <div className="site-container relative">
        <header
          className={`mb-14 max-w-prose transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          } ${headerClassName}`}
        >
          {eyebrow ? (
            <p className="eyebrow-label mb-5">{eyebrow}</p>
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
    </section>
  );
};

export default Section;
