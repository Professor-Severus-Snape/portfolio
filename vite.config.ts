import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // алиас для удобства
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        // подключаем переменные и миксины глобально в каждый sass-файл
        additionalData:
          '@use "@/assets/styles/_variables.sass" as *\n' +
          '@use "@/assets/styles/_mixins.sass" as *\n',
      },
    },
  },
  base: '/portfolio',
  server: {
    open: true,
  },
});
