"use client";

import Image from "next/image";

const marqueeImages = [
  {
    src: "/images/658cc53dd3f78dca164aed84_Iman working(8).webp",
    alt: "Iman working",
  },
  {
    src: "/images/658cc53dee5d3bc14e54d638_Iman with his mo.webp",
    alt: "Iman with his mom",
  },
  {
    src: "/images/658cc53d5a6a9abfe1d7b7d8_Iman working(2).webp",
    alt: "Iman working",
  },
  {
    src: "/images/658cc53dddba9729c8758b9e_Young Iman working.webp",
    alt: "Young Iman working",
  },
  {
    src: "/images/658cc53dd6f55583821cad38_Iman walking.webp",
    alt: "Iman walking",
  },
  {
    src: "/images/658cc53ecd9d5a68c79bc1fd_Iman working(1).webp",
    alt: "Iman working",
  },
  {
    src: "/images/658cc53d0c96244652e4641e_Iman with his mom(4).webp",
    alt: "Iman with his mom",
  },
  {
    src: "/images/658cc53d52d5ee59e3112492_Young Iman taking a picture.webp",
    alt: "Young Iman taking a picture",
  },
  {
    src: "/images/658cc53c491d62a69f4e8f79_Iman posing(17).webp",
    alt: "Iman posing",
  },
  {
    src: "/images/658cc53cbd7c075b6ab8216b_Iman with his mom(2).webp",
    alt: "Iman with his mom",
  },
  {
    src: "/images/658cc53c9113ee53dbe5d1bb_Iman closing deals(1).webp",
    alt: "Iman closing deals",
  },
  {
    src: "/images/658cc53dd6f55583821cad57_ Iman working.webp",
    alt: "Iman working",
  },
];

export default function MarqueeSection() {
  // Duplicate for seamless loop
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
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
