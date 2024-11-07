/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  presets: [require('nativewind/preset')],  // NativeWind preset for Tailwind CSS
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ['SpaceMono_400Regular', 'monospace'],
        inter: ['Inter_400Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
