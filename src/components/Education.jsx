import { GraduationCap, Calendar, Award, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const education = [
  {
    school: "Hacktiv8",
    degree: "Full Stack JavaScript Immersive Program Remote",
    period: "November 2024 – March 2025",
    location: "Jakarta, Indonesia",
  },
  {
    school: "Digital Skola",
    degree: "Data Scientist Program Remote",
    period: "December 2023 – March 2024",
    location: "Jakarta, Indonesia",
  },
  {
    school: "Digital Skola",
    degree: "Data Engineer Program Remote",
    period: "July 2023 – September 2023",
    location: "Jakarta, Indonesia",
  },
  {
    school: "Telkom University",
    degree: "Bachelor of Information Technology",
    period: "2019 – 2023",
    location: "Bandung, Indonesia",
    gpa: "GPA 3.35/4.00",
  },
];

const certifications = [
  {
    name: "Data Engineer Associate",
    issuer: "Digital Skola",
    date: "September 2023",
  },
  {
    name: "Data Scientist Associate",
    issuer: "Digital Skola",
    date: "March 2024",
  },
  {
    name: "Associate Data Scientist (BNSP)",
    issuer: "National Professional Certification Agency",
    date: "March 2024",
  },
  { name: "Internship Certificate", issuer: "Mizan Amanah", date: "June 2024" },
  { name: "CSS (Basic)", issuer: "HackerRank", date: "February 2025" },
  { name: "JavaScript (Basic)", issuer: "HackerRank", date: "February 2025" },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "February 2025",
  },
  { name: "React (Basic)", issuer: "HackerRank", date: "February 2025" },
  { name: "SQL (Basic)", issuer: "HackerRank", date: "February 2025" },
];

export default function Education() {
  return (
    <SectionWrapper id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-mono text-sm tracking-wider uppercase">
            // Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <GraduationCap size={22} className="text-primary-light" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-5 card-hover relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                  <div className="pl-3">
                    <h4 className="text-white font-semibold">{edu.school}</h4>
                    <p className="text-sm text-slate-300 mt-0.5">
                      {edu.degree}
                    </p>
                    {edu.gpa && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-primary/10 text-primary-light rounded-md font-mono">
                        {edu.gpa}
                      </span>
                    )}
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-2">
                      <Calendar size={12} />
                      {edu.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <Award size={22} className="text-accent" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 card-hover group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center shrink-0 group-hover:from-accent/30 group-hover:to-primary/30 transition-all">
                    <Award size={18} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm text-white font-semibold truncate">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-slate-400">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-slate-500 font-mono shrink-0 hidden sm:block">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
