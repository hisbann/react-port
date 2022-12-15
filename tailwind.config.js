/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {

      'mbl': '370px',

      'mbl2': '400px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'Monstreat': ['Montserrat', 'sans-serif'],
      }, 
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}