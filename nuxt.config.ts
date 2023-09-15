// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: { shim: true },
    css: ['swiper/css', '~/assets/css/main.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        '@vueuse/nuxt',
    ],
    app: {
        head: {
            link: [],
        },
    },
    components: {
        dirs: [{ path: '~/components/utils', global: true }, '~/components'],
    },
    googleFonts: {
        families: {
            'Noto Sans Mono': [300, 400, 600, 700, 800],
        },
    },
    ssr: false,
});
