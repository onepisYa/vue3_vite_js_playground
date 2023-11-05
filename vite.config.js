import { defineConfig } from 'vite'
import path, { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'public': path.resolve(__dirname, 'public'),
      'components': path.resolve(__dirname, 'src/components'),
      'composables': path.resolve(__dirname, 'src/composables'),
      'style': path.resolve(__dirname, 'src/style'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'views': path.resolve(__dirname, 'src/views'),
      'layouts': path.resolve(__dirname, 'src/layouts'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'apis': path.resolve(__dirname, 'src/apis'),
      'dirs': path.resolve(__dirname, 'src/directives'),
      '/assets': path.resolve(__dirname, 'src/assets'),
    },
  },

})
