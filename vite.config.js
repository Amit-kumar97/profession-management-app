import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  baese: '/profession-management-app/', 
  plugins: [react()],
})
