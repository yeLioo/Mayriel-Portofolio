export default function SkillsSection() {
  const skills = [
    "UI/UX",
    "Figma",
    "Canva",
    "Unity",
    "JavaScript",
    "HTML",
    "Tailwind CSS",
    "Python",
    "React",
    "Next.js",
  ]
  return (
    <section id="skills" className="py-16 px-8 bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg mb-12">
      <h2 className="text-4xl font-bold text-primary mb-8 text-center text-balance">Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {skills.map((s) => (
          <span key={s} className="rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-foreground">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
