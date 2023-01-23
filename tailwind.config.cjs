/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        "open-sans": ['"Open Sans"'],
      },
      colors: {
        "zoom-gray": "#666484",
        "zoom-lightblue": "#0B5CFF",
        "zoom-blue": "#004CEF",
        "zoom-gray": "#b5d0f8",
        "zoom-darkblue": "#0B5CFF",
        "zoom-darkblue2": "#00031f",
        "zoom-darkblue3": "#00053d",
        "zoom-white": "#FFFFFF",
        "zoom-green-blue": "#00e0db",
      },
    },
  },
  plugins: [],
};
