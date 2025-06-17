'use client';
import { usePathname } from 'next/navigation';
import Navbar from './navbar/Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isHome = pathname === '/';

  return (
    <>
      <Navbar />
      <div className={!hasMounted || isHome ? '' : 'pt-16'}>
        {hasMounted ? children : null}
      </div>
      <Footer />
    </>
  );
}
