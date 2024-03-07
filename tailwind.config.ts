import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      textColor: {
        dark: '#262626',
        grey: {
          light: '#9ca3af',
          DEFAULT: '#6b7280',
        },
      },
      backgroundColor: {
        stone: '#f5f5f4',
      },
    },
    spacing: {
      xs: '8px',
      sm: '16px',
      base: '24px',
      med: '48px',
      lg: '80px',
    },
  },
  plugins: [],
};
export default config;
