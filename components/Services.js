import React from "react";
import { FaTractor } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { FaHelmetSafety } from "react-icons/fa6";

export default function Services() {
  
  const services = [
    {
      id: 1,
      tag: "SERVICE ONE",
      title: "Civil Construction",
      points: [
        "Roads and paving ",
        "Buildings and structural works ",
        "Municipal infrastructure ",
      ],
      image: "/BG4.jpg",
      icon: <MdConstruction />,
    },
    {
      id: 2,
      tag: "SERVICE TWO",
      title: "Earthworks",
      points: [
        "Bulk earthworks",
        "Platforms, pads, and site preparation ",
        "Mining and industrial earthworks ",
      ],
      image: "/BG5.jpg",
      icon: <FaTractor />,
    },
    {
      id: 3,
      tag: "SERVICE THREE",
      title: "Professional Build & Consulting",
      points: [
        "Technical oversight ",
        "Construction management support",
        "Built environment advisory services ",
      ],
      image: "/BG8.jpg",
      icon: <FaHelmetSafety />,
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#F1F1F1] flex flex-col justify-center py-10 px-4 md:px-10">
      {/* Header */}
      <div className="text-center mb-6 max-w-4xl mx-auto">
        <span className="text-[#f37021] font-bold tracking-[0.2em] text-sm">
          OUR CORE SERVICES
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#0a2351] mt-2">
          WHAT WE DO
        </h2>
        <p className="text-gray-600 text-base md:text-lg mt-4 max-w-3xl mx-auto">
          We deliver practical, reliable construction solutions backed by
          experience, precision, and industry knowledge.
        </p>
        <div className="w-20 h-1 bg-[#f37021] mx-auto mt-6"></div>
      </div>

      {/* Cards Container */}
      <div
        className="
        w-full max-w-7xl mx-auto
        flex gap-12
        overflow-x-auto md:overflow-visible
        scroll-smooth
        scrollbar-hide
        pb-4
        items-stretch
      "
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="
              min-w-80 sm:min-w-96 md:min-w-0
              flex-1 group flex flex-col
            "
          >
            {/* Image - Increased height proportionally */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{ height: "48px" }}
              >
                <path
                  d="M0,120 C300,85 900,85 1200,120 L1200,120 L0,120 Z"
                  fill="#F1F1F1"
                />
              </svg>
            </div>

            {/* Card Content - Proportionally increased */}
            <div
              className="
              relative bg-white
              pt-10 pb-7 px-7
              shadow-xl
              w-[92%] ml-auto
              -mt-20
              border-b-3 border-[#212471]
              transition-all duration-300
              group-hover:-translate-y-2
              group-hover:shadow-2xl
            "
            >
              {/* Icon - Increased size */}
              <div
                className="
                absolute top-0 right-8 -translate-y-1/2
                bg-[#212471]
                w-14 h-14
                rounded-full
                flex items-center justify-center
                text-white text-2xl
                shadow-lg
                group-hover:scale-110
                transition-transform duration-300
              "
              >
                {service.icon}
              </div>

              <p className="text-[#f37021] text-xs font-bold tracking-widest uppercase mb-2">
                {service.tag}
              </p>

              <h3 className="text-lg md:text-xl font-bold text-[#0a2351] mb-4">
                {service.title}
              </h3>

              <ul className="text-gray-600 text-sm md:text-base space-y-2 list-disc list-inside">
                {service.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
