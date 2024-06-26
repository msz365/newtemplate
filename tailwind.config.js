/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      l: "1025px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mycolor:{50:  "#05b0ca",100:"#048fa4"},
        mycolor2:{50:"#3cbff0",100:"#109bd0"},
      },
      boxShadow: {
        "3xl": "0 0 25px -10px rgba(105, 196, 166, 1)",
      
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(mycolor)/,
    },
    {
      pattern:
        /(bg|text|border)-(mycolor)-(50)/,
    },
    ],
  darkMode:'class',
};
