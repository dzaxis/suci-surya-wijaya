import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="border border-[#E2E8F0] p-2 rounded-[2px] bg-[#F4F5F7]">
              <div className="aspect-[4/3] overflow-hidden rounded-[2px] border border-[#E2E8F0] bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/2.jpeg"
                  alt="Company"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0A192F] text-white px-5 py-4 rounded-[2px] border border-white/10 hidden sm:block">
              <p className="text-[11px] tracking-[0.16em] text-white/50">ESTABLISHED</p>
              <p className="text-xl font-bold">20XX — NOW</p>
              <p className="text-xs text-white/60">Precision Built</p>
            </div>
            <span className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-[#007BFF]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-[#007BFF]" />
          </div>

          <div>
            <SectionTitle
              label="01 / About Company"
              title="Built on Precision. Driven by Excellence."
              subtitle="CV. Suci Surya Wijaya merupakan perusahaan yang berkomitmen memberikan solusi profesional dengan mengedepankan kualitas, ketepatan, integritas, dan kepuasan klien."
            />
            <ul className="mt-6 space-y-3">
              {["Standar mutu tinggi di setiap fase proyek", "Tim profesional berpengalaman & tersertifikasi", "Ketepatan waktu dan transparansi pekerjaan"].map(
                (t) => (
                  <li key={t} className="flex gap-3 text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#007BFF] mt-0.5 shrink-0" /> {t}
                  </li>
                )
              )}
            </ul>
            <Link
              href="/tentang-kami"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#007BFF] hover:text-[#0063CC]"
            >
              Selengkapnya <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
