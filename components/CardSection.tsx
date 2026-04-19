"use client";

import Image from "next/image";

export default function CardSection() {
  return (
    <section className="padding-global py-8">
      <div className="container">
        <div className="card-section relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px]">
          <Image
            src="/images/media/abhimanyu_nirban_press.jpg"
            alt="Abhimanyu Nirban"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/85" />

          <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12 min-h-[500px] md:min-h-[600px]">
            <div className="max-width-80ch">
              <p className="text-size-xlarge text-white mb-6">
                &ldquo;I always knew AI could redefine marketing — that&apos;s how
                RASA was born, and that&apos;s how Bharat Innovations was
                built.&rdquo;
              </p>
              <p className="text-size-small opacity-60 text-white">
                — Abhimanyu Nirban, Founder, Bharat Innovations
              </p>
              <div className="mt-8">
                <a
                  href="https://bharatinnovations.agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  Visit Bharat Innovations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
