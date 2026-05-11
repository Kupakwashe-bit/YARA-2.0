"use client"

import { useEffect, useRef, useState } from "react"

interface Project {
  title: string
  description: string
  status: string
  progress?: number
  tags: string[]
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    title: "Delivery Robot",
    description:
      "An autonomous campus delivery robot capable of navigating indoor environments, obstacle detection, and package handoff — powered by computer vision and real-time path planning.",
    status: "95% Complete",
    progress: 95,
    tags: ["Autonomous", "Computer Vision", "ROS2", "Path Planning"],
  },
  {
    title: "Agricultural Drone",
    description:
      "Precision agriculture drone system for crop monitoring, irrigation optimization, and pest detection using multispectral imaging.",
    status: "Coming Soon",
    tags: ["Drone", "Agriculture", "AI", "Sensors"],
    comingSoon: true,
  },
  {
    title: "Assistive Exoskeleton",
    description:
      "Lightweight exoskeleton prototype designed to assist individuals with mobility challenges in daily activities.",
    status: "Coming Soon",
    tags: ["Wearable", "Medical", "IoT", "Biomechanics"],
    comingSoon: true,
  },
  {
    title: "Smart Waste Sorter",
    description:
      "AI-powered waste sorting system using computer vision to automatically categorize and sort recyclables from general waste.",
    status: "Coming Soon",
    tags: ["Sustainability", "Computer Vision", "Automation"],
    comingSoon: true,
  },
]

function ProgressRing({ progress, isVisible }: { progress: number; isVisible: boolean }) {
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-28 h-28 mx-auto mb-4">
      <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#1a2744"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#00D4AA"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={isVisible ? strokeDashoffset : circumference}
          className="progress-ring-circle"
          style={{
            transition: "stroke-dashoffset 1.5s ease-out",
            filter: "drop-shadow(0 0 6px rgba(0, 212, 170, 0.5))",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-[#00D4AA]">
          {progress}%
        </span>
      </div>
    </div>
  )
}

function ProjectCard({ project, isVisible, index }: { project: Project; isVisible: boolean; index: number }) {
  return (
    <article
      className={`bg-[#0A0F1E] border border-[#1a2744] rounded-xl p-6 hover:border-[#00D4AA]/50 hover:shadow-lg hover:shadow-[#00D4AA]/10 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Status Badge */}
      <div className="flex justify-between items-start mb-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            project.comingSoon
              ? "bg-[#1a2744] text-[#8aa3b8]"
              : "bg-[#00D4AA]/20 text-[#00D4AA] animate-pulse-glow"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Progress Ring (only for delivery robot) */}
      {project.progress && <ProgressRing progress={project.progress} isVisible={isVisible} />}

      {/* Title */}
      <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-[#E8F4F1] mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[#8aa3b8] text-sm leading-relaxed mb-4 text-pretty">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-[#1a2744] text-[#00D4AA] text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Button */}
      <button
        className={`w-full py-2 rounded-lg font-semibold transition-all duration-200 ${
          project.comingSoon
            ? "bg-[#1a2744] text-[#8aa3b8] cursor-not-allowed"
            : "bg-[#00D4AA] text-[#0A0F1E] hover:bg-[#00e6b8] hover:scale-[1.02]"
        }`}
        disabled={project.comingSoon}
      >
        {project.comingSoon ? "Coming Soon" : "View Details"}
      </button>
    </article>
  )
}

export function ProjectsSection() {
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
      id="projects"
      className="relative py-24 md:py-32 bg-[#0A0F1E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8F4F1] mb-4">
            Current <span className="text-[#00D4AA]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#00D4AA] mx-auto mb-6" />
          <p className="text-[#8aa3b8] text-lg max-w-2xl mx-auto">
            Explore our innovative robotics projects that are shaping the future
            of African technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
