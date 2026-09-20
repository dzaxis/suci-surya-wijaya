import { Crosshair, Shield, Users2, FileCheck } from "lucide-react";

const items = [
  { n: "01", title: "Precision", desc: "Detail presisi di setiap gambar kerja dan eksekusi lapangan.", icon: Crosshair },
  { n: "02", title: "Quality", desc: "Material terkurasi dan kontrol mutu berlapis.", icon: Shield },
  { n: "03", title: "Professional Team", desc: "Tenaga ahli bersertifikasi dan manajemen proyek berpengalaman.", icon: Users2 },
  { n: "04", title: "Commitment", desc: "Tepat waktu, transparan, dan bertanggung jawab penuh.", icon: FileCheck },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="bg-[#0A192F] text-white p-8 rounded-[2px] relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid-dark opacity-30" />
            <div className="relative">
              <p className="tech-label !text-[#00B4D8]">WHY CHOOSE US</p>
              <h3 className="mt-2 text-3xl font-bold leading-tight">Mengapa Memilih Kami?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Kami menggabungkan disiplin engineering, manajemen mutu, dan komunikasi transparan untuk memastikan setiap
                proyek selesai tepat sasaran.
              </p>
              <div className="mt-6 border border-white/10 rounded-[2px] p-4 bg-white/5">
                <p className="text-xs tracking-[0.14em] uppercase text-white/50">Technical Spec</p>
                <div className="mt-2 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-lg font-bold">A+</p>
                    <p className="text-[10px] text-white/50">Grade</p>
                  </div>
                  <div className="border-x border-white/10">
                    <p className="text-lg font-bold">100%</p>
                    <p className="text-[10px] text-white/50">Checked</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">24/7</p>
                    <p className="text-[10px] text-white/50">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <div key={it.n} className="border border-[#E2E8F0] p-6 rounded-[2px] bg-[#F4F5F7] hover:bg-white hover:border-[#007BFF]/20 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 bg-white border border-[#E2E8F0] rounded-[2px] flex items-center justify-center">
                    <it.icon className="w-4.5 h-4.5 text-[#007BFF]" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.14em] text-[#94A3B8]">{it.n}</span>
                </div>
                <h4 className="mt-4 font-bold text-[#0A192F]">{it.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#475569]">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
