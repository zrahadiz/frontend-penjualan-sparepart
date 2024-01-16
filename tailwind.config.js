/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
  "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto'],
        bebasNeue: ['"Bebas Neue"'],
        quicksand: ['Quicksand']
      }
    },
  },
  plugins: [require("daisyui")],
}

