const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './renderer/pages/**/*.{js,ts,jsx,tsx}',
        './renderer/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            // use colors only specified
            white: colors.white,
            gray: colors.gray,
            blue: colors.blue,
        },

        extend: {
            colors: {
                dark: '#212529',
                link: '#0d6efd',
                'link-hover': '#0a58ca',
            },
        },
    },
    plugins: [],
};