'use client'

import CountUp from "@/shared/CountUp"
import { Clock, Target, Globe, Award, ChevronDown, Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Link } from "@/i18n/navigation"

const timelineData = [
  {
    year: "2010",
    title: "Foundation of Vision",
    description: "House of Amaraa was established with a revolutionary vision to redefine industry standards and create sustainable value for all stakeholders.",
    stats: "Founded with $1M capital",
    image: '/images/story/story-vision.jpg'
  },
  {
    year: "2015",
    title: "Strategic Expansion",
    description: "Expanded operations across multiple sectors, establishing ourselves as a diversified conglomerate with a focus on innovation and excellence.",
    stats: "Expanded to 5 countries",
    image: '/images/story/story-strategy.jpg'
  },
  {
    year: "2018",
    title: "Global Recognition",
    description: "Received international acclaim for our sustainable business practices and commitment to corporate social responsibility.",
    stats: "Won 12 international awards",
    image: '/images/story/story-global.jpg'
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Led the industry in digital innovation, implementing cutting-edge technologies to enhance operational efficiency and customer experience.",
    stats: "100% digital integration",
    image: '/images/story/story-digital.jpg'
  },
  {
    year: "2024",
    title: "Legacy Continues",
    description: "Today, we stand as a testament to visionary leadership, continuing to shape the future while honoring our foundational principles.",
    stats: "Global leader in 3 sectors",
    image: '/images/story/story-legacy.jpg'
  }
]

const visionMissionData = [
  { icon: Target, title: "Our Vision", description: "To be the world's most respected conglomerate, setting new standards of excellence and creating lasting value." },
  { icon: Clock, title: "Our Mission", description: "To transform industries through innovative solutions, ethical practices, and unwavering commitment to sustainable growth." },
  { icon: Globe, title: "Global Impact", description: "To create positive change that transcends borders, fostering prosperity and progress in every community we serve." },
  { icon: Award, title: "Core Excellence", description: "To maintain the highest standards of quality and integrity in everything we do, setting benchmarks for others to follow." }
]

