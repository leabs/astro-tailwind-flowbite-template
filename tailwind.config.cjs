/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fill: ({ theme }) => ({
      indigo: theme("colors.blue"),
    }),
    extend: {
      translate: ["dark"],
    },
  },
};
