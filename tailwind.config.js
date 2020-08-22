module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pa-yellow': '#FFF075',
        'pa-pink': '#FF3873',
        'pa-orange': '#F37E3A',
        'pa-silver': '#F2F0F7'
      }
    },
    inset: {
      '1/2': '50%'
    }
  },
  variants: {},
  plugins: []
}
