/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')",
      },
      colors: {
        'instagram-button': '#0095f6',
        'facebook': '#385185',
        'link': '#00376b',
      },
    },
  },
  plugins: [],
}
