// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
    output: {
      dir: "bundle",
      serverDir: ".output/server",
      publicDir: "bundle/public",
    },
  },
  app: {
    head: {
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Ferrate & Trekking, trova il tuo prossimo itinerario e riscatta sconti e benefici facendo ciò che ami",
        },
      ],
      htmlAttrs: {
        lang: "it",
      },
    },
  },
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
    "nuxt-purgecss",
    "@nuxtjs/robots",
  ],
});
