/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage : {
        "plusImg" : "url('../assets/images/plus.svg')",
      }
    },
    colors: {
      blue: "#4F46E6",
      white: "#ecf3f7",
      green: "#1DB954",
      black: "#000"
    }
  },
  plugins: [],
}

