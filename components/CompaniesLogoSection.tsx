export default function CompaniesLogoSection() {
  const companies = [
    { name: "Bharat Innovations", href: "https://bharatinnovations.agency/" },
    { name: "RASA Framework", href: "#" },
    { name: "Samsung India", href: "#" },
    { name: "Nikon India", href: "#" },
    { name: "Burger Farm", href: "#" },
  ];

  return (
    <section className="padding-global py-16" id="companies-logos">
      <div className="container">
        <p className="section-label text-center mb-10">Associated With</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              target={company.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/90 transition-colors font-semibold tracking-widest text-sm uppercase"
            >
              {company.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
