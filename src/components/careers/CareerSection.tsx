"use client"

import { Link } from "@/i18n/navigation";
import JobApplicationModal from "@/modal/AuthModal";
import CountUp from "@/shared/CountUp";
import {
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
  Building2,
  Award,
  Target,
} from "lucide-react"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CareersPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const careerJourney = [
    {
      phase: "01",
      title: "Discover Your Path",
      description: "Explore diverse opportunities across our global portfolio that align with your passion and expertise.",
      icon: Target,
      color: "bg-gradient-to-br from-[#c6a35d] to-[#d4b366]",
    },
    {
      phase: "02",
      title: "Connect & Engage",
      description: "Join our community of innovators and learn about our culture, values, and growth opportunities.",
      icon: Users,
      color: "bg-gradient-to-br from-[#232323] to-[#3a3a3a]",
    },
    {
      phase: "03",
      title: "Grow & Develop",
      description: "Accelerate your skills through mentorship, training, and meaningful projects that create impact.",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-[#c6a35d] to-[#d4b366]",
    },
    {
      phase: "04",
      title: "Lead Innovation",
      description: "Shape the future by taking on leadership roles and driving breakthrough solutions worldwide.",
      icon: Award,
      color: "bg-gradient-to-br from-[#232323] to-[#3a3a3a]",
    },
  ]

  const lifeAtAmaraa = [
    {
      title: "Innovation Hubs",
      description: "State-of-the-art facilities fostering creativity and breakthrough thinking",
      image: "/images/career-innovation.jpg",
      stats: "50+ Active Projects",
      gradient: "from-[#c6a35d]/20 to-transparent"
    },
    {
      title: "Global Network",
      description: "Work across continents and experience diverse cultures in our international offices",
      image: "/images/career-global.jpg",
      stats: "25+ Countries",
      gradient: "from-[#232323]/20 to-transparent"
    },
    {
      title: "Learning Excellence",
      description: "Comprehensive development programs with world-class training and certifications",
      image: "/images/career-education.jpg",
      stats: "200+ Courses",
      gradient: "from-[#c6a35d]/20 to-transparent"
    },
    {
      title: "Wellness Focus",
      description: "Complete health and wellness support with 24/7 facilities and programs",
      image: "/images/career-wellness.jpg",
      stats: "360° Wellness",
      gradient: "from-[#232323]/20 to-transparent"
    },
  ]

  const benefits = [
    {
      category: "Financial Growth",
      icon: TrendingUp,
      color: "bg-[#c6a35d]",
      items: [
        "Competitive compensation with performance incentives",
        "Equity participation and profit sharing programs",
        "Comprehensive insurance and medical coverage",
        "Retirement planning and financial advisory services",
      ],
    },
    {
      category: "Work-Life Harmony",
      icon: Heart,
      color: "bg-[#232323]",
      items: [
        "Flexible hybrid working arrangements",
        "Unlimited PTO and sabbatical programs",
        "Remote work and digital nomad support",
        "Family care and parental leave benefits",
      ],
    },
    {
      category: "Professional Development",
      icon: Lightbulb,
      color: "bg-[#c6a35d]",
      items: [
        "Executive mentorship and coaching programs",
        "Leadership development and succession planning",
        "Conference attendance and education sponsorship",
        "Cross-functional and international assignments",
      ],
    },
    {
      category: "Global Impact",
      icon: Globe,
      color: "bg-[#232323]",
      items: [
        "International mobility and relocation support",
        "Community impact and volunteer programs",
        "Sustainability initiatives and green projects",
        "Cultural exchange and diversity programs",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Data Scientist",
      department: "Technology Division",
      quote: "At Amaraa, I'm not just analyzing data—I'm helping shape the future of sustainable agriculture. The impact we create here goes far beyond spreadsheets and transforms real lives.",
      image: "/images/career-sara.jpg",
      tenure: "3 years",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Manager",
      department: "Aviation Division",
      quote: "The diversity of challenges keeps me engaged every day. From optimizing flight routes to implementing eco-friendly practices, no two days are the same here.",
      image: "/images/career-rodg.jpg",
      tenure: "5 years",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Sustainability Lead",
      department: "Corporate Strategy",
      quote: "Working here means being part of something bigger. Every project contributes to our mission of creating a more sustainable and prosperous world for future generations.",
      image: "/images/career-priya.jpg",
      tenure: "2 years",
      rating: 5
    },
  ]

  const openRoles = [
    {
      title: "Senior Software Engineer",
      department: "IT Services",
      location: "Mumbai, India",
      type: "Full-time",
      level: "Senior",
      urgent: true,
      salary: "₹25-35L",
    },
    {
      title: "Sustainability Analyst",
      department: "Environmental Solutions",
      location: "Remote",
      type: "Full-time",
      level: "Mid-level",
      urgent: false,
      salary: "₹18-25L",
    },
    {
      title: "Aviation Safety Inspector",
      department: "Aviation",
      location: "Dubai, UAE",
      type: "Full-time",
      level: "Senior",
      urgent: true,
      salary: "AED 180-220K",
    },
    {
      title: "Agricultural Research Scientist",
      department: "Agro Group",
      location: "Bangalore, India",
      type: "Full-time",
      level: "Senior",
      urgent: false,
      salary: "₹22-28L",
    },
    {
      title: "Financial Analyst",
      department: "Financial Services",
      location: "London, UK",
      type: "Full-time",
      level: "Entry",
      urgent: false,
      salary: "£45-55K",
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security Shield",
      location: "Hyderabad, India",
      type: "Full-time",
      level: "Mid-level",
      urgent: true,
      salary: "₹20-28L",
    },
    {
      title: "Logistics Coordinator",
      department: "Logistics",
      location: "Singapore",
      type: "Full-time",
      level: "Mid-level",
      urgent: false,
      salary: "SGD 60-75K",
    },
    {
      title: "Real Estate Development Manager",
      department: "Real Estate",
      location: "New York, USA",
      type: "Full-time",
      level: "Senior",
      urgent: false,
      salary: "$120-150K",
    },
    {
      title: "Renewable Energy Engineer",
      department: "Energy Solutions",
      location: "Berlin, Germany",
      type: "Full-time",
      level: "Mid-level",
      urgent: true,
      salary: "€70-85K",
    },
    {
      title: "Brand Manager",
      department: "Media & Communications",
      location: "Mumbai, India",
      type: "Full-time",
      level: "Mid-level",
      urgent: false,
      salary: "₹15-22L",
    },
    {
      title: "Supply Chain Analyst",
      department: "Manufacturing",
      location: "Pune, India",
      type: "Full-time",
      level: "Entry",
      urgent: false,
      salary: "₹12-16L",
    },
    {
      title: "Hotel General Manager",
      department: "Hospitality",
      location: "Goa, India",
      type: "Full-time",
      level: "Senior",
      urgent: true,
      salary: "₹30-40L",
    },
    {
      title: "Management Consultant",
      department: "Consulting",
      location: "Remote",
      type: "Contract",
      level: "Senior",
      urgent: false,
      salary: "$100-150/hr",
    },
  ];
  const displayedRoles = showAllJobs ? openRoles : openRoles.slice(0, 5);

  const stats = [
    { number: "100K+", label: "Global Professionals", icon: Users },
    { number: "25+", label: "Countries", icon: Globe },
    { number: "21", label: "Business Units", icon: Building2 },
    { number: "95%", label: "Employee Satisfaction", icon: Heart },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0efe2] via-white to-[#c6a35d]/10 dark:from-[#232323] dark:via-[#1a1a1a] dark:to-[#c6a35d]/5"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-0.5 bg-[#c6a35d]"></div>
                  <span className="font-montserrat text-sm font-semibold text-[#c6a35d] uppercase tracking-wider">
                    Your Future Awaits
                  </span>
                </div>
                <h1 className="font-bodoni text-5xl sm:text-6xl lg:text-7xl font-bold text-[#232323] dark:text-white leading-tight">
                  Shape Tomorrow
                  <span className="block text-[#c6a35d]">With Purpose</span>
                </h1>
                <p className="font-montserrat text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Join a legacy where innovation meets impact. Where your ambitions align with purpose, and every career becomes part of our greater story of transformation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#section-jobs" className="group px-8 py-4 bg-[#c6a35d] hover:bg-[#b8954f] text-white font-montserrat font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#c6a35d]/25 flex items-center justify-center space-x-2">
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <Link href="/about/our-story" className="group cursor-pointer px-8 py-4 border-2 border-[#232323] dark:border-white text-[#232323] dark:text-white hover:bg-[#232323] hover:text-white dark:hover:bg-white dark:hover:text-[#232323] font-montserrat font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Our Story</span>
                </Link>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className={`bg-white dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 ${index % 2 === 1 ? 'mt-8' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <stat.icon className="w-8 h-8 text-[#c6a35d]" />
                      <div className="w-2 h-2 bg-[#c6a35d] rounded-full"></div>
                    </div>
                    <div className="font-bodoni text-3xl font-bold text-[#232323] dark:text-white mb-2">
                      <CountUp end={parseInt(stat.number.replace(/\D/g, ''))} suffix="+" />
                    </div>
                    <div className="font-montserrat text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-journey" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-[#0a0a0a] dark:to-[#141414]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-6 h-0.5 bg-[#c6a35d]"></div>
              <span className="font-montserrat text-sm font-semibold text-[#c6a35d] uppercase tracking-wide">
                Your Journey
              </span>
              <div className="w-6 h-0.5 bg-[#c6a35d]"></div>
            </div>
            <h2 className="font-bodoni text-4xl sm:text-5xl font-bold text-[#232323] dark:text-white mb-4">
              Your Growth Timeline
            </h2>
            <p className="font-montserrat text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A journey designed to unlock your full potential — step by step, moment by moment.
            </p>
          </div>

          <div className="relative border-l-4 border-[#c6a35d]/30 pl-6">
            {careerJourney.map((phase, index) => (
              <div key={phase.phase} className={`relative pb-12 group ${isVisible['section-journey'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700 delay-${index * 150}`}>
                <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-[#c6a35d] flex items-center justify-center text-xs font-bold text-white shadow-lg">
                  {phase.phase}
                </div>
                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl ${phase.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bodoni text-xl font-semibold text-[#232323] dark:text-white">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="font-montserrat text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="section-life" className="py-20 bg-[#f0efe2]/30 dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-0.5 bg-[#c6a35d]"></div>
              <span className="font-montserrat text-sm font-semibold text-[#c6a35d] uppercase tracking-wider">
                Life at Amaraa
              </span>
              <div className="w-8 h-0.5 bg-[#c6a35d]"></div>
            </div>
            <h2 className="font-bodoni text-4xl sm:text-5xl font-bold text-[#232323] dark:text-white mb-6">
              Where Innovation Lives
            </h2>
            <p className="font-montserrat text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience a workplace where cultures blend, innovation thrives, and every day brings new possibilities for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lifeAtAmaraa.map((item, index) => (
              <div key={item.title} className={`${isVisible['section-life'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-${index * 200} h-full`}>
                <div className="group bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      priority
                      fill
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} to-transparent`}></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                        {item.stats}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="font-bodoni text-2xl font-bold text-[#232323] dark:text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="section-testimonials" className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-0.5 bg-[#c6a35d]"></div>
              <span className="font-montserrat text-sm font-semibold text-[#c6a35d] uppercase tracking-wider">
                Employee Stories
              </span>
              <div className="w-8 h-0.5 bg-[#c6a35d]"></div>
            </div>
            <h2 className="font-bodoni text-4xl sm:text-5xl font-bold text-[#232323] dark:text-white mb-6">
              Voices from Our Family
            </h2>
            <p className="font-montserrat text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from the passionate professionals who call Amaraa home and drive our mission forward every day.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className={`${isVisible['section-testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-${index * 200}`}>
                <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 h-full hover:shadow-xl transition-all duration-300 hover:border-[#c6a35d]/50">
                  <div className="flex items-center mb-6">
                    <Image
                      priority
                      width={64}
                      height={64}
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#c6a35d]"
                    />
                    <div className="ml-4">
                      <h3 className="font-bodoni text-lg font-bold text-[#232323] dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="font-montserrat text-[#c6a35d] font-semibold text-sm">
                        {testimonial.role}
                      </p>
                      <p className="font-montserrat text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.department}
                      </p>
                    </div>
                  </div>

                  <blockquote className="font-montserrat text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex text-[#c6a35d]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-montserrat text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.tenure} at Amaraa
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="section-benefits" className="py-20 bg-[#f0efe2]/30 dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-0.5 bg-[#c6a35d]"></div>
              <span className="font-montserrat text-sm font-semibold text-[#c6a35d] uppercase tracking-wider">
                Total Rewards
              </span>
              <div className="w-8 h-0.5 bg-[#c6a35d]"></div>
            </div>
            <h2 className="font-bodoni text-4xl sm:text-5xl font-bold text-[#232323] dark:text-white mb-6">
              Beyond Compensation
            </h2>
            <p className="font-montserrat text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We invest in our people with comprehensive benefits that support your entire life journey and career aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.category} className={`${isVisible['section-benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-${index * 150}`}>
                <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 h-full hover:shadow-xl transition-all duration-300 hover:border-[#c6a35d]/50">
                  <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-bodoni text-xl font-bold text-[#232323] dark:text-white mb-6">
                    {benefit.category}
                  </h3>

                  <ul className="space-y-4">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#c6a35d] mt-0.5 flex-shrink-0" />
                        <span className="font-montserrat text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="section-jobs" className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-0.5 bg-[#c6a35d]"></div>
              <span className="font-montserrat text-sm font-semibold text-[#c6a35d] uppercase tracking-wider">
                Join Our Team
              </span>
              <div className="w-8 h-0.5 bg-[#c6a35d]"></div>
            </div>
            <h2 className="font-bodoni text-4xl sm:text-5xl font-bold text-[#232323] dark:text-white mb-6">
              Current Opportunities
            </h2>
            <p className="font-montserrat text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to make your mark? Explore our current openings and find the perfect role to start your journey with us.
            </p>
          </div>

          <div className="space-y-6">
=            {displayedRoles.map((role, index) => (
              <div key={`${role.title}-${index}`} className={`group bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:border-[#c6a35d]/50 ${isVisible['section-jobs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="font-bodoni text-xl sm:text-2xl font-bold text-[#232323] dark:text-white group-hover:text-[#c6a35d] transition-colors">
                          {role.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="font-montserrat text-lg font-semibold text-[#c6a35d]">
                            {role.salary}
                          </span>
                          {role.urgent && (
                            <span className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                              Urgent Hiring
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Building2 className="w-4 h-4" />
                        <span className="font-montserrat">{role.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="font-montserrat">{role.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="font-montserrat">{role.type}</span>
                      </div>
                      <div className="bg-[#c6a35d]/10 text-[#c6a35d] px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                        {role.level}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setIsAuthModalOpen(true)}
                      className="group w-full sm:w-auto px-8 py-4 bg-[#232323] dark:bg-white text-white dark:text-[#232323] hover:bg-[#c6a35d] dark:hover:bg-[#c6a35d] dark:hover:text-white font-montserrat font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

=          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllJobs(!showAllJobs)}
              className="px-10 cursor-pointer py-4 border-2 border-[#c6a35d] text-[#c6a35d] hover:bg-[#c6a35d] hover:text-white font-montserrat font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              {showAllJobs ? 'Show Less Positions' : 'View All Open Positions'}
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f0efe2] via-white to-[#c6a35d]/10 dark:from-[#232323] dark:via-[#1a1a1a] dark:to-[#c6a35d]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-0.5 bg-[#c6a35d]"></div>
                <span className="font-montserrat text-sm font-semibold text-[#c6a35d] uppercase tracking-wider">
                  Start Your Journey
                </span>
                <div className="w-12 h-0.5 bg-[#c6a35d]"></div>
              </div>
              <h2 className="font-bodoni text-4xl sm:text-5xl lg:text-6xl font-bold text-[#232323] dark:text-white leading-tight">
                Ready to Write Your
                <span className="block text-[#c6a35d]">Success Story?</span>
              </h2>
              <p className="font-montserrat text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Your story of impact, growth, and purpose begins with a single step. Join us in creating a legacy that transcends generations and transforms industries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => setIsAuthModalOpen(true)} className="group cursor-pointer px-12 py-5 bg-[#c6a35d] hover:bg-[#b8954f] text-white font-montserrat font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#c6a35d]/25 hover:scale-105">
                <span>Start Your Journey Today</span>
              </button>
              <Link href="/about/values-culture" className="group cursor-pointer px-12 py-5 border-2 border-[#232323] dark:border-white text-[#232323] dark:text-white hover:bg-[#232323] hover:text-white dark:hover:bg-white dark:hover:text-[#232323] font-montserrat font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-lg">
                <span>Learn About Our Culture</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {isAuthModalOpen && (
        <JobApplicationModal
          open={isAuthModalOpen}
          onOpenChange={setIsAuthModalOpen}
        />
      )}
    </div>
  )
}