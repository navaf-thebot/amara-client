'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const companyStaticData = [
  { image: '/images/chapter-agra.jpg' }, { image: '/images/chapter-security.jpg' }, { image: '/images/chapter-autogroup.jpg' }, { image: '/images/chapter-itservice.jpg' }, { image: '/images/chapter-food.jpg' }, { image: '/images/chapter-marine.jpg' }, { image: '/images/chapter-aviation.jpg' }, { image: '/images/chapter-estate.jpg' }, { image: '/images/chapter-energy.jpg' }, { image: '/images/chapter-health.jpg' }, { image: '/images/chapter-education.jpg' }, { image: '/images/chapter-logistics.jpg' }, { image: '/images/chapter-manufacturing.jpg' }, { image: '/images/chapter-global.jpg' }, { image: '/images/chapter-financial.jpg' }, { image: '/images/chapter-hospital.jpg' }, { image: '/images/chapter-media.jpg' }, { image: '/images/chapter-sports.jpg' }, { image: '/images/chapter-consulting.jpg' },
];

const LegacyCard = ({ companyText, company, index }: { companyText: { name: string; description: string }; company: { image: string }; index: number; }) => {
  const t = useTranslations('LegacySection');
  return (
    <div className="group min-w-[350px] max-w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-lg bg-[#2a2a2a] flex flex-col scroll-snap-center transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02]">
      <div className="relative h-48 w-full flex-shrink-0">
        <Image src={company.image} alt={companyText.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="350px" priority={index < 3} draggable="false" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6 text-white flex flex-col flex-grow">
        <h3 className="text-2xl font-bodoni font-bold mb-2">{companyText.name}</h3>
        <p className="font-montserrat text-sm leading-relaxed mb-6 flex-grow line-clamp-5 opacity-80">{companyText.description}</p>
        <Link href="/business" className="inline-flex items-center gap-2 font-semibold text-xs text-white/70 group-hover:text-white transition-colors mt-auto uppercase tracking-wider">
          {t('knowMoreButton')}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } }};
const itemVariants: Variants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 }};

const LegacySection = () => {
  const t = useTranslations('LegacySection');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const translatedCompanies = t.raw('companies') as { name: string; description: string }[];
  
  const isDragging = useRef(false);
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
  
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    dragInfo.current = {
      startX: e.pageX - (scrollContainerRef.current?.offsetLeft || 0),
      scrollLeft: scrollContainerRef.current?.scrollLeft || 0,
    };
    scrollContainerRef.current?.classList.add('is-dragging');
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
    scrollContainerRef.current?.classList.remove('is-dragging');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - dragInfo.current.startX) * 1.5;
    scrollContainerRef.current.scrollLeft = dragInfo.current.scrollLeft - walk;
  };

  const handleArrowScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.7;
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white dark:bg-black text-gray-800 font-sans py-24 overflow-hidden">
      <style jsx>{`
        .scrollbar-hide { scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .is-dragging { cursor: grabbing; user-select: none; }
        .scroll-snap-x-mandatory { scroll-snap-type: x mandatory; }
        .scroll-snap-center { scroll-snap-align: center; }
      `}</style>
      
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bodoni font-bold text-[#c6a35d] mb-4">{t('mainTitle')}</motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{t('mainDescription')}</motion.p>
        </div>
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bodoni font-bold text-gray-900 dark:text-[#f0efe2] mb-3">{t('subTitle')}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">{t('subDescription')}</p>
          <Link href="/business" className="inline-block px-6 py-3 border-2 border-[#c6a35d] text-[#c6a35d] font-semibold rounded-lg hover:bg-[#c6a35d] cursor-pointer hover:text-white transition-colors duration-300">
            {t('exploreButton')}
          </Link>
        </motion.div>
      </motion.div>
      <div className="relative mt-12">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-8 py-8 cursor-grab scrollbar-hide scroll-snap-x-mandatory"
        >
          <div className="flex-shrink-0 w-px ml-[max(2rem,50%-550px)]" /> 
          
          {companyStaticData.map((company, index) => {
            const companyText = translatedCompanies[index];
            if (!companyText) return null;
            return <LegacyCard key={index} index={index} company={company} companyText={companyText} />;
          })}
          
          <div className="flex-shrink-0 w-px mr-[max(2rem,50%-550px)]" />
        </div>
        
        <button onClick={() => handleArrowScroll('left')} className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 hidden md:block bg-white/80 dark:bg-black/80 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
        <button onClick={() => handleArrowScroll('right')} className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 hidden md:block bg-white/80 dark:bg-black/80 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>
    </section>
  );
};

export default LegacySection;