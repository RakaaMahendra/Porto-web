import {
  ExternalLink,
  Github,
  Smartphone,
  ShoppingBag,
  BookOpen,
  Store,
  Wallet,
  Leaf,
  Building2,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Minabung",
    date: "2025",
    description:
      "Minabung is an application designed to help families plan and manage their finances together. Its main features include budget allocation for household needs, shared savings management, and expense tracking for each family member.",
    techStack: [
      "React Native",
      "Expo",
      "GraphQL",
      "Apollo",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
    ],
    icon: Wallet,
    gradient: "from-green-500 to-emerald-600",
    featured: true,
    github: "https://github.com/lakilaku/minabung.git",
    demo: "https://www.linkedin.com/posts/aqbilhafizh_final-day-selesai-sudah-perjuangan-4-bulan-ugcPost-7304789765562765312-lzrj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYEK-ABuwNz9774c0q7L19vxldeKa2f1NE",
  },
  {
    title: "Medici App",
    date: "2025",
    description:
      'A fullstack web application developed for a traditional herbal medicine business called "The Medici". Built to replace manual workflows with a fully integrated digital solution for managing product manufacturing, stock, and sales transactions.',
    techStack: [
      "React.js",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "Tailwind CSS",
      "Node.js",
    ],
    icon: Leaf,
    gradient: "from-amber-500 to-orange-600",
    featured: true,
    github: "https://github.com/RakaaMahendra/Medici-app.git",
    demo: "https://youtu.be/NlwhjXvUkD8",
  },
  {
    title: "KOJI-KOST Web App",
    date: "2025",
    description:
      "A fullstack web application built to simulate a boarding house management system. Allows users to browse available rooms, view room details, and manage room data using a structured API and database connection.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    icon: Building2,
    gradient: "from-sky-500 to-blue-600",
    featured: true,
    github: "https://github.com/RakaaMahendra/Koji-Kost.git",
    demo: "https://youtu.be/2zb4ZmOGZuE",
  },
  {
    title: "Mobile App Tiki-Taka",
    date: "February 2025",
    description:
      "A mobile application inspired by Threads, designed for social discussions and engagement. Built using Apollo GraphQL, MongoDB, and React Native for a smooth user experience.",
    techStack: ["React Native", "Apollo GraphQL", "MongoDB", "AWS"],
    icon: Smartphone,
    gradient: "from-violet-500 to-purple-600",
    featured: false,
    hideLinks: true,
  },
  {
    title: "Bimbim Store",
    date: "February 2025",
    description:
      "An e-commerce platform for selling branded shoes like Nike, Puma, and Adidas. Full-featured online store with modern design and seamless shopping experience.",
    techStack: ["Next.js", "TypeScript", "MongoDB"],
    icon: ShoppingBag,
    gradient: "from-blue-500 to-cyan-500",
    featured: false,
    hideLinks: true,
  },
  {
    title: "Kyou Blogs",
    date: "January 2025",
    description:
      "An anime blog platform providing up-to-date anime news and information. Features rich content management and responsive design.",
    techStack: [
      "React Vite",
      "Redux",
      "Express JS",
      "PostgreSQL",
      "AWS",
      "Tailwind",
    ],
    icon: BookOpen,
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
    hideLinks: true,
  },
  {
    title: "Barang-Barengan E-Commerce",
    date: "December 2024",
    description:
      "A second-hand marketplace for buying and selling pre-owned items. Connects sellers and buyers in a user-friendly platform.",
    techStack: ["Express.js", "EJS", "PostgreSQL", "AWS"],
    icon: Store,
    gradient: "from-orange-500 to-amber-500",
    featured: false,
    hideLinks: true,
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-24 px-4 bg-dark-light/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-mono text-sm tracking-wider uppercase">
            // Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            building modern web and mobile applications.
          </p>
        </div>

        {/* Featured projects - large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                {/* Project header with gradient */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}
                >
                  <project.icon
                    size={64}
                    className="text-white/30 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">
                      {project.date}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary-light border border-primary/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {!project.hideLinks && (
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          <Github size={14} /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-accent-light transition-colors"
                        >
                          <ExternalLink size={14} /> Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Other projects - smaller cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="glass rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}
                  >
                    <project.icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-slate-500 font-mono shrink-0 ml-2">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary-light border border-primary/20 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {!project.hideLinks && (
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                          >
                            <Github size={14} /> Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-accent-light transition-colors"
                          >
                            <ExternalLink size={14} /> Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
