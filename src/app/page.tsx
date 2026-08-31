'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/About/Identity';
import ResearchSection from '@/components/Research/ResearchGraph';
import ProjectsSection from '@/components/Projects/ProjectCard';
import ExperienceSection from '@/components/Experience/ExperienceCard';
import PersonalSection from '@/components/Personal/Interests';
import ConnectSection from '@/components/Connect/Footer';
import AriaAssistant from '@/components/ARIA/AriaAssistant';
import { useSound } from '@/hooks/useSound';
import { SOUNDS } from '@/lib/constants';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { play, isMuted, toggleMute } = useSound();

  useEffect(() => {
    // Trigger loading sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
      // Play startup sound
      play(SOUNDS.startup);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, [play]);

  return (
    <main className="bg-primary text-neutral overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00D9FF,transparent)]" />
      </div>

      {/* Sound Control */}
      <motion.button
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-30 p-3 rounded-full border-2 border-accent/50 text-accent hover:border-accent hover:bg-accent/10 transition-all"
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? '🔇' : '🔊'}
      </motion.button>

      {/* Loading Sequence */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
      >
        <div className="text-center">
          <div className="mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-2 border-accent rounded-full border-t-transparent mx-auto"
            />
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-accent font-mono text-sm tracking-widest"
          >
            SYSTEM INITIALIZING...
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isLoaded ? 200 : 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="mt-4 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded"
          />
        </div>
      </motion.div>

      {/* Navbar */}
      {showContent && <Navbar />}

      {/* Hero Section */}
      <motion.div
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32"
      >
        {/* Central Orb */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: showContent ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
          className="mb-12"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative w-32 h-32"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-secondary to-accent opacity-30 blur-xl" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-2 rounded-full border-2 border-accent"
            />
            <div className="absolute inset-4 rounded-full bg-primary border-2 border-accent/50 flex items-center justify-center">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="text-3xl font-bold text-gradient">K</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-3">
            <span className="text-glow">KESHAV</span>
            <br />
            <span className="text-gradient">SHARMA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ delay: 0.6 }}
            className="text-accent font-mono tracking-widest text-sm"
          >
            Postgraduate Researcher — IIIT Delhi
          </motion.p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="text-neutral/80 text-lg text-center max-w-2xl mb-16"
        >
          Building AI that learns, adapts, and discovers in the real world.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full"
        >
          {[
            { label: 'MEET KESHAV', href: '#about' },
            { label: 'EXPLORE RESEARCH', href: '#research' },
            { label: 'SEE WHAT I\'VE BUILT', href: '#projects' },
            { label: 'PERSONAL WORLD', href: '#personal' },
          ].map((action, idx) => (
            <motion.a
              key={idx}
              href={action.href}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 rounded-lg font-mono text-sm font-semibold transition-all duration-300 text-center"
            >
              {action.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 hidden md:flex flex-col items-center"
        >
          <p className="text-accent/50 text-xs font-mono mb-3">SCROLL TO EXPLORE</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-accent rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* All Sections */}
      {showContent && (
        <>
          <AboutSection />
          <ResearchSection />
          <ProjectsSection />
          <ExperienceSection />
          <PersonalSection />
          <ConnectSection />
          <AriaAssistant />
        </>
      )}
    </main>
  );
}
