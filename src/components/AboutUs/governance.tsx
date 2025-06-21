'use client';
import React, { useState, useEffect } from 'react';
import { Shield, Eye, Scale, Leaf, ChevronRight, Users, FileText } from "lucide-react";
import { Link } from '@/i18n/navigation';
import TypewriterQuote from '@/shared/TypewriterQuote';
import Image from 'next/image';


export default function GovernancePage() {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const pillars = [
    { icon: Eye, title: "Transparency", description: "We believe in open communication, clear reporting, and honest disclosure of all material information to our stakeholders.", color: "from-blue-500 to-blue-600", stats: "100% Open Reporting" },
    { icon: Shield, title: "Accountability", description: "Every action we take is backed by responsibility, ensuring that we answer for our decisions and their consequences.", color: "from-green-500 to-green-600", stats: "Zero Tolerance Policy" },
    { icon: Scale, title: "Ethics", description: "Unwavering moral principles guide our conduct, ensuring fairness, honesty, and integrity in all our dealings.", color: "from-purple-500 to-purple-600", stats: "Ethical Leadership" },
    { icon: Leaf, title: "Sustainability", description: "We are committed to practices that ensure long-term value creation while protecting our planet for future generations.", color: "from-emerald-500 to-emerald-600", stats: "Future-Focused" }
  ];

  const governanceFramework = [
    {
      title: "Board Independence",
      description: "Our board comprises independent directors who bring diverse expertise and objective oversight.",
      icon: Users,
      targetId: "details-board"
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies ensure sustainable growth.",
      icon: Shield,
      targetId: "details-risk"
    },
    {
      title: "Stakeholder Engagement",
      description: "Regular communication ensures alignment and mutual value creation with all stakeholders.",
      icon: FileText,
      targetId: "details-stakeholder"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0efe2] dark:bg-[#232323] transition-colors duration-300">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#c6a35d]/20 via-transparent to-[#232323]/10 dark:from-[#c6a35d]/10 dark:to-[#232323]/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#c6a35d]/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#c6a35d]/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-[#c6a35d]/5 rounded-full animate-pulse delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bodoni font-bold text-[#c6a35d] mb-6">
              Corporate Governance
            </h1>
            <p className="text-xl sm:text-2xl font-montserrat text-[#232323]/80 dark:text-white/80 max-w-4xl mx-auto leading-relaxed">
              Excellence in governance is the foundation of trust, the cornerstone of integrity, and the pathway to
              sustainable success.
            </p>
            <div className="mt-12 animate-bounce">
              <ChevronRight onClick={() => {
                document.getElementById('section-pillars')?.scrollIntoView({ behavior: 'smooth' });
              }} className="w-6 h-6 cursor-pointer text-[#c6a35d] mx-auto rotate-90" />
            </div>
          </div>
        </div>
      </section>

      <section id="section-pillars" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['section-pillars'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-bodoni font-bold text-[#232323] dark:text-white mb-6">
              Our Governance Pillars
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className={`transition-all duration-700 delay-${index * 100} ${isVisible['section-pillars'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} onMouseEnter={() => setHoveredPillar(index)} onMouseLeave={() => setHoveredPillar(null)}>
                <div className={`bg-white dark:bg-black p-8 rounded-2xl shadow-lg border border-[#c6a35d]/20 h-full transition-all duration-300 cursor-pointer ${hoveredPillar === index ? 'shadow-2xl -translate-y-2 border-[#c6a35d]/40' : ''}`}>
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 ${hoveredPillar === index ? 'scale-110' : ''}`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                    {hoveredPillar === index && (<div className="absolute -inset-2 bg-gradient-to-br from-[#c6a35d]/20 to-transparent rounded-2xl animate-pulse"></div>)}
                  </div>
                  <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">{pillar.title}</h3>
                  <p className="font-montserrat text-[#232323]/70 dark:text-white/70 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="section-message" className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 ${isVisible['section-message'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block p-3 bg-[#c6a35d]/10 rounded-full mb-4"><FileText className="w-8 h-8 text-[#c6a35d]" /></div>
              <h2 className="text-3xl sm:text-4xl font-bodoni font-bold text-[#232323] dark:text-white mb-6">Message from the Board</h2>
            </div>
            <section className={`bg-gradient-to-br from-[#f0efe2] to-white dark:from-[#232323] dark:to-black rounded-3xl border-l-4 border-[#c6a35d] transition-all duration-1000 ${isVisible['section-message'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="w-full">
                <TypewriterQuote quote="Governance is not merely a compliance requirement—it is the very essence of our corporate identity. Our commitment to ethical leadership, transparent operations, and accountable decision-making ensures we not only meet but exceed stakeholder expectations." cite="Board of Directors" />
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="section-framework" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible['section-framework'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-3xl sm:text-4xl font-bodoni font-bold text-[#232323] dark:text-white mb-8">
                Our Governance Framework
              </h2>
              <div className="space-y-4">
                {governanceFramework.map((item) => (
                  <a
                    key={item.title}
                    href={`#${item.targetId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group block cursor-pointer"
                  >
                    <div className="flex items-center space-x-6 p-6 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-black hover:shadow-lg border border-transparent hover:border-[#c6a35d]/20">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#c6a35d] to-[#c6a35d]/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-2 group-hover:text-[#c6a35d] transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-montserrat text-sm text-[#232323]/70 dark:text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#c6a35d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible['section-framework'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative group flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c6a35d]/20 to-transparent rounded-3xl group-hover:from-[#c6a35d]/30 transition-all duration-500"></div>
                <Image src="/images/gover-img.jpg" alt="Corporate governance framework" quality={100} width={500} height={500} className="rounded-3xl object-contain shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-4 rounded-xl border border-[#c6a35d]/20"><div className="text-2xl font-bodoni font-bold text-[#c6a35d]">25+</div><div className="text-sm font-montserrat text-[#232323] dark:text-white">Years Excellence</div></div><div className="absolute bottom-6 left-6 bg-white/90 dark:bg-black/90 backdrop-blur-sm p-4 rounded-xl border border-[#c6a35d]/20"><div className="text-2xl font-bodoni font-bold text-[#c6a35d]">100%</div><div className="text-sm font-montserrat text-[#232323] dark:text-white">Compliance</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-details" className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div id="details-board" className="scroll-mt-24 text-center md:text-left">
            <h3 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-4">Board Independence</h3>
            <p className="font-montserrat text-lg text-[#232323]/80 dark:text-white/80 leading-loose">
              Our commitment to an independent board is paramount. It ensures that decisions are made with objectivity, free from conflicts of interest, and solely in the best interest of the company and its stakeholders. The board&apos;s diverse composition brings a wealth of experience from various industries, fostering robust debate and strategic foresight.
            </p>
          </div>

          <div id="details-risk" className="scroll-mt-24 text-center md:text-left">
            <h3 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-4">Risk Management</h3>
            <p className="font-montserrat text-lg text-[#232323]/80 dark:text-white/80 leading-loose">
              We employ a proactive and comprehensive risk management framework that identifies, assesses, and mitigates potential risks across all facets of our operations. This includes financial, operational, and reputational risks. Our dedicated risk committee regularly refines our strategies to adapt to the evolving global landscape, ensuring the company&apos;s long-term resilience and stability.
            </p>
          </div>

          <div id="details-stakeholder" className="scroll-mt-24 text-center md:text-left">
            <h3 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-4">Stakeholder Engagement</h3>
            <p className="font-montserrat text-lg text-[#232323]/80 dark:text-white/80 leading-loose">
              We believe that creating sustainable value requires a deep understanding of and alignment with the interests of all our stakeholders—including investors, employees, customers, and the communities we operate in. We maintain an open dialogue to build trust, foster collaboration, and ensure our strategic objectives create mutual value for everyone involved.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#c6a35d]/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bodoni font-bold text-[#232323] dark:text-white mb-6">
            Committed to Excellence
          </h2>
          <p className="text-lg font-montserrat text-[#232323]/70 dark:text-white/70 mb-8">
            Our governance practices continue to evolve, ensuring we remain at the forefront of corporate excellence.
          </p>
          <Link href="/investors/financial-information" className="inline-flex cursor-pointer items-center px-8 py-3 bg-[#c6a35d] hover:bg-[#c6a35d]/90 text-white font-montserrat font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View Annual Reports
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}