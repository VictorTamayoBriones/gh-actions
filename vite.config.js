import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://VictorTamayoBriones.github.io/gh-pages/',
  plugins: [react()],
})
