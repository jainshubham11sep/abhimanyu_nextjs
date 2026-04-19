import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ImanGadzhi",
    icon: "/images/659c6c021f01a145ffb25912_youtube-icon.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/imangadzhi/",
    icon: "/images/6585a96ad1f0d4e125333f71_Instagram.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/gadzhiiman",
    icon: "/images/6585a96ad1f0d4e125333f73_Twitter.svg",
  },
];

export default function Footer() {
  return (
    <footer className="footer padding-global" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <Link href="/" className="nav-brand text-xl block mb-3">
              IMAN GADZHI
            </Link>
            <p className="text-size-small opacity-40">
              British entrepreneur & educator
            </p>
          </div>

          {/* Center - Get in Touch */}
          <div className="text-center">
            <p className="section-label mb-3">Get in Touch</p>
            <a
              href="mailto:hello@iman-gadzhi.com"
              className="text-size-small opacity-60 hover:opacity-100 transition-opacity"
            >
              hello@iman-gadzhi.com
            </a>
          </div>

          {/* Right - Social */}
          <div className="flex items-center gap-4 md:justify-end">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-white/60 transition-colors"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={18}
                  height={18}
                  className="partner-logo"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="white-line mt-8 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-size-small opacity-30">
            © 2026 EDUCATE IAG SERVICES - FZCO | DSO-IFZA-20424, IFZA
            Properties, Dubai Silicon Oasis, United Arab Emirates
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-size-small opacity-40 hover:opacity-80 transition-opacity capitalize"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
