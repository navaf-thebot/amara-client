/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    title: "Pioneering Excellence",
    subtitle: "Transforming Industries Through Innovation",
    description: "Leading the future with cutting-edge solutions across real estate, manufacturing, and technology sectors.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cta: "Discover Our Vision"
  },
  {
    id: 2,
    title: "Sustainable Future",
    subtitle: "Building Tomorrow's World Today",
    description: "Committed to environmental responsibility and sustainable development practices across all our ventures.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cta: "Learn About CSR"
  },
  {
    id: 3,
    title: "Global Leadership",
    subtitle: "Excellence Across Continents",
    description: "A trusted partner for businesses worldwide, delivering exceptional value through strategic innovation.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cta: "Explore Our Reach"
  },
  {
    id: 4,
    title: "Technology Innovation",
    subtitle: "Shaping Digital Transformation",
    description: "Advancing technological frontiers to create smarter, more efficient solutions for modern challenges.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cta: "View Our Tech"
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
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
                    <h2 className="text-lg sm:text-xl font-montserrat font-medium text-[#c6a35d] tracking-wide uppercase">
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
                    <button className="group inline-flex items-center px-8 py-4 bg-[#c6a35d] text-white font-montserrat font-semibold rounded-lg hover:bg-[#b8954f] transition-all duration-300 transform hover:scale-105">
                      {slide.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-montserrat font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                      Watch Story
                      <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          <div className="flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-[#c6a35d] w-8'
                    : 'bg-white/50 hover:bg-white/75'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
          >
            <Play className={`h-4 w-4 text-white ${isPlaying ? 'opacity-50' : 'opacity-100'}`} />
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 group"
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
