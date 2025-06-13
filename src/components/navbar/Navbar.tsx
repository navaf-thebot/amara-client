'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown,ExternalLink, Menu, X } from 'lucide-react';
import { FaFacebookF, FaLinkedin,  FaYoutube , FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ModeToggle } from '../themes/ModeToggle';

const navLinks = [
  'About Us',
  'Business',
  'Investors',
  'Careers',
  'Contact US',
];

const menuRoutes: { [key: string]: string } = {
  'Business': '/business',
  'Careers': '/careers',
  'Contact US': '/contact',
  'Privacy Policy': '/privacy-policy',

  'story': '/about/our-story',
  'Values & Culture': '/about/values-culture',
  'Leadership': '/about/leadership',
  'Corporate Governance': '/about/governance',
  'CSR Initiatives': '/about/csr',

  'Quarterly Results': '/investors/financial-information',
  'Annual Reports': '/investors/financial-information',
  'Financial Statements': '/investors/financial-information',
  'Stock Information': '/investors/meeting-information',
  'Board Meetings': '/investors/meeting-information',
  'Shareholder Meetings': '/investors/meeting-information',
  'Media Releases': '/investors/notices-and-announcements',
  'Press Releases': '/investors/notices-and-announcements',
  'Investor Updates': '/investors/notices-and-announcements',
};

