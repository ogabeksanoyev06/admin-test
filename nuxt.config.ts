// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-04-03',
   devtools: { enabled: true },
   app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   css: ['@/assets/styles/main.css'],
   modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'shadcn-nuxt', 'dayjs-nuxt'],
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
