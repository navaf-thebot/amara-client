"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card/Card"
import { Badge } from "@/components/card/badge"
import { Leaf, Droplets, Recycle, Target, Heart, TrendingDown, Battery, Users, Award } from "lucide-react"
import Image from "next/image"

export default function GlobalFootprint() {
  const metrics = [
    {
      icon: TrendingDown,
      title: "Carbon Emissions",
      value: "2.1M",
      unit: "tCO₂e",
      description: "Total emissions across Scopes 1, 2 & 3",
      trend: "-15% vs 2023",
      color: "text-[#c6a35d]",
      bgColor: "bg-[#c6a35d]/10",
    },
    {
      icon: Battery,
      title: "Renewable Energy",
      value: "78%",
      unit: "of total consumption",
      description: "Clean energy powering our operations",
      trend: "+12% vs 2023",
      color: "text-[#c6a35d]",
      bgColor: "bg-[#c6a35d]/10",
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      value: "1.2M",
      unit: "liters saved",
      description: "Through efficiency programs",
      trend: "+8% improvement",
      color: "text-[#f0efe2] dark:text-[#f0efe2]",
      bgColor: "bg-[#c6a35d]/10",

    },
    {
      icon: Recycle,
      title: "Waste Diverted",
      value: "89%",
      unit: "from landfills",
      description: "Recycling and circular economy initiatives",
      trend: "+5% vs 2023",
      color: "text-[#c6a35d]",
      bgColor: "bg-[#c6a35d]/10",
    },
    {
      icon: Target,
      title: "Net Zero Target",
      value: "2030",
      unit: "commitment",
      description: "Science-based targets aligned with 1.5°C",
      trend: "On track",
      color: "text-[#c6a35d]",
      bgColor: "bg-[#c6a35d]/10",
    },
    {
      icon: Heart,
      title: "CSR Investment",
      value: "$12.5M",
      unit: "in communities",
      description: "Supporting education and healthcare",
      trend: "+20% vs 2023",
      color: "text-[#f0efe2] dark:text-[#f0efe2]",
      bgColor: "bg-[#c6a35d]/10",

    },
  ]

  return (
    <>
      <style jsx global>{`
        .font-bodoni {
          font-family: 'Bodoni Moda', serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        :root {
          --color-primary: #c6a35d;
          --color-secondary: #f0efe2;
          --color-dark: #232323;
        }
      `}</style>

      <div className="min-h-screen bg-white dark:bg-[#232323] text-black dark:text-[#f0efe2]">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#232323]">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-[#c6a35d]/20 dark:from-[#232323]/95 dark:to-[#c6a35d]/20 z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Global operations map"
            fill
            className="object-cover opacity-30"
            priority
          />

          <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-bodoni text-[#c6a35d] animate-pulse">
              Amara Global Footprint
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light font-montserrat">
              Driving sustainability and impact at scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-[#c6a35d]/20 text-[#c6a35d] border-[#c6a35d]/30 px-4 py-2 text-sm hover:bg-[#c6a35d]/30 transition-all duration-300 font-montserrat">
                <Leaf className="w-4 h-4 mr-2" />
                135+ Sustainability Projects
              </Badge>
              <Badge className="bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/30 px-4 py-2 text-sm hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 font-montserrat">
                <Users className="w-4 h-4 mr-2" />
                6+ Countries
              </Badge>

            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white dark:bg-[#232323]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#c6a35d] mb-4 font-bodoni">Our Impact by the Numbers</h2>
              <p className="text-xl text-gray-700 dark:text-[#f0efe2]/80 max-w-3xl mx-auto font-montserrat">
                Measuring progress across environmental, social, and governance dimensions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metrics.map((metric) => {
                const IconComponent = metric.icon
                return (
                  <Card
                    key={metric.title}
                    className="group hover:shadow-2xl hover:shadow-[#c6a35d]/20 transition-all duration-500 hover:-translate-y-2 border border-[#c6a35d]/20 bg-white dark:bg-[#232323] backdrop-blur-sm hover:border-[#c6a35d]/40 hover:bg-gradient-to-br hover:from-[#c6a35d]/10 hover:to-[#c6a35d]/5"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-lg ${metric.bgColor} ${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-[#c6a35d] " />
                        </div>
                        <Badge className="text-xs font-medium bg-[#c6a35d]/20 text-[#c6a35d] border-[#c6a35d]/30 font-montserrat">
                          {metric.trend}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold group-hover:text-[#c6a35d] transition-colors duration-300 font-bodoni">
                        {metric.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <span className="text-3xl font-bold text-[#c6a35d] font-bodoni">
                          {metric.value}
                        </span>
                        <span className="text-sm text-gray-700 dark:text-[#f0efe2]/70 ml-1 font-montserrat">{metric.unit}</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-[#f0efe2]/80 leading-relaxed font-montserrat">{metric.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-[#232323]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="relative inline-block">
                <Award className="w-16 h-16 text-[#c6a35d] mx-auto mb-6 animate-pulse" />
                <div className="absolute inset-0 w-16 h-16 bg-[#c6a35d]/20 rounded-full blur-xl mx-auto animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-[#c6a35d] mb-6 font-bodoni">Our Commitment to Tomorrow</h2>
            </div>
            <p className="text-xl leading-relaxed mb-8 font-montserrat text-gray-800 dark:text-[#f0efe2]/90">
              We believe that business success and environmental stewardship go hand in hand. Our global operations are
              designed to minimize environmental impact while maximizing positive social outcomes. Through innovative
              technologies, strategic partnerships, and unwavering commitment to transparency, we are building a
              sustainable future that benefits all stakeholders—from our employees and customers to the communities we
              serve and the planet we all share.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center bg-[#c6a35d]/10 px-4 py-2 rounded-full border border-[#c6a35d]/20 hover:border-[#c6a35d]/40 transition-all duration-300">
                <Leaf className="w-4 h-4 text-[#c6a35d] mr-2" />
                <span className="font-montserrat text-gray-800 dark:text-[#f0efe2]">Carbon Neutral by 2030</span>
              </div>
              <div className="flex items-center bg-[#c6a35d]/10 px-4 py-2 rounded-full border border-[#c6a35d]/20 hover:border-[#c6a35d]/40 transition-all duration-300">
                <Recycle className="w-4 h-4 text-[#c6a35d] mr-2" />
                <span className="font-montserrat text-gray-800 dark:text-[#f0efe2]">Water Positive by 2025</span>
              </div>
              <div className="flex items-center bg-[#c6a35d]/10 px-4 py-2 rounded-full border border-[#c6a35d]/20 hover:border-[#c6a35d]/40 transition-all duration-300">
                <Recycle className="w-4 h-4 text-[#c6a35d] mr-2" />
                <span className="font-montserrat text-gray-800 dark:text-[#f0efe2]">Zero Waste to Landfill</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
