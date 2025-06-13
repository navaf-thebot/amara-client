import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#232323] text-[#f0efe2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-10">
          
          <div className="xl:col-span-2">
            <div className="font-bodoni text-5xl font-bold text-[#c6a35d] mb-5 tracking-wider">
              Amaraa
            </div>
            <div className="font-montserrat text-sm leading-relaxed mb-5">
              <p>Amaraa - Leading diversified business conglomerate with excellence across multiple industries and sectors.</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-[#c6a35d] text-[#232323] flex items-center justify-center text-lg hover:bg-[#f0efe2] transition-colors duration-300" aria-label="Facebook">
                <span>f</span>
              </Link>
              <Link href="#" className="w-10 h-10 bg-[#c6a35d] text-[#232323] flex items-center justify-center text-lg hover:bg-[#f0efe2] transition-colors duration-300" aria-label="LinkedIn">
                <span>in</span>
              </Link>
              <Link href="#" className="w-10 h-10 bg-[#c6a35d] text-[#232323] flex items-center justify-center text-lg hover:bg-[#f0efe2] transition-colors duration-300" aria-label="YouTube">
                <span>▶</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              About
            </h3>
            <ul className="font-montserrat space-y-3">
              <li><Link href="/our-story" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Story</Link></li>
              <li><Link href="/values-culture" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Values & Culture</Link></li>
              <li><Link href="/leadership" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Leadership Team</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              Our Companies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <ul className="font-montserrat space-y-2">
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Agro Group Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Security Shield Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Auto Group Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">IT Services Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Food & Beverages Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Aviation Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Real Estate Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Energy Solutions Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Healthcare Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Education Foundation</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Logistics Ltd.</Link></li>
              </ul>
              <ul className="font-montserrat space-y-2">
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Manufacturing Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Engineering Services Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Global Trading Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Tech Innovations Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Financial Services Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Hospitality Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Media & Communications Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Sports & Recreation Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Environmental Solutions Ltd.</Link></li>
                <li><Link href="/business" className="text-xs hover:text-[#c6a35d] transition-colors duration-300">Consulting Ltd.</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="font-montserrat space-y-3 mb-6">
              <li><Link href="/about/governance" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Governance</Link></li>
              <li><Link href="/investor/financial-information" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Investors</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Careers</Link></li>
              <li><Link href="/about/csr" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">CSR Projects</Link></li>
            </ul>
            
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-3 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="font-montserrat space-y-2">
              <li><Link href="/contact" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Get in Touch</Link></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="font-montserrat text-sm leading-relaxed">
            <p><span className="text-[#c6a35d] font-medium">Corporate Office:</span><br />
            715, Samarth Aishwarya, Oshiswara,<br />
            Andheri West, Mumbai - 400 053, India</p>
          </div>
          
          <div className="flex flex-wrap gap-6 font-montserrat text-xs">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-[#c6a35d] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-[#c6a35d] transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-[#c6a35d] transition-colors duration-300">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-[#c6a35d] transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center">
          <p className="font-montserrat text-xs text-gray-400">
            &copy; 2024 Amaraa Group of Companies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;