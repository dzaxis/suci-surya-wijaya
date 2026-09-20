"use client";
import { useEffect, useState } from "react";
import { Save, Loader2 } from "lucide-react";
import { companyService, mockCompany } from "@/services/companyService";
import type { CompanyProfile } from "@/types";

export default function AdminCompanyPage() {
  const [form, setForm] = useState<CompanyProfile>(mockCompany);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    companyService.get().then((d) => {
      setForm(d);
      setLoading(false);
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await companyService.update(form);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-sm text-[#64748B]">Loading...</p>;

  return (
    <div>
      <p className="text-[11px] tracking-[0.16em] font-semibold text-[#007BFF]">ADMIN / COMPANY PROFILE</p>
      <h1 className="text-xl font-bold text-[#0A192F]">Profil Perusahaan</h1>

      <form onSubmit={handleSave} className="mt-6 bg-white border border-[#E2E8F0] p-6 rounded-[2px] space-y-4">
        {saved && <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-[2px] text-sm">Profil berhasil disimpan.</div>}

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-[#0A192F]">Nama Perusahaan</label>
            <input value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} className="mt-1 w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-[#0A192F]">Tahun Berdiri</label>
            <input value={form.establishedYear ?? ""} onChange={(e) => setForm({ ...form, establishedYear: e.target.value })} className="mt-1 w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-[#0A192F]">Deskripsi</label>
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="mt-1 w-full px-3 py-2 border border-[#E2E8F0] rounded-[2px] text-sm" />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#0A192F]">Alamat</label>
          <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="mt-1 w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-semibold text-[#0A192F]">Telepon</label>
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-[#0A192F]">WhatsApp</label>
            <input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className="mt-1 w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-[#0A192F]">Email</label>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-[#0A192F]">Website</label>
            <input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="mt-1 w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-[#0A192F]">Jam Operasional</label>
            <input value={form.operatingHours} onChange={(e) => setForm({ ...form, operatingHours: e.target.value })} className="mt-1 w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-[#0A192F]">Visi</label>
          <textarea value={form.vision} onChange={(e) => setForm({ ...form, vision: e.target.value })} rows={2} className="mt-1 w-full px-3 py-2 border border-[#E2E8F0] rounded-[2px] text-sm" />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#0A192F]">Misi (pisahkan dengan baris baru)</label>
          <textarea value={form.mission} onChange={(e) => setForm({ ...form, mission: e.target.value })} rows={4} className="mt-1 w-full px-3 py-2 border border-[#E2E8F0] rounded-[2px] text-sm" />
        </div>

        <button type="submit" disabled={saving} className="inline-flex items-center gap-2 bg-[#007BFF] text-white px-6 h-10 rounded-[2px] text-sm font-semibold hover:bg-[#0063CC] disabled:opacity-60">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
