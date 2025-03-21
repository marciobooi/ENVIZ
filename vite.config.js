import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@ecl': '/node_modules/@ecl',
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: './',
});
