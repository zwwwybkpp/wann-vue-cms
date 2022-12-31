import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //http://152.136.185.210:5000/
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  }
})
