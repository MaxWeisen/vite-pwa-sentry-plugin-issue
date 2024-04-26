// sentry vite plugin
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      exclude: ['../service-worker'],
    },
  },
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    // mode: 'development',
    registerType: 'autoUpdate',
    strategies: 'injectManifest',
    srcDir: 'service-worker',
    filename: 'index.ts',
    manifest: {
      name: 'Vite PWA',
      short_name: 'PWA',
      theme_color: '#EF8535',
      icons: [
        {
          src: 'pwa-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      minify: false,
      buildPlugins: {
        vite: [
          sentryVitePlugin({
            release: { name: 'testing1' },
            project: 'vite-pwa',
            telemetry: false,
          })
        ]
      }
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  ssr: true,
  vite: {
    optimizeDeps: {
      include: [
        'workbox-core',
        'workbox-precaching',
        'workbox-routing',
      ],
    },
    plugins: [
      sentryVitePlugin({
        release: { name: 'testing1' },
        project: 'vite-pwa',
        telemetry: false,
      }),
    ],
  },
});
