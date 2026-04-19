import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    name: "IAG Media",
    logo: "/images/659c5beb594aac8e95481ea4_IAG-Media_Transparent_Black.webp",
    href: "https://iag-media.com/",
  },
  {
    name: "BIG DAY",
    logo: "/images/6744b02e2096c8eab93d2eee_66c5f719b7478d2549d26a5e_BIG_DAY_LOGO_1.svg",
    href: "#",
  },
  {
    name: "GrowYourAgency",
    logo: "/images/659c69877ac5265f1cbb1548_GYA LOGO WHITE.webp",
    href: "https://www.growyouragency.com/",
  },
  {
    name: "Flozy",
    logo: "/images/659c6987495e67aa862475a6_Flozy Logo white.webp",
    href: "#",
  },
  {
    name: "GADZHI",
    logo: "/images/659c698743da66be678da576_BW TYPEFACE 2.webp",
    href: "https://www.gadzhi.com/password",
  },
  {
    name: "Educate",
    logo: "/images/6744afcc5df11db7d54404be_logo-gadzhi 1.svg",
    href: "#",
  },
];

export default function CompaniesLogoSection() {
  return (
    <section className="padding-global py-16" id="companies-logos">
      <div className="container">
        <p className="section-label text-center mb-10">Companies</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={company.href}
              target={company.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="company-logo"
                style={{ objectFit: "contain" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
