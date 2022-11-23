/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        mWhite: '#ffffff',
        mBlack: '#000000',
        mGray: '#303030',
        mGray2: '#999999',
        mGrayFt: '#666666',
        mOrange: '#f5564e',
        mBg: '#f1f1f1',
        mBg2: '#fafafa',
      },
    },
  },
  plugins: [require('daisyui')],
}
