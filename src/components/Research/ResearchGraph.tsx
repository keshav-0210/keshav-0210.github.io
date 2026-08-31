'use client';

import { motion } from 'framer-motion';
import research from '@/data/research.json';

export default function ResearchSection() {
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
    <section id="research" className="min-h-screen bg-gradient-to-b from-dark to-primary py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-16">
            <span className="text-gradient">RESEARCH</span> <span className="text-accent">&</span> <span className="text-secondary">THESIS</span>
          </motion.h2>

          {/* Thesis Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-lg border-2 border-secondary/30 bg-dark/50 backdrop-blur-sm mb-16"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-secondary mb-2">{research.thesis.title}</h3>
              <div className="flex items-center gap-2">
                <img src="/images/logos/iiitd.jpg" alt="IIIT Delhi" className="w-6 h-6 object-contain rounded" />
                <p className="text-accent/70 font-mono text-sm">{research.thesis.lab}</p>
              </div>
            </div>

            <p className="text-neutral/80 mb-6">{research.thesis.description}</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-accent/60 font-mono text-xs mb-1">GUIDE</p>
                <p className="text-neutral">{research.thesis.guide}</p>
              </div>
              <div>
                <p className="text-accent/60 font-mono text-xs mb-1">START DATE</p>
                <p className="text-neutral">{research.thesis.startDate}</p>
              </div>
              <div>
                <p className="text-accent/60 font-mono text-xs mb-1">STATUS</p>
                <p className="text-accent">{research.thesis.currentStatus}</p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="mt-8 pt-8 border-t border-accent/20">
              <p className="text-accent/60 font-mono text-xs mb-4">KEY FOCUS AREAS</p>
              <div className="flex flex-wrap gap-3">
                {research.thesis.keyFocusAreas.map((area, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full border-2 border-secondary/50 text-secondary text-sm font-mono hover:bg-secondary/10 transition-colors"
                  >
                    #{area}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Research Areas */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-accent mb-8">Research Areas</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {research.researchAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-lg border-2 border-accent/20 bg-dark/50 hover:border-accent/50 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-accent mb-2">{area.name}</h4>
                  <p className="text-neutral/80 mb-4">{area.description}</p>
                  <div className="pt-4 border-t border-accent/20">
                    <p className="text-accent/60 text-xs font-mono">
                      {area.relevance}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-accent mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {[
                { label: 'Languages', items: research.technicalSkills.programming },
                { label: 'ML Frameworks', items: research.technicalSkills.mlFrameworks },
                { label: 'Techniques', items: research.technicalSkills.techniques },
                { label: 'Tools', items: research.technicalSkills.tools },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-accent/60 font-mono text-xs mb-3">{skill.label}</p>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-md bg-accent/10 border-2 border-accent/30 text-accent text-sm font-mono hover:bg-accent/20 transition-colors"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
