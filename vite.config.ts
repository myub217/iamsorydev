// ✅ vite.config.ts — JP VISUAL & DOCS Production Configuration (React + PWA + Path Aliases)

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),

    // ✅ Progressive Web App Setup
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'apple-touch-icon.png',
        'pwa-192x192.png',
        'pwa-512x512.png',
      ],
      manifest: {
        name: 'JP Visual & Docs',
        short_name: 'JP-System',
        description: 'Professional Web & Visual Docs by เจ้าป่า',
        theme_color: '#0f0f0f',
        background_color: '#0f0f0f',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],

  // ✅ Path Aliases for Cleaner Imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@router': path.resolve(__dirname, 'src/Router'),
      '@components': path.resolve(__dirname, 'src/Home/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@data': path.resolve(__dirname, 'src/data'),
    },
  },

  // ✅ Build Optimizations + Stable Dynamic Imports
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    outDir: 'dist',
    rollupOptions: {
      preserveEntrySignatures: 'strict', // 💥 ป้องกัน dynamic import พังบน CDN (เช่น Vercel)
    },
  },

  // ✅ Server Options (Optional Dev Enhancements)
  server: {
    port: 5173,
    open: true,
    strictPort: true,
  },
});