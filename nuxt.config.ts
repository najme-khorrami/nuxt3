// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'online shop',
      meta: [
        { name:'description' ,content:'an online shop'}
      ]
    }
  }
})
