// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  alias: {
    "@": "/<srcDir>"
  },
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxt/image', '@nuxt/icon'],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: 'https://unpkg.com/primeflex@latest/primeflex.css'
      }]
    }
  }
})