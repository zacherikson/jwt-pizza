const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['index.html', './src/**/*.{html,js,jsx}'],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          sans: ['serif', 'Inter var', ...defaultTheme.fontFamily.sans],
        },
      },
    },
  },
  plugins: [],
};
