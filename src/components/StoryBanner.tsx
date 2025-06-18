'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Link } from '@/i18n/navigation'; 
import { useTranslations } from 'next-intl';

const StoryBannerSection = () => {

  const t = useTranslations('StoryBannerSection');
  
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => setMounted(true), []);
  
  const logoSrc = resolvedTheme === 'dark'
    ? "/images/logo/white-logo.png"
    : "/images/logo/black-logo.png";


  if (!mounted) return null;

  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="lg:hidden">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative bg-gradient-to-br from-[#bda57f] via-[#8b7355] to-[#6d5f4c] dark:from-[#dfd7b6] dark:via-[#c4b896] dark:to-[#b8a67d] p-8 md:p-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-black/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 dark:bg-black/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-block p-3 bg-white/20 dark:bg-black/20 rounded-2xl backdrop-blur-sm mb-6">
                    <div className="relative w-20 h-20 md:w-24 md:h-24">
                      <Image
                        src={logoSrc}
                        alt={t('logoAlt')}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 80px, 96px"
                      />
                    </div>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-white dark:text-black mb-4 leading-tight">
                    {t('title')}
                  </h2>
                </div>
                
                <p className="text-white/90 dark:text-black/90 leading-relaxed text-base md:text-lg text-center mb-8">
                  {t('descriptionMobile')}
                </p>
                
                <div className="text-center">
                
                  <Link href="/about/our-story" className="group relative inline-block px-8 py-4 bg-white/20 dark:bg-black/20 backdrop-blur-sm border-2 border-white/40 dark:border-black/40 text-white dark:text-black font-semibold rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-[#6d5f4c] dark:hover:text-white hover:scale-105 hover:shadow-xl">
                      <span className="relative z-10">{t('discoverButton')}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 dark:from-black/0 dark:to-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-2 min-h-[600px]">
              <div className="relative bg-gradient-to-br from-[#bda57f] via-[#8b7355] to-[#6d5f4c] dark:from-[#dfd7b6] dark:via-[#c4b896] dark:to-[#b8a67d] p-12 xl:p-16 flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 dark:bg-black/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 dark:bg-black/5 rounded-full translate-y-16 -translate-x-16"></div>
                <div className="absolute top-1/2 right-8 w-2 h-16 bg-white/20 dark:bg-black/20 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-block p-2 bg-white/20 dark:bg-black/20 rounded-xl backdrop-blur-sm mb-6">
                      <div className="w-2 h-2 bg-white dark:bg-black rounded-full"></div>
                    </div>
                    <h2 className="font-serif text-4xl xl:text-5xl font-bold text-white dark:text-black mb-6 leading-tight">
                      {t('title')}
                    </h2>
                  </div>
                  
                  <p className="text-white/90 dark:text-black/90 leading-relaxed text-lg xl:text-xl mb-8 max-w-md">
                    {t('descriptionDesktop')}
                  </p>
                  
                  <Link href="/about/our-story" className="group cursor-pointer relative inline-block px-10 py-4 bg-white/20 dark:bg-black/20 backdrop-blur-sm border-2 border-white/40 dark:border-black/40 text-white dark:text-black font-semibold rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-[#6d5f4c] dark:hover:text-white hover:scale-105 hover:shadow-xl">
                      <span className="relative z-10 flex items-center gap-2">
                        {t('discoverButton')}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 dark:from-black/0 dark:to-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-[#f0efe2] to-[#e8e6d8] dark:from-[#232323] dark:to-[#1a1a1a] flex items-center justify-center p-8">
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="relative z-10 w-full max-w-sm">
                  <div className="relative aspect-square bg-white dark:bg-black/10 rounded-3xl p-8 backdrop-blur-sm">
                    <div className="relative w-full h-full">
                      <Image
                        src={logoSrc}
                        alt={t('logoAlt')}
                        fill
                        className="object-contain drop-shadow-lg"
                        sizes="(max-width: 1024px) 300px, 400px"
                        priority
                      />
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#bda57f] dark:bg-[#dfd7b6] rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8b7355] dark:bg-[#c4b896] rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBannerSection;