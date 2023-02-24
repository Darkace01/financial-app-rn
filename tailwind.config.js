/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/modals/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#4D2DEC',
        themeGreen: '#1A8F5A',
        themeRed: '#DB0000',
        themeGrey: '#F5F7FF',
        inputBackground: '#E8ECF4',
      },
    },
  },
  plugins: [],
};
