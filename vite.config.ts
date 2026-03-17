import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const port = parseInt(process.env.PORT ?? '5173')

export default defineConfig({
  plugins: [react()],
  server: { port, host: true },
  preview: { port, host: true },
})
