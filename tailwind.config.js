module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pa-yellow': '#FFF075',
        'pa-pink': '#FF3873',
        'pa-orange': '#F37E3A'
      }
    },
    inset: {
      '1/2': '50%'
    }
  },
  variants: {},
  plugins: []
}
