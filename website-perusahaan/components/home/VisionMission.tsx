import { Target, Compass, ShieldCheck, Clock3 } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-16 bg-[#F4F5F7] border-y border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#0A192F] text-white p-8 rounded-[2px] relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 opacity-10 blueprint-grid-dark" />
            <div className="relative">
              <p className="text-[11px] tracking-[0.18em] text-[#00B4D8] font-semibold mb-2">OUR VISION</p>
              <h3 className="text-2xl font-bold leading-tight flex gap-3">
                <Target className="w-6 h-6 text-[#00B4D8] shrink-0 mt-1" />
                Visi Kami
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/80">
                Menjadi perusahaan yang terpercaya dalam memberikan solusi profesional berkualitas dengan standar kerja
                yang tinggi.
              </p>
              <div className="mt-6 h-[1px] bg-white/10" />
              <p className="mt-4 text-xs tracking-[0.14em] text-white/40 uppercase">Vision — Precision • Quality • Trust</p>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] p-8 rounded-[2px]">
            <p className="text-[11px] tracking-[0.18em] text-[#007BFF] font-semibold mb-2">OUR MISSION</p>
            <h3 className="text-2xl font-bold text-[#0A192F] flex gap-3">
              <Compass className="w-6 h-6 text-[#007BFF] shrink-0 mt-1" />
              Misi Kami
            </h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { n: "01", t: "Mengutamakan kualitas.", icon: ShieldCheck },
                { n: "02", t: "Memberikan pelayanan profesional.", icon: Compass },
                { n: "03", t: "Mengutamakan ketepatan waktu.", icon: Clock3 },
                { n: "04", t: "Menjaga integritas dan kepercayaan pelanggan.", icon: Target },
              ].map((m) => (
                <div key={m.n} className="border border-[#E2E8F0] p-4 rounded-[2px] bg-[#F4F5F7]">
                  <p className="text-xs tracking-[0.16em] font-bold text-[#007BFF]">{m.n}</p>
                  <p className="text-sm font-medium text-[#0A192F] mt-1 leading-snug">{m.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
