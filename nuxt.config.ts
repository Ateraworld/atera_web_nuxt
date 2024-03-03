// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    output: {
      dir: "bundle",
      serverDir: ".output/server",
      publicDir: "bundle/public",
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  build: {},
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt", "@pinia/nuxt"],
});
