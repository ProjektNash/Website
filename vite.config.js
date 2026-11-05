import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves 404.html for unknown paths. Making it a copy of
// index.html lets direct visits and refreshes on routes like /pricing
// load the app instead of GitHub's error page.
const spaFallback = () => ({
  name: 'spa-404-fallback',
  apply: 'build',
  closeBundle() {
    const dist = resolve(__dirname, 'dist')
    copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
  },
})

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
})
