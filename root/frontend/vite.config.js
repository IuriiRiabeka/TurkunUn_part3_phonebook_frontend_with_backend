import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  root: '.',  // або 'frontend', якщо ви запускаєте з кореня
  build: {
    outDir: 'dist',
  },
   server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      
      }
    }
  }

})
