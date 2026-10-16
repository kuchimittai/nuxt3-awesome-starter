import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./components/**/*.{vue,js,ts}', './layouts/**/*.vue', './pages/**/*.vue', './app.vue'],
  theme: {
    extend: {
      colors: {
        skills: {
          blue: '#0A4A72',
          indigo: '#252462',
          pale: '#E8F1F7',
          ink: '#183449',
          paper: '#F6F8F7'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['DM Mono', 'monospace']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(24,52,73,.10)',
        card: '0 14px 40px rgba(10,74,114,.08)'
      }
    }
  },
  plugins: []
}