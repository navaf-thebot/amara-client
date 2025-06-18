import React from 'react';
import { Link } from '@/i18n/navigation'; 
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
              <p>Amaraa - Leading diversified business conglomerate with excellence across multiple industries & sectors.</p>
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
            <div className="overflow-x-auto max-h-[200px] pr-1 scrollbar-thin scrollbar-thumb-[#c6a35d] scrollbar-track-[#2f2f2f]">
              <ul className="space-y-2 text-xs">
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
              <li><Link href="/investors/financial-information" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Investors</Link></li>
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

        <div className="flex flex-wrap justify-center items-center font-montserrat text-[13px] text-gray-400 mb-6 gap-2">
          <Link href="/privacy-policy" className="hover:text-[#c6a35d] transition-colors duration-300">
            Privacy Policy
          </Link>
          <span className="mx-1 text-gray-500">•</span>
          <Link href="/terms-of-service" className="hover:text-[#c6a35d] transition-colors duration-300">
            Terms of Service
          </Link>
          <span className="mx-1 text-gray-500">•</span>
          <Link href="/cookie-policy" className="hover:text-[#c6a35d] transition-colors duration-300">
            Cookie Policy
          </Link>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="font-montserrat text-[12px] text-gray-500 tracking-wide">
            © 2024 Amaraa Group of Companies. All rights reserved.
          </p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;