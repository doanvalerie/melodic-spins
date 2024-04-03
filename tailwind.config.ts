import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'text-slide-5':
          'text-slide-5 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        charcoal: '#71717a', // zinc-500
        primary: {
          light: '#ffe4e6',
          DEFAULT: '#f43f5e',
        },
        red: {
          error: '#dc2626', // red-600
        },
        stone: '#f5f5f4', // stone-100
      },
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        assistant: ['var(--font-assistant)'],
      },
      keyframes: {
        'text-slide-5': {
          '0%, 16%': {
            transform: 'translateY(0%)',
          },
          '20%, 36%': {
            transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
            transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
            transform: 'translateY(-50%)',
          },
          '80%, 96%': {
            transform: 'translateY(-66.66%)',
          },
          '100%': {
            transform: 'translateY(-83.33%)',
          },
        },
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        base: '24px',
        med: '48px',
        lg: '80px',
        navbar: '80px',
      },
      textColor: {
        dark: '#262626',
        light: '#ffffff',
        grey: {
          light: '#a1a1aa', // zinc-400
          DEFAULT: '#71717a', // zinc-500
        },
      },
    },
  },
  plugins: [],
};
export default config;
