// ✅ tailwind.config.ts — JP Visual & Docs Production Tailwind + DaisyUI Config

import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  darkMode: 'class',

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },

    extend: {
      // 🔹 Custom Breakpoints
      screens: {
        xs: '475px',
      },

      // 🔹 JP System Brand Colors
      colors: {
        primary: '#3B82F6',      // Action Blue
        secondary: '#64748B',    // Slate Gray
        accent: '#22C55E',       // Success Green
        neutral: '#3D4451',      // UI Neutral
        black: '#000000',
        white: '#ffffff',
        transparent: 'transparent',
        inherit: 'inherit',
        current: 'currentColor',
      },

      // 🔹 Fonts
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      // 🔹 Backgrounds
      backgroundImage: {
        'hero-pattern': "url('/assets/hero.webp')",
      },

      // 🔹 Animations
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out both',
        fadeIn: 'fadeIn 0.3s ease-out both',
        bounceIn: 'bounceIn 0.6s ease-out both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '60%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },

  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        light: {
          primary: '#3B82F6',
          secondary: '#64748B',
          accent: '#22C55E',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          'base-content': '#1F2937',
        },
      },
      {
        dark: {
          primary: '#3B82F6',
          secondary: '#64748B',
          accent: '#22C55E',
          neutral: '#1E293B',
          'base-100': '#0F172A',
          'base-content': '#F8FAFC',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
  },
};

export default config;