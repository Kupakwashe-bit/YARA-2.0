import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
