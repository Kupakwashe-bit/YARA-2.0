import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectById, getAllProjectIds } from "@/lib/projects-data"

export function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)
  
  if (!project) {
    return { title: "Project Not Found" }
  }
  
  return {
    title: `${project.title} | C.U.T Robotics Club`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const statusColors = {
    Completed: "bg-green-500/20 text-green-400 border-green-500/30",
    "In Progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Planning: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  }

  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1E]/90 backdrop-blur-md border-b border-[#1a2744]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#8aa3b8] hover:text-[#00D4AA] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1a2744]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent" />
            </div>

            {/* Project Info */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
                <span className="px-3 py-1 bg-[#1a2744] text-[#00D4AA] text-xs rounded-full capitalize">
                  {project.category}
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8F4F1] mb-6">
                {project.title}
              </h1>

              <p className="text-[#8aa3b8] text-lg leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-[#0D1B2A] border border-[#1a2744] rounded-xl p-4 text-center">
                  <p className="text-[#00D4AA] font-[family-name:var(--font-orbitron)] text-2xl font-bold">
                    {project.teamSize}
                  </p>
                  <p className="text-[#8aa3b8] text-sm">Team Members</p>
                </div>
                <div className="bg-[#0D1B2A] border border-[#1a2744] rounded-xl p-4 text-center">
                  <p className="text-[#00D4AA] font-[family-name:var(--font-orbitron)] text-2xl font-bold">
                    {project.duration}
                  </p>
                  <p className="text-[#8aa3b8] text-sm">Duration</p>
                </div>
                <div className="bg-[#0D1B2A] border border-[#1a2744] rounded-xl p-4 text-center">
                  <p className="text-[#00D4AA] font-[family-name:var(--font-orbitron)] text-2xl font-bold">
                    {project.year}
                  </p>
                  <p className="text-[#8aa3b8] text-sm">Year</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#1a2744] text-[#00D4AA] text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Challenges */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-[#0A0F1E] border border-[#1a2744] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00D4AA]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00D4AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-[#E8F4F1]">
                  Key Features
                </h2>
              </div>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00D4AA] rounded-full mt-2 shrink-0" />
                    <span className="text-[#8aa3b8]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="bg-[#0A0F1E] border border-[#1a2744] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#FF6B35]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-[#E8F4F1]">
                  Challenges Overcome
                </h2>
              </div>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 shrink-0" />
                    <span className="text-[#8aa3b8]">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl md:text-3xl font-bold text-[#E8F4F1] text-center mb-12">
            Technologies Used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-[#0D1B2A] border border-[#1a2744] rounded-xl p-6 hover:border-[#00D4AA]/50 transition-colors"
              >
                <div className="w-12 h-12 bg-[#00D4AA]/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00D4AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-[#E8F4F1] mb-2">
                  {tech.name}
                </h3>
                <p className="text-[#8aa3b8] text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl md:text-3xl font-bold text-[#E8F4F1] text-center mb-4">
            Project Outcomes
          </h2>
          <p className="text-[#8aa3b8] text-center mb-12 max-w-2xl mx-auto">
            Key achievements and milestones reached during the development of this project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {project.outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#0A0F1E] border border-[#1a2744] rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-[#00D4AA]/20 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#00D4AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[#E8F4F1]">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0A0F1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl md:text-3xl font-bold text-[#E8F4F1] mb-4">
            Interested in This Project?
          </h2>
          <p className="text-[#8aa3b8] mb-8">
            Want to learn more or contribute to this project? Get in touch with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-4 bg-[#00D4AA] text-[#0A0F1E] font-semibold rounded-lg hover:bg-[#00D4AA]/90 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/#projects"
              className="px-8 py-4 border border-[#1a2744] text-[#E8F4F1] font-semibold rounded-lg hover:border-[#00D4AA] hover:text-[#00D4AA] transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-16 bg-[#0A0F1E]" />
    </main>
  )
}
