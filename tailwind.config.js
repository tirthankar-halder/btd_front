/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}", // catch any top-level files like App.jsx or InputDesign.tsx
  ],
  theme: {
    extend: {
      colors: {
        githubDark: '#161b22',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // use whatever font you're using
      },
    },
  },
  plugins: [],
};


