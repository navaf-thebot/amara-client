import { Card, CardContent } from "@/components/card/Card"
import { Heart, GraduationCap, Leaf, Users } from "lucide-react"

function CSRSection() {
  const initiatives = [
    {
      icon: Heart,
      title: "Healthcare Access",
      description:
        "Providing quality healthcare services to underserved communities through mobile clinics and health awareness programs.",
    },
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description:
        "Supporting educational infrastructure and scholarship programs to empower the next generation of leaders.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Implementing sustainable practices and green technologies across all our business operations.",
    },
    {
      icon: Users,
      title: "Community Development",
      description:
        "Investing in local communities through skill development programs and economic empowerment initiatives.",
    },
  ]

  return (
    <section id="csr" className="py-24 bg-hoa-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black dark:text-white mb-8 font-serif">
            Corporate <span className="text-hoa-gold">Social Responsibility</span>
          </h2>
          <div className="w-24 h-1 bg-hoa-gold mx-auto mb-8" />
          <p className="text-xl text-black/90 dark:text-white/90 max-w-3xl mx-auto leading-relaxed">
            Our commitment to social responsibility drives us to create positive impact in communities, environment, and
            society at large.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              className="bg-black/20 backdrop-blur-sm border-black/20 hover:bg-black/30 dark:bg-black/20 dark:hover:bg-white/30 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <initiative.icon className="w-16 h-16 mx-auto text-hoa-gold" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4 font-serif">{initiative.title}</h3>
                <p className="text-black/80 dark:text-white/80 leading-relaxed">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="dark:bg-white/10 bg-black/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black dark:text-white mb-6 font-serif">Our Impact Goals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-hoa-gold mb-2">50,000+</div>
                <div className="text-black/90 dark:text-white/90">Lives Impacted</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-hoa-gold mb-2">100+</div>
                <div className="text-black/90 dark:text-white/90">Communities Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-hoa-gold mb-2">25%</div>
                <div className="text-black/90 dark:text-white/90">Carbon Footprint Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CSRSection