/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Dosis', 'sans-serif']
    },
    extend: {
      colors: {
        'dark-neutral-7': '#B0B0B0',
        'taro-green': '#00FF66'
      }
    },
  },
  plugins: [],
}
