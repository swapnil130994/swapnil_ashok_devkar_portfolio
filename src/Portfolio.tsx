import React, { useState } from "react";
import { Mail, Phone, Linkedin, Download, Github, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Insurance Management Platform",
      company: "Fyntune Solutions Pvt. Ltd.",
      stack: "CodeIgniter · Slim · Laravel · React.js · MySQL · REST APIs",
      bullets: [
        "Led end-to-end development of Elephant Broker Portal and core user management systems.",
        "Integrated Razorpay and third-party policy APIs, improving process automation by 30%.",
        "Enhanced security and scalability through optimized architecture and role-based access control.",
      ],
    },
    {
      title: "Media Analytics Platform",
      company: "CNBCTV18 (via Nimap Infotech)",
      stack: "PHP · MySQL · Big Data Analytics",
      bullets: [
        "Engineered campaign and brand analytics dashboards for real-time insights.",
        "Designed dynamic reporting tools to monitor engagement and conversion metrics.",
        "Streamlined content workflows, boosting platform reliability and response times.",
      ],
    },
    {
      title: "Event & Enterprise Tools",
      company: "Chkdin Technologies",
      stack: "Laravel · JavaScript · MySQL",
      bullets: [
        "Developed enterprise-grade event management APIs and automation pipelines.",
        "Built scalable solutions for internal tools and custom client deployments.",
      ],
    },
    {
      title: "HRMS & Big Data Dashboards",
      company: "Toshniwal Industries Pvt. Ltd.",
      stack: "PHP · CodeIgniter · MySQL",
      bullets: [
        "Created HRMS platform and analytics dashboards for workforce productivity tracking.",
        "Automated internal reporting, improving data accuracy and visibility.",
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
    "RESTful APIs",
    "Razorpay Integration",
    "AWS Basics",
    "Docker",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 scroll-smooth">
      {/* ======= Navbar ======= */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-semibold text-slate-800 tracking-tight">
            Swapnil<span className="text-blue-600">Devkar</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <ul className="flex flex-col items-center py-3 space-y-3 text-slate-700 font-medium">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ======= Hero Section ======= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Hi, I’m <span className="text-blue-600">Swapnil Devkar</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Senior Software Engineer | Full Stack Developer | DevOps Enthusiast
          </p>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
            Experienced in designing and developing enterprise web solutions using
            <span className="text-blue-600 font-medium"> Laravel</span>,
            <span className="text-blue-600 font-medium"> React.js</span>,
            <span className="text-blue-600 font-medium"> MySQL</span>, and
            <span className="text-blue-600 font-medium"> RESTful APIs</span>.
            Focused on building scalable, secure, and performance-driven applications.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="/Swapnil_Ashok_Devkar_Resume.pdf"
              className="px-6 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 flex items-center justify-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* ======= Main Content ======= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* About Me */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-3">About Me</h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Innovative and results-driven Senior Software Engineer with over 7 years
              of experience in full-stack web development, system architecture, and
              DevOps automation. Proven expertise in building enterprise-grade applications,
              leading cross-functional teams, and implementing CI/CD pipelines for
              continuous delivery and performance optimization.
            </p>
          </motion.section>

          {/* Skills */}
          <motion.section
            id="skills"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-3">Core Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs sm:text-sm px-3 py-1 rounded-full border border-slate-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-3">Certifications</h2>
            <ul className="text-sm sm:text-base text-slate-700 space-y-2">
              <li>✅ Red Hat Certified System Administrator (RHCSA)</li>
              <li>✅ Red Hat Certified Engineer (RHCE)</li>
            </ul>
          </motion.section>
        </aside>

        {/* Projects & Education */}
        <main className="lg:col-span-2 space-y-8">
          {/* Projects */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Professional Projects</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <motion.article
                  key={p.title}
                  whileHover={{ scale: 1.03 }}
                  className="p-5 sm:p-6 border border-slate-100 rounded-xl bg-gradient-to-tr from-white to-blue-50 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-slate-800">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
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

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-slate-100"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-3">Education</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700">
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

      {/* ======= Contact Section ======= */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 border-t border-slate-200 py-10 text-center"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Let’s Connect</h2>
        <p className="text-slate-600 mb-6">
          Open to full-time, contract, or freelance opportunities in software engineering,
          full-stack development, or DevOps automation.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-slate-700">
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

      {/* ======= Footer ======= */}
      <footer className="py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Swapnil Ashok Devkar — Designed & Built with 💙 React + Tailwind
      </footer>
    </div>
  );
}
