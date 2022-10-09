/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: { max: '640px' },
      lg: { max: '924px' },
    },
    extend: {},
  },
  plugins: [],
};
