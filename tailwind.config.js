/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'pages/*.{html,vue}',
        'components/*.{html,vue}',
        './*.{vue,js,html}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["'Noto Sans Mono'", 'monospace'],
        },
    },
    plugins: [],
};