const megaMenuData: { [key: string]: { title: string; links: string[] }[] } = {
  'About Us': [
    { title: 'Our Story', links: ['story', 'Values & Culture'] },
    { title: 'Leadership', links: ['Leadership'] },
    { title: 'Governance', links: ['Corporate Governance'] },
    { title: 'CSR', links: ['CSR Initiatives'] },
  ],
  'Business': [],
  'Investors': [
    { title: 'Financial Information', links: ['Quarterly Results', 'Annual Reports', 'Financial Statements'] },
    { title: 'Meeting Information', links: ['Stock Information', 'Board Meetings', 'Shareholder Meetings'] },
    { title: 'Notices & Announcements', links: ['Media Releases', 'Press Releases', 'Investor Updates'] },
  ],
  'Careers': [],
  'Contact US': [],
  'Privacy Policy': [],
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleMobileSubMenuToggle = (menu: string) => {
    setMobileSubMenuOpen(mobileSubMenuOpen === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubMenuOpen(null);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const shouldAppearScrolled = !isHomePage || scrolled || activeMenu;

  return (
    <div onMouseLeave={handleMouseLeave} className="relative">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldAppearScrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700">
          <div className="container mx-auto px-6 h-12 flex justify-between items-center">
            <div></div>
            <div className="flex items-center space-x-6">
              <Link 
                href="/contact" 
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline"
              >
                Contact Us
              </Link>
              <Link 
                href="/fraud-alert" 
                className="text-slate-300 hover:text-amber-400 text-sm font-medium transition-colors duration-200 hover:underline"
              >
                Fraud Alert
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="https://www.facebook.com/amaraa/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="w-5 h-5 text-slate-400 hover:text-blue-900 transition-colors duration-200" />
              </Link>
              <Link href="https://x.com/HouseOfAmaraa" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-5 h-5 text-slate-400 hover:text-gray-600 transition-colors duration-200" />
              </Link>
              <Link href="https://www.linkedin.com/amaraa/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 text-slate-400 hover:text-blue-600 transition-colors duration-200" />
              </Link>
              <Link href="https://www.youtube.com/amaraa/" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-5 h-5 text-slate-400 hover:text-red-700 transition-colors duration-200" />
              </Link>
              <Link href="https://www.youtube.com/amaraa/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 text-slate-400 hover:text-pink-600 transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          shouldAppearScrolled 
            ? 'top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700' 
            : 'top-12 bg-black/40 py-2'
        }`}
      >
        <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ease-in-out ${shouldAppearScrolled ? 'h-16' : 'h-20'}`}>
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo/white-logo.png"
              alt="RIL Logo"
              width={shouldAppearScrolled ? 140 : 200}
              height={shouldAppearScrolled ? 35 : 50}
              className="transition-all duration-300 drop-shadow-lg"
            />
          </Link>

          <nav className="hidden lg:flex items-center h-full">
            {navLinks.map((link) => (
              <div key={link} onMouseEnter={() => handleMouseEnter(link)} className="relative h-full flex items-center">
                {!megaMenuData[link] || megaMenuData[link].length === 0 ? (
                  <Link
                    href={menuRoutes[link] || '#'}
                    className={`relative px-4 py-2 mx-1 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                      shouldAppearScrolled
                        ? 'text-gray-700 dark:text-gray-200 hover:text-[#c6a35d] dark:hover:text-[#c6a35d] hover:bg-gray-100 dark:hover:bg-gray-800'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => handleMenuClick(link)}
                  >
                    <span className="relative z-10">{link}</span>
                    <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2 ${
                      shouldAppearScrolled ? 'bg-[#c6a35d] dark:bg-[#c6a35d]' : 'bg-white'
                    }`} />
                  </Link>
                ) : (
                  <button 
                    className={`relative px-4 py-2 mx-1 text-sm font-semibold transition-all duration-300 rounded-lg group flex items-center ${
                      shouldAppearScrolled
                        ? 'text-gray-700 dark:text-gray-200 hover:text-[#c6a35d] dark:hover:text-[#c6a35d] hover:bg-gray-100 dark:hover:bg-gray-800'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    } ${activeMenu === link ? (shouldAppearScrolled ? 'text-[#c6a35d] dark:text-[#c6a35d] bg-gray-100 dark:bg-gray-800' : 'text-white bg-white/10') : ''}`}
                  >
                    <span className="relative z-10">{link}</span>
                    <ChevronDown
                      size={16}
                      className={`ml-2 transition-transform duration-300 ${activeMenu === link ? 'rotate-180' : ''}`}
                    />
                  </button>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleSearchToggle}
              className={`p-2 rounded-lg transition-all duration-300 ${
                shouldAppearScrolled
                  ? 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              } ${searchOpen ? (shouldAppearScrolled ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800' : 'text-white bg-white/10') : ''}`}
            >
              <Search size={20} />
            </button>

            <div className={`transition-colors duration-300 ${
              shouldAppearScrolled
                ? 'text-gray-600 dark:text-gray-300'
                : 'text-white'
            }`}>
              <ModeToggle />
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                shouldAppearScrolled
                  ? 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed right-0 z-40 transition-all duration-500 ease-in-out ${
          searchOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        } ${shouldAppearScrolled ? 'top-16' : 'top-32'} lg:left-auto left-0`}
      >
        <div className="px-4 lg:px-6 py-3 lg:py-4">
          <form onSubmit={handleSearchSubmit} className="relative w-full lg:w-96">
            <div className="relative">
              <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-[#c6a35d] " size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 lg:pl-12 pr-10 lg:pr-12 py-2.5 lg:py-3 bg-transparent border lg:border-2 border-[#c6a35d] rounded-lg lg:rounded-xl focus:outline-none focus:ring-0 focus:border-[#c6a35d] text-[#c6a35d] placeholder-[#c6a35d] text-sm lg:text-base"
                autoFocus
              />
              <button
                type="button"
                onClick={handleSearchToggle}
                className="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          activeMenu && !searchOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        } ${shouldAppearScrolled ? 'top-16' : 'top-32'}`}
      >
        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-2xl border-b border-gray-200 dark:border-gray-700">
          {activeMenu && (
            <div className="container mx-auto px-6 py-8">
              <div className={` flex justify-around gap-8 ${
                megaMenuData[activeMenu]?.length <= 2 
                  ? 'grid-cols-1 md:grid-cols-2 max-w-4xl' 
                  : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4'
              }`}>
                {megaMenuData[activeMenu]?.map((section, index) => (
                  <div key={index} className="space-y-4">
                    {section.title && (
                      <h3 className="text-base font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                        {section.title}
                      </h3>
                    )}
                    <ul className="">
                      {section.links.map((link) => (
                        <li key={link}>
                          <Link
                            href={menuRoutes[link] || '#'}
                            className="flex items-center text-sm text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group py-1"
                            onClick={() => setActiveMenu(null)}
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-200">{link}</span>
                            <ExternalLink
                              size={12}
                              className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
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

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-slate-900 z-40 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${shouldAppearScrolled ? 'pt-16' : 'pt-32'}`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="mb-6">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </form>
          </div>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <div key={link}>
                {!megaMenuData[link] || megaMenuData[link].length === 0 ? (
                  <Link
                    href={menuRoutes[link] || '#'}
                    className="block py-3 px-4 text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                    onClick={closeMobileMenu}
                  >
                    {link}
                  </Link>
                ) : (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-3 px-4 text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                      onClick={() => handleMobileSubMenuToggle(link)}
                    >
                      {link}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${mobileSubMenuOpen === link ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {mobileSubMenuOpen === link && (
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-indigo-200 dark:border-indigo-800 pl-4">
                        {megaMenuData[link]?.map((section, index) => (
                          <div key={index} className="space-y-2">
                            {section.title && (
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mt-3 first:mt-0">
                                {section.title}
                              </h4>
                            )}
                            <ul className="space-y-1">
                              {section.links.map((subLink) => (
                                <li key={subLink}>
                                  <Link
                                    href={menuRoutes[subLink] || '#'}
                                    className="block py-2 px-3 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-all duration-200"
                                    onClick={closeMobileMenu}
                                  >
                                    {subLink}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {searchOpen && (
        <div
          className="fixed inset-0 bg-transparent z-30"
          onClick={() => setSearchOpen(false)}
        />
      )}

      {searchOpen && (
        <div
          className="fixed inset-0 pointer-events-none z-50"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setSearchOpen(false);
            }
          }}
          tabIndex={-1}
        />
      )}
    </div>
  );
};

export default Header;