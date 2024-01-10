import path from 'node:path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://unpkg.com/sanitize.css' }]
    }
  },
  alias: {
    '~': path.resolve(__dirname),
    '@assets': path.resolve(__dirname, 'assets'),
    '@components': path.resolve(__dirname, 'components')
  },
  css: ['~/assets/css/global.css'],
  modules: [
    ['@nuxtjs/eslint-module', {
      lintOnStart: false,
    }],
    [
      '@nuxtjs/google-fonts',
      {
        text: 'Hello World',
        families: {
          'Lato': [400, 700]
        },
        display: 'swap',
        subsets: 'latin'
      }
    ],
    '@nuxtjs/tailwindcss',
  ]
})
