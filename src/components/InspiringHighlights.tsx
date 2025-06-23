'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion, Variants } from 'framer-motion';

const highlightsStaticData = [
  { image: '/images/hglt-estate.jpg', url: '/highlights/real-estate' },
  { image: '/images/hglt-defense.jpg', url: '/highlights/defense' },
  { image: '/images/hglt-energy.jpg', url: '/highlights/energy' },
  { image: '/images/hglt-estate.jpg', url: '/highlights/real-estate' },
  { image: '/images/hglt-defense.jpg', url: '/highlights/defense' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const InspiringHighlights = () => {
  const t = useTranslations('InspiringHighlights');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragInfo = useRef({ startX: 0, scrollLeft: 0 });
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener('scroll', checkScrollability, { passive: true });
      window.addEventListener('resize', checkScrollability);
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [checkScrollability]);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    if (scrollContainerRef.current) {
      dragInfo.current = {
        startX: clientX,
        scrollLeft: scrollContainerRef.current.scrollLeft,
      };
    }
  };

  const handleDragEnd = () => setIsDragging(false);

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const walk = clientX - dragInfo.current.startX;
    scrollContainerRef.current.scrollLeft = dragInfo.current.scrollLeft - walk;
  };

  const handleArrowScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380 + 32;
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const translatedHighlights = t.raw('highlights') as { title: string; description: string }[];

  return (
    <section className="bg-white dark:bg-black py-16 sm:py-24 overflow-hidden">
      <style jsx>{`
        .scrollbar-hide { scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        /* FUTURISTIC UPGRADE: This is the "Focus" effect */
        .card-rail:hover > :not(:hover) {
          opacity: 0.5;
          filter: grayscale(80%);
          transform: scale(0.98);
        }
      `}</style>
      
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-left max-w-2xl mb-12">
          <h2 className="text-4xl font-bold font-bodoni text-gray-900 dark:text-gray-200 sm:text-5xl">{t('title')}</h2>
          <p className="mt-4 text-lg font-montserrat leading-8 text-gray-600 dark:text-gray-200">{t('description')}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <div
            ref={scrollContainerRef}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            className={`card-rail flex overflow-x-auto gap-8 pb-4 cursor-grab scrollbar-hide ${isDragging ? 'cursor-grabbing' : ''}`}
          >
            {highlightsStaticData.map((item, index) => {
              const highlightText = translatedHighlights[index];
              if (!highlightText) return null;

              return (
                <article key={index} className="transition-all duration-300 ease-out group relative flex flex-col overflow-hidden rounded-lg shadow-lg w-[380px] min-w-[380px] flex-shrink-0">
                  <div className="flex-shrink-0 overflow-hidden relative h-64 w-full">
                    <Image className="object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt={highlightText.title} fill sizes="380px" priority={index < 2} draggable="false" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white dark:bg-[#1a1a1a] p-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-bodoni text-gray-900 dark:text-gray-200 mb-3">{highlightText.title}</h3>
                      <p className="text-base font-montserrat text-gray-600 dark:text-gray-300 line-clamp-3">{highlightText.description}</p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <Link href={item.url} className="inline-flex items-center gap-2 text-sm font-semibold text-[#c6a35d] hover:text-[#b49556] transition-colors duration-200" draggable="false">
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

          <button onClick={() => handleArrowScroll('left')} className={`absolute top-1/2 -translate-y-1/2 -left-7 w-14 h-14 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm text-black dark:text-white shadow-lg hover:bg-[#c6a35d] hover:text-white transition-all duration-300 z-10 hidden lg:flex items-center justify-center hover:scale-110 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Scroll left">
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button onClick={() => handleArrowScroll('right')} className={`absolute top-1/2 -translate-y-1/2 -right-7 w-14 h-14 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-sm text-black dark:text-white shadow-lg hover:bg-[#c6a35d] hover:text-white transition-all duration-300 z-10 hidden lg:flex items-center justify-center hover:scale-110 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Scroll right">
            <ChevronRight className="w-7 h-7" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InspiringHighlights;