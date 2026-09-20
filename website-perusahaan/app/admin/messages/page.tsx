"use client";
import { useEffect, useState } from "react";
import { Mail, Trash2, Eye } from "lucide-react";
import { messageService } from "@/services/messageService";
import type { ContactMessage } from "@/types";

const mockMessages: ContactMessage[] = [
  { id: "1", name: "Budi Santoso", email: "budi@contoh.com", phone: "081234567890", subject: "Konsultasi Gudang", message: "Ingin konsultasi pembangunan gudang 20x30m.", status: "UNREAD", createdAt: new Date().toISOString() },
  { id: "2", name: "Siti Aminah", email: "siti@contoh.com", phone: "082112345678", subject: "Renovasi Ruko", message: "Minta penawaran renovasi ruko 2 lantai.", status: "READ", createdAt: new Date().toISOString() },
];

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    messageService
      .getAll()
      .then((d) => setMessages(d.length ? d : mockMessages))
      .catch(() => setMessages(mockMessages))
      .finally(() => setLoading(false));
  }, []);

  const updateStatus = async (id: string, status: ContactMessage["status"]) => {
    try {
      await messageService.updateStatus(id, status);
    } catch {
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
      return;
    }
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
  };

  if (loading) return <p className="text-sm text-[#64748B]">Loading...</p>;

  return (
    <div>
      <p className="text-[11px] tracking-[0.16em] font-semibold text-[#007BFF]">ADMIN / MESSAGES</p>
      <h1 className="text-xl font-bold text-[#0A192F]">Pesan Kontak</h1>
      <p className="text-sm text-[#64748B]">{messages.length} pesan masuk</p>

      <div className="mt-6 space-y-3">
        {messages.map((m) => (
          <div key={m.id} className="bg-white border border-[#E2E8F0] p-5 rounded-[2px]">
            <div className="flex justify-between items-start gap-4">
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-[#0A192F] text-white rounded-[2px] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A192F] text-sm">{m.name}</p>
                  <p className="text-xs text-[#64748B]">{m.email} • {m.phone}</p>
                  <p className="text-sm font-medium text-[#0A192F] mt-2">{m.subject}</p>
                  <p className="text-sm text-[#475569] mt-1">{m.message}</p>
                  <p className="text-xs text-[#94A3B8] mt-2">{new Date(m.createdAt).toLocaleString("id-ID")}</p>
                </div>
              </div>
              <span
                className={`px-2.5 py-1 rounded-[2px] text-xs font-semibold border shrink-0 ${
                  m.status === "UNREAD" ? "bg-amber-50 text-amber-700 border-amber-200" : m.status === "READ" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"
                }`}
              >
                {m.status}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              {m.status === "UNREAD" && (
                <button onClick={() => updateStatus(m.id, "READ")} className="px-3 h-8 border border-[#E2E8F0] rounded-[2px] text-xs font-semibold hover:border-[#007BFF] hover:text-[#007BFF] inline-flex items-center gap-1">
                  <Eye className="w-3 h-3" /> Tandai Dibaca
                </button>
              )}
              {m.status !== "REPLIED" && (
                <button onClick={() => updateStatus(m.id, "REPLIED")} className="px-3 h-8 bg-[#007BFF] text-white rounded-[2px] text-xs font-semibold hover:bg-[#0063CC]">
                  Tandai Dibalas
                </button>
              )}
            </div>
          </div>
        ))}
        {messages.length === 0 && <div className="bg-white border border-[#E2E8F0] p-12 text-center rounded-[2px] text-sm text-[#64748B]">Belum ada pesan.</div>}
      </div>
    </div>
  );
}
