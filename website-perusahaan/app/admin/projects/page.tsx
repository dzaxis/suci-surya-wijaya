"use client";
import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { projectService } from "@/services/projectService";
import type { Project } from "@/types";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", category: "", location: "", year: "", description: "", image: "" });
  const [editingId, setEditingId] = useState<string | null>(null);

  const load = () => {
    projectService.getAll().then((d) => {
      setProjects(d);
      setLoading(false);
    });
  };
  useEffect(load, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { title: form.title, slug: form.title.toLowerCase().replace(/\s+/g, "-"), category: form.category, location: form.location, year: form.year, description: form.description, image: form.image || "/3.jpeg", status: "ACTIVE" as const };
    try {
      if (editingId) await projectService.update(editingId, payload);
      else await projectService.create(payload);
    } catch {
      if (editingId) setProjects((prev) => prev.map((p) => (p.id === editingId ? { ...p, ...payload } : p)));
      else setProjects((prev) => [{ id: Date.now().toString(), ...payload, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() } as Project, ...prev]);
    }
    setShowForm(false);
    setEditingId(null);
    setForm({ title: "", category: "", location: "", year: "", description: "", image: "" });
    load();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus proyek ini?")) return;
    try {
      await projectService.remove(id);
    } catch {
      setProjects((prev) => prev.filter((p) => p.id !== id));
      return;
    }
    load();
  };

  if (loading) return <p className="text-sm text-[#64748B]">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[11px] tracking-[0.16em] font-semibold text-[#007BFF]">ADMIN / PROJECTS</p>
          <h1 className="text-xl font-bold text-[#0A192F]">Kelola Proyek</h1>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center gap-2 bg-[#007BFF] text-white px-4 h-9 rounded-[2px] text-sm font-semibold">
          <Plus className="w-4 h-4" /> Tambah Proyek
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 bg-white border border-[#E2E8F0] p-6 rounded-[2px] grid gap-3">
          <input placeholder="Judul proyek" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          <div className="grid sm:grid-cols-3 gap-3">
            <input placeholder="Kategori" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required className="h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
            <input placeholder="Lokasi" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required className="h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
            <input placeholder="Tahun" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} required className="h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          </div>
          <input placeholder="URL Gambar" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full h-10 px-3 border border-[#E2E8F0] rounded-[2px] text-sm" />
          <textarea placeholder="Deskripsi" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required rows={3} className="w-full px-3 py-2 border border-[#E2E8F0] rounded-[2px] text-sm" />
          <div className="flex gap-2">
            <button type="submit" className="bg-[#0A192F] text-white px-6 h-9 rounded-[2px] text-sm font-semibold">Simpan</button>
            <button type="button" onClick={() => setShowForm(false)} className="border border-[#E2E8F0] px-6 h-9 rounded-[2px] text-sm">Batal</button>
          </div>
        </form>
      )}

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="bg-white border border-[#E2E8F0] rounded-[2px] overflow-hidden">
            <div className="aspect-[16/9] bg-[#F4F5F7] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-xs tracking-[0.12em] uppercase text-[#007BFF] font-semibold">{p.category} • {p.year}</p>
              <h3 className="font-bold text-[#0A192F] mt-1 line-clamp-1">{p.title}</h3>
              <p className="text-xs text-[#64748B] mt-1 line-clamp-2">{p.description}</p>
              <div className="mt-3 flex gap-2">
                <button onClick={() => { setEditingId(p.id); setForm({ title: p.title, category: p.category, location: p.location, year: p.year, description: p.description, image: p.image }); setShowForm(true); }} className="flex-1 border border-[#E2E8F0] h-8 rounded-[2px] text-xs font-semibold flex items-center justify-center gap-1 hover:border-[#007BFF] hover:text-[#007BFF]"><Pencil className="w-3 h-3" /> Edit</button>
                <button onClick={() => handleDelete(p.id)} className="flex-1 border border-[#E2E8F0] h-8 rounded-[2px] text-xs font-semibold flex items-center justify-center gap-1 hover:border-red-300 hover:text-red-600"><Trash2 className="w-3 h-3" /> Hapus</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
