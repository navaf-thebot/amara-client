'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const companyStaticData = [
  { image: '/images/chapter-agra.jpg' },
  { image: '/images/chapter-security.jpg' },
  { image: '/images/chapter-autogroup.jpg' },
  { image: '/images/chapter-itservice.jpg' },
  { image: '/images/chapter-food.jpg' },
  { image: '/images/chapter-aviation.jpg' },
  { image: '/images/chapter-estate.jpg' },
  { image: '/images/chapter-energy.jpg' },
  { image: '/images/chapter-health.jpg' },
  { image: '/images/chapter-education.jpg' },
  { image: '/images/chapter-logistics.jpg' },
  { image: '/images/chapter-manufacturing.jpg' },
  { image: '/images/chapter-engineering.jpg' },
  { image: '/images/chapter-global.jpg' },
  { image: '/images/chapter-tech.jpg' },
  { image: '/images/chapter-financial.jpg' },
  { image: '/images/chapter-hospital.jpg' },
  { image: '/images/chapter-media.jpg' },
  { image: '/images/chapter-sports.jpg' },
  { image: '/images/chapter-environmental.jpg' },
  { image: '/images/chapter-consulting.jpg' },
];

const LegacySection = () => {
  
  const t = useTranslations('LegacySection');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragInfo = useRef({ startX: 0, scrollLeft: 0, velocity: 0, lastScrollLeft: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  
  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const isScrollable = el.scrollWidth > el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 5);
      setCanScrollRight(isScrollable && el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener('scroll', checkScrollability, { passive: true });
      window.addEventListener('resize', checkScrollability, { passive: true });
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }
  }, [checkScrollability]);

  const momentumScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollLeft += dragInfo.current.velocity;
    dragInfo.current.velocity *= 0.95;
    if (Math.abs(dragInfo.current.velocity) > 0.5) {
      animationFrameRef.current = requestAnimationFrame(momentumScroll);
    }
  }, []);

  const handleDragStart = useCallback((clientX: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    setIsDragging(true);
    dragInfo.current.startX = clientX;
    dragInfo.current.scrollLeft = el.scrollLeft;
    dragInfo.current.velocity = 0;
    dragInfo.current.lastScrollLeft = el.scrollLeft;
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    momentumScroll();
  }, [isDragging, momentumScroll]);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const el = scrollContainerRef.current;
    const walk = clientX - dragInfo.current.startX;
    const newScrollLeft = dragInfo.current.scrollLeft - walk;
    dragInfo.current.velocity = newScrollLeft - dragInfo.current.lastScrollLeft;
    el.scrollLeft = newScrollLeft;
    dragInfo.current.lastScrollLeft = newScrollLeft;
  }, [isDragging]);

  const handleArrowScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollBy({ left: (direction === 'left' ? -1 : 1) * (el.clientWidth * 0.8), behavior: 'smooth' });
    }
  };

  const translatedCompanies = t.raw('companies') as { name: string; description: string }[];

  return (
    <section className="bg-white dark:bg-black text-gray-800 font-sans py-20 overflow-hidden">
      <style jsx>{`
        .scrollbar-hide { scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .is-dragging { cursor: grabbing; user-select: none; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#c6a35d] mb-4">
            {t('mainTitle')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('mainDescription')}
          </p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-[#f0efe2] mb-3">
            {t('subTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            {t('subDescription')}
          </p>
          <button className="px-6 py-3 border-2 border-[#c6a35d] text-[#c6a35d] font-semibold rounded-lg hover:bg-[#c6a35d] cursor-pointer hover:text-white transition-colors duration-300">
            {t('exploreButton')}
          </button>
        </div>
      </div>

      <div className="relative mt-12">
        <div
          ref={scrollContainerRef}
          onMouseDown={(e) => { e.preventDefault(); handleDragStart(e.pageX); }}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onMouseMove={(e) => handleDragMove(e.pageX)}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          className={`flex overflow-x-auto gap-8 pb-8 cursor-grab scrollbar-hide ${isDragging ? 'is-dragging' : ''}`}
        >
          <div className="flex-shrink-0 w-1 sm:w-2 lg:w-4" />
          
          {companyStaticData.map((company, index) => {
            
            const companyText = translatedCompanies[index];
            if (!companyText) return null; 

            return (
              <div key={index} className="group min-w-[350px] max-w-[350px] bg-[#c6a35d] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 flex flex-col">
                <div className="relative h-48 w-full flex-shrink-0">
                  <Image
                    src={company.image}
                    alt={companyText.name} 
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 350px, (min-width: 768px) 40vw, 90vw"
                    priority={index < 3}
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                
                <div className="p-6 text-white flex flex-col flex-grow">
                  <h3 className="text-2xl font-bodoni font-bold mb-2">{companyText.name}</h3>
                  
                  <p className="font-montserrat text-base leading-relaxed mb-6 flex-grow line-clamp-5">
                    {companyText.description}
                  </p>
  
                  <a href="#" draggable="false" className="inline-flex items-center gap-2 font-semibold text-sm group-hover:text-white transition-colors mt-auto">
                    {t('knowMoreButton')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
          <div className="flex-shrink-0 w-1 sm:w-2 lg:w-4" />
        </div>

        <button onClick={() => handleArrowScroll('left')} className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-black/80 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Scroll left">
          <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
        <button onClick={() => handleArrowScroll('right')} className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-black/80 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Scroll right">
          <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>
    </section>
  );
};

export default LegacySection;