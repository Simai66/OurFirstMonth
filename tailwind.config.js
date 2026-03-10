export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif Thai"', 'serif'],
      },
      colors: {
        romantic: {
          50: '#fff5f7',
          100: '#ffeef2',
          200: '#ffdce5',
          300: '#ffb6c8',
          400: '#ff85a1',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        }
      }
    }
  },
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/container-queries'),
  ],
}
