const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    'index.html',
    './src/**/*.{html,js,jsx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('preline/plugin')],
};
