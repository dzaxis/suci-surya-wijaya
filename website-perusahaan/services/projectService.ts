import api from "@/lib/api";
import type { Project } from "@/types";
import { mockProjects } from "@/lib/mockData";

export const projectService = {
  getAll: async (): Promise<Project[]> => {
    try {
      const res = await api.get("/projects");
      return Array.isArray(res.data) ? res.data : res.data.data ?? mockProjects;
    } catch {
      return mockProjects;
    }
  },
  getBySlug: async (slug: string): Promise<Project | null> => {
    try {
      const res = await api.get(`/projects/${slug}`);
      return res.data;
    } catch {
      return mockProjects.find((p) => p.slug === slug) ?? null;
    }
  },
  create: async (data: FormData | Partial<Project>) => (await api.post("/projects", data)).data,
  update: async (id: string, data: FormData | Partial<Project>) => (await api.patch(`/projects/${id}`, data)).data,
  remove: async (id: string) => (await api.delete(`/projects/${id}`)).data,
};
