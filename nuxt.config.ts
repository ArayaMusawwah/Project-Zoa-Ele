// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['daisyui/dist/full.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image', 'vue-social-sharing/nuxt'],
  runtimeConfig: {
    currentUrl: process.env.CURRENT_URL || 'http://localhost:3000',
    public: {
      currentUrl: process.env.CURRENT_URL || 'http://localhost:3000'
    }
  }
})
