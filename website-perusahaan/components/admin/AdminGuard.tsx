"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { authService } from "@/services/authService";

/**
 * Penjaga seluruh halaman /admin/* (kecuali /admin/login).
 * Memvalidasi sesi ke backend (atau mode demo offline) sebelum merender.
 * Tanpa ini, user yang baru login bisa terpental balik ke halaman login
 * karena request terproteksi gagal dengan token yang tidak valid.
 */
export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let cancelled = false;
    authService
      .verify()
      .then((valid) => {
        if (cancelled) return;
        if (valid) {
          setAuthorized(true);
        } else {
          router.replace("/admin/login");
        }
      })
      .catch(() => {
        if (!cancelled) router.replace("/admin/login");
      });
    return () => {
      cancelled = true;
    };
  }, [router]);

  if (!authorized) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex flex-col gap-3 items-center justify-center bg-[#F4F5F7]">
        <Loader2 className="w-6 h-6 animate-spin text-[#007BFF]" />
        <p className="text-sm text-[#64748B]">Memverifikasi sesi admin...</p>
      </div>
    );
  }

  return <>{children}</>;
}
