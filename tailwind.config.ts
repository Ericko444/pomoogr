// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
    theme: {
        extend: {
            colors: { brand: 'oklch(62% 0.19 265)' },
            fontFamily: {
                'press-start': ['"Press Start 2P"', 'cursive'],
            },
        },
    },
    plugins: [],
} satisfies Config
