import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaEnvelope,
    label: 'Email',
    href: 'mailto:mail.madhurasn@gmail.com',
    text: 'mail.madhurasn@gmail.com',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/',
    text: 'github.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    text: 'linkedin.com',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
            Contact
          </p>
          <h2 className="section-title">Let&apos;s build something meaningful together.</h2>
          <p className="section-subtitle mb-8">
            Reach out for internships, collaboration, freelance opportunities, or a quick
            conversation about backend engineering and product ideas.
          </p>

          <div className="space-y-4">
            {socialLinks.map(({ icon: Icon, label, href, text }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-card flex items-center gap-4 p-5 transition hover:border-brand-primary/40"
              >
                <span className="rounded-2xl bg-brand-primary/15 p-3 text-brand-primary">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-medium text-white">{label}</p>
                  <p className="text-sm text-slate-400">{text}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(event) => event.preventDefault()}
          className="glass-card p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm text-slate-300">Your Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-brand-primary"
              />
            </label>
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm text-slate-300">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-brand-primary"
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm text-slate-300">Subject</span>
              <input
                type="text"
                placeholder="Project or collaboration"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-brand-primary"
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm text-slate-300">Message</span>
              <textarea
                rows="6"
                placeholder="Tell me a bit about your idea..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-brand-primary"
              />
            </label>
          </div>

          <button type="submit" className="primary-btn mt-6 w-full sm:w-auto">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
