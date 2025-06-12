import {
  Leaf,
  Shield,
  Car,
  Plane,
  Monitor,
  Coffee,
  Building,
  Zap,
  Heart,
  GraduationCap,
  Truck,
  Factory,
  Wrench,
  Globe,
  Smartphone,
  Briefcase,
  Home,
  Users,
  Award,
  Target,
  Star,
} from "lucide-react"

 function SubsidiariesPage() {
  const subsidiaries = [
    {
      name: "Amaraa Agro Group Pvt. Ltd.",
      chapter: "Chapter of Growth",
      description:
        "Sustainable agriculture and biodiversity innovation, cultivating the future of farming with eco-conscious practices and cutting-edge technology.",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      details:
        "Leading sustainable farming practices across 50,000+ acres with organic certification and smart irrigation systems.",
    },
    {
      name: "Amaraa Security Shield Pvt. Ltd.",
      chapter: "Chapter of Safety",
      description:
        "Armed security and surveillance services, protecting what matters most with advanced technology and trained professionals.",
      icon: Shield,
      color: "from-blue-600 to-indigo-700",
      details:
        "Comprehensive security solutions serving 500+ clients with 24/7 monitoring and rapid response capabilities.",
    },
    {
      name: "Amaraa Auto Group Pvt. Ltd.",
      chapter: "Chapter of Innovation",
      description:
        "Auto import/export and electric vehicle design, driving the future of sustainable transportation solutions.",
      icon: Car,
      color: "from-purple-500 to-violet-600",
      details:
        "Pioneering electric vehicle technology with partnerships across 15 countries and zero-emission fleet solutions.",
    },
    {
      name: "Amaraa IT Services Pvt. Ltd.",
      chapter: "Chapter of Connectivity",
      description:
        "Software development and cybersecurity, connecting the world through innovative digital solutions and secure platforms.",
      icon: Monitor,
      color: "from-cyan-500 to-blue-600",
      details: "Delivering enterprise software solutions and cybersecurity services to Fortune 500 companies globally.",
    },
    {
      name: "Amaraa Food & Beverages Pvt. Ltd.",
      chapter: "Chapter of Taste",
      description:
        "Farm-to-table products with a focus on sustainability, bringing authentic flavors while preserving our planet.",
      icon: Coffee,
      color: "from-orange-500 to-red-500",
      details:
        "Organic food production with direct farmer partnerships and sustainable packaging across 25 product lines.",
    },
    {
      name: "Amaraa Aviation Pvt. Ltd.",
      chapter: "Chapter of Exploration",
      description:
        "Full-service airline and eco-conscious aviation services, connecting destinations while caring for the environment.",
      icon: Plane,
      color: "from-sky-500 to-blue-600",
      details:
        "Operating 50+ aircraft with carbon-neutral flights and premium passenger services across 100+ destinations.",
    },
    {
      name: "Amaraa Real Estate Pvt. Ltd.",
      chapter: "Chapter of Foundation",
      description:
        "Sustainable urban development and green building solutions, creating spaces that harmonize with nature.",
      icon: Building,
      color: "from-gray-600 to-slate-700",
      details: "LEED-certified developments with smart city integration and affordable housing initiatives.",
    },
    {
      name: "Amaraa Energy Solutions Pvt. Ltd.",
      chapter: "Chapter of Power",
      description: "Renewable energy and clean power generation, illuminating the path to a sustainable future.",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      details: "Solar and wind energy projects generating 500MW+ clean power with battery storage solutions.",
    },
    {
      name: "Amaraa Healthcare Pvt. Ltd.",
      chapter: "Chapter of Wellness",
      description:
        "Comprehensive healthcare services and medical innovation, nurturing health and healing communities.",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      details:
        "Multi-specialty hospitals and telemedicine services reaching rural communities with advanced medical care.",
    },
    {
      name: "Amaraa Education Foundation",
      chapter: "Chapter of Knowledge",
      description: "Educational excellence and skill development programs, empowering minds to shape tomorrow.",
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-600",
      details: "Educational institutions serving 10,000+ students with scholarship programs and vocational training.",
    },
    {
      name: "Amaraa Logistics Pvt. Ltd.",
      chapter: "Chapter of Movement",
      description:
        "Efficient supply chain and transportation solutions, moving goods and connecting markets seamlessly.",
      icon: Truck,
      color: "from-emerald-500 to-green-600",
      details: "End-to-end logistics with AI-powered route optimization and cold chain capabilities.",
    },
    {
      name: "Amaraa Manufacturing Pvt. Ltd.",
      chapter: "Chapter of Creation",
      description:
        "Advanced manufacturing and industrial solutions, crafting quality products with precision and care.",
      icon: Factory,
      color: "from-slate-500 to-gray-600",
      details: "Smart manufacturing facilities with Industry 4.0 integration and zero-waste production processes.",
    },
    {
      name: "Amaraa Engineering Services Pvt. Ltd.",
      chapter: "Chapter of Precision",
      description: "Expert engineering consultancy and project management, building the infrastructure of tomorrow.",
      icon: Wrench,
      color: "from-amber-500 to-yellow-600",
      details:
        "Engineering excellence in infrastructure projects with BIM technology and sustainable design practices.",
    },
    {
      name: "Amaraa Global Trading Pvt. Ltd.",
      chapter: "Chapter of Commerce",
      description: "International trade and export services, bridging markets and fostering global partnerships.",
      icon: Globe,
      color: "from-teal-500 to-cyan-600",
      details: "Trade partnerships across 40+ countries with commodity trading and export financing solutions.",
    },
    {
      name: "Amaraa Tech Innovations Pvt. Ltd.",
      chapter: "Chapter of Future",
      description: "Cutting-edge technology research and AI solutions, pioneering the next generation of innovation.",
      icon: Smartphone,
      color: "from-violet-500 to-purple-600",
      details: "AI and IoT solutions with 50+ patents and research partnerships with leading universities.",
    },
    {
      name: "Amaraa Financial Services Pvt. Ltd.",
      chapter: "Chapter of Prosperity",
      description: "Comprehensive financial solutions and investment services, building wealth and securing futures.",
      icon: Briefcase,
      color: "from-green-600 to-emerald-700",
      details: "Investment banking and wealth management with $2B+ assets under management.",
    },
    {
      name: "Amaraa Hospitality Pvt. Ltd.",
      chapter: "Chapter of Welcome",
      description: "Luxury hospitality and tourism services, creating memorable experiences with exceptional service.",
      icon: Home,
      color: "from-rose-500 to-pink-600",
      details: "Premium hotels and resorts with sustainable tourism practices and cultural preservation initiatives.",
    },
    {
      name: "Amaraa Media & Communications Pvt. Ltd.",
      chapter: "Chapter of Voice",
      description: "Digital media and communication solutions, amplifying stories and connecting communities.",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      details: "Digital marketing and content creation with 100M+ audience reach across multiple platforms.",
    },
    {
      name: "Amaraa Sports & Recreation Pvt. Ltd.",
      chapter: "Chapter of Excellence",
      description: "Sports development and recreational facilities, promoting health, fitness, and competitive spirit.",
      icon: Award,
      color: "from-orange-500 to-red-600",
      details: "Sports academies and recreational facilities promoting youth development and professional athletics.",
    },
    {
      name: "Amaraa Environmental Solutions Pvt. Ltd.",
      chapter: "Chapter of Stewardship",
      description: "Environmental conservation and waste management, protecting our planet for future generations.",
      icon: Target,
      color: "from-green-500 to-teal-600",
      details: "Waste-to-energy projects and environmental remediation with carbon offset programs.",
    },
    {
      name: "Amaraa Consulting Pvt. Ltd.",
      chapter: "Chapter of Wisdom",
      description:
        "Strategic business consulting and advisory services, guiding organizations toward sustainable success.",
      icon: Star,
      color: "from-yellow-500 to-amber-600",
      details: "Management consulting with expertise in digital transformation and sustainability strategies.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hoa-gold/20 via-hoa-beige/30 to-white dark:from-hoa-gold/10 dark:via-hoa-charcoal/20 dark:to-hoa-charcoal"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Our Subsidiaries
            </h1>
            <p className="text-xl sm:text-2xl text-hoa-gold font-serif mb-8">The Pillars of Our Vision</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Each subsidiary of Amaraa Holding is a chapter in our greater story. Together, they form a tapestry of
              sustainability, innovation, and impact that spans across industries and continents.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <div
                key={subsidiary.name}
                className={`group animate-fade-in-up animation-delay-${((index % 6) + 1) * 100}`}
              >
                <div className="bg-white dark:bg-hoa-charcoal/80 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
                  <div className={`bg-gradient-to-br ${subsidiary.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <subsidiary.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-serif font-bold mb-2">{subsidiary.name}</h3>
                      <p className="text-white/90 font-medium italic">{subsidiary.chapter}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{subsidiary.description}</p>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{subsidiary.details}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <button className="w-full py-2 text-hoa-gold hover:text-[#c6a35d] hover:bg-hoa-gold border border-hoa-gold rounded-lg transition-all duration-300 font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Collective Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Together, our subsidiaries create a powerful force for positive change across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "21+", label: "Subsidiaries", description: "Diverse business verticals" },
              { number: "50+", label: "Countries", description: "Global presence" },
              { number: "100K+", label: "Employees", description: "Passionate professionals" },
              { number: "$5B+", label: "Revenue", description: "Annual consolidated" },
            ].map((stat, index) => (
              <div key={stat.label} className={`text-center animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-4xl font-bold text-hoa-gold mb-2">{stat.number}</div>
                  <div className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Explore Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover how our diverse portfolio of subsidiaries can create synergies and drive mutual growth for your
              organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 border cursor-pointer border-hoa-gold bg-hoa-gold hover:bg-hoa-gold/80 hover:text-[#c6a35d] font-semibold rounded-lg transition-colors duration-200">
                Partner With Us
              </button>
              <button className="px-8 py-4 border-2 cursor-pointer border-hoa-gold text-hoa-gold hover:bg-hoa-gold hover:text-[#c6a35d] font-semibold rounded-lg transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubsidiariesPage;