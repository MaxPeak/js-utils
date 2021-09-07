import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true
  },
  resolve: {
    alias: {
      'js-utils': resolve(__dirname, 'src/utils')
    }
  }
})
