"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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
    <section ref={sectionRef} className="padding-global section-padding" id="about">
      <div className="container">
        <p className="section-label mb-8">About</p>

        <div className="home-about-grid">
          <div>
            <div className="text-animation reveal-01">
              <h2 className="heading-2 mb-6">
                <span className="word">Abhimanyu Nirban</span>
              </h2>
            </div>
            <div className="text-animation reveal-02">
              <p className="text-size-medium opacity-80 font-light leading-relaxed mb-6">
                <span className="word">
                  Abhimanyu Nirban is a 26-year-old Indian entrepreneur, poet, and
                  motivational speaker from Sikar, Rajasthan — and the founder of
                  India&apos;s first AI-powered marketing agency, Bharat Innovations.
                </span>
              </p>
            </div>
            <div className="text-animation reveal-03">
              <p className="text-size-regular opacity-60 font-light leading-relaxed mb-4">
                <span className="word">
                  Starting alone in a small room with an old laptop gifted by his
                  father — no team, no external funding — Abhimanyu built Bharat
                  Innovations into a globally recognised AI marketing powerhouse
                  serving 70+ brands across 4 countries.
                </span>
              </p>
            </div>
            <div className="text-animation reveal-03">
              <p className="text-size-regular opacity-60 font-light leading-relaxed">
                <span className="word">
                  A Journalism & Mass Communication graduate from JECRC University,
                  he holds that creativity should be guided by data, and that
                  marketing must be measured in profitability — not vanity metrics.
                </span>
              </p>
            </div>

            {/* Press photo */}
            <div className="mt-10 relative rounded-2xl overflow-hidden" style={{ height: "280px" }}>
              <Image
                src="/images/media/abhimanyu_nirban_press.jpg"
                alt="Abhimanyu Nirban speaking"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white/70 text-xs tracking-widest uppercase">Motivational Speaker · Entrepreneur · Poet</p>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="flex flex-col gap-6">
            <div className="border border-white/10 rounded-2xl p-6">
              <p className="heading-1 text-white" style={{ fontSize: "4rem" }}>70+</p>
              <p className="text-size-small opacity-60 mt-2">E-commerce Brands Served</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <p className="heading-1 text-white" style={{ fontSize: "4rem" }}>15x</p>
              <p className="text-size-small opacity-60 mt-2">ROAS Delivered</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <p className="heading-1 text-white" style={{ fontSize: "4rem" }}>42</p>
              <p className="text-size-small opacity-60 mt-2">Jewellery Brands Scaled</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <p className="heading-1 text-white" style={{ fontSize: "4rem" }}>1K+</p>
              <p className="text-size-small opacity-60 mt-2">Media Portals in PR Network</p>
            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="section-label text-center mb-8">Trusted by clients including</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["Samsung India", "Nikon India", "Burger Farm"].map((name) => (
              <p key={name} className="text-white/50 font-semibold tracking-widest text-sm uppercase">
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
