/* eslint-disable @next/next/no-img-element */
import { Clock, Target, Globe, Award } from "lucide-react"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hoa-gold/20 via-transparent to-hoa-charcoal/10 dark:from-hoa-gold/10 dark:to-hoa-charcoal/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A legacy born from vision, nurtured by wisdom, and destined for greatness. The House of Amaraa stands as a
              testament to the power of dreams transformed into reality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-44 items-center">
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
                The Genesis of Excellence
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  In the heart of ambition and the soul of innovation, House of Amaraa was conceived not merely as a
                  business enterprise, but as a beacon of transformative leadership. Our founders envisioned a company
                  that would transcend traditional boundaries, creating value that extends far beyond financial metrics.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  From our humble beginnings, we understood that true success lies in the harmony between purpose and
                  profit, between individual achievement and collective prosperity. This philosophy became the
                  cornerstone upon which we built our empire of excellence.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, as we stand at the pinnacle of our industry, we remain committed to the values that shaped our
                  journey: integrity, innovation, and an unwavering dedication to creating a legacy that will inspire
                  generations to come.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="House of Amaraa founding story"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hoa-gold/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Milestones of Magnificence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each chapter of our story marks a significant leap forward in our quest for excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-hoa-gold/30 hidden lg:block"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Foundation of Vision",
                  description:
                    "House of Amaraa was established with a revolutionary vision to redefine industry standards and create sustainable value for all stakeholders.",
                  side: "left",
                },
                {
                  year: "2015",
                  title: "Strategic Expansion",
                  description:
                    "Expanded operations across multiple sectors, establishing ourselves as a diversified conglomerate with a focus on innovation and excellence.",
                  side: "right",
                },
                {
                  year: "2018",
                  title: "Global Recognition",
                  description:
                    "Received international acclaim for our sustainable business practices and commitment to corporate social responsibility.",
                  side: "left",
                },
                {
                  year: "2021",
                  title: "Digital Transformation",
                  description:
                    "Led the industry in digital innovation, implementing cutting-edge technologies to enhance operational efficiency and customer experience.",
                  side: "right",
                },
                {
                  year: "2024",
                  title: "Legacy Continues",
                  description:
                    "Today, we stand as a testament to visionary leadership, continuing to shape the future while honoring our foundational principles.",
                  side: "left",
                },
              ].map((item, index) => (
                <div key={item.year} className={`relative animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                  <div className={`lg:flex items-center ${item.side === "right" ? "lg:flex-row-reverse" : ""}`}>
                    <div className="lg:w-1/2 lg:px-8">
                      <div className="bg-white dark:bg-hoa-charcoal/80 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-hoa-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {item.year.slice(-2)}
                          </div>
                          <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white ml-4">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2"></div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-hoa-gold rounded-full border-4 border-white dark:border-hoa-charcoal hidden lg:block top-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our guiding principles that illuminate the path to our extraordinary future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Vision",
                description:
                  "To be the world's most respected conglomerate, setting new standards of excellence and creating lasting value for all stakeholders.",
              },
              {
                icon: Clock,
                title: "Mission",
                description:
                  "To transform industries through innovative solutions, ethical practices, and unwavering commitment to sustainable growth.",
              },
              {
                icon: Globe,
                title: "Global Impact",
                description:
                  "To create positive change that transcends borders, fostering prosperity and progress in every community we serve.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "To maintain the highest standards of quality and integrity in everything we do, setting benchmarks for others to follow.",
              },
            ].map((item, index) => (
              <div key={item.title} className={`text-center animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="w-16 h-16 bg-hoa-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}