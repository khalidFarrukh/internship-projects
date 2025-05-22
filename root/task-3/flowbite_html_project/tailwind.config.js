/** @type {import('tailwindcss').Config} */
export const content = [
  "./*.html",
  "./node_modules/flowbite/**/*.js"
];
export const theme = {
  extend: {
    colors: {
      mycolor: 'blue',
    },
  },
};
export const plugins = [
  require('flowbite/plugin')
];