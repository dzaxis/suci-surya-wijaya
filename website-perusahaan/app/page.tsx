import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { VisionMission } from "@/components/home/VisionMission";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <VisionMission />
      <ServicesGrid />
      <ProjectsGrid />
      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}
