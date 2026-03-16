import { motion } from 'framer-motion';

const githubUsername = 'madhurasharan';

const statCards = [
  {
    title: 'Contributions',
    src: `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&text_color=e2e8f0&icon_color=22c55e&ring_color=38bdf8`,
  },
  {
    title: 'Top Languages',
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=e2e8f0`,
  },
  {
    title: 'Streak Stats',
    src: `https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&hide_border=true&ring=38bdf8&fire=22c55e&currStreakLabel=e2e8f0&sideLabels=e2e8f0&currStreakNum=e2e8f0&sideNums=e2e8f0&dates=94a3b8`,
  },
];

export default function GitHubStats() {
  return (
    <section id="github-stats" className="section-shell py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
          GitHub Stats
        </p>
        <h2 className="section-title">GitHub activity.</h2>
        <p className="section-subtitle">Live stats from the `madhurasharan` profile.</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {statCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-card overflow-hidden p-4"
          >
            <p className="mb-4 px-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              {card.title}
            </p>
            <img src={card.src} alt={card.title} className="h-auto w-full rounded-2xl" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
