module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "15%",
        // pulse: "50%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
