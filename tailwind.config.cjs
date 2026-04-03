/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      primary: {
        ...colors.slate,
        DEFAULT: "#17202A",
      },
      secondary: {
        ...colors.amber,
        DEFAULT: "#ecc94b",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      stone: colors.stone,
      blue: colors.blue,
      green: colors.green,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      animation: {
        "skew-scroll": "skew-scroll 20s linear infinite",
      },
      keyframes: {
        "skew-scroll": {
          "0%": {
            transform:
              "rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)",
          },
          "100%": {
            transform:
              "rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)",
          },
        },
      },
    },
  },
};
