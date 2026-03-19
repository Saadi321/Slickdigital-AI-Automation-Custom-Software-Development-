import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF4500',
          foreground: '#FFFFFF',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 69, 0, 0.35)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'noise-overlay': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"220\" height=\"220\" viewBox=\"0 0 220 220\" fill=\"none\"%3E%3Cg opacity=\"0.22\"%3E%3Ccircle cx=\"15\" cy=\"20\" r=\"1\" fill=\"white\"/%3E%3Ccircle cx=\"85\" cy=\"50\" r=\"1\" fill=\"white\"/%3E%3Ccircle cx=\"170\" cy=\"75\" r=\"1\" fill=\"white\"/%3E%3Ccircle cx=\"190\" cy=\"170\" r=\"1\" fill=\"white\"/%3E%3Ccircle cx=\"30\" cy=\"180\" r=\"1\" fill=\"white\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
