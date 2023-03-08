/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,jsx}",
    "./components/**/*.{js,ts,jsx,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        'gradient1' : '#cfbba3',
        'gradient2' : '#e6d0af',
        'gratient3' : '#f0c187' 
      }
    },
  },
  plugins: [],
}
