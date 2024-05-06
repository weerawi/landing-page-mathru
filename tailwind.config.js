/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'  ], // Replace 'YourFontName' with the actual font name
        roboto: [ 'Roboto' ],  // Replace 'YourFontName' with the actual font name
      },
    }, 
  },
  plugins: [],
}
