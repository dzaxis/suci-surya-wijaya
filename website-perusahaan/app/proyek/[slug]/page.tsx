"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import { projectService } from "@/services/projectService";
import type { Project } from "@/types";

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.slug) return;
    projectService
      .getBySlug(params.slug)
      .then((p) => {
        if (!p) router.push("/proyek");
        else setProject(p);
      })
      .finally(() => setLoading(false));
  }, [params.slug, router]);

  if (loading) return <div className="max-w-[1280px] mx-auto px-6 py-16 text-sm text-[#64748B]">Loading...</div>;
  if (!project) return null;

  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <Link href="/proyek" className="inline-flex items-center gap-2 text-sm text-[#007BFF] hover:text-[#0063CC]">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog
        </Link>

        <div className="mt-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div>
            <div className="aspect-[16/10] overflow-hidden rounded-[2px] border border-[#E2E8F0] bg-[#F4F5F7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 flex gap-2 text-[10px] tracking-[0.12em] text-[#94A3B8] uppercase">
              <span className="border border-[#E2E8F0] px-2 py-1 rounded-[2px] bg-[#F4F5F7]">DWG — {project.slug.toUpperCase()}</span>
              <span className="border border-[#E2E8F0] px-2 py-1 rounded-[2px]">SCALE 1:100</span>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.16em] font-semibold text-[#007BFF] uppercase">KATALOG DETAIL — {project.category}</p>
            <h1 className="mt-2 text-2xl lg:text-3xl font-bold text-[#0A192F] leading-tight">{project.title}</h1>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="border border-[#E2E8F0] p-3 rounded-[2px] bg-[#F4F5F7]">
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#94A3B8] flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Category
                </p>
                <p className="text-sm font-semibold text-[#0A192F] mt-1">{project.category}</p>
              </div>
              <div className="border border-[#E2E8F0] p-3 rounded-[2px] bg-[#F4F5F7]">
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#94A3B8] flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Location
                </p>
                <p className="text-sm font-semibold text-[#0A192F] mt-1">{project.location}</p>
              </div>
              <div className="border border-[#E2E8F0] p-3 rounded-[2px] bg-[#F4F5F7]">
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#94A3B8] flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Year
                </p>
                <p className="text-sm font-semibold text-[#0A192F] mt-1">{project.year}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs tracking-[0.14em] font-semibold text-[#0A192F] uppercase border-b border-[#E2E8F0] pb-2">Description</p>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{project.description}</p>
            </div>

            <Link
              href="/kontak"
              className="mt-6 inline-flex items-center justify-center bg-[#007BFF] text-white h-11 px-6 rounded-[2px] text-sm font-semibold hover:bg-[#0063CC] w-full"
            >
              Konsultasi Proyek Serupa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
