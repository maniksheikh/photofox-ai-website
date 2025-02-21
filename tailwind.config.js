/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2680EB',
                accent: '#FFE600',
            },
            fontFamily: {
                mono: ['"Share Tech Mono"', 'monospace'],
            },
        }
    },
    plugins: [],
    safelist: [
        'bg-cyan-300',
        'bg-purple-400',
        'bg-orange-400',
        'bg-red-400',
        'bg-pink-400',
        'bg-emerald-400',
        'bg-teal-400',
        'bg-fuchsia-400',
        'text-cyan-300',
        'text-purple-400',
        'text-orange-400',
        'text-red-400',
        'text-pink-400',
        'text-emerald-400',
        'text-teal-400',
        'text-fuchsia-400',
        'border-cyan-300',
        'border-purple-400',
        'border-orange-400',
        'border-red-400',
        'border-pink-400',
        'border-emerald-400',
        'border-teal-400',
        'border-fuchsia-400',
    ]
} 