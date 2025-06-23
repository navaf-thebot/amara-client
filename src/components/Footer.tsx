import React from 'react';
import { Link } from '@/i18n/navigation'; 
import { useTranslations } from 'next-intl';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <Link href={href} className="text-sm hover:text-[#c6a35d] transition-colors duration-300">
      {children}
    </Link>
  </li>
);

const SocialLink: React.FC<{ href: string; ariaLabel: string; icon: React.ComponentType<{ className?: string }> }> = ({ href, ariaLabel, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="w-10 h-10 bg-[#c6a35d] text-[#232323] flex items-center justify-center group transition-colors duration-300 hover:bg-[#f0efe2]"
  >
    <Icon className="w-5 h-5 text-[#232323] transition-colors duration-300" />
  </a>
);


const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const tLegacy = useTranslations('LegacySection');
  const companies = tLegacy.raw('companies') as { name: string; description: string }[];

  const titleStyles = "font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide";

  const formatCompanyName = (name: string) => {
    return name.replace(/\s+(Ltd\.?|Limited|SA|Pte\.\s+Ltd\.|LLC|Corporation|Holdings)$/i, '').trim();
  };

  return (
    <footer className="bg-[#232323] text-[#f0efe2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10 mb-10">

          <div className="xl:col-span-2">
            <h2 className="font-bodoni text-5xl font-bold text-[#c6a35d] mb-5 tracking-wider">
              Amaraa
            </h2>
            <p className="font-montserrat text-sm leading-relaxed mb-5">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://x.com/HouseOfAmaraa" ariaLabel="X" icon={FaXTwitter} />
              <SocialLink href="https://www.instagram.com/house_of_amaraa/" ariaLabel="Instagram" icon={FaInstagram} />
            </div>
          </div>

          <div>
            <h3 className={titleStyles}>{t('aboutTitle')}</h3>
            <ul className="font-montserrat space-y-3">
              <FooterLink href="/about/our-story">{t('aboutLinks.story')}</FooterLink>
              <FooterLink href="/about/values-culture">{t('aboutLinks.values')}</FooterLink>
              <FooterLink href="/about/leadership">{t('aboutLinks.leadership')}</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className={`${titleStyles} text-center`}>{t('companiesTitle')}</h3>
            <ul className="space-y-2 text-xs columns-2 gap-x-8">
              {companies.map((company) => (
                 <li key={company.name} className="break-inside-avoid-column">
                   <Link href="/business" className="hover:text-[#c6a35d] transition-colors duration-300">
                     {formatCompanyName(company.name)}
                   </Link>
                 </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={titleStyles}>{t('quickLinksTitle')}</h3>
            <ul className="font-montserrat space-y-3 mb-8">
              <FooterLink href="/about/governance">{t('quickLinks.governance')}</FooterLink>
              <FooterLink href="/investors/financial-information">{t('quickLinks.investors')}</FooterLink>
              <FooterLink href="/careers">{t('quickLinks.careers')}</FooterLink>
              <FooterLink href="/about/csr">{t('quickLinks.csr')}</FooterLink>
            </ul>
            <h3 className={titleStyles}>{t('contactTitle')}</h3>
            <ul className="font-montserrat space-y-2">
              <FooterLink href="/contact">{t('contactLinks.getInTouch')}</FooterLink>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center font-montserrat text-[13px] text-gray-400 mb-6 gap-x-2 gap-y-1">
          <Link href="/privacy-policy" className="hover:text-[#c6a35d] transition-colors duration-300">
            {t('legalLinks.privacy')}
          </Link>
          <span className="text-gray-500">•</span>
          <Link href="/terms-of-service" className="hover:text-[#c6a35d] transition-colors duration-300">
            {t('legalLinks.terms')}
          </Link>
          <span className="text-gray-500">•</span>
          <Link href="/cookie-policy" className="hover:text-[#c6a35d] transition-colors duration-300">
            {t('legalLinks.cookie')}
          </Link>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="font-montserrat text-xs text-gray-500 tracking-wide">
            {t('copyright', { currentYear: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;