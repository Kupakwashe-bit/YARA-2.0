"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: "all" | "autonomous" | "ai" | "mechatronics"
  image: string
}

export const projects: Project[] = [
  {
    id: "campus-delivery-robot",
    title: "Campus Delivery Robot",
    description:
      "An autonomous delivery robot capable of navigating indoor environments with obstacle detection and package handoff.",
    tags: ["ROS2", "Computer Vision", "Path Planning"],
    category: "autonomous",
    image: "/images/projects/delivery-robot.jpg",
  },
  {
    id: "smart-waste-sorter",
    title: "Smart Waste Sorter",
    description:
      "AI-powered waste sorting system using computer vision to categorize and sort recyclables automatically.",
    tags: ["Machine Learning", "Python", "TensorFlow"],
    category: "ai",
    image: "/images/projects/waste-sorter.jpg",
  },
  {
    id: "agricultural-drone",
    title: "Agricultural Drone",
    description:
      "Precision agriculture drone system for crop monitoring and irrigation optimization using multispectral imaging.",
    tags: ["Drone", "Sensors", "IoT"],
    category: "autonomous",
    image: "/images/projects/agricultural-drone.jpg",
  },
  {
    id: "robotic-arm-controller",
    title: "Robotic Arm Controller",
    description:
      "6-DOF robotic arm with inverse kinematics and real-time trajectory planning for industrial applications.",
    tags: ["Arduino", "C++", "3D Printing"],
    category: "mechatronics",
    image: "/images/projects/robotic-arm.jpg",
  },
  {
    id: "object-recognition-system",
    title: "Object Recognition System",
    description:
      "Real-time object detection and classification system for autonomous navigation and manipulation tasks.",
    tags: ["Computer Vision", "YOLO", "OpenCV"],
    category: "ai",
    image: "/images/projects/object-recognition.jpg",
  },
  {
    id: "line-following-robot",
    title: "Line Following Robot",
    description:
      "Competition-ready line following robot with PID control and adaptive speed for various track conditions.",
    tags: ["Embedded", "PID Control", "Sensors"],
    category: "mechatronics",
    image: "/images/projects/line-follower.jpg",
  },
]

const categories = [
  { id: "all", label: "All" },
  { id: "autonomous", label: "Autonomous" },
  { id: "ai", label: "AI" },
  { id: "mechatronics", label: "Mechatronics" },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("all")

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

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  )

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 md:py-32 bg-[#0D1B2A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#00D4AA] font-[family-name:var(--font-orbitron)] text-sm tracking-widest uppercase mb-4">
            Our Work
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8F4F1] mb-6">
            Featured Projects
          </h2>
          <p className="text-[#8aa3b8] text-lg max-w-2xl mx-auto">
            Explore our portfolio of robotics solutions across various applications.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-[#00D4AA] text-[#0A0F1E]"
                  : "bg-[#1a2744] text-[#8aa3b8] hover:text-[#E8F4F1]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`group bg-[#0A0F1E] border border-[#1a2744] rounded-xl overflow-hidden hover:border-[#00D4AA]/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-[#E8F4F1] mb-3">
                  {project.title}
                </h3>
                <p className="text-[#8aa3b8] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#1a2744] text-[#00D4AA] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-[#00D4AA] text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#1a2744] text-[#E8F4F1] font-semibold rounded-lg hover:border-[#00D4AA] hover:text-[#00D4AA] transition-all duration-200"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
