"use client"

import { useEffect, useState } from "react"
import { FileText, Shield, Users, AlertTriangle, Scale, Globe, Lock, Mail } from "lucide-react"
import {  Building2, Briefcase } from 'lucide-react';
import Image from "next/image";

const globalLocations = [
    { 
      country: "Luxembourg", 
      title: "Headquarters", 
      company: "Amaraa Global Corporation Ltd.", 
      address: "15 Rue Edward Steichen, L-2540 Luxembourg City, Grand Duchy of Luxembourg", 
      focus: "Global Holding HQ; Strategic Governance; Corporate Control", 
      icon: Building2,
      flagImage: '/images/flags/luxembourg.jpg'
    },
    { 
      country: "Switzerland", 
      title: "Swiss Operations", 
      company: "Amaraa Swiss Horology SA", 
      address: "Rue du Rhône 118, 1204 Geneva, Switzerland", 
      focus: "High Horology Brand; Swiss Precision Manufacturing", 
      icon: Globe,
      flagImage: '/images/flags/switzerland.jpg'
    },
    { 
      country: "Singapore", 
      title: "Asia Pacific Hub", 
      company: "Amaraa Ventures (APAC) Pte. Ltd.", 
      address: "80 Robinson Road, #10-01, Singapore 068898", 
      focus: "Venture Capital, Innovation, Logistics Intelligence", 
      icon: Briefcase,
      flagImage: '/images/flags/singapore.jpg'
    },
    { 
      country: "United Arab Emirates", 
      title: "Capital & MENA Region", 
      company: "Amaraa Capital (DIFC) Ltd.", 
      address: "Unit 502, Level 5, Index Tower, Dubai International Financial Centre, Dubai, UAE", 
      focus: "Capital Markets; M&A; Regional Investments", 
      icon: Building2,
      flagImage: '/images/flags/uae.png'
    },
    { 
      country: "United States", 
      title: "North American Investment Arm", 
      company: "Amaraa US Equity Partners LLC", 
      address: "745 Fifth Avenue, Suite 500, New York, NY 10151, USA", 
      focus: "US Strategic Equity, Partnerships, Deal Structuring", 
      icon: Briefcase,
      flagImage: '/images/flags/america.jpg'
    },
    { 
      country: "United Kingdom", 
      title: "Family Office & Capital Markets", 
      company: "Amaraa (UK) Family Office Ltd.", 
      address: "1 Mayfair Place, London W1J 8AJ, United Kingdom", 
      focus: "Family Office, Wealth Structuring, Asset Management", 
      icon: Globe,
      flagImage: '/images/flags/uk.jpg'
    },
    { 
      country: "India", 
      title: "Development & Strategic Talent", 
      company: "Amaraa Technologies (India) Pvt. Ltd.", 
      address: "10th floor Panchsil Business Park, Laxman Nagar, Baner, Pune 411045", 
      focus: "Technology, ESG, Research, Compliance Back Office", 
      icon: Building2,
      flagImage: '/images/flags/india.jpg'
    },
    { 
      country: "Ireland", 
      title: "IP & Patent Holding", 
      company: "Amaraa IP Holdings (Ireland) DAC", 
      address: "The Academy, 42 Pearse St, Dublin 2", 
      focus: "IP-Patent Holding; Aircraft Leasing", 
      icon: Briefcase,
      flagImage: '/images/flags/ireland.jpg'
    }
];

const ContactSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLocation = globalLocations[selectedIndex];
  const IconComponent = selectedLocation.icon;

  return (
    <section id="contact">
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bodoni font-bold text-center text-[#c6a35d] mb-8">
          Contact Information
        </h2>

        <div>
            <h3 className="text-xl font-bodoni font-bold text-center text-[#232323] dark:text-white mb-8">
                Our Global Offices
            </h3>
            <div className="flex justify-center items-center flex-wrap gap-4 mb-10 border-b border-gray-200 dark:border-gray-700 pb-8">
              {globalLocations.map((location, index) => (
                <button
                  key={location.country}
                  onClick={() => setSelectedIndex(index)}
                  className={`p-1 cursor-pointer rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black/80 focus:ring-[#c6a35d] ${
                    selectedIndex === index 
                      ? 'bg-[#c6a35d]/20 scale-110 shadow-lg' 
                      : 'bg-transparent'
                  }`}
                  aria-label={location.country}
                >
                  <Image 
                    src={location.flagImage} 
                    alt={`${location.country} flag`} 
                    width={40}
                    height={40} 
                    className="rounded-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div key={selectedLocation.country} className="grid md:grid-cols-3 gap-8 animate-fade-in">
              <div className="md:col-span-1 text-center md:text-left flex flex-col items-center md:items-start">
                <div className="w-16 h-16 mb-4 bg-[#c6a35d]/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-[#c6a35d]" />
                </div>
                <p className="text-sm font-montserrat text-gray-500 dark:text-gray-400">{selectedLocation.country}</p>
                <h3 className="text-2xl font-bodoni font-bold text-[#232323] dark:text-white mt-1">
                  {selectedLocation.title}
                </h3>
              </div>
              <div className="md:col-span-2 font-montserrat">
                <div className="mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Address</h4>
                  <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                    <span className="font-semibold">{selectedLocation.company}</span><br/>
                    {selectedLocation.address}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Strategic Focus</h4>
                  <p className="text-gray-600 dark:text-gray-300">{selectedLocation.focus}</p>
                </div>
              </div>
            </div>
        </div>
        
        <div className="my-12 border-t border-gray-200 dark:border-gray-700"></div>

        <div>
            <h3 className="text-xl font-bodoni font-bold text-center text-[#232323] dark:text-white mb-6">
                Legal Questions
            </h3>
            <div className="max-w-md mx-auto text-center space-y-3 font-montserrat text-gray-600 dark:text-gray-300">
              <p className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-[#c6a35d]" />
                <span className="cursor-pointer hover:text-[#c6a35d]">info@amaraaglobal.com</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-[#c6a35d]" />
                <span>For terms of service inquiries</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5 text-[#c6a35d]" />
                <span>Legal compliance matters</span>
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};



function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["acceptance", "services", "user-conduct", "intellectual-property", "disclaimers", "limitation", "termination", "governing-law", "contact"]
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tableOfContents = [
    { id: "acceptance", title: "Acceptance of Terms", icon: FileText },
    { id: "services", title: "Our Services", icon: Globe },
    { id: "user-conduct", title: "User Conduct", icon: Users },
    { id: "intellectual-property", title: "Intellectual Property", icon: Lock },
    { id: "disclaimers", title: "Disclaimers", icon: AlertTriangle },
    { id: "limitation", title: "Limitation of Liability", icon: Shield },
    { id: "termination", title: "Termination", icon: AlertTriangle },
    { id: "governing-law", title: "Governing Law", icon: Scale },
    { id: "contact", title: "Contact Information", icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#f0efe2] dark:bg-[#232323]">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#f0efe2] dark:bg-[#232323]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bodoni font-bold text-[#c6a35d] mb-6">
              Terms of Service
            </h1>
            <p className="text-lg font-montserrat text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              These Terms of Service govern your use of the Amaraa website and services. Please read them carefully before using our platform.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12 ">
          <div className="lg:col-span-1">
            <div className="sticky top-18">
              <div className="bg-white dark:bg-black/80 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-6">
                  Table of Contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full cursor-pointer text-left px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center space-x-3 font-montserrat ${
                        activeSection === item.id
                          ? "bg-[#c6a35d] text-white"
                          : "text-gray-600 dark:text-gray-300 hover:bg-[#c6a35d]/10 hover:text-[#c6a35d]"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-16">
            <section id="acceptance">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <FileText className="w-8 h-8 mr-4" />
                  Acceptance of Terms
                </h2>
                <div className="font-montserrat space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    By accessing and using the Amaraa website (the &quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                      Who Can Use Our Services
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                        <span>You must be at least 18 years old to use our services</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                        <span>You must provide accurate and complete information</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                        <span>You must comply with all applicable laws and regulations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="services">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Globe className="w-8 h-8 mr-4" />
                  Our Services
                </h2>
                <div className="font-montserrat space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Amaraa operates as a global conglomerate with diverse business interests across multiple industries. Our website provides information about our services and facilitates communication with potential clients, partners, and job applicants.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                      <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                        Corporate Services
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Business consulting and advisory services</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Investment and portfolio management</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Strategic partnerships and joint ventures</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                      <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                        Digital Platform
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Company information and news updates</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Career opportunities and recruitment</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Contact forms and communication tools</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="user-conduct">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Users className="w-8 h-8 mr-4" />
                  User Conduct
                </h2>
                <div className="font-montserrat space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    When using our services, you agree to conduct yourself in accordance with applicable laws and these terms. The following activities are strictly prohibited:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white">
                        Prohibited Activities
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Violating any applicable laws or regulations",
                          "Infringing on intellectual property rights",
                          "Transmitting malicious code or viruses",
                          "Attempting to gain unauthorized access",
                          "Harassing or threatening other users",
                          "Submitting false or misleading information"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white">
                        Expected Behavior
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Respect the privacy and rights of others",
                          "Provide accurate and truthful information",
                          "Use our services for legitimate purposes only",
                          "Report any security vulnerabilities",
                          "Maintain confidentiality of sensitive information",
                          "Comply with all posted guidelines and policies"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="intellectual-property">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Lock className="w-8 h-8 mr-4" />
                  Intellectual Property
                </h2>
                <div className="font-montserrat space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    All content, features, and functionality on this website are owned by Amaraa Global Corporation Ltd., its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  
                  <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                      Our Rights
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start space-x-3">
                        <Lock className="w-5 h-5 text-[#c6a35d] mt-1 flex-shrink-0" />
                        <span>Trademarks, logos, and brand names are our exclusive property</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Lock className="w-5 h-5 text-[#c6a35d] mt-1 flex-shrink-0" />
                        <span>Website content, design, and code are protected by copyright</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Lock className="w-5 h-5 text-[#c6a35d] mt-1 flex-shrink-0" />
                        <span>Proprietary business methods and processes are trade secrets</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                      Your License
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal or business purposes, subject to these terms. You may not:
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Reproduce, distribute, or create derivative works</li>
                      <li>• Reverse engineer or attempt to extract source code</li>
                      <li>• Remove or alter proprietary notices or labels</li>
                      <li>• Use our content for commercial purposes without permission</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="disclaimers">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-4" />
                  Disclaimers
                </h2>
                <div className="font-montserrat space-y-6">
                  <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <h3 className="text-xl font-bodoni font-bold text-red-800 dark:text-red-300 mb-4">
                      Important Notice
                    </h3>
                    <p className="text-red-700 dark:text-red-400 leading-relaxed">
                      The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions, and other terms which might otherwise be implied by statute, common law, or the law of equity.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white">
                        Service Availability
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                        <li>• Services may be temporarily unavailable due to maintenance</li>
                        <li>• We do not guarantee uninterrupted access to our website</li>
                        <li>• Third-party services may affect our platform performance</li>
                        <li>• We reserve the right to modify or discontinue services</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white">
                        Information Accuracy
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                        <li>• Information may become outdated or inaccurate</li>
                        <li>• We make no warranties about information completeness</li>
                        <li>• Users should verify information independently</li>
                        <li>• Historical data may not predict future results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="limitation">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Shield className="w-8 h-8 mr-4" />
                  Limitation of Liability
                </h2>
                <div className="font-montserrat space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    In no event shall Amaraa Global Corporation Ltd., its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                  
                  <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                      Liability Limitations Include
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Loss of business or revenue</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Data corruption or loss</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>System downtime or interruption</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Third-party service failures</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Security breaches or cyberattacks</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Force majeure events</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation may not apply to you. In such cases, our liability will be limited to the maximum extent permitted by applicable law.
                  </p>
                </div>
              </div>
            </section>

            <section id="termination">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-4" />
                  Termination
                </h2>
                <div className="font-montserrat space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                      <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                        Grounds for Termination
                      </h3>
                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <span>Violation of these terms of service</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <span>Fraudulent or illegal activities</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <span>Abuse of our systems or resources</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <span>Harassment of other users or staff</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                      <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                        Effect of Termination
                      </h3>
                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Immediate cessation of service access</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Potential data deletion or archival</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Survival of certain provisions</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                          <span>Right to pursue legal remedies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="governing-law">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Scale className="w-8 h-8 mr-4" />
                  Governing Law
                </h2>
                <div className="font-montserrat space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    These Terms shall be interpreted and governed by the laws of the Grand Duchy of Luxembourg, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                      <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                        Jurisdiction
                      </h3>
                      <div className="space-y-3 text-gray-600 dark:text-gray-300">
                        <p className="flex items-center space-x-2">
                          <Mail className="w-5 h-5 text-[#c6a35d]" />
                          <span>Good faith negotiation preferred</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <Mail className="w-5 h-5 text-[#c6a35d]" />
                          <span>Mediation before litigation</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <Mail className="w-5 h-5 text-[#c6a35d]" />
                          <span>Professional arbitration if required</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <h3 className="text-xl font-bodoni font-bold text-blue-800 dark:text-blue-300 mb-4">
                      Severability
                    </h3>
                    <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
                      If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact">
              <ContactSection/>
            </section>

            <section>
              <div className="bg-gradient-to-br from-[#c6a35d]/10 to-[#f0efe2]/20 dark:from-[#c6a35d]/5 dark:to-[#232323]/10 p-8 rounded-2xl border border-[#c6a35d]/20">
                <div className="text-center">
                  <h2 className="text-3xl font-bodoni font-bold text-[#232323] dark:text-white mb-6">
                    Questions About These Terms?
                  </h2>
                  <p className="text-lg font-montserrat text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    We&apos;re committed to transparency and clarity in our terms of service. If you have any questions or concerns about these terms, please don&apos;t hesitate to contact our legal team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-6 py-3 bg-[#c6a35d] text-white font-montserrat font-medium rounded-lg hover:bg-[#b8934d] transition-colors duration-200">
                      Contact Legal Team
                    </button>
                    <button className="px-6 py-3 border border-[#c6a35d] text-[#c6a35d] font-montserrat font-medium rounded-lg hover:bg-[#c6a35d]/10 transition-colors duration-200">
                      View Privacy Policy
                    </button>
                  </div>
                  <p className="text-sm font-montserrat text-gray-500 dark:text-gray-400 mt-6">
                    These Terms of Service are effective as of January 2025 and may be updated periodically. Continued use of our services constitutes acceptance of any changes.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfServicePage