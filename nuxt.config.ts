// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@vite-pwa/nuxt',
    'nuxt-gtag',
    // '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/image'
  ],
  plugins: [
    { src: '~/plugins/recaptcha.ts', mode: 'client' },
    { src: '~/plugins/auto-animate.ts', mode: 'client' }
  ],
  site: {
    url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://bluecoresolutions.com',
    name: 'BlueCore Solutions',
  },
  runtimeConfig: {
    public: {
      RECAPTCHA_SITE_KEY: 'your-site-key-here',
    },
  },
  image: {
    dir: 'assets/images',
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  }

  /** auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: 'http://localhost:3000/api/auth',
    provider: {  your provider config  },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    }
  } */

})