import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      // Define environment variables for different modes
      __DEV__: mode === 'development',
    },
    // Environment variables configuration
    envPrefix: 'VITE_',
  }
})
