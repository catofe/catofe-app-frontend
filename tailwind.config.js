/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    scale: {
      100: "1",
      105: "1.05",
      110: "1.1",
      115: "1.15",
      120: "1.20",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
