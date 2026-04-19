"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    id: "iag-media",
    year: "2017",
    name: "IAG Media",
    description:
      "In 2017, Iman founded IAG Media, a boutique digital marketing agency specializing in high-return-on-investment strategies, including social media marketing, sales funnel optimization, and online advertising. The agency's success prompted Gadzhi to offer mentorship lessons, leading to the online course 'Six Figure SMMA'.",
    logo: "/images/659c5edd269ee84f12c95612_iag simple.webp",
    image: "/images/659c5829379197a24aaf8ba1_web_0004_Generative Fill 29.webp",
    link: "https://iag-media.com/",
    linkLabel: "iag-media.com",
  },
  {
    id: "growyouragency",
    year: "2018",
    name: "GrowYourAgency",
    description:
      "Capitalizing on the course's success, Gadzhi established GrowYourAgency, an e-learning platform. The platform is a continuation of IAG Media. It instructs and trains novice agency owners. It helps them with initiating, sustaining, and scaling their businesses.",
    logo: "/images/659c69877ac5265f1cbb1548_GYA LOGO WHITE.webp",
    image: "/images/659c582c59fc9aa44ee132a6_web_0016_Generative Fill 11.webp",
    link: "https://www.growyouragency.com/",
    linkLabel: "growyouragency.com",
  },
  {
    id: "gadzhi",
    year: "2019",
    name: "GADZHI",
    description:
      "In 2019, Iman established GADZHI, a United Kingdom-based eyewear brand specializing in blue light-blocker glasses and a range of apparel items.",
    logo: "/images/6744afcc5df11db7d54404be_logo-gadzhi 1.svg",
    image: "/images/659c582c05e65b826d6ebc42_web_0020_Generative Fill 5.webp",
    link: "https://www.gadzhi.com/password",
    linkLabel: "gadzhi.com",
  },
  {
    id: "flozy",
    year: "2020",
    name: "Flozy",
    description:
      "Since 2020, the software solutions company has been committed to simplifying the operations of agency owners. Flozy consolidates essential tools and provides a streamlined and efficient workflow for clients, making agency operations easier than ever.",
    logo: "/images/659c5d2c92fe3b1a3a17f3ac_Flozy Logo Icon.webp",
    image: "/images/659c582cd46e8c1c9029ae3a_web_0010_Generative Fill 16.webp",
    link: "#",
    linkLabel: "flozy.com",
  },
  {
    id: "educate",
    year: "2023",
    name: "Educate.io",
    description:
      "In 2023, Gadzhi founded Educate.io, an online education platform dedicated to empowering students with monetizable skills. The platform offers diverse programs covering essential areas like social media marketing, sales, and copywriting.",
    logo: "/images/659c5e30269ee84f12c8baee_App Icon 1.webp",
    image: "/images/659c582cf629aed5baf65cdf_web_0018_Generative Fill 9.webp",
    link: "#",
    linkLabel: "educate.io",
  },
  {
    id: "bigday",
    year: "2024",
    name: "BIG DAY",
    description:
      "Debuting with a range of electrolyte mixes and drinks, and a revolutionary training app, BIG DAY is a lifestyle brand built around Iman's life as a business owner, embodying the drive and discipline of entrepreneurial success, helping everyone to perform at their best.",
    logo: "/images/6744b02e2096c8eab93d2eee_66c5f719b7478d2549d26a5e_BIG_DAY_LOGO_1.svg",
    image: "/images/659c582d38b163ab6bcb7f24_web_0022_Generative Fill.webp",
    link: "#",
    linkLabel: "bigday.com",
  },
];

export default function CompaniesDetailSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".company-item").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="padding-global section-padding"
      id="companies"
    >
      <div className="container">
        <p className="section-label mb-8">Companies</p>

        <div className="flex flex-col">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="company-item company-section grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16"
              style={{
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              {/* Text side */}
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={48}
                    height={48}
                    className="company-logo"
                    style={{
                      objectFit: "contain",
                      width: "auto",
                      height: "32px",
                    }}
                  />
                  <span className="section-label">{company.year}</span>
                </div>
                <h3 className="heading-3 mb-4">{company.name}</h3>
                <p className="text-size-regular opacity-60 font-light leading-relaxed mb-8">
                  {company.description}
                </p>
                <Link
                  href={company.link}
                  target={company.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="button button-outline"
                >
                  Visit {company.linkLabel} →
                </Link>
              </div>

              {/* Image side */}
              <div className={`relative rounded-2xl overflow-hidden aspect-video ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
