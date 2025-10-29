import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    hmr: {
      host: process.env.REPLIT_DOMAINS?.split(',')[0],
      clientPort: 443,
      protocol: 'wss'
    }
  }
})
