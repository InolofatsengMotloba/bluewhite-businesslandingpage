import Hero from "@/components/Hero";
import About from "@/components/About";
import Purpose from "@/components/Purpose";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import Action from "@/components/Action";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Purpose />
        <Services />
        <Projects />
        <Team />
        <WhyChooseUs />
        <Action />
      </main>
    </div>
  );
}
