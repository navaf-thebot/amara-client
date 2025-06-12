/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';


const companies = [
  {
    name: 'Amaraa Airlines',
    description: "In the aviation world, Amaraa Airlines is more than a carrier—it's a sanctuary in the skies. Every journey, from the smoothest business class flight...",
    image: '/images/chapter-plane.jpg',
  },
  {
    name: 'Amaraa Automotive',
    description: 'On the ground, Amaraa Automotive moves beyond mere transportation. We design, manufacture, and export vehicles that are not just machines but extensions...',
    image: '/images/chapter-car.jpg',
  },
  {
    name: 'Amaraa Security Services',
    description: "Our guardians in a world that's growing ever more complex, safeguard the realms of both the digital and physical. Armed with cutting-edge technology...",
    image: '/images/chapter-door.jpg',
  },
  {
    name: 'Amaraa Technology',
    description: "Our vanguard in the world of tomorrow. With supercomputer networks and solutions that power the aviation industry and beyond, we are scripting the future...",
    image: '/images/chapter-chip.jpg',
  },
];

const LegacySection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-white dark:bg-black text-gray-800 font-sans py-20">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        .font-serif {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#c6a35d]  mb-4">
            Amaraa Holding
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Where Dreams Take Flight and Innovation Knows No Boundaries. A constellation of visionaries, dreamers, and doers, weaving together industries and creating the future.
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-[#f0efe2] mb-3">
            The Chapters of Our Legacy
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            A journey through our milestones, achievements, and the visionary spirit that defines Amaraa Group&apos;s enduring legacy.
          </p>
          <button className="px-6 py-3 border-2 border-[#c6a35d] text-[#c6a35d] font-semibold rounded-lg hover:bg-[#c6a35d] cursor-pointer hover:text-white transition-colors duration-300">
            EXPLORE MORE
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-8 mt-12 pb-8 cursor-grab active:cursor-grabbing scrollbar-hide"
        >
          {companies.map((company, index) => (
            <div key={index} className="group min-w-[350px] max-w-[350px] bg-[#c6a35d] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              </div>
              <div className="p-6 text-white dark:text-[#232323]">
                <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                <p className="text-[#f0efe2] dark:text-[#232323] text-base leading-relaxed mb-6 line-clamp-3">
                  {company.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-semibold text-sm text-[#f0efe2] dark:text-[#232323] group-hover:text-white transition-colors">
                  KNOW MORE
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;