import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, href: 'https://github.com/', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:mail.madhurasn@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Madhura S N. Crafted with React, Tailwind CSS, and
          Framer Motion.
        </p>
        <div className="flex items-center gap-4">
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
