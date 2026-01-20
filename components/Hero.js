import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)]">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between px-8 lg:px-24 bg-[#F1F1F1] overflow-hidden">
          {/* Top Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Earthworks & <br />
              Civil Construction <br />
              You Can Trust
            </h1>

            <p className="mt-8 text-gray-600 max-w-md text-lg leading-relaxed">
              The Tembo Group Investment is a 100% black youth-owned civil
              construction company based in Rustenburg, South Africa. We
              specialise in earthworks, civil construction, and professional
              built environment consulting, serving both industrial and
              commercial clients with a strong footprint in the mining and
              public infrastructure sectors.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <button className="bg-[#212471] hover:bg-[#e6b82e] text-[#F1F1F1] font-semibold px-10 py-4 transition-colors">
                Start A Project
              </button>
              <button className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2 transition-colors">
                Learn more <span className="text-xs">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative grid grid-rows-[1fr_auto] overflow-hidden">
          {/* IMAGE AREA */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Construction site"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Floating Stat */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-32 backdrop-blur-md bg-white/20 border border-white/30 p-6 flex flex-col justify-center">
              <span className="text-3xl font-bold text-white">20+</span>
              <span className="text-white/80 text-sm">
                Years of Experiences
              </span>
            </div>
          </div>

          {/* BOTTOM STATS (FIXED INSIDE HERO) */}
          <div className="flex flex-col sm:flex-row">
            <div className="bg-[#212471] p-6 flex-1">
              <h3 className="text-3xl font-bold text-[#F1F1F1]">350+</h3>
              <p className="text-[#F1F1F1] font-medium">Professional Workers</p>
            </div>

            {/* <div className="bg-[#A68875] p-8 flex-1">
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-white/80">Handled Projects</p>
            </div> */}

            <div className="bg-white p-8 flex-[1.5] flex items-center justify-between">
              <p className="text-gray-600 text-sm max-w-xs">
                Delivering quality infrastructure solutions on time, on budget,
                and to industry standards.
              </p>
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
