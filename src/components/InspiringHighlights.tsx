/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const highlightsData = [
  {
    title: 'Building Sustainable Communities: Our Real Estate Vision',
    description: "Amaraa Group's real estate ventures are creating green, inclusive, and future-ready spaces for modern living.",
    image: '/images/hglt-estate.jpg',
    url: '/highlights/real-estate',
  },
  {
    title: "Empowering the Nation: Amaraa's Contribution to Defense",
    description: "Delve into Amaraa Group's pivotal role in advancing India's defense capabilities and ensuring national security.",
    image: '/images/hglt-defense.jpg',
    url: '/highlights/defense',
  },
  {
    title: "Powering a Greener Future: Amaraa's Energy Initiatives",
    description: 'Explore how Amaraa Group is driving innovation in renewable energy, from solar farms to wind power projects.',
    image: '/images/hglt-energy.jpg',
    url: '/highlights/energy',
  },
  {
    title: 'Building Sustainable Communities: Our Real Estate Vision',
    description: "Amaraa Group's real estate ventures are creating green, inclusive, and future-ready spaces for modern living.",
    image: '/images/hglt-estate.jpg',
    url: '/highlights/real-estate',
  },
  {
    title: "Empowering the Nation: Amaraa's Contribution to Defense",
    description: "Delve into Amaraa Group's pivotal role in advancing India's defense capabilities and ensuring national security.",
    image: '/images/hglt-defense.jpg',
    url: '/highlights/defense',
  },
];

const InspiringHighlights = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // State and logic for arrow buttons
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkArrowVisibility = () => {
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
      // Card width (380px) + gap (32px from gap-8)
      const scrollAmount = 380 + 32;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Drag-to-scroll handlers (unchanged)
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
        <div className="text-left max-w-2xl mb-12">
          <h2 className="text-4xl font-bold font-bodoni text-gray-900 dark:text-gray-200 sm:text-5xl">
            Inspiring Highlights
          </h2>
          <p className="mt-4 text-lg font-montserrat leading-8 text-gray-600 dark:text-gray-200">
            Explore our press releases, industry insights, and media coverage, highlighting 
            our achievements, innovations, and contributions across sectors.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto gap-8 pb-4 cursor-grab active:cursor-grabbing select-none scrollbar-hide"
          >
            {highlightsData.map((item, index) => (
              <article key={index} className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[380px] min-w-[380px]">
                <div className="flex-shrink-0">
                  <img className="h-64 w-full object-cover" src={item.image} alt={item.title} draggable="false" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white dark:bg-black p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-bodoni text-gray-900 dark:text-gray-200 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base font-montserrat text-gray-600 dark:text-gray-300 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <a href={item.url} className="inline-flex items-center gap-2 text-sm font-semibold text-[#c6a35d] hover:text-[#b49556]" draggable="false">
                      READ NOW
                      <div className="w-6 h-6 rounded-full border-2 border-[#c6a35d] flex items-center justify-center transition-colors group-hover:bg-[#c6a35d]">
                        <ArrowRight className="w-4 h-4 text-[#c6a35d] transition-colors group-hover:text-white" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-[#c6a35d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </article>
            ))}
          </div>

          <button
            onClick={() => handleArrowScroll('left')}
            className={`absolute top-1/2 -translate-y-1/2 left-[-50px] w-14 h-14 rounded-full  text-[#c6a35d] shadow-lg hover:bg-[#c6a35d] hover:text-white transition-all duration-300 z-10 hidden lg:flex items-center justify-center
                        ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={() => handleArrowScroll('right')}
            className={`absolute top-1/2 -translate-y-1/2 right-[-50px] w-14 h-14 rounded-full text-[#c6a35d] shadow-lg hover:bg-[#c6a35d] hover:text-white transition-all duration-300 z-10 hidden lg:flex items-center justify-center
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

export default InspiringHighlights;