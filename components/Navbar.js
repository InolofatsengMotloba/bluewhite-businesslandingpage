import React from "react";
import Image from "next/image";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Purpose", href: "#purpose" },
    { name: "Services", href: "#services" },

    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="p-2 fixed top-0 left-0 z-50 w-full h-20 bg-[#F1F1F1]/90 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto flex h-full  items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Logo - Aligned with Hero Heading */}
        <div className="shrink-0">
          <a href="#home" className="block relative w-32 h-10">
            <Image
              src="/LogoBlue.png" // Replace with your actual logo path
              alt="Tembo Group Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </a>
        </div>

        {/* Navigation - Spread out and Typographically Matched */}
        <nav className="hidden md:flex items-center gap-12">
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

        {/* Right Side Spacer / Mobile Menu Trigger */}
        <div className="md:hidden">
          {/* You can add a simple Hamburger icon here if needed */}
          <div className="w-6 h-[1px] bg-[#212471] mb-1.5"></div>
          <div className="w-6 h-[1px] bg-[#212471]"></div>
        </div>
      </div>
    </header>
  );
}
