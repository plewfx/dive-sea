/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    fontSize: {
      navLink: '1.25vw'
    },
    padding: {
      18: '1.25vw'
    },
    borderRadius: {
      DEFAULT: '1.1vw',
    },
    colors: {
      black: {
        0: '#000000',
        100: '#141416',
      },
      white: '#ffffff',
      'grey': {
        0: '#EDEDED',
        100: '#C2C3CB',
        200: '#606060',
        300: '#F9F9F9',
      },
    },
    maxWidth: {
      container: '86%'
    }
  }
  
}