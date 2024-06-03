import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:5000,
    proxy: {
      '/api': {
        target: 'https://e-com-topaz.vercel.app/',
        secure: false,
      },
    }
  },
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
