import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CV. Suci Surya Wijaya | Professional & Precision",
  description:
    "CV. Suci Surya Wijaya menghadirkan solusi profesional dengan mengutamakan kualitas, presisi, dan integritas. Precise in Every Detail.",
  keywords: ["CV Suci Surya Wijaya", "construction", "engineering", "architecture", "contractor"],
  authors: [{ name: "CV. Suci Surya Wijaya" }],
  openGraph: {
    title: "CV. Suci Surya Wijaya | Professional & Precision",
    description:
      "Membangun dengan Presisi & Integritas. Solusi profesional berkualitas dengan standar kerja tinggi.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Suci Surya Wijaya",
    description: "Precise in Every Detail.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#172033]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
