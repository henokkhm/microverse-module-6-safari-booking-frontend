/** @type {import('tailwindcss').Config} */
import tailwindcssForms from '@tailwindcss/forms';

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssForms,
  ],
}
