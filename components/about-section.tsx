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
                <Image src="/professional-portrait.png" alt="Profile photo" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer with a love for creating elegant solutions to complex problems. With
                expertise in modern web technologies, I specialize in building responsive, user-friendly applications
                that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
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
