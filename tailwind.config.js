module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
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
