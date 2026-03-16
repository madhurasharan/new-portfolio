import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socials = [
  { icon: FaGithub, href: 'https://github.com/madhurasharan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/madhurasharan/', label: 'LinkedIn' },
  { icon: FaMedium, href: 'https://madhurasharan66.medium.com/', label: 'Medium' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/madhurasharan66/', label: 'LeetCode' },
  { icon: FaEnvelope, href: 'mailto:mail.madhurasn@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Madhura S N. Crafted with React, Tailwind CSS,
          and Framer Motion.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="text-slate-400 transition hover:text-brand-primary"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
