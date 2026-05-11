"use client"

import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 bg-[#0D1B2A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#00D4AA] font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8F4F1] mb-6">
            Contact Us
          </h2>
          <p className="text-[#8aa3b8] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our club?
            We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold text-[#E8F4F1] mb-6">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#8aa3b8] text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#0A0F1E] border border-[#1a2744] rounded-lg text-[#E8F4F1] placeholder-[#8aa3b8]/50 focus:border-[#00D4AA] focus:outline-none focus:ring-1 focus:ring-[#00D4AA] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#8aa3b8] text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@example.com"
                    className="w-full px-4 py-3 bg-[#0A0F1E] border border-[#1a2744] rounded-lg text-[#E8F4F1] placeholder-[#8aa3b8]/50 focus:border-[#00D4AA] focus:outline-none focus:ring-1 focus:ring-[#00D4AA] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#8aa3b8] text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-[#0A0F1E] border border-[#1a2744] rounded-lg text-[#E8F4F1] placeholder-[#8aa3b8]/50 focus:border-[#00D4AA] focus:outline-none focus:ring-1 focus:ring-[#00D4AA] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#8aa3b8] text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-[#0A0F1E] border border-[#1a2744] rounded-lg text-[#E8F4F1] placeholder-[#8aa3b8]/50 focus:border-[#00D4AA] focus:outline-none focus:ring-1 focus:ring-[#00D4AA] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#00D4AA] text-[#0A0F1E] font-semibold rounded-lg hover:bg-[#00e6b8] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold text-[#E8F4F1] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00D4AA]/10 border border-[#00D4AA]/30 rounded-lg flex items-center justify-center text-[#00D4AA] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#8aa3b8] text-sm">Email</p>
                  <a href="mailto:robotics@cut.ac.zw" className="text-[#E8F4F1] hover:text-[#00D4AA] transition-colors">
                    robotics@cut.ac.zw
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00D4AA]/10 border border-[#00D4AA]/30 rounded-lg flex items-center justify-center text-[#00D4AA] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#8aa3b8] text-sm">Phone</p>
                  <a href="tel:+263781856876" className="text-[#E8F4F1] hover:text-[#00D4AA] transition-colors">
                    +263 781 856 876
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00D4AA]/10 border border-[#00D4AA]/30 rounded-lg flex items-center justify-center text-[#00D4AA] flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#8aa3b8] text-sm">WhatsApp</p>
                  <p className="text-[#E8F4F1]">Chat on WhatsApp</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00D4AA]/10 border border-[#00D4AA]/30 rounded-lg flex items-center justify-center text-[#00D4AA] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#8aa3b8] text-sm">Office</p>
                  <p className="text-[#E8F4F1]">Chinhoyi University of Technology</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-[#0A0F1E] border border-[#1a2744] rounded-xl p-6">
              <h4 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-[#E8F4F1] mb-4">
                Working Hours
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8aa3b8]">Monday - Friday</span>
                  <span className="text-[#E8F4F1]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8aa3b8]">Saturday</span>
                  <span className="text-[#E8F4F1]">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8aa3b8]">Sunday</span>
                  <span className="text-[#E8F4F1]">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
