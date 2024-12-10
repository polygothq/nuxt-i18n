// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: false
    },
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'fr',
        file: 'fr.json',
        name: 'Français'
      },
    ]
  }
})