import api, { DEMO_TOKEN, isRealToken } from "@/lib/api";

const TOKEN_KEY = "accessToken";
const MODE_KEY = "authMode"; // "real" | "demo"

export const authService = {
  login: async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    if (res.data?.accessToken) {
      localStorage.setItem(TOKEN_KEY, res.data.accessToken);
      localStorage.setItem(MODE_KEY, "real");
    }
    return res.data;
  },
  /** Login offline tanpa backend — data mock, request terproteksi dilewati. */
  loginDemo: () => {
    localStorage.setItem(TOKEN_KEY, DEMO_TOKEN);
    localStorage.setItem(MODE_KEY, "demo");
  },
  me: async () => (await api.get("/auth/me")).data,
  getToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  },
  isDemoMode: (): boolean => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(MODE_KEY) === "demo" || localStorage.getItem(TOKEN_KEY) === DEMO_TOKEN;
  },
  /** Ada sesi tersimpan (token JWT asli ATAU mode demo). */
  isLoggedIn: (): boolean => {
    const token = authService.getToken();
    return isRealToken(token) || authService.isDemoMode();
  },
  /** Validasi sesi ke backend. Mode demo selalu dianggap valid (offline). */
  verify: async (): Promise<boolean> => {
    if (typeof window === "undefined") return false;
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return false;
    if (!isRealToken(token)) {
      return localStorage.getItem(MODE_KEY) === "demo" || token === DEMO_TOKEN;
    }
    try {
      await authService.me();
      return true;
    } catch {
      return false;
    }
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(MODE_KEY);
  },
};
