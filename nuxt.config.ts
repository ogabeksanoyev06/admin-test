// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-04-03',
   devtools: { enabled: true },
   app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   css: ['@/assets/styles/main.css'],
   modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'shadcn-nuxt', 'dayjs-nuxt', '@nuxtjs/i18n', '@nuxt/image'],
   i18n: {
      strategy: 'prefix_except_default',
      locales: ['uz', 'uzc', 'en', 'ru', 'kz'],
      defaultLocale: 'ru',
      vueI18n: './i18n.config.ts'
   },
   shadcn: {
      componentDir: './components/ui'
   },
   runtimeConfig: {
      public: {
         apiBaseUrl: 'https://api.talimpro.uz'
      }
   },
   build: {
      transpile: ['vue-toastification', '@vuepic/vue-datepicker']
   }
});
