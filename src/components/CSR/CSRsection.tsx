'use client';
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/card/Card";
import {
  Heart,
  GraduationCap,
  Leaf,
  Users,
  ArrowRight,
  Target,
  Award,
  Handshake,
  BookOpen,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

function CSRSection() {
  const [activeTab, setActiveTab] = useState('impact');
  
  const initiatives = [
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Reducing our carbon footprint across all divisions by embracing clean energy, green building initiatives, and sustainable practices in agro and auto sectors.",
      stats: "Pioneering Green Innovation",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: GraduationCap,
      title: "Investing in Future Leaders",
      description: "Empowering the next generation through educational scholarships, vocational training centers, and our specialized Amaraa Flying School.",
      stats: "Nurturing Tomorrow's Talent",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Health and Well-being",
      description: "Improving healthcare access through our Amaraa Medevac air ambulance services, community health camps, and wellness programs.",
      stats: "Fostering Healthy Lives",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Uplifting communities with infrastructure projects, disaster relief, humanitarian aid, and fostering inclusive growth for shared success.",
      stats: "Global Community Support",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const impactMetrics = [
    { label: "Community Upliftment", value: "Holistic Support", icon: Users },
    { label: "Environmental Stewardship", value: "Sustainable Ops", icon: Leaf },
    { label: "Future Leaders Nurtured", value: "Education First", icon: GraduationCap },
    { label: "Global Partnerships", value: "Shared Success", icon: Handshake }
  ];

  const focusAreas = [
    {
      title: "Sustainable Operations",
      description: "Pioneering fuel-efficient aviation, renewable energy sources, and eco-friendly ground operations to lead the way in green business.",
      impact: "Leading in Green Technology",
      icon: Zap
    },
    {
      title: "Inclusive Growth",
      description: "Fostering a diverse and inclusive workplace where every voice is heard and every individual has the opportunity to succeed.",
      impact: "Championing Diversity",
      icon: Target
    },
    {
      title: "Education for Tomorrow",
      description: "Investing in future-ready skills through partnerships with schools, universities, and specialized training programs.",
      impact: "Empowering Next-Gen Leaders",
      icon: BookOpen
    }
  ];

  const flagshipPrograms = [
    {
      icon: GraduationCap,
      title: "Amaraa Flying School",
      description: "Training the next generation of aviators with world-class curriculum and technology.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Leaf,
      title: "Green Energy Initiative",
      description: "Developing and implementing solar, wind, and other renewable energy projects to power sustainable growth.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Heart,
      title: "Amaraa Medevac Services",
      description: "Providing critical air ambulance and medical evacuation services to ensure health and well-being.",
      color: "from-red-500 to-pink-600"
    }
  ];

  const achievements = [
    { title: "Commitment to UN Global Compact", year: "Ongoing" },
    { title: "Sustainable Aviation Leadership", year: "Industry Recognition" },
    { title: "Excellence in Community Healthcare", year: "2024" },
    { title: "Pioneer in Green Technology Adoption", year: "2023" }
  ];


  return (
    <div className="bg-white dark:bg-[#232323] font-montserrat">
      <section className="relative py-20 bg-gradient-to-br from-[#f0efe2] via-white to-[#f8f7f0] dark:from-[#232323] dark:via-[#2a2a2a] dark:to-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent dark:via-white/5 opacity-30"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#c6a35d]/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Handshake className="w-5 h-5 text-[#c6a35d] mr-3" />
              <span className="text-[#c6a35d] font-medium">Corporate Social Responsibility</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bodoni font-bold text-[#232323] dark:text-white mb-8 leading-tight">
              Building a <span className="text-[#c6a35d]">Better Tomorrow</span>
            </h1>

            <p className="text-xl text-[#232323]/80 dark:text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Our unwavering commitment to social responsibility drives transformative change across communities,
              environment, and society, creating sustainable impact for generations to come.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/10 hover:-translate-y-2">
                    <metric.icon className="w-8 h-8 text-[#c6a35d] mx-auto mb-4" />
                    <div className="text-3xl font-bodoni font-bold text-[#232323] dark:text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="text-[#232323]/70 dark:text-white/70 text-sm">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f0efe2] dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center mb-16">
            <div className="bg-white dark:bg-[#232323] rounded-2xl p-2 shadow-lg border border-gray-200/50 dark:border-white/10">
              {['impact', 'initiatives', 'achievements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-4 cursor-pointer rounded-xl font-semibold transition-colors duration-300 ${activeTab === tab
                      ? 'text-white' 
                      : 'text-[#232323] dark:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 bg-[#c6a35d] rounded-xl z-0"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {tab === 'impact' ? 'Impact' : tab === 'initiatives' ? 'Programs' : 'Achievements'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {activeTab === 'impact' && (
                <div className="space-y-16">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {initiatives.map((initiative, index) => (
                      
                      <Card key={index} className="group bg-white dark:bg-[#232323] border-gray-200/50 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                        <CardContent className="p-0">
                          <div className={`h-2 bg-gradient-to-r ${initiative.color}`}></div>
                          <div className="p-8">
                            <div className="flex items-start justify-between mb-6">
                              <div className={`p-4 rounded-2xl bg-gradient-to-r ${initiative.color} shadow-lg`}>
                                <initiative.icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-[#c6a35d]">{initiative.stats}</div>
                              </div>
                            </div>

                            <h3 className="text-2xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                              {initiative.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                              {initiative.description}
                            </p>

                            <button className="flex items-center text-[#c6a35d] font-semibold hover:text-[#232323] dark:hover:text-white group-hover:translate-x-2 transition-all duration-300">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-[#232323] dark:bg-[#1a1a1a] rounded-3xl p-12 border border-gray-200/20 dark:border-white/10">
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold font-bodoni text-white mb-4">
                        Strategic Focus Areas
                      </h2>
                      <p className="text-white/70 text-lg">Driving systemic change through targeted interventions</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                      {focusAreas.map((area, index) => (
                        
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/5 hover:-translate-y-2">
                          <area.icon className="w-12 h-12 text-[#c6a35d] mb-6" />
                          <h3 className="text-xl font-bodoni font-bold text-white mb-4">
                            {area.title}
                          </h3>
                          <p className="text-white/70 mb-6 leading-relaxed">
                            {area.description}
                          </p>
                          <div className="text-[#c6a35d] font-semibold">
                            {area.impact}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'initiatives' && (
                <div className="text-center">
                  <h2 className="text-4xl font-bodoni font-bold text-[#232323] dark:text-white mb-8">
                    Our Flagship Programs
                  </h2>

                  <div className="grid lg:grid-cols-3 gap-8 mt-12">
                    {flagshipPrograms.map((program, index) => (
                      
                      <div key={index} className="bg-white dark:bg-[#232323] rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-white/10 transition-transform duration-300 hover:-translate-y-2">
                        <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                          <program.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{program.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div>
                  <h2 className="text-4xl font-bodoni font-bold text-[#232323] dark:text-white text-center mb-12">
                    Recognition & Milestones
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                      
                      <div key={index} className="bg-white dark:bg-[#232323] rounded-2xl p-6 shadow-lg flex items-center border border-gray-200/50 dark:border-white/10 transition-transform duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-[#c6a35d] rounded-full flex items-center justify-center mr-6">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#232323] dark:text-white mb-2">{achievement.title}</h3>
                          <p className="text-[#c6a35d] font-semibold">{achievement.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#c6a35d] to-[#b8965a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bodoni font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Partner with us to create meaningful change and build a sustainable future for all
          </p>
          <Link href="/contact">
          <button className="bg-white cursor-pointer text-[#c6a35d] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center mx-auto hover:shadow-lg hover:scale-105">
            Get Involved
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CSRSection;