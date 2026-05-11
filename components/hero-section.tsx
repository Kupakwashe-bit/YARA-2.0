"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1E]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00D4AA 1px, transparent 1px), linear-gradient(90deg, #00D4AA 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Gradient Orb */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00D4AA]/10 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Brand Name */}
            <h1 className="font-[family-name:var(--font-orbitron)] text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-[#00D4AA]">C.U.T</span>
              <br />
              <span className="text-[#E8F4F1]">ROBOTICS</span>
            </h1>

            {/* Tagline */}
            <p className="text-[#00D4AA] font-[family-name:var(--font-orbitron)] text-sm md:text-base tracking-widest uppercase mb-6">
              Innovate Local Build Global
            </p>

            {/* Description */}
            <p className="text-[#8aa3b8] text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Building cutting-edge robotics solutions in autonomous systems,
              AI integration, and mechatronics engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#what-we-do"
                className="px-8 py-4 bg-[#00D4AA] text-[#0A0F1E] font-semibold rounded-lg hover:bg-[#00e6b8] transition-all duration-200 text-center"
              >
                Explore Services
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-[#1a2744] text-[#E8F4F1] font-semibold rounded-lg hover:border-[#00D4AA] hover:text-[#00D4AA] transition-all duration-200 text-center"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right - Logo/Visual */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#00D4AA]/20 rounded-full blur-3xl scale-110" />
              <Image
                src="/images/logo.png"
                alt="C.U.T Robotics Club Logo"
                width={400}
                height={400}
                className="relative z-10 w-80 h-80 md:w-96 md:h-96"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#what-we-do"
          className="flex flex-col items-center gap-2 text-[#00D4AA] hover:text-[#00e6b8] transition-colors"
        >
          <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
