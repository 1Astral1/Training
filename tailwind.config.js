/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '0.75rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        },
        extend: {
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
};
