/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        main: {
          text: '#604CC3',
          text2: '#704CC3',
          background: '#e5e7eb'
        },
        accent: {
          100: '#c9eaf6'
        }
      },

      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-slower': 'spin 20s linear infinite'
      }
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      sacramento: ['Sacramento', 'cursive'],
      trajan: ['Trajan Pro', 'serif'],
      mothanna: ['Mothanna', 'serif'],
      playwriteCanada: ['Playwrite CA', 'sans-serif'],
      kalufonia: ['Kalufonia', 'serif']
    },
    plugins: [daisyui]
  },
  daisyui: {
    themes: false,
    darkTheme: 'light'
  }
}
