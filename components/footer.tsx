import type React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="py-8 px-4 md:px-8 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
        <p className="text-lg mb-6">Feel free to reach out for collaborations or just to say hello.</p>
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="https://www.linkedin.com/in/mayriel-godeliva/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-90"
          >
            <LinkedinIcon className="h-8 w-8" />
          </Link>
          <Link
            href="https://www.instagram.com/mayriel_iyel"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-90"
          >
            <InstagramIcon className="h-8 w-8" />
          </Link>
          <Link
            href="mailto:mayrielgodelivaa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-8 w-8" />
          </Link>
          <Link
            href="https://github.com/yeLioo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-90"
          >
            <GithubIcon className="h-8 w-8" />
          </Link>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Pulkeria Mayriel. All rights reserved.</p>
      </div>
    </footer>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.58 0 0-1.09-.35-3.5.42A12.2 12.2 0 0 0 12 5c-.72 0-1.44.12-2.07.38C7.9 4.65 6.81 5 6.81 5c-.5.1-.9.3-1.2.5-.3.2-.5.4-.7.7-.2.3-.3.6-.4.9-.1.3-.1.6-.1.9C4 10.5 7 12.5 10 12.5c-.3.6-.4 1.3-.4 2v4" />
      <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0 0 10 10c5.5 0 10-4.5 10-10A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}
