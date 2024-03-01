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
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        100: '#ebd9b4',
        200:"#e0dacc",
        800: '#545048',
      },
      'green': {
        100: '#9dbc98',
        200: '#7EAE7F',
        300: '#7AC88A',
      },
      'button':{
        100: '#D97706',
        200: '#DC2626',
      },
    },
    extend: {},
  },
  plugins: [],
}

