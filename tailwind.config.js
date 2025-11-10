/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Baloo Bhaijaan 2"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#1B1F2B',
        green: '#4A9B63',
        coral: '#E27B63',
        forest: '#1E4534',
        blue: '#4B5C9B',
        brown: '#582B23',
        mint: '#D8E6E1',
        surface: '#2A2F3B',
        background: '#1B1F2B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hexagon-pattern': `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 8l8 16H16z' fill='%234A9B63' fill-opacity='0.1'/%3E%3C/svg%3E")`,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};