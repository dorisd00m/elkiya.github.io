const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'theme':['Poppins','sans-serif']
    },
    // fontSize: {
    //   'hero-h1':['48px','62px'],
    //   'hero-p':['18px','27px'],
    // },
    // padding: {
    //   '65px': '65px',
    // },
    container: {
     
    },
    extend: {
      colors: {
        primary: '#345C7C',
        secondary: 'F6727F',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
