/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/utils/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: {
        light: "#ebebeb",
        DEFAULT: "#aaaaaa",
        dark: "#707070",
      },
      "baked-coral": {
        DEFAULT: "#ff7f51",
      },
      "blazing-rose": {
        DEFAULT: "#b83b4d",
      },
      "burnt-brick": {
        DEFAULT: "#750010",
      },
      "heated-gold": {
        DEFAULT: "#fcc454",
      },
      "burnt-brick-gradient-1": {
        DEFAULT: "#a6404a",
      },
      "burnt-brick-gradient-2": {
        DEFAULT: "#6b1216",
      },
      utility: {
        error: "#FF0000",
      },
    },
    backgroundImage: {
      "gradient-burnt-brick": "linear-gradient(180deg, rgba(107,18,22,1) 0%, rgba(166,64,74,1) 100%)"
    },
    borderRadius: {
      sm: "3px",
      DEFAULT: "8px",
      "regular": "8px",
      full: "9999px",
    },
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', ...defaultTheme.fontFamily.sans]
      },
      width: {
        "small": "440px",
        "regular": "864px",
        "large": "1040px",
        "full": "100%",
      },
      padding: {
        "9": "2.25rem",
      },
      zIndex: {
        "1": "1",
      },
      screens: {
        mobile: { max: "767px" }, // targets just mobile (used best by itself on an element)
        tablet: { max: "1023px" },
        desktop: { min: "1366px" },
      },
    },
  },
  plugins: [],
}
