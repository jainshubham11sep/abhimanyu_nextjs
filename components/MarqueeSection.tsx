"use client";

import Image from "next/image";

const marqueeImages = [
  { src: "/images/media/abhimanyu_nirban_press.jpg", alt: "Abhimanyu Nirban speaking at event" },
  { src: "/images/media/abhimanyu_nirban.PNG", alt: "Abhimanyu Nirban" },
  { src: "/images/media/abhimanyu_nirban_press.jpg", alt: "Abhimanyu Nirban at podium" },
  { src: "/images/media/abhimanyu_nirban.PNG", alt: "Abhimanyu Nirban entrepreneur" },
  { src: "/images/media/abhimanyu_nirban_press.jpg", alt: "Abhimanyu Nirban founder" },
  { src: "/images/media/abhimanyu_nirban.PNG", alt: "Abhimanyu Nirban Bharat Innovations" },
  { src: "/images/media/abhimanyu_nirban_press.jpg", alt: "Abhimanyu Nirban RASA Framework" },
  { src: "/images/media/abhimanyu_nirban.PNG", alt: "Abhimanyu Nirban AI marketing" },
];

export default function MarqueeSection() {
  const allImages = [...marqueeImages, ...marqueeImages];

  return (
    <section className="py-16 overflow-hidden">
      <div className="overflow-hidden relative">
        <div className="flex gap-4 marquee-wrapper">
          {allImages.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 marquee-image relative rounded-xl overflow-hidden"
              style={{ width: "240px", height: "320px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
