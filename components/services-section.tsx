"use client"

import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Autonomous Systems",
    description:
      "Custom autonomous robots capable of navigation, obstacle detection, and intelligent decision-making.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    features: [
      "Computer Vision Navigation",
      "Path Planning Algorithms",
      "Obstacle Detection & Avoidance",
      "Real-time Decision Making",
      "ROS2 Integration",
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by machine learning and artificial intelligence for robotics applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Object Recognition Systems",
      "Natural Language Processing",
      "Predictive Maintenance",
      "Reinforcement Learning",
      "Neural Network Models",
    ],
  },
  {
    title: "Mechatronics Design",
    description:
      "End-to-end mechanical and electronic design for custom robotics solutions and prototypes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      "3D CAD Modeling",
      "PCB Design & Fabrication",
      "Embedded Systems",
      "Sensor Integration",
      "Rapid Prototyping",
    ],
  },
]

export function ServicesSection() {
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
      id="what-we-do"
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
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8F4F1] mb-6">
            Our Technical Expertise
          </h2>
          <p className="text-[#8aa3b8] text-lg max-w-2xl mx-auto">
            We provide cutting-edge robotics solutions to help students and innovators
            thrive in the technology era.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group bg-[#0D1B2A] border border-[#1a2744] rounded-xl p-8 hover:border-[#00D4AA]/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#00D4AA]/10 border border-[#00D4AA]/30 rounded-lg flex items-center justify-center text-[#00D4AA] mb-6 group-hover:bg-[#00D4AA]/20 transition-colors">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-[#E8F4F1] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#8aa3b8] text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[#8aa3b8] text-sm">
                    <span className="text-[#00D4AA] mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
