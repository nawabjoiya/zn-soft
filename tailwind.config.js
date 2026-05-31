/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#c1121f',
          dark: '#9b0e19',
          light: '#e01e2d',
        },
        dark: {
          DEFAULT: '#111111',
          soft: '#1a1a1a',
          muted: '#2a2a2a',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        dots: '24px 24px',
      },
      keyframes: {
        navSlideDown: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        heroKenBurns: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.12)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        contactRipple: {
          from: { transform: 'scale(1)', opacity: '0.8' },
          to: { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'nav-slide-down': 'navSlideDown 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'hero-kenburns': 'heroKenBurns 14s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'contact-ripple': 'contactRipple 1.8s linear infinite',
      },
    },
  },
  plugins: [],
};
