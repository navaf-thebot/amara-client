/* eslint-disable @next/next/no-img-element */
import PageBanner from "@/components/card/PageBanner"
import { Card, CardContent } from "@/components/card/Card"

export default function LeadershipPage() {
  const breadcrumbs = [{ name: "Leadership" }]

  const leaders = [
    {
      name: "Rajesh Mehra",
      title: "Chairperson",
      image: "/images/leader-rajesh.jpg",
      bio: "With over 30 years of experience in global business leadership, Rajesh has guided House of Amaraa through strategic growth and diversification.",
    },
    {
      name: "Anita Kapoor",
      title: "Chief Executive Officer",
      image: "/images/leader-anita.jpg",
      bio: "Anita brings innovative vision and operational excellence to HOA, driving sustainable growth across all business verticals.",
    },
    {
      name: "Vikram Singh",
      title: "Chief Financial Officer",
      image: "/images/leader-vikram.jpg",
      bio: "Vikram oversees the financial strategy and operations, ensuring robust financial health and strategic investments.",
    },
    {
      name: "Priya Sharma",
      title: "Chief Operating Officer",
      image: "/images/leader-priya.jpg",
      bio: "Priya leads operational excellence across all business units, optimizing processes and driving efficiency.",
    },
    {
      name: "Arjun Patel",
      title: "Chief Technology Officer",
      image: "/images/leader-arjun.jpg",
      bio: "Arjun spearheads technological innovation and digital transformation initiatives across the organization.",
    },
    {
      name: "Meera Gupta",
      title: "Chief Human Resources Officer",
      image: "/images/leader-meera.jpg",
      bio: "Meera develops and implements people strategies that align with our values and business objectives.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black dark:bg-hoa-charcoal transition-colors duration-400">
      <PageBanner
        title="Leadership Team"
        subtitle="The visionaries guiding our journey towards excellence"
        breadcrumbs={breadcrumbs}
      />

      <main className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-hoa-charcoal dark:text-white mb-6 font-serif">
              Executive <span className="text-hoa-gold">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-hoa-gold mx-auto mb-8" />
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our leadership team brings together decades of experience, visionary thinking, and unwavering commitment
              to excellence across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-800/30 hover:-translate-y-2 animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-hoa-gold/20 to-hoa-gold/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-hoa-gold/30 group-hover:border-hoa-gold transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-hoa-charcoal dark:text-white mb-2 font-serif group-hover:text-hoa-gold transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-hoa-gold font-semibold text-lg mb-4">{leader.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}