import { motion } from 'framer-motion';
import { HiAcademicCap, HiCpuChip, HiUser } from 'react-icons/hi2';

const skills = [
  'Java',
  'MySQL',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Data Structures',
  'DBMS',
  'Operating Systems',
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function About() {
  return (
    <section id="about" className="section-shell py-24">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
          About Me
        </p>
        <h2 className="section-title">Turning ideas into solid engineering.</h2>
        <p className="section-subtitle">
          I&apos;m Madhura S N, a software developer focused on clean implementation,
          practical problem solving, and building thoughtful web experiences.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card p-8"
        >
          <HiUser className="mb-5 text-3xl text-brand-primary" />
          <h3 className="mb-4 text-xl font-semibold text-white">Short Bio</h3>
          <p className="text-sm leading-7 text-slate-300">
            I enjoy building dependable software systems with strong backend logic and a
            smooth user experience. My work blends Java fundamentals, modern React UIs,
            and a deep interest in database-driven applications.
          </p>
        </motion.article>

        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8"
        >
          <HiAcademicCap className="mb-5 text-3xl text-brand-accent" />
          <h3 className="mb-4 text-xl font-semibold text-white">Education</h3>
          <div className="space-y-3 text-sm text-slate-300">
            <p className="font-semibold text-white">B.E Computer Science</p>
            <p>Acharya Institute of Technology</p>
            <p>CGPA: 8.9</p>
          </div>
        </motion.article>

        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8"
        >
          <HiCpuChip className="mb-5 text-3xl text-brand-primary" />
          <h3 className="mb-4 text-xl font-semibold text-white">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
