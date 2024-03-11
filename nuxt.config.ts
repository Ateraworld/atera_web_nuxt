// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  nitro: {
    compressPublicAssets: true,
    output: {
      dir: "bundle",
      serverDir: ".output/server",
      publicDir: "bundle/public",
    },
  },
  postcss: {
    plugins: {
      "postcss-import": true,
    },
  },
  app: {},
  tailwindcss: {
    exposeConfig: true,
  },
  routeRules: {
    "/_nuxt/**": { headers: { "cache-control": "s-maxage=86400" } },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/robots",
    "@nuxtjs/device",
    "@nuxt/image",
  ],
});
