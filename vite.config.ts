
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path, { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.tsx', // Ensure this is the correct entry point
    },
  },
  plugins: [react()],
  server: {
    port: 8501,
    watch: {
      usePolling: false,
      interval: 1000
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
  root: resolve(__dirname, 'public') // Ensure that Vite resolves from the public directory
})

