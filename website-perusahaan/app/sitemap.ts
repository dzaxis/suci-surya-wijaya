import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sucisuryawijaya.co.id";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/tentang-kami`, lastModified: new Date() },
    { url: `${base}/layanan`, lastModified: new Date() },
    { url: `${base}/proyek`, lastModified: new Date() },
    { url: `${base}/kontak`, lastModified: new Date() },
  ];
}
