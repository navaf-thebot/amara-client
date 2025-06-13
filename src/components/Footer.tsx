import React from 'react';
import Link from 'next/link';
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

        <div className="mb-10">
          <h3 className="font-bodoni text-2xl font-semibold text-[#c6a35d] mb-8 text-center uppercase tracking-wide">
            Global Offices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            <div className="bg-[#2a2a2a] p-5 rounded-lg border-l-4 border-[#c6a35d]">
              <div className="flex items-center mb-3">
                <span className="text-lg mr-2">🇱🇺</span>
                <h4 className="font-bodoni text-sm font-semibold text-[#c6a35d] uppercase">Luxembourg</h4>
              </div>
              <div className="font-montserrat text-xs leading-relaxed mb-2">
                <p className="text-[#c6a35d] font-medium mb-1">Headquarters</p>
                <p>Amaraa Global Corporation Ltd.</p>
                <p>15 Rue Edward Steichen,</p>
                <p>L-2540 Luxembourg City,</p>
                <p>Grand Duchy of Luxembourg</p>
              </div>
              <p className="font-montserrat text-xs text-gray-400">Global Holding HQ; Strategic Governance; Corporate Control</p>
            </div>

            <div className="bg-[#2a2a2a] p-5 rounded-lg border-l-4 border-[#c6a35d]">
              <div className="flex items-center mb-3">
                <span className="text-lg mr-2">🇨🇭</span>
                <h4 className="font-bodoni text-sm font-semibold text-[#c6a35d] uppercase">Switzerland</h4>
              </div>
              <div className="font-montserrat text-xs leading-relaxed mb-2">
                <p>Rue du Rhône 118,</p>
                <p>1204 Geneva, Switzerland</p>
              </div>
              <p className="font-montserrat text-xs text-gray-400">High Horology Brand; Swiss Precision Manufacturing</p>
            </div>

            <div className="bg-[#2a2a2a] p-5 rounded-lg border-l-4 border-[#c6a35d]">
              <div className="flex items-center mb-3">
                <span className="text-lg mr-2">🇸🇬</span>
                <h4 className="font-bodoni text-sm font-semibold text-[#c6a35d] uppercase">Singapore</h4>
              </div>
              <div className="font-montserrat text-xs leading-relaxed mb-2">
                <p>80 Robinson Road, #10-01,</p>
                <p>Singapore 068898</p>
              </div>
              <p className="font-montserrat text-xs text-gray-400">Venture Capital, Innovation, Logistics Intelligence</p>
            </div>

            <div className="bg-[#2a2a2a] p-5 rounded-lg border-l-4 border-[#c6a35d]">
              <div className="flex items-center mb-3">
                <span className="text-lg mr-2">🇦🇪</span>
                <h4 className="font-bodoni text-sm font-semibold text-[#c6a35d] uppercase">UAE</h4>
              </div>
              <div className="font-montserrat text-xs leading-relaxed mb-2">
                <p className="text-[#c6a35d] font-medium mb-1">Capital & MENA Region</p>
                <p>Unit 502, Level 5, Index Tower,</p>
                <p>Dubai International Financial Centre,</p>
                <p>Dubai, UAE</p>
              </div>
              <p className="font-montserrat text-xs text-gray-400">Capital Markets; M&A; Regional Investments</p>
            </div>

            <div className="bg-[#2a2a2a] p-5 rounded-lg border-l-4 border-[#c6a35d]">
              <div className="flex items-center mb-3">
                <span className="text-lg mr-2">🇺🇸</span>
                <h4 className="font-bodoni text-sm font-semibold text-[#c6a35d] uppercase">United States</h4>
              </div>
              <div className="font-montserrat text-xs leading-relaxed mb-2">
                <p className="text-[#c6a35d] font-medium mb-1">North American Investment Arm</p>
                <p>745 Fifth Avenue, Suite 500,</p>
                <p>New York, NY 10151, USA</p>
              </div>
              <p className="font-montserrat text-xs text-gray-400">US Strategic Equity, Partnerships, Deal Structuring</p>
            </div>

            <div className="bg-[#2a2a2a] p-5 rounded-lg border-l-4 border-[#c6a35d]">
              <div className="flex items-center mb-3">
                <span className="text-lg mr-2">🇬🇧</span>
                <h4 className="font-bodoni text-sm font-semibold text-[#c6a35d] uppercase">United Kingdom</h4>
              </div>
              <div className="font-montserrat text-xs leading-relaxed mb-2">
                <p className="text-[#c6a35d] font-medium mb-1">Family Office & Capital Markets</p>
                <p>1 Mayfair Place,</p>
                <p>London W1J 8AJ, United Kingdom</p>
              </div>
              <p className="font-montserrat text-xs text-gray-400">Family Office, Wealth Structuring, Asset Management</p>
            </div>

            <div className="bg-[#2a2a2a] p-5 rounded-lg border-l-4 border-[#c6a35d]">
              <div className="flex items-center mb-3">
                <span className="text-lg mr-2">🇮🇳</span>
                <h4 className="font-bodoni text-sm font-semibold text-[#c6a35d] uppercase">India</h4>
              </div>
              <div className="font-montserrat text-xs leading-relaxed mb-2">
                <p className="text-[#c6a35d] font-medium mb-1">Development & Strategic Talent</p>
                <p>10th floor Panchsil Busses Park,</p>
                <p>Laxman Nagar, Baner,</p>
                <p>Pune 411045</p>
              </div>
              <p className="font-montserrat text-xs text-gray-400">Technology, ESG, Research, Compliance Back Office</p>
            </div>

            <div className="bg-[#2a2a2a] p-5 rounded-lg border-l-4 border-[#c6a35d]">
              <div className="flex items-center mb-3">
                <span className="text-lg mr-2">🇮🇳</span>
                <h4 className="font-bodoni text-sm font-semibold text-[#c6a35d] uppercase">India</h4>
              </div>
              <div className="font-montserrat text-xs leading-relaxed mb-2">
                <p className="text-[#c6a35d] font-medium mb-1">Corporate Office</p>
                <p>715, Samarth Aishwarya, Oshiswara,</p>
                <p>Andheri West, Mumbai - 400 053</p>
              </div>
              <p className="font-montserrat text-xs text-gray-400">Corporate Operations</p>
            </div>

          </div>
        </div>

        <div className="flex flex-wrap gap-6 font-montserrat text-xs justify-center mb-8">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-[#c6a35d] transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link href="/privacy-policy" className="text-gray-400 hover:text-[#c6a35d] transition-colors duration-300">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="text-gray-400 hover:text-[#c6a35d] transition-colors duration-300">
            Cookie Policy
          </Link>
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