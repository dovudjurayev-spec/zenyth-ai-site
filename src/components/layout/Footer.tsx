const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" }
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08]">
      <div className="site-container flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/40">
          &copy; {year} Zenyth.ai. All rights reserved.
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
