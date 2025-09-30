import type React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-8 flex items-center justify-between bg-white bg-opacity-70 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <Link href="#" className="text-2xl font-bold text-primary font-sans" prefetch={false}>
        Pulkeria Mayriel R. G.
      </Link>
      <nav className="hidden md:flex space-x-6">
        <Link href="#about" className="text-gray-700 hover:text-primary transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="#experience" className="text-gray-700 hover:text-primary transition-colors" prefetch={false}>
          Experience
        </Link>
        <Link href="#skills" className="text-gray-700 hover:text-primary transition-colors" prefetch={false}>
          Skills
        </Link>
        <Link href="#projects" className="text-gray-700 hover:text-primary transition-colors" prefetch={false}>
          Projects
        </Link>
        <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>
      <button className="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors">
        <MenuIcon className="h-6 w-6 text-gray-700" />
      </button>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
