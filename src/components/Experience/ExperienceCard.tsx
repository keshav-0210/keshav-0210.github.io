'use client';

import { motion } from 'framer-motion';
import experience from '@/data/experience.json';

export default function ExperienceSection() {
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
    <section id="experience" className="min-h-screen bg-gradient-to-b from-dark to-primary py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-16">
            <span className="text-gradient">EXPERIENCE</span> <span className="text-accent">&</span> <span className="text-secondary">ACHIEVEMENTS</span>
          </motion.h2>

          {/* Internship */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-accent mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experience.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="pl-6 border-l-4 border-tertiary/50 hover:border-tertiary transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-neutral">{exp.title}</h4>
                      <p className="text-tertiary font-mono text-sm">{exp.company}</p>
                    </div>
                    <span className="text-accent/60 font-mono text-xs">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <p className="text-neutral/70 mb-3">{exp.description}</p>
                  <p className="text-accent/60 font-mono text-xs mb-3">Guide: {exp.guide}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-neutral/80 text-sm flex items-start gap-3">
                        <span className="text-accent">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Teaching Assistant */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-accent mb-8">Teaching Assistant</h3>
            <div className="space-y-6">
              {experience.teaching.map((ta, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="pl-6 border-l-4 border-secondary/50 hover:border-secondary transition-colors"
                >
                  <h4 className="text-lg font-semibold text-neutral mb-1">{ta.course}</h4>
                  <p className="text-secondary font-mono text-sm mb-2">{ta.institution}</p>
                  <p className="text-neutral/70 text-sm mb-2">{ta.description}</p>
                  <p className="text-accent/60 font-mono text-xs">
                    {ta.startDate} – {ta.endDate} {ta.semesters && `• ${ta.semesters} semesters`}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-accent mb-8">Awards & Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experience.awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-lg border-2 border-secondary/30 bg-dark/50 hover:border-secondary/60 transition-colors"
                >
                  <h4 className="font-semibold text-neutral mb-2">{award.title}</h4>
                  <p className="text-secondary/70 font-mono text-xs mb-2">
                    {award.institution || award.event} • {award.year}
                  </p>
                  {award.description && (
                    <p className="text-neutral/70 text-sm">{award.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hackathons */}
          {experience.hackathons.length > 0 && (
            <motion.div variants={itemVariants} className="mt-16">
              <h3 className="text-2xl font-bold text-accent mb-8">Hackathons</h3>
              <div className="space-y-4">
                {experience.hackathons.map((hackathon, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg border-2 border-tertiary/30 bg-dark/50"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-neutral">{hackathon.title}</h4>
                        <p className="text-tertiary/70 font-mono text-xs">{hackathon.year}</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-mono rounded-md bg-tertiary/20 text-tertiary">
                        {hackathon.status === 'result-awaited' ? 'Result Awaited' : hackathon.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
