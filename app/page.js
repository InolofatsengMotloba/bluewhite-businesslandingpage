import Image from "next/image";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Purpose from "@/components/Purpose";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import Action from "@/components/Action";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Purpose />
      <Services />
      <Projects />
      <Team />
      <WhyChooseUs />

      {/* CTA + Footer shared background */}
      <section className="relative w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/BG10.jpg"
            alt="Footer background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#212471]/90" />

        {/* Content */}
        <div className="relative z-10">
          <Action />
          <Footer />
        </div>
      </section>
    </main>
  );
}
