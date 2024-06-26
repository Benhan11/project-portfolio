/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['Cascadia Code', 'monospace']
    },
    extend: {
      colors: {
        heat: {
          DEFAULT: '#D6CCBC',
          dark: '#B0A99F'
        }
      },
      dropShadow: {
        'light': '0 1.2px 1.2px rgba(0, 0, 0, 0.25)',
        'DEFAULT': '0 1.2px 1.2px rgba(0, 0, 0, 0.8)'
      }
    },
  },
  plugins: [],
  safelist: [
    { pattern: /border-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[1-9]00/ },
    { pattern: /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-([1-9]00\/5)/ },
    { pattern: /text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[1-9]00/ },
  ]
}

