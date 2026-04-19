import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompaniesLogoSection from "@/components/CompaniesLogoSection";
import CardSection from "@/components/CardSection";
import AboutSection from "@/components/AboutSection";
import MarqueeSection from "@/components/MarqueeSection";
import CTASection from "@/components/CTASection";
import EarlyLifeSection from "@/components/EarlyLifeSection";
import CompaniesDetailSection from "@/components/CompaniesDetailSection";
import PhilanthropySection from "@/components/PhilanthropySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-wrapper">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Companies Logo Strip */}
      <CompaniesLogoSection />

      {/* Divider */}
      <div className="padding-global">
        <div className="container">
          <div className="white-line" />
        </div>
      </div>

      {/* Featured Card with Quote */}
      <CardSection />

      {/* About Section */}
      <AboutSection />

      {/* Image Marquee / Gallery */}
      <MarqueeSection />

      {/* CTA Cards */}
      <CTASection />

      {/* Early Life Section */}
      <EarlyLifeSection />

      {/* Divider */}
      <div className="padding-global">
        <div className="container">
          <div className="white-line" />
        </div>
      </div>

      {/* Companies Detail Section */}
      <CompaniesDetailSection />

      {/* Philanthropy Section */}
      <PhilanthropySection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
