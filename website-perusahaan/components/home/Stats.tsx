export function Stats() {
  const items = [
    { value: "10+", label: "Tahun Pengalaman", sub: "Years of Excellence" },
    { value: "50+", label: "Proyek", sub: "Projects Delivered" },
    { value: "100%", label: "Komitmen Kualitas", sub: "Quality Commitment" },
    { value: "24/7", label: "Professional Support", sub: "Dedicated Team" },
  ];
  return (
    <section className="bg-[#0A192F] border-y border-white/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 divide-y lg:divide-y-0 border-x border-white/10">
          {items.map((it) => (
            <div key={it.label} className="px-6 lg:px-8 py-8 text-center lg:text-left">
              <p className="text-[32px] font-bold tracking-tight text-white">{it.value}</p>
              <p className="text-sm font-semibold text-white mt-1">{it.label}</p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-white/40 mt-1">{it.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
