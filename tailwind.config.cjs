/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#17202A",
      secondary: "#ecc94b",
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      stone: colors.stone,
      blue: colors.blue,
      green: colors.green,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      midnight: "#0F0A0A",
      twilight: "#0F2021",
      dusk: "#0F3538",
      cloud: "#496767",
      fog: "#87A19E",
      radiance: "#FF6600",
      warmth: "#FF9200",
      shine: "#FFBE00",
      gleam: "#F8E08E",
      bright: "#FAFAF0",
    },
    extend: {
      translate: ["dark"],
      animation: {
        'skew-scroll': 'skew-scroll 20s linear infinite',
      },
    },
      keyframes: {
        'skew-scroll': {
          '0%': {
            transform: 'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)',
          },
          '100%': {
            transform:
              'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)',
          },
        },
      },
  },
  plugins: [require("flowbite/plugin")],
};
