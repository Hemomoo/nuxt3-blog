// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',

    ],
    app: {
        baseURL: "/nuxt",
    },
    css: ["@/assets/styles/default.scss",
        // "normalize.css"
    ],
})
