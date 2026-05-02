/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF6EE',
        warm: {
          50: '#FFF5F0',
          100: '#FFE4D6',
          200: '#FFCBB0',
          300: '#FFA77D',
          400: '#FF8757',
          500: '#FF6B35',
          600: '#F04E1F',
          700: '#C73E18',
          800: '#9F3416',
          900: '#7A2A12'
        },
        coral: {
          400: '#FF7A6B',
          500: '#FF5C4D'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FF6B35 0%, #FF7A6B 100%)',
        'warm-soft': 'linear-gradient(135deg, #FFF5F0 0%, #FFE4D6 100%)'
      }
    }
  },
  plugins: []
}