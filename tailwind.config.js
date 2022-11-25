/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
 blocklist :[
  'App'
 ],
  theme: {
    extend: {
      fontFamily: {
        base: 'Poppins, sans-serif',
    },
    //cp == custom property
    spacing: {
      'cp42': '42rem',
      'cpmax' : '90%', 
    }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
