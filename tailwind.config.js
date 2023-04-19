/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm400: "400px",
        sm450: "450px",
        sm500: "500px",
        sm550: "550px",
        sm600: "600px",
        sm650: "650px",
        sm700: "700px",
        sm750: "750px",
        md800: "800px",
        md850: "850px",
        md900: "900px",
        md950: "950px",
        md1000: "1000px",
        md1050: "1050px",
        lg1100: "1100px",
        lg1150: "1150px",
        lg1200: "1200px",
        lg1250: "1250px",
        lg1300: "1300px",
        lg1350: "1350px",
        xl1400: "1400px",
        xl1450: "1450px",
        xl1500: "1500px",
        xl1550: "1550px",
        xl1600: "1600px",
        xl1650: "1650px",
        xl1700: "1700px",
        xl1750: "1750px",
        xl1800: "1800px",
        xl1850: "1850px",
        xl1900: "1900px",
        xl1950: "1950px",
        xl2000: "2000px",
        xl2050: "2050px",
        xl2100: "2100px",
        xl2150: "2150px",
        xl2200: "2200px",
        xl2250: "2250px",
        xl2300: "2300px",
        xl2350: "2350px",
        xl2400: "2400px",
        xl2450: "2450px",
        xl2500: "2500px",
        xl2550: "2550px",
        xl2600: "2600px",
        xl2650: "2650px",
        xl2700: "2700px",
        xl2750: "2750px",
        xl2800: "2800px",
        xl2850: "2850px",
        xl2900: "2900px",
        xl2950: "2950px",
        xl3000: "3000px",
        xl3050: "3050px",
      },
      fontFamily:{
        averia :["Averia Sans Libre", "cursive"]
      },
      backgroundImage : {
        BgImg : "url(/bg.svg)"
      },
      colors: {
        "black-low-opacity": "rgba(0,0,0,0.5)"
      }
    
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
