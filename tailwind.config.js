module.exports = {
  // enabled: true,
  // mode: 'jit', // TODO Activate this for fast deployment
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    // colors: {
    //   // Configure your color palette here
    // },
    extend: {
      boxShadow: ['active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    fontFamily: false,
  },
}
