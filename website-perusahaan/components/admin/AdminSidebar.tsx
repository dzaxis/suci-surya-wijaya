"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Building2, Briefcase, Layers, Mail, LogOut, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { authService } from "@/services/authService";

const menu = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Company Profile", href: "/admin/company", icon: Building2 },
  { label: "Services", href: "/admin/services", icon: Briefcase },
  { label: "Projects", href: "/admin/projects", icon: Layers },
  { label: "Messages", href: "/admin/messages", icon: Mail },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    authService.logout();
    router.replace("/admin/login");
  };

  return (
    <aside className="w-[260px] shrink-0 bg-[#0A192F] text-white hidden lg:flex flex-col min-h-[calc(100vh-64px)]">
      <div className="p-6 border-b border-white/10">
        <p className="font-bold text-sm">ADMIN PANEL</p>
        <p className="text-xs text-white/50 tracking-[0.14em] uppercase">CV. Suci Surya Wijaya</p>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {menu.map((m) => {
          const active = pathname === m.href;
          return (
            <Link
              key={m.href}
              href={m.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-[2px] text-sm transition-colors",
                active ? "bg-[#007BFF] text-white" : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              <m.icon className="w-4 h-4" /> {m.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t border-white/10">
        <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[2px] text-sm text-white/70 hover:bg-white/10 hover:text-white">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </aside>
  );
}
