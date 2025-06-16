'use client';
import {
  Leaf, Shield, Car, Plane, Monitor, Coffee, Building, Zap, Heart, GraduationCap,
  Truck, Factory, Wrench, Globe, Smartphone, Briefcase, Home, Users, Award, Target, Star,
} from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const subsidiaries = [
    {
      name: "Amaraa Agro Group Ltd.", chapter: "Chapter of Growth", description: "Sustainable agriculture and biodiversity innovation, cultivating the future of farming with eco-conscious practices and cutting-edge technology.", icon: Leaf, details: "Leading sustainable farming practices across 50,000+ acres with organic certification and smart irrigation systems.",
    },
    {
      name: "Amaraa Security Shield Ltd.", chapter: "Chapter of Safety", description: "Armed security and surveillance services, protecting what matters most with advanced technology and trained professionals.", icon: Shield, details: "Comprehensive security solutions serving 500+ clients with 24/7 monitoring and rapid response capabilities.",
    },
    {
      name: "Amaraa Auto Group Ltd.", chapter: "Chapter of Innovation", description: "Auto import/export and electric vehicle design, driving the future of sustainable transportation solutions.", icon: Car, details: "Pioneering electric vehicle technology with partnerships across 15 countries and zero-emission fleet solutions.",
    },
    {
      name: "Amaraa IT Services Ltd.", chapter: "Chapter of Connectivity", description: "Software development and cybersecurity, connecting the world through innovative digital solutions and secure platforms.", icon: Monitor, details: "Delivering enterprise software solutions and cybersecurity services to Fortune 500 companies globally.",
    },
    {
      name: "Amaraa Food & Beverages Ltd.", chapter: "Chapter of Taste", description: "Farm-to-table products with a focus on sustainability, bringing authentic flavors while preserving our planet.", icon: Coffee, details: "Organic food production with direct farmer partnerships and sustainable packaging across 25 product lines.",
    },
    {
      name: "Amaraa Aviation Ltd.", chapter: "Chapter of Exploration", description: "Full-service airline and eco-conscious aviation services, connecting destinations while caring for the environment.", icon: Plane, details: "Operating 50+ aircraft with carbon-neutral flights and premium passenger services across 100+ destinations.",
    },
    {
      name: "Amaraa Real Estate Ltd.", chapter: "Chapter of Foundation", description: "Sustainable urban development and green building solutions, creating spaces that harmonize with nature.", icon: Building, details: "LEED-certified developments with smart city integration and affordable housing initiatives.",
    },
    {
      name: "Amaraa Energy Solutions Ltd.", chapter: "Chapter of Power", description: "Renewable energy and clean power generation, illuminating the path to a sustainable future.", icon: Zap, details: "Solar and wind energy projects generating 500MW+ clean power with battery storage solutions.",
    },
    {
      name: "Amaraa Healthcare Ltd.", chapter: "Chapter of Wellness", description: "Comprehensive healthcare services and medical innovation, nurturing health and healing communities.", icon: Heart, details: "Multi-specialty hospitals and telemedicine services reaching rural communities with advanced medical care.",
    },
    {
      name: "Amaraa Education Foundation", chapter: "Chapter of Knowledge", description: "Educational excellence and skill development programs, empowering minds to shape tomorrow.", icon: GraduationCap, details: "Educational institutions serving 10,000+ students with scholarship programs and vocational training.",
    },
    {
      name: "Amaraa Logistics Ltd.", chapter: "Chapter of Movement", description: "Efficient supply chain and transportation solutions, moving goods and connecting markets seamlessly.", icon: Truck, details: "End-to-end logistics with AI-powered route optimization and cold chain capabilities.",
    },
    {
      name: "Amaraa Manufacturing Ltd.", chapter: "Chapter of Creation", description: "Advanced manufacturing and industrial solutions, crafting quality products with precision and care.", icon: Factory, details: "Smart manufacturing facilities with Industry 4.0 integration and zero-waste production processes.",
    },
    {
      name: "Amaraa Engineering Services Ltd.", chapter: "Chapter of Precision", description: "Expert engineering consultancy and project management, building the infrastructure of tomorrow.", icon: Wrench, details: "Engineering excellence in infrastructure projects with BIM technology and sustainable design practices.",
    },
    {
      name: "Amaraa Global Trading Ltd.", chapter: "Chapter of Commerce", description: "International trade and export services, bridging markets and fostering global partnerships.", icon: Globe, details: "Trade partnerships across 40+ countries with commodity trading and export financing solutions.",
    },
    {
      name: "Amaraa Tech Innovations Ltd.", chapter: "Chapter of Future", description: "Cutting-edge technology research and AI solutions, pioneering the next generation of innovation.", icon: Smartphone, details: "AI and IoT solutions with 50+ patents and research partnerships with leading universities.",
    },
    {
      name: "Amaraa Financial Services Ltd.", chapter: "Chapter of Prosperity", description: "Comprehensive financial solutions and investment services, building wealth and securing futures.", icon: Briefcase, details: "Investment banking and wealth management with $2B+ assets under management.",
    },
    {
      name: "Amaraa Hospitality Ltd.", chapter: "Chapter of Welcome", description: "Luxury hospitality and tourism services, creating memorable experiences with exceptional service.", icon: Home, details: "Premium hotels and resorts with sustainable tourism practices and cultural preservation initiatives.",
    },
    {
      name: "Amaraa Media & Communications Ltd.", chapter: "Chapter of Voice", description: "Digital media and communication solutions, amplifying stories and connecting communities.", icon: Users, details: "Digital marketing and content creation with 100M+ audience reach across multiple platforms.",
    },
    {
      name: "Amaraa Sports & Recreation Ltd.", chapter: "Chapter of Excellence", description: "Sports development and recreational facilities, promoting health, fitness, and competitive spirit.", icon: Award, details: "Sports academies and recreational facilities promoting youth development and professional athletics.",
    },
    {
      name: "Amaraa Environmental Solutions Ltd.", chapter: "Chapter of Stewardship", description: "Environmental conservation and waste management, protecting our planet for future generations.", icon: Target, details: "Waste-to-energy projects and environmental remediation with carbon offset programs.",
    },
    {
      name: "Amaraa Consulting Ltd.", chapter: "Chapter of Wisdom", description: "Strategic business consulting and advisory services, guiding organizations toward sustainable success.", icon: Star, details: "Management consulting with expertise in digital transformation and sustainability strategies.",
    },
  ];

  const stats = [
    { value: 21, suffix: "+", label: "Subsidiaries", description: "Diverse business verticals" },
    { value: 50, suffix: "+", label: "Countries", description: "Global presence" },
    { value: 100000, suffix: "+", label: "Employees", description: "Passionate professionals" },
    { value: 5, suffix: "B+", label: "Revenue", description: "Annual consolidated" },
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
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex-shrink-0 lg:w-1/3 w-full">
                  <motion.div 
                    className="bg-[#f0efe2] dark:bg-[#2a2a2a] rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <div className="w-20 h-20 bg-[#c6a35d] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <subsidiary.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#232323] dark:text-[#f0efe2] mb-2 font-bodoni">{subsidiary.name}</h3>
                    <p className="text-[#c6a35d] font-medium italic font-montserrat">{subsidiary.chapter}</p>
                  </motion.div>
                </div>

                <div className="flex-1 lg:w-2/3 w-full">
                  <motion.div 
                    className="bg-[#f0efe2] dark:bg-[#2a2a2a] rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6 font-montserrat">
                      {subsidiary.description}
                    </p>
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-6 mb-6">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-montserrat">
                        {subsidiary.details}
                      </p>
                    </div>
                    <motion.button 
                      className="cursor-pointer inline-flex items-center px-6 py-3 bg-[#c6a35d] text-white font-medium rounded-lg font-montserrat"
                      whileHover={{ scale: 1.05, backgroundColor: "#b8964f" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <span className="ml-2">→</span>
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
            <motion.button 
              className="px-8 py-4 cursor-pointer bg-[#c6a35d] text-white font-semibold rounded-lg font-montserrat"
              whileHover={{ scale: 1.05, backgroundColor: "#b8964f" }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.button>
            <motion.button 
              className="px-8 py-4 cursor-pointer border-2 border-[#c6a35d] text-[#c6a35d] font-semibold rounded-lg font-montserrat"
              whileHover={{ scale: 1.05, backgroundColor: "#c6a35d", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubsidiariesPage;