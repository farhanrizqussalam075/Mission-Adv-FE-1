/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#3ECF4C',
        'primary-light': '#E2FCD9CC',
        'text-primary': '#222325',
        'text-secondary': '#333333AD',
        'text-muted': '#4A505C',
        'border-light': '#F1F1F1',
        'border-input': '#3A35411F',
        'error': '#FF5C2B',
      },
    },
  },
  plugins: [],
}