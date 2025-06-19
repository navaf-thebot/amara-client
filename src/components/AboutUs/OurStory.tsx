/* eslint-disable @next/next/no-img-element */
'use client'
import CountUp from "@/shared/CountUp"
import { Clock, Target, Globe, Award, ChevronDown, Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"

export default function OurStoryPage() {
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const timelineData = [
    {
      year: "2010",
      title: "Foundation of Vision",
      description: "House of Amaraa was established with a revolutionary vision to redefine industry standards and create sustainable value for all stakeholders.",
      stats: "Founded with $1M capital",
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2015",
      title: "Strategic Expansion",
      description: "Expanded operations across multiple sectors, establishing ourselves as a diversified conglomerate with a focus on innovation and excellence.",
      stats: "Expanded to 5 countries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2018",
      title: "Global Recognition",
      description: "Received international acclaim for our sustainable business practices and commitment to corporate social responsibility.",
      stats: "Won 12 international awards",
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Led the industry in digital innovation, implementing cutting-edge technologies to enhance operational efficiency and customer experience.",
      stats: "100% digital integration",
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2024",
      title: "Legacy Continues",
      description: "Today, we stand as a testament to visionary leadership, continuing to shape the future while honoring our foundational principles.",
      stats: "Global leader in 3 sectors",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timelineData.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, timelineData.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const visionMissionData = [
    {
      icon: Target,
      title: "Vision",
      description: "To be the world's most respected conglomerate, setting new standards of excellence and creating lasting value for all stakeholders.",
      metric: "50+ Countries",
      progress: 85
    },
    {
      icon: Clock,
      title: "Mission",
      description: "To transform industries through innovative solutions, ethical practices, and unwavering commitment to sustainable growth.",
      metric: "15 Years Legacy",
      progress: 92
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "To create positive change that transcends borders, fostering prosperity and progress in every community we serve.",
      metric: "1M+ Lives Impacted",
      progress: 78
    },
    {
      icon: Award,
      title: "Excellence",
      description: "To maintain the highest standards of quality and integrity in everything we do, setting benchmarks for others to follow.",
      metric: "99% Client Satisfaction",
      progress: 96
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <section className="relative pt-24 pb-16 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c6a35d]/20 via-transparent to-black/10 dark:from-[#c6a35d]/10 dark:to-black/20"></div>
        <div className="absolute inset-0">
          {isClient && (
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#c6a35d]/30 rounded-full animate-pulse"
                  style={{
                    left: `${(i * 17) % 100}%`,
                    top: `${(i * 23) % 100}%`,
                    animationDelay: `${(i * 0.3) % 3}s`,
                    animationDuration: `${2 + (i % 3)}s`
                  }}
                />
              ))}
            </div>
          )}

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 transform ${visibleSections.has('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            data-animate
            id="hero"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-[#c6a35d] mb-6 bg-clip-text bg-gradient-to-r from-[#c6a35d] to-yellow-500">
              Our Story
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              A legacy born from vision, nurtured by wisdom, and destined for greatness. The House of Amaraa stands as a
              testament to the power of dreams transformed into reality.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c6a35d]"> <CountUp end={15} suffix="+" /></div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c6a35d]"> <CountUp end={6} suffix="+" /></div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c6a35d]"><CountUp end={1_000_000} format="short" suffix="+" /></div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lives Impacted</div>
              </div>
            </div>
          </div>

          <ChevronDown className="w-8 h-8 text-[#c6a35d] mx-auto animate-bounce cursor-pointer"
            onClick={() => {
              const el = document.getElementById('genesis');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </section>

      <section id="genesis" className="py-16 bg-white dark:bg-black" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 transform ${visibleSections.has('genesis') ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black dark:text-white mb-6">
                The Genesis of Excellence
              </h2>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-[#c6a35d] transition-colors duration-300">
                    In the heart of ambition and the soul of innovation, House of Amaraa was conceived not merely as a
                    business enterprise, but as a beacon of transformative leadership. Our founders envisioned a company
                    that would transcend traditional boundaries, creating value that extends far beyond financial metrics.
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-[#c6a35d] transition-colors duration-300">
                    From our humble beginnings, we understood that true success lies in the harmony between purpose and
                    profit, between individual achievement and collective prosperity. This philosophy became the
                    cornerstone upon which we built our empire of excellence.
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-[#c6a35d] transition-colors duration-300">
                    Today, as we stand at the pinnacle of our industry, we remain committed to the values that shaped our
                    journey: integrity, innovation, and an unwavering dedication to creating a legacy that will inspire
                    generations to come.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 transform ${visibleSections.has('genesis') ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
            >
              <div className="relative group">
                <img
                  src="/images/logo/white-logo.png"
                  alt="House of Amaraa founding story"
                  className="rounded-2xl w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-black dark:text-white mb-4 sm:mb-6">
              Milestones of Magnificence
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
              Each chapter of our story marks a significant leap forward in our quest for excellence
            </p>

            <div className="flex justify-center items-center flex-wrap gap-3 mb-8">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center space-x-2 px-4 py-2 bg-[#c6a35d] text-white rounded-full hover:bg-[#b8954f] transition-colors"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mb-12 space-x-2 sm:space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {timelineData.map((item, index) => (
              <button
                key={item.year}
                onClick={() => {
                  setActiveTimeline(index)
                  setIsAutoPlaying(false)
                }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap mb-2 sm:mb-0 ${activeTimeline === index
                    ? 'bg-[#c6a35d] text-white shadow-lg scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <div className={`w-full h-2 bg-gradient-to-r ${timelineData[activeTimeline].color} rounded-full mb-6`}></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${timelineData[activeTimeline].color} rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}
                    >
                      {timelineData[activeTimeline].year}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-black dark:text-white">
                        {timelineData[activeTimeline].title}
                      </h3>
                      <p className="text-sm text-[#c6a35d] font-semibold">
                        {timelineData[activeTimeline].stats}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                    {timelineData[activeTimeline].description}
                  </p>
                </div>

                <div className="relative">
                  <div
                    className={`w-full h-48 sm:h-64 bg-gradient-to-br ${timelineData[activeTimeline].color} rounded-xl flex items-center justify-center`}
                  >
                    <div className="text-white text-4xl sm:text-6xl font-bold opacity-20">
                      {timelineData[activeTimeline].year}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-1 sm:space-x-2">
            {timelineData.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${index === activeTimeline ? 'w-6 sm:w-8 bg-[#c6a35d]' : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-white dark:bg-black" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black dark:text-white mb-6">
              Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our guiding principles that illuminate the path to our extraordinary future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionMissionData.map((item, index) => (
              <div
                key={item.title}
                className={`text-center group cursor-pointer transition-all duration-500 transform hover:scale-105 ${visibleSections.has('vision') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                data-animate
                id="vision"
              >
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${hoveredCard === index
                    ? 'bg-gradient-to-r from-[#c6a35d] to-[#fdcc6a] shadow-2xl'
                    : 'bg-[#c6a35d] shadow-lg'
                    }`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="absolute -top-2 -right-2 w-6 h-6">
                    <svg className="w-6 h-6 transform -rotate-90" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={`${item.progress * 0.628} 62.8`}
                        className="text-[#c6a35d] transition-all duration-1000"
                        style={{
                          strokeDasharray: hoveredCard === index ? `${item.progress * 0.628} 62.8` : '0 62.8'
                        }}
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-black dark:text-white mb-4 group-hover:text-[#c6a35d] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>
                <div className="text-sm font-semibold text-[#c6a35d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#c6a35d] to-[#fdcc6a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            Ready to Be Part of Our Legacy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us as we continue to write the next chapter of excellence and innovation.
          </p>
          <button className="bg-white text-[#c6a35d] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Opportunities
          </button>
        </div>
      </section>
    </div>
  )
}