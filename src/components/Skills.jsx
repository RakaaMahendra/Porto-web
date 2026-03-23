import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React JS", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Vue.js", level: 75 },
      { name: "React Native", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Pinia", level: 70 },
      { name: "Apollo Client", level: 75 },
    ],
  },
  {
    title: "Backend",
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 80 },
      { name: "REST API", level: 90 },
      { name: "Sequelize", level: 82 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Tools & Cloud",
    color: "from-amber-500 to-orange-400",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 75 },
      { name: "Git & GitHub", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Apollo Server", level: 78 },
      { name: "Looker Studio", level: 72 },
      { name: "Power BI", level: 65 },
      { name: "SQL", level: 85 },
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
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-dark-lighter rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
