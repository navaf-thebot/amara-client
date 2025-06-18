'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation'; 
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const newsData = [
  {
    title: 'A Visionary Leap: Renewable Energy Breakthrough',
    description: "Amaraa Group's expansion into renewable energy is nothing short of transformative, setting new benchmarks for sustainability.",
    imageSrc: '/images/news-energy.jpg',
    articleUrl: '/news',
    videoUrl: 'https://www.youtube.com/watch?v=your-video-id', 
  },
  {
    title: 'Global Success: Expanding Horizons',
    description: 'Our entry into three new international markets is a testament to Amaraa Group’s relentless pursuit of global excellence.',
    imageSrc: '/images/news-global.jpg',
    articleUrl: '/news',
    videoUrl: '',
  },
  {
    title: 'Revolutionizing Real Estate for Tomorrow',
    description: 'Amaraa’s approach to real estate is redefining urban living. From sustainable architecture to smart homes, we build for the future.',
    imageSrc: '/images/news-estate.jpg',
    articleUrl: '/news',
    videoUrl: '',
  },
  {
    title: 'Tech Innovations in Urban Development',
    description: 'Our latest tech integrations are creating smarter, more efficient cities, proving our commitment to innovation.',
    imageSrc: '/images/news-tech.jpg',
    articleUrl: '/news',
    videoUrl: '',
  },
  {
    title: 'Community-First Initiatives Launched',
    description: 'We believe in giving back. Our new community-first programs aim to uplift and empower local neighborhoods.',
    imageSrc: '/images/news-community.jpg',
    articleUrl: '/news',
    videoUrl: '',
  },
];

const NewsAndMedia = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkArrowVisibility = () => {
      if (!container) return;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isScrollable = scrollWidth > clientWidth;

      setShowLeftArrow(isScrollable && scrollLeft > 1);
      setShowRightArrow(isScrollable && scrollLeft < scrollWidth - clientWidth - 1);
    };

    const resizeObserver = new ResizeObserver(checkArrowVisibility);
    resizeObserver.observe(container);
    
    checkArrowVisibility();
    
    container.addEventListener('scroll', checkArrowVisibility, { passive: true });

    return () => {
      resizeObserver.disconnect();
      if (container) {
        container.removeEventListener('scroll', checkArrowVisibility);
      }
    };
  }, []);

  const handleArrowScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360 + 32;
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-white dark:bg-black py-16 sm:py-24">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left w-full mb-12">
          <h2 className="text-4xl font-bold font-bodoni text-dark sm:text-5xl">
            News and Media
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 font-montserrat">
            Discover stories that showcase our leadership and commitment to shaping a better future.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto gap-8 pb-8 cursor-grab active:cursor-grabbing select-none scrollbar-hide"
          >
            {newsData.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="group relative dark:bg-[#242424] px-3 py-4 rounded-md flex flex-col min-w-[360px] w-[360px]"
              >
                 <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    draggable="false"
                  />
                  {item.videoUrl && (
                    <Link
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label={`Play video for ${item.title}`}
                      draggable="false"
                    >
                      <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-8 h-8 text-black fill-current ml-1" />
                      </div>
                    </Link>
                  )}
                </div>
                <div className="mt-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-bodoni text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="font-montserrat text-gray-600 dark:text-gray-300 line-clamp-3 flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={item.articleUrl}
                      className="inline-flex items-center gap-2 text-sm font-semibold font-montserrat text-[#c6a35d] hover:text-[#ae8a46]"
                      draggable="false"
                    >
                      READ NOW
                      <div className="w-6 h-6 rounded-full border-2 border-[#c6a35d] flex items-center justify-center transition-colors group-hover:bg-[#c6a35d]">
                        <ArrowRight className="w-4 h-4 text-[#c6a35d] transition-colors group-hover:text-white" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-0 h-1 w-full">
                  <div className="h-full w-full bg-[#c6a35d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => handleArrowScroll('left')}
            className={`absolute top-1/2 -translate-y-1/2 left-0 w-14 h-14 rounded-full   text-[#c6a35d] shadow-lg hover:bg-[#c6a35d] hover:text-white transition-all duration-300 z-10 hidden lg:flex items-center justify-center
                        ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={() => handleArrowScroll('right')}
            className={`absolute top-1/2 -translate-y-1/2 right-0 w-14 h-14 rounded-full  text-[#c6a35d] shadow-lg hover:bg-[#c6a35d] hover:text-white transition-all duration-300 z-10 hidden lg:flex items-center justify-center
                        ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsAndMedia;