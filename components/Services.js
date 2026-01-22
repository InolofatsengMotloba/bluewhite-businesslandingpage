import React from "react";
import { FaTractor } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { FaHelmetSafety } from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      id: 1,
      tag: "SERVICE 01",
      title: "Civil Construction",
      points: [
        "Roads and paving",
        "Buildings and structural works",
        "Municipal infrastructure",
      ],
      image: "/BG4.jpg",
      icon: <MdConstruction size={22} />,
    },
    {
      id: 2,
      tag: "SERVICE 02",
      title: "Earthworks",
      points: [
        "Bulk earthworks",
        "Platforms and site preparation",
        "Mining and industrial projects",
      ],
      image: "/BG5.jpg",
      icon: <FaTractor size={22} />,
    },
    {
      id: 3,
      tag: "SERVICE 03",
      title: "Built Environment",
      points: [
        "Technical oversight",
        "Construction management",
        "Built environment advisory",
      ],
      image: "/BG8.jpg",
      icon: <FaHelmetSafety size={22} />,
    },
  ];

  return (
    <section id="services" className="bg-[#F1F1F1] py-24  font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-6">
        {/* Header - Refined Typography */}
        <div className="mb-16 border-l-4 border-[#212471] pl-8">
          <span className="text-[#212471] text-xs font-black tracking-[0.4em] uppercase">
            Specializations
          </span>
          <h2 className="text-[#212471] text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Our Core <br /> Capabilities.
          </h2>
          <p className="text-gray-500 text-sm mt-6 max-w-xl leading-relaxed italic">
            Delivering practical, reliable construction solutions backed by
            decades of field experience and technical precision.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-white border border-gray-200 hover:border-[#212471] transition-all duration-500"
            >
              {/* Image Section - Scaled down height */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#212471]/10 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Icon Tag */}
                <div className="absolute top-4 right-4 bg-[#212471] text-white p-3 shadow-xl">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase mb-3 block">
                  {service.tag}
                </span>

                <h3 className="text-lg font-bold text-[#212471] mb-6 uppercase tracking-tight">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#212471] mt-1.5 shrink-0"></span>
                      <span className="text-[13px] text-gray-600 leading-tight">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Subtle bottom accent line that grows on hover */}
                <div className="mt-8 w-0 h-0.5 bg-[#212471] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
