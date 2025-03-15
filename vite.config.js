import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      base: "/PWA_TEST_3/",
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
        start_url: "/PWA_TEST_3/",
        icons: [
          {
            src: "/PWA_TEST_3/icons/favicon.png",
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
  base: "/PWA_TEST_3/"
});
