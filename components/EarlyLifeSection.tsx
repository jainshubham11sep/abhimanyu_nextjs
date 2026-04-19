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
    <section ref={sectionRef} className="padding-global section-padding" id="early-life">
      <div className="container">
        <p className="section-label mb-8">Early Life</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-animation reveal-01">
              <h2 className="heading-2 mb-8">
                <span className="word">From Sikar</span>
                <br />
                <span className="word">to the World</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <div className="text-animation reveal-02">
                <p className="text-size-regular opacity-70 font-light leading-relaxed">
                  <span className="word">
                    Abhimanyu Nirban was born and raised in Sikar, Rajasthan,
                    India. From an early age he was drawn to storytelling and
                    communication, later pursuing a Bachelor of Journalism and
                    Mass Communication at JECRC University.
                  </span>
                </p>
              </div>

              <div className="text-animation reveal-03">
                <p className="text-size-regular opacity-70 font-light leading-relaxed">
                  <span className="word">
                    With no external funding and only an old laptop gifted by
                    his father, Abhimanyu started Bharat Innovations alone in a
                    modest room — fuelled entirely by clarity of vision and
                    relentless execution.
                  </span>
                </p>
              </div>

              <div className="text-animation reveal-03">
                <p className="text-size-regular opacity-70 font-light leading-relaxed">
                  <span className="word">
                    &ldquo;When I look back at where it started — a small room, my
                    father&apos;s old laptop, and nothing but a dream — it feels
                    unreal.&rdquo;
                  </span>
                </p>
              </div>

              <div className="text-animation reveal-03">
                <p className="text-size-regular opacity-70 font-light leading-relaxed">
                  <span className="word">
                    Beyond business, Abhimanyu is a poet — a voice that reflects
                    his belief that great communication, whether in verse or in
                    brand strategy, always starts with truth.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/media/abhimanyu_nirban_press.jpg"
                alt="Abhimanyu Nirban speaking at event"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <Image
                src="/images/media/abhimanyu_nirban.PNG"
                alt="Abhimanyu Nirban"
                fill
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/media/abhimanyu_nirban.PNG"
                alt="Abhimanyu Nirban"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <Image
                src="/images/media/abhimanyu_nirban_press.jpg"
                alt="Abhimanyu Nirban at podium"
                fill
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
