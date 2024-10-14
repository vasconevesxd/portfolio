// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    asserts: "/<rootDir>/assets",
  },
  css: ['~/assets/main.scss'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-icons', '@nuxt/fonts'],
  fonts: {
    families: [
      // only resolve this font with the `google` provider
      { name: 'Inter', provider: 'google' },
    ]
  }
})