export default function OurStoryPage() {
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>(
    timelineData.reduce((acc, _, index) => ({ ...acc, [index]: true }), {} as Record<number, boolean>)
  )
  const [, setImagesPreloaded] = useState(false)

  
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = timelineData.map((item, index) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image()
          img.onload = () => {
            setImageLoadingStates(prev => ({ ...prev, [index]: false }))
            resolve(img)
          }
          img.onerror = reject
          img.src = item.image
        })
      })

      try {
        await Promise.all(imagePromises)
        setImagesPreloaded(true)
      } catch (error) {
        console.error('Error preloading images:', error)
        setImagesPreloaded(true) 
      }
    }

    preloadImages()
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timelineData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.2 }
    )
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#f0efe2] dark:bg-[#232323] text-[#232323] dark:text-[#f0efe2] font-montserrat">
      <section
        id="hero"
        data-animate
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f0efe2]/50 to-[#f0efe2] dark:from-transparent dark:via-[#232323]/50 dark:to-[#232323]"></div>
        <div className="relative z-10 p-4 transition-[transform,opacity] duration-1000" style={{ opacity: visibleSections.has('hero') ? 1 : 0, transform: visibleSections.has('hero') ? 'translateY(0)' : 'translateY(20px)' }}>
          <h1 className="font-bodoni text-5xl sm:text-6xl lg:text-7xl font-bold text-[#c6a35d] mb-6">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-10">
            A legacy born from vision, nurtured by wisdom, and destined for greatness. The House of Amaraa stands as a testament to the power of dreams transformed into reality.
          </p>
          <div className="flex justify-center items-center gap-8 sm:gap-12 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c6a35d] font-bodoni">
                <CountUp end={15} suffix="+" />
              </div>
              <div className="text-sm uppercase tracking-wider">Years Legacy</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c6a35d] font-bodoni">
                <CountUp end={6} suffix="+" />
              </div>
              <div className="text-sm uppercase tracking-wider">Countries</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#c6a35d] font-bodoni">
                <CountUp end={1_000_000} format="short" suffix="+" />
              </div>
              <div className="text-sm uppercase tracking-wider">Lives Impacted</div>
            </div>
          </div>
          <ChevronDown
            className="w-8 h-8 text-[#c6a35d] mx-auto animate-bounce cursor-pointer"
            onClick={() => document.getElementById('genesis')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </section>

      <section id="genesis" className="py-16 bg-white dark:bg-black" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-[transform,opacity] duration-1000 ${visibleSections.has('genesis') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-3xl sm:text-4xl font-bodoni font-bold text-black dark:text-white mb-6">
                The Genesis of Excellence
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p className="group-hover:text-[#c6a35d] transition-colors duration-300">
                  In the heart of ambition and the soul of innovation, House of Amaraa was conceived not merely as a business enterprise, but as a beacon of transformative leadership. Our founders envisioned a company that would transcend traditional boundaries, creating value that extends far beyond financial metrics.
                </p>
                <p className="group-hover:text-[#c6a35d] transition-colors duration-300">
                  From our humble beginnings, we understood that true success lies in the harmony between purpose and profit, between individual achievement and collective prosperity. This philosophy became the cornerstone upon which we built our empire of excellence.
                </p>
              </div>
            </div>
            <div className={`relative transition-[transform,opacity] duration-1000 ${visibleSections.has('genesis') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative group aspect-video rounded-2xl overflow-hidden">
                <Image
                  priority
                  fill
                  src="/images/logo/white-logo.png"
                  alt="House of Amaraa founding story"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" data-animate className="py-20 sm:py-24 bg-[#f0efe2] dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(198,163,93,0.05),transparent_40%)] dark:bg-[radial-gradient(circle_at_50%_30%,rgba(198,163,93,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 transition-[transform,opacity] duration-1000" style={{ opacity: visibleSections.has('journey') ? 1 : 0, transform: visibleSections.has('journey') ? 'translateY(0)' : 'translateY(20px)' }}>
            <h2 className="font-bodoni text-4xl sm:text-5xl font-bold mb-4">
              Journey Through Time
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience our evolution through an immersive timeline of transformative moments.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-4">
                {timelineData.map((item, index) => (
                  <button
                    key={item.year}
                    onClick={() => {
                      setActiveTimeline(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`group w-full text-left p-4 rounded-xl transform transition-transform duration-300 hover:scale-105 ${activeTimeline === index
                      ? 'bg-[#c6a35d] text-white shadow-lg'
                      : 'bg-white/50 dark:bg-[#232323]/50 hover:bg-white dark:hover:bg-[#232323] transition-colors duration-300'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bodoni text-2xl font-bold">{item.year}</div>
                        <div className="text-sm opacity-70 group-hover:opacity-100">{item.title}</div>
                      </div>
                      <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeTimeline === index ? 'bg-white' : 'bg-[#c6a35d]'
                        }`}></div>
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="group w-full flex items-center justify-center gap-2 p-3 bg-white/50 dark:bg-[#232323]/50 rounded-xl hover:bg-white dark:hover:bg-[#232323] transition-colors duration-300 font-semibold text-[#c6a35d]"
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
                </button>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="relative bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-gray-300/50 dark:border-gray-700/50 p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 relative group">
                    <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-xl bg-gray-200 dark:bg-gray-800 relative">
                      {imageLoadingStates[activeTimeline] && (
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-pulse">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      )}
                      
                      <div className={`absolute inset-0 transition-opacity duration-500 ${imageLoadingStates[activeTimeline] ? 'opacity-0' : 'opacity-100'}`}>
                        <Image
                          fill
                          src={timelineData[activeTimeline].image}
                          alt={timelineData[activeTimeline].title}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={95}
                          priority={activeTimeline === 0} 
                          onLoad={() => {
                            setImageLoadingStates(prev => ({
                              ...prev,
                              [activeTimeline]: false
                            }))
                          }}
                          onError={() => {
                            setImageLoadingStates(prev => ({
                              ...prev,
                              [activeTimeline]: false
                            }))
                          }}
                          
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="absolute -inset-2 bg-[#c6a35d] rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                  </div>
                  
                  <div className="md:w-1/2 flex flex-col">
                    <div className="mb-auto">
                      <p className="font-semibold text-[#c6a35d] mb-2">{timelineData[activeTimeline].stats}</p>
                      <h3 className="font-bodoni text-3xl sm:text-4xl font-bold mb-4">
                        {timelineData[activeTimeline].title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {timelineData[activeTimeline].description}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-300/50 dark:border-gray-700/50">
                      <div className="font-bodoni text-6xl font-extrabold text-gray-800/20 dark:text-gray-200/10 select-none">
                        {timelineData[activeTimeline].year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" data-animate className="py-20 sm:py-24 bg-[#f0efe2] dark:bg-[#232323]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 transition-[transform,opacity] duration-1000" style={{ opacity: visibleSections.has('vision') ? 1 : 0, transform: visibleSections.has('vision') ? 'translateY(0)' : 'translateY(20px)' }}>
            <h2 className="font-bodoni text-4xl sm:text-5xl font-bold mb-4">Our Guiding Principles</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The foundational pillars that illuminate the path to our extraordinary future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionMissionData.map((item) => (
              <div
                key={item.title}
                className="group p-8 text-center bg-white/50 dark:bg-black/20 rounded-xl border border-gray-300/50 dark:border-gray-700/50 transition duration-300 hover:border-[#c6a35d] hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c6a35d] mb-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bodoni text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#c6a35d] to-[#b8964f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bodoni text-3xl sm:text-4xl font-bold text-white mb-4">
            Be Part of Our Legacy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us as we continue to write the next chapter of excellence and innovation.
          </p>
          <Link href="/careers">
          <button className="font-montserrat cursor-pointer bg-white text-[#232323] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-lg">
            Explore Opportunities
          </button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}