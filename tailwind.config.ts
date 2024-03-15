import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        stone: '#f5f5f4', // stone-100
        charcoal: '#71717a', // zinc-500
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#ffe4e6',
          DEFAULT: '#f43f5e',
        },
      },
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        assistant: ['var(--font-assistant)'],
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
