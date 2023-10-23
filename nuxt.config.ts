// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
    },
  },
  runtimeConfig: {
    mail: process.env.NUXT_MAIL,
    psw: process.env.NUXT_PSW,
  },
  modules: ["@nuxtjs/prismic",],
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  prismic: {
    endpoint: process.env.NUXT_PRISMIC_ENDPOINT,
  },
  css: ["@/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/scss/foundations/_variables.scss";
          @import "@/scss/foundations/_mixins.scss";`,
        },
      },
    },
  },
});
