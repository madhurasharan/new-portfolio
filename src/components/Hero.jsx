import { motion } from 'framer-motion';
import { HiArrowDownTray, HiCodeBracketSquare } from 'react-icons/hi2';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
    <section id="home" className="min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="w-full max-w-2xl text-center md:text-left">
            <div className="flex flex-col space-y-6">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.05}
                className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400"
              >
                Software Developer
              </motion.p>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.15}
                className="text-4xl font-bold leading-tight text-white md:text-6xl"
              >
                <span className="block text-2xl font-medium text-slate-300 sm:text-3xl">
                  Hi There <span className="wave-hand inline-block origin-[70%_70%]">{"\u{1F44B}\u{1F3FB}"}</span>
                </span>
                <span className="mt-4 block">I&apos;m Madhura S N</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.25}
                className="mx-auto max-w-xl text-base text-gray-300 md:mx-0 md:text-lg"
              >
                Aspiring Software Developer and Computer Science student passionate about
                building web applications, writing technical blogs, and continuously learning
                new technologies.
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.35}
                className="flex flex-wrap justify-center gap-4 md:justify-start"
              >
                <a href="#projects" className="primary-btn px-7 py-3 text-base">
                  <HiCodeBracketSquare size={18} />
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn px-7 py-3 text-base"
                >
                  <HiArrowDownTray size={18} />
                  My Resume
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
            className="flex w-full justify-center md:justify-end"
          >
            <div className="w-full max-w-[520px]">
              <DotLottieReact
                src="https://lottie.host/78efc3a5-a55c-4fb9-b752-2489174068c5/GalT28pVPU.lottie"
                loop
                autoplay
                style={{ width: '100%', maxWidth: '520px', height: 'auto' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
