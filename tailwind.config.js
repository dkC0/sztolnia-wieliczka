/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        tunnel: '#15120F',
        salt: '#EDE7DD',
        stone: '#6B645B',
        copper: '#C9743A',
        amber: '#E8A23D',
        beet: '#7A2E2A',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        descent: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        ignition: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
