const steps = [
  { n: "01", title: "Consultation", desc: "Diskusi kebutuhan dan survei awal." },
  { n: "02", title: "Planning", desc: "Perencanaan teknis & penjadwalan." },
  { n: "03", title: "Execution", desc: "Eksekusi lapangan presisi." },
  { n: "04", title: "Quality Control", desc: "Pemeriksaan mutu berlapis." },
  { n: "05", title: "Project Completion", desc: "Serah terima & dokumentasi." },
];

export function Process() {
  return (
    <section className="py-16 bg-[#F4F5F7] border-y border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="tech-label">OUR WORKING PROCESS</p>
          <h3 className="mt-2 text-3xl font-bold text-[#0A192F]">Alur Kerja Presisi</h3>
          <p className="mt-2 text-sm text-[#475569]">Sistematis, terukur, dan transparan dari konsultasi hingga serah terima.</p>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden lg:grid grid-cols-5 gap-0">
          {steps.map((s, i) => (
            <div key={s.n} className="relative flex">
              <div className="flex-1 border border-[#E2E8F0] bg-white p-6 rounded-[2px] mx-2">
                <p className="text-xs font-bold tracking-[0.14em] text-[#007BFF]">{s.n}</p>
                <h4 className="mt-1 font-bold text-[#0A192F] text-sm">{s.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-[#475569]">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-2 w-4 h-[1px] bg-[#007BFF]/40 hidden lg:block" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden space-y-3">
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-[2px] bg-[#0A192F] text-white flex items-center justify-center text-xs font-bold">
                  {s.n}
                </div>
                {i < steps.length - 1 && <div className="w-[1px] flex-1 bg-[#E2E8F0] mt-2" />}
              </div>
              <div className="flex-1 border border-[#E2E8F0] bg-white p-4 rounded-[2px] mb-2">
                <h4 className="font-bold text-[#0A192F] text-sm">{s.title}</h4>
                <p className="text-xs text-[#475569] mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
