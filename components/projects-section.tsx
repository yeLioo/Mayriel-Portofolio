import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Matsuri Soda: Branding, Packaging, and UI/UX Design",
    description:
      "A product website and visual identity for Matsuri Soda, featuring branding, packaging, and responsive UI/UX prototypes built in Figma.",
    tags: ["Figma", "Canva", "UI/UX"],
    image: "/modern-ecommerce-interface.png",
    demo: "https://www.figma.com/proto/myllV6ldJHk9LkPQ0ghRfW/matsuri?node-id=0-1&t=PBL5SRo6xAmaywAj-1",
  },
  {
    title: "D'Classics Books UX Lab Project",
    description: "Prototyped (Axure RP 9) and implemented (Android Studio) D'Classics Books, a curated mobile bookstore app featuring auth, carousel, categorized repeaters, validated ordering flows, and multi-store listings.",
    tags: ["Axure.RP", "Android Studio"],
    image: "/task-management-dashboard.png",
    github: "https://github.com/yeLioo/D-Classics-Books-UX-Lab-Project",
  },
  {
    title: "Lighthouse Scene Three.js",
    description: "A real-time 3D environment showcasing procedural water, dynamic sky, and cinematic lighting. Features an animated lighthouse, boat, and birds rendered with reflection and soft shadow realism.",
    tags: ["Three.js", "JavaScript", "WebGL", "3D Animation"],
    image: "/website-builder-interface.jpg",
    github: "https://github.com/yeLioo/Lighthouse-Scene-Three.js.git",
    demo: "https://drive.google.com/file/d/1kfcjOjyti3s5hwLuPbAePNUHwUTleQ-O/view?usp=sharing",
  },
  {
    title: "Mimo: Finance Tracker (On Progress)",
    description: "Mimo is a web-based finance tracker designed to simplify budgeting and spending management with real-time data and a modern, easy-to-use interface.",
    tags: ["React.js", "Firebase", "CSS", "Figma"],
    image: "/website-builder-interface.jpg",
    demo: "https://mimo-finance-app.vercel.app/",
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
