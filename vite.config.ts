import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
