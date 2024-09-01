import flowbitePlugin from "flowbite/plugin";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf5ff",
          100: "#f4e9fe",
          200: "#ead6fe",
          300: "#dab6fc",
          400: "#c387f9",
          500: "#ac59f3",
          600: "#9a3de6",
          700: "#8226ca",
          800: "#6e24a5",
          900: "#5b1f84",
          950: "#3d0962",
        },
        secondary: {
          50: "#fcfcea",
          100: "#f6f8c9",
          200: "#f3f295",
          300: "#ebe559",
          400: "#e6d83d",
          500: "#d4bd1e",
          600: "#b79617",
          700: "#926e16",
          800: "#79571a",
          900: "#68481b",
          950: "#3c270c",
        },
      },
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.5s ease-in-out",
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [flowbitePlugin, require("@tailwindcss/typography")],
} as Config;
