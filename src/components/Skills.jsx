import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",
    borderColor: "border-blue-500/30",
    hoverBg: "hover:bg-blue-500/10",
    dotColor: "bg-blue-400",
    skills: [
      "React JS",
      "Redux",
      "Vue.js",
      "React Native",
      "HTML & CSS",
      "Tailwind CSS",
      "Pinia",
      "Apollo Client",
    ],
  },
  {
    title: "Backend",
    color: "from-purple-500 to-pink-400",
    borderColor: "border-purple-500/30",
    hoverBg: "hover:bg-purple-500/10",
    dotColor: "bg-purple-400",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "REST API",
      "Sequelize",
      "Redis",
    ],
  },
  {
    title: "Tools & Cloud",
    color: "from-amber-500 to-orange-400",
    borderColor: "border-amber-500/30",
    hoverBg: "hover:bg-amber-500/10",
    dotColor: "bg-amber-400",
    skills: [
      "JavaScript",
      "TypeScript",
      "Git & GitHub",
      "AWS",
      "Apollo Server",
      "Looker Studio",
      "Power BI",
      "SQL",
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 px-4 bg-dark-light/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-mono text-sm tracking-wider uppercase">
            // Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 card-hover"
            >
              <h3
                className={`text-lg font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${category.borderColor} ${category.hoverBg} bg-dark/40 text-slate-300 text-sm transition-all duration-300 cursor-default`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${category.dotColor}`}
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
