'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useIsMobile } from "@/hooks/useIsMobile";

// --- helpers ---
function findCurrentPageIndex(pathname: string, pages: Array<{path: string, label: string}>): number {
  const exactMatch = pages.findIndex(p => p.path === pathname);
  if (exactMatch !== -1) return exactMatch;
  const subRouteMatch = pages.findIndex(p => p.path !== '/' && pathname.startsWith(p.path + '/'));
  return subRouteMatch;
}

const PAGES = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/blog', label: 'Blog' },
  { path: '/media', label: 'Media' }
];

// 1) container keeps horizontal padding; we’ll add top padding via <main> when mobile top bar is present
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

// 2) MOBILE-ONLY top bar (desktop = none)
export function Header() {
  // hide completely on desktop
  return (
    <header className="md:hidden sticky top-0 z-50 bg-white/95 border-b border-muted backdrop-blur">
      <div className="max-w-6xl mx-auto px-3 py-2 flex items-center gap-3">
        <Image
          src="/IMG_5034.png"
          alt="Will DeAndre"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        {/* horizontal, thumb-reachable nav */}
        <MobileTopNav />
      </div>
    </header>
  );
}

function MobileTopNav() {
  const pathname = usePathname();
  return (
    <nav className="flex-1 overflow-x-auto no-scrollbar">
      <div className="flex gap-2">
        {PAGES.map((p) => {
          const active = pathname === p.path || (p.path !== "/" && pathname.startsWith(p.path + "/"));
          return (
            <Link
              key={p.path}
              href={p.path}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 px-3 py-1.5 rounded-xl border text-sm ${
                active ? "bg-primary text-white border-primary" : "bg-white"
              }`}
            >
              {p.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

// 3) DESKTOP-ONLY side rails (hidden on mobile), truly fixed to viewport
export function Sidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  if (isMobile) return null;

  const idx = findCurrentPageIndex(pathname, PAGES);
  const visited = idx === -1 ? [PAGES[0]] : PAGES.slice(0, idx + 1);

  return (
    <div className="fixed inset-y-0 left-0 z-50 flex">
      <div className="flex h-full">
        {visited.map((p) => {
          const active = pathname === p.path || (p.path !== '/' && pathname.startsWith(p.path + '/'));
          return (
            <Link key={p.path} href={p.path}>
              <div className={`h-full w-14 flex items-center justify-center transition-colors diagonal-hover ${active ? 'bg-primary' : 'bg-gray-700'}`}>
                <span className="text-white text-sm font-medium -rotate-90 whitespace-nowrap">{p.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function RightNav() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  if (isMobile) return null;

  const idx = findCurrentPageIndex(pathname, PAGES);
  const nextPages = idx === -1 ? PAGES.slice(1) : PAGES.slice(idx + 1);

  return (
    <div className="fixed inset-y-0 right-0 z-50 flex">
      <div className="flex h-full">
        {nextPages.map((p) => (
          <Link key={p.path} href={p.path}>
            <div className="h-full w-14 bg-gray-700 flex items-center justify-center transition-colors diagonal-hover">
              <span className="text-white text-sm font-medium rotate-90 whitespace-nowrap">{p.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// 5) Layout: no perspective on outer wrapper (keeps rails truly fixed). Add top padding only on mobile.
export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const idx = findCurrentPageIndex(pathname, PAGES);
  const leftTabs = idx === -1 ? 1 : idx + 1;
  const rightTabs = idx === -1 ? PAGES.length - 1 : PAGES.length - idx - 1;

  const TAB_W = 56; // w-14
  const leftOffset = leftTabs * TAB_W;
  const rightOffset = rightTabs * TAB_W;

  // height of mobile top bar we just created:
  const MOBILE_TOP_H = 56; // ~p-2 + avatar + nav (tweak if needed)

  return (
    <div className="min-h-screen bg-[#6D8196]">
      {/* mobile-only top bar nav */}
      <Header />

      {/* desktop-only rails */}
      <Sidebar />
      <RightNav />

      <main
        // desktop margins reserve space for rails; on mobile we remove them and add top padding under the header
        style={{
          marginLeft: isMobile ? 0 : leftOffset,
          marginRight: isMobile ? 0 : rightOffset,
          paddingTop: isMobile ? MOBILE_TOP_H : 0,
          // no bottom padding; we removed the bottom bar entirely
        }}
      >
        {/* give the content any 3D transforms without affecting fixed rails */}
        <div style={{ perspective: "1200px" }}>
          {children}
        </div>
      </main>

    </div>
  );
}
