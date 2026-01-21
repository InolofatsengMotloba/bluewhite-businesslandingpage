import React from "react";
import { FaTruck, FaShip, FaPlane } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { PiAnchorBold } from "react-icons/pi";

const services = [
  {
    title: "LAND FREIGHT",
    description:
      "Provides air freight services to meet up with your transportation needs, professional services to deliver your air freight fast and safe to its final destination.",
    icon: <FaTruck size={30} />,
    highlighted: true,
  },
  {
    title: "SEA FREIGHT",
    description:
      "Provides air freight services to meet up with your transportation needs, professional services to deliver your air freight fast and safe to its final destination.",
    icon: <FaShip size={30} />,
  },
  {
    title: "AIR FREIGHT",
    description:
      "Provides air freight services to meet up with your transportation needs, professional services to deliver your air freight fast and safe to its final destination.",
    icon: <FaPlane size={30} />,
  },
  {
    title: "PROJECT CARGO",
    description:
      "Provides air freight services to meet up with your transportation needs, professional services to deliver your air freight fast and safe to its final destination.",
    icon: <MdOutlinePrecisionManufacturing size={30} />,
  },
  {
    title: "SHIPPING AGENCY",
    description:
      "Provides air freight services to meet up with your transportation needs, professional services to deliver your air freight fast and safe to its final destination.",
    icon: <PiAnchorBold size={30} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#001D4A] py-20 px-6 md:px-12 lg:px-24 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Header Block (Top Left) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Unmatched <br />
              Services. <br />
              Unmatched <br />
              Excellence.
            </h2>
          </div>

          {/* 2. Land Freight (Top Middle/Right) */}
          <ServiceBox service={services[0]} />

          {/* 3. Sea Freight (Top Right) */}
          <ServiceBox service={services[1]} />

          {/* 4. Air Freight (Bottom Row - now under the text) */}
          <ServiceBox service={services[2]} />

          {/* 5. Project Cargo (Bottom Row) */}
          <ServiceBox service={services[3]} />

          {/* 6. Shipping Agency (Bottom Row) */}
          <ServiceBox service={services[4]} />
        </div>
      </div>
    </section>
  );
}

// Sub-component to keep the code clean
function ServiceBox({ service }) {
  return (
    <div
      className={`p-10 border transition-all duration-300 ${
        service.highlighted
          ? "border-white ring-1 ring-white shadow-2xl"
          : "border-white/20 hover:border-white/60"
      }`}
    >
      <div className="mb-6 opacity-90">{service.icon}</div>
      <h3 className="text-[14px] font-bold tracking-[0.2em] mb-4 uppercase">
        {service.title}
      </h3>
      <p className="text-[13px] text-gray-400 leading-relaxed font-light">
        {service.description}
      </p>
    </div>
  );
}
