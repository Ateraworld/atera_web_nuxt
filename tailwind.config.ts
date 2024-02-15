import type { Config } from "tailwindcss";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat-alt"],
      },
      colors: {
        accent: {
          "50": "#fef2f2",
          "100": "#fde6e6",
          "200": "#fad1d3",
          "300": "#f7aaaf",
          "400": "#f17b84",
          "500": "#e74c5c",
          "600": "#c92941",
          "700": "#b21e38",
          "800": "#951c36",
          "900": "#801b33",
          "950": "#470a17",
        },
        surface: {
          "50": "#f6f7f9",
          "100": "#eceff2",
          "200": "#d4dbe3",
          "300": "#aebdcb",
          "400": "#8399ad",
          "500": "#637d94",
          "600": "#4e647b",
          "700": "#405164",
          "800": "#384554",
          "900": "#323c48",
          "950": "#20262e",
        },
        back: {
          "50": "#f5f7fa",
          "100": "#eaeef4",
          "200": "#d0dae7",
          "300": "#a7bbd2",
          "400": "#7798b9",
          "500": "#567ba1",
          "600": "#426187",
          "700": "#374f6d",
          "800": "#30445c",
          "900": "#2c3b4e",
          "950": "#0d1117",
        },
      },
    },
  },
  plugins: [],
  content: [],
};
