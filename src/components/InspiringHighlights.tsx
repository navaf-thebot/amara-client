'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation'; 

const highlightsStaticData = [
  {
    image: '/images/hglt-estate.jpg',
    url: '/highlights/real-estate',
  },
  {
    image: '/images/hglt-defense.jpg',
    url: '/highlights/defense',
  },
  {
    image: '/images/hglt-energy.jpg',
    url: '/highlights/energy',
  },
  {
    image: '/images/hglt-estate.jpg',
    url: '/highlights/real-estate',
  },
  {
    image: '/images/hglt-defense.jpg',
    url: '/highlights/defense',
  },
];

const InspiringHighlights = () => {
  const t = useTranslations('InspiringHighlights');
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
      const scrollAmount = (380 + 32) * Math.floor(el.clientWidth / (380 + 32));
      el.scrollBy({ left: (direction === 'left' ? -1 : 1) * scrollAmount, behavior: 'smooth' });
    }
  };

  const translatedHighlights = t.raw('highlights') as { title: string; description: string }[];

  return (
    <section className="bg-white dark:bg-black py-16 sm:py-24">
      <style jsx>{`
        .scrollbar-hide { scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .is-dragging { cursor: grabbing; user-select: none; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left max-w-2xl mb-12">
          <h2 className="text-4xl font-bold font-bodoni text-gray-900 dark:text-gray-200 sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg font-montserrat leading-8 text-gray-600 dark:text-gray-200">
            {t('description')}
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onMouseDown={(e) => { e.preventDefault(); handleDragStart(e.pageX); }}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onMouseMove={(e) => handleDragMove(e.pageX)}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            className={`flex overflow-x-auto gap-8 pb-4 cursor-grab scrollbar-hide ${isDragging ? 'is-dragging' : ''}`}
          >
            {highlightsStaticData.map((item, index) => {
              const highlightText = translatedHighlights[index];
              if (!highlightText) return null; 

              return (
                <article 
                  key={index} 
                  className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[380px] min-w-[380px] flex-shrink-0"
                >
                  <div className="flex-shrink-0 overflow-hidden relative h-64 w-full">
                    <Image
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                      src={item.image} 
                      alt={highlightText.title} 
                      fill
                      sizes="(min-width: 1280px) 380px, (min-width: 768px) 45vw, 90vw"
                      priority={index < 2}
                      draggable="false"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white dark:bg-black p-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-bodoni text-gray-900 dark:text-gray-200 mb-3">
                        {highlightText.title}
                      </h3>
                      <p className="text-base font-montserrat text-gray-600 dark:text-gray-300 line-clamp-3">
                        {highlightText.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <Link 
                        href={item.url} 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#c6a35d] hover:text-[#b49556] transition-colors duration-200" 
                        draggable="false"
                      >
                        {t('readNowButton')}
                        <div className="w-6 h-6 rounded-full border-2 border-[#c6a35d] flex items-center justify-center transition-all duration-200 group-hover:bg-[#c6a35d] group-hover:scale-110">
                          <ArrowRight className="w-4 h-4 text-[#c6a35d] transition-colors duration-200 group-hover:text-white" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#c6a35d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </article>
              );
            })}
          </div>

          <button
            onClick={() => handleArrowScroll('left')}
            className={`absolute top-1/2 -translate-y-1/2 left-0 w-14 h-14 rounded-full text-black dark:text-[white] shadow-lg hover:bg-[#c6a35d] hover:text-white transition-all duration-300 z-10 hidden lg:flex items-center justify-center hover:scale-110 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={() => handleArrowScroll('right')}
            className={`absolute top-1/2 -translate-y-1/2 right-0 w-14 h-14 rounded-full text-[#c6a35d] shadow-lg hover:bg-[#c6a35d] hover:text-white transition-all duration-300 z-10 hidden lg:flex items-center justify-center hover:scale-110 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspiringHighlights;