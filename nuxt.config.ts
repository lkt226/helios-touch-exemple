const env = {
  developer: 'false',
  getInfoOnFetch: 'false',
  rdApiKey: '####',
  // baseURL: '/landing-pages/helios/',
  baseURL: '/',
}

const meta = {
  title: 'Helios',
  description: 'Se você está procurando uma lâmpada moderna e de luxo para iluminar seu ambiente, você veio ao lugar certo.',
  url: ''
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  

  experimental: {
    payloadExtraction: false
  },

  app: {
    baseURL: env.baseURL,
    
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    },

    head:{
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: meta.title,
      meta: [
        { name: 'title', content: meta.title },
        { name: 'description', content: meta.description },
        
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: meta.url },
        { name: 'og:title', content: meta.title },
        { name: 'og:description', content: meta.description },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: meta.url },
        { name: 'twitter:title', content: meta.title },
        { name: 'twitter:description', content: meta.description }
      ],
      htmlAttrs: {
        lang: 'pt-BR'
      },

      link: [
        { rel: 'icon', type: 'image/x-icon', href: `${env.baseURL}favicon.svg` },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap' }
      ],
    }
  },

  css: [
    '@/assets/scss/default.scss',
    '@/assets/scss/layouts.scss',

    '@/assets/scss/container.scss',
    '@/assets/scss/animations.scss',
  ],
  components: [
    '@/components/datalist',
    '@/components/default',
    '@/components/molecules'
  ],
  plugins: [
    '@/plugins/sendEmail.client.ts',

    '@/plugins/start.client.ts',
    '@/plugins/update.client.ts',
    '@/plugins/observer.client.ts'
  ],
  modules: [
    '@pinia/nuxt',
    'nuxt-windicss'
  ],

  runtimeConfig: {
    public: {
      developer: env.developer,
      getInfoOnFetch: env.getInfoOnFetch,
      baseURL: env.baseURL,
      rdApiKey: env.rdApiKey
    }
  },
  build: {
    transpile: ['gsap', 'ScrollTrigger'],
  },
})