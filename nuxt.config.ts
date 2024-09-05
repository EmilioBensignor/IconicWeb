// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module'],
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: 'https://unpkg.com/primeflex@latest/primeflex.css'
      }]
    }
  }
})