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
        accent: "rgba(var(--accent))",
        background: "rgba(var(--background))",
        outline: "rgba(var(--outline))",
        surface: "rgba(var(--surface))",
        text: "rgba(var(--text))",
      },
    },
  },
  plugins: [],
  content: [],
};
