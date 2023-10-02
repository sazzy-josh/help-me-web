/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": 'hsla(249, 14%, 74%, 1)',
        "primary-400": 'hsla(246, 29%, 33%, 1)',
        "primary-600": 'hsla(246, 74%, 15%, 1)',
        "primary-200": 'hsla(0, 0%, 57%, 1)',
        "primary-50": 'hsla(240, 14%, 92%, 1)',
        "gray-400": 'hsla(240, 1%, 38%, 1)',
        "gray-300": 'hsla(0, 0%, 38%, 1)',
        "gray-200": 'hsla(204, 11%, 75%, 1)',
        "black-600" : 'hsla(0, 0%, 8%, 1)',
        "black-400": 'hsla(0, 0%, 26%, 0.8)',
        "black-100": 'hsla(0, 0%, 0%, 0.75)',
        "pastel-bg": 'hsla(240, 100%, 99%, 1)'
      },
      fontFamily: {
        Inter: ['Inter', "sans-serif"],
        Sora: ['Sora', 'sans-serif'],
        "Work-Sans": ['Work Sans', 'sans-serif']
      },
      height: {
        "screen-16": "calc(100vh - 84px)",
      },
      fontSize: {
        h6: '16px', 
       h2: '64px',
      },
    },
    screens: {
      xs: '375px',
      ss: '620px',
      sm: '768px',
      md: '1200px',
      lg: '1300px',
      xl: '1700px',
    },
  },
  plugins: [],
}
