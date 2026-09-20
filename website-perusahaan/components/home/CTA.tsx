import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";

export function CTA() {
  return (
    <section className="relative bg-[#0A192F] overflow-hidden">
      <BlueprintGrid dark />
      <div className="relative max-w-[1280px] mx-auto px-6 py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.18em] font-semibold text-[#00B4D8]">READY TO BUILD?</p>
            <h3 className="mt-2 text-[28px] lg:text-[36px] font-bold text-white leading-tight">
              Ready to Build Something Great?
            </h3>
            <p className="mt-2 text-sm text-white/70 max-w-xl">Diskusikan kebutuhan proyek Anda bersama tim kami. Presisi dimulai dari konsultasi pertama.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-[#007BFF] text-white px-7 h-11 rounded-[2px] text-sm font-semibold hover:bg-[#0063CC] transition-colors"
            >
              <Phone className="w-4 h-4" /> Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/proyek"
              className="inline-flex items-center gap-2 bg-white text-[#0A192F] px-7 h-11 rounded-[2px] text-sm font-semibold hover:bg-[#F4F5F7] transition-colors"
            >
              Lihat Portofolio
            </Link>
          </div>
        </div>
        <div className="mt-8 flex gap-6 text-[10px] tracking-[0.14em] uppercase text-white/30 border-t border-white/10 pt-4">
          <span>DWG — CTA-2026 — REV 01</span>
          <span className="hidden sm:inline">SCALE — 1:1 • PRECISION MODE</span>
        </div>
      </div>
    </section>
  );
}
