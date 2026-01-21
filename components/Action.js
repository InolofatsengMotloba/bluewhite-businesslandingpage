import Image from "next/image";

export default function Action() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Fixed, shallow height so it reveals fully with footer */}
      <div className="relative h-55 sm:h-65">
        {/* Background image */}
        <Image
          src="/BG10.jpg"
          alt="Construction background"
          fill
          className="object-cover"
          priority
        />

        {/* Brand overlay */}
        <div className="absolute inset-0 bg-[#212471]/85" />

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto h-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
            {/* LEFT: Text content */}
            <div className="max-w-xl">
              <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">
                Let's Build With Confidence
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#F1F1F1]/80 leading-relaxed">
                Partner with The Tembo Group Investment for dependable civil
                construction and earthworks solutions
              </p>

              <div className="mt-6">
                <a
                  href="tel:+27615177507"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-[#212471] transition-colors duration-200"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* RIGHT: Quiet structural balance */}
            <div className="hidden md:flex h-full items-center justify-end">
              <div className="relative h-40 w-px bg-white/20">
                {/* Subtle accent block */}
                <span className="absolute top-0 -right-px h-10 w-0.75 bg-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
