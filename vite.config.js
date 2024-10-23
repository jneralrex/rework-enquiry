import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Access the API URL from process.env
const API_URL = process.env.VITE_API_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
