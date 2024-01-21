/** @type {import('tailwindcss').Config} */
import tailwindcssForms from '@tailwindcss/forms'; // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssForms,
  ],
};
