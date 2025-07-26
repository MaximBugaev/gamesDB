import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({ 
    routesDirectory: './src/shared/routes',
    autoCodeSplitting: true
   }), viteReact()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'Images': resolve(__dirname, './src/shared/assets/imgs')
    },
  },
})
