/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4e70f5',
        },
      },
      fontFamily: {
        display: ['"Metal Mania"'],
        body: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
