// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',

    ],

    app: {
        // baseURL: "/",  // 本地
        baseURL: "/blog", // 服务器
        head: {
            link: [
                { rel: 'icon', type: "image/png", href: 'favicon.ico' }
            ],
        },
    },
    css: ["@/assets/styles/default.scss",
        // "normalize.css"
    ],
})
