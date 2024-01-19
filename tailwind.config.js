/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-blue": "#80a8ff",
        "dark-blue": "#154251",
        "dark-bg": "#080d0e",
        "primary-text": "#ebebeb",
        "dark-grey-text": "#4d4d4d",
        "logo-text": "#045f71",
      },
    },
  },
  plugins: [],
};
