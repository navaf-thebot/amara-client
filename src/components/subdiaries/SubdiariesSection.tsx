'use client';
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import type { User } from "@/lib/type";
import AuthModal from "../../modal/AuthModal";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
        }
      }),
    [springValue, suffix]
  );

  return <span ref={ref} />;
}

function SubsidiariesPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handlePartnerClick = () => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
    } else {
      console.log("User already logged in. Proceeding to partnership form...");
    }
  };

  const handleAuthSuccess = (user: User) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
  };

  const companyStaticData = [
    { image: '/images/chapter-agra.jpg' },
    { image: '/images/chapter-security.jpg' },
    { image: '/images/chapter-autogroup.jpg' },
    { image: '/images/chapter-itservice.jpg' },
    { image: '/images/chapter-food.jpg' },
    { image: '/images/chapter-marine.jpg' },
    { image: '/images/chapter-aviation.jpg' },
    { image: '/images/chapter-estate.jpg' },
    { image: '/images/chapter-energy.jpg' },
    { image: '/images/chapter-health.jpg' },
    { image: '/images/chapter-education.jpg' },
    { image: '/images/chapter-logistics.jpg' },
    { image: '/images/chapter-manufacturing.jpg' },
    { image: '/images/chapter-global.jpg' },
    { image: '/images/chapter-financial.jpg' },
    { image: '/images/chapter-hospital.jpg' },
    { image: '/images/chapter-media.jpg' },
    { image: '/images/chapter-sports.jpg' },
    { image: '/images/chapter-consulting.jpg' },
  ];

  const subsidiaries = [
    {
      name: "Amaraa Agro Group Ltd.",
      chapter: "Chapter of Growth",
      description: "Sustainable agriculture and biodiversity innovation, cultivating the future of farming with eco-conscious practices and cutting-edge technology.",
      details: "Leading sustainable farming practices across 50,000+ acres with organic certification and smart irrigation systems.",
    },
    {
      name: "Physical Security and PSO Ltd.",
      chapter: "Chapter of Safety",
      description: "Armed security and surveillance services, protecting what matters most with advanced technology and trained professionals.",
      details: "Comprehensive security solutions serving 500+ clients with 24/7 monitoring and rapid response capabilities.",
    },
    {
      name: "Amaraa Auto Group Ltd.",
      chapter: "Chapter of Innovation",
      description: "Auto import/export and electric vehicle design, driving the future of sustainable transportation solutions.",
      details: "Pioneering electric vehicle technology with partnerships across 15 countries and zero-emission fleet solutions.",
    },
    {
      name: "Amaraa IT Services Ltd.",
      chapter: "Chapter of Connectivity",
      description: "Software development and cybersecurity, connecting the world through innovative digital solutions and secure platforms.",
      details: "Delivering enterprise software solutions and cybersecurity services to Fortune 500 companies globally.",
    },
    {
      name: "Amaraa Food & Beverages Ltd.",
      chapter: "Chapter of Taste",
      description: "Farm-to-table products with a focus on sustainability, bringing authentic flavors while preserving our planet.",
      details: "Organic food production with direct farmer partnerships and sustainable packaging across 25 product lines.",
    },
    {
      name: "Amaraa Marine Ltd.",
      chapter: "Chapter of Prestige",
      description: "Luxury yacht manufacturing and marine services, delivering elegance and performance on the open seas.",
      details: "Custom-built yachts with advanced maritime engineering, offering private charters and high-end marine experiences worldwide.",
    },
    {
      name: "Amaraa Aviation Ltd.",
      chapter: "Chapter of Exploration",
      description: "Full-service airline and eco-conscious aviation services, connecting destinations while caring for the environment.",
      details: "Operating 50+ aircraft with carbon-neutral flights and premium passenger services across 100+ destinations.",
    },
    {
      name: "Amaraa Real Estate Ltd.",
      chapter: "Chapter of Foundation",
      description: "Sustainable urban development and green building solutions, creating spaces that harmonize with nature.",
      details: "LEED-certified developments with smart city integration and affordable housing initiatives.",
    },
    {
      name: "Amaraa Energy Solutions Ltd.",
      chapter: "Chapter of Power",
      description: "Renewable energy and clean power generation, illuminating the path to a sustainable future.",
      details: "Solar and wind energy projects generating 500MW+ clean power with battery storage solutions.",
    },
    {
      name: "Amaraa Healthcare Ltd.",
      chapter: "Chapter of Wellness",
      description: "Comprehensive healthcare services and medical innovation, nurturing health and healing communities.",
      details: "Multi-specialty hospitals and telemedicine services reaching rural communities with advanced medical care.",
    },
    {
      name: "Amaraa Education Foundation",
      chapter: "Chapter of Knowledge",
      description: "Educational excellence and skill development programs, empowering minds to shape tomorrow.",
      details: "Educational institutions serving 10,000+ students with scholarship programs and vocational training.",
    },
    {
      name: "Amaraa Logistics Ltd.",
      chapter: "Chapter of Movement",
      description: "Efficient supply chain and transportation solutions, moving goods and connecting markets seamlessly.",
      details: "End-to-end logistics with AI-powered route optimization and cold chain capabilities.",
    },
    {
      name: "Amaraa Manufacturing Ltd.",
      chapter: "Chapter of Creation",
      description: "Advanced manufacturing and industrial solutions, crafting quality products with precision and care.",
      details: "Smart manufacturing facilities with Industry 4.0 integration and zero-waste production processes.",
    },
    {
      name: "Amaraa Global Trading Ltd.",
      chapter: "Chapter of Commerce",
      description: "International trade and export services, bridging markets and fostering global partnerships.",
      details: "Trade partnerships across 40+ countries with commodity trading and export financing solutions.",
    },
    {
      name: "Amaraa Financial Services Ltd.",
      chapter: "Chapter of Prosperity",
      description: "Comprehensive financial solutions and investment services, building wealth and securing futures.",
      details: "Investment banking and wealth management with $2B+ assets under management.",
    },
    {
      name: "Amaraa Hospitality Ltd.",
      chapter: "Chapter of Welcome",
      description: "Luxury hospitality and tourism services, creating memorable experiences with exceptional service.",
      details: "Premium hotels and resorts with sustainable tourism practices and cultural preservation initiatives.",
    },
    {
      name: "Amaraa Media & Communications Ltd.",
      chapter: "Chapter of Voice",
      description: "Digital media and communication solutions, amplifying stories and connecting communities.",
      details: "Digital marketing and content creation with 100M+ audience reach across multiple platforms.",
    },
    {
      name: "Amaraa Sports & Recreation Ltd.",
      chapter: "Chapter of Excellence",
      description: "Sports development and recreational facilities, promoting health, fitness, and competitive spirit.",
      details: "Sports academies and recreational facilities promoting youth development and professional athletics.",
    },
    {
      name: "Amaraa Consulting Ltd.",
      chapter: "Chapter of Wisdom",
      description: "Strategic business consulting and advisory services, guiding organizations toward sustainable success.",
      details: "Management consulting with expertise in digital transformation and sustainability strategies.",
    },
  ];

  const generatePDF = () => {
    const pdfContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Amaraa Holdings - Company Brochure</title>
        <style>
          body { 
            font-family: 'Arial', sans-serif; 
            margin: 0; 
            padding: 20px; 
            color: #232323;
            line-height: 1.6;
          }
          .header { 
            text-align: center; 
            margin-bottom: 40px; 
            padding: 30px 0;
            background: linear-gradient(135deg, #c6a35d 0%, #b8964f 100%);
            color: white;
            border-radius: 10px;
          }
          .company-title { 
            font-size: 48px; 
            font-weight: bold; 
            margin-bottom: 10px;
          }
          .company-subtitle { 
            font-size: 20px; 
            font-style: italic;
            opacity: 0.9;
          }
          .stats-section {
            display: flex;
            justify-content: space-around;
            margin: 40px 0;
            padding: 30px;
            background: #f0efe2;
            border-radius: 10px;
          }
          .stat-item {
            text-align: center;
          }
          .stat-number {
            font-size: 36px;
            font-weight: bold;
            color: #c6a35d;
            display: block;
          }
          .stat-label {
            font-size: 16px;
            font-weight: bold;
            margin-top: 5px;
          }
          .stat-desc {
            font-size: 12px;
            color: #666;
          }
          .subsidiary {
            margin-bottom: 30px;
            padding: 25px;
            border: 2px solid #f0efe2;
            border-radius: 15px;
            page-break-inside: avoid;
          }
          .subsidiary-header {
            border-bottom: 2px solid #c6a35d;
            padding-bottom: 15px;
            margin-bottom: 15px;
          }
          .subsidiary-name {
            font-size: 24px;
            font-weight: bold;
            color: #232323;
            margin-bottom: 5px;
          }
          .subsidiary-chapter {
            font-size: 16px;
            color: #c6a35d;
            font-style: italic;
            font-weight: 600;
          }
          .subsidiary-description {
            font-size: 14px;
            margin-bottom: 15px;
            color: #444;
          }
          .subsidiary-details {
            font-size: 12px;
            color: #666;
            padding-top: 10px;
            border-top: 1px solid #eee;
          }
          .footer {
            text-align: center;
            margin-top: 50px;
            padding: 30px;
            background: #232323;
            color: white;
            border-radius: 10px;
          }
          .contact-info {
            margin-top: 20px;
            font-size: 14px;
          }
          @media print {
            body { margin: 0; }
            .subsidiary { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="company-title">AMARAA HOLDINGS</div>
          <div class="company-subtitle">The Pillars of Our Vision</div>
        </div>

        <div class="stats-section">
          <div class="stat-item">
            <span class="stat-number">21+</span>
            <div class="stat-label">Subsidiaries</div>
            <div class="stat-desc">Diverse business verticals</div>
          </div>
          <div class="stat-item">
            <span class="stat-number">6+</span>
            <div class="stat-label">Countries</div>
            <div class="stat-desc">Global presence</div>
          </div>
          <div class="stat-item">
            <span class="stat-number">100,000+</span>
            <div class="stat-label">Employees</div>
            <div class="stat-desc">Passionate professionals</div>
          </div>
          <div class="stat-item">
            <span class="stat-number">$40B+</span>
            <div class="stat-label">Revenue</div>
            <div class="stat-desc">Annual consolidated</div>
          </div>
        </div>

        <h2 style="text-align: center; color: #c6a35d; font-size: 32px; margin: 40px 0 30px 0;">Our Subsidiaries</h2>

        ${subsidiaries.map(subsidiary => `
          <div class="subsidiary">
            <div class="subsidiary-header">
              <div class="subsidiary-name">${subsidiary.name}</div>
              <div class="subsidiary-chapter">${subsidiary.chapter}</div>
            </div>
            <div class="subsidiary-description">${subsidiary.description}</div>
            <div class="subsidiary-details">${subsidiary.details}</div>
          </div>
        `).join('')}

        <div class="footer">
          <h3>Ready to Partner With Us?</h3>
          <div class="contact-info">
            <p>Discover how our diverse portfolio of subsidiaries can create synergies and drive mutual growth for your organization.</p>
            <p><strong>Contact us today to explore partnership opportunities.</strong></p>
            <p>Email: info@amaraaglobal.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Amaraa-Holdings-Company-Brochure.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(pdfContent);
      newWindow.document.close();
      setTimeout(() => {
        newWindow.print();
      }, 1000);
    }
  };

  const stats = [
    { value: 21, suffix: "+", label: "Subsidiaries", description: "Diverse business verticals" },
    { value: 6, suffix: "+", label: "Countries", description: "Global presence" },
    { value: 100000, suffix: "+", label: "Employees", description: "Passionate professionals" },
    { value: 40, suffix: "B+", label: "Revenue", description: "Annual consolidated" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#232323]">
      <section className="bg-[#f0efe2] dark:bg-[#232323] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#c6a35d] mb-6 font-bodoni">
              Our Businesses
            </h1>
            <p className="text-xl text-[#c6a35d] mb-8 max-w-3xl mx-auto font-bodoni italic">
              The Pillars of Our Vision
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-montserrat">
              Each subsidiary of Amaraa Holding is a chapter in our greater story. Together, they form a tapestry of
              sustainability, innovation, and impact that spans across industries and continents.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#232323]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 lg:gap-16">
            {subsidiaries.map((subsidiary, index) => (
              <motion.div
                key={subsidiary.name}
                className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex-shrink-0 lg:w-2/5 w-full">
                  <motion.div
                    className="relative group bg-[#f0efe2] dark:bg-[#2a2a2a] rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-80 lg:h-96"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        fill
                        src={companyStaticData[index]?.image || '/images/default-chapter.jpg'}
                        alt={subsidiary.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10">
                        <motion.div
                          initial={{ opacity: 0.8, y: 0 }}
                          whileHover={{ opacity: 1, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="text-white"
                        >
                          <h3 className="text-2xl lg:text-3xl font-bold mb-3 font-bodoni drop-shadow-lg">
                            {subsidiary.name}
                          </h3>
                          <p className="text-lg font-medium italic font-montserrat drop-shadow-md">
                            {subsidiary.chapter}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="flex-1 lg:w-3/5 w-full">
                  <motion.div
                    className="bg-[#f0efe2] dark:bg-[#2a2a2a] rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-[#c6a35d] mb-2 font-bodoni">
                        {subsidiary.chapter}
                      </h4>
                      <h3 className="text-2xl font-bold text-[#232323] dark:text-[#f0efe2] mb-4 font-bodoni">
                        {subsidiary.name}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6 font-montserrat">
                      {subsidiary.description}
                    </p>

                    <div className="border-t border-gray-300 dark:border-gray-600 pt-6 mb-6">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-montserrat">
                        {subsidiary.details}
                      </p>
                    </div>

                    <motion.button
                      className="cursor-pointer inline-flex items-center px-6 py-3 bg-[#c6a35d] text-white font-medium rounded-lg font-montserrat hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.05, backgroundColor: "#b8964f" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f0efe2] dark:bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#232323] dark:text-[#f0efe2] mb-6 font-bodoni">
              Collective Impact
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-montserrat">
              Together, our subsidiaries create a powerful force for positive change across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white dark:bg-[#232323] p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -8, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#c6a35d] mb-2 font-bodoni">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-bold text-[#232323] dark:text-[#f0efe2] mb-2 font-bodoni">
                  {stat.label}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-montserrat">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#232323]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#f0efe2] mb-6 font-bodoni">
            Explore Partnership Opportunities
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed font-montserrat">
            Discover how our diverse portfolio of subsidiaries can create synergies and drive mutual growth for your
            organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!currentUser && (
              <motion.button
                className="px-8 py-4 cursor-pointer bg-[#c6a35d] text-white font-semibold rounded-lg font-montserrat"
                whileHover={{ scale: 1.05, backgroundColor: "#b8964f" }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePartnerClick}
              >
                Partner With Us
              </motion.button>
            )}
            <motion.button
              className="px-8 py-4 cursor-pointer border-2 border-[#c6a35d] text-[#c6a35d] font-semibold rounded-lg font-montserrat"
              whileHover={{ scale: 1.05, backgroundColor: "#c6a35d", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={generatePDF}
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </section>

      <AuthModal
        open={isAuthModalOpen}
        onOpenChange={setIsAuthModalOpen}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  )
}

export default SubsidiariesPage;