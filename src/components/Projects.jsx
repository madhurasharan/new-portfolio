import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Employee Task Tracker',
    description:
      'A full stack task management application featuring REST APIs for CRUD operations, MySQL persistence, and a React frontend for tracking work efficiently.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'React'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Phishing Detection using Email Parsing & ML',
    description:
      'An email phishing detection system built with intelligent parsing and a Random Forest classifier that achieved 95% accuracy.',
    stack: ['Python', 'Machine Learning', 'Random Forest', 'Email Parsing'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    title: 'Weather App',
    description:
      'A responsive React weather application using the OpenWeatherMap API with fast city search and a clean UI for real-time weather updates.',
    stack: ['React', 'API Integration', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
          Projects
        </p>
        <h2 className="section-title">Selected work that reflects how I build.</h2>
        <p className="section-subtitle">
          These projects combine backend architecture, clean APIs, practical interfaces,
          and a strong focus on usability.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ y: -8 }}
            className="group glass-card flex h-full flex-col p-7 transition duration-300 hover:border-brand-primary/50 hover:bg-white/[0.08]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 text-xl text-brand-primary">
              0{index + 1}
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mb-6 flex-1 text-sm leading-7 text-slate-300">
              {project.description}
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn flex-1 gap-2 px-4 py-2.5"
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="primary-btn flex-1 gap-2 px-4 py-2.5"
              >
                <HiArrowTopRightOnSquare size={16} />
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
