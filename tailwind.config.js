/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Audiowide", "cursive"],
    },
    extend: {
      animation: {
        text: "text 5s ease infinite",
        border: "border 4s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
