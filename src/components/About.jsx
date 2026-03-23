import { Code2, Database, BarChart3, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building responsive UIs with React, Vue, and React Native",
  },
  {
    icon: Database,
    title: "Backend Development",
    desc: "RESTful APIs & GraphQL with Node.js, Express, and PostgreSQL",
  },
  {
    icon: BarChart3,
    title: "Data Engineering",
    desc: "Data analysis, pipelines, and visualization with Looker Studio & SQL",
  },
  {
    icon: Zap,
    title: "Full Stack Solutions",
    desc: "End-to-end application development from concept to deployment",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-mono text-sm tracking-wider uppercase">
            // About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Passionate About{" "}
            <span className="gradient-text">Building Things</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I am a{" "}
              <span className="text-white font-semibold">
                Full-Stack Developer
              </span>{" "}
              with a strong foundation in web development, software engineering,
              and modern JavaScript frameworks. Completing a Full-Stack
              JavaScript Bootcamp has enhanced my expertise in scalable web
              applications, backend technologies, and frontend development.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Additionally, I have experience in{" "}
              <span className="text-accent-light">
                Data Science and Data Engineering
              </span>
              , specializing in data analysis, pipelines, and visualization
              using Looker Studio, Power BI, and SQL. Passionate about building
              high-performance applications, I continuously upskill through
              training and certifications to stay ahead in the industry.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-xl glass">
                <div className="text-2xl font-bold gradient-text">4+</div>
                <div className="text-xs text-slate-400 mt-1">
                  Projects Built
                </div>
              </div>
              <div className="text-center p-4 rounded-xl glass">
                <div className="text-2xl font-bold gradient-text">6+</div>
                <div className="text-xs text-slate-400 mt-1">
                  Certifications
                </div>
              </div>
              <div className="text-center p-4 rounded-xl glass">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-xs text-slate-400 mt-1">
                  Years Learning
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="p-5 rounded-xl glass card-hover group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <item.icon size={20} className="text-primary-light" />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
