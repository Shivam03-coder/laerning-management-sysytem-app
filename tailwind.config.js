/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#001f3f",
        secondary: "#f2f8ff",
        light: "#ffffff",
        paleblue: "#d4e7fc",
        paledark: "#f7f9fb",
        darkred: "#1c1c1c",
      },
      fontFamily: {
        spaceMono: ["SpaceMono_400Regular", "monospace"],
        inter: ["Inter_400Regular", "sans-serif"],
        koho: ["KoHo_400Regular", "monospace"],
        raleway: ["Raleway_600SemiBold", "monospace"],
      },
    },
  },
  plugins: [],
};
