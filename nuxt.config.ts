// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  typescript: {
    strict: false,
  },
  alias: {
    "@": "/<srcDir>"
  },
  css: ["~/assets/main.css"],
  devtools: { enabled: true },

  modules: [
    '@primevue/nuxt-module',
    '@nuxt/image',
    '@nuxt/icon',
    'nuxt-swiper',
    '@nuxtjs/seo',
    'nuxt-site-config',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
    'nuxt-schema-org',
    'nuxt-link-checker',
    'nuxt-vitalizer',
    'nuxt-booster', // Añadimos nuxt-booster
  ],

  icon: {
    size: '1rem',
    serverBundle: {
      collections: ['mingcute']
    }
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/primeflex@latest/primeflex.css'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap'
        },
      ],
    }
  },

  plugins: [
    { src: '~/plugins/passive-events.js', mode: 'client' }
  ],

  site: {
    url: 'https://iconicassistants.site/',
    name: 'Iconic Assistants',
    description: 'Iconic Assistants supercharge productivity for entrepreneurs, executives, startups, and high growth companies.',
    defaultLocale: 'en',
  },

  booster: {
    detection: {
      performance: true,
      browserSupport: true,
      battery: true
    },
    performanceMetrics: {
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },
    fonts: [{
      family: 'Figtree',
      locals: ['Figtree'],
      fallback: ['Arial', 'sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: 'https://fonts.gstatic.com/s/figtree/v2/abcd1234.woff2', type: 'woff2' },
          ]
        },
        {
          style: 'normal',
          weight: 700,
          sources: [
            { src: 'https://fonts.gstatic.com/s/figtree/v2/abcd5678.woff2', type: 'woff2' },
          ]
        }
      ]
    }],
    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  },

  image: {
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },
  }
})
