import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/harmony-green/', // This is crucial for GitHub Pages subpath
  build: {
    outDir: 'dist',
  }
})