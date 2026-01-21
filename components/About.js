import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#F1F1F1] py-24 px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Image Container with Accent */}
        <div className="lg:w-1/2 relative">
          {/* Subtle Decorative Box behind the image */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#212471]/20"></div>

          <div className="relative h-100 md:h-125 w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <Image
              src="/BG1.jpg" // Replace with your actual image path
              alt="Logistics Operations"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Stats or Years Experience */}
          <div className="absolute -bottom-10 -right-10 bg-[#212471] text-white p-8 hidden md:block">
            <p className="text-4xl font-bold italic">25+</p>
            <p className="text-[10px] tracking-widest uppercase mt-2">
              Years of <br /> Excellence
            </p>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            <span className="text-[#212471] text-xs font-black tracking-[0.4em] uppercase">
              Establishment
            </span>
            <h2 className="text-[#212471] text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Driving the <br />
              Industrial Pulse <br />
              Since 1998.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              In a world where speed and reliability are the currencies of
              success, we stand as a beacon of consistency. Our journey began
              with a single truck and a vision to redefine how the world
              connects.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-2 border-[#212471] pl-6 ">
              "We don't just move cargo; we move the foundations of industry.
              Our expertise lies in the complex, the heavy, and the
              time-critical."
            </p>
          </div>

          <div className="pt-4">
            <button className="px-8 py-4 bg-[#212471] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#2a2e8c] transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
