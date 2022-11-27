// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: { shim: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    app: {
        head: {
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                { rel: 'stylesheet', href: 'https://awesome-lib.css' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;600;700;800&display=swap',
                    crossorigin: '',
                },
            ],
        },
    },
    components: {
        dirs: [{ path: '~/components/utils', global: true }, '~/components'],
    },
    ssr: false,
});
