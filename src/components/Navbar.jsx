import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLaptopCode, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'GitHub', href: '#github-stats' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/madhurasharan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/madhurasharan/', label: 'LinkedIn' },
  { icon: FaMedium, href: 'https://madhurasharan66.medium.com/', label: 'Medium' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/madhurasharan66/', label: 'LeetCode' },
  { icon: FaEnvelope, href: 'mailto:mail.madhurasn@gmail.com', label: 'Email' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-semibold transition duration-300 hover:text-sky-400 md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <FaLaptopCode className="text-xl text-sky-400" />
          <span>Madhura S N</span>
        </a>

        <div className="hidden items-center gap-4 md:flex">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="text-slate-400 transition-all duration-300 hover:text-sky-400"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-white/10 p-2 text-white"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="text-slate-400 transition-all duration-300 hover:text-sky-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
