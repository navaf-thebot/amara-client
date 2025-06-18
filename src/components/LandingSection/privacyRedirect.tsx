'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation'; 
import { Shield, Cookie, FileText } from 'lucide-react';

const policiesData = [
  {
    id: 'privacy',
    title: 'Our Commitment to Your Privacy',
    description: 'We value the trust you place in us. Our Privacy Policy details how we handle your personal information with care and transparency.',
    buttonText: 'Read Our Privacy Policy',
    href: '/privacy-policy',
    Icon: Shield,
  },
  {
    id: 'cookies',
    title: 'How We Use Cookies',
    description: 'Our website uses cookies to enhance your browsing experience. Learn about the types of cookies we use and how you can manage them.',
    buttonText: 'View Our Cookie Policy',
    href: '/cookie-policy',
    Icon: Cookie,
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    description: 'By using our platform, you agree to our terms. This document governs your use of the Amaraa website and services. Please read it carefully.',
    buttonText: 'Review Our Terms of Service',
    href: '/terms-of-service',
    Icon: FileText,
  },
];

const PolicySwitcherSection = () => {
  const [activePolicyId, setActivePolicyId] = useState('privacy');

  const activePolicy = policiesData.find(p => p.id === activePolicyId);

  return (
    <section 
      className="dark:bg-white/5 border-b border-[#c6a35d] bg-[#fefeff] text-gray-800 dark:text-[#f0efe2]"
      aria-labelledby="policy-heading"
    >
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-12 p-2 bg-gray-100 dark:bg-black/50 rounded-xl">
          {policiesData.map((policy) => {
            const Icon = policy.Icon;
            return (
              <button
                key={policy.id}
                onClick={() => setActivePolicyId(policy.id)}
                className={`
                  w-full sm:w-auto
                  flex items-center justify-center gap-x-2.5 
                  px-4 py-2.5 
                  font-montserrat text-sm font-semibold 
                  rounded-lg 
                  transition-all duration-300
                  focus-visible:outline-2 
                  focus-visible:outline-offset-2 
                  cursor-pointer
                  focus-visible:outline-[#c6a35d]
                  ${activePolicyId === policy.id 
                    ? 'bg-white dark:bg-[#232323] text-[#c6a35d] shadow-md' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-black/70'
                  }
                `}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="hidden sm:inline">{policy.title.split(' ')[2]} Policy</span>
                <span className="sm:hidden">{policy.title.split(' ')[2]}</span>
              </button>
            )
          })}
        </div>
        {activePolicy && (
          <div key={activePolicy.id} className="text-center animate-fade-in">
            <h2 
              id="policy-heading"
              className="font-bodoni text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              {activePolicy.title}
            </h2>

            <p className="font-montserrat mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {activePolicy.description}
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href={activePolicy.href}
                className="
                  font-montserrat
                  inline-block 
                  rounded-md 
                  bg-[#c6a35d] 
                  px-6 
                  py-3 
                  text-base 
                  font-semibold 
                  text-[#232323] 
                  shadow-sm 
                  transition 
                  hover:bg-opacity-90 
                  focus-visible:outline-2 
                  focus-visible:outline-offset-2 
                  focus-visible:outline-[#c6a35d]
                "
              >
                {activePolicy.buttonText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PolicySwitcherSection;