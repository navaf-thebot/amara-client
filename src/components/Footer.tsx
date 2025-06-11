import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#232323] text-[#f0efe2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10 mb-10">
          
          <div className="xl:col-span-2">
            <div className="font-bodoni text-5xl font-bold text-[#c6a35d] mb-5 tracking-wider">
              AGC
            </div>
            <div className="font-montserrat text-sm leading-relaxed mb-5">
              <p>Amaraja Group of Companies - Leading diversified business conglomerate with excellence across multiple industries and sectors.</p>
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
              <li><Link href="/about" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">About Amaraja Group</Link></li>
              <li><Link href="/vision-mission" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Vision & Mission</Link></li>
              <li><Link href="/leadership" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Leadership Team</Link></li>
              <li><Link href="/group-profile" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Group Profile</Link></li>
              <li><Link href="/csr-activities" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">CSR Activities</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              Business
            </h3>
            <ul className="font-montserrat space-y-3">
              <li><Link href="/agro-group" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Agro Group</Link></li>
              <li><Link href="/security-shield" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Security Shield Group</Link></li>
              <li><Link href="/auto-group" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Auto Group</Link></li>
              <li><Link href="/it-services" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">IT Services Group</Link></li>
              <li><Link href="/food-beverages" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Food and Beverages Group</Link></li>
              <li><Link href="/aviation" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Aviation Group</Link></li>
              <li><Link href="/hotels" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Hotels Group</Link></li>
              <li><Link href="/defense" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Defense Group</Link></li>
              <li><Link href="/energy" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Energy Group</Link></li>
              <li><Link href="/financial" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Financial Group</Link></li>
              <li><Link href="/realty" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Realty Group</Link></li>
              <li><Link href="/executive-jet" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Executive Jet</Link></li>
              <li><Link href="/mro" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">MRO</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              Corporate Affairs
            </h3>
            <ul className="font-montserrat space-y-3 mb-6">
              <li><Link href="/policies-governance" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Policies & Governance</Link></li>
              <li><Link href="/investor-relations" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Investor Relations</Link></li>
              <li><Link href="/compliance-reports" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Compliance Reports</Link></li>
            </ul>
            
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              CSR Initiatives
            </h3>
            <ul className="font-montserrat space-y-3">
              <li><Link href="/csr-overview" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Overview of CSR Projects</Link></li>
              <li><Link href="/impact-stories" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Impact Stories</Link></li>
              <li><Link href="/sustainability-goals" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Sustainability Goals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              News & Media
            </h3>
            <ul className="font-montserrat space-y-3 mb-6">
              <li><Link href="/press-releases" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Press Releases</Link></li>
              <li><Link href="/media-coverage" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Media Coverage</Link></li>
              <li><Link href="/events-blogs" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Events & Blogs</Link></li>
            </ul>
            
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              Careers
            </h3>
            <ul className="font-montserrat space-y-3">
              <li><Link href="/current-openings" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Current Openings</Link></li>
              <li><Link href="/culture-life" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Culture & Life at Amaraja</Link></li>
              <li><Link href="/employee-testimonials" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Employee Testimonials</Link></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="font-bodoni text-lg font-semibold text-[#c6a35d] mb-5 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="font-montserrat space-y-3">
              <li><Link href="/inquiry-form" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Inquiry Form</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">FAQ</Link></li>
              <li><Link href="/partners-hub" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Partner&apos;s Hub</Link></li>
              <li><Link href="/partner-info" className="text-sm hover:text-[#c6a35d] transition-colors duration-300">Partner Specific Information</Link></li>
            </ul>
          </div>
          
          <div className="font-montserrat text-sm leading-relaxed">
            <p><span className="text-[#c6a35d] font-medium">Address:</span><br />
            715, Samarth Aishwarya, Oshiswara,<br />
            Andheri West, Mumbai - 400 053, India</p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col lg:flex-row justify-between items-center gap-5">
          <p className="font-montserrat text-xs text-gray-400">
            &copy; 2024 Amaraja Group of Companies. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-8 font-montserrat text-xs">
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
      </div>
    </footer>
  );
};

export default Footer;