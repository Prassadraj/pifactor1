module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
      },
      colors: {
        gold: "#e0ccbb",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(150deg, #000000, #4D4040)",
        "subTitle-gradient":
          "linear-gradient(357deg, rgba(184,183,181,1) 0%, rgba(128,128,128,1) 100%)",
        "light-gradient":
          "linear-gradient(0deg, rgba(189,186,180,1) 0%, rgba(240,147,48,1) 100%)",
        "title-gradient":
          "linear-gradient(90deg, #FF6200 0%, #FD7F2C 51%, #FD9346 100%)",
        "grey-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #C6C6C6 56%, #999999 100%)",
        "blue-gradient":
          "linear-gradient(180deg, #727ffc 0%, #FFFFFF 56%, #FFFFFF 100%)",
        // "title-gradient":
        //   "linear-gradient(90deg, rgba(237,136,28,1) 0%, rgba(190,116,66,1) 32%, rgba(194,194,194,1) 87%)",
        counter:
          "linear-gradient(90deg, rgba(154,101,10,1) 0%, rgba(233,206,165,1) 51%, rgba(149,140,140,1) 100%)",
      },

      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }

        largeLaptop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
