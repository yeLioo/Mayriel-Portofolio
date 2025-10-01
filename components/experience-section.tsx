import Image from "next/image"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Student Council President",
      company: "SMA Don Bosco II",
      duration: "2021 - 2022",
      description:
        "I led 20+ members across 6 divisions, organized virtual events engaging 70% of students, and spearheaded the shift to hybrid programs with 8+ successful initiatives.",
      image: "/foto_osis.jpg.jpeg",
    },
    {
      title: "Research and Development Intern",
      company: "Homebody Homewear",
      duration: "May 2025 - Jul 2025",
      description:
        "I assisted in developing 2 homewear collections, researching 50+ consumer insights and 10+ fabric trends, ideating 5+ product concepts, and collaborating with a 5-member team to refine designs and enhance brand identity.",
      image: "/HMBDY_intern.png",
    },
    {
      title: "Regional Head Volley BINUS",
      company: "BINUS University",
      duration: "Apr 2025 - Present",
      description:
        "I led and coordinated 10+ volleyball activities, managed a team of coordinators, represented the club in regional meetings, and supported athlete development, improving team performance by 15%.",
      image: "/regional_head.jpeg",
    },
  ]

  return (
    <section id="experience" className="py-16 px-8 bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg mb-12">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center text-balance">Experience</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={exp.image || "/placeholder.svg?height=240&width=400&query=experience"}
              alt={`${exp.title} — ${exp.company}`}
              width={400}
              height={240}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
              <p className="text-primary text-lg mb-1">{exp.company}</p>
              <p className="text-gray-600 text-sm mb-4">{exp.duration}</p>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
