/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Certifique-se de que os nomes estão em minúsculo e as cores em aspas
        base: "#FAF9F6",
        authority: "#2D2D2D",
        accent: "#DBCFC2",
        soft: "#E8E3DD",
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}