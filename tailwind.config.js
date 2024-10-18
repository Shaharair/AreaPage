import Container from 'postcss/lib/container';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxHeight:{
      Container:"1280px"
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif',]
    }
  },
  plugins: [],
}