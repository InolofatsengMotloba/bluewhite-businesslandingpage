import Image from "next/image";

export default function Action() {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/BG10.jpg"
        alt="Footer background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#212471]/90" />

      {/* CTA content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-14">
          <div className="flex flex-col gap-6 rounded-xl bg-white/5 px-6 py-6 backdrop-blur-md md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <Image
              src="/LightLogo.png"
              alt="The Tembo Group logo"
              width={130}
              height={40}
              className="object-contain"
            />

            {/* Text */}
            <p className="text-sm text-[#F1F1F1]/90 text-center md:text-left">
              Let’s build with confidence. Reliable civil construction &
              earthworks solutions.
            </p>

            {/* Action */}
            <a
              href="tel:+27615177507"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-medium text-[#212471] hover:bg-white/90 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
