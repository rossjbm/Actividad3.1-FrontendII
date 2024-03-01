/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily : {
      'titulos': ['Abril Fatface', 'cursive'],
      'textos': ['Merriweather', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#f9efdb',
      'black': '#000000',
      'beige': {
        100: '#e0e0e0',
        200: '#9e9e9e',
      },
      'green': {
        100: '#c4ffc9',
      },
      'blue':{
        100: '#00fff2',
        200: '#5ecde0',
      },
    },
    extend: {},
  },
  plugins: [],
}

