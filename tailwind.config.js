/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    // these are for the layer backgrounds
    'bg-brand-depth-0',
    'bg-brand-depth-1',
    'bg-brand-depth-2',
    'bg-brand-depth-3',
    'bg-brand-depth-4',
    'bg-brand-depth-5',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          depth: '#c6e4f8',
          'depth-0': '#93bde5',
          'depth-1': '#76aed9',
          'depth-2': '#1f8bbf',
          'depth-3': '#003b54',
          'depth-4': '#002234',
          'depth-5': '#00101f',
        },
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'Cascadia Code',
          'Source Code Pro',
          'Menlo',
          'Consolas',
          'DejaVu Sans Mono',
          'monospace',
        ],
        sans: [
          ' -apple-system',
          'BlinkMacSystemFon',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        display: ['"Metal Mania"'],
        body: ['"Open Sans"'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '*': {
              color: theme('colors.brand-7'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
