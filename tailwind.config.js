module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
    fontFamily: {
      sans: [
        "Nunito",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
