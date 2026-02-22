import Section from "../layout/Section";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Contact Us"
      className="pb-24 sm:pb-28 lg:pb-32"
      contentClassName="max-w-prose"
    >
      <address className="not-italic">
        <ul className="space-y-10 text-base sm:text-lg">
          <li className="glass-item">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Phone</p>
            <a href="tel:+998901675004" className="mt-3 inline-block text-2xl text-white transition-opacity hover:opacity-70 sm:text-3xl">
              +998 90 167 50 04
            </a>
          </li>
          <li className="glass-item">
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Email</p>
            <a
              href="mailto:info@zenyth.ink"
              className="mt-3 inline-block break-all text-2xl text-white transition-opacity hover:opacity-70 sm:text-3xl"
            >
              info@zenyth.ink
            </a>
          </li>
        </ul>
      </address>
    </Section>
  );
};

export default Contact;
