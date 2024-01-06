/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        logo: "30px",
        navitem: "16px",
        h1: "78px",
        h2: "32px",
        h3: "24px",
        p: "16px",
      },
      backgroundColor: {
        main: "#00796b",
      },
      textColor: {
        main: "#ffffff",
        second: "#f85040",
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
        default: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        700: 700,
        600: 600,
      },
      screens: {
        sm: "580px",
        md: "760px",
        lg: "990px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
