import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: true,
    allowedHosts: [
      'sb-59ow5ufj2u5q.vercel.run'
    ]
  }
})