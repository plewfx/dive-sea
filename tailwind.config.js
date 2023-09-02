/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      11: '0.76vw',
      12: '0.86vw',
      13: '0.933vw',
      14: '0.98vw',
      15: '1.06vw',
      16: '1.14vw',
      17: '1.18vw',
      18: '1.25vw',
      22: '1.52vw',
      23: '1.59vw',
      24: '1.66vw',
      28: '1.9vw',
      36: '2.25vw',
    },
    lineHeight: {
      60: '60%',
      120: '120%',
      130: '130%',
      140: '140%',
      150: '150%',
    },
    letterSpacing: {
      0.1: '0.008vw',
      0.2: '0.016vw',
    },
    padding: {
      2: '0.14vw',
      8: '0.55vw',
      9: '0.625vw',
      10: '0.7vw',
      14: '0.9vw',
      18: '1.25vw',
      19: '1.315vw',
      21: '1.38vw',
      24: '1.66vw',
      26: '1.8vw',
      30: '2vw',
      70: '4.86vw',
      100: '7vw'
    },
    gap: {
      5: '0.347vw',
      10: '0.694vw',
      15: '1vw',
      20: '1.347vw',
      22: '1.5vw',
      25: '1.694vw',
      30: '2vw',
      35: '2.347vw',
      40: '2.694vw',
      45: '3vw',
      50: '3.347vw',
      55: '3.694vw',
      60: '4vw',
      65: '4.347vw',
      80: '5.55vw',
      90: '6vw',
      100: '7vw',
    },
    borderRadius: {
      10: '0.7vw',
      11: '0.76vw',
      12: '0.86vw',
      14: '1vw',
      16: '1.12vw',
      17: '1.18vw',
      22: '1.55vw',
      23: '1.63vw',
      25: '1.736vw',
    },
    borderWidth: {
      1: '0.07vw',
      1.5: '0.1vw',
      2: '0.14vw'
    },
    colors: {
      black: {
        0: '#000000',
        0o1: '#010101',
        14: '#141416',
        20: '#201F1F',
        23: '#23262F',
      },
      white: '#ffffff',
      grey: {
        ED: '#EDEDED',
        C2: '#C2C3CB',
        60: '#606060',
        64: '#64748B',
        F9: '#F9F9F9',
        67: '#676767',
        84: '#848586',
        FC: '#FCFCFD',
        F1: '#F1F1F1',
        C5: '#C5C5C5',
        93: '#93989A',
        EB: '#EBE9E9'
      },
      blue: {
        94: '#94A3B8',
      }
    },
    height: {
      1: '0.07vw'
    },
  }
}