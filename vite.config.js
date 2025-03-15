import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: "/PWA_TEST_3/",  //  Set the correct base for GitHub Pages
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "Amrita PWA",
        short_name: "Amrita PWA",
        description: "PWA App for Amrita Hospital",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/PWA_TEST_3/", //  Ensure correct start URL
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
  ]
});
