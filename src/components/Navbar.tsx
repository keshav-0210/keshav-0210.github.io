'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SECTIONS } from '@/lib/constants';
import { useTheme } from '@/hooks/useTheme';

interface NavbarProps {
  currentSection?: string;
}

export default function Navbar({ currentSection = SECTIONS.HOME }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'HOME', section: SECTIONS.HOME },
    { label: 'ABOUT', section: SECTIONS.ABOUT },
    { label: 'RESEARCH', section: SECTIONS.RESEARCH },
    { label: 'PROJECTS', section: SECTIONS.PROJECTS },
    { label: 'EXPERIENCE', section: SECTIONS.EXPERIENCE },
    { label: 'PERSONAL', section: SECTIONS.PERSONAL },
    { label: 'CONNECT', section: SECTIONS.CONNECT },
  ];

  const navigateToSection = (section: string) => {
    if (section === SECTIONS.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-primary/80 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gradient"
        >
          KS
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.section}
              onClick={() => navigateToSection(item.section)}
              whileHover={{ textShadow: '0 0 10px rgba(0, 217, 255, 0.5)' }}
              className={`text-sm font-mono transition-colors duration-300 ${
                currentSection === item.section
                  ? 'text-accent'
                  : 'text-neutral/60 hover:text-accent'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-label="Toggle theme"
            className="text-lg text-accent border border-accent/40 rounded-full w-9 h-9 flex items-center justify-center hover:bg-accent/10"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            className="text-lg text-accent border border-accent/40 rounded-full w-8 h-8 flex items-center justify-center"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </motion.button>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 relative w-8 h-6"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={isOpen ? { rotate: i === 1 ? 0 : 45 * (i === 0 ? 1 : -1), y: i === 1 ? 8 : 0 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-accent"
              />
            ))}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark border-t border-accent/20"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <motion.button
                key={item.section}
                onClick={() => {
                  navigateToSection(item.section);
                  setIsOpen(false);
                }}
                className={`block w-full text-left text-sm font-mono py-2 transition-colors ${
                  currentSection === item.section
                    ? 'text-accent'
                    : 'text-neutral/60 hover:text-accent'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
