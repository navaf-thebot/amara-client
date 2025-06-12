/* eslint-disable @next/next/no-img-element */
import { Heart, Lightbulb, Users, Compass, Star, Zap } from "lucide-react"

export default function ValuesCulturePage() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We conduct ourselves with unwavering honesty, transparency, and ethical behavior in all our interactions.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking solutions to drive progress and create value for our stakeholders.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collective intelligence to achieve extraordinary results.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Compass,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, continuously improving and exceeding expectations.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Star,
      title: "Respect",
      description:
        "We value diversity, treat everyone with dignity, and create an inclusive environment where all can thrive.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Zap,
      title: "Agility",
      description: "We adapt quickly to change, embrace new opportunities, and respond dynamically to market demands.",
      color: "from-cyan-500 to-teal-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hoa-gold/20 via-transparent to-hoa-charcoal/10 dark:from-hoa-gold/10 dark:to-hoa-charcoal/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Values & Culture
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our values are the compass that guides our journey, and our culture is the wind that propels us toward
              extraordinary achievements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Six fundamental principles that define who we are and guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full hover:shadow-xl transition-all duration-300 group">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
                  Culture of Curiosity
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  At House of Amaraa, curiosity is the catalyst for innovation. We encourage our team members to
                  question the status quo, explore new possibilities, and challenge conventional thinking. This culture
                  of intellectual curiosity drives us to discover breakthrough solutions and stay ahead of industry
                  trends.
                </p>
                <div className="space-y-4">
                  {[
                    "Encouraging bold questions and creative thinking",
                    "Supporting experimental projects and pilot programs",
                    "Celebrating learning from both successes and failures",
                    "Fostering cross-functional collaboration and knowledge sharing",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-fade-in-up animation-delay-200">
                <div className="relative">
                  <img
                    src="/images/value-curiosity.jpg"
                    alt="Culture of curiosity"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hoa-gold/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
                  Culture of Empowerment
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  We believe that empowered individuals create empowered organizations. Our culture emphasizes trust,
                  autonomy, and personal growth. We provide our team members with the tools, resources, and authority
                  they need to make meaningful contributions and drive positive change.
                </p>
                <div className="space-y-4">
                  {[
                    "Delegating meaningful responsibilities and decision-making authority",
                    "Providing comprehensive professional development opportunities",
                    "Recognizing and rewarding individual and team achievements",
                    "Creating pathways for career advancement and leadership roles",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-1 animate-fade-in-up animation-delay-200">
                <div className="relative">
                  <img
                    src="/images/value-emp.jpg"
                    alt="Culture of empowerment"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hoa-gold/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
                  Culture of Learning
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Continuous learning is the foundation of our competitive advantage. We invest in our people&apos;s growth
                  through formal education, mentorship programs, and hands-on experiences. Our learning culture ensures
                  that we remain adaptable, innovative, and ready for future challenges.
                </p>
                <div className="space-y-4">
                  {[
                    "Offering comprehensive training and certification programs",
                    "Facilitating mentorship and coaching relationships",
                    "Supporting attendance at industry conferences and workshops",
                    "Creating internal knowledge-sharing platforms and forums",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-hoa-gold rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-fade-in-up animation-delay-200">
                <div className="relative">
                  <img
                    src="/images/value-learning.jpg"
                    alt="Culture of learning"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hoa-gold/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-hoa-charcoal/80 p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up">
            <div className="text-6xl text-hoa-gold mb-6 font-serif">&quot;</div>
            <blockquote className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic font-serif">
              Culture is not just what we do—it&apos;s who we are. It&apos;s the invisible force that transforms individual
              talents into collective genius, turning ordinary moments into extraordinary achievements.
            </blockquote>
            <cite className="text-hoa-gold font-semibold">House of Amaraa Leadership Team</cite>
          </div>
        </div>
      </section>
    </div>
  )
}