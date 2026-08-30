import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: '/DET%20intranet.html',
    hmr: true
  },
  preview: {
    host: '0.0.0.0',
    port: 4173
  },
  css: {
    lightningcss: {
      errorRecovery: true
    },
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import']
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        det: resolve(import.meta.dirname, 'DET intranet.html')
      }
    }
  }
})
