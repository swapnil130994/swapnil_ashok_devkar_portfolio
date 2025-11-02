import React from "react";
import { Mail, Phone, Linkedin, Download, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Insurance Management Platform",
      company: "Fyntune Solutions Pvt. Ltd.",
      stack: "CodeIgniter · Slim · Laravel · React.js · MySQL · REST APIs",
      bullets: [
        "Led development of Elephant Broker Portal and user management modules",
        "Integrated Razorpay and third-party policy APIs — improved automation by 30%",
        "Implemented role-based access and performance optimizations",
      ],
    },
    {
      title: "Media Analytics Platform",
      company: "CNBCTV18 (via Nimap Infotech)",
      stack: "PHP · MySQL · Big Data Analytics",
      bullets: [
        "Built campaign and brand analytics modules",
        "Designed dashboards to surface engagement metrics",
        "Optimized CMS workflows for reliability and speed",
      ],
    },
    {
      title: "Event & Enterprise Tools",
      company: "Chkdin Technologies",
      stack: "Laravel · JavaScript · MySQL",
      bullets: [
        "Architected event-management APIs and deployment pipelines",
        "Delivered custom event automation tools (Marriage Tool)",
      ],
    },
    {
      title: "HRMS & Big Data Dashboards",
      company: "Toshniwal Industries Pvt. Ltd.",
      stack: "PHP · CodeIgniter · MySQL",
      bullets: [
        "Developed HRMS and internal analytics dashboards",
        "Automated reporting and improved data visibility",
      ],
    },
  ];

  const skills = [
    "Laravel",
    "CodeIgniter",
    "Slim",
    "React.js",
    "JavaScript (ES6+)",
    "HTML5/CSS3",
    "MySQL",
    "PL/SQL",
    "Linux (RHCSA/RHCE)",
    "Git",
    "CI/CD",
    "Razorpay Integration",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-slate-800">
            Swapnil<span className="text-blue-600">Devkar</span>
          </h1>
          <ul className="flex gap-5 text-sm font-medium text-slate-700">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Hi, I’m <span className="text-blue-600">Swapnil Devkar</span>
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Senior Software Engineer · Full Stack & DevOps Enthusiast
          </p>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Building modern, scalable, and high-performance web platforms using
            <span className="text-blue-600 font-medium"> CodeIgniter</span>,
            <span className="text-blue-600 font-medium"> Slim</span>,
            <span className="text-blue-600 font-medium"> Laravel</span>,
            <span className="text-blue-600 font-medium"> React.js</span>, and
            <span className="text-blue-600 font-medium"> CI/CD automation</span>.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="/Swapnil_Ashok_Devkar_Resume.pdf"
              className="px-5 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* About + Skills + Projects */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Left Side */}
        <aside className="lg:col-span-1 space-y-6">
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-3">About Me</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              I am an innovative and detail-oriented Senior Software Engineer with 7+ years
              of experience building scalable web applications and DevOps pipelines. 
              I focus on clean architecture, measurable performance, and leading teams
              towards product excellence.
            </p>
          </motion.section>

          <motion.section
            id="skills"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-3">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1 rounded-full border border-slate-200 bg-blue-50 text-blue-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-3">Certifications</h2>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>✅ Red Hat Certified System Administrator (RHCSA)</li>
              <li>✅ Red Hat Certified Engineer (RHCE)</li>
            </ul>
          </motion.section>
        </aside>

        {/* Projects & Education */}
        <main className="lg:col-span-2 space-y-8">
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {projects.map((p) => (
                <motion.article
                  key={p.title}
                  whileHover={{ scale: 1.03 }}
                  className="p-5 border border-slate-100 rounded-xl bg-gradient-to-tr from-white to-blue-50 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-slate-800">{p.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {p.company} • {p.stack}
                  </p>
                  <ul className="mt-3 text-sm list-disc list-inside text-slate-700 space-y-1">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-3">Education</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <div className="font-medium">B.Tech – Computer Science & Engineering</div>
                <div>Rajasthan Technical University, Kota (2015–2017)</div>
              </div>
              <div>
                <div className="font-medium">Diploma – Computer Science & Engineering</div>
                <div>Board of Technical Education, Rajasthan (2012–2015)</div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/70 border-t border-slate-100 py-10 text-center"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Let’s Connect</h2>
        <p className="text-slate-600 mb-6">
          Open to new opportunities and collaborations. Drop a message!
        </p>
        <div className="flex justify-center gap-6 text-slate-700">
          <a href="tel:+917891851771" className="flex items-center gap-2 hover:text-blue-600">
            <Phone size={18} /> +91-7891851771
          </a>
          <a href="mailto:er.swapnil1315@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
            <Mail size={18} /> er.swapnil1315@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/swapnil-devkar-377716116/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://github.com/swapnil130994" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600">
            <Github size={18} /> GitHub
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Swapnil Ashok Devkar — Designed & Built with 💙 React + Tailwind
      </footer>
    </div>
  );
}
