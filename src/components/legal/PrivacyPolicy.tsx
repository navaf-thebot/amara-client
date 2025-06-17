"use client"

import { useEffect, useState } from "react"
import { Shield, Users, Lock, FileText, CheckCircle, AlertCircle, Eye, Database, Mail } from "lucide-react"

function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["information", "usage", "sharing", "rights", "security", "cookies", "contact"]
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
    { id: "information", title: "Information We Collect", icon: Database },
    { id: "usage", title: "How We Use Your Information", icon: Eye },
    { id: "sharing", title: "Information Sharing", icon: Users },
    { id: "rights", title: "Your Privacy Rights", icon: Shield },
    { id: "security", title: "Data Security", icon: Lock },
    { id: "cookies", title: "Cookies & Tracking", icon: FileText },
    { id: "contact", title: "Contact Us", icon: Mail },
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
              Privacy Policy
            </h1>
            <p className="text-lg font-montserrat text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your privacy is fundamental to our relationship. This policy explains how Amaraa collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-black/80 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-6">
                  Table of Contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full cursor-pointer text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 font-montserrat ${
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
            <section id="information">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Database className="w-8 h-8 mr-4" />
                  Information We Collect
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                      Personal Information
                    </h3>
                    <p className="font-montserrat text-gray-600 dark:text-gray-300 mb-4">
                      We collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="space-y-3 font-montserrat text-gray-600 dark:text-gray-300">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#c6a35d] mt-1 flex-shrink-0" />
                        <span><strong>Contact Forms:</strong> Name, email address, phone number, and message content</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#c6a35d] mt-1 flex-shrink-0" />
                        <span><strong>Career Applications:</strong> Name, email, phone number, CV, cover letter, and related documents</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#c6a35d] mt-1 flex-shrink-0" />
                        <span><strong>Newsletter Subscriptions:</strong> Email address and communication preferences</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                      Automatically Collected Information
                    </h3>
                    <ul className="space-y-3 font-montserrat text-gray-600 dark:text-gray-300">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                        <span>Device information (browser type, operating system)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                        <span>Usage data (pages visited, time spent, click patterns)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                        <span>IP address and approximate location</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full mt-2"></div>
                        <span>Cookies and similar tracking technologies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="usage">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Eye className="w-8 h-8 mr-4" />
                  How We Use Your Information
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: Mail,
                      title: "Communication",
                      description: "Respond to inquiries, provide customer support, and send important updates about our services.",
                    },
                    {
                      icon: Users,
                      title: "Recruitment",
                      description: "Process job applications, evaluate candidates, and facilitate the hiring process.",
                    },
                    {
                      icon: Eye,
                      title: "Service Improvement",
                      description: "Analyze website usage to improve user experience and optimize our digital services.",
                    },
                    {
                      icon: Shield,
                      title: "Legal Compliance",
                      description: "Meet regulatory requirements and protect against fraud, security threats, and legal issues.",
                    },
                  ].map((use) => (
                    <div key={use.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#c6a35d] rounded-full flex items-center justify-center flex-shrink-0">
                        <use.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-2">
                          {use.title}
                        </h3>
                        <p className="font-montserrat text-gray-600 dark:text-gray-300 leading-relaxed">{use.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="sharing">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Users className="w-8 h-8 mr-4" />
                  Information Sharing
                </h2>
                <div className="font-montserrat prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <div className="space-y-4">
                    {[
                      "Service providers who assist us in operating our website and conducting business",
                      "Professional advisors including lawyers, bankers, auditors, and insurers",
                      "Government authorities when required by law or to protect our legal rights",
                      "Business partners for joint ventures or corporate transactions (with your consent)",
                      "Emergency situations to protect the safety of our users or the public"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-[#c6a35d] mt-1 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="rights">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Shield className="w-8 h-8 mr-4" />
                  Your Privacy Rights
                </h2>
                <div className="font-montserrat">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Under applicable privacy laws, you have the following rights regarding your personal data:
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Right to Access", desc: "Request a copy of the personal data we hold about you" },
                      { title: "Right to Rectification", desc: "Correct any inaccurate or incomplete personal data" },
                      { title: "Right to Erasure", desc: "Request deletion of your personal data under certain circumstances" },
                      { title: "Right to Portability", desc: "Receive your data in a structured, machine-readable format" },
                      { title: "Right to Object", desc: "Object to processing of your personal data for certain purposes" },
                      { title: "Right to Restrict Processing", desc: "Limit how we use your personal data in specific situations" }
                    ].map((right, index) => (
                      <div key={index} className="p-4 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-lg">
                        <h4 className="font-bodoni font-bold text-[#232323] dark:text-white mb-2">{right.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="security">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Lock className="w-8 h-8 mr-4" />
                  Data Security
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                      Technical Safeguards
                    </h3>
                    <ul className="space-y-3 font-montserrat text-gray-600 dark:text-gray-300">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full"></div>
                        <span>SSL/TLS encryption for data transmission</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full"></div>
                        <span>Secure server infrastructure and firewalls</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full"></div>
                        <span>Regular security audits and vulnerability testing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full"></div>
                        <span>Data backup and disaster recovery systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                      Organizational Measures
                    </h3>
                    <ul className="space-y-3 font-montserrat text-gray-600 dark:text-gray-300">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full"></div>
                        <span>Staff training on data protection protocols</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full"></div>
                        <span>Access controls and role-based permissions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full"></div>
                        <span>Incident response and breach notification procedures</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#c6a35d] rounded-full"></div>
                        <span>Regular compliance monitoring and reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="cookies">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <FileText className="w-8 h-8 mr-4" />
                  Cookies & Tracking Technologies
                </h2>
                <div className="font-montserrat space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand user preferences.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Essential Cookies", desc: "Required for basic website functionality and security" },
                      { title: "Analytics Cookies", desc: "Help us understand how visitors interact with our website" },
                      { title: "Preference Cookies", desc: "Remember your settings and provide personalized features" }
                    ].map((cookie, index) => (
                      <div key={index} className="p-4 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-lg">
                        <h4 className="font-bodoni font-bold text-[#232323] dark:text-white mb-2">{cookie.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{cookie.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </div>
            </section>

            <section id="contact">
              <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                  <Mail className="w-8 h-8 mr-4" />
                  Contact Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                      Privacy Questions
                    </h3>
                    <div className="space-y-3 font-montserrat text-gray-600 dark:text-gray-300">
                      <p className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-[#c6a35d]" />
                        <span>info@amaraaglobal.com</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-[#c6a35d]" />
                        <span>Response time: Within 7 days</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="bg-gradient-to-br from-[#c6a35d]/10 to-[#f0efe2]/20 dark:from-[#c6a35d]/5 dark:to-[#232323]/10 p-8 rounded-2xl border border-[#c6a35d]/20">
                <div className="text-center">
                  <h2 className="text-3xl font-bodoni font-bold text-[#232323] dark:text-white mb-6">
                    Our Privacy Commitment
                  </h2>
                  <p className="text-lg font-montserrat text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    At Amaraa, we believe privacy is a fundamental right. We are committed to transparency in our data practices and will continue to enhance our privacy protections as technology and regulations evolve.
                  </p>
                  <p className="text-sm font-montserrat text-gray-500 dark:text-gray-400">
                    This Privacy Policy may be updated periodically. We will notify you of any material changes through our website or direct communication.
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

export default PrivacyPolicyPage