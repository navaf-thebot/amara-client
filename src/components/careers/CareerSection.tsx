/* eslint-disable @next/next/no-img-element */
"use client"

import {
  ChevronRight,
  Users,
  Heart,
  MapPin,
  Clock,
  TrendingUp,
  Lightbulb,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react"

export default function CareersPage() {


  const careerJourney = [
    {
      phase: "Discover",
      title: "Find Your Calling",
      description: "Explore opportunities little that  that align with your passion and skills across our diverse portfolio.",
      icon: "🔍",
      color: "from-hoa-gold to-amber-500",
    },
    {
      phase: "Connect",
      title: "Join the Conversation",
      description: "Engage with our talent team and learn about our culture, values, and growth opportunities.",
      icon: "🤝",
      color: "from-hoa-gold/90 to-amber-600",
    },
    {
      phase: "Grow",
      title: "Evolve with Purpose",
      description: "Develop your skills, lead meaningful projects, and make a lasting impact on communities worldwide.",
      icon: "🚀",
      color: "from-hoa-charcoal to-gray-700",
    },
    {
      phase: "Lead",
      title: "Shape the Future",
      description: "Take on leadership roles and drive innovation that creates positive change across industries.",
      icon: "👑",
      color: "from-hoa-charcoal to-gray-700",
    },
  ]

  const lifeAtAmaraa = [
    {
      title: "Innovation Labs",
      description: "Dedicated spaces for creative thinking and breakthrough solutions",
      image: "/images/career-innovation.jpg",
      stats: "50+ Projects Annually",
    },
    {
      title: "Global Mobility",
      description: "Work across 25+ countries and experience diverse cultures",
      image: "/images/career-global.jpg",
      stats: "25+ Countries",
    },
    {
      title: "Learning Academy",
      description: "Continuous learning with world-class training programs",
      image: "/images/career-education.jpg",
      stats: "200+ Courses",
    },
    {
      title: "Wellness Centers",
      description: "Comprehensive health and wellness facilities at every location",
      image: "/images/career-wellness.jpg",
      stats: "24/7 Support",
    },
  ]

  const benefits = [
    {
      category: "Financial Wellness",
      icon: TrendingUp,
      items: [
        "Competitive salary with performance bonuses",
        "Stock options and profit sharing",
        "Comprehensive insurance coverage",
        "Retirement planning assistance",
      ],
    },
    {
      category: "Work-Life Balance",
      icon: Heart,
      items: [
        "Flexible working arrangements",
        "Unlimited PTO policy",
        "Remote work opportunities",
        "Family support programs",
      ],
    },
    {
      category: "Growth & Development",
      icon: Lightbulb,
      items: [
        "Mentorship programs",
        "Leadership development tracks",
        "Conference and education funding",
        "Cross-functional project opportunities",
      ],
    },
    {
      category: "Global Impact",
      icon: Globe,
      items: [
        "International assignment opportunities",
        "Community service time off",
        "Sustainability project participation",
        "Cultural exchange programs",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Data Scientist",
      department: "Technology Division",
      quote:
        "At Amaraa, I'm not just analyzing data—I'm helping shape the future of sustainable agriculture. The impact we create here goes far beyond spreadsheets.",
      image: "/images/career-sara.jpg",
      tenure: "3 years",
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Manager",
      department: "Aviation Division",
      quote:
        "The diversity of challenges keeps me engaged every day. From optimizing flight routes to implementing eco-friendly practices, no two days are the same.",
      image: "/images/career-rodg.jpg",
      tenure: "5 years",
    },
    {
      name: "Priya Patel",
      role: "Sustainability Lead",
      department: "Corporate Strategy",
      quote:
        "Working here means being part of something bigger. Every project contributes to our mission of creating a more sustainable and prosperous world.",
      image: "/images/career-priya.jpg",
      tenure: "2 years",
    },
  ]

  const openRoles = [
    {
      title: "Senior Software Engineer",
      department: "Technology",
      location: "Mumbai, India",
      type: "Full-time",
      level: "Senior",
      urgent: true,
    },
    {
      title: "Sustainability Analyst",
      department: "Environmental Solutions",
      location: "Remote",
      type: "Full-time",
      level: "Mid-level",
      urgent: false,
    },
    {
      title: "Aviation Safety Inspector",
      department: "Aviation",
      location: "Dubai, UAE",
      type: "Full-time",
      level: "Senior",
      urgent: true,
    },
    {
      title: "Agricultural Research Scientist",
      department: "Agriculture",
      location: "Bangalore, India",
      type: "Full-time",
      level: "Senior",
      urgent: false,
    },
    {
      title: "Financial Analyst",
      department: "Finance",
      location: "London, UK",
      type: "Full-time",
      level: "Entry",
      urgent: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hoa-charcoal/90 via-hoa-charcoal/70 to-hoa-gold/30 dark:from-hoa-charcoal/95 dark:via-hoa-charcoal/85 dark:to-hoa-gold/20"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-black dark:text-white mb-6">
                Your Story
                <br />
                <span className="text-hoa-gold">Starts Here</span>
              </h1>
              <p className="text-xl text-black/90 dark:text-white/90 mb-8 leading-relaxed">
                Join a legacy where your ambitions meet purpose, where innovation drives impact, and where every career
                becomes a chapter in our greater story of transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-hoa-gold hover:bg-hoa-gold/80 text-black dark:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border-2 cursor-pointer dark:border-white/30 border-black/30 text-black dark:text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Our Story</span>
                </button>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="text-3xl font-bold text-hoa-gold mb-2">100K+</div>
                    <div className="text-black/80 dark:text-white/80">Global Team Members</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="text-3xl font-bold text-hoa-gold mb-2">25+</div>
                    <div className="text-black/80 dark:text-white/80">Countries</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="text-3xl font-bold text-hoa-gold mb-2">21</div>
                    <div className="text-black/80 dark:text-white/80">Business Divisions</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="text-3xl font-bold text-hoa-gold mb-2">95%</div>
                    <div className="text-black/80 dark:text-white/80">Employee Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Your Career Journey
            </h2>
            <p className="text-xl text-gray-600  dark:text-gray-300 max-w-3xl mx-auto">
              Every great career is a journey of discovery, growth, and impact. Here&apos;s how your story unfolds with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerJourney.map((phase, index) => (
              <div key={phase.phase} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="relative">
                  <div
                    className={`bg-gradient-to-br ${phase.color} p-8 rounded-2xl text-black dark:text-white mb-6 hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="text-4xl mb-4">{phase.icon}</div>
                    <div className="text-sm font-semibold opacity-80 mb-2">{phase.phase}</div>
                    <h3 className="text-xl font-serif font-bold mb-3">{phase.title}</h3>
                    <p className="text-black dark:text-white text-sm leading-relaxed">{phase.description}</p>
                  </div>
                  {index < careerJourney.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="w-8 h-8 text-hoa-gold" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Life at Amaraa
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience a workplace where innovation thrives, cultures blend, and every day brings new possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lifeAtAmaraa.map((item, index) => (
              <div key={item.title} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-semibold bg-hoa-gold px-3 py-1 rounded-full">{item.stats}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Voices from Our Family
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from the passionate professionals who make Amaraa their home and drive our mission forward.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-hoa-charcoal dark:text-white">{testimonial.name}</h3>
                      <p className="text-hoa-gold font-semibold">{testimonial.role}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.department}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex text-hoa-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{testimonial.tenure} at Amaraa</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Beyond the Paycheck
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe in investing in our people with comprehensive benefits that support your entire life journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.category} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                  <div
                    className={`w-12 h-12 ${
                      benefit.category === "Financial Wellness"
                        ? "bg-hoa-gold"
                        : benefit.category === "Work-Life Balance"
                          ? "bg-hoa-rose"
                          : benefit.category === "Growth & Development"
                            ? "bg-amber-600"
                            : "bg-hoa-charcoal"
                    } rounded-full flex items-center justify-center mb-6`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                    {benefit.category}
                  </h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-hoa-gold mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to make your mark? Explore our current openings and find the perfect role to start your journey.
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, index) => (
              <div key={role.title} className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-xl font-bold text-hoa-charcoal dark:text-white group-hover:text-hoa-gold transition-colors">
                          {role.title}
                        </h3>
                        {role.urgent && (
                          <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{role.department}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{role.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{role.type}</span>
                        </span>
                        <span className="px-2 py-1 bg-hoa-gold/10 text-hoa-gold text-xs font-semibold rounded">
                          {role.level}
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-hoa-gold hover:bg-hoa-gold/80 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-hoa-gold text-hoa-gold hover:bg-hoa-gold hover:text-[#c6a35d] cursor-pointer font-semibold rounded-lg transition-all duration-300">
              View All Positions
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-hoa-gold/10 to-hoa-beige/20 dark:from-hoa-gold/5 dark:to-hoa-charcoal/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Ready to Write Your Chapter?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Your story of impact, growth, and purpose begins with a single step. Join us in creating a legacy that
              transcends generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-4 bg-hoa-gold hover:bg-hoa-gold/80 text-black dark:text-white  hover:text-[#c6a35d] dark:hover:text-[#c6a35d] font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Journey
              </button>
              <button className="px-12 py-4 border-2 border-hoa-gold text-hoa-gold hover:bg-hoa-gold hover:text-[#c6a35d] font-semibold text-lg rounded-lg transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}