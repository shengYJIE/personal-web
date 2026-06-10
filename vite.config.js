import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages deploys to /personal-web/ — only affects production build
  base: command === 'build' ? '/personal-web/' : '/',
}))
