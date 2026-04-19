"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const philanthropyItems = [
  {
    id: "schools-nepal",
    label: "Schools in Nepal",
    heading: "You Get What You Give",
    description:
      "Iman is constructing schools in Nepal to encourage greater involvement from disadvantaged nations in the new era. So far, Gadzhi has privately funded the construction of five schools in Nepal. He considers it his most fulfilling commitment and has no plans to stop.",
    images: [
      "/images/659c58287d889f30eac8ceaa_Nepal_0003_Generative Fill.webp",
      "/images/659c5828a19d10f7a0ec43a1_Nepal_0002_Generative Fill 6.webp",
    ],
  },
  {
    id: "company-marathon",
    label: "Company Marathon",
    heading: "Running for Education",
    description:
      "At the end of 2023, 75 employees of Educate ran a marathon and raised funds to support the work of Pahar Trust Nepal to improve the education provision in rural communities. Iman united his entire team and completed three marathons across three countries in one week. Every donation made to this fundraiser will be matched by Iman personally.",
    images: [
      "/images/6744b20267a7fe18a1f56805_92 05020031_31A-min-min (1).jpg",
      "/images/6744b12f07eea4958dbdf7da_93 IMG_3604-min.JPG",
    ],
  },
  {
    id: "south-africa",
    label: "Meals in South Africa",
    heading: "Nourishing Communities",
    description:
      "Cherishing a personal connection to South Africa, and recognising the importance of nutrition in development, in 2024, Iman partnered with the renowned charity Ladles of Love, to fund a program providing nutritious meals for 100 children over the course of a year at one of their Early Childhood Development (ECD) Centres — the beginning of a long-lasting relationship with the charity.",
    images: [
      "/images/659c582c59fc9aa44ee132a6_web_0016_Generative Fill 11.webp",
      "/images/659c582cf629aed5baf65cdf_web_0018_Generative Fill 9.webp",
    ],
  },
];

export default function PhilanthropySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".text-animation").forEach((el) => {
              el.classList.add("animated");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="padding-global section-padding"
      id="you-get-what-you-give"
    >
      <div className="container">
        <p className="section-label mb-4">Philanthropy</p>
        <div className="text-animation reveal-01 mb-16">
          <h2 className="heading-2">
            <span className="word">You Get</span>
            <br />
            <span className="word">What You Give</span>
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {philanthropyItems.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Text */}
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <p className="section-label mb-4">{item.label}</p>
                <h3 className="heading-3 mb-6">{item.heading}</h3>
                <p className="text-size-regular opacity-60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Images */}
              <div
                className={`grid grid-cols-2 gap-3 ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src={item.images[0]}
                    alt={item.heading}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                  <Image
                    src={item.images[1]}
                    alt={item.heading}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
