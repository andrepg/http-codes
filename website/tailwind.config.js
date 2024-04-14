/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    fontFamily: {
      'title': ["Quicksand", "ui-sans-serif", "system-ui"],
      'sans': ["Palanquin", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
}

