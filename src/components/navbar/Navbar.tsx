'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { ModeToggle } from '../themes/ModeToggle';

const navLinks = [
  'About Us',
  'Subsidiaries',
  'Careers',
  'Contact US',
  'Privacy Policy',
];

const menuRoutes: { [key: string]: string } = {
  'Subsidiaries': '/subsidiaries',
  'Careers': '/careers',
  'Contact US': '/contact',
  'Privacy Policy': '/privacy-policy',
  
  'story': '/about/our-story',
  'Values & Culture': '/about/values-culture',
  'Leadership': '/about/leadership',
  'Corporate Governance': '/about/governance',
  'CSR Initiatives': '/about/csr',
  'Quarterly Results': '/investors/quarterly-results',
  'Annual Reports': '/investors/annual-reports',
  'Financial Statements': '/investors/financial-statements',
  'Stock Information': '/investors/stock-info',
  'AGM Details': '/investors/agm',
  'Investor Contacts': '/investors/contacts',
  'Stock Exchange Filings': '/investors/filings',
  'Press Releases': '/investors/press-releases',
  'Investor Presentations': '/investors/presentations',
};

const megaMenuData: { [key: string]: { title: string; links: string[] }[] } = {
  'About Us': [
    { title: 'Our Story', links: ['story', 'Values & Culture'] },
    { title: 'Leadership', links: ['Leadership'] },
    { title: 'Governance', links: ['Corporate Governance'] },
    { title: 'CSR', links: ['CSR Initiatives'] },
  ],
  'Subsidiaries': [],
  'Investors': [
    { title: 'Financial Information', links: ['Quarterly Results', 'Annual Reports', 'Financial Statements'] },
    { title: 'Shareholder Services', links: ['Stock Information', 'AGM Details', 'Investor Contacts'] },
    { title: 'Disclosures', links: ['Stock Exchange Filings', 'Press Releases', 'Investor Presentations'] },
  ],
  'Careers': [],
  'Contact US': [],
  'Privacy Policy': [],
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setScrolled(window.scrollY > 50);
      }
    };
    
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage]);

  const handleMouseEnter = (menu: string) => {
    if (megaMenuData[menu] && megaMenuData[menu].length > 0) {
      setActiveMenu(menu);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleMenuClick = (menu: string) => {
    if (!megaMenuData[menu] || megaMenuData[menu].length === 0) {
      setActiveMenu(null);
    }
  };

  const shouldAppearScrolled = !isHomePage || scrolled;

  return (
    <div onMouseLeave={handleMouseLeave} className="relative">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          shouldAppearScrolled 
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className={`transition-opacity duration-300 ${shouldAppearScrolled ? 'hidden' : 'opacity-100'}`}>
          <div className="bg-ril-light-gray h-10 border-b border-ril-gray">
            <div className="container mx-auto px-6 h-full flex justify-end items-center space-x-4">
              <Link href="https://www.facebook.com//" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-white hover:text-blue-600" />
              </Link>
              <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-white hover:text-blue-600 " />
              </Link>
              <Link href="https://www.linkedin.com/company/" target="_blank" rel="noopener noreferrer" >
                <Linkedin className="w-6 h-6 text-white hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </div>

        <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ease-in-out ${shouldAppearScrolled ? 'h-20' : 'h-28'}`}>
          <Link href="/">
            <Image
              src={'/images/logo.png'}
              alt="RIL Logo"
              width={shouldAppearScrolled ? 70 : 90}
              height={50}
              className="transition-all duration-300"
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            {navLinks.map((link) => (
              <div key={link} onMouseEnter={() => handleMouseEnter(link)} className="h-full flex items-center">
                {!megaMenuData[link] || megaMenuData[link].length === 0 ? (
                  <Link 
                    href={menuRoutes[link] || '#'} 
                    className={`group flex items-center text-sm font-semibold transition-colors duration-300 ${
                      shouldAppearScrolled 
                        ? 'text-ril-dark-blue hover:text-ril-blue' 
                        : 'dark:text-[#af8019] text-[#af8019] hover:text-[#af8019]'
                    }`}
                    onClick={() => handleMenuClick(link)}
                  >
                    <span>{link}</span>
                  </Link>
                ) : (
                  <button className={`group flex items-center text-sm font-semibold transition-colors duration-300 ${
                    shouldAppearScrolled 
                      ? 'text-ril-dark-blue hover:text-ril-blue' 
                      : 'dark:text-[#af8019] text-[#af8019] hover:text-gray-200'
                  }`}>
                    <span>{link}</span>
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-300 ${
                        activeMenu === link ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
            ))}
          </nav>
          <div className='flex gap-7 items-center'>
            <button className={`transition-colors duration-300 ${
              shouldAppearScrolled 
                ? 'text-ril-dark-blue hover:text-ril-blue' 
                : 'text-white hover:text-gray-200'
            }`}>
              <Search size={22} />
            </button>
            
            <div className={`transition-colors duration-300 ${
              shouldAppearScrolled 
                ? 'text-ril-dark-blue' 
                : 'text-white'
            }`}>
              <ModeToggle/>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          activeMenu 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        } ${shouldAppearScrolled ? 'mt-20' : 'mt-28'}`}
      >
        <div className="min-h-[50vh] w-full bg-white dark:bg-black shadow-2xl border-t border-gray-200 dark:border-gray-800 overflow-y-auto">
          {activeMenu && (
            <div className="container mx-auto px-6 py-16">
              <h2 className="text-4xl font-bold text-ril-dark-blue dark:text-white mb-12">
                {activeMenu}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
                {megaMenuData[activeMenu]?.map((section, index) => (
                  <div key={index}>
                    {section.title && (
                      <h3 className="text-lg font-semibold text-ril-dark-blue dark:text-white mb-5">
                        {section.title}
                      </h3>
                    )}
                    <ul className="space-y-4">
                      {section.links.map((link) => (
                        <li key={link}>
                          <Link 
                            href={menuRoutes[link] || '#'} 
                            className="flex items-center text-ril-text-light dark:text-gray-300 hover:text-ril-blue dark:hover:text-blue-400 transition-colors group"
                            onClick={() => setActiveMenu(null)} // Close menu when clicking a link
                          >
                            {link}
                            <ExternalLink 
                              size={14} 
                              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" 
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;