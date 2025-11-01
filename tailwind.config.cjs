/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff7f50',
        accent: '#98fb98',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
