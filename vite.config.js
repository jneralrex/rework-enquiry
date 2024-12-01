// Import the `defineConfig` function from Vite to define the Vite configuration object.
import { defineConfig } from 'vite';

// Import the React plugin for Vite with SWC (Speedy Web Compiler) for faster builds.
import react from '@vitejs/plugin-react-swc';

// Import `dotenv` to load environment variables from a `.env` file into `process.env`.
import dotenv from 'dotenv';

// Import `NodeGlobalsPolyfillPlugin` to polyfill Node.js global variables like `process` and `buffer` for browser compatibility.
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// Load environment variables from the `.env` file.
dotenv.config();

// Set the API URL based on the environment (production or development).
// If `NODE_ENV` is 'production', use `VITE_API_URL`; otherwise, use `VITE_DEV_URL`.
const API_URL = process.env.NODE_ENV === 'production' ? process.env.VITE_API_URL : process.env.VITE_DEV_URL;

// Export the Vite configuration object.
export default defineConfig({
  // Configure plugins to be used with Vite.
  plugins: [
    // React plugin with SWC for optimized builds.
    react(),
    // Polyfill Node.js globals (like `process` and `buffer`) for libraries requiring Node compatibility.
    NodeGlobalsPolyfillPlugin({
      process: true, // Polyfill `process` global variable.
      buffer: true,  // Polyfill `buffer` global variable.
    }),
  ],
  // Configure the development server.
  server: {
    // Proxy configuration for API requests.
    proxy: {
      // Intercept requests starting with `/api` and proxy them to the target API server.
      '/api': {
        target: API_URL, // Use the dynamically resolved API URL as the proxy target.
        changeOrigin: true, // Change the origin of the request to the target URL.
        // Rewrite the request path by removing the `/api` prefix.
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // Optimize dependencies for faster builds and better compatibility.
  optimizeDeps: {
    esbuildOptions: {
      // Define a global variable to mimic Node.js's `global` in the browser.
      define: {
        global: 'globalThis',
      },
      // Add plugins for esbuild to polyfill Node.js globals (like `process` and `buffer`).
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true, // Polyfill `process`.
          buffer: true,  // Polyfill `buffer`.
        }),
      ],
    },
  },
});
