"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projectService } from "@/services/projectService";
import type { Project } from "@/types";

export function ProjectsGrid({ bare = false }: { bare?: boolean }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    projectService.getAll().then((d) => {
      setProjects(d.filter((p) => p.status === "ACTIVE").slice(0, 6));
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="py-16 text-center text-sm text-[#64748B]">Loading katalog...</div>;

  return (
    <section className="py-16 bg-[#F4F5F7] border-y border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-6">
        {!bare && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <SectionTitle
              label="03 / Catalog"
              title="Katalog"
            />
            <Link href="/proyek" className="text-sm font-semibold text-[#007BFF] inline-flex items-center gap-1">
              Lihat semua katalog <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/proyek/${p.slug}`}
              className="group bg-white border border-[#E2E8F0] rounded-[2px] overflow-hidden hover:border-[#007BFF]/30 hover:shadow-[0_8px_24px_rgba(10,25,47,0.06)] transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#E2E8F0] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {!bare && (
                <div className="p-5">
                  <p className="text-[11px] tracking-[0.14em] font-semibold text-[#007BFF] uppercase">
                    {p.category} • {p.year}
                  </p>
                  <h3 className="mt-1 text-[15px] font-bold text-[#0A192F] leading-snug line-clamp-2 group-hover:text-[#007BFF] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#64748B]">{p.location}</p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
