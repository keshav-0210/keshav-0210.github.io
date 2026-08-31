'use client';

import { motion } from 'framer-motion';
import profile from '@/data/profile.json';
import social from '@/data/social.json';
import VisitCounter from '@/components/VisitCounter';

export default function ConnectSection() {
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

  const getSocialIcon = (platform: string) => {
    const iconMap: { [key: string]: string } = {
      github: '🐙',
      linkedin: '💼',
      instagram: '📸',
      twitter: '𝕏',
      email: '✉️',
    };
    return iconMap[platform.toLowerCase()] || '🔗';
  };

  return (
    <section id="connect" className="min-h-screen bg-gradient-to-b from-dark to-primary py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-16 text-center">
            <span className="text-gradient">LET&apos;S</span> <span className="text-accent">CONNECT</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-accent mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-accent/60 font-mono text-xs mb-2">EMAIL</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-lg text-neutral hover:text-accent transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>

                <div>
                  <p className="text-accent/60 font-mono text-xs mb-2">PHONE</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-lg text-neutral hover:text-accent transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>

                <div>
                  <p className="text-accent/60 font-mono text-xs mb-2">LOCATION</p>
                  <p className="text-lg text-neutral">{profile.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-accent mb-8">Follow Me</h3>
              
              <div className="space-y-4">
                {social.social
                  .filter(s => !s.status || s.status !== 'placeholder')
                  .map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.05,
                        x: 10,
                        boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                      }}
                      className="flex items-center gap-4 p-4 rounded-lg border-2 border-accent/20 bg-dark/50 hover:border-accent/50 transition-colors"
                    >
                      <span className="text-2xl">{getSocialIcon(link.platform)}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-neutral">{link.platform}</p>
                        <p className="text-accent/60 font-mono text-xs truncate">
                          {link.url}
                        </p>
                      </div>
                      <span className="text-accent">→</span>
                    </motion.a>
                  ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-20 border-t border-accent/20 text-center"
          >
            <p className="text-neutral/80 mb-8">
              Whether you want to discuss research, collaborate on a project, or just say hi&mdash;I&apos;d love to hear from you.
            </p>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 rounded-lg font-mono font-semibold transition-all duration-300"
            >
              SEND ME AN EMAIL
            </motion.a>
            <VisitCounter />
            <div className="mt-6 flex justify-center">
              <a href="https://info.flagcounter.com/UhvV" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://s01.flagcounter.com/map/UhvV/size_s/txt_000000/border_CCCCCC/pageviews_0/viewers_0/flags_0/"
                  alt="Visitor world map by country"
                  className="rounded-md border border-accent/20"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
