// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',

    ],
    app: {
        baseURL: "/blog",
    },
    css: ["@/assets/styles/default.scss",
        // "normalize.css"
    ],
})
