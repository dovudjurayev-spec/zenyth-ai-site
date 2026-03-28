import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" }
] as const;

const logoSrc = "/brand/zenyth-logo.svg";
const heroObjectSrc = "/hero/blue-object.png";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

type WaitlistStatus = "idle" | "success" | "duplicate" | "error";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);
  const isEmailValid = emailRegex.test(normalizedEmail);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmailValid || isLoading) {
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
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
    <section id="home" className="hero-editorial relative isolate min-h-screen overflow-hidden">
      <div className="hero-cold-layer hero-cold-layer-a" aria-hidden="true" />
      <div className="hero-cold-layer hero-cold-layer-b" aria-hidden="true" />
      <div className="hero-cold-layer hero-cold-layer-c" aria-hidden="true" />

      {/* Sticky header */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-page/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="site-container flex items-center justify-between gap-10 py-4 sm:py-5">
          <a href="#home" className="-ml-2 inline-flex items-center sm:-ml-3">
            <img
              src={logoSrc}
              alt="Zenyth.ai"
              className="h-auto w-[6.3rem] sm:w-[7.6rem]"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-10 text-sm text-white/72 sm:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white/70 transition-colors hover:text-white sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-white/[0.08] bg-page/95 backdrop-blur-xl sm:hidden"
          >
            <div className="site-container flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-4 py-3 text-base text-white/72 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <div className="site-container relative flex min-h-screen flex-col pt-20 sm:pt-24">
        <div className="hero-split-grid flex-1 items-center pb-10 pt-14 sm:pt-18 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-8 lg:pb-12 lg:pt-10">
          <div className="max-w-3xl lg:pr-6">
            <h1 className="ttl-reveal block max-w-[18ch] font-heading text-4xl font-semibold leading-[0.97] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.8rem]">
              The structured alternative to scrolling.
            </h1>
            <p className="ttl-reveal ttl-delay-1 mt-8 max-w-3xl text-base leading-relaxed text-white/78 sm:text-2xl">
              Replacing passive screen time with structured real-world sessions.
            </p>
            <form onSubmit={handleSubmit} className="ttl-reveal ttl-delay-2 mt-8 w-full max-w-[34rem] sm:mt-11">
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
                <p className="waitlist-status" aria-live="polite">
                  {status === "success" ? "You're on the list." : null}
                  {status === "duplicate" ? "You're already on the list." : null}
                  {status === "error" ? "Something went wrong." : null}
                </p>
              </div>
            </form>
          </div>

          <div className="hidden lg:flex mt-12 justify-center lg:mt-0 lg:justify-end">
            <div className="hero-object-shell">
              <img
                src={heroObjectSrc}
                alt="Abstract 3D blue object"
                className="hero-object-image h-auto w-[120%] max-w-none md:w-[105%] lg:w-[118%]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
