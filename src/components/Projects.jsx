import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Employee Task Tracker',
    description:
      'A full stack task management application featuring REST APIs for CRUD operations, MySQL persistence, and a React frontend for tracking work efficiently.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'React'],
    github:
      'https://github.com/search?q=user%3Amadhurasharan+employee-task-tracker&type=repositories',
  },
  {
    title: 'Phishing Detection using Email Parsing & ML',
    description:
      'An email phishing detection system built with intelligent parsing and a Random Forest classifier that achieved 95% accuracy.',
    stack: ['Python', 'Machine Learning', 'Random Forest', 'Email Parsing'],
    github:
      'https://github.com/search?q=user%3Amadhurasharan+phishing+detection+email+parsing&type=repositories',
  },
  {
    title: 'Weather App',
    description:
      'A responsive React weather application using the OpenWeatherMap API with fast city search and a clean UI for real-time weather updates.',
    stack: ['React', 'API Integration', 'CSS', 'JavaScript'],
    github:
      'https://github.com/search?q=user%3Amadhurasharan+weather+app&type=repositories',
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
        <h2 className="section-title">Selected projects.</h2>
        <p className="section-subtitle">
          A few projects that reflect my interest in full stack development, machine
          learning, and practical product building.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="group glass-card flex h-full flex-col p-7 transition duration-300 hover:border-brand-primary/40"
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
            <div className="flex">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn w-full gap-2 px-4 py-2.5"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
