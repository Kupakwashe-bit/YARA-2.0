"use client"

import { useEffect, useRef, useState } from "react"

const teamMembers = [
  { name: "Amara Okonkwo", role: "President", initials: "AO" },
  { name: "Kwame Asante", role: "VP Engineering", initials: "KA" },
  { name: "Fatima Diallo", role: "Lead Developer", initials: "FD" },
  { name: "Chijioke Eze", role: "Mechanical Lead", initials: "CE" },
  { name: "Zara Mbeki", role: "AI/ML Lead", initials: "ZM" },
  { name: "Thabo Molefe", role: "Electronics Lead", initials: "TM" },
  { name: "Nia Osei", role: "Project Manager", initials: "NO" },
  { name: "Kofi Mensah", role: "Outreach Lead", initials: "KM" },
]

export function TeamSection() {
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
      id="team"
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
            Our <span className="text-[#00D4AA]">Team</span>
          </h2>
          <div className="w-24 h-1 bg-[#00D4AA] mx-auto mb-6" />
          <p className="text-[#8aa3b8] text-lg max-w-2xl mx-auto">
            Meet the passionate innovators driving Y.A.R.A forward.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className={`bg-[#0A0F1E] border border-[#1a2744] rounded-xl p-6 text-center border-t-4 border-t-[#00D4AA] hover:border-[#00D4AA]/50 hover:shadow-lg hover:shadow-[#00D4AA]/10 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00D4AA] to-[#0A0F1E] flex items-center justify-center border-2 border-[#00D4AA]">
                <span className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-[#E8F4F1]">
                  {member.initials}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-[#E8F4F1] mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[#00D4AA] text-sm font-medium">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
