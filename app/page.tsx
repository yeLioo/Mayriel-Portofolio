import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"
import SkillsSection from "@/components/skills-section" // add skills section

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection /> {/* insert after experience */}
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
