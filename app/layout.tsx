import type React from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

export const metadata = {
  title: "Pulkeria Mayriel's Portfolio",
  description:
    "A portfolio website for Pulkeria Mayriel Rheimitz Godeliva, a Computer Science student specializing in Multi Media Systems.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
