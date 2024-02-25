import type { Config } from "tailwindcss";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    fontFamily: { montserrat: ["montserrat-alt"], dm_sans: ["DM Sans"] },
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
        "1rem",
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
        "3rem",
        {
          lineHeight: "3.5rem",
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
