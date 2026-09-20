import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white relative overflow-hidden">
      <BlueprintGrid dark />
      <div className="relative max-w-[1280px] mx-auto px-6 pt-14 pb-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 border-b border-white/10 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#007BFF] flex items-center justify-center rounded-[2px]">
                <span className="font-bold text-sm">SS</span>
              </div>
              <div>
                <p className="font-bold text-sm tracking-tight">CV. SUCI SURYA WIJAYA</p>
                <p className="text-[10px] tracking-[0.16em] text-[#00B4D8] font-semibold">PRECISION IN EVERY DETAIL</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              Professional. Precise. Reliable.<br />
              Membangun dengan presisi & integritas untuk hasil yang kokoh dan bernilai jangka panjang.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-white/50 border border-white/15 px-3 py-1.5 rounded-[2px]">
              <span className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full animate-pulse" /> SYSTEM: OPERATIONAL
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] font-semibold text-white/50 mb-4">QUICK LINKS</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                ["Home", "/"],
                ["Tentang Kami", "/tentang-kami"],
                ["Layanan", "/layanan"],
                ["Katalog", "/proyek"],
                ["Kontak", "/kontak"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors inline-flex items-center gap-1">
                    {label} <ArrowUpRight className="w-3 h-3 opacity-40" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] font-semibold text-white/50 mb-4">CONTACT</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-[#00B4D8] mt-0.5 shrink-0" /> <span>Jl. Lingkungan Margahayu RT.025 RW.009, Kel. Cicurug, Kec. Majalengka, Kab. Majalengka, Jawa Barat</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="w-4 h-4 text-[#00B4D8] mt-0.5 shrink-0" /> <span>[Nomor Telepon] / [WhatsApp]</span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="w-4 h-4 text-[#00B4D8] mt-0.5 shrink-0" /> <span>[Email Perusahaan]</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] font-semibold text-white/50 mb-4">SOCIAL</p>
            <div className="flex flex-wrap gap-2">
              {["Instagram", "Facebook", "LinkedIn", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-3 py-1.5 border border-white/15 rounded-[2px] text-xs tracking-wide text-white/70 hover:text-white hover:border-[#007BFF] hover:bg-[#007BFF]/10 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/40">Jam Operasional<br />[Jam Operasional]</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© 2026 CV. Suci Surya Wijaya. All Rights Reserved.</p>
          <p className="tracking-[0.14em] uppercase">Built with Precision • Drawing No. SS-2026-001</p>
        </div>
      </div>
    </footer>
  );
}
