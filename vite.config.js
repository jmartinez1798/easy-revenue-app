import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: false,
    // Permitir los subdominios de Replit:
    allowedHosts: [
      /.*\.replit\.dev$/,
      /.*\.repl\.co$/,
      /.*\.spock\.replit\.dev$/,
      'localhost'
    ],
    cors: true,
    hmr: {
      clientPort: 443
    }
  },
  preview: {
    host: true,
    strictPort: false,
    allowedHosts: [
      /.*\.replit\.dev$/,
      /.*\.repl\.co$/,
      /.*\.spock\.replit\.dev$/,
      'localhost'
    ]
  }
})
