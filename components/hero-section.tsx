"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles with different animations */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-secondary/20 animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-primary/5 animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-accent/10 animate-float"
          style={{
            transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-sparkle" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-sparkle-delayed" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary rounded-full animate-sparkle-slow" />

        <div className="absolute bottom-24 right-12 animate-hop">
          <div className="relative w-16 h-16">
            {/* Bunny body */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg" />
            {/* Bunny ears */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1">
              <div className="w-2 h-8 bg-white rounded-full shadow-md transform -rotate-12" />
              <div className="w-2 h-8 bg-white rounded-full shadow-md transform rotate-12" />
            </div>
            {/* Bunny face */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
            </div>
            {/* Bunny nose */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full" />
            {/* Bunny tail */}
            <div className="absolute bottom-1 right-0 w-3 h-3 bg-white rounded-full shadow-md" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-in-up">
            Hi, I'm{" "}
            <span className="text-primary inline-block hover:scale-110 transition-transform duration-300 cursor-default">
              Mayriel Godeli 
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto animate-fade-in-up-delayed">
            A passionate developer crafting beautiful and functional digital experiences
          </p>
          <div className="pt-8 animate-fade-in-up-more-delayed">
            <Button
              size="lg"
              className="group relative overflow-hidden"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className="relative z-10 flex items-center">
                View my work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </span>
              <div
                className={`absolute inset-0 bg-primary/20 transition-transform duration-300 ${
                  isHovering ? "translate-y-0" : "translate-y-full"
                }`}
              />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
