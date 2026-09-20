"use client";
import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { serviceService } from "@/services/serviceService";
import type { Service } from "@/types";
import { mockServices } from "@/lib/mockData";

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", icon: "Building2" });
  const [editingId, setEditingId] = useState<string | null>(null);

  const load = () => {
    serviceService.getAll().then((d) => {
      setServices(d);
      setLoading(false);
    });
  };
  useEffect(load, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { title: form.title, slug: form.title.toLowerCase().replace(/\s+/g, "-"), description: form.description, icon: form.icon, status: "ACTIVE" as const };
    try {
      if (editingId) await serviceService.update(editingId, payload);
      else await serviceService.create(payload);
    } catch {
      // demo fallback local
      if (editingId) setServices((prev) => prev.map((s) => (s.id === editingId ? { ...s, ...payload } : s)));
      else setServices((prev) => [{ id: Date.now().toString(), ...payload, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() } as Service, ...prev]);
    }
    setShowForm(false);
    setEditingId(null);
    setForm({ title: "", description: "", icon: "Building2" });
    load();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus layanan ini?")) return;
    try {
      await serviceService.remove(id);
    } catch {
      setServices((prev) => prev.filter((s) => s.id !== id));
      return;
    }
    load();
  };

  if (loading) return <p className="text-sm text-[#64748B]">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[11px] tracking-[0.16em] font-semibold text-[#007BFF]">ADMIN / SERVICES</p>
          <h1 className="text-xl font-bold text-[#0A192F]">Kelola Layanan</h1>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center gap-2 bg-[#007BFF] text-white px-4 h-9 rounded-[2px] text-sm font-semibold">
          <Plus className="w-4 h-4" /> Tambah Layanan
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 bg-white border border-[#E2E8F0] p-6 rounded-[2px] space-y-3">
          <input placeholder="Judul layanan" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          <textarea placeholder="Deskripsi" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required rows={3} className="w-full px-3 py-2 border border-[#E2E8F0] rounded-[2px] text-sm" />
          <select value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} className="w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm bg-white">
            {["Building2","DraftingCompass","ClipboardList","Wrench","Users","Package"].map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <button type="submit" className="bg-[#0A192F] text-white px-6 h-9 rounded-[2px] text-sm font-semibold">Simpan</button>
            <button type="button" onClick={() => setShowForm(false)} className="border border-[#E2E8F0] px-6 h-9 rounded-[2px] text-sm">Batal</button>
          </div>
        </form>
      )}

      <div className="mt-6 bg-white border border-[#E2E8F0] rounded-[2px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F4F5F7] text-xs tracking-[0.12em] uppercase text-[#64748B]">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Title</th>
                <th className="text-left px-4 py-3 font-semibold">Slug</th>
                <th className="text-left px-4 py-3 font-semibold">Status</th>
                <th className="text-right px-4 py-3 font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {services.map((s) => (
                <tr key={s.id} className="hover:bg-[#F4F5F7]/50">
                  <td className="px-4 py-3 font-medium text-[#0A192F]">{s.title}</td>
                  <td className="px-4 py-3 text-[#64748B]">{s.slug}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-[2px] text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">{s.status}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => { setEditingId(s.id); setForm({ title: s.title, description: s.description, icon: s.icon }); setShowForm(true); }} className="w-8 h-8 border border-[#E2E8F0] rounded-[2px] flex items-center justify-center hover:border-[#007BFF] hover:text-[#007BFF]"><Pencil className="w-3.5 h-3.5" /></button>
                      <button onClick={() => handleDelete(s.id)} className="w-8 h-8 border border-[#E2E8F0] rounded-[2px] flex items-center justify-center hover:border-red-300 hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
