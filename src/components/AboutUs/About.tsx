'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, Users, Target, Award, Globe, Heart, Lightbulb, Shield, Eye, Scale, Leaf } from 'lucide-react'

const AboutUs = () => {
    const [activeSection, setActiveSection] = useState('story')
    const [isVisible, setIsVisible] = useState(false)
    const [client, setClient] = useState(false)
    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        setClient(true)
    }, [])
    const values = [
        {
            icon: <Award className="w-8 h-8" />,
            title: "Integrity",
            description: "Built on a foundation of trust and honesty, we hold ourselves to the highest standards of integrity in every interaction."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Innovation",
            description: "We constantly push the boundaries of possibility through cutting-edge technology and forward-thinking strategies."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Excellence",
            description: "We strive for excellence in all we do, ensuring we deliver nothing less than the best in every detail."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Collaboration",
            description: "We foster an environment where ideas flourish and every voice is valued in our journey of shared success."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Responsibility",
            description: "We make decisions that create positive, lasting impact for our employees, communities, and planet."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Diversity",
            description: "We celebrate the richness of diverse perspectives, fostering an inclusive environment where everyone thrives."
        }
    ]

    const cultureAspects = [
        {
            title: "Curiosity",
            description: "We are driven by curiosity, always asking questions and seeking new solutions for tomorrow's challenges."
        },
        {
            title: "Empowerment",
            description: "We trust our teams to take initiative, make decisions, and take ownership of their destiny."
        },
        {
            title: "Learning",
            description: "We are committed to lifelong learning, ensuring growth opportunities for personal and professional development."
        },
        {
            title: "Community",
            description: "We are more than a company—we are a family, united by belonging and mutual respect."
        },
        {
            title: "Purpose",
            description: "We value purpose over profit, people over numbers, and long-term impact over short-term gain."
        }
    ]

    const leaders = [
        {
            role: "Chairperson & Founder",
            title: "A Dreamer Who Dared",
            description: "The visionary who transformed a dream into a global reality, setting the foundation for Amaraa's empire."
        },
        {
            role: "CEO",
            title: "The Architect of Tomorrow",
            description: "The strategist behind our expansion, blending practical discipline with visionary passion."
        },
        {
            role: "COO",
            title: "The Innovator of Efficiency",
            description: "The engine behind operational prowess, turning boardroom dreams into ground reality."
        },
        {
            role: "CFO",
            title: "The Guardian of Growth",
            description: "The steadfast guardian of financial health, balancing ambition with prudent decision-making."
        },
        {
            role: "CTO",
            title: "The Pioneer of the Future",
            description: "The digital storyteller crafting innovations that define the next chapters of our journey."
        }
    ]

    return (
        <div className="min-h-screen bg-[#232323] text-[#f0efe2] overflow-hidden">
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232323] via-[#2a2a2a] to-[#1a1a1a]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c6a35d]/10 to-transparent"></div>

                {client &&
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-[#c6a35d]/30 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 3}s`
                                }}
                            ></div>
                        ))}
                    </div>
                }

                <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <h1 className="font-bodoni text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-[#c6a35d] to-[#f0efe2] bg-clip-text text-transparent">
                        Our Story
                    </h1>
                    <p className="font-montserrat text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto">
                        In the pages of every epic story, there is an undercurrent—an invisible force that drives the characters, shapes their choices, and defines their legacy. At Amaraa Holding, that force is our values and culture.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                        {['story', 'values', 'culture', 'governance', 'leadership'].map((section) => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`font-montserrat px-6 py-3 rounded-full border-2 transition-all duration-300 capitalize ${activeSection === section
                                    ? 'bg-[#c6a35d] border-[#c6a35d] text-[#232323]'
                                    : 'border-[#c6a35d] text-[#c6a35d] hover:bg-[#c6a35d]/10'
                                    }`}
                            >
                                {section === 'governance' ? 'Governance' : section}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronRight className="w-6 h-6 text-[#c6a35d] rotate-90" />
                </div>
            </section>

            {activeSection === 'story' && (
                <section className="py-20 px-6 bg-white dark:bg-black">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="font-bodoni text-5xl font-bold text-[#c6a35d] mb-8">
                                    The Heartbeat of Amaraa
                                </h2>
                                <div className="space-y-6 text-[#232323] dark:text-[#f0efe2] font-montserrat text-lg leading-relaxed">
                                    <p>
                                        These are not just words written on a page, but the heartbeat of everything we do, the lifeblood that runs through every division, every team, and every decision.
                                    </p>
                                    <p>
                                        As a storyteller who has crafted tales of ambition, adventure, and resilience, we know that every great story begins with a deep sense of purpose. For Amaraa Holding, that purpose is found in our unwavering commitment to integrity, innovation, and humanity.
                                    </p>
                                    <p>
                                        This is the core of who we are—the values that shape our actions and the culture that binds us together.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-full h-96 bg-gradient-to-br from-[#c6a35d]/70 to-[#f0efe2]/5 dark:from-[#c6a35d]/20 dark:to-[#f0efe2]/5 rounded-3xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-gradient-to-br from-[#c6a35d] dark:to-[#c6a35d]/70 rounded-full flex items-center justify-center mb-6 mx-auto">
                                            <Heart className="w-16 h-16 text-[#232323]" />
                                        </div>
                                        <h3 className="font-bodoni text-2xl font-bold text-[#c6a35d]">The Invisible Force</h3>
                                        <p className="font-montserrat text-sm mt-2 opacity-80 text-[#232323] dark:text-[#f0efe2]">Guiding every decision we make</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'values' && (
                <section className="py-20 px-6 text-[#232323] dark:text-[#f0efe2] bg-white dark:bg-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-bodoni text-5xl font-bold text-[#c6a35d] mb-6">
                                Our Values
                            </h2>
                            <p className="font-montserrat text-xl max-w-3xl mx-auto">
                                The compass that guides our path, reminding us of the kind of company we aspire to be
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={value.title}
                                    className="group bg-gradient-to-br from-[#f0efe2]/5 to-transparent border dark:border-[#c6a35d]/20 border-[#c6a35d]/80 hover:border-[#c6a35d] rounded-2xl p-8 dark:hover:border-[#c6a35d]/50 transition-all duration-300 hover:transform hover:scale-105"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="text-[#c6a35d] mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="font-bodoni text-2xl font-bold text-[#c6a35d] mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80  leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'culture' && (
                <section className="py-20 px-6 bg-white dark:bg-black">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-bodoni text-5xl font-bold text-[#c6a35d] mb-6">
                                Our Culture
                            </h2>
                            <p className="font-montserrat text-[#232323] dark:text-[#f0efe2]  text-xl max-w-3xl mx-auto">
                                The fabric of our story—not just what we do, but how we do it
                            </p>
                        </div>

                        <div className="space-y-12">
                            {cultureAspects.map((aspect, index) => (
                                <div
                                    key={aspect.title}
                                    className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className="flex-1">
                                        <h3 className="font-bodoni text-3xl font-bold text-[#c6a35d] mb-4">
                                            A Culture of {aspect.title}
                                        </h3>
                                        <p className="font-montserrat text-lg leading-relaxed text-[#232323]/90 dark:text-[#f0efe2]/90">
                                            {aspect.description}
                                        </p>
                                    </div>
                                    <div className="w-64 h-64 bg-gradient-to-br from-[#c6a35d]/100 to-[#f0efe2]/30 dark:from-[#c6a35d]/20 dark:to-[#f0efe2]/5 rounded-full flex items-center justify-center">
                                        <div className="w-32 h-32 bg-gradient-to-br from-[#c6a35d] to-[#c6a35d]/70 rounded-full flex items-center justify-center">
                                            <span className="font-bodoni text-4xl font-bold text-[#232323]">
                                                {aspect.title.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'governance' && (
                <section className="py-20 px-6 bg-white dark:bg-black">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-bodoni text-5xl font-bold text-[#c6a35d] mb-6">
                                Corporate Governance
                            </h2>
                            <p className="font-montserrat text-[#232323] dark:text-[#f0efe2] text-xl max-w-3xl mx-auto">
                                The pillars of integrity—the invisible framework that ensures our story unfolds with trust and accountability
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#f0efe2]/5 to-transparent border border-[#c6a35d]/20 rounded-3xl p-12 mb-16">
                            <div className="text-center mb-8">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#c6a35d] to-[#c6a35d]/70 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Shield className="w-12 h-12 text-[#232323]" />
                                </div>
                                <h3 className="font-bodoni text-3xl font-bold text-[#c6a35d] mb-4">
                                    The Foundation of Our Governance
                                </h3>
                            </div>
                            <p className="font-montserrat text-[#232323] dark:text-[#f0efe2] text-lg leading-relaxed text-center max-w-4xl mx-auto">
                                At the heart of our governance is a promise—a promise to our shareholders, employees, customers, and communities—that we will lead with transparency, act with responsibility, and remain true to our values. Our Board of Directors serves as the guardians of this promise, ensuring that as Amaraa grows, it does so with a conscience as strong as its ambition.
                            </p>
                        </div>

                        <div className="mb-16">
                            <h3 className="font-bodoni text-4xl font-bold text-[#c6a35d] text-center mb-12">
                                Our Governance Principles
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="group bg-gradient-to-br from-[#f0efe2]/5 to-transparent border border-[#c6a35d]/20 rounded-2xl p-8 hover:border-[#c6a35d]/50 transition-all duration-300">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#c6a35d] to-[#c6a35d]/70 rounded-full flex items-center justify-center mr-4">
                                            <Eye className="w-8 h-8 text-[#232323]" />
                                        </div>
                                        <h4 className="font-bodoni text-2xl font-bold text-[#c6a35d]">Transparency</h4>
                                    </div>
                                    <p className="font-montserrat  text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed">
                                        Nothing is hidden behind a veil of secrecy. Our governance ensures all stakeholders have clear insight into our decisions, operations, and performance. Transparency is the key to trust.
                                    </p>
                                </div>

                                <div className="group bg-gradient-to-br from-[#f0efe2]/5 to-transparent border border-[#c6a35d]/20 rounded-2xl p-8 hover:border-[#c6a35d]/50 transition-all duration-300">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#c6a35d] to-[#c6a35d]/70 rounded-full flex items-center justify-center mr-4">
                                            <Scale className="w-8 h-8 text-[#232323]" />
                                        </div>
                                        <h4 className="font-bodoni text-2xl font-bold text-[#c6a35d]">Accountability</h4>
                                    </div>
                                    <p className="font-montserrat  text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed">
                                        From boardroom to front lines, every member understands their role in upholding our values and meeting stakeholder expectations. We hold ourselves to the highest standards.
                                    </p>
                                </div>

                                <div className="group bg-gradient-to-br from-[#f0efe2]/5 to-transparent border border-[#c6a35d]/20 rounded-2xl p-8 hover:border-[#c6a35d]/50 transition-all duration-300">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#c6a35d] to-[#c6a35d]/70 rounded-full flex items-center justify-center mr-4">
                                            <Award className="w-8 h-8 text-[#232323]" />
                                        </div>
                                        <h4 className="font-bodoni text-2xl font-bold text-[#c6a35d]">Ethical Leadership</h4>
                                    </div>
                                    <p className="font-montserrat  text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed">
                                        True leadership is not about power; it&apos;s about doing what&apos;s right. Our framework is built around ethical decision-making in every market and interaction.
                                    </p>
                                </div>

                                <div className="group bg-gradient-to-br from-[#f0efe2]/5 to-transparent border border-[#c6a35d]/20 rounded-2xl p-8 hover:border-[#c6a35d]/50 transition-all duration-300">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#c6a35d] to-[#c6a35d]/70 rounded-full flex items-center justify-center mr-4">
                                            <Leaf className="w-8 h-8 text-[#232323]" />
                                        </div>
                                        <h4 className="font-bodoni text-2xl font-bold text-[#c6a35d]">Sustainability</h4>
                                    </div>
                                    <p className="font-montserrat  text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed">
                                        We create not just successful business, but a sustainable future. Operating with respect for environment, social responsibility, and community well-being.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            <div className="bg-gradient-to-br from-[#c6a35d]/10 to-transparent rounded-2xl p-8">
                                <h3 className="font-bodoni text-3xl font-bold text-[#c6a35d] mb-6">
                                    Board of Directors
                                </h3>
                                <p className="font-montserrat  text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed mb-4">
                                    Guardians of Our Vision
                                </p>
                                <p className="font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed">
                                    Comprised of seasoned leaders, industry experts, and innovators, our Board ensures our vision is carried out with diligence, foresight, and deep commitment to our core values. They are the protectors of our mission and champions of our long-term strategy.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#c6a35d]/10 to-transparent rounded-2xl p-8">
                                <h3 className="font-bodoni text-3xl font-bold text-[#c6a35d] mb-6">
                                    Risk Management
                                </h3>
                                <p className="font-montserrat  text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed mb-4">
                                    Navigating the Unknown
                                </p>
                                <p className="font-montserrat  text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed">
                                    Through careful planning, vigilant monitoring, and proactive measures, we ensure Amaraa remains resilient in the face of challenges while continuing to seize new opportunities for growth.
                                </p>
                            </div>
                        </div>

                        <div className="text-center bg-gradient-to-r dark:from-[#c6a35d]/10 from-[#c6a35d]/50 to-transparent rounded-2xl p-12">
                            <h3 className="font-bodoni text-3xl font-bold text-[#c6a35d] mb-6">
                                A Legacy of Trust
                            </h3>
                            <p className="font-montserrat text-lg text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed max-w-4xl mx-auto">
                                Our legacy will not only be defined by what we achieve, but by how we achieve it. Through these pillars of governance, we continue to write a story that our stakeholders can be proud of—one where success is measured not just in profits, but in trust, ethics, and long-lasting impact.
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'leadership' && (
                <section className="py-20 px-6 bg-white dark:bg-black">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-bodoni text-5xl font-bold text-[#c6a35d] mb-6">
                                Our Leadership
                            </h2>
                            <p className="font-montserrat text-xl text-[#232323] dark:text-[#f0efe2] max-w-3xl mx-auto">
                                Visionaries, dreamers, and architects of the future—the heroes of our story
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {leaders.map((leader) => (
                                <div
                                    key={leader.role}
                                    className="bg-gradient-to-br from-[#f0efe2]/60 dark:from-[#f0efe2]/5 to-transparent border border-[#c6a35d]/20 rounded-2xl p-8 hover:border-[#c6a35d]/50 transition-all duration-300 hover:transform hover:scale-105"
                                >
                                    <div className="text-center mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-[#c6a35d] to-[#c6a35d]/70 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users className="w-10 h-10 text-[#232323]" />
                                        </div>
                                        <h3 className="font-montserrat text-sm font-semibold text-[#c6a35d] uppercase tracking-wider mb-2">
                                            {leader.role}
                                        </h3>
                                        <h4 className="font-bodoni text-xl font-bold text-[#232323] dark:text-[#f0efe2] mb-4">
                                            {leader.title}
                                        </h4>
                                    </div>
                                    <p className="font-montserrat text-[#232323]/80 dark:text-[#f0efe2]/80 leading-relaxed text-center">
                                        {leader.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16">
                            <div className="bg-gradient-to-r from-[#c6a35d]/50 dark:from-[#c6a35d]/10 to-transparent rounded-2xl p-12">
                                <h3 className="font-bodoni text-3xl font-bold text-[#c6a35d] mb-6">
                                    A Legacy in the Making
                                </h3>
                                <p className="font-montserrat text-[#232323] dark:text-[#f0efe2] text-lg leading-relaxed max-w-4xl mx-auto">
                                    In the epic that is Amaraa Holding, the leadership team is writing the chapters of our legacy—one decision, one innovation, one breakthrough at a time. As we look to the future, they stand ready to continue the story, turning the pages of possibility into the reality of tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default AboutUs