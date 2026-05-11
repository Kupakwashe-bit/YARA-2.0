"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Active Members" },
  { value: "5+", label: "Years Experience" },
  { value: "3", label: "Core Technologies" },
]

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Innovation-Driven Approach",
    description:
      "We constantly explore emerging technologies to provide cutting-edge solutions that give our members a competitive edge.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Student-Centered Development",
    description:
      "We collaborate closely with our members, ensuring that every project is tailored to their learning objectives.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Commitment to Excellence",
    description:
      "Quality is at the core of everything we do, from design and development to testing and deployment.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Expert Team",
    description:
      "Our talented members bring diverse skills and experience to every project.",
  },
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
      id="about"
      className="relative py-24 md:py-32 bg-[#0A0F1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#00D4AA] font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase mb-4">
            About Us
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#00D4AA]">Innovate Local</span>
            <br />
            <span className="text-[#E8F4F1]">Build Global</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Description & Highlights */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[#8aa3b8] text-lg leading-relaxed mb-8">
              <span className="text-[#E8F4F1] font-semibold">C.U.T Robotics Club</span> is
              a forward-thinking student organization specializing in creating innovative
              robotics solutions. Our team of passionate engineers combines technical
              knowledge with creative thinking to deliver exceptional results.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex items-center gap-3 text-[#00D4AA] mb-2">
                    {item.icon}
                    <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-semibold text-[#E8F4F1]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#8aa3b8] text-sm leading-relaxed pl-9">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats & Mission/Vision */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-[#0D1B2A] border border-[#1a2744] rounded-xl p-6 text-center transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <p className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold text-[#00D4AA] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[#8aa3b8] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <div className="bg-[#0D1B2A] border border-[#1a2744] rounded-xl p-6">
                <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-[#E8F4F1] mb-3">
                  Our Mission
                </h3>
                <p className="text-[#8aa3b8] text-sm leading-relaxed">
                  To empower students with innovative robotics knowledge and hands-on
                  experience that drives growth, improves efficiency, and enhances
                  technical capabilities.
                </p>
              </div>
              <div className="bg-[#0D1B2A] border border-[#1a2744] rounded-xl p-6">
                <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-[#E8F4F1] mb-3">
                  Our Vision
                </h3>
                <p className="text-[#8aa3b8] text-sm leading-relaxed">
                  To be the leading robotics club in Africa, fostering innovation and
                  technical excellence while staying ahead in a rapidly evolving
                  technology environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
