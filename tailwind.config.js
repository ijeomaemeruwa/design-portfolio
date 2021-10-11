module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        boxShadow: {
          DEFAULT: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        },
      },
      fontFamily: {
        poppins: ['Urbanist', 'sans-serif'],
        dmono: ['Roboto Mono', 'monospace'],
        righteous: ['Righteous', 'cursive'],
        neue: ['Neue Montreal', 'sans-serif']
      },
      colors: {
        dark: "#1c1c1c",
        white: "#fff",
        blue: "#6C85D7",
        gray: "#f5f5f5",
        gray2: "#BBBCBE",
        // green: "#6AD6EC",
        lightblue: "#F6F8FB",
        purple: "#7850CB"
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }