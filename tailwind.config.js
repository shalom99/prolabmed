/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'landing1': "url('/landing1.webp')",
        'landing2': "url('/landing2.webp')",
        'lab1': "url('/gallery/lab1.webp')",
        'lab2': "url('/gallery/lab2.webp')",
        'lab3': "url('/gallery/lab3.webp')",
        'person1': "url('/gallery/person1.webp')",
        'person2': "url('/gallery/person2.webp')",
        'person3': "url('/gallery/person3.webp')",
        'carehealth': "url('/hmo/carehealth.webp')",
        'getwell': "url('/hmo/getwell.webp')",
        'inlife': "url('/hmo/inlife.webp')",
        'wellcare': "url('/hmo/wellcare.webp')",        
      },
      colors: {
        'primarybg': '#e2dfd8',
        'darkerbg':'#CCC3AA',
        'primarytext': '#1d3532',
        'light': '#C4FCF0',
        'dark': '#4C4637' ,
        'accent': '#A79017'


      }
    },
  },
  plugins: [],
}
