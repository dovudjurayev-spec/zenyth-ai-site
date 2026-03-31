import { FormEvent, useMemo, useState } from "react";
import { useReveal } from "../../hooks/useReveal";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
type WaitlistStatus = "idle" | "success" | "duplicate" | "error";

const FinalCta = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const { ref, visible } = useReveal<HTMLElement>(0.2);

  const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);
  const isEmailValid = emailRegex.test(normalizedEmail);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isEmailValid || isLoading) return;

    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail })
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else if (response.status === 409) {
        setStatus("duplicate");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background: "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)"
      }}
    >
      <div
        className={`site-container relative text-center transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Star logomark */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="mx-auto mb-6"
          aria-hidden="true"
        >
          <path
            d="M20 0L23.5 14.5L38 12L26 20L38 28L23.5 25.5L20 40L16.5 25.5L2 28L14 20L2 12L16.5 14.5L20 0Z"
            fill="#3b82f6"
            fillOpacity="0.7"
          />
        </svg>

        <h2 className="mx-auto max-w-[22ch] font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ready to replace the <em>scroll?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 sm:text-lg">
          Join the waitlist and be among the first to experience structured sessions designed around your interests.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 w-full max-w-[34rem]">
          <div className="waitlist-form-shell">
            <div className="waitlist-controls">
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus("idle");
                }}
                className="waitlist-input"
                aria-label="Email"
              />
              <button type="submit" className="waitlist-button" disabled={!isEmailValid || isLoading}>
                {isLoading ? "Joining..." : "Join Early Access"}
              </button>
            </div>
            <p className="waitlist-status text-center" aria-live="polite">
              {status === "success" ? "You\u2019re on the list." : null}
              {status === "duplicate" ? "You\u2019re already on the list." : null}
              {status === "error" ? "Something went wrong." : null}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FinalCta;
