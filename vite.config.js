import react from '@vitejs/plugin-react'
import base44 from '@base44/vite-plugin'
import { defineConfig } from 'vite'
import path from 'path';

// Set VITE_BASE_PATH in Base44 (or .env) if the app is served under a subpath; default is "/".
const base = process.env.VITE_BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [
    base44({
      legacySDKImports: false,
      hmrNotifier: false,
      navigationNotifier: false,
      visualEditAgent: false,
    }),
    react(),
  ],
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

// https://vite.dev/config/
// export default defineConfig({
//   logLevel: 'error', // Suppress warnings, only show errors
//   plugins: [
//     react(),
//   ],
//   server: {
//     proxy: {
//       "/api": "http://localhost:5174",
//     },
//   },
// });