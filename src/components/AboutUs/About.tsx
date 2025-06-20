'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();
  const t = useTranslations('AboutUsSection');

  useEffect(() => {
    setIsVisible(true);
  }, []); 

  const redirectFunc = (section: string) => {
    setActiveSection(section);
    router.push(`/about/${section}`);
  };

  const sections = ['our-story', 'values-culture', 'governance', 'leadership', 'csr'] as const;

  return (
    <div className="min-h-screen bg-[#f0efe2] dark:bg-[#232323] text-[#232323] dark:text-[#f0efe2] overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, #c6a35d15 0%, transparent 25%),
              radial-gradient(circle at 80% 80%, #c6a35d20 0%, transparent 30%),
              radial-gradient(circle at 60% 40%, #c6a35d10 0%, transparent 20%),
              linear-gradient(45deg, transparent 40%, #c6a35d08 50%, transparent 60%),
              conic-gradient(from 180deg at 50% 50%, transparent 0deg, #c6a35d05 90deg, transparent 180deg, #c6a35d08 270deg, transparent 360deg)
            `,
            backgroundColor: 'inherit'
          }}
        />

        <div 
          className="absolute inset-0 opacity-10 dark:opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(circle, #c6a35d 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        />

        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-full h-full opacity-20 dark:opacity-30"
            style={{
              background: `
                linear-gradient(90deg, transparent, #c6a35d20, transparent),
                linear-gradient(45deg, transparent 30%, #c6a35d15 50%, transparent 70%)
              `,
              animation: 'wave 8s ease-in-out infinite'
            }}
          />
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 h-16 border-2 border-[#c6a35d]/20 rotate-45 animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute top-32 right-20 w-8 h-8 bg-[#c6a35d]/10 rounded-full animate-pulse" />
          <div className="absolute bottom-40 left-16 w-12 h-12 border border-[#c6a35d]/15 rounded-full animate-bounce" style={{animationDuration: '3s'}} />
          <div className="absolute bottom-20 right-32 w-6 h-20 bg-gradient-to-t from-[#c6a35d]/20 to-transparent rotate-12 animate-pulse" />
          <div className="absolute top-1/2 left-8 w-4 h-4 bg-[#c6a35d]/25 transform rotate-45 animate-ping" style={{animationDuration: '4s'}} />
          <div className="absolute top-1/3 right-12 w-10 h-10 border-2 border-[#c6a35d]/15 rotate-12 animate-spin" style={{animationDuration: '15s'}} />
        </div>

        <div 
          className="absolute inset-0 opacity-5 dark:opacity-8"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 30px,
                rgba(198, 163, 93, 0.4) 30px,
                rgba(198, 163, 93, 0.4) 32px
              )
            `
          }}
        />

        <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          
          <div className="relative mb-8">
            <h1 className="font-bodoni text-6xl md:text-8xl font-bold bg-gradient-to-br from-[#c6a35d] via-[#232323] dark:via-[#f0efe2] to-[#c6a35d] bg-clip-text text-transparent leading-tight relative z-10">
              {t('title')}
            </h1>
            <div className="absolute inset-0 font-bodoni text-6xl md:text-8xl font-bold text-[#c6a35d]/10 blur-sm transform translate-x-2 translate-y-2">
              {t('title')}
            </div>
          </div>
          
          <div className="relative mb-12 p-8 rounded-3xl bg-white/60 dark:bg-black/30 backdrop-blur-lg border border-[#c6a35d]/20 shadow-xl">
            <p className="font-montserrat text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-[#232323] dark:text-[#f0efe2]">
              {t('description')}
            </p>
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-3 border-t-3 border-[#c6a35d] rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-3 border-b-3 border-[#c6a35d] rounded-br-lg" />
          </div>

          <div className="flex justify-center flex-wrap gap-6">
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => redirectFunc(section)}
                className={`font-montserrat cursor-pointer group relative px-8 py-4 capitalize text-base font-semibold transition-all duration-500 transform hover:scale-110 overflow-hidden ${
                  activeSection === section
                    ? 'text-white'
                    : 'text-[#232323] dark:text-[#f0efe2] hover:text-white'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
                }}
              >
                <div className={`absolute inset-0 transition-all duration-500 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-[#c6a35d] to-[#c6a35d]/80 shadow-lg shadow-[#c6a35d]/30'
                    : 'bg-gradient-to-r from-[#c6a35d]/20 to-[#c6a35d]/10'
                }`} 
                style={{clipPath: 'inherit'}} />
                
                <div className={`absolute inset-0 bg-gradient-to-r from-[#c6a35d] to-[#c6a35d]/80 shadow-lg shadow-[#c6a35d]/30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out ${
                  activeSection === section ? 'hidden' : ''
                }`}
                style={{clipPath: 'inherit'}} />
                
                <span className="relative z-10">{t(`buttons.${section}`)}</span>
                
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                style={{clipPath: 'inherit'}} />
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-1 cursor-pointer left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-[#c6a35d]/60 rounded-full relative mb-2 animate-pulse">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-[#c6a35d] rounded-full animate-bounce" />
            </div>
            <div className="text-[#c6a35d] text-xs font-montserrat tracking-wider">SCROLL</div>
          </div>
        </div>

        <style jsx>{`
          @keyframes wave {
            0%, 100% { transform: translateX(-100px) rotate(0deg); }
            50% { transform: translateX(100px) rotate(180deg); }
          }
        `}</style>
      </section>
    </div>
  );
};

export default AboutUs;