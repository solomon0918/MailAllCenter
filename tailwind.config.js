/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#30638E',
        primary_dark: '#003D5B',
        primary_light: '#1972A4',
        secondary: '#D1495B',
        gray_500: '#6F6F6F',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

