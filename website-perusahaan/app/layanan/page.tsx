import { ServicesGrid } from "@/components/home/ServicesGrid";
import { CTA } from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan | CV. Suci Surya Wijaya",
  description: "Layanan profesional CV. Suci Surya Wijaya meliputi construction, engineering, project management, dan lainnya.",
};

export default function LayananPage() {
  return (
    <>
      <section className="bg-[#0A192F] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 blueprint-grid-dark opacity-20" />
        <div className="relative max-w-[1280px] mx-auto px-6 py-12">
          <p className="text-[11px] tracking-[0.18em] text-[#00B4D8] font-semibold">02 / OUR SERVICES</p>
          <h1 className="mt-2 text-3xl lg:text-4xl font-bold">Layanan Kami</h1>
          <p className="mt-2 text-sm text-white/70 max-w-2xl">
            Enam pilar layanan terintegrasi — dirancang untuk presisi, efisiensi, dan hasil yang berkelanjutan.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <CTA />
    </>
  );
}
