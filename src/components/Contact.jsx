import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  {
    icon: FaEnvelope,
    label: 'Email',
    href: 'mailto:mail.madhurasn@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/madhurasharan/',
  },
  {
    icon: FaMedium,
    label: 'Medium',
    href: 'https://madhurasharan66.medium.com/',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/madhurasharan',
  },
  {
    icon: SiLeetcode,
    label: 'LeetCode',
    href: 'https://leetcode.com/u/madhurasharan66/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
          Contact
        </p>
        <h2 className="section-title">Find me online.</h2>
        <p className="section-subtitle mx-auto">
          I&apos;m always open to internships, collaborations, and conversations around
          software, web development, and learning.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-brand-primary hover:text-brand-accent md:h-16 md:w-16"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
