"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, Loader2, ShieldCheck } from "lucide-react";
import axios from "axios";
import { authService } from "@/services/authService";

const schema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

type FormValues = z.infer<typeof schema>;

const DEMO_EMAIL = "admin@sucisuryawijaya.co.id";
const DEMO_PASSWORD = "admin123";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [info, setInfo] = useState(() =>
    typeof window !== "undefined" && window.location.search.includes("expired=1")
      ? "Sesi Anda telah berakhir. Silakan login kembali."
      : ""
  );
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: DEMO_EMAIL, password: DEMO_PASSWORD },
  });

  // Sudah login? Langsung ke dashboard.
  useEffect(() => {
    authService
      .verify()
      .then((ok) => {
        if (ok) router.replace("/admin");
        else setChecking(false);
      })
      .catch(() => setChecking(false));
  }, [router]);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setError("");
    setInfo("");
    try {
      await authService.login(data.email, data.password);
      router.replace("/admin");
      router.refresh();
    } catch (err) {
      // Backend tidak terjangkau (down / network error): izinkan mode demo
      // offline HANYA dengan kredensial demo, agar UI tetap bisa dibuka.
      const noResponse = axios.isAxiosError(err) && !err.response;
      if (noResponse && data.email === DEMO_EMAIL && data.password === DEMO_PASSWORD) {
        authService.loginDemo();
        router.replace("/admin");
        router.refresh();
      } else if (axios.isAxiosError(err) && err.response?.status === 401) {
        setError("Email atau password salah.");
      } else {
        setError("Tidak dapat terhubung ke server. Pastikan backend berjalan, atau gunakan demo: admin@sucisuryawijaya.co.id / admin123");
      }
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#F4F5F7]">
        <Loader2 className="w-6 h-6 animate-spin text-[#007BFF]" />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#F4F5F7] px-6 py-12">
      <div className="w-full max-w-[420px] bg-white border border-[#E2E8F0] rounded-[2px] p-8">
        <div className="text-center">
          <div className="w-10 h-10 bg-[#0A192F] mx-auto flex items-center justify-center rounded-[2px]">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <h1 className="mt-3 text-xl font-bold text-[#0A192F]">Admin Login</h1>
          <p className="text-sm text-[#64748B] mt-1">CV. Suci Surya Wijaya — Secure Access</p>
        </div>

        <div className="mt-4 bg-amber-50 border border-amber-200 px-3 py-2.5 rounded-[2px] text-xs text-amber-800">
          <p className="font-semibold">Demo Credentials:</p>
          <p>admin@sucisuryawijaya.co.id / admin123</p>
        </div>

        {info && <div className="mt-4 bg-blue-50 border border-blue-200 px-3 py-2.5 rounded-[2px] text-sm text-blue-700">{info}</div>}
        {error && <div className="mt-4 bg-red-50 border border-red-200 px-3 py-2.5 rounded-[2px] text-sm text-red-700">{error}</div>}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-[#0A192F]">Email</label>
            <div className="mt-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                {...register("email")}
                className="w-full h-10 pl-9 pr-3 border border-[#E2E8F0] rounded-[2px] text-sm focus:outline-none focus:border-[#007BFF]"
                placeholder="admin@contoh.com"
              />
            </div>
            {formState.errors.email && <p className="text-xs text-red-600 mt-1">{formState.errors.email.message}</p>}
          </div>

          <div>
            <label className="text-xs font-semibold text-[#0A192F]">Password</label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                type="password"
                {...register("password")}
                className="w-full h-10 pl-9 pr-3 border border-[#E2E8F0] rounded-[2px] text-sm focus:outline-none focus:border-[#007BFF]"
                placeholder="••••••••"
              />
            </div>
            {formState.errors.password && <p className="text-xs text-red-600 mt-1">{formState.errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-[#007BFF] text-white rounded-[2px] text-sm font-semibold hover:bg-[#0063CC] disabled:opacity-60 inline-flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />} Masuk Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
