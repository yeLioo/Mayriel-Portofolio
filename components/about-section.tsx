"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const handleDownloadCV = () => {
    // Create a dummy CV download - replace with your actual CV file
    const link = document.createElement("a")
    link.href = "/cv.pdf" // Replace with your actual CV path
    link.download = "CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>
        <Card className="p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-primary/20">
                <Image src="/FOTO IYEL.jpg" alt="Profile photo" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                As a Computer Science student at BINUS University, I’ve explored both technical and creative roles through internships, organizations, and community involvement. My experiences in market research, social media management, event coordination, and design have strengthened my skills in leadership, collaboration, and communication, especially through active roles in the Student Council, BINUS Volleyball Club, and Antiokhia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I’ve worked on projects ranging from designing merchandise and event visuals to contributing to product research for lifestyle brands, while also exploring UI/UX design to blend creativity with usability. Passionate about design and problem-solving, I enjoy creating meaningful experiences, whether through digital products, community events, or research-driven projects, and I’m always eager to learn, collaborate, and grow where technology meets creativity.
              </p>
               <Button onClick={handleDownloadCV} className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                Download Resume
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
