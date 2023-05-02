/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkMainBG: "#151D2F",
        darkContainerBG: "#1F2B49",
        darkBG: "#151D2F",
        accentBlue: "#0177FE",
        whiteText: "#FFFEFE",
        grey: "#8F94A5",
        whiteMainBG: "#F5F6FE",
        whiteContainerBG: "#FFFEFE",
        blackText: "#2B3340",
        textAccent: "#4A699A",
        whiteGrey: "#A5B4CD",
      },
      fontFamily: {
        spaceMono: ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

