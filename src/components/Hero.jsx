import { useEffect, useState } from "react";
import { ArrowDown, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "React Enthusiast",
  "Backend Engineer",
  "JavaScript Lover",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayedText(
            isDeleting
              ? currentRole.substring(0, displayedText.length - 1)
              : currentRole.substring(0, displayedText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I'm <span className="gradient-text">Raka Mahendra</span>
        </h1>

        {/* Typing role */}
        <div
          className="text-xl sm:text-2xl lg:text-3xl font-mono text-slate-300 mb-6 h-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {"> "}
          <span className="text-accent-light">{displayedText}</span>
          <span className="text-primary-light animate-blink">|</span>
        </div>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          A passionate Full-Stack Developer specializing in modern JavaScript
          ecosystems. Building scalable web applications with React, Node.js,
          and cutting-edge technologies.
        </p>

        {/* Info pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm text-slate-300">
            <MapPin size={14} className="text-primary-light" /> Bali, Indonesia
          </span>
          <a
            href="mailto:rakamahendra750@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm text-slate-300 hover:text-white transition-colors"
          >
            <Mail size={14} className="text-primary-light" />{" "}
            rakamahendra750@gmail.com
          </a>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm text-slate-300">
            <Phone size={14} className="text-primary-light" /> +6281338059744
          </span>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-xl hover:bg-white/5 transition-all hover:scale-105 hover:border-primary-light"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="https://github.com/RakaaMahendra"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-all hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/i-putu-raka-mahendra"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-all hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-slate-500 hover:text-primary-light transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
