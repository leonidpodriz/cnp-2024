/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'gradient-start': '#7B02A3',
                'gradient-end': '#E40255'
            },
            transitionProperty: {
                'height': 'height'
            }
        }
    },
    plugins: [],
}