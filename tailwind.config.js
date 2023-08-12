/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app2/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        seaBlue: '#326BFF',
        darkBlue: '#001855',
        grey: {
          300: '#C6CCDC',
          400: '#AEB7CD',
          500: '#97A2BE',
          800: '#506392',
        },
      },
    },
  },
  plugins: [],
}
