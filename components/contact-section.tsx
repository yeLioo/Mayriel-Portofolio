"use client"

import { useState } from "react"
import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const contactLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "www.linkedin.com/in/mayriel-godeliva",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yeLioo",
    color: "hover:text-[#333]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/mayriel_iyel",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mayrielgodelivaa@gmail.com",
    color: "hover:text-[#EA4335]",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/6281919052005",
    color: "hover:text-[#25D366]",
  },
]

export function ContactSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">Let's connect and create something amazing together</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border transition-all duration-300",
                  "hover:shadow-xl hover:scale-110 hover:border-primary",
                  hoveredLink === link.name && "shadow-xl scale-110 border-primary",
                )}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300",
                    "group-hover:bg-primary group-hover:rotate-12",
                  )}
                >
                  <Icon
                    className={cn(
                      "w-7 h-7 text-primary transition-colors duration-300",
                      "group-hover:text-primary-foreground",
                    )}
                  />
                </div>
                <span className="text-sm font-medium text-foreground">{link.name}</span>
              </a>
            )
          })}
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
