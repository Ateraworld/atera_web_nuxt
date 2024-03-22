import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: "class",

  theme: {
    fontFamily: {
      montserrat: ["montserrat-alt"],
      dm_sans: ["DM Sans"],
      ubuntu: ["Ubuntu"],
      poppins: ["Poppins"],
    },
    fontSize: {
      label: [
        "0.75rem",
        {
          lineHeight: "1em",
          letterSpacing: "-0.005em",
          fontWeight: "400",
        },
      ],
      body: [
        "1.05rem",
        {
          lineHeight: "1.35rem",
          letterSpacing: "-0.005em",
          fontWeight: "500",
        },
      ],
      subtitle: [
        "1.75rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.015em",
          fontWeight: "700",
        },
      ],
      title: [
        "2.9rem",
        {
          lineHeight: "3.25rem",
          letterSpacing: "-0.025em",
          fontWeight: "700",
        },
      ],
    },

    colors: ({ colors }) => ({
      accent: "rgba(var(--accent))",
      background: "rgba(var(--background))",
      outline: "rgba(var(--outline))",
      surface: "rgba(var(--surface))",
      neutral: "rgba(var(--neutral))",
      transparent: "rgba(0, 0, 0, 0)",
      yellow: colors.yellow,
      sky: colors.sky,
      purple: colors.purple,
    }),
  },
  plugins: [],
  content: [],
};
