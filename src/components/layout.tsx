'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

// Helper function to find current page index with sub-route support
function findCurrentPageIndex(pathname: string, allPages: Array<{path: string, label: string}>): number {
  // First try exact match
  const exactMatch = allPages.findIndex(page => page.path === pathname);
  if (exactMatch !== -1) return exactMatch;
  
  // Then try sub-route match (e.g., /blog/post should match /blog)
  const subRouteMatch = allPages.findIndex(page => 
    page.path !== '/' && pathname.startsWith(page.path + '/')
  );
  return subRouteMatch;
}

// 1) Container: constrains content width & adds side padding
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

// 2) Header: your site nav
export function Header() {
  return (
    <header className="bg-white border-b border-muted p-4">
      <div className="flex justify-end">
        <div className="w-10 h-10">
          <Image
            src="/IMG_5034.png"
            alt="Will DeAndre"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

// 3) Left Sidebar - breadcrumb trail (where you've been)
export function Sidebar() {
  const pathname = usePathname();
  
  const getVisitedPages = (currentPath: string) => {
    const allPages = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/projects', label: 'Projects' },
      { path: '/blog', label: 'Blog' },
      { path: '/media', label: 'Media' }
    ];
    
    const currentIndex = findCurrentPageIndex(currentPath, allPages);
    if (currentIndex === -1) return [allPages[0]];
    return allPages.slice(0, currentIndex + 1);
  };
  
  const visitedPages = getVisitedPages(pathname);
  
  return (
    <div className="fixed left-0 top-0 h-screen flex z-50">
      {/* Full-height navigation tabs */}
      <div className="flex h-screen">
        {visitedPages.map((page) => {
          // Determine if this page is currently active
          const isActive = pathname === page.path || 
            (page.path !== '/' && pathname.startsWith(page.path + '/'));
          
          return (
            <Link key={page.path} href={page.path}>
              <div className={`h-full w-14 flex items-center justify-center transition-colors diagonal-hover ${
                isActive ? 'bg-primary' : 'bg-gray-700'
              }`}>
                <span className="text-white text-sm font-medium transform -rotate-90 whitespace-nowrap">
                  {page.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// 4) Right Navigation - next pages (where you can go)
export function RightNav() {
  const pathname = usePathname();
  
  const getNextPages = (currentPath: string) => {
    const allPages = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/projects', label: 'Projects' },
      { path: '/blog', label: 'Blog' },
      { path: '/media', label: 'Media' }
    ];
    
    const currentIndex = findCurrentPageIndex(currentPath, allPages);
    if (currentIndex === -1) return allPages.slice(1);
    return allPages.slice(currentIndex + 1);
  };
  
  const nextPages = getNextPages(pathname);
  
  return (
    <div className="fixed right-0 top-0 h-screen flex z-50">
      <div className="flex h-full">
        {nextPages.map((page) => (
          <Link key={page.path} href={page.path}>
            <div className="h-full w-14 bg-gray-700 flex items-center justify-center transition-colors diagonal-hover">
              <span className="text-white text-sm font-medium transform rotate-90 whitespace-nowrap">
                {page.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// 5) Footer: simple bottom bar
export function Footer() {
  return (
    <footer className="mt-8 border-t border-muted py-4 bg-honeydew">
      <div className="text-center text-sm text-primary/70">
        © {new Date().getFullYear()} Will DeAndre
      </div>
    </footer>
  );
}

function getMarginClass(tabCount: number, side: 'left' | 'right'): string {
  const prefix = side === 'left' ? 'ml-' : 'mr-';
  const marginMap: { [key: number]: string } = {
    0: '0',
    1: '14',
    2: '28',
    3: '42',
    4: '56',
    5: '70'
  };
  return prefix + (marginMap[tabCount] || '0');
}

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const allPages = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/media', label: 'Media' }
  ];

  const currentIndex = findCurrentPageIndex(pathname, allPages);
  const leftTabs = currentIndex === -1 ? 1 : currentIndex + 1;
  const rightTabs = currentIndex === -1 ? 4 : allPages.length - currentIndex - 1;

  const leftMarginClass = getMarginClass(leftTabs, 'left');
  const rightMarginClass = getMarginClass(rightTabs, 'right');

  return (
    <div className="min-h-screen bg-[#E5F4E3]" style={{ perspective: "1200px" }}>
      <Header />
      <Sidebar />
      <RightNav />
      <main className={`${leftMarginClass} ${rightMarginClass}`}>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
}