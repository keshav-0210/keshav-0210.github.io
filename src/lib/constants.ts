// Sound file paths
export const SOUNDS = {
  startup: '/sounds/kai-startup.mp3',
  click: '/sounds/click.wav',
  transition: '/sounds/transition.wav',
  ambient: '/sounds/ambient.wav',
  aiResponse: '/sounds/transition.wav',
} as const;

// Animation timing
export const ANIMATION_TIMING = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 1,
} as const;

// Colors
export const COLORS = {
  primary: '#0A1428',
  accent: '#00D9FF',
  secondary: '#9D4EDD',
  tertiary: '#FF6B35',
  neutral: '#F0F4F8',
  dark: '#0A0E27',
} as const;

// Navigation sections
export const SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
  RESEARCH: 'research',
  PROJECTS: 'projects',
  EXPERIENCE: 'experience',
  PERSONAL: 'personal',
  CONNECT: 'connect',
} as const;

// KAI Assistant commands
export const ARIA_COMMANDS = {
  OPEN_ABOUT: 'OPEN_ABOUT',
  OPEN_RESEARCH: 'OPEN_RESEARCH',
  OPEN_PROJECTS: 'OPEN_PROJECTS',
  OPEN_EXPERIENCE: 'OPEN_EXPERIENCE',
  OPEN_PERSONAL: 'OPEN_PERSONAL',
  SHOW_TRAVEL_MAP: 'SHOW_TRAVEL_MAP',
  SHOW_ACHIEVEMENTS: 'SHOW_ACHIEVEMENTS',
  OPEN_CONTACT: 'OPEN_CONTACT',
  EXPLORE_THESIS: 'EXPLORE_THESIS',
  PLAY_EASTER_EGG: 'PLAY_EASTER_EGG',
  OPEN_HOME: 'OPEN_HOME',
} as const;

// Keyboard shortcuts
export const KEYBOARD_SHORTCUTS = {
  TERMINAL_MODE: '`', // Backtick
  MUTE_SOUND: 'm',
  SHOW_HELP: '?',
} as const;
