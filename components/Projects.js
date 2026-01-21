import Image from "next/image";

export default function Projects() {
  return (
    <section className="relative h-62 w-full overflow-hidden">
      {/* Next.js Optimized Background Image */}
      <Image
        src="/BG1.jpg"
        alt="Construction background"
        fill
        className="object-cover"
        priority // Ensures the image loads quickly as it's a section background
      />

      {/* Overlay - Using your specific color with 85% opacity */}
      <div className="absolute inset-0 bg-[#212471]/85 z-10"></div>

      {/* Content Layer */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl font-bold">
          Projects Section goes here
        </h1>
        <p className="text-white/70 mt-2">
          Subtext or call to action description
        </p>
      </div>
    </section>
  );
}
