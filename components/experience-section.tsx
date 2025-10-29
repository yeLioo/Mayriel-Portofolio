import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const experiences = [
  {
    title: "Regional Head Volley BINUS",
    company: "BINUS University",
    period: "Apr 2025 - Present",
    description: "I led and coordinated 10+ volleyball activities, managed a team of coordinators, represented the club in regional meetings, and supported athlete development, improving team performance by 15%.",
    tags: ["Leadership", "Team Work", "Time Management", "Responsibility"],
    image: "/modern-office.png",
  },
  {
    title: "Research and Development Intern",
    company: "Homebody Homewear",
    period: "May 2025 - Jul 2025",
    description: "I assisted in developing 2 homewear collections, researching 50+ consumer insights and 10+ fabric trends, ideating 5+ product concepts, and collaborating with a 4-member team to refine designs and enhance brand identity.",
    tags: ["Trend Analysis", "Market Research", "Product Innovation"],
    image: "/collaborative-team-workspace.jpg",
  },
  {
    title: "Student Council President",
    company: "SMA Don Bosco II",
    period: "2021 - 2022",
    description: "I led 20+ members across 6 divisions, organized virtual events engaging 70% of students, and spearheaded the shift to hybrid programs with 8+ successful initiatives.",
    tags: ["Leadership", "Team Work", "Time Management", "Responsibility"],
    image: "/creative-design-studio.png",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <div className="relative h-48 md:h-full overflow-hidden">
                  <Image
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.company}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
