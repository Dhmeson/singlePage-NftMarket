/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"#060714",
        txtOne:"#7780A1",
        btOne:"#4745D0",
        btTwo:"#2A27C9",
        btBorder:"#262840",
        gray:"#7780A1"
      }, backgroundImage: {
        'squares': "url('https://occ-0-3816-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRhKHCdKZcw90c0Ae6BfLxxvnXaVwhDkQiGnFB0QKfevqvjj-6oksWXBjxvA3oPP_ISjv0rIAaRQ6W0Ni1tjtjwLN1qSTRizmjj6Dj2BkPrf.webp?r=295')",
        "test":"url('https://i.imgur.com/ZC2q48t.png')",
        'circles':"url('https://i.imgur.com/HZfE37E.png')"
        
       }
    },
  },
  
  plugins: [],
}