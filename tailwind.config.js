const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx",
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  flowbite.content(),
],
darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
         "primary": ['Inter', 'sans-serif']
      },
      colors:{
        'neutralSiler':'FSF7FA',
        'neutralDGrey':'#4D4D4D',
        'brandPrimary':'#4CAF4F',
        'neutralGrey':'#717171',
        'grey900':'#18191F',
      }
    },
  },


  plugins: [  
      require('flowbite/plugin'),
      flowbite.plugin(),
  ],
}


