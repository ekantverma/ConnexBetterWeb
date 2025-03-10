/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // Centers the container
      padding: '1rem', // Adds padding for smaller devices
      screens: {
        sm: '100%',   // Full width for small devices
        md: '100%',   // Full width for medium devices
        lg: '1024px', // 1024px for larger devices
        xl: '1280px', // Maximum width of 1280px
        '2xl': '1280px', // Keeps the same for larger screens
      },
    },
extend: {
  keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' 
          },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
colors:{
      "primery":"#0052cc",
      "secondary":"#f5f7ff",
      "tertiary":"#f8f8f8",
      "paracolor":"#555555"
     },
    },
    
  },
  plugins: [require('tailwind-scrollbar'),],
}

