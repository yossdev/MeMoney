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
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      screen: '90vh',
    },
    extend: {
      boxShadow: ['active'],
      maxWidth: {
        1: '35px',
      },
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
