"use client";
import { usePathname } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminGuard } from "@/components/admin/AdminGuard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";

  if (isLogin) return <>{children}</>;

  return (
    <AdminGuard>
      <div className="flex bg-[#F4F5F7] min-h-[calc(100vh-64px)]">
        <AdminSidebar />
        <div className="flex-1 min-w-0">
          <div className="p-6 lg:p-8">{children}</div>
        </div>
      </div>
    </AdminGuard>
  );
}
