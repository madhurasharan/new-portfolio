import { motion } from 'framer-motion';
import { HiArrowDownTray, HiCodeBracketSquare } from 'react-icons/hi2';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell flex min-h-[calc(100vh-4rem)] items-center justify-center py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary"
        >
          Software Developer
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-4xl font-bold leading-tight text-white sm:text-6xl"
        >
          <span className="block text-2xl font-medium text-slate-300 sm:text-3xl">
            {"Hi There! \u{1F44B}\u{1F3FB}"}
          </span>
          <span className="mt-4 block">I&apos;m Madhura S N</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          Aspiring Software Developer and Computer Science student passionate about
          building web applications, writing technical blogs, and continuously learning
          new technologies.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#projects" className="primary-btn gap-2">
            <HiCodeBracketSquare size={18} />
            View Projects
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn gap-2"
          >
            <HiArrowDownTray size={18} />
            My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
