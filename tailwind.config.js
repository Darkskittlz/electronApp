/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/renderer/src/**/*.{js,jsx}",
    "./src/renderer/index.html",
    "./src/renderer/src/assets/index.css"
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(50px)',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1536px',
    },
    colors: {
      'transparent': 'transparent',
      'blur': 'rgb(0,0,0,100)',
      'black': '#000',
      'white': '#fff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      gradientColorStops: {
        'custom-gradient': ['red', 'blue'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    container: {
      center: true
    }
  },
  plugins: [
    require('tailwindcss-filters')
  ],
}

