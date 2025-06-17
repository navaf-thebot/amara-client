'use client'
import TypewriterQuote from "@/shared/TypewriterQuote"
import { Heart, Lightbulb, Users, Compass, Star, Zap, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function ValuesCulturePage() {
  const [activeValue, setActiveValue] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct ourselves with unwavering honesty, transparency, and ethical behavior in all our interactions.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      accent: "text-red-600 dark:text-red-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and forward-thinking solutions to drive progress and create value for our stakeholders.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      accent: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collective intelligence to achieve extraordinary results.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      accent: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Compass,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, continuously improving and exceeding expectations.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      accent: "text-green-600 dark:text-green-400"
    },
    {
      icon: Star,
      title: "Respect",
      description: "We value diversity, treat everyone with dignity, and create an inclusive environment where all can thrive.",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      accent: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Zap,
      title: "Agility",
      description: "We adapt quickly to change, embrace new opportunities, and respond dynamically to market demands.",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      accent: "text-cyan-600 dark:text-cyan-400"
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [values.length])

  return (
    <div className="min-h-screen bg-[#f0efe2] dark:bg-[#232323] overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#c6a35d]/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-60 h-60 bg-[#c6a35d]/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 bg-[#c6a35d]/5 rounded-full blur-2xl animate-bounce"
          style={{ transform: `translate(-50%, -50%) translateY(${Math.sin(scrollY * 0.01) * 20}px)` }}
        ></div>
      </div>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#c6a35d]/30 via-transparent to-[#232323]/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>

        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-[#c6a35d]/20 rounded-full animate-pulse`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `translateY(${Math.sin((scrollY + i * 100) * 0.01) * 30}px)`
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bodoni font-bold text-[#c6a35d] mb-8 relative">
                <span>Values&Culture</span>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#c6a35d]/20 via-transparent to-[#c6a35d]/20 blur-xl -z-10 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl sm:text-2xl font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in">
              Our values are the compass that guides our journey, and our culture is the wind that propels us toward extraordinary achievements.
            </p>
            <div className="animate-bounce mt-12">
              <ChevronDown onClick={() => {
                const el = document.getElementById('genesis');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} className="w-8 cursor-pointer h-8 text-[#c6a35d] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section id="genesis" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bodoni font-bold text-[#232323] dark:text-[#f0efe2] mb-6 relative">
              Our Core Values
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#c6a35d] to-transparent animate-pulse"></div>
            </h2>
            <p className="text-xl font-montserrat text-[#232323]/70 dark:text-[#f0efe2]/70 max-w-3xl mx-auto">
              Six fundamental principles that define who we are and guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${activeValue === index ? 'scale-105 z-10' : ''
                  }`}
                onMouseEnter={() => setActiveValue(index)}
              >
                <div className={`${value.bgColor} backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-[#c6a35d]/20 h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:border-[#c6a35d]/50`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c6a35d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#c6a35d] rounded-full animate-ping"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mb-6  transition-all duration-500 shadow-lg`}>
                      <value.icon className="w-10 h-10 text-white animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bodoni font-bold text-[#232323] dark:text-[#f0efe2] mb-4 group-hover:text-[#c6a35d] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="font-montserrat text-[#232323]/70 dark:text-[#f0efe2]/70 leading-relaxed group-hover:text-[#232323] dark:group-hover:text-[#f0efe2] transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/50 dark:bg-[#232323]/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bodoni font-bold text-[#232323] dark:text-[#f0efe2] mb-6 relative">
                  Culture of
                  <span className="text-[#c6a35d] ml-2 inline-block animate-pulse">Curiosity</span>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#c6a35d] animate-pulse"></div>
                </h2>
                <p className="text-lg font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed">
                  At House of Amaraa, curiosity is the catalyst for innovation. We encourage our team members to
                  question the status quo, explore new possibilities, and challenge conventional thinking. This culture
                  of intellectual curiosity drives us to discover breakthrough solutions and stay ahead of industry
                  trends.
                </p>
                <div className="space-y-6">
                  {[
                    "Encouraging bold questions and creative thinking",
                    "Supporting experimental projects and pilot programs",
                    "Celebrating learning from both successes and failures",
                    "Fostering cross-functional collaboration and knowledge sharing",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-3 h-3 bg-[#c6a35d] rounded-full group-hover:scale-150 transition-transform duration-300 animate-pulse"></div>
                      <span className="font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80 group-hover:text-[#c6a35d] transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c6a35d]/20 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/images/value-curiosity.jpg"
                  alt="Culture of curiosity"
                  className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 w-full object-cover h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c6a35d]/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bodoni font-bold text-[#232323] dark:text-[#f0efe2] mb-6 relative">
                  Culture of
                  <span className="text-[#c6a35d] ml-2 inline-block animate-pulse">Empowerment</span>
                  <div className="absolute -bottom-2 right-0 w-16 h-1 bg-[#c6a35d] animate-pulse"></div>
                </h2>
                <p className="text-lg font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed">
                  We believe that empowered individuals create empowered organizations. Our culture emphasizes trust,
                  autonomy, and personal growth. We provide our team members with the tools, resources, and authority
                  they need to make meaningful contributions and drive positive change.
                </p>
                <div className="space-y-6">
                  {[
                    "Delegating meaningful responsibilities and decision-making authority",
                    "Providing comprehensive professional development opportunities",
                    "Recognizing and rewarding individual and team achievements",
                    "Creating pathways for career advancement and leadership roles",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-3 h-3 bg-[#c6a35d] rounded-full group-hover:scale-150 transition-transform duration-300 animate-pulse"></div>
                      <span className="font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80 group-hover:text-[#c6a35d] transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-l from-[#c6a35d]/20 to-transparent rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/images/value-emp.jpg"
                  alt="Culture of empowerment"
                  className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 w-full object-cover h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c6a35d]/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bodoni font-bold text-[#232323] dark:text-[#f0efe2] mb-6 relative">
                  Culture of
                  <span className="text-[#c6a35d] ml-2 inline-block animate-pulse">Learning</span>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#c6a35d] animate-pulse"></div>
                </h2>
                <p className="text-lg font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed">
                  Continuous learning is the foundation of our competitive advantage. We invest in our people&apos;s growth
                  through formal education, mentorship programs, and hands-on experiences. Our learning culture ensures
                  that we remain adaptable, innovative, and ready for future challenges.
                </p>
                <div className="space-y-6">
                  {[
                    "Offering comprehensive training and certification programs",
                    "Facilitating mentorship and coaching relationships",
                    "Supporting attendance at industry conferences and workshops",
                    "Creating internal knowledge-sharing platforms and forums",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-3 h-3 bg-[#c6a35d] rounded-full group-hover:scale-150 transition-transform duration-300 animate-pulse"></div>
                      <span className="font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80 group-hover:text-[#c6a35d] transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c6a35d]/20 to-transparent rounded-3xl transform rotate-2 group-hover:rotate-4 transition-transform duration-500"></div>
                <Image
                  width={1000}
                  height={1000}
                  src="/images/value-learning.jpg"
                  alt="Culture of learning"
                  className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 w-full object-cover h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#c6a35d]/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10">
          <TypewriterQuote
            quote="Culture is not just what we do—it's who we are. It's the invisible force that transforms individual talents into collective genius, turning ordinary moments into extraordinary achievements."
            cite="House of Amaraa Leadership Team"
          />
        </div>
      </section>
    </div>
  )
}