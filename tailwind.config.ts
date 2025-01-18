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

      // 질의응답 완료 페이지 애니메이션
      keyframes: {
        growAndRotate: {
          '0%': { transform: 'scale(0) rotate(180deg)', filter: 'none' },
          '30%': { transform: 'scale(1) rotate(0deg)', filter: 'none' },
          '47%': { transform: 'scale(1) rotate(0deg)', filter: 'none'},
          '48%': { transform: 'scale(1) rotate(0deg)', filter: 'brightness(0) invert(1)'},
          '100%': { transform: 'scale(1) rotate(0deg)', filter: 'brightness(0) invert(1)'},
        },
        revealBackground : {
          '0%' : { transform: 'scale(0.2)', opacity: '0'},
          '45%' : { transform: 'scale(0.2)', opacity: '0' },
          '60%': { transform: 'scale(1)', opacity: '1'},
          '100%': { transform: 'scale(1)', opacity: '1'},
        }
      },
      animation: {
        growAndRotate: 'growAndRotate 2.0s ease-in-out',
        revealBackground: 'revealBackground 2.0s ease-in-out forwards', 
      },


    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // 다크모드 제거하고 라이트모드만 활성화
  },
} satisfies Config;

