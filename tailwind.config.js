import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                jick: {
                    "50": '#F7869D',
                    "100": '#F6738E',
                    "200": '#F44D6E',
                    "300": '#F1274F',
                    "400": '#E00E39',
                    "500": '#BA0C2F',
                    "600": '#850922',
                    "700": '#510514',
                    "800": '#1C0207',
                    "900": '#000000'
                },
                secondary: {
                    "50": '#BBC2C8',
                    "100": '#B0B8BF',
                    "200": '#99A4AC',
                    "300": '#83909A',
                    "400": '#6D7C87',
                    "500": '#5B6770',
                    "600": '#424B51',
                    "700": '#292E32',
                    "800": '#101213',
                    "900": '#000000'
                  },
            }
        },
    },

    plugins: [forms, "flowbite/plugin"],
};
