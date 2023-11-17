// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./src/",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  css: ["@/assets/styles/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      link: [
        //GOGLEFONTS
        {
          href: "https://fonts.googleapis.com",
          rel: "preconnect ",
        },
        {
          href: "https://fonts.gstatic.com",
          crossorigin: "",
          rel: "preconnect",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap",
          rel: "stylesheet",
        },
      ],
      htmlAttrs: {
        lang: 'ru',
    },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
