/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1428',
        accent: '#00D9FF',
        secondary: '#9D4EDD',
        tertiary: '#FF6B35',
        neutral: '#F0F4F8',
        dark: '#0A0E27',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-geist-mono)'],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite',
        'data-flow': 'dataFlow 3s ease-in-out infinite',
        scan: 'scan 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
        dataFlow: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        scan: {
          '0%, 100%': { transform: 'scaleX(0)' },
          '50%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
