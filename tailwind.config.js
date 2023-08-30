/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'public-sans': ['Public Sans', 'sans-serif']
    },
    fontSize: {
      12: '0.86vw',
      13: '0.933vw',
      14: '0.98vw',
      15: '1.06vw',
      16: '1.14vw',
      17: '1.18vw',
      18: '1.25vw',
      36: '2.25vw',
    },
    lineHeight: {
      120: '120%',
      150: '150%',
    },
    padding: {
      18: '1.25vw',
      21: '1.38vw',
      30: '2vw'
    },
    gap: {
      5: '0.347vw',
      10: '0.694vw',
      15: '1vw',
      20: '1.347vw',
      25: '1.694vw',
      30: '2vw',
      35: '2.347vw',
      40: '2.694vw',
      45: '3vw',
      50: '3.347vw',
      55: '3.694vw',
      60: '4vw',
      65: '4.347vw',
      100: '7vw',
    },
    borderRadius: {
      12: '0.86vw',
      14: '1vw',
      16: '1.12vw',
      17: '1.18vw',
      22: '1.55vw',
      25: '1.736vw',
    },
    colors: {
      black: {
        0: '#000000',
        100: '#141416',
        200: '#201F1F',
        300: '#23262F',
      },
      white: '#ffffff',
      'grey': {
        0: '#EDEDED',
        100: '#C2C3CB',
        200: '#606060',
        300: '#F9F9F9',
        400: '#676767',
        500: '#848586',
        600: '#FCFCFD',
      },
    },
    gridColumn: {
      50: 'repeat(2, 1fr)',
      40: '4fr 6fr'
    },
    height: {
      1: '0.07vw'
    }
  }
  
}