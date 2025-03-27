import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: "/PWA_TEST_3/",  // Set the correct base for GitHub Pages
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "AIMS Research Portal",
        short_name: "AIMS Research Portal",
        description: "AIMS Research Portal",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/PWA_TEST_3/", // Ensure correct start URL
        icons: [
          {
            src: "/PWA_TEST_3/icons/favicon.png", // Make sure this file exists
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/PWA_TEST_3/icons/favicon.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  server: {
    proxy: {
      
      "/login": {
        target: "https://research.amritahospitals.org",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/proxy-webforms/, "/app"),
      },
      "/assets": {
        target: "https://research.amritahospitals.org",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/proxy-webforms/, "/app"),
      },

      "/app": {
        target: "https://research.amritahospitals.org",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/proxy-webforms/, "/app"),
      },

      "/website_script.js": {
        target: "https://research.amritahospitals.org",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/proxy-webforms/, "/app"),
      },

      "/api": {
        target: "https://research.amritahospitals.org",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/proxy-webforms/, "/app"),
      },


      "/proxy-registries": {
        target: "https://research-int.amritahospitals.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy-registries/, ""),
      },
      "/proxy-staging": {
        target: "https://test-ahis-l1.amrita.edu",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy-staging/, ""),
      }
    }
  }
});
