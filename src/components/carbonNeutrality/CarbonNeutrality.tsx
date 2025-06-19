"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card/Card"
import { Badge } from "@/components/card/badge"
import { Zap, Recycle, Globe, Award } from "lucide-react"
import Image from "next/image"

export default function CarbonNeutrality() {
  const neutralityMetrics = [
    {
      icon: Zap,
      title: "Renewable Energy Use",
      value: "85%",
      unit: "of total consumption",
      description: "Solar, wind, and hydro powering our global sites",
      trend: "+10% vs 2023",
    },
    {
      icon: Recycle,
      title: "Offset Projects",
      value: "15",
      unit: "certified initiatives",
      description: "Afforestation, carbon credits, and methane capture",
      trend: "+3 projects",
    },
    {
      icon: Globe,
      title: "Carbon Neutral Sites",
      value: "42",
      unit: "offices & factories",
      description: "Zero-emission facilities with on-site renewables",
      trend: "+6 this year",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#232323] text-black dark:text-[#f0efe2]">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white dark:bg-[#232323] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-[#c6a35d]/20 dark:from-[#232323]/95 dark:to-[#c6a35d]/20 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Carbon neutrality banner"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-30 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-[#c6a35d] font-bodoni animate-pulse">
            Carbon Neutrality
          </h1>
          <p className="text-xl font-light font-montserrat">
            Building a zero-emissions future with action and accountability
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-[#232323]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {neutralityMetrics.map((metric) => {
            const Icon = metric.icon
            return (
              <Card
                key={metric.title}
                className="group hover:shadow-2xl hover:shadow-[#c6a35d]/20 transition-all duration-500 hover:-translate-y-2 border border-[#c6a35d]/20 bg-white dark:bg-[#232323] hover:border-[#c6a35d]/40 hover:bg-gradient-to-br hover:from-[#c6a35d]/10 hover:to-[#c6a35d]/5"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-[#c6a35d]/10 text-[#c6a35d] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
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
                  <p className="text-sm text-gray-700 dark:text-[#f0efe2]/80 leading-relaxed font-montserrat">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#232323]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Award className="w-12 h-12 text-[#c6a35d] mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl font-bold text-[#c6a35d] font-bodoni mb-4">Our Pledge to Net Zero</h2>
          <p className="text-lg font-montserrat text-gray-800 dark:text-[#f0efe2]/90">
            We are accelerating our transition to net-zero operations by embracing renewables, reducing scope 1-3 emissions,
            and supporting environmental projects that neutralize our residual footprint.
          </p>
        </div>
      </section>
    </div>
  )
}
