"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function EarlyLifeSection() {
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
      id="early-life"
    >
      <div className="container">
        <p className="section-label mb-8">Early Life</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div>
            <div className="text-animation reveal-01">
              <h2 className="heading-2 mb-8">
                <span className="word">From Dagestan</span>
                <br />
                <span className="word">to the World</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-animation reveal-02">
                <p className="text-size-regular opacity-70 font-light leading-relaxed">
                  <span className="word">
                    Iman was born on January 3, 2000, in a Russian family in
                    Dagestanskiye Ogni, Dagestan, Russia. He moved to London
                    at age 4, where he aspired to become a footballer.
                  </span>
                </p>
              </div>

              <div className="text-animation reveal-03">
                <p className="text-size-regular opacity-70 font-light leading-relaxed">
                  <span className="word">
                    Raised in a modest environment, Gadzhi faced challenges
                    related to family issues, financial hardship, and limited
                    access to traditional education.
                  </span>
                </p>
              </div>

              <div className="text-animation reveal-03">
                <p className="text-size-regular opacity-70 font-light leading-relaxed">
                  <span className="word">
                    At 15, Gadzhi started trading Instagram accounts to
                    provide for himself and his mother. Concurrently, he
                    developed fitness expertise through self-directed learning
                    and offered training sessions.
                  </span>
                </p>
              </div>

              <div className="text-animation reveal-03">
                <p className="text-size-regular opacity-70 font-light leading-relaxed">
                  <span className="word">
                    During high school, he developed an interest in
                    entrepreneurship and digital marketing, assuming the role
                    of social media manager for a football club. Seeing his
                    accomplishments, Iman made the decision to put his studies
                    on hold.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/658cc53d52d5ee59e3112492_Young Iman taking a picture.webp"
                alt="Young Iman taking a picture"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <Image
                src="/images/658cc53dddba9729c8758b9e_Young Iman working.webp"
                alt="Young Iman working"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/658cc53cbd7c075b6ab8216b_Iman with his mom(2).webp"
                alt="Iman with his mom"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <Image
                src="/images/658cc53dee5d3bc14e54d638_Iman with his mo.webp"
                alt="Iman with his mom"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
