import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F1F1F1] py-20 px-6 md:px-12 lg:px-24 font-sans overflow-hidden min-h-[calc(100vh-5rem)]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Image Container with Accent */}
        <div className="lg:w-1/2 relative w-full">
          {/* Subtle Decorative Box behind the image */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#212471]/20"></div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <Image
              src="/BG1.jpg" // Replace with your actual image path
              alt="Logistics Operations"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Stats or Years Experience */}
          <div className="absolute -bottom-10 -right-10 bg-[#212471] text-white p-8 hidden md:block">
            <p className="text-4xl font-bold italic">100%</p>
            <p className="text-[10px] tracking-widest uppercase mt-2">
              Black <br /> Owned
            </p>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            <span className="text-[#535369]/20 text-xs font-black tracking-[0.4em] uppercase">
              WHO WE ARE
            </span>
            <h2 className="text-[#212471] mt-4 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              BUILT BY EXPERTS. DRIVEN BY IMPACT.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Founded and operated by qualified local professionals, The Tembo
              Group Investment combines technical excellencewith a
              community-focused approach. Our leadership and operational teams
              bring extensive experience in civil works, earthworks, and
              construction management, ensuring reliable delivery across complex
              projects.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-2 border-[#212471] pl-6 ">
              "We build more than infrastructure. We create durable foundations
              that support growth, industry, and community development."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
