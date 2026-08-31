'use client';

import { motion } from 'framer-motion';
import projects from '@/data/projects.json';

export default function ProjectsSection() {
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
    <section id="projects" className="min-h-screen bg-gradient-to-b from-primary to-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-16">
            <span className="text-gradient">WHAT I&apos;VE</span> <span className="text-tertiary">BUILT</span>
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group p-8 rounded-lg border-2 border-accent/20 bg-dark/50 backdrop-blur-sm hover:border-tertiary/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-neutral mb-2">{project.title}</h3>
                  <p className="text-accent/60 font-mono text-xs">
                    {project.startDate} – {project.endDate}
                  </p>
                </div>

                {/* Problem & Approach */}
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-accent font-mono text-xs mb-2">PROBLEM</p>
                    <p className="text-neutral/80 text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-accent font-mono text-xs mb-2">APPROACH</p>
                    <p className="text-neutral/80 text-sm">{project.approach}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 pt-6 border-t border-accent/20">
                  <p className="text-accent/60 font-mono text-xs mb-3">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-tertiary/10 border border-tertiary/30 text-tertiary font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
