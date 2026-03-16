import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi2';

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
          Experience
        </p>
        <h2 className="section-title">Hands-on work that shaped my approach.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card relative overflow-hidden p-6 sm:p-8 md:p-10"
      >
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-brand-primary/10 blur-3xl" />
        <HiBriefcase className="mb-5 text-3xl text-brand-accent" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">Web Development Intern</h3>
            <p className="mt-2 text-base text-slate-300">Sanskar Foundation (NGO)</p>
          </div>
          <span className="self-start rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-sm font-medium text-brand-primary">
            2025 - Present
          </span>
        </div>

        <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
          <li>Built responsive webpages that performed well across desktop and mobile.</li>
          <li>Worked closely with senior developers to improve implementation quality.</li>
          <li>Improved accessibility and usability across web experiences.</li>
        </ul>
      </motion.div>
    </section>
  );
}
