/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero-pattern': "url('/img/hero-pattern.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}

