"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "RUindows MPF Lab Project",
      description:
        "Built a JavaFX prototype OS interface (RUindows) with core UI and interactions under strict constraints.",
      tags: ["JavaFX", "UI/UX"],
      link: "https://github.com/yeLioo/RUindows-MPF-Project", // Replace with your actual project link
    },
    {
      title: "D'Classics Books UX Lab Project",
      description:
        "Prototyped (Axure RP 9) and implemented (Android Studio) D'Classics Books, a curated mobile bookstore app featuring auth, carousel, categorized repeaters, validated ordering flows, and multi-store listings.",
      tags: ["Axure RP", "Android Studio"],
      link: "https://github.com/yeLioo/D-Classics-Books-UX-Lab-Project", // Replace with your actual project link
    },
    {
      title: "Bean Voyage",
      description:
        "Coffee shop website design for Bean Voyage, focused on seamless ordering and cozy brand experience.",
      tags: ["Figma", "UI/UX"],
      link: "https://www.figma.com/proto/Ro2PRxgROPw2x3uGryntdm/Bean-Voyage?node-id=1-3&p=f&t=3wCANDYqSnLp6Gnd-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3", // Replace with your actual project link
    },
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-16 px-8 bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg mb-12">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center text-balance">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            onClick={() => setSelectedProject(project)}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
              aria-label={`View ${project.title} project`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 pr-12">{project.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-primary/20 text-foreground text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{selectedProject.title}</h2>
          <p className="text-gray-800 leading-relaxed mb-6">{selectedProject.description}</p>
          <div className="flex flex-wrap gap-2">
            {selectedProject.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-primary/20 text-foreground text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
