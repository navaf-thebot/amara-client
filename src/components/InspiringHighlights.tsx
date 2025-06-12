/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const highlightsData = [
  {
    title: 'Building Sustainable Communities: Our Real Estate Vision',
    description: "Amaraa Group's real estate ventures are creating green, inclusive, and future-ready spaces for modern living.",
    image: '/images/hglt-estate.jpg',
    color: 'bg-yellow-600', 
  },
  {
    title: "Empowering the Nation: Amaraa's Contribution to Defense",
    description: "Delve into Amaraa Group's pivotal role in advancing India's defense capabilities and ensuring national security.",
    image: '/images/hglt-defense.jpg',
    color: 'bg-yellow-600',
  },
  {
    title: "Powering a Greener Future: Amaraa's Energy Initiatives",
    description: 'Explore how Amaraa Group is driving innovation in renewable energy, from solar farms to wind power projects.',
    image: '/images/hglt-energy.jpg',
    color: 'bg-yellow-600',
  },
];

const InspiringHighlights = () => {
  return (
    <section className="bg-white dark:bg-black py-16 sm:py-24">
      <style jsx>{`
        .font-serif {
          font-family: 'Georgia', 'Times New Roman', serif;
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightsData.map((item, index) => (
            <article key={index} className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex-shrink-0">
                <img className="h-64 w-full object-cover" src={item.image} alt={item.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-black p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-bodoni text-gray-900 dark:text-gray-200 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base font-montserrat text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#c6a35d] hover:text-[#b49556]">
                    READ NOW
                    <div className="w-6 h-6 rounded-full border-2 border-[#c6a35d] flex items-center justify-center transition-colors group-hover:bg-[#c6a35d] group-hover:text-white">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </a>
                </div>
              </div>
              <div className={`h-1 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${item.color}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspiringHighlights;