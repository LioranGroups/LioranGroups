import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter, JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Lioran Groups | Head Office",
  description:
    "Lioran Groups – Building technology-driven ventures from India. Head Office in Chandrapur, Maharashtra.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} bg-black text-slate-100 font-sans antialiased`}>
        <Header />
        <main className="min-h-screen bg-black">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
