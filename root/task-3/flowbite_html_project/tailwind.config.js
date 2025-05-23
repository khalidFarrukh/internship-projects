/** @type {import('tailwindcss').Config} */
export const content = [
  "./*.html",
  "./node_modules/flowbite/**/*.js"
];
export const theme = {
  extend: {
  },
};
export const plugins = [
  require('flowbite/plugin')
];