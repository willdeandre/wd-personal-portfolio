import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://willdeandre.com"),
  title: { default: "Will DeAndre", template: "%s | Will DeAndre" },
  description: "Salary Cap & Basketball Strategy Expert + Aspiring Full-stack Developer",
  keywords: ["NBA", "CBA", "basketball", "will", "deandre"],
  authors: [{ name: "Will DeAndre" }],
  creator: "Will DeAndre",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://willdeandre.com",
    title: "Will DeAndre",
    description: "Salary Cap & Basketball Strategy Expert + Aspiring Full-stack Developer",
    siteName: "Will DeAndre Portfolio",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#003F91",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}