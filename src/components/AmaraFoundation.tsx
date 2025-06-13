/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';


const companies = [
  {
    name: 'Amaraa Agro Group Ltd.',
    description: "Sustainable agriculture and biodiversity innovation, cultivating the future of farming with eco-conscious practices and cutting-edge technology. Leading sustainable farming practices across 50,000+ acres with organic certification and smart irrigation systems.",
    image: '/images/chapter-agra.jpg',
  },
  {
    name: 'Amaraa Security Shield Ltd.',
    description: "Armed security and surveillance services, protecting what matters most with advanced technology and trained professionals. Comprehensive security solutions serving 500+ clients with 24/7 monitoring and rapid response capabilities.",
    image: '/images/chapter-security.jpg',
  },
  {
    name: 'Amaraa Auto Group Ltd.',
    description: "Auto import/export and electric vehicle design, driving the future of sustainable transportation solutions. Pioneering electric vehicle technology with partnerships across 15 countries and zero-emission fleet solutions.",
    image: '/images/chapter-autogroup.jpg',
  },
  {
    name: 'Amaraa IT Services Ltd.',
    description: "Software development and cybersecurity, connecting the world through innovative digital solutions and secure platforms. Delivering enterprise software solutions and cybersecurity services to Fortune 500 companies globally.",
    image: '/images/chapter-itservice.jpg',
  },
  {
    name: 'Amaraa Food & Beverages Ltd.',
    description: "Farm-to-table products with a focus on sustainability, bringing authentic flavors while preserving our planet. Organic food production with direct farmer partnerships and sustainable packaging across 25 product lines.",
    image: '/images/chapter-food.jpg',
  },
  {
    name: 'Amaraa Aviation Ltd.',
    description: "Full-service airline and eco-conscious aviation services, connecting destinations while caring for the environment. Operating 50+ aircraft with carbon-neutral flights and premium passenger services across 100+ destinations.",
    image: '/images/chapter-aviation.jpg',
  },
  {
    name: 'Amaraa Real Estate Ltd.',
    description: "Sustainable urban development and green building solutions, creating spaces that harmonize with nature. LEED-certified developments with smart city integration and affordable housing initiatives.",
    image: '/images/chapter-estate.jpg',
  },
  {
    name: 'Amaraa Energy Solutions Ltd.',
    description: "Renewable energy and clean power generation, illuminating the path to a sustainable future. Solar and wind energy projects generating 500MW+ clean power with battery storage solutions.",
    image: '/images/chapter-energy.jpg',
  },
  {
    name: 'Amaraa Healthcare Ltd.',
    description: "Comprehensive healthcare services and medical innovation, nurturing health and healing communities. Multi-specialty hospitals and telemedicine services reaching rural communities with advanced medical care.",
    image: '/images/chapter-health.jpg',
  },
  {
    name: 'Amaraa Education Foundation',
    description: "Educational excellence and skill development programs, empowering minds to shape tomorrow. Educational institutions serving 10,000+ students with scholarship programs and vocational training.",
    image: '/images/chapter-education.jpg',
  },
  {
    name: 'Amaraa Logistics Ltd.',
    description: "Efficient supply chain and transportation solutions, moving goods and connecting markets seamlessly. End-to-end logistics with AI-powered route optimization and cold chain capabilities.",
    image: '/images/chapter-logistics.jpg',
  },
  {
    name: 'Amaraa Manufacturing Ltd.',
    description: "Advanced manufacturing and industrial solutions, crafting quality products with precision and care. Smart manufacturing facilities with Industry 4.0 integration and zero-waste production processes.",
    image: '/images/chapter-manufacturing.jpg',
  },
  {
    name: 'Amaraa Engineering Services Ltd.',
    description: "Expert engineering consultancy and project management, building the infrastructure of tomorrow. Engineering excellence in infrastructure projects with BIM technology and sustainable design practices.",
    image: '/images/chapter-engineering.jpg',
  },
  {
    name: 'Amaraa Global Trading Ltd.',
    description: "International trade and export services, bridging markets and fostering global partnerships. Trade partnerships across 40+ countries with commodity trading and export financing solutions.",
    image: '/images/chapter-global.jpg',
  },
  {
    name: 'Amaraa Tech Innovations Ltd.',
    description: "Cutting-edge technology research and AI solutions, pioneering the next generation of innovation. AI and IoT solutions with 50+ patents and research partnerships with leading universities.",
    image: '/images/chapter-tech.jpg',
  },
  {
    name: 'Amaraa Financial Services Ltd.',
    description: "Comprehensive financial solutions and investment services, building wealth and securing futures. Investment banking and wealth management with $2B+ assets under management.",
    image: '/images/chapter-financial.jpg',
  },
  {
    name: 'Amaraa Hospitality Ltd.',
    description: "Luxury hospitality and tourism services, creating memorable experiences with exceptional service. Premium hotels and resorts with sustainable tourism practices and cultural preservation initiatives.",
    image: '/images/chapter-hospital.jpg',
  },
  {
    name: 'Amaraa Media & Communications Ltd.',
    description: "Digital media and communication solutions, amplifying stories and connecting communities. Digital marketing and content creation with 100M+ audience reach across multiple platforms.",
    image: '/images/chapter-media.jpg',
  },
  {
    name: 'Amaraa Sports & Recreation Ltd.',
    description: "Sports development and recreational facilities, promoting health, fitness, and competitive spirit. Sports academies and recreational facilities promoting youth development and professional athletics.",
    image: '/images/chapter-sports.jpg',
  },
  {
    name: 'Amaraa Environmental Solutions Ltd.',
    description: "Environmental conservation and waste management, protecting our planet for future generations. Waste-to-energy projects and environmental remediation with carbon offset programs.",
    image: '/images/chapter-environmental.jpg',
  },
  {
    name: 'Amaraa Consulting Ltd.',
    description: "Strategic business consulting and advisory services, guiding organizations toward sustainable success. Management consulting with expertise in digital transformation and sustainability strategies.",
    image: '/images/chapter-consulting.jpg',
  },
];

const LegacySection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const isScrollable = el.scrollWidth > el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 1);
      setCanScrollRight(isScrollable && el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
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


  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if(scrollContainerRef.current) scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if(scrollContainerRef.current) scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleArrowScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350 + 32;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white dark:bg-black text-gray-800 font-sans py-20">
      <style jsx>{`
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .font-serif { font-family: 'Georgia', 'Times New Roman', serif; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#c6a35d]  mb-4">
            Amaraa Foundation
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
      </div>

      <div className="relative mt-12">
        {canScrollLeft && (
            <button
            onClick={() => handleArrowScroll('left')}
            className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 p-2 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex overflow-x-auto gap-8 pb-8 cursor-grab scrollbar-hide scroll-smooth px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8"
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
                    <h3 className="text-2xl font-bodoni font-bold mb-2">{company.name}</h3>
                    <p className="text-[#f0efe2] dark:text-[#232323] font-montserrat text-base leading-relaxed mb-6 line-clamp-3">
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
        
        {canScrollRight && (
          <button
            onClick={() => handleArrowScroll('right')}
            className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 p-2  hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        )}
      </div>
    </section>
  );
};

export default LegacySection;