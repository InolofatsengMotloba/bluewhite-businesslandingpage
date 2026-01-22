import Image from "next/image";

const ongoingProjects = [
  {
    title: "Anglo RBMR - Robust Low Nickel Plant",
    description: "Civil works & earthworks",
    client: "WBHO Construction",
    value: "R7.3 Million",
    duration: "9 Months",
    year: "2026",
    location: "Rustenburg, SA",
  },
  {
    title: "Anglo American Platinum - Precious Metal Refinery (DAM2)",
    description: "Earthworks for storage pad ",
    client: "WBHO Construction",
    value: "R11 million",
    duration: "6 Months",
    year: "2026",
    location: "Rustenburg, SA",
  },
];

const completedProjects = [
  {
    title: "Internal Roads & Paving - Reagile Ext. 6, Koster",
    client: "Kgetlengrivier Local Municipality",
    value: "R12.6 million",
  },
  {
    title: "Admin Building Construction - Ditsobotla Local Municipality ",
    client: "Ariona Consultants",
    value: "R4.8 million",
  },
  {
    title: "Road Maintenance - Brandfort Internal Roads",
    client: "Ariona Consultants",
    value: "R1.45 million",
  },
  {
    title: "Emergency Repairs & Building Maintenance",
    client: "Ditsong Museums of South Africa ",
    value: "R4.75 million",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#212471]">
      <div className="absolute inset-0">
        <Image
          src="/BG6.jpg"
          alt="Construction background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#212471]/90 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-5 lg:px-6 flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE: Sticky Heading */}
        <div className="lg:w-1/3 pt-20 pb-20">
          <div className="lg:sticky lg:top-40">
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              PROVEN PROJECT EXPERIENCE
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-white rounded-xl" />

            <p className="mt-6 text-sm text-white max-w-md">
              Trusted on High-Value, High-Risk Projects.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Scrollable List */}
        <div className="lg:w-2/3 pt-20 pb-20 space-y-20">
          {/* Ongoing Section */}
          <div>
            <div className="mb-10">
              <h3 className="text-white text-[14px] font-black tracking-[0.3em] uppercase">
                Ongoing Projects
              </h3>
              <div className="mt-2 w-full h-px bg-white/20"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ongoingProjects.map((project, index) => (
                <ProjectBlock key={index} project={project} isOngoing={true} />
              ))}
            </div>
          </div>

          {/* Completed Section */}
          <div>
            <div className="mb-10">
              <h3 className="text-white/50 text-[14px] font-black tracking-[0.3em] uppercase">
                Completed Works
              </h3>
              <div className="mt-2 w-full h-px bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {completedProjects.map((project, index) => (
                <ProjectBlock key={index} project={project} isOngoing={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectBlock({ project, isOngoing }) {
  return (
    <div
      className={`group p-8 border transition-all duration-500 flex flex-col justify-between min-h-55 ${
        isOngoing
          ? "border-white/20 bg-white/3 shadow-2xl"
          : "border-white/5 opacity-60 hover:opacity-100 hover:border-white/20 hover:bg-white/2"
      }`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-mono text-white/40 tracking-tighter">
            {project.duration && ` ${project.duration}`}
          </span>
          {isOngoing && (
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-green-400 font-bold uppercase tracking-widest">
                Active
              </span>
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-gray-400 transition-colors">
          {project.title}
        </h4>

        {project.description && (
          <p className="text-white/60 text-xs mb-4">{project.description}</p>
        )}

        {/* <p className="text-[11px] text-white/40 tracking-[0.15em] uppercase">
          {project.location}
        </p> */}
      </div>

      {/* Technical Details Footer - Only shows if data exists */}
      {(project.client || project.value) && (
        <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-end">
          {project.client && (
            <div className="flex flex-col">
              <span className="text-[9px] text-white/30 uppercase tracking-tighter">
                Client
              </span>
              <span className="text-white/70 text-[11px] font-medium">
                {project.client}
              </span>
            </div>
          )}
          {project.value && (
            <div className="flex flex-col items-end">
              <span className="text-[9px] text-white/30 uppercase tracking-tighter">
                Contract Value
              </span>
              <span className="text-white text-[12px] font-mono">
                {project.value}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
