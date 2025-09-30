import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-8 bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg mb-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-6 text-balance">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4 font-sans">
            As a Computer Science student at BINUS University, I’ve explored both technical and creative roles through internships, organizations, and community involvement. My experiences in market research, social media management, event coordination, and design have strengthened my skills in leadership, collaboration, and communication, especially through active roles in the Student Council, BINUS Volleyball Club, and Antiokhia.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            I’ve worked on projects ranging from designing merchandise and event visuals to contributing to product research for lifestyle brands, while also exploring UI/UX design to blend creativity with usability. Passionate about design and problem-solving, I enjoy creating meaningful experiences, whether through digital products, community events, or research-driven projects, and I’m always eager to learn, collaborate, and grow where technology meets creativity.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/FOTO IYEL.jpg"
            alt="Iyel's photo"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
