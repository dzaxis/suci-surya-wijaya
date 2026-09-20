import Link from "next/link";
import { ArrowRight, Award, Ruler } from "lucide-react";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#E2E8F0]">
      <BlueprintGrid />
      {/* measurement lines */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 hidden xl:flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#94A3B8]">
        <span className="w-6 h-[1px] bg-[#94A3B8]/40" /> 1280 GRID • PRECISION MODE <span className="w-6 h-[1px] bg-[#94A3B8]/40" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 py-10 lg:py-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#E2E8F0] bg-white px-3 py-1.5 rounded-[2px] mb-5">
              <span className="w-1.5 h-1.5 bg-[#007BFF] rounded-full" />
              <span className="text-[11px] tracking-[0.16em] font-semibold text-[#0A192F]">CV. SUCI SURYA WIJAYA</span>
              <span className="hidden sm:inline text-[10px] tracking-[0.14em] text-[#64748B]">• EST. 20XX</span>
            </div>

            <p className="tech-label mb-3">PRECISION • QUALITY • TRUST</p>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold leading-[0.95] tracking-tight text-[#0A192F]">
              Membangun dengan
              <br />
              <span className="text-[#007BFF]">Presisi &</span>
              <br />
              Integritas.
            </h1>

            <p className="mt-5 text-[15px] leading-relaxed text-[#475569] max-w-[520px]">
              Kami menghadirkan solusi profesional dengan mengutamakan kualitas, ketepatan, integritas, dan kepuasan
              klien. Presisi dalam setiap detail untuk hasil yang kokoh dan berkelanjutan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/layanan"
                className="inline-flex items-center gap-2 bg-[#007BFF] text-white px-6 h-11 rounded-[2px] text-sm font-semibold hover:bg-[#0063CC] transition-colors"
              >
                Lihat Layanan <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 bg-white border border-[#E2E8F0] text-[#0A192F] px-6 h-11 rounded-[2px] text-sm font-semibold hover:border-[#007BFF] hover:text-[#007BFF] transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>

            <div className="mt-8 flex gap-6 text-xs">
              <span className="flex items-center gap-2 text-[#475569]">
                <span className="w-7 h-7 border border-[#E2E8F0] rounded-[2px] flex items-center justify-center">
                  <Award className="w-3.5 h-3.5 text-[#007BFF]" />
                </span>
                ISO Quality Standard
              </span>
              <span className="flex items-center gap-2 text-[#475569]">
                <span className="w-7 h-7 border border-[#E2E8F0] rounded-[2px] flex items-center justify-center">
                  <Ruler className="w-3.5 h-3.5 text-[#007BFF]" />
                </span>
                Precision Engineering
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative border border-[#E2E8F0] bg-[#F4F5F7] p-2 rounded-[2px]">
              <div className="relative aspect-[4/3.2] overflow-hidden bg-white rounded-[2px] border border-[#E2E8F0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/1.jpeg"
                  alt="Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent" />
                {/* Blueprint overlay lines */}
                <div className="absolute inset-0 opacity-20 blueprint-grid" />
                {/* Technical badges */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1.5 rounded-[2px] border border-[#E2E8F0]">
                  <p className="text-[10px] tracking-[0.14em] font-bold text-[#0A192F]">PROJECT NO. 001</p>
                  <p className="text-[10px] text-[#64748B]">PRECISION / QUALITY / TRUST</p>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0A192F] text-white px-3 py-2 rounded-[2px]">
                  <p className="text-[11px] font-bold tracking-wide">EST. 20XX</p>
                  <p className="text-[10px] text-white/60 tracking-[0.14em]">SURVEY • PLAN • BUILD</p>
                </div>
              </div>

              {/* Technical corners */}
              <span className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[#007BFF]" />
              <span className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-[#007BFF]" />
              <span className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-[#007BFF]" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#007BFF]" />
            </div>

            <div className="mt-3 flex justify-between text-[10px] tracking-[0.14em] text-[#94A3B8] uppercase">
              <span>DWG — SS-2026-001 — SCALE 1:100</span>
              <span>CHK: SSJ • APP: Q.C.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
