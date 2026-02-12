import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://aaadigitalmedia.com"),
  title: {
    default: "AAA Digital Media | Global Digital Marketing Agency",
    template: "%s | AAA Digital Media",
  },
  description:
    "Transform your brand with world-class digital marketing, web development, and mobile app solutions. Based in Karachi, serving clients in 15+ countries worldwide.",
  keywords: [
    "digital marketing agency",
    "web development Pakistan",
    "mobile app development",
    "web app development",
    "SEO services",
    "performance marketing",
    "Karachi agency",
    "international digital agency",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aaadigitalmedia.com",
    siteName: "AAA Digital Media",
    title: "AAA Digital Media | Global Digital Marketing Agency",
    description:
      "Transform your brand with world-class digital marketing, web development, and mobile app solutions.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAA Digital Media | Global Digital Marketing Agency",
    description:
      "Transform your brand with world-class digital marketing, web development, and mobile app solutions.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
