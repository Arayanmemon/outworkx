/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        nohemi: ['Nohemi', 'sans-serif'],
        mluvka: ['Mluvka', 'sans-serif']
      },
      borderRadius: {
        '4xl': '35rem'
      }
    }
  },
  plugins: [require('daisyui')]
};
