import React from "react";

export default function Purpose() {
  return (
    <section
      id="purpose"
      className="bg-[#212471] text-white py-20 px-6 md:px-12 lg:px-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        {/* Container for the 50/50 Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 relative">
          {/* Vertical Divider (Visible on MD screens and up) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2"></div>

          {/* Mission Side */}
          <div className="md:pr-16 flex flex-col justify-center">
            <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase mb-4">
              01. Our Mission
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight ">
              Empowering Global Logistics.
            </h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light max-w-md">
              To provide seamless, tech-driven supply chain solutions that
              bridge the gap between continents, ensuring every shipment moves
              with absolute precision and safety.
            </p>
          </div>

          {/* Vision Side */}
          <div className="md:pl-16 flex flex-col justify-center mt-12 md:mt-0">
            <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase mb-4">
              02. Our Vision
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight ">
              Defining the Future Standard.
            </h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light max-w-md">
              To become the world’s most trusted logistics partner, recognized
              for our commitment to innovation, sustainability, and unmatched
              operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
