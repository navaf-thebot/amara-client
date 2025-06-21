"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation'; 
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const heroSlidesStaticData = [
  {
    id: 1,
    image: "/images/HeroContent/Pioneering-Excellence.jpg",
    link:'/about/values-culture'
  },
  {
    id: 2,
    image: "/images/HeroContent/Sustainable-Future.jpg",
    link:'/about/csr'
  },
  {
    id: 3,
    image: "/images/HeroContent/Global-Leadership.jpg",
    link:'/about/leadership'
  },
  {
    id: 4,
    image: "/images/HeroContent/Technology-Innovation.jpg",
    link:'/business'
  },
  {
    id: 5,
    image: "/images/carbon.jpg",
    link:'/sustainability/carbon-footprint'
  },
  {
    id: 6,
    image: "/images/Sustain.jpg",
    link:'/sustainability/carbon-neutrality'
  }
];

export default function HeroSection() {
  const t = useTranslations('HeroSection');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesStaticData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlidesStaticData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlidesStaticData.length) % heroSlidesStaticData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const translatedSlides = t.raw('slides') as { title: string; subtitle: string; description: string; cta: string }[];

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroSlidesStaticData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={slide.image}
              alt={translatedSlides[index]?.title || 'Hero background image'}
              fill
              priority={index === 0}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {translatedSlides.map((slide, index) => {
              const staticData = heroSlidesStaticData[index];
              return (
                <div
                  key={staticData.id}
                  className={`transition-all duration-700 transform ${index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                    }`}
                  style={{
                    display: index === currentSlide ? 'block' : 'none'
                  }}
                >
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-lg mt-20 sm:text-xl font-montserrat font-medium text-[#c6a35d] tracking-wide uppercase">
                        {slide.subtitle}
                      </h2>
                      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bodoni font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg sm:text-xl text-gray-200 max-w-2xl font-montserrat leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Link href={staticData.link}>
                        <button className="cursor-pointer group inline-flex items-center px-8 py-4 bg-[#c6a35d] text-white font-montserrat font-semibold rounded-lg hover:bg-[#b8954f] transition-all duration-300 transform hover:scale-105">
                          {slide.cta}
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>
                      <Link href={'/about/our-story'}>
                        <button className="cursor-pointer group inline-flex items-center px-8 py-4 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                          {t('watchStoryButton')}
                          <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          <div className="flex space-x-3">
            {heroSlidesStaticData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-[#c6a35d] w-8'
                    : 'bg-white/50 hover:bg-white/75'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
            aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
          >
            <Play className={`h-4 w-4 text-white ${isPlaying ? 'opacity-50' : 'opacity-100'}`} />
          </button>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/75 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}