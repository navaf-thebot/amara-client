"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Pause } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const heroSlidesStaticData = [
  { id: 1, image: "/images/HeroContent/Pioneering-Excellence.jpg", link:'/about/values-culture' },
  { id: 2, image: "/images/HeroContent/Sustainable-Future.jpg", link:'/about/csr' },
  { id: 3, image: "/images/HeroContent/Global-Leadership.jpg", link:'/about/leadership' },
  { id: 4, image: "/images/HeroContent/Technology-Innovation.jpg", link:'/business' },
  { id: 5, image: "/images/carbon.jpg", link:'/sustainability/carbon-footprint' },
  { id: 6, image: "/images/Sustain.jpg", link:'/sustainability/carbon-neutrality' }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

import type { Transition } from 'framer-motion';

const springTransition: Transition = {
  type: 'spring', stiffness: 100, damping: 20
};

export default function HeroSection() {
  const t = useTranslations('HeroSection');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesStaticData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlidesStaticData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlidesStaticData.length) % heroSlidesStaticData.length);
  const goToSlide = (index: number) => setCurrentSlide(index);
  const togglePlayPause = () => setIsPlaying(!isPlaying);
  
  const translatedSlides = t.raw('slides') as { title: string; subtitle: string; description: string; cta: string }[];
  const activeSlideData = translatedSlides[currentSlide];
  const activeStaticData = heroSlidesStaticData[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{ scale: 1.1, x: '-2%', y: '2%' }}
            transition={{ duration: 10, ease: 'easeOut' }}
          >
            <Image
              src={activeStaticData.image}
              alt={activeSlideData?.title || 'Hero background image'}
              fill
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" />
      
      
      <div className="relative z-10 h-full flex items-center pt-24"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="max-w-4xl"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <motion.h2 variants={itemVariants} transition={springTransition} className="text-lg sm:text-xl font-montserrat font-medium text-[#c6a35d] tracking-wide uppercase">
                    {activeSlideData.subtitle}
                  </motion.h2>
                  <motion.h1 variants={itemVariants} transition={springTransition} className="text-4xl sm:text-5xl lg:text-7xl font-bodoni font-bold text-white leading-tight">
                    {activeSlideData.title}
                  </motion.h1>
                  <motion.p variants={itemVariants} transition={springTransition} className="text-lg sm:text-xl text-gray-200 max-w-2xl font-montserrat leading-relaxed">
                    {activeSlideData.description}
                  </motion.p>
                </div>
                <motion.div variants={itemVariants} transition={springTransition} className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href={activeStaticData.link}>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer group inline-flex items-center px-8 py-4 bg-[#c6a35d] text-white font-montserrat font-semibold rounded-lg shadow-lg">
                      {activeSlideData.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                  <Link href={'/about/our-story'}>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer group inline-flex items-center px-8 py-4 border-2 border-white text-white font-montserrat font-semibold rounded-lg">
                      {t('watchStoryButton')}
                      <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4 p-2 bg-black/20 rounded-full backdrop-blur-sm">
        <div className="flex space-x-2">
          {heroSlidesStaticData.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className="w-2.5 h-2.5 rounded-full transition-colors duration-300 bg-white/50 hover:bg-white" aria-label={`Go to slide ${index + 1}`} >
              {index === currentSlide && <motion.div layoutId="underline" className="w-full h-full bg-[#c6a35d] rounded-full" />}
            </button>
          ))}
        </div>
        <button onClick={togglePlayPause} className="text-white" aria-label={isPlaying ? 'Pause slider' : 'Play slider'}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>

      <motion.button whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} whileTap={{ scale: 0.9 }} onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10" aria-label="Previous slide" >
        <ChevronLeft className="h-6 w-6 text-white" />
      </motion.button>
      <motion.button whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} whileTap={{ scale: 0.9 }} onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10" aria-label="Next slide" >
        <ChevronRight className="h-6 w-6 text-white" />
      </motion.button>
    </section>
  )
}