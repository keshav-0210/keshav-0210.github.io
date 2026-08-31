'use client';

import { motion } from 'framer-motion';
import personal from '@/data/personal.json';

export default function PersonalSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="personal" className="min-h-screen bg-gradient-to-b from-primary to-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-16">
            <span className="text-gradient">PERSONAL</span> <span className="text-tertiary">WORLD</span>
          </motion.h2>

          {/* Interests */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-accent mb-10">Interests & Hobbies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personal.interests.map((interest, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-8 rounded-lg border-2 border-tertiary/30 bg-dark/50 hover:border-tertiary/60 transition-all"
                >
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h4 className="text-xl font-bold text-neutral mb-4">{interest.category}</h4>
                  <ul className="space-y-2">
                    {interest.items.map((item, i) => (
                      <li key={i} className="text-neutral/80 text-sm flex items-center gap-2">
                        <span className="text-tertiary">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-accent mb-10">Personal Philosophy</h3>
            <div className="space-y-6">
              {personal.philosophies.map((philosophy, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-lg border-2 border-secondary/30 bg-dark/50 italic"
                >
                  <p className="text-2xl text-neutral/90 mb-3">&quot;{philosophy.idea}&quot;</p>
                  <p className="text-neutral/70">{philosophy.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
