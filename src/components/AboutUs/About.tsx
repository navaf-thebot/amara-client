'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type DotStyle = {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
};

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [dotStyles, setDotStyles] = useState<DotStyle[]>([]);

  const router = useRouter();
  const t = useTranslations('AboutUsSection');

  useEffect(() => {
    setIsVisible(true);
    
    const generateDots = () => {
      const styles = Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      }));
      setDotStyles(styles);
    };

    generateDots();
  }, []); 

  const redirectFunc = (section: string) => {
    setActiveSection(section);
    router.push(`/about/${section}`);
  };

  const sections = ['our-story', 'values-culture', 'governance', 'leadership', 'csr'] as const;

  return (
    <div className="min-h-screen bg-[#232323] text-[#f0efe2] overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232323] via-[#2a2a2a] to-[#1a1a1a]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c6a35d]/10 to-transparent"></div>

        <div className="absolute inset-0 overflow-hidden">
          {dotStyles.map((style, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#c6a35d]/30 rounded-full animate-pulse"
              style={style} 
            ></div>
          ))}
        </div>

        <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 className="font-bodoni text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#c6a35d] to-[#f0efe2] bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="font-montserrat text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto">
            {t('description')}
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => redirectFunc(section)}
                className={`font-montserrat cursor-pointer px-6 py-3 rounded-full border-2 transition-all duration-300 capitalize ${activeSection === section
                  ? 'bg-[#c6a35d] border-[#c6a35d] text-[#232323]'
                  : 'border-[#c6a35d] text-[#c6a35d] hover:bg-[#c6a35d] hover:text-[#232323]'
                  }`}
              >
                {t(`buttons.${section}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-[#c6a35d] rotate-90" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;