import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    role: "Internship Remote Data Scientist",
    company: "Mizan Amanah",
    location: "Jakarta, Indonesia",
    period: "May 2024 – June 2024",
    bullets: [
      "Conducted data analysis to identify donation trends and the most in-demand charity programs.",
      "Developed interactive dashboards using Looker Studio to visualize donor behavior and program performance.",
      "Provided data-driven insights and recommendations to optimize fundraising strategies and enhance donor engagement.",
      "Collaborated with the team to improve decision-making processes by leveraging statistical analysis and predictive modeling.",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-mono text-sm tracking-wider uppercase">
            // Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark -translate-x-[7px] md:-translate-x-[8px] mt-6 animate-pulse-glow z-10" />

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-primary-light" />
                    <span className="text-primary-light font-semibold text-sm">
                      {exp.company}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-accent mt-1 shrink-0">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
