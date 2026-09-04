'use client';

import { motion } from 'framer-motion';
import profile from '@/data/profile.json';
import education from '@/data/education.json';
import { getInstitutionLogo } from '@/lib/logos';

export default function AboutSection() {
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
    <section id="about" className="min-h-screen bg-gradient-to-b from-primary to-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-16">
            <span className="text-gradient">ABOUT</span> <span className="text-accent">KESHAV</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Identity Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)' }}
              className="p-8 rounded-lg border-2 border-accent/20 bg-dark/50 backdrop-blur-sm"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient mb-2">{profile.displayName}</h3>
              </div>

              <p className="text-neutral/80 mb-6 leading-relaxed">{profile.introduction}</p>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-accent/60 font-mono mb-1">📍 LOCATION</p>
                  <p className="text-neutral">{profile.location}</p>
                </div>
                <div>
                  <p className="text-accent/60 font-mono mb-1">✉️ EMAIL</p>
                  <a href={`mailto:${profile.email}`} className="text-accent hover:text-accent/80">
                    {profile.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-accent mb-6">Education</h3>
              <div className="space-y-6">
                {education.education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg border-2 border-accent/20 bg-dark/30 hover:border-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {getInstitutionLogo(edu.universityShort || edu.school) && (
                        <img
                          src={getInstitutionLogo(edu.universityShort || edu.school)!}
                          alt={edu.universityShort || edu.school}
                          className="w-6 h-6 object-contain rounded"
                        />
                      )}
                      <h4 className="font-semibold text-neutral">{edu.displayAs || edu.degree}</h4>
                    </div>
                    <p className="text-neutral/70 text-sm mb-2">{edu.universityShort || edu.school}</p>
                    {edu.cgpa && <p className="text-accent/60 text-xs">CGPA: {edu.cgpa}</p>}
                    {edu.percentage && <p className="text-accent/60 text-xs">Score: {edu.percentage}%</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Facts */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-accent mb-8">Quick Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Students Mentored', value: '80+' },
                { label: 'Postgraduate CGPA', value: '9.0' },
                { label: 'Undergraduate CGPA', value: '9.02' },
              ].map((fact, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-lg border-2 border-accent/20 bg-dark/50 text-center"
                >
                  <p className="text-accent text-3xl font-bold mb-2">{fact.value}</p>
                  <p className="text-neutral/70 text-sm font-mono">{fact.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
