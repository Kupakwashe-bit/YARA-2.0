"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F1E] circuit-bg"
    >
      {/* Animated Circuit Background Overlay */}
      <div className="absolute inset-0 animate-circuit-pulse">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="circuit" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M0 10h8v2h-8zM12 10h8v2h-8zM10 0v8h2v-8zM10 12v8h2v-8z"
                fill="none"
                stroke="#00D4AA"
                strokeWidth="0.3"
              />
              <circle cx="10" cy="10" r="1.5" fill="#00D4AA" fillOpacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Robot Arm Illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-20 hidden lg:block">
        <svg viewBox="0 0 200 300" className="w-full">
          <defs>
            <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4AA" />
              <stop offset="100%" stopColor="#0A0F1E" />
            </linearGradient>
          </defs>
          {/* Base */}
          <rect x="80" y="250" width="40" height="30" rx="5" fill="url(#armGradient)" />
          {/* Lower Arm */}
          <rect x="90" y="180" width="20" height="80" rx="3" fill="#1a2744" stroke="#00D4AA" strokeWidth="1" />
          {/* Joint */}
          <circle cx="100" cy="180" r="12" fill="#0D1B2A" stroke="#00D4AA" strokeWidth="2" />
          <circle cx="100" cy="180" r="5" fill="#00D4AA" />
          {/* Upper Arm */}
          <rect x="85" y="100" width="30" height="90" rx="3" fill="#1a2744" stroke="#00D4AA" strokeWidth="1" transform="rotate(-15 100 145)" />
          {/* Shoulder Joint */}
          <circle cx="95" cy="105" r="15" fill="#0D1B2A" stroke="#00D4AA" strokeWidth="2" />
          <circle cx="95" cy="105" r="6" fill="#00D4AA" />
          {/* Gripper */}
          <path d="M60 50 L80 70 L80 90 L70 90 L70 75 L55 60 Z" fill="#1a2744" stroke="#00D4AA" strokeWidth="1" />
          <path d="M130 50 L110 70 L110 90 L120 90 L120 75 L135 60 Z" fill="#1a2744" stroke="#00D4AA" strokeWidth="1" />
          {/* Wrist */}
          <circle cx="95" cy="65" r="10" fill="#0D1B2A" stroke="#00D4AA" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Subheadline */}
          <p className="text-[#00D4AA] font-[family-name:var(--font-orbitron)] text-sm md:text-base tracking-[0.3em] mb-6">
            Y.A.R.A · YOUNG AFRICAN ROBOTICS ASSOCIATION
          </p>

          {/* Main Headline */}
          <h1 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl lg:text-7xl font-bold text-[#E8F4F1] leading-tight mb-8">
            <span className="block">Engineering Africa&apos;s Future</span>
            <span className="block text-[#00D4AA] mt-2">
              One Robot at a Time
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#8aa3b8] text-lg md:text-xl max-w-2xl mx-auto mb-10 text-pretty">
            Empowering young African innovators to design, build, and deploy
            cutting-edge robotics solutions for a better tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#00D4AA] text-[#0A0F1E] font-semibold rounded-lg hover:scale-105 hover:bg-[#00e6b8] transition-all duration-200 text-lg shadow-lg shadow-[#00D4AA]/20"
            >
              Explore Projects
            </a>
            <a
              href="#join"
              className="px-8 py-4 border-2 border-[#FF6B35] text-[#FF6B35] font-semibold rounded-lg hover:scale-105 hover:bg-[#FF6B35] hover:text-[#0A0F1E] transition-all duration-200 text-lg"
            >
              Join the Club
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#00D4AA]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
