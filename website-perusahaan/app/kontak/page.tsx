import { ContactForm } from "@/components/home/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | CV. Suci Surya Wijaya",
  description: "Hubungi CV. Suci Surya Wijaya untuk konsultasi proyek.",
};

const GOOGLE_MAPS_EMBED_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
  "https://maps.google.com/maps?q=Jl.%20Lingkungan%20Margahayu%20RT.025%20RW.009%2C%20Kel.%20Cicurug%2C%20Kec.%20Majalengka%2C%20Kab.%20Majalengka%2C%20Jawa%20Barat&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function KontakPage() {
  return (
    <>
      <section className="bg-[#0A192F] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 blueprint-grid-dark opacity-20" />
        <div className="relative max-w-[1280px] mx-auto px-6 py-12">
          <p className="text-[11px] tracking-[0.18em] text-[#00B4D8] font-semibold">04 / CONTACT</p>
          <h1 className="mt-2 text-3xl lg:text-4xl font-bold">Hubungi Kami</h1>
          <p className="mt-2 text-sm text-white/70">Diskusikan kebutuhan proyek Anda bersama tim profesional kami.</p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div>
            <h2 className="text-lg font-bold text-[#0A192F]">Informasi Kontak</h2>
            <div className="mt-5 space-y-4">
              {[
                { icon: MapPin, label: "Alamat", value: "Jl. Lingkungan Margahayu RT.025 RW.009, Kel. Cicurug, Kec. Majalengka, Kab. Majalengka, Jawa Barat" },
                { icon: Phone, label: "Telepon", value: "[Nomor Telepon]" },
                { icon: Phone, label: "WhatsApp", value: "[Nomor WhatsApp]" },
                { icon: Mail, label: "Email", value: "[Email Perusahaan]" },
                { icon: Clock, label: "Jam Operasional", value: "[Senin - Sabtu, 08.00 - 17.00 WIB]" },
              ].map((it) => (
                <div key={it.label} className="flex gap-3 border border-[#E2E8F0] p-4 rounded-[2px] bg-[#F4F5F7]">
                  <div className="w-9 h-9 bg-white border border-[#E2E8F0] rounded-[2px] flex items-center justify-center shrink-0">
                    <it.icon className="w-4 h-4 text-[#007BFF]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#0A192F]">{it.label}</p>
                    <p className="text-sm text-[#475569] mt-0.5">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0A192F]">Lokasi Kami</p>
              <div className="mt-3 border border-[#E2E8F0] rounded-[2px] overflow-hidden bg-[#F4F5F7] p-1">
                <div className="aspect-[16/10] rounded-[2px] overflow-hidden border border-[#E2E8F0] bg-white">
                  <iframe
                    src={GOOGLE_MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi CV. Suci Surya Wijaya"
                  />
                </div>
              </div>
              <p className="text-[11px] text-[#94A3B8] mt-2">Ganti NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL di .env untuk lokasi sebenarnya.</p>
            </div>
          </div>

          <div className="border border-[#E2E8F0] bg-white p-6 lg:p-8 rounded-[2px]">
            <h2 className="text-lg font-bold text-[#0A192F]">Kirim Pesan</h2>
            <p className="text-sm text-[#64748B] mt-1">Isi formulir dibawah ini, tim kami akan merespon dalam 1x24 jam.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
