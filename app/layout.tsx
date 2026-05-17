import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mili Animal Care — Perawatan Hewan Peliharaan Sabar & Terpercaya",
  description:
    "Mili Animal Care — Jasa perawatan hewan peliharaan yang sabar, teliti, dan terpercaya. Grooming, jalan-jalan, dan penitipan hewan di Indonesia. Hubungi kami via WhatsApp.",
  openGraph: {
    title: "Mili Animal Care — Perawatan Hewan Peliharaan",
    description:
      "Layanan perawatan hewan peliharaan yang sabar dan terpercaya. Grooming, jalan-jalan, penitipan.",
    type: "website",
    url: "https://mili.my.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
