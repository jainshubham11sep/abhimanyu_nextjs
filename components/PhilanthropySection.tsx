"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const items = [
  {
    id: "ai-education",
    label: "AI Education",
    heading: "Democratising AI Marketing",
    description:
      "Abhimanyu believes that AI is not just the future of marketing — it is the present. Through Bharat Innovations and the RASA Framework, he actively educates brands across India and beyond on leveraging artificial intelligence for real, measurable growth. His mission is to make AI-powered marketing accessible to businesses of every size.",
    images: [
      "/images/659c582cd46e8c1c9029ae3a_web_0010_Generative Fill 16.webp",
      "/images/659c582cf629aed5baf65cdf_web_0018_Generative Fill 9.webp",
    ],
  },
  {
    id: "jewellery-brands",
    label: "Jewellery Industry",
    heading: "Transforming an Entire Industry",
    description:
      "After testing over 100 marketing frameworks, Abhimanyu crafted the RASA Framework specifically for the jewellery sector — a system that now powers 42 jewellery brands with a guaranteed minimum of 6x ROAS. His work has elevated independent jewellers to compete with the world's most recognised names on a global stage.",
    images: [
      "/images/659c5829379197a24aaf8ba1_web_0004_Generative Fill 29.webp",
      "/images/659c582c59fc9aa44ee132a6_web_0016_Generative Fill 11.webp",
    ],
  },
  {
    id: "pr-mission",
    label: "1000+ Media Portals",
    heading: "Giving Brands a Voice",
    description:
      "In just two years, Abhimanyu built one of India's largest PR networks, giving brands access to over 1,000 media portals. He firmly believes every great brand deserves to be heard — not just seen. This media infrastructure underpins the trust-building layer of his RASA Framework and has helped dozens of brands establish national and international credibility.",
    images: [
      "/images/659c582c05e65b826d6ebc42_web_0020_Generative Fill 5.webp",
      "/images/659c582d38b163ab6bcb7f24_web_0022_Generative Fill.webp",
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
        <p className="section-label mb-4">Mission & Impact</p>
        <div className="text-animation reveal-01 mb-16">
          <h2 className="heading-2">
            <span className="word">Creativity Guided</span>
            <br />
            <span className="word">by Data</span>
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {items.map((item, index) => (
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
