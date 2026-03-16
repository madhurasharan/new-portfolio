import { motion } from 'framer-motion';
import { HiTrophy } from 'react-icons/hi2';

const achievements = [
  'Acharya INNOVATEX 24 - Winner',
  'Eureka 24 - Selected for zonal round (IIT Bombay)',
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
          Achievements
        </p>
        <h2 className="section-title">Recognition that reflects consistency and curiosity.</h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card flex flex-col gap-5 p-6 sm:flex-row sm:items-start md:p-8"
          >
            <div className="rounded-2xl bg-brand-accent/15 p-4 text-brand-accent">
              <HiTrophy size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{achievement}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                A milestone that reflects practical problem-solving, strong fundamentals,
                and the drive to keep improving through real-world challenges.
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
