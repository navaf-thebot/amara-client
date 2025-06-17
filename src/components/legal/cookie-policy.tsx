"use client"

import { useEffect, useState } from "react"
import { Cookie, Settings, BarChart3, Shield, Eye, CheckCircle, AlertCircle } from "lucide-react"
import { Building2, Globe, Briefcase } from 'lucide-react';
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

const GlobalLocations = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedLocation = globalLocations[selectedIndex];
    const IconComponent = selectedLocation.icon;

    return (
        <section id="global-locations" className="mt-16">
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
                <div className="flex justify-center items-center flex-wrap gap-4 mb-10 border-b border-gray-200 dark:border-gray-700 pb-8">
                    {globalLocations.map((location, index) => (
                        <button
                            key={location.country}
                            onClick={() => setSelectedIndex(index)}
                            className={`p-1 cursor-pointer rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-black/80 focus:ring-[#c6a35d] ${selectedIndex === index
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
                                <span className="font-semibold">{selectedLocation.company}</span><br />
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
        </section>
    );
};

function CookiePolicyPage() {
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["what-are-cookies", "cookies-we-use", "third-party", "managing", "contact"]
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
        { id: "what-are-cookies", title: "What Are Cookies", icon: Cookie },
        { id: "cookies-we-use", title: "Cookies We Use", icon: Settings },
        { id: "third-party", title: "Third-Party Cookies", icon: BarChart3 },
        { id: "managing", title: "Managing Cookies", icon: Shield },
        { id: "contact", title: "Contact Us", icon: Eye },
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
                            Cookie Policy
                        </h1>
                        <p className="text-lg font-montserrat text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            This Cookie Policy explains how Amaraa uses cookies and similar technologies to enhance your browsing experience on our website.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <div className="sticky top-32">
                            <div className="bg-white dark:bg-black/80 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                                <h2 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-6">
                                    Table of Contents
                                </h2>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full cursor-pointer text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 font-montserrat ${activeSection === item.id
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
                        <section id="what-are-cookies">
                            <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                                    <Cookie className="w-8 h-8 mr-4" />
                                    What Are Cookies
                                </h2>
                                <div className="font-montserrat space-y-6">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                                            <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                                                Session Cookies
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Temporary cookies that are deleted when you close your browser. They help maintain your session as you navigate through our website.
                                            </p>
                                        </div>
                                        <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                                            <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                                                Persistent Cookies
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Remain on your device for a set period or until you delete them. They remember your preferences for future visits.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="cookies-we-use">
                            <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                                    <Settings className="w-8 h-8 mr-4" />
                                    Types of Cookies We Use
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: Shield,
                                            title: "Essential Cookies",
                                            description: "Required for basic website functionality, security, and navigation. These cannot be disabled.",
                                            examples: ["Session management", "Security features", "Load balancing", "Form submissions"],
                                            color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                                        },
                                        {
                                            icon: BarChart3,
                                            title: "Analytics Cookies",
                                            description: "Help us understand how visitors interact with our website to improve user experience.",
                                            examples: ["Page views and traffic", "User behavior patterns", "Popular content", "Site performance"],
                                            color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                                        },
                                        {
                                            icon: Settings,
                                            title: "Preference Cookies",
                                            description: "Remember your settings and preferences to provide a personalized experience.",
                                            examples: ["Language preferences", "Theme settings", "Display preferences", "Accessibility options"],
                                            color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
                                        }
                                    ].map((cookieType, index) => (
                                        <div key={index} className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-12 h-12 bg-[#c6a35d] rounded-full flex items-center justify-center flex-shrink-0">
                                                    <cookieType.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-3">
                                                        {cookieType.title}
                                                    </h3>
                                                    <p className="font-montserrat text-gray-600 dark:text-gray-300 mb-4">
                                                        {cookieType.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {cookieType.examples.map((example, idx) => (
                                                            <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${cookieType.color}`}>
                                                                {example}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="third-party">
                            <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                                    <BarChart3 className="w-8 h-8 mr-4" />
                                    Third-Party Cookies & Services
                                </h2>
                                <div className="font-montserrat space-y-6">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        We use selected third-party services that may place cookies on your device to help us analyze website usage and improve our services.
                                    </p>

                                    <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#c6a35d] rounded-full flex items-center justify-center flex-shrink-0">
                                                <BarChart3 className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-3">
                                                    Google Analytics
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                    We use Google Analytics to understand how visitors use our website. This helps us improve our content and user experience.
                                                </p>
                                                <div className="space-y-2">
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        <strong>Data Collected:</strong> Page views, session duration, bounce rate, device information, approximate location
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#c6a35d] hover:underline">Google Privacy Policy</a>
                                                    </p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        <strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#c6a35d] hover:underline">Google Analytics Opt-out</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded-r-lg">
                                        <div className="flex items-start space-x-2">
                                            <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                                            <div>
                                                <h4 className="font-bodoni font-bold text-yellow-800 dark:text-yellow-300 mb-1">Important Note</h4>
                                                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                                                    Third-party services have their own privacy policies and cookie practices. We recommend reviewing their policies to understand how they handle your data.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="managing">
                            <div className="bg-white dark:bg-black/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                                <h2 className="text-3xl font-bodoni font-bold text-[#c6a35d] mb-8 flex items-center">
                                    <Shield className="w-8 h-8 mr-4" />
                                    Managing Your Cookie Preferences
                                </h2>
                                <div className="font-montserrat space-y-6">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        You have full control over cookies and can manage them through your browser settings or our cookie preferences.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                                            <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                                                Browser Settings
                                            </h3>
                                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-[#c6a35d]" />
                                                    <span>Block all cookies</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-[#c6a35d]" />
                                                    <span>Delete existing cookies</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-[#c6a35d]" />
                                                    <span>Set cookie preferences</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-[#c6a35d]" />
                                                    <span>Receive notifications</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="p-6 bg-[#f0efe2]/50 dark:bg-gray-800/50 rounded-xl">
                                            <h3 className="text-xl font-bodoni font-bold text-[#232323] dark:text-white mb-4">
                                                Browser-Specific Instructions
                                            </h3>
                                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                                <p><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</p>
                                                <p><strong>Firefox:</strong> Options → Privacy & Security → Cookies</p>
                                                <p><strong>Safari:</strong> Preferences → Privacy → Cookies</p>
                                                <p><strong>Edge:</strong> Settings → Cookies and Site Permissions</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 rounded-r-lg">
                                        <div className="flex items-start space-x-2">
                                            <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                                            <div>
                                                <h4 className="font-bodoni font-bold text-blue-800 dark:text-blue-300 mb-1">Impact of Disabling Cookies</h4>
                                                <p className="text-blue-700 dark:text-blue-300 text-sm">
                                                    Disabling cookies may affect website functionality. Some features may not work properly, and you may need to re-enter information on each visit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="contact">
                            <GlobalLocations />
                        </section>

                        <section>
                            <div className="bg-gradient-to-br from-[#c6a35d]/10 to-[#f0efe2]/20 dark:from-[#c6a35d]/5 dark:to-[#232323]/10 p-8 rounded-2xl border border-[#c6a35d]/20">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bodoni font-bold text-[#232323] dark:text-white mb-6">
                                        Policy Updates
                                    </h2>
                                    <p className="text-lg font-montserrat text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                                    </p>
                                    <p className="text-sm font-montserrat text-gray-500 dark:text-gray-400">
                                        We will notify you of any material changes by posting the new Cookie Policy on this page with an updated &quot;Last updated&quot; date.
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

export default CookiePolicyPage