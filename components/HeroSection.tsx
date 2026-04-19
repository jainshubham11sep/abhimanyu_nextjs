"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    const textEls = document.querySelectorAll(".text-animation");
    textEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-hero padding-global" id="hero">
      <Image
        src="/images/media/abhimanyu_nirban_press.jpg"
        alt="Abhimanyu Nirban"
        fill
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="home-hero-content">
          <div className="pt-24 pb-8">
            <div className="text-animation reveal-01">
              <h1 ref={headingRef} className="hero-text">
                <span className="word">Abhimanyu</span>
              </h1>
            </div>
            <div className="text-animation reveal-02">
              <h1 className="hero-text">
                <span className="word">Nirban</span>
              </h1>
            </div>
          </div>

          <div className="max-w-2xl mt-8">
            <div className="text-animation reveal-03">
              <p className="text-size-medium opacity-80 font-light">
                <span className="word">
                  Indian entrepreneur, founder of India&apos;s first AI marketing
                  agency, and creator of the RASA Framework.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href="#about"
              className="button button-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </a>
            <a
              href="#companies"
              className="button button-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#companies")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Companies
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" style={{ zIndex: 2 }}>
        <span className="section-label">scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
