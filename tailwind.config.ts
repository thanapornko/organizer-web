import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Prompt',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      // keyframes: {
      //   'slide-gradient': {
      //     '0%': { backgroundPosition: '0% 50%' },
      //     '100%': { backgroundPosition: '100% 50%' },
      //   },
      // },
      // animation: {
      //   'slide-gradient': 'slide-gradient 0.25s ease-in-out forwards',
      // },
    },
  },
  plugins: [],
} satisfies Config;
