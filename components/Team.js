import React from "react";

const departments = [
  "OPERATIONS MANAGEMENT",
  "STRATEGIC PLANNING",
  "CUSTOMER RELATIONS",
  "COMPLIANCE & SECURITY",
  "GLOBAL PARTNERSHIPS",
];

export default function Team() {
  return (
    <section className="bg-[#001D4A] pt-24 pb-16 px-6 md:px-12 lg:px-24 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our Departments
          </h2>
          {/* Description 1: Under the Title */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
            Our structure is built on specialized expertise, ensuring that every
            facet of the supply chain is managed by dedicated professionals
            committed to operational excellence.
          </p>
        </div>

        {/* The List (No Blocks) */}
        <div className="border-t border-white/10">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold text-gray-500 tracking-widest">
                  0{index + 1}
                </span>
                <h3 className="text-lg md:text-xl font-bold tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                  {dept}
                </h3>
              </div>
              <div className="hidden md:block w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Description 2: Below Everything */}
        <div className="mt-16 flex justify-end">
          <div className="max-w-md text-right">
            <p className="text-gray-400 text-sm leading-relaxed italic">
              "Unified by a singular goal: to provide seamless logistics
              solutions that empower global commerce and exceed client
              expectations at every milestone."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
