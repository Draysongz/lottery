/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-h-700': {'raw': '(max-height: 900px)'},
        'max-h-600': {'raw': '(max-height: 750px)'}
      },
    },
  },
  plugins: [],
}