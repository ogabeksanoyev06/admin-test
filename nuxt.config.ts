// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2024-04-03',
   devtools: { enabled: true },
   app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   css: ['@/assets/styles/main.css'],
   modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon'],
   shadcn: {
      componentDir: './components/ui'
   }
});
