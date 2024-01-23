/** @type {import('tailwindcss').Config} */
import tailwindcssForms from '@tailwindcss/forms'; // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'st-green-50': '#f2f9f0',
        'st-green-100': '#ceeebe',
        'st-green-200': '#a6c248',
        'st-green-400': '#97BF0F',
      },
    },
  },
  plugins: [tailwindcssForms],
};
