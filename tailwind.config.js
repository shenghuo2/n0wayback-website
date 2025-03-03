/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0a192f",
          light: "#f5f8ff"
        },
        secondary: {
          dark: "#64ffda", 
          light: "#009e7f"  
        },
        dark: {
          dark: "#020c1b",
          light: "#ffffff"
        },
        light: {
          dark: "#ccd6f6",
          light: "#1a1a1a"
        },
        highlight: "#ff5555",
      },
      fontFamily: {
        mono: ['"Fira Code"', "monospace"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
