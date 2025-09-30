import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-end justify-center overflow-hidden min-h-[70vh] md:min-h-[80vh] pb-12"
    >
      <Image
        src="/images/title-hero.png"
        alt="Mayriel's Portfolio sketch with notes and arrows"
        fill
        priority
        sizes="100vw"
        className="object-contain mix-blend-multiply"
        style={{ background: "transparent" }}
      />


      <div className="relative z-10">
        <Link
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {"View My Work"}
        </Link>
      </div>
    </section>
  )
}
