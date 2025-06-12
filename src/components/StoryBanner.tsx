'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';


const StoryBannerSection = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  const logoSrc = resolvedTheme === 'dark'
    ? "/images/logo/white-logo.png"
    : "/images/logo/black-logo.png"


  if (!mounted)return 

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-l from-[#bda57f] to-[#6d5f4c] dark:to-[#dfd7b6] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div>
              <h2 className="font-serif text-3xl font-bodoni md:text-4xl font-bold text-white dark:text-black mb-4">
                A Story Written in the Stars
              </h2>
              <p className="text-white/80 dark:text-black/80 leading-relaxed text-base md:text-lg">
                The heart of Amaraa Holding beats with the rhythm of ambition. We are not
                merely a company; we are a movement, an idea that has leapt from
                boardrooms into the real world. Every subsidiary, every innovation, is a new
                page in our ever-expanding epic. We don&apos;t follow the trends we set them,
                driven by a vision that dares to reach higher, push further, and do better.
              </p>
              <button className="mt-8 px-8 py-3 border-2 border-white dark:border-black text-white dark:text-black font-semibold rounded-lg transition-colors duration-300 hover:bg-[#c6a35d] cursor-pointer">
                KNOW MORE
              </button>
            </div>
          </div>

          <div className="relative bg-[#f0efe2] dark:bg-[#232323] min-h-[750px] lg:min-h-0">
            <Image
              src={logoSrc}
              alt="Two smiling professionals standing back to back"
              layout="fill"
              objectFit="contain"
              objectPosition="center bottom"
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBannerSection;