import type { Config } from "tailwindcss";

const colors = {
  careerForMe: {
    main: "#6D72FF",
    mainMedium: "#979AED",
    red: "#FF4238",
    redMedium: "#FF8E88",
    gray01: "#F4F4F4",
  },
  gray: {
    dark: "#737373",
    medium: "#B2B2B2",
    light: "#D2D2D2",
  },
};

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        careerForMe: {
          main: colors.careerForMe.main,
          mainMedium: colors.careerForMe.mainMedium,
          red: colors.careerForMe.red,
          redMedium: colors.careerForMe.redMedium,
          gray01: colors.careerForMe.gray01,
        },
        gray: {
          dark: colors.gray.dark,
          medium: colors.gray.medium,
          light: colors.gray.light,
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
