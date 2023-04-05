const meta = {
  title: '### TITLE ###',
  description: '### Description ###',
  url: '/',
  author: 'Lkt226'
}

const env = {
  gtm: 'G-XXXXXXXXXX',
  rdStation: '',
  url: '/',
  origin: 'http://localhost:3000'
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      title: meta.title,
      meta: [
        // Normal
        { name: 'title', content: meta.title },
        { name: 'description', content: meta.description },

        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: meta.author },

        // Google
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: meta.url },
        { property: 'og:title', content: meta.title },
        { property: 'og:description', content: meta.description }
      ],

      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${env.url}src/favicon.svg` }
      ]
    },

    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
  },

  css: [
    '@/assets/style/reset.css',
    '@/assets/style/tailvue.scss',
    '@/assets/style/containers.css',
    '@/assets/style/layouts.scss',
    '@/assets/style/preload.scss',
    '@/assets/style/animation.scss',
  ],

  components: [
    '@/components/default',
    '@/components/atoms',
    '@/components/molecules',
    '@/components/organisms',
  ],

  plugins: [
    '@/plugins/starter.client.ts',
    '@/plugins/animation.client.ts',
  ],

  modules: [
    'nuxt-windicss',
    '@nuxt/image-edge',
    '@nuxt/devtools',
    'nuxt-vitest',
    'nuxt-gtag',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap'
  ],

  runtimeConfig: {
    public: env
  },

  build: {
    transpile: [
      'gsap'
    ]
  },

  // Externo ao NUXT
  devtools: {
    enabled: false
  },

  gtag: {
    id: env.gtm
  },

  robots: {
    rules: {
      sitemap: `${meta.url}/sitemap.xml`
    }
  },

  sitemap: {
    siteUrl: meta.url
  }
})
