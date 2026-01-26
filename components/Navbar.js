"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Purpose", href: "#purpose" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-16 sm:h-20 bg-[#F1F1F1]/90 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto flex h-full items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <div className="shrink-0">
          <a href="#home" className="block relative w-24 h-8 sm:w-32 sm:h-10">
            <Image
              src="/LogoBlue.png"
              alt="Tembo Group Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#212471] text-[11px] font-black tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-[2px] bg-[#212471] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-[4px]" : "mb-1.5"
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-[#212471] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#212471]/95 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "4rem" }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className="text-white text-lg font-black tracking-[0.2em] uppercase hover:opacity-60 transition-all"
              style={{
                animation: isMenuOpen
                  ? `slideIn 0.3s ease-out ${index * 0.05}s forwards`
                  : "none",
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
