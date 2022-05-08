import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@style": path.resolve(__dirname, "src/style"),
      "@types": path.resolve(__dirname, "src/types"),
    }
  },
  plugins: [react()]
})
