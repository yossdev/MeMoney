module.exports = {
  // enabled: true,
  // mode: 'jit', // TODO Activate this for fast deployment
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      WhiteBG1: '#FFFFFF',
      WhiteBG2: '#F4F4FA',
      BlackGrey1: '#333333',
      BlackGrey2: '#4B4B4B',
      Red1: '#FF5B56',
      Orange1: '#FF9900',
      Yellow1: '#F8C306',
      LightYellow1: '#FFFCF9',
      LightYellow2: '#FFF8EF',
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
