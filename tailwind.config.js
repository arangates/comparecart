module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%',
      },
      colors: {
        'accent-1': '#333',
      },
    },
  },
  variants: {},
  plugins: [],
}
