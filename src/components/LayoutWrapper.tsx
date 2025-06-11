'use client';
import { usePathname } from 'next/navigation';
import Navbar from './navbar/Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      <Navbar />
      <div className={isHome ? '' : 'pt-16'}>{children}</div>
      <Footer />
    </>
  );
}
