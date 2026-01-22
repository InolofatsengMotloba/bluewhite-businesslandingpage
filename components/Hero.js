import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen lg:h-[calc(100vh-80px)] overflow-hidden bg-[#F1F1F1]"
    >
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        {/* LEFT COLUMN: Content */}
        <div className="relative flex flex-col justify-center px-8 lg:px-24 py-20 z-20 bg-[#F1F1F1]">
          {/* Subtle Background Watermark */}
          <span className="absolute top-10 left-10 text-[12rem] font-black text-black/3 select-none pointer-events-none">
            TEMBO
          </span>

          <div className="relative">
            <span className="text-[#212471] text-xs font-black tracking-[0.5em] uppercase mb-6 block">
              Rustenburg, South Africa
            </span>
            <h1 className="text-4xl lg:text-7xl font-bold text-[#212471] leading-[1.1] tracking-tighter">
              Earthworks & <br />
              Civil Excellence.
            </h1>

            <p className="mt-8 text-gray-600 max-w-md text-base md:text-lg leading-relaxed font-light">
              Tembo Group Investment is a civil construction company
              specializing in heavy earthworks and professional built
              environment consulting for the mining and public sectors.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <button className="bg-[#212471] text-white text-[13px] font-bold tracking-[0.2em] uppercase px-10 py-5 hover:bg-[#2a2e8c] transition-all shadow-xl">
                Start A Project
              </button>
              {/* <button className="group text-[#212471] text-[13px] font-bold tracking-[0.2em] uppercase flex items-center gap-3">
                Our Story
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  <FaArrowRight size={14} />
                </span>
              </button> */}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Visuals & Stats */}
        <div className="relative flex flex-col h-full overflow-hidden">
          {/* Main Hero Image */}
          <div className="relative flex-1 group">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Construction site"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            {/* Dark Overlay to blend with site theme */}
            <div className="absolute inset-0 bg-[#212471]/20"></div>

            {/* Floating Glassmorphism Stat */}
            {/* <div className="absolute bottom-10 left-10 backdrop-blur-md bg-[#212471]/80 border border-white/20 p-8 text-white max-w-[200px]">
              <p className="text-4xl font-bold italic mb-1">20+</p>
              <p className="text-[10px] tracking-[0.3em] leading-tight uppercase opacity-80">
                Years of Built Environment Expertise
              </p>
            </div> */}
          </div>

          {/* Bottom Bar: Dual-Tone Stats */}
          <div className="flex h-32">
            {/* Blue Stat */}
            <div className="bg-[#212471] flex-1 flex flex-col justify-center px-10 text-white">
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-[10px] tracking-widest uppercase opacity-60">
                Black Youth Owned
              </p>
            </div>

            {/* Light Stat/CTA */}
            <div className="bg-white flex-[1.5] hidden sm:flex items-center justify-between px-10 group cursor-pointer hover:bg-gray-50 transition-colors">
              <p className="text-gray-500 text-[12px] leading-relaxed max-w-50 uppercase tracking-wider">
                Delivering quality infrastructure solutions to industry
                standards.
              </p>
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#212471] group-hover:text-white transition-all duration-300">
                <FaArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
