import React from 'react';
import { Link } from '@/i18n/navigation'; 
import { useTranslations } from 'next-intl';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const tLegacy = useTranslations('LegacySection');
  const companies = tLegacy.raw('companies') as { name: string; description: string }[];

  return (
    <footer className="bg-[#232323] text-[#f0efe2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-10">

          <div className="xl:col-span-2">
            <div className="font-bodoni text-5xl font-bold text-[#c6a35d] mb-5 tracking-wider">
              Amaraa
            </div>
            <div className="font-montserrat text-sm leading-relaxed mb-5">
              <p>{t('description')}</p>
            </div>
            <div className="flex gap-4">
              <Link href="https://x.com/HouseOfAmaraa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#c6a35d] text-[#232323] flex items-center justify-center text-lg hover:bg-[#f0efe2] transition-colors duration-300" aria-label="X">
                <FaXTwitter className="w-5 h-5 text-black transition-colors duration-200" />
              </Link>
              <a href="https://www.instagram.com/house_of_amaraa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#c6a35d] text-[#232323] flex items-center justify-center text-lg hover:bg-[#f0efe2] transition-colors duration-300" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 text-pink-900 transition-colors duration-200" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              {t('aboutTitle')}
            </h3>
            <ul className="font-montserrat space-y-3">
              <li><Link href="/about/our-story" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">{t('aboutLinks.story')}</Link></li>
              <li><Link href="/about/values-culture" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">{t('aboutLinks.values')}</Link></li>
              <li><Link href="/about/leadership" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">{t('aboutLinks.leadership')}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              {t('companiesTitle')}
            </h3>
            <div className="overflow-x-auto max-h-[200px] pr-1 scrollbar-thin scrollbar-thumb-[#c6a35d] scrollbar-track-[#2f2f2f]">
              <ul className="space-y-2 text-xs">
                {companies.map((company) => (
                   <li key={company.name}><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">{company.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              {t('quickLinksTitle')}
            </h3>
            <ul className="font-montserrat space-y-3 mb-6">
              <li><Link href="/about/governance" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">{t('quickLinks.governance')}</Link></li>
              <li><Link href="/investors/financial-information" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">{t('quickLinks.investors')}</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">{t('quickLinks.careers')}</Link></li>
              <li><Link href="/about/csr" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">{t('quickLinks.csr')}</Link></li>
            </ul>

            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-3 uppercase tracking-wide">
              {t('contactTitle')}
            </h3>
            <ul className="font-montserrat space-y-2">
              <li><Link href="/contact" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">{t('contactLinks.getInTouch')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center font-montserrat text-[13px] text-gray-400 mb-6 gap-2">
          <Link href="/privacy-policy" className="hover:text-[#c6a35d] transition-colors duration-300">
            {t('legalLinks.privacy')}
          </Link>
          <span className="mx-1 text-gray-500">•</span>
          <Link href="/terms-of-service" className="hover:text-[#c6a35d] transition-colors duration-300">
            {t('legalLinks.terms')}
          </Link>
          <span className="mx-1 text-gray-500">•</span>
          <Link href="/cookie-policy" className="hover:text-[#c6a35d] transition-colors duration-300">
            {t('legalLinks.cookie')}
          </Link>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="font-montserrat text-[12px] text-gray-500 tracking-wide">
            {t('copyright', { currentYear: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;