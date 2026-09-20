export default function AdminSettingsPage() {
  return (
    <div>
      <p className="text-[11px] tracking-[0.16em] font-semibold text-[#007BFF]">ADMIN / SETTINGS</p>
      <h1 className="text-xl font-bold text-[#0A192F]">Pengaturan</h1>
      <div className="mt-6 bg-white border border-[#E2E8F0] p-6 rounded-[2px]">
        <h3 className="font-semibold text-[#0A192F]">Environment</h3>
        <div className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between bg-[#F4F5F7] border border-[#E2E8F0] px-3 py-2 rounded-[2px]">
            <span className="text-[#64748B]">NEXT_PUBLIC_API_URL</span>
            <span className="font-mono text-[#0A192F]">{process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"}</span>
          </div>
          <div className="flex justify-between bg-[#F4F5F7] border border-[#E2E8F0] px-3 py-2 rounded-[2px]">
            <span className="text-[#64748B]">Frontend</span>
            <span className="font-mono text-[#0A192F]">http://localhost:3000</span>
          </div>
          <div className="flex justify-between bg-[#F4F5F7] border border-[#E2E8F0] px-3 py-2 rounded-[2px]">
            <span className="text-[#64748B]">Backend</span>
            <span className="font-mono text-[#0A192F]">http://localhost:3001</span>
          </div>
        </div>
        <p className="text-xs text-[#94A3B8] mt-4">Ubah file .env untuk konfigurasi production.</p>
      </div>
    </div>
  );
}
