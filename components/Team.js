import React from "react";

const departments = [
  "Civil Engineer",
  "Quantity Surveyor",
  "Site Agents & Plant Management",
  "Safety Officer & Safety Representative",
  "HR, Administration & Project Support",
];

export default function Team() {
  return (
    <section id="team" className="bg-[#F1F1F1] pt-20 pb-10 px-6 text-[#212471]">
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-6">
        {/* Two-column internal layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT — Heading & description */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              OUR TEAM & CAPACITY
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-[#212471] rounded-xl" />

            <p className="mt-6 text-sm text-[#212471]/60 max-w-md">
              This structure ensures compliance, safety, quality control, and
              efficient execution across all projects.
            </p>
          </div>

          {/* RIGHT — Team list */}
          <div className="border-t border-[#212471]/20 lg:border-t-0 lg:border-l lg:pl-10">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group flex items-center gap-6 py-5 border-b border-[#212471]/20"
              >
                <span className="text-[11px] font-bold tracking-widest text-[#212471]/40">
                  0{index + 1}
                </span>
                <h3 className="text-sm md:text-base font-semibold tracking-wide group-hover:translate-x-1 transition-transform">
                  {dept}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
