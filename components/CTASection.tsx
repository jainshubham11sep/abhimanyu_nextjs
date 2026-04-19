import Image from "next/image";

const ctaCards = [
  {
    id: "01",
    image: "/images/6585a96ad1f0d4e125333f38_bg-card-1.jpg",
    heading: "Build Your Agency",
    description:
      "Join thousands of entrepreneurs who have built 6 and 7-figure agencies using Iman's proven frameworks.",
    link: "https://www.growyouragency.com/",
    label: "GrowYourAgency",
  },
  {
    id: "02",
    image: "/images/6585a96ad1f0d4e125333f36_bg-card-2.jpg",
    heading: "Transform Your Life",
    description:
      "Discover a world of possibilities. Educate.io empowers students with monetizable skills for the digital age.",
    link: "#",
    label: "Educate.io",
  },
];

export default function CTASection() {
  return (
    <section className="padding-global py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ctaCards.map((card) => (
            <div
              key={card.id}
              className="cta-card relative rounded-3xl overflow-hidden min-h-[420px] md:min-h-[500px]"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <Image
                src={card.image}
                alt={card.heading}
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full min-h-[420px] md:min-h-[500px] p-8 md:p-10">
                <p className="section-label mb-3 text-white/60">{card.label}</p>
                <h3 className="heading-3 text-white mb-4">{card.heading}</h3>
                <p className="text-size-small text-white/70 mb-8 max-w-sm">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  target={card.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="button button-primary w-fit"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
