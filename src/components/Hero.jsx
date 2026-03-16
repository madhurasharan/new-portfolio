import { motion } from 'framer-motion';
import { HiArrowDownTray, HiCodeBracketSquare } from 'react-icons/hi2';
import profileIllustration from '../assets/profile-illustration.svg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell flex min-h-screen items-center py-20 sm:py-24"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary"
          >
            Java Backend Developer
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl xl:text-7xl"
          >
            Madhura S N
            <span className="block bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Building scalable backend systems with Java and modern web technologies
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            I craft robust backend foundations, intuitive interfaces, and polished digital
            experiences that bring performance and usability together.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#projects" className="primary-btn gap-2">
              <HiCodeBracketSquare size={18} />
              View Projects
            </a>
            <a href="/Madhura-SN-Resume.txt" download className="secondary-btn gap-2">
              <HiArrowDownTray size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/20 blur-3xl" />
          <div className="glass-card relative overflow-hidden p-4 shadow-glow">
            <div className="absolute right-4 top-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <img
              src={profileIllustration}
              alt="Developer profile illustration"
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
