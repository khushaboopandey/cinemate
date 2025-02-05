module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        others: { min: "340px", max: "1200px" },
      },
      colors: {
        darkbg: "1E293B",
      },
    },
  },
  plugins: [],
};
