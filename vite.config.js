import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@faker-js/faker']
  },
  server: {
    hmr: {
      overlay: false, // optional: disables the overlay error messages if you want
    },
  },
})
