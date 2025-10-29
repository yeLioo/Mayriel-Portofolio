"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const technologies = [
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
]

const tools = [
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Canva", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
  { name: "Axure RP", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
]

export function SkillsSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technologies Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Technologies</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={cn(
                    "group relative bg-card rounded-xl p-4 border border-border transition-all duration-300 cursor-pointer",
                    "hover:shadow-lg hover:scale-105 hover:border-primary",
                    hoveredTech === tech.name && "shadow-lg scale-105 border-primary",
                  )}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-center text-foreground">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-foreground">Tools</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={cn(
                    "group relative bg-card rounded-xl p-4 border border-border transition-all duration-300 cursor-pointer",
                    "hover:shadow-lg hover:scale-105 hover:border-primary",
                    hoveredTool === tool.name && "shadow-lg scale-105 border-primary",
                  )}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={tool.logo || "/placeholder.svg"}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-center text-foreground">{tool.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
