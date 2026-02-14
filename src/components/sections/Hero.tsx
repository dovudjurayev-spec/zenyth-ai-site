const navItems = [
  { label: "Home", href: "#home" },
  { label: "Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" }
] as const;

const logoSrc = "/brand/zenyth-logo.svg";
const heroObjectSrc = "/hero/blue-object.png";

const Hero = () => {
  return (
    <section id="home" className="hero-editorial relative isolate min-h-screen overflow-hidden">
      <div className="hero-cold-layer hero-cold-layer-a" aria-hidden="true" />
      <div className="hero-cold-layer hero-cold-layer-b" aria-hidden="true" />
      <div className="hero-cold-layer hero-cold-layer-c" aria-hidden="true" />

      <div className="site-container relative flex min-h-screen flex-col">
        <header className="flex items-center justify-between gap-10 pt-8 sm:pt-10">
          <a href="#home" className="-ml-2 inline-flex items-center sm:-ml-3">
            <img
              src={logoSrc}
              alt="Zenyth.ai"
              className="h-auto w-[6.3rem] sm:w-[7.6rem]"
              loading="eager"
              decoding="async"
            />
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-10 text-sm text-white/72 sm:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-split-grid flex-1 items-center pb-10 pt-14 sm:pt-18 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-8 lg:pb-12 lg:pt-10">
          <div className="max-w-3xl lg:pr-6">
            <h1 className="ttl-reveal block max-w-[18ch] font-heading text-4xl font-semibold leading-[0.97] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.8rem]">
              The structured alternative to scrolling.
            </h1>
            <p className="ttl-reveal ttl-delay-1 mt-8 max-w-3xl text-base leading-relaxed text-white/78 sm:text-2xl">
              Replacing passive screen time with structured real-world sessions.
            </p>
            <a href="#contact" className="ttl-reveal ttl-delay-2 hero-editorial-cta mt-11 inline-flex items-center justify-center px-8 py-4">
              Contact Us
            </a>
          </div>

          <div className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
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
