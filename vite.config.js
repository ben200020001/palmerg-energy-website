import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';

// Match Vite `base` / `VITE_BASE_PATH` when the app is served under a subpath; default is "/".
const base = process.env.VITE_BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  logLevel: 'error',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:5174",
    },
  },
});
