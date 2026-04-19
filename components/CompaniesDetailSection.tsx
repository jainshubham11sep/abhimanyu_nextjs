"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    id: "bharat-innovations",
    year: "2023",
    name: "Bharat Innovations",
    description:
      "Abhimanyu founded Bharat Innovations — India's first AI-powered marketing agency — from a single room in Rajasthan with no team and no external funding. Today it manages ₹40L+ in monthly ad spends, delivers up to 15x ROAS, and serves 70+ e-commerce brands including 42 jewellery brands across 4 countries. Clients include Samsung India, Nikon India, and Burger Farm.",
    logo: "/images/media/abhimanyu_nirban.PNG",
    image: "/images/659c5829379197a24aaf8ba1_web_0004_Generative Fill 29.webp",
    link: "https://bharatinnovations.agency/",
    linkLabel: "bharatinnovations.agency",
  },
  {
    id: "rasa-framework",
    year: "2024",
    name: "RASA Framework",
    description:
      "In 2024, after testing over 100 marketing frameworks, Abhimanyu introduced the RASA Framework — a breakthrough innovation built specifically for the jewellery industry. Rooted in Brand Intelligence, AI Nurturing, Engagement Ecosystem, Experience Automation, and Trust Building through PR, RASA consistently delivers a minimum of 6x ROAS and has become the defining model for scaling jewellery brands globally.",
    logo: "/images/media/abhimanyu_nirban.PNG",
    image: "/images/659c582c59fc9aa44ee132a6_web_0016_Generative Fill 11.webp",
    link: "#",
    linkLabel: "rasaframework.com",
  },
  {
    id: "pr-network",
    year: "2024",
    name: "PR & Media Network",
    description:
      "In just two years, Abhimanyu built one of India's largest PR networks — providing brands access to over 1,000 media portals. The network amplifies brand credibility and authority at scale, forming the trust layer of the RASA Framework and powering the visibility of every brand Bharat Innovations touches.",
    logo: "/images/media/abhimanyu_nirban.PNG",
    image: "/images/659c582c05e65b826d6ebc42_web_0020_Generative Fill 5.webp",
    link: "https://bharatinnovations.agency/",
    linkLabel: "bharatinnovations.agency",
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
        <p className="section-label mb-8">Companies & Ventures</p>

        <div className="flex flex-col">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="company-item company-section grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16"
            >
              {/* Text side */}
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
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
