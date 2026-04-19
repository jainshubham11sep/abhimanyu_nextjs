"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const partnerLogos = [
  { name: "Facebook", logo: "/images/6585a96ad1f0d4e125333f03_Facebook.svg" },
  { name: "Google", logo: "/images/6585a96ad1f0d4e125333f04_Google.svg" },
  { name: "Webflow", logo: "/images/6585a96ad1f0d4e125333f01_Webflow.svg" },
  { name: "Twitch", logo: "/images/6585a96ad1f0d4e125333f05_Twitch.svg" },
  { name: "YouTube", logo: "/images/6585a96ad1f0d4e125333f02_Youtube.svg" },
];

export default function AboutSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="padding-global section-padding"
      id="about"
    >
      <div className="container">
        {/* Section Label */}
        <p className="section-label mb-8">About</p>

        <div className="home-about-grid">
          {/* Left - Heading */}
          <div>
            <div className="text-animation reveal-01">
              <h2 className="heading-2 mb-6">
                <span className="word">Abhimanyu Nirban</span>
              </h2>
            </div>
            <div className="text-animation reveal-02">
              <p className="text-size-medium opacity-80 font-light leading-relaxed mb-6">
                <span className="word">
                  Abhimanyu Nirban is a British business owner, entrepreneur,
                  motivational speaker and online educator.
                </span>
              </p>
            </div>
            <div className="text-animation reveal-03">
              <p className="text-size-regular opacity-60 font-light leading-relaxed">
                <span className="word">
                  Abhimanyu is an advocate for universal education and a committed
                  philanthropist. His philanthropic efforts include privately
                  funding the establishment of numerous schools in Nepal and
                  providing thousands of children access to high-quality
                  education.
                </span>
              </p>
            </div>
          </div>

          {/* Right - Stats / Additional info */}
          <div className="flex flex-col gap-6">
            <div className="border border-white/10 rounded-2xl p-6">
              <p className="heading-1 text-white" style={{ fontSize: "4rem" }}>
                6+
              </p>
              <p className="text-size-small opacity-60 mt-2">
                Companies Founded
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <p className="heading-1 text-white" style={{ fontSize: "4rem" }}>
                5+
              </p>
              <p className="text-size-small opacity-60 mt-2">
                Schools Built in Nepal
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <p className="heading-1 text-white" style={{ fontSize: "4rem" }}>
                1M+
              </p>
              <p className="text-size-small opacity-60 mt-2">
                Students Educated
              </p>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="section-label text-center mb-8">
            Trusted by clients at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.logo}
                alt={logo.name}
                width={100}
                height={28}
                className="partner-logo"
                style={{ objectFit: "contain" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
