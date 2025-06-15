import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      '940d-2804-214-81b6-426e-29fb-5554-a52a-6c92.ngrok-free.app',
      // ou '*' para permitir todos
      // '*'
    ],
  },
})
