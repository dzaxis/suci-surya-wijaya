"use client";
import { useEffect, useState } from "react";
import { Building2, DraftingCompass, ClipboardList, Wrench, Users, Package, ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { serviceService } from "@/services/serviceService";
import type { Service } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  DraftingCompass,
  ClipboardList,
  Wrench,
  Users,
  Package,
};

export function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    serviceService.getAll().then((d) => {
      setServices(d.filter((s) => s.status === "ACTIVE").slice(0, 6));
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="py-16 text-center text-sm text-[#64748B]">Loading services...</div>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <SectionTitle
            label="02 / Our Services"
            title="Layanan Kami"
            subtitle="Solusi terintegrasi untuk setiap kebutuhan konstruksi dan engineering — presisi dari perencanaan hingga serah terima."
          />
          <a href="/layanan" className="text-sm font-semibold text-[#007BFF] inline-flex items-center gap-1">
            Lihat semua layanan <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon] ?? Building2;
            return (
              <div
                key={s.id}
                className="group border border-[#E2E8F0] bg-white p-6 rounded-[2px] hover:border-[#007BFF]/40 hover:shadow-[0_8px_24px_rgba(10,25,47,0.06)] transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 border border-[#E2E8F0] rounded-[2px] flex items-center justify-center group-hover:border-[#007BFF]/30 group-hover:bg-[#007BFF]/5 transition-colors">
                    <Icon className="w-5 h-5 text-[#007BFF]" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.14em] text-[#94A3B8] border border-[#E2E8F0] px-2 py-1 rounded-[2px]">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-[#0A192F]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569] line-clamp-3">{s.description}</p>
                <div className="mt-4 h-[1px] bg-[#E2E8F0] group-hover:bg-[#007BFF]/20" />
                <p className="mt-3 text-[11px] tracking-[0.14em] uppercase text-[#94A3B8]">Spec • Drawing • Assured</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
