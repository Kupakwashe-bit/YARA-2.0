"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Founded", value: "2022", suffix: "" },
  { label: "Active Members", value: "150", suffix: "+" },
  { label: "Projects Shipped", value: "12", suffix: "" },
]

const coreValues = [
  { icon: "💡", label: "Innovation" },
  { icon: "🤝", label: "Collaboration" },
  { icon: "🎯", label: "Impact" },
  { icon: "🌍", label: "African Excellence" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 bg-[#0D1B2A] diagonal-top"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8F4F1] mb-4">
            About <span className="text-[#00D4AA]">Y.A.R.A</span>
          </h2>
          <div className="w-24 h-1 bg-[#00D4AA] mx-auto" />
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-[#0A0F1E] border border-[#1a2744] rounded-xl p-8 text-center hover:border-[#00D4AA]/50 hover:shadow-lg hover:shadow-[#00D4AA]/10 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-bold text-[#00D4AA] mb-2">
                {stat.value}
                <span className="text-[#FF6B35]">{stat.suffix}</span>
              </p>
              <p className="text-[#8aa3b8] text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#E8F4F1] text-lg md:text-xl leading-relaxed text-pretty">
            Y.A.R.A empowers young African engineers and innovators to design,
            build, and deploy real-world robotics solutions — bridging the gap
            between <span className="text-[#00D4AA] font-semibold">African talent</span> and{" "}
            <span className="text-[#FF6B35] font-semibold">global technology</span>.
          </p>
        </div>

        {/* Core Values */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="font-[family-name:var(--font-orbitron)] text-xl md:text-2xl font-semibold text-[#E8F4F1] text-center mb-8">
            Our Core Values
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {coreValues.map((value) => (
              <div
                key={value.label}
                className="flex items-center gap-3 px-6 py-3 bg-[#0A0F1E] border border-[#1a2744] rounded-full hover:border-[#00D4AA]/50 transition-colors duration-300"
              >
                <span className="text-2xl" role="img" aria-label={value.label}>
                  {value.icon}
                </span>
                <span className="text-[#E8F4F1] font-medium">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
