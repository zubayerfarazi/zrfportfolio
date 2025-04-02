/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        playwrite: ['"Playwrite FR Trad"', "serif"],
        poppins: ['""Poppins""', "serif"],
        bona: ['"Bitter"', "serif"],
        lora: ['"Lora"', "serif"],
      },
    },
  },
  plugins: [],
};
