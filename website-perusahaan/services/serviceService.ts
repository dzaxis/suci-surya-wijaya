import api from "@/lib/api";
import type { Service } from "@/types";
import { mockServices } from "@/lib/mockData";

export const serviceService = {
  getAll: async (): Promise<Service[]> => {
    try {
      const res = await api.get("/services");
      return Array.isArray(res.data) ? res.data : res.data.data ?? mockServices;
    } catch {
      return mockServices;
    }
  },
  getBySlug: async (slug: string): Promise<Service | null> => {
    try {
      const res = await api.get(`/services/${slug}`);
      return res.data;
    } catch {
      return mockServices.find((s) => s.slug === slug) ?? null;
    }
  },
  create: async (data: Partial<Service>) => (await api.post("/services", data)).data,
  update: async (id: string, data: Partial<Service>) => (await api.patch(`/services/${id}`, data)).data,
  remove: async (id: string) => (await api.delete(`/services/${id}`)).data,
};
