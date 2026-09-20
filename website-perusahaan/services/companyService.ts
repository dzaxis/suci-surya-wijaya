import api from "@/lib/api";
import type { CompanyProfile } from "@/types";

export const companyService = {
  get: async (): Promise<CompanyProfile> => {
    try {
      const res = await api.get("/company");
      return res.data;
    } catch {
      // fallback mock
      return mockCompany;
    }
  },
  update: async (data: Partial<CompanyProfile>) => {
    const res = await api.put("/company", data);
    return res.data;
  },
};

export const mockCompany: CompanyProfile = {
  id: "1",
  companyName: "CV. Suci Surya Wijaya",
  description:
    "CV. Suci Surya Wijaya merupakan perusahaan yang berkomitmen memberikan solusi profesional dengan mengedepankan kualitas, ketepatan, integritas, dan kepuasan klien. Kami hadir untuk menjadi mitra terpercaya dalam mewujudkan proyek yang presisi, kokoh, dan bernilai jangka panjang.",
  address: "Jl. Lingkungan Margahayu RT.025 RW.009, Kel. Cicurug, Kec. Majalengka, Kab. Majalengka, Jawa Barat",
  phone: "[Nomor Telepon]",
  whatsapp: "[Nomor WhatsApp]",
  email: "[Email Perusahaan]",
  website: "www.sucisuryawijaya.co.id",
  instagram: "#",
  facebook: "#",
  linkedin: "#",
  operatingHours: "Senin - Sabtu, 08.00 - 17.00 WIB",
  vision: "Menjadi perusahaan yang terpercaya dalam memberikan solusi profesional berkualitas dengan standar kerja yang tinggi.",
  mission: "01|Mengutamakan kualitas./n02|Memberikan pelayanan profesional./n03|Mengutamakan ketepatan waktu./n04|Menjaga integritas dan kepercayaan pelanggan.",
  establishedYear: "20XX",
};
