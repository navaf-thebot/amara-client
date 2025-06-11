"use client"

import { useEffect, useState } from "react"
import { Eye, Shield, Scale, Users, Lock, FileText, CheckCircle, AlertCircle } from "lucide-react"

function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["governance", "principles", "privacy", "rights", "security", "contact"]
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
    { id: "governance", title: "Corporate Governance", icon: Scale },
    { id: "principles", title: "Guiding Principles", icon: Eye },
    { id: "privacy", title: "Privacy Promise", icon: Shield },
    { id: "rights", title: "Your Rights", icon: Users },
    { id: "security", title: "Data Security", icon: Lock },
    { id: "contact", title: "Contact Information", icon: FileText },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hoa-gold/20 via-hoa-beige/30 to-white dark:from-hoa-gold/10 dark:via-hoa-charcoal/20 dark:to-hoa-charcoal"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Corporate Governance & Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our governance is the architecture of our legacy—ensuring integrity, transparency, and responsibility
              across every division while protecting your privacy and data.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white dark:bg-hoa-charcoal/80 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
                  Table of Contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                        activeSection === item.id
                          ? "bg-hoa-gold text-[#bc7a00] hover:bg-hoa-gold/80 hover:text-[#bc7a00]"
                          : "text-gray-600 dark:text-gray-300 hover:bg-hoa-gold/10 hover:text-hoa-gold"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium cursor-pointer">{item.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-16">
            <section id="governance" className="animate-fade-in-up">
              <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-serif font-bold text-hoa-gold mb-8 flex items-center">
                  <Scale className="w-8 h-8 mr-4" />
                  Corporate Governance
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    At Amaraa Holding, corporate governance forms the bedrock of our operations. We are committed to
                    maintaining the highest standards of corporate conduct, ensuring that our business practices align
                    with legal requirements and ethical standards.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    Our governance framework is designed to protect stakeholder interests, promote transparency, and
                    ensure accountability at every level of our organization. We believe that strong governance is
                    essential for sustainable business growth and long-term value creation.
                  </p>
                </div>
              </div>
            </section>

            <section id="principles" className="animate-fade-in-up">
              <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-serif font-bold text-hoa-gold mb-8 flex items-center">
                  <Eye className="w-8 h-8 mr-4" />
                  Our Guiding Principles
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: Eye,
                      title: "Transparency",
                      description: "Clear operations, open reporting, and honest communication with all stakeholders.",
                    },
                    {
                      icon: Shield,
                      title: "Accountability",
                      description: "Ethical leadership and taking responsibility for our actions and decisions.",
                    },
                    {
                      icon: Scale,
                      title: "Sustainability",
                      description: "Long-term thinking for a better planet and sustainable business practices.",
                    },
                    {
                      icon: Users,
                      title: "Diversity & Inclusion",
                      description: "Unique voices make us stronger and drive innovation across our organization.",
                    },
                  ].map((principle) => (
                    <div key={principle.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-hoa-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <principle.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="privacy" className="animate-fade-in-up">
              <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-serif font-bold text-hoa-gold mb-8 flex items-center">
                  <Shield className="w-8 h-8 mr-4" />
                  Privacy Promise
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: CheckCircle,
                      title: "Transparent Use",
                      description:
                        "We disclose all data usage practices and ensure you understand how your information is being used.",
                    },
                    {
                      icon: Users,
                      title: "Your Rights",
                      description:
                        "Full control to access, modify, or delete your data at any time through our secure portal.",
                    },
                    {
                      icon: Lock,
                      title: "Security First",
                      description:
                        "Data protected beyond compliance requirements with enterprise-grade security measures.",
                    },
                    {
                      icon: Shield,
                      title: "Privacy by Design",
                      description:
                        "Every initiative and system is built with privacy considerations from the ground up.",
                    },
                  ].map((promise) => (
                    <div
                      key={promise.title}
                      className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-hoa-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <promise.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-hoa-charcoal dark:text-white mb-2">
                          {promise.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{promise.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="rights" className="animate-fade-in-up">
              <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-serif font-bold text-hoa-gold mb-8 flex items-center">
                  <Users className="w-8 h-8 mr-4" />
                  Your Data Rights
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    We respect your privacy rights and provide you with comprehensive control over your personal data.
                    Under applicable privacy laws, you have the following rights:
                  </p>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-hoa-gold mt-1 flex-shrink-0" />
                      <span>
                        <strong>Right to Access:</strong> Request a copy of the personal data we hold about you
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-hoa-gold mt-1 flex-shrink-0" />
                      <span>
                        <strong>Right to Rectification:</strong> Correct any inaccurate or incomplete personal data
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-hoa-gold mt-1 flex-shrink-0" />
                      <span>
                        <strong>Right to Erasure:</strong> Request deletion of your personal data under certain
                        circumstances
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-hoa-gold mt-1 flex-shrink-0" />
                      <span>
                        <strong>Right to Portability:</strong> Receive your data in a structured, machine-readable
                        format
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-hoa-gold mt-1 flex-shrink-0" />
                      <span>
                        <strong>Right to Object:</strong> Object to processing of your personal data for certain
                        purposes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="security" className="animate-fade-in-up">
              <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-serif font-bold text-hoa-gold mb-8 flex items-center">
                  <Lock className="w-8 h-8 mr-4" />
                  Data Security Measures
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                      Technical Safeguards
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                        <span>End-to-end encryption for data transmission</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                        <span>Multi-factor authentication systems</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                        <span>Regular security audits and penetration testing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                        <span>Secure cloud infrastructure with backup systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                      Organizational Measures
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                        <span>Staff training on data protection protocols</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                        <span>Access controls and role-based permissions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                        <span>Incident response and breach notification procedures</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                        <span>Regular compliance monitoring and reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="animate-fade-in-up">
              <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-serif font-bold text-hoa-gold mb-8 flex items-center">
                  <FileText className="w-8 h-8 mr-4" />
                  Contact Our Privacy Team
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                      Data Protection Officer
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300">
                      <p className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-hoa-gold" />
                        <span>privacy@amaraaholding.com</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-hoa-gold" />
                        <span>Response time: Within 72 hours</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                      Legal Department
                    </h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300">
                      <p className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-hoa-gold" />
                        <span>legal@amaraaholding.com</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5 text-hoa-gold" />
                        <span>For legal inquiries and compliance matters</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-hoa-gold/10 to-hoa-beige/20 dark:from-hoa-gold/5 dark:to-hoa-charcoal/10 p-8 rounded-2xl border border-hoa-gold/20">
                <div className="text-center">
                  <h2 className="text-3xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
                    Our Commitment to You
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    We are committed to a governance system built not just for compliance—but for lasting impact. Our
                    privacy practices reflect our core values of transparency, integrity, and respect for individual
                    rights.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Thank you for trusting us to protect your story and be part of our journey toward a more sustainable
                    and prosperous future.
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