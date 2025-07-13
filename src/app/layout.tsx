import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/layout").then(m => m.Sidebar));
const RightNav = dynamic(() => import("@/components/layout").then(m => m.RightNav));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://willdeandre.com'),
  title: {
    default: "Will DeAndre",
    template: "%s | Will DeAndre",
  },
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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003F91',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ perspective: "1200px" }}>
        <Sidebar />
        <RightNav />
        <div className="dynamic-content ml-14 mr-14 h-screen overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}