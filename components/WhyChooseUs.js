import React from "react";
import {
  FaHardHat,
  FaHandshake,
  FaUserTie,
  FaUsers,
  FaClipboardCheck,
} from "react-icons/fa";

const whyChooseUsData = [
  {
    title: "Proven track record on **multi-million-rand** projects",
    // icon: <FaHardHat size={20} />,
  },
  {
    title:
      "Experience with **mining houses**, municipalities, and **tier-1 contractors**",
    // icon: <FaHandshake size={20} />,
  },
  {
    title: "Strong **technical leadership** and on-site management",
    // icon: <FaUserTie size={20} />,
  },
  {
    title: "Commitment to **local empowerment** and job creation",
    // icon: <FaUsers size={20} />,
  },
  {
    title: "**Reliable delivery** within time and budget",
    // icon: <FaClipboardCheck size={20} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F1F1F1] py-20 text-[#212471]">
      {/* Container matches Projects section width and padding exactly */}
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-6">
        

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Header Block with Project-style text hierarchy */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-[#212471]">
              WHY TEMBO GROUP <br />
              {/* Trust & <br />
              Expertise. */}
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-[#212471] rounded-xl"></div>
           
          </div>

          {/* Service Cards */}
          {whyChooseUsData.map((item, index) => (
            <ServiceBox key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceBox({ item }) {
  const renderTitle = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <span key={i} className="font-black text-[#212471]">
          {part.replace(/\*\*/g, "")}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="rounded-xl group p-4 border border-[#212471]/10 bg-white/40 transition-all duration-500 flex flex-col justify-between min-h-20 hover:bg-white hover:shadow-lg">
      <div>
        <div className="text-[#212471]/40 mb-5 group-hover:text-[#212471] transition-colors duration-500">
          {item.icon}
        </div>

        <h4 className="text-[13px] leading-relaxed text-[#212471]/70 font-medium uppercase tracking-wider">
          {renderTitle(item.title)}
        </h4>
      </div>

      <div className="mt-4 flex justify-end">
        <div className="w-6 h-[1px] bg-[#212471]/10 group-hover:w-10 group-hover:bg-[#212471]/40 transition-all"></div>
      </div>
    </div>
  );
}
