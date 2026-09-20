import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// Token dummy untuk mode demo (tanpa backend). BUKAN JWT valid,
// jadi jangan pernah dikirim sebagai Bearer — kalau dikirim,
// backend menjawab 401 dan interceptor akan menendang balik ke login.
export const DEMO_TOKEN = "demo-token";

export function isRealToken(token: string | null): boolean {
  return !!token && token !== DEMO_TOKEN && token.split(".").length === 3;
}

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    // Hanya kirim token JWT asli. Token demo tidak dikirim agar
    // request terproteksi gagal sebagai "Missing token" tanpa
    // memicu auto-logout — caller akan pakai data mock.
    if (isRealToken(token)) {
      config.headers.Authorization = `Bearer ${token}`;
      (config as unknown as { __sentAuth?: boolean }).__sentAuth = true;
    }
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // Auto-logout HANYA jika request membawa token JWT asli tapi ditolak
    // (expired / invalid / secret berubah). 401 dari request publik atau
    // mode demo (tanpa token) diteruskan ke caller untuk fallback mock.
    const sentAuth = (err.config as unknown as { __sentAuth?: boolean } | undefined)?.__sentAuth === true;
    if (err.response?.status === 401 && sentAuth && typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("authMode");
      if (window.location.pathname.startsWith("/admin") && window.location.pathname !== "/admin/login") {
        // Interceptor berjalan di luar komponen React (useRouter tidak tersedia),
        // dan butuh reset penuh state auth — hard navigation memang disengaja.
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination
        window.location.href = "/admin/login?expired=1";
      }
    }
    return Promise.reject(err);
  }
);

export default api;
