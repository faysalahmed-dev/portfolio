/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/*.{html,vue}',
        './components/**/*.{html,vue}',
        './*.{vue,js,html}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["'Noto Sans Mono'", 'monospace'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    plugins: [],
};
