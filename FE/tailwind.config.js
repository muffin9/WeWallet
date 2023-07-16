/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      mono: ['Space Mono', 'mono'],
      title: ['Archivo Narrow', 'sans'],
      sans: ['Archivo', 'sans'],
      serif: ['Alegreya', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
