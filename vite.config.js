import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/creablast/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      stylus: {
        imports: [
          resolve('src/assets/styles/smartgrid.styl'),
          resolve('src/assets/styles/variables.styl'),
        ],
      },
    },
  },
});
