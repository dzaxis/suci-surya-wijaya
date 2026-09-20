import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { CTA } from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog | CV. Suci Surya Wijaya",
  description: "Katalog terpilih CV. Suci Surya Wijaya.",
};

export default function ProyekPage() {
  return (
    <>
      <section className="bg-[#0A192F] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 blueprint-grid-dark opacity-20" />
        <div className="relative max-w-[1280px] mx-auto px-6 py-12">
          <p className="text-[11px] tracking-[0.18em] text-[#00B4D8] font-semibold">03 / CATALOG</p>
          <h1 className="mt-2 text-3xl lg:text-4xl font-bold">Katalog</h1>
        </div>
      </section>
      <ProjectsGrid bare />
      <CTA />
    </>
  );
}
