/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      /* ───────── Custom Animations ───────── */
      keyframes: {
        // Continuous marquee
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // Drawer slides in from the right
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        // Generic fade‑in‑up (used on sections)
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        // Simple scale‑in (for headings / icons)
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        'slide-in-right': 'slide-in-right 0.5s ease-out both',
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'scale-in': 'scale-in 0.4s ease-out both',
      },

      /* ───────── Custom Palette ───────── */
      colors: {
        primery: '#0052cc',
        secondary: '#f5f7ff',
        tertiary: '#f8f8f8',
        paracolor: '#555555',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
  ],
};
