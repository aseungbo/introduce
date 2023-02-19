/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { color: "transparent" },
          "100%": { color: "white" },
        },
        typing: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-7deg)" },
          "50%": { transform: "rotate(7deg)" },
        },
        blinking: {
          "0%": { borderRightColor: "transparent" },
          "50%": { borderRightColor: "inherit" },
          "100%": { borderRightColor: "transparent" },
        },
        leftToRight: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(50%)" },
        },
        rightToLeft: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 4s ease-in-out",
        typing: "typing 1.5s steps(30, end) forwards, blinking 1s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        leftToRight:
          "leftToRight 5s linear forwards, rightToLeft 5s linear 5s forwards",
      },
    },
  },
  plugins: [],
};
