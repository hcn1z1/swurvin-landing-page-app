/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'spin-fallback': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(450deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'floating' : {
          '0%':{
            transform: 'translate(0%,0%)'
          },
          '25%' :{
            transform: 'translate(2%,5%)'
          },
          '50%' :{
            transform: 'translate(6%,2%)'
          },
          '75%' :{
            transform: 'translate(0%,4%)'
          },
          '100%' :{
            transform: 'translate(0%,0%)'
          }			
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        spinner: 'spin 2s cubic-bezier(0.68, 1.4, 1,1) infinite',
        customfloat : 'floating 5s ease-in-out infinite',
        secondcustomfloat : 'floating 4s ease-in-out infinite',
        thirdcustomfloat : 'floating 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

