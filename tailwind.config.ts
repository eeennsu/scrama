import type { Config } from 'tailwindcss'

const config = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            screens: {
                '2xl': '1500px',
            },
        },
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                spaceGrotesk: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    orange: '#D48D3B',
                    green: '#3E9242',
                },
                'gray-200': '#EAECF0',
                'gray-300': 'D0D5DD',
                'gray-500': '#667085',
                'gray-600': '#475467',
                'gray-700': '#344054',
                'gray-900': '#101828',
                'white-100': '#F4F4F4',
                'white-200': '#EDF0F8',
                'black-100': '#3D4258',
                'neutral-black': '#23263B',
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            boxShadow: {
                xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
            },
            borderRadius: {
                sm: '2px',
                DEFAULT: '4px',
                md: '6px',
                lg: '8px',
                xl: '12px',
                '2xl': '16px',
                '3xl': '20px',
                full: '9999px',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config

export default config
