import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        solutions: resolve(__dirname, 'src/pages/solutions.html'),
        process:   resolve(__dirname, 'src/pages/process.html'),
        portfolio: resolve(__dirname, 'src/pages/portfolio.html'),
        about:     resolve(__dirname, 'src/pages/about.html'),
        contact:   resolve(__dirname, 'src/pages/contact.html'),
      }
    }
  }
})