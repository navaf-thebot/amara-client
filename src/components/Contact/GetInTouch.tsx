/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/card/Card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Globe, Building2, Briefcase } from "lucide-react"

type PhoneInputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => void
  name?: string
  id?: string
  required?: boolean
  [key: string]: unknown
}

const PhoneInput = ({ value, onChange, ...props }: PhoneInputProps) => {
  const [countryCode, setCountryCode] = useState("+91")
  const [phoneNumber, setPhoneNumber] = useState("")

  const countryCodes = [
    { code: "+1", country: "US", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+352", country: "LU", flag: "🇱🇺" },
    { code: "+41", country: "CH", flag: "🇨🇭" },
    { code: "+65", country: "SG", flag: "🇸🇬" },
    { code: "+971", country: "AE", flag: "🇦🇪" },
    { code: "+91", country: "IN", flag: "🇮🇳" },
  ]

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value
    setPhoneNumber(newPhone)
    onChange({ target: { name: props.name ?? "", value: `${countryCode} ${newPhone}` } })
  }

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = e.target.value
    setCountryCode(newCode)
    onChange({ target: { name: props.name ?? "", value: `${newCode} ${phoneNumber}` } })
  }

  return (
    <div className="flex">
      <select
        value={countryCode}
        onChange={handleCountryChange}
        className="px-3 py-1 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-[#1a1a1a] text-hoa-charcoal dark:text-white focus:outline-none focus:border-hoa-gold"
      >
        {countryCodes.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.code}
          </option>
        ))}
      </select>
      <Input
        {...props}
        value={phoneNumber}
        onChange={handlePhoneChange}
        className="rounded-l-none border-gray-300 dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold dark:bg-hoa-charcoal/30 flex-1"
        placeholder="Phone number"
      />
    </div>
  )
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const globalLocations = [
    {
      country: "Luxembourg",
      flag: "🇱🇺",
      title: "Headquarters",
      company: "Amaraa Global Corporation Ltd.",
      address: "15 Rue Edward Steichen, L-2540 Luxembourg City, Grand Duchy of Luxembourg",
      focus: "Global Holding HQ; Strategic Governance; Corporate Control",
      icon: Building2
    },
    {
      country: "Switzerland",
      flag: "🇨🇭",
      title: "Swiss Operations",
      address: "Rue du Rhône 118, 1204 Geneva, Switzerland",
      focus: "High Horology Brand; Swiss Precision Manufacturing",
      icon: Globe
    },
    {
      country: "Singapore",
      flag: "🇸🇬",
      title: "Asia Pacific Hub",
      address: "80 Robinson Road, #10-01, Singapore 068898",
      focus: "Venture Capital, Innovation, Logistics Intelligence",
      icon: Briefcase
    },
    {
      country: "United Arab Emirates",
      flag: "🇦🇪",
      title: "Capital & MENA Region",
      address: "Unit 502, Level 5, Index Tower, Dubai International Financial Centre, Dubai, UAE",
      focus: "Capital Markets; M&A; Regional Investments",
      icon: Building2
    },
    {
      country: "United States",
      flag: "🇺🇸",
      title: "North American Investment Arm",
      address: "745 Fifth Avenue, Suite 500, New York, NY 10151, USA",
      focus: "US Strategic Equity, Partnerships, Deal Structuring",
      icon: Briefcase
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      title: "Family Office & Capital Markets",
      address: "1 Mayfair Place, London W1J 8AJ, United Kingdom",
      focus: "Family Office, Wealth Structuring, Asset Management",
      icon: Globe
    },
    {
      country: "India",
      flag: "🇮🇳",
      title: "Development & Strategic Talent",
      address: "10th floor Panchsil Business Park, Laxman Nagar, Baner, Pune 411045",
      focus: "Technology, ESG, Research, Compliance Back Office",
      icon: Building2
    }
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-10 bg-white dark:bg-black transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-hoa-gold/10 rounded-full mb-6">
            <Globe className="w-8 h-8 text-[#c6a35d]" />
          </div>
          <h2 className="text-6xl font-bold text-[#c6a35d] mb-6 font-serif">
            Global <span className="text-[#c6a35d]">Presence</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-hoa-gold to-[#c6a35d] mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Connect with House of Amaraa across our worldwide network of strategic locations and partnerships.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-bold text-hoa-charcoal dark:text-white mb-12 text-center font-serif">
            Our Global Network
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalLocations.map((location, index) => {
              const IconComponent = location.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-[#1a1a1a] backdrop-blur-sm hover:bg-white dark:hover:bg-hoa-charcoal/60">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{location.flag}</span>
                        <div>
                          <h4 className="font-bold text-hoa-charcoal dark:text-white text-lg">
                            {location.country}
                          </h4>
                          <p className="text-hoa-gold font-semibold text-sm">
                            {location.title}
                          </p>
                        </div>
                      </div>
                      <IconComponent className="w-6 h-6 text-hoa-gold/60 grup-hover:text-hoa-gold transition-colors" />
                    </div>

                    {location.company && (
                      <h5 className="font-semibold text-hoa-charcoal dark:text-white mb-3">
                        {location.company}
                      </h5>
                    )}

                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="w-4 h-4 text-hoa-gold mt-1 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {location.address}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                        {location.focus}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold text-hoa-charcoal dark:text-white mb-8 font-serif">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Ready to explore opportunities with House of Amaraa? Reach out to our team for partnerships,
                investments, or general inquiries.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-0 shadow-lg bg-white/90 dark:bg-[#1a1a1a] backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-hoa-gold/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-hoa-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hoa-charcoal dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+91 22 1234 5678</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 dark:bg-[#1a1a1a] backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-hoa-gold/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-hoa-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hoa-charcoal dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@amaraagroups.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-2xl bg-white/95 dark:bg-[#1a1a1a] backdrop-blur-sm">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-8 font-serif">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-3">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 border-gray-300 dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold dark:bg-hoa-charcoal/30 transition-all duration-200"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-3">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 border-gray-300 dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold dark:bg-hoa-charcoal/30 transition-all duration-200"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-3">
                      Phone Number *
                    </label>
                    <PhoneInput
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md focus:border-hoa-gold focus:ring-hoa-gold dark:bg-hoa-charcoal/30 transition-all duration-200 resize-none"
                      placeholder="Tell us about your inquiry, partnership opportunity, or how we can help..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 bg-[#c6a35d] text-white font-bold text-lg shadow-lg hover:shadow-xl cursor-pointer hover:bg-[#c6a35d] transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}