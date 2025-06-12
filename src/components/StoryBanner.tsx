import React from 'react';
import Image from 'next/image';

const StoryBannerSection = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#232323] dark:bg-[#f0efe2] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div>
              <h2 className="font-serif text-3xl font-bodoni md:text-4xl font-bold text-white dark:text-black mb-4">
                A Story Written in the Stars
              </h2>
              <p className="text-white/80 dark:text-black/80 leading-relaxed text-base md:text-lg">
                The heart of Amaraa Holding beats with the rhythm of ambition. We are not
                merely a company; we are a movement, an idea that has leapt from
                boardrooms into the real world. Every subsidiary, every innovation, is a new
                page in our ever-expanding epic. We don&apos;t follow the trends—we set them,
                driven by a vision that dares to reach higher, push further, and do better.
              </p>
              <button className="mt-8 px-8 py-3 border-2 border-white dark:border-black text-white dark:text-black font-semibold rounded-lg transition-colors duration-300 hover:bg-[#c6a35d] hover:text-[#0033a0]">
                KNOW MORE
              </button>
            </div>
          </div>

          <div className="relative bg-gradient-to-l from-[#bda57f] to-[#6d5f4c] min-h-[350px] lg:min-h-0">
            <Image
              src="/images/logo.png" // IMPORTANT: Use a PNG image with a transparent background for the best effect.
              alt="Two smiling professionals standing back to back"
              layout="fill"
              objectFit="contain"
              objectPosition="center bottom"
              className="grayscale" // Makes the image black and white
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBannerSection;