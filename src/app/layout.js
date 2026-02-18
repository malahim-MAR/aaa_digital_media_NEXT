import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import Navbar from "@/components/layout/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "AAA Digital Media",
  description: "Full-Service Digital Agency creating immersive digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="antialiased bg-black text-white selection:bg-slate-700/30 selection:text-white">
        <SmoothScroll>
          {/* Grain Overlay */}
          <div className="grain-overlay" />

          {/* Background Interactive Effects */}
          <BackgroundEffects />

          {/* Cursor */}
          <CustomCursor />

          <Navbar />

          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
