/* eslint-disable @next/next/no-img-element */
import { Shield, Eye, Scale, Leaf } from "lucide-react"

export default function GovernancePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hoa-gold/20 via-transparent to-hoa-charcoal/10 dark:from-hoa-gold/10 dark:to-hoa-charcoal/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Corporate Governance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Excellence in governance is the foundation of trust, the cornerstone of integrity, and the pathway to
              sustainable success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Our Governance Pillars
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Four fundamental principles that guide every decision and action within our organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: "Transparency",
                description:
                  "We believe in open communication, clear reporting, and honest disclosure of all material information to our stakeholders.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Shield,
                title: "Accountability",
                description:
                  "Every action we take is backed by responsibility, ensuring that we answer for our decisions and their consequences.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Scale,
                title: "Ethics",
                description:
                  "Unwavering moral principles guide our conduct, ensuring fairness, honesty, and integrity in all our dealings.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description:
                  "We are committed to practices that ensure long-term value creation while protecting our planet for future generations.",
                color: "from-emerald-500 to-emerald-600",
              },
            ].map((pillar, index) => (
              <div key={pillar.title} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full hover:shadow-xl transition-shadow duration-300">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
                Message from the Board
              </h2>
            </div>

            <div className="bg-white dark:bg-hoa-charcoal/80 p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up animation-delay-200">
              <div className="text-6xl text-hoa-gold mb-6 font-serif">&quot;</div>
              <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                At House of Amaraa, governance is not merely a compliance requirement—it is the very essence of our
                corporate identity. We have built our reputation on the bedrock of ethical leadership, transparent
                operations, and accountable decision-making. Our commitment to these principles ensures that we not only
                meet but exceed the expectations of our stakeholders, creating sustainable value that stands the test of
                time.
              </blockquote>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-hoa-gold rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  BoD
                </div>
                <div>
                  <p className="font-semibold text-hoa-charcoal dark:text-white">Board of Directors</p>
                  <p className="text-gray-600 dark:text-gray-400">House of Amaraa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
                Our Governance Framework
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-hoa-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-hoa-charcoal dark:text-white mb-2">Board Independence</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our board comprises independent directors who bring diverse expertise and objective oversight to
                      our operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-hoa-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-hoa-charcoal dark:text-white mb-2">Risk Management</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Comprehensive risk assessment and mitigation strategies ensure sustainable growth and stakeholder
                      protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-hoa-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-hoa-charcoal dark:text-white mb-2">
                      Stakeholder Engagement
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Regular communication and engagement with all stakeholders ensure alignment and mutual value
                      creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <div className="relative">
                <img
                  src="/images/gover-img.jpg"
                  alt="Corporate governance framework"
                  className="rounded-2xl  w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hoa-gold/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}