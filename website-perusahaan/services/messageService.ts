import api from "@/lib/api";
import type { ContactMessage } from "@/types";

export const messageService = {
  send: async (data: Omit<ContactMessage, "id" | "status" | "createdAt">) => {
    const res = await api.post("/messages", data);
    return res.data;
  },
  getAll: async (): Promise<ContactMessage[]> => {
    const res = await api.get("/messages");
    return Array.isArray(res.data) ? res.data : res.data.data ?? [];
  },
  updateStatus: async (id: string, status: ContactMessage["status"]) => {
    const res = await api.patch(`/messages/${id}/status`, { status });
    return res.data;
  },
};
