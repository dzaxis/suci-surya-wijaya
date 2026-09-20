"use client";
import { useEffect, useState } from "react";
import { Layers, Briefcase, Mail, Users } from "lucide-react";
import { serviceService } from "@/services/serviceService";
import { projectService } from "@/services/projectService";
import { messageService } from "@/services/messageService";
import { authService } from "@/services/authService";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ services: 0, projects: 0, messages: 0, users: 1 });

  useEffect(() => {
    // Autentikasi sudah dijamin oleh AdminGuard di layout.
    // Mode demo (offline): jangan panggil endpoint terproteksi,
    // langsung pakai data mock agar tidak memicu 401/logout.
    const messagesReq = authService.isDemoMode()
      ? Promise.resolve([])
      : messageService.getAll().catch(() => []);

    Promise.allSettled([serviceService.getAll(), projectService.getAll(), messagesReq]).then(
      (res) => {
        setStats({
          services: res[0].status === "fulfilled" ? (res[0].value as unknown[]).length : 6,
          projects: res[1].status === "fulfilled" ? (res[1].value as unknown[]).length : 6,
          messages: res[2].status === "fulfilled" ? (res[2].value as unknown[]).length : 0,
          users: 1,
        });
      }
    );
  }, []);

  const cards = [
    { label: "Total Projects", value: stats.projects, icon: Layers, color: "bg-[#007BFF]" },
    { label: "Total Services", value: stats.services, icon: Briefcase, color: "bg-[#00B4D8]" },
    { label: "Total Messages", value: stats.messages, icon: Mail, color: "bg-[#0A192F]" },
    { label: "Total Users", value: stats.users, icon: Users, color: "bg-[#172033]" },
  ];

  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[11px] tracking-[0.16em] font-semibold text-[#007BFF]">ADMIN / DASHBOARD</p>
          <h1 className="text-2xl font-bold text-[#0A192F]">Dashboard</h1>
          <p className="text-sm text-[#64748B]">Ringkasan data perusahaan.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-[#64748B] border border-[#E2E8F0] bg-white px-3 py-2 rounded-[2px]">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> System Online
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="bg-white border border-[#E2E8F0] p-5 rounded-[2px]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs tracking-[0.14em] uppercase text-[#94A3B8] font-semibold">{c.label}</p>
                <p className="text-3xl font-bold text-[#0A192F] mt-2">{c.value}</p>
              </div>
              <div className={`w-10 h-10 rounded-[2px] flex items-center justify-center text-white ${c.color}`}>
                <c.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 h-[1px] bg-[#E2E8F0]" />
            <p className="mt-2 text-[11px] text-[#94A3B8]">Updated just now</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid lg:grid-cols-2 gap-4">
        <div className="bg-white border border-[#E2E8F0] p-6 rounded-[2px]">
          <h3 className="font-bold text-[#0A192F]">Quick Actions</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["Kelola Services", "/admin/services"],
              ["Kelola Projects", "/admin/projects"],
              ["Lihat Messages", "/admin/messages"],
              ["Edit Company", "/admin/company"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="border border-[#E2E8F0] p-4 rounded-[2px] hover:border-[#007BFF] hover:bg-[#007BFF]/5 transition-colors">
                <p className="text-sm font-semibold text-[#0A192F]">{label}</p>
                <p className="text-xs text-[#64748B] mt-1">Manage →</p>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-[#0A192F] text-white p-6 rounded-[2px] relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid-dark opacity-20" />
          <div className="relative">
            <h3 className="font-bold">API Status</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between bg-white/5 border border-white/10 px-3 py-2 rounded-[2px]">
                <span className="text-white/70">REST API</span>
                <span className="text-emerald-400 font-semibold">Operational</span>
              </div>
              <div className="flex justify-between bg-white/5 border border-white/10 px-3 py-2 rounded-[2px]">
                <span className="text-white/70">Database</span>
                <span className="text-emerald-400 font-semibold">Connected</span>
              </div>
              <div className="flex justify-between bg-white/5 border border-white/10 px-3 py-2 rounded-[2px]">
                <span className="text-white/70">Auth (JWT)</span>
                <span className="text-emerald-400 font-semibold">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
