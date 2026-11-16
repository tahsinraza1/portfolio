import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-vendor': ['framer-motion'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
