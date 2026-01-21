import Image from "next/image";

const ongoingProjects = [
  { title: "Industrial Hub A", location: "Dammam, KSA", year: "2026" },
  {
    title: "Port Expansion Phase II",
    location: "Jebel Ali, UAE",
    year: "2026",
  },
];

const completedProjects = [
  { title: "Railway Logistics Center", location: "Riyadh, KSA", year: "2025" },
  { title: "Warehouse Delta", location: "Doha, Qatar", year: "2024" },
  { title: "Smart Terminal Upgrade", location: "Salalah, Oman", year: "2024" },
  {
    title: "Regional Distribution Wing",
    location: "Kuwait City, KW",
    year: "2023",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#212471]">
      {/* Background with Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src="/BG1.jpg"
          alt="Construction background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#212471]/90 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE: Sticky Heading - Adjusted to start at pt-20 */}
        <div className="lg:w-1/3 pt-20 pb-20">
          <div className="lg:sticky lg:top-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Executing <br />
              Visionary <br />
              Projects.
            </h2>
            <div className="mt-8 w-16 h-0.5 bg-white"></div>
            <p className="text-white/60 mt-8 text-[13px] leading-relaxed max-w-xs uppercase tracking-widest">
              From conception to completion, we deliver infrastructure that
              stands the test of time.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Scrollable List */}
        <div className="lg:w-2/3 pt-20 pb-20 space-y-16">
          {/* Ongoing Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-white text-[14px] font-black tracking-[0.3em] uppercase">
                Ongoing Projects
              </h3>
              <div className="mt-2 w-full h-[1px] bg-white/20"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingProjects.map((project, index) => (
                <ProjectBlock key={index} project={project} isOngoing={true} />
              ))}
            </div>
          </div>

          {/* Completed Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-white/50 text-[14px] font-black tracking-[0.3em] uppercase">
                Completed Works
              </h3>
              <div className="mt-2 w-full h-[1px] bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

// Block Component to match "Why Choose Us" style
function ProjectBlock({ project, isOngoing }) {
  return (
    <div
      className={`p-8 border-2 transition-all duration-500 flex flex-col justify-between h-[220px] ${
        isOngoing
          ? "border-white opacity-100 shadow-xl bg-white/5"
          : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
      }`}
    >
      <div>
        <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
        <p className="text-[12px] text-white/50 tracking-widest uppercase">
          {project.location}
        </p>
      </div>

      <div className="flex justify-between items-end">
        <span className="text-[10px] font-mono text-white/40">
          {project.year}
        </span>
        {isOngoing && (
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        )}
      </div>
    </div>
  );
}
