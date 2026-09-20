"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Layanan", href: "/layanan" },
  { label: "Katalog", href: "/proyek" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur border-[#E2E8F0] shadow-[0_1px_12px_rgba(10,25,47,0.06)]" : "bg-white border-[#E2E8F0]"
      )}
    >
      {/* Top technical bar */}
      <div className="hidden lg:block bg-[#0A192F] text-white/60 text-[10px] tracking-[0.16em] uppercase">
        <div className="max-w-[1280px] mx-auto px-6 py-[6px] flex justify-between">
          <span>PRECISION • QUALITY • TRUST — EST. 20XX • PROJECT NO. 001</span>
          <span>Professional • Precise • Reliable</span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#0A192F] flex items-center justify-center rounded-[2px]">
            <span className="text-white font-bold text-[13px] tracking-tight">SS</span>
          </div>
          <div className="leading-none">
            <p className="font-bold text-[15px] tracking-tight text-[#0A192F]">CV. SUCI SURYA WIJAYA</p>
            <p className="text-[10px] tracking-[0.18em] text-[#007BFF] font-semibold">PRECISION IN EVERY DETAIL</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-[2px]",
                  active ? "text-[#007BFF] bg-[#F4F5F7]" : "text-[#334155] hover:text-[#0A192F] hover:bg-[#F4F5F7]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-[#007BFF] text-white px-5 h-9 rounded-[2px] text-[13px] font-semibold hover:bg-[#0063CC] transition-colors"
          >
            Konsultasi <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-9 h-9 flex items-center justify-center border border-[#E2E8F0] rounded-[2px] text-[#0A192F]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-3 text-[14px] font-medium rounded-[2px] border border-transparent",
                  pathname === item.href ? "bg-[#F4F5F7] text-[#007BFF] border-[#E2E8F0]" : "text-[#334155]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#007BFF] text-white h-11 rounded-[2px] text-sm font-semibold"
            >
              Konsultasi <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
