"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar padding-global ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-component">
            {/* Left nav links */}
            <div className="desktop-nav flex items-center gap-8">
              <button
                onClick={() => handleNavClick("#about")}
                className="nav-link bg-transparent border-none cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("#early-life")}
                className="nav-link bg-transparent border-none cursor-pointer"
              >
                Earlier Life
              </button>
            </div>

            {/* Logo / Brand */}
            <Link href="/" className="nav-brand">
              ABHIMANYU NIRBAN
            </Link>

            {/* Right nav links */}
            <div className="desktop-nav flex items-center gap-8">
              <button
                onClick={() => handleNavClick("#companies")}
                className="nav-link bg-transparent border-none cursor-pointer"
              >
                Companies
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="nav-link bg-transparent border-none cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* Hamburger - mobile */}
            <button
              className="mobile-hamburger flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {[
          { label: "About", href: "#about" },
          { label: "Earlier Life", href: "#early-life" },
          { label: "Companies", href: "#companies" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className="mobile-nav-link bg-transparent border-none cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
