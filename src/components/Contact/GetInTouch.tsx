"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/card/Card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-hoa-charcoal/30 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-hoa-charcoal dark:text-white mb-8 font-serif">
            Get In <span className="text-hoa-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-hoa-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with us to explore opportunities, partnerships, or to learn more about House of Amaraa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-8 font-serif">
              Contact Information
            </h3>

            <div className="space-y-6">
              <Card className="border-0 shadow-sm bg-white dark:bg-hoa-charcoal/50">
                <CardContent className="p-6 flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-hoa-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-hoa-charcoal dark:text-white mb-2">Address</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      715, Samarth Aishwarya,
                      <br />
                      Oshiwara, Andheri West,
                      <br />
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white dark:bg-hoa-charcoal/50">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-hoa-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-hoa-charcoal dark:text-white mb-2">Phone</h4>
                    <p className="text-gray-700 dark:text-gray-300">+91 22 1234 5678</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white dark:bg-hoa-charcoal/50">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-hoa-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-hoa-charcoal dark:text-white mb-2">Email</h4>
                    <p className="text-gray-700 dark:text-gray-300">info@houseofamaraa.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Interactive Map</p>
              </div>
            </div>
          </div>

          <div>
            <Card className="border-0 shadow-lg bg-white dark:bg-hoa-charcoal/50">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-8 font-serif">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-gray-300 dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold dark:bg-hoa-charcoal/30"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gray-300 dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold dark:bg-hoa-charcoal/30"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-300 dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold dark:bg-hoa-charcoal/30"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-hoa-gold border w-full dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold dark:bg-hoa-charcoal/30"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-hoa-gold hover:bg-hoa-gold/90 text-white font-semibold py-3 text-lg"
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