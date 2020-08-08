module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'screen/2': '60vh',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%',
      },
      colors: {
        royalblue: {
          50: '#F6F6FE',
          100: '#ECEEFE',
          200: '#D1D4FB',
          300: '#B5BAF9',
          400: '#7D87F5',
          500: '#4553F0',
          600: '#3E4BD8',
          700: '#293290',
          800: '#1F256C',
          900: '#151948',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
