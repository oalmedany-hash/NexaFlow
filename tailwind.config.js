/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'n8n-navy-dark': '#0e0918',
        'n8n-navy': '#1f192a',
        'n8n-orange': '#ee4f27',
        'n8n-orange-light': '#ff6d4d',
        'n8n-purple': '#5b3a9d',
        'n8n-gray-dark': '#2a2433',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'n8n-glow': '0 0 30px rgba(238, 79, 39, 0.3)',
        'n8n-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'scale-hover': 'scale-hover 0.3s ease-in-out',
      },
      keyframes: {
        'scale-hover': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
