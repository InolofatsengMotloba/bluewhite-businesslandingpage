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
      image: "/BG7.jpg",
      icon: <MdConstruction size={20} />,
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
      icon: <FaTractor size={20} />,
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
      image: "/BI1.jpg",
      icon: <FaHelmetSafety size={20} />,
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#F1F1F1] font-sans min-h-[calc(100vh-5rem)] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-6 w-full">
        {/* Header (UNCHANGED as requested) */}
        <div className="mb-8">
          <h2 className="text-[#212471] text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            WHAT WE DO
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-[#212471] rounded-xl" />

          <p className="mt-5 text-sm text-[#212471]/60 max-w-md">
            This structure ensures compliance, safety, quality control, and
            efficient execution across all projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-gray-200 hover:border-[#212471] transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-[#212471]/10 group-hover:bg-transparent transition-colors duration-500" />

                <div className="absolute top-3 right-3 bg-[#212471] text-white p-2 shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase mb-2">
                  {service.tag}
                </span>

                <h3 className="text-base font-bold text-[#212471] mb-4 uppercase">
                  {service.title}
                </h3>

                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#212471] mt-1.5 shrink-0"></span>
                      <span className="text-[13px] text-gray-600 leading-tight">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <div className="w-0 h-0.5 bg-[#212471] group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
