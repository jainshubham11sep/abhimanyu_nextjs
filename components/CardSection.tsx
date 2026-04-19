"use client";

import Image from "next/image";

export default function CardSection() {
  return (
    <section className="padding-global py-8">
      <div className="container">
        <div className="card-section relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px]">
          {/* Background Image */}
          <Image
            src="/images/6585a96ad1f0d4e125333f0f_card image.jpg"
            alt="Abhimanyu Nirban"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12 min-h-[500px] md:min-h-[600px]">
            <div className="max-width-80ch">
              <p className="text-size-xlarge text-white mb-6">
                &ldquo;If you wanna stand out, gotta be outstanding.&rdquo;
              </p>
              <p className="text-size-small opacity-60 text-white">
                Elevate your online presence and leave your competitors in the
                dust. Join the ranks of successful creatives and entrepreneurs
                who trust Iman to elevate their impact.
              </p>
              <div className="mt-8">
                <a
                  href="#about"
                  className="button button-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
