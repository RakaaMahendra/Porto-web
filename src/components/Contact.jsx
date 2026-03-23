import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="py-24 px-4 bg-dark-light/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary-light font-mono text-sm tracking-wider uppercase">
            // Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            I'm always open to new opportunities, collaborations, and
            interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 card-hover">
              <h3 className="text-lg font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:rakamahendra750@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <Mail size={20} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      rakamahendra750@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+6281338059744"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <Phone size={20} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      +6281338059744
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <MapPin size={20} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm text-slate-300">Bali, Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs text-slate-500 mb-3">Find me on</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/RakaaMahendra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-all hover:scale-110"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/i-putu-raka-mahendra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-all hover:scale-110"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass rounded-2xl p-6 card-hover">
            <h3 className="text-lg font-bold text-white mb-6">
              Send a Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const subject = encodeURIComponent(
                  `Message from ${formData.get("name")}`
                );
                const body = encodeURIComponent(formData.get("message"));
                window.location.href = `mailto:rakamahendra750@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-slate-500 mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-lighter/50 border border-white/5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all"
                  placeholder="Raka"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-slate-500 mb-1.5"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-lighter/50 border border-white/5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all"
                  placeholder="raka@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-slate-500 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-lighter/50 border border-white/5 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
