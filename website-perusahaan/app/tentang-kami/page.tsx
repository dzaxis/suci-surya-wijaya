import { About } from "@/components/home/About";
import { VisionMission } from "@/components/home/VisionMission";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { CTA } from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | CV. Suci Surya Wijaya",
  description: "Mengenal CV. Suci Surya Wijaya - perusahaan yang berkomitmen pada kualitas, presisi, dan integritas.",
};

export default function TentangKamiPage() {
  return (
    <>
      <section className="bg-[#0A192F] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 blueprint-grid-dark opacity-20" />
        <div className="relative max-w-[1280px] mx-auto px-6 py-12">
          <p className="text-[11px] tracking-[0.18em] text-[#00B4D8] font-semibold">01 / ABOUT COMPANY</p>
          <h1 className="mt-2 text-3xl lg:text-4xl font-bold">Tentang CV. Suci Surya Wijaya</h1>
          <p className="mt-2 text-sm text-white/70 max-w-2xl">
            Dibangun di atas fondasi presisi, kualitas, dan kepercayaan — menghadirkan solusi profesional untuk setiap tantangan konstruksi.
          </p>
        </div>
      </section>
      <About />
      <VisionMission />
      <Stats />
      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}
